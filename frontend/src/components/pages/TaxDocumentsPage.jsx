import React, { useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:taxdocs-itdecl-tab|taxdocs-poi-tab|taxdocs-ytd-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

const tabs = [
  { id: 'taxdocs-main-tab', label: 'All Documents' },
  { id: 'taxdocs-itdecl-tab', label: 'IT Declaration' },
  { id: 'taxdocs-poi-tab', label: 'Proof of Investment' },
  { id: 'taxdocs-ytd-tab', label: 'YTD Reports' },
];

export function TaxDocumentsPage() {
  const [activeTab, setActiveTab] = useState('taxdocs-main-tab');
  const sections = useMemo(() => ({
    'taxdocs-main-tab': getOuterHtml('#page-taxdocs #taxdocs-main-tab'),
    'taxdocs-itdecl-tab': makeRootsVisible(getOuterHtml('#page-taxdocs #taxdocs-itdecl-tab')),
    'taxdocs-poi-tab': makeRootsVisible(getOuterHtml('#page-taxdocs #taxdocs-poi-tab')),
    'taxdocs-ytd-tab': makeRootsVisible(getOuterHtml('#page-taxdocs #taxdocs-ytd-tab')),
  }), []);

  return (
    <div className="page active" id="page-taxdocs">
      <div className="tabs" style={{ marginBottom: 0 }}>
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
