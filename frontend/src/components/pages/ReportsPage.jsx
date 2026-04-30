import React, { useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:custom-reports-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

const tabs = [
  { id: 'std-reports-tab', label: 'Standard Reports' },
  { id: 'custom-reports-tab', label: 'Custom Report Builder' },
];

export function ReportsPage() {
  const [activeTab, setActiveTab] = useState('std-reports-tab');
  const sections = useMemo(() => ({
    'std-reports-tab': getOuterHtml('#page-reports #std-reports-tab'),
    'custom-reports-tab': makeRootsVisible(getOuterHtml('#page-reports #custom-reports-tab')),
  }), []);

  return (
    <div className="page active" id="page-reports">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <HtmlFragment
          key={tab.id}
          html={sections[tab.id]}
          style={{ display: activeTab === tab.id ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
}
