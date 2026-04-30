import React, { useEffect, useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

const tabs = [
  { id: 'my-requests-tab', label: 'My Requests' },
  { id: 'raise-request-tab', label: 'Raise Claim Request' },
  { id: 'approval-queue-tab', label: 'Approval Queue', hrOnly: true },
];

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:raise-request-tab|approval-queue-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

function ExpenseClaimTabs({ currentRole, activeTab, onChange }) {
  const visibleTabs = tabs.filter((tab) => !tab.hrOnly || currentRole === 'hr');
  return (
    <div className="tabs">
      {visibleTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          id={tab.id === 'approval-queue-tab' ? 'approvalQueueTab' : undefined}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function ExpenseClaimsPage({ currentRole }) {
  const [activeTab, setActiveTab] = useState('my-requests-tab');
  const sections = useMemo(
    () => ({
      'my-requests-tab': getOuterHtml('#page-requests #my-requests-tab'),
      'raise-request-tab': makeRootsVisible(getOuterHtml('#page-requests #raise-request-tab')),
      'approval-queue-tab': makeRootsVisible(getOuterHtml('#page-requests #approval-queue-tab')),
    }),
    [],
  );
  const editReqModalHtml = useMemo(() => getOuterHtml('#editReqModal'), []);

  const visibleTabs = tabs.filter((tab) => !tab.hrOnly || currentRole === 'hr');
  const safeTab = visibleTabs.some((tab) => tab.id === activeTab) ? activeTab : visibleTabs[0]?.id || 'my-requests-tab';

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (safeTab === 'my-requests-tab' && typeof window.filterMyRequests === 'function') {
        const pendingBtn = document.querySelector('#reqFilterSegment .task-seg-btn[data-value="pending"]');
        window.filterMyRequests('pending', pendingBtn);
      }
    }, 80);
    return () => window.clearTimeout(id);
  }, [safeTab]);

  return (
    <div className="page active" id="page-requests">
      <ExpenseClaimTabs currentRole={currentRole} activeTab={safeTab} onChange={setActiveTab} />
      {visibleTabs.map((tab) => (
        <HtmlFragment key={tab.id} html={sections[tab.id]} style={{ display: safeTab === tab.id ? 'block' : 'none' }} />
      ))}
      <HtmlFragment html={editReqModalHtml} />
    </div>
  );
}
