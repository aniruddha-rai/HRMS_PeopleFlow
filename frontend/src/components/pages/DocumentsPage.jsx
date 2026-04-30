import React, { useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:company-docs-tab|upload-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

const tabs = [
  { id: 'my-docs-tab', label: 'My Documents' },
  { id: 'company-docs-tab', label: 'Company Documents' },
  { id: 'upload-tab', label: 'Upload Document' },
];

export function DocumentsPage() {
  const [activeTab, setActiveTab] = useState('my-docs-tab');
  const sections = useMemo(() => ({
    'my-docs-tab': getOuterHtml('#page-documents #my-docs-tab'),
    'company-docs-tab': makeRootsVisible(getOuterHtml('#page-documents #company-docs-tab')),
    'upload-tab': makeRootsVisible(getOuterHtml('#page-documents #upload-tab')),
  }), []);

  return (
    <div className="page active" id="page-documents">
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" className={`tab ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <HtmlFragment key={tab.id} html={sections[tab.id]} style={{ display: activeTab === tab.id ? 'block' : 'none' }} />
      ))}
    </div>
  );
}
