import React, { useEffect, useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';
import { initLeavePage } from './pageInit';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:my-leave-tab|holidays-tab|leave-approval-tab|leaveTeamView|leaveTeamDropdownWrap|leaveSelectedChip)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue
        .replace(/display\s*:\s*none\s*;?/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

const leaveTabsBase = [
  { id: 'apply-tab', label: 'Apply Leave' },
  { id: 'my-leave-tab', label: 'My Leaves' },
  { id: 'holidays-tab', label: 'Holidays' },
];

function LeaveScopeTabs({ currentRole, scope, onChange, teamDropdownHtml, selectedChipHtml }) {
  if (!['manager', 'hr'].includes(currentRole)) return null;
  return (
    <div id="leaveScopeTabs" style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div className="tabs" style={{ marginBottom: 0 }}>
          <button type="button" className={`tab ${scope === 'me' ? 'active' : ''}`} data-scope="me" onClick={() => onChange('me')}>
            Me
          </button>
          <button type="button" className={`tab ${scope === 'team' ? 'active' : ''}`} data-scope="team" onClick={() => onChange('team')}>
            My Team
          </button>
        </div>
        <HtmlFragment html={teamDropdownHtml} style={{ display: scope === 'team' ? 'block' : 'none' }} />
        <HtmlFragment html={selectedChipHtml} style={{ display: scope === 'team' ? 'flex' : 'none' }} />
      </div>
    </div>
  );
}

function LeaveInnerTabs({ currentRole, activeTab, onChange }) {
  const tabs = ['manager', 'hr'].includes(currentRole)
    ? [...leaveTabsBase, { id: 'leave-approval-tab', label: 'Pending Approvals' }]
    : leaveTabsBase;
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button key={tab.id} type="button" className={`tab ${activeTab === tab.id ? 'active' : ''}`} onClick={() => onChange(tab.id)}>
          {tab.label}
          {tab.id === 'leave-approval-tab' ? (
            <span style={{ background: '#B91C1C', color: 'white', fontSize: 10, padding: '1px 6px', borderRadius: 8, marginLeft: 4, fontWeight: 500 }}>3</span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

function LeaveMeView({ currentRole }) {
  const [activeTab, setActiveTab] = useState('apply-tab');
  const balanceHtml = useMemo(() => getOuterHtml('#page-leave #leaveMeView .leave-type-grid'), []);
  const applyHtml = useMemo(() => getOuterHtml('#page-leave #apply-tab'), []);
  const myLeaveHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-leave #my-leave-tab')), []);
  const holidaysHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-leave #holidays-tab')), []);
  const approvalsHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-leave #leave-approval-tab')), []);

  return (
    <div id="leaveMeView">
      <HtmlFragment html={balanceHtml} />
      <LeaveInnerTabs currentRole={currentRole} activeTab={activeTab} onChange={setActiveTab} />
      <HtmlFragment html={applyHtml} style={{ display: activeTab === 'apply-tab' ? 'block' : 'none' }} />
      <HtmlFragment html={myLeaveHtml} style={{ display: activeTab === 'my-leave-tab' ? 'block' : 'none' }} />
      <HtmlFragment html={holidaysHtml} style={{ display: activeTab === 'holidays-tab' ? 'block' : 'none' }} />
      {['manager', 'hr'].includes(currentRole) ? (
        <div id="leaveApprovalTab" style={{ display: activeTab === 'leave-approval-tab' ? 'block' : 'none' }}>
          <HtmlFragment html={approvalsHtml} />
        </div>
      ) : null}
    </div>
  );
}

export function LeavePage({ currentRole }) {
  const [scope, setScope] = useState('me');
  const teamHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-leave #leaveTeamView')), []);
  const teamDropdownHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-leave #leaveTeamDropdownWrap')), []);
  const selectedChipHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-leave #leaveSelectedChip')), []);

  useEffect(() => {
    const id = window.setTimeout(() => initLeavePage(currentRole), 60);
    return () => window.clearTimeout(id);
  }, [currentRole]);

  useEffect(() => {
    const canUseTeam = ['manager', 'hr'].includes(currentRole);
    const meEl = document.getElementById('leaveMeView');
    const teamEl = document.getElementById('leaveTeamView');
    const dd = document.getElementById('leaveTeamDropdownWrap');
    const chip = document.getElementById('leaveSelectedChip');
    const prompt = document.getElementById('leaveTeamPrompt');
    const cards = document.getElementById('leaveTeamCards');
    const selected = window.selectedPerson && window.selectedPerson.leave;

    if (!canUseTeam) {
      if (meEl) meEl.style.display = '';
      if (teamEl) teamEl.style.display = 'none';
      if (dd) dd.style.display = 'none';
      if (chip) chip.style.display = 'none';
      return;
    }

    if (meEl) meEl.style.display = scope === 'me' ? '' : 'none';
    if (teamEl) teamEl.style.display = scope === 'team' ? '' : 'none';

    if (scope === 'team') {
      if (dd) dd.style.display = selected ? 'none' : 'block';
      if (chip) chip.style.display = selected ? 'inline-flex' : 'none';
      if (selected && typeof window.renderLeaveTeamData === 'function') {
        window.renderLeaveTeamData();
      } else {
        if (prompt) prompt.style.display = '';
        if (cards) cards.style.display = 'none';
      }
    } else {
      if (dd) dd.style.display = 'none';
      if (chip) chip.style.display = 'none';
    }
  }, [scope, currentRole]);

  return (
    <div className="page active" id="page-leave">
      <LeaveScopeTabs
        currentRole={currentRole}
        scope={scope}
        onChange={setScope}
        teamDropdownHtml={teamDropdownHtml}
        selectedChipHtml={selectedChipHtml}
      />
      <div style={{ display: scope === 'me' ? 'block' : 'none' }}>
        <LeaveMeView currentRole={currentRole} />
      </div>
      <HtmlFragment html={teamHtml} style={{ display: scope === 'team' ? 'block' : 'none' }} />
    </div>
  );
}
