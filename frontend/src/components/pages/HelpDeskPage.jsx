import React, { useEffect, useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

const tabs = [
  { id: 'my-tickets-tab', label: 'My Tickets (3)' },
  { id: 'raise-ticket-tab', label: 'Raise Ticket' },
  { id: 'admin-queue-tab', label: 'Admin Queue', itOnly: true },
];

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:raise-ticket-tab|admin-queue-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

function HelpDeskTabs({ currentRole, activeTab, onChange }) {
  const visibleTabs = tabs.filter((tab) => !tab.itOnly || currentRole === 'itadmin');
  return (
    <div className="tabs" id="helpdeskTabs">
      {visibleTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          id={tab.id === 'admin-queue-tab' ? 'adminQueueTab' : undefined}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.id === 'admin-queue-tab' ? (
            <>
              Admin Queue{' '}
              <span style={{ background: '#B91C1C', color: 'white', fontSize: 10, padding: '1px 6px', borderRadius: 8, marginLeft: 4, fontWeight: 500 }}>
                2
              </span>
            </>
          ) : (
            tab.label
          )}
        </button>
      ))}
    </div>
  );
}

export function HelpDeskPage({ currentRole }) {
  const [activeTab, setActiveTab] = useState('my-tickets-tab');
  const sections = useMemo(
    () => ({
      'my-tickets-tab': getOuterHtml('#page-helpdesk #my-tickets-tab'),
      'raise-ticket-tab': makeRootsVisible(getOuterHtml('#page-helpdesk #raise-ticket-tab')),
      'admin-queue-tab': makeRootsVisible(getOuterHtml('#page-helpdesk #admin-queue-tab')),
    }),
    [],
  );
  const editHdModalHtml = useMemo(() => getOuterHtml('#editHdModal'), []);

  const visibleTabs = tabs.filter((tab) => !tab.itOnly || currentRole === 'itadmin');
  const safeTab = visibleTabs.some((tab) => tab.id === activeTab) ? activeTab : visibleTabs[0]?.id || 'my-tickets-tab';

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (safeTab === 'my-tickets-tab' && typeof window.segFilterHD === 'function') {
        const openBtn = document.querySelector('#hdFilterSegment .task-seg-btn[data-hd-value="open"]');
        if (openBtn) window.segFilterHD('open', openBtn);
      }
    }, 80);
    return () => window.clearTimeout(id);
  }, [safeTab]);

  return (
    <div className="page active" id="page-helpdesk">
      <HelpDeskTabs currentRole={currentRole} activeTab={safeTab} onChange={setActiveTab} />
      {visibleTabs.map((tab) => (
        <HtmlFragment key={tab.id} html={sections[tab.id]} style={{ display: safeTab === tab.id ? 'block' : 'none' }} />
      ))}
      <HtmlFragment html={editHdModalHtml} />
    </div>
  );
}
