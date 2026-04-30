import React from 'react';
import { navSections } from '../../data/roleConfig';
import { NavIcon } from './icons';

function Logo() {
  return (
    <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg,#14B8A6,#0F766E)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 6px rgba(13,148,136,0.35)' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    </div>
  );
}

export function Sidebar({ currentPage, currentRole, onNavigate }) {
  const canSeeReports = ['hr', 'payroll', 'leadership'].includes(currentRole);
  const canSeeHrOnly = currentRole === 'hr';

  return (
    <nav className="sidebar" id="appSidebar">
      <div className="sidebar-logo">
        <Logo />
        <div>
          <div className="logo-text">PeopleFlow</div>
          <div className="logo-sub">HRMS Platform</div>
        </div>
      </div>

      {navSections.map((section) => (
        <div className="nav-section" key={section.title}>
          <div className="nav-section-title">{section.title}</div>
          {section.items
            .filter((item) => (!item.reportsOnly || canSeeReports) && (!item.hrOnly || canSeeHrOnly))
            .map((item) => {
              const active = currentPage === item.page;
              return (
                <div key={item.page} className={`nav-item ${active ? 'active' : ''}`} onClick={() => onNavigate(item.page)} data-page={item.page}>
                  <span className="nav-icon"><NavIcon name={item.icon} /></span>
                  <span>{item.label}</span>
                  {item.badge ? <span className={`nav-badge ${item.badge.className || ''}`}>{item.badge.text}</span> : null}
                </div>
              );
            })}
        </div>
      ))}
    </nav>
  );
}
