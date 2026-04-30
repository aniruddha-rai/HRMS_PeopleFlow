import React, { useEffect, useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';
import { initAttendancePage } from './pageInit';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:attendanceTeamView|attTeamDropdownWrap|attSelectedChip)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue
        .replace(/display\s*:\s*none\s*;?/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

function AttendanceScopeTabs({ currentRole, scope, onChange, teamDropdownHtml, selectedChipHtml }) {
  if (!['manager', 'hr'].includes(currentRole)) return null;
  return (
    <div id="attendanceScopeTabs" style={{ marginBottom: 14 }}>
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

export function AttendancePage({ currentRole }) {
  const [scope, setScope] = useState('me');
  const meHtml = useMemo(() => getOuterHtml('#page-attendance #attendanceMeView'), []);
  const teamHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-attendance #attendanceTeamView')), []);
  const teamDropdownHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-attendance #attTeamDropdownWrap')), []);
  const selectedChipHtml = useMemo(() => makeRootsVisible(getOuterHtml('#page-attendance #attSelectedChip')), []);

  useEffect(() => {
    const id = window.setTimeout(() => initAttendancePage(currentRole), 60);
    return () => window.clearTimeout(id);
  }, [currentRole]);

  useEffect(() => {
    const canUseTeam = ['manager', 'hr'].includes(currentRole);
    const meEl = document.getElementById('attendanceMeView');
    const teamEl = document.getElementById('attendanceTeamView');
    const dd = document.getElementById('attTeamDropdownWrap');
    const chip = document.getElementById('attSelectedChip');
    const prompt = document.getElementById('attTeamPrompt');
    const blocks = document.getElementById('attTeamBlocks');
    const selected = window.selectedPerson && window.selectedPerson.att;

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
      if (selected && typeof window.renderAttTeamData === 'function') {
        window.renderAttTeamData();
      } else {
        if (prompt) prompt.style.display = '';
        if (blocks) blocks.style.display = 'none';
      }
    } else {
      if (dd) dd.style.display = 'none';
      if (chip) chip.style.display = 'none';
    }
  }, [scope, currentRole]);

  return (
    <div className="page active" id="page-attendance">
      <AttendanceScopeTabs
        currentRole={currentRole}
        scope={scope}
        onChange={setScope}
        teamDropdownHtml={teamDropdownHtml}
        selectedChipHtml={selectedChipHtml}
      />
      <HtmlFragment html={meHtml} style={{ display: scope === 'me' ? 'block' : 'none' }} />
      <HtmlFragment html={teamHtml} style={{ display: scope === 'team' ? 'block' : 'none' }} />
    </div>
  );
}
