import React from 'react';

function IconUser() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
function IconSettings() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>;
}
function IconMoon() {
  return <svg id="darkModeIcon-moon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
}
function IconSun() {
  return <svg id="darkModeIcon-sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
}
function IconLock() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
function IconDownload() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}
function IconLogout() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
}

export function ProfileDropdown({ user, open, onLogout, onToggleDarkMode, darkMode, onNavigate, onShowToast, onClose }) {
  const close = () => {
    if (onClose) onClose();
  };

  return (
    <div className={`profile-dropdown ${open ? 'show' : ''}`} id="profileDropdown">
      <div className="pd-header">
        <div className="pd-avatar" id="pdAvatar">{user.initials}</div>
        <div>
          <div className="pd-name" id="pdName">{user.name}</div>
          <div className="pd-role" id="pdRole">{user.role}</div>
          <div className="pd-emp" id="pdEmp">{user.empId}</div>
        </div>
      </div>
      <div className="pd-body">
        <div className="pd-item" onClick={() => { close(); onNavigate?.('profile'); }}>
          <span className="pd-icon"><IconUser /></span>View My Profile
        </div>
        <div className="pd-item" onClick={() => { close(); onShowToast?.('Settings coming soon', 'info'); }}>
          <span className="pd-icon"><IconSettings /></span>Account Settings
        </div>
        <div className="pd-item" onClick={() => { onToggleDarkMode?.(); close(); }} id="darkModeMenuItem">
          <span className="pd-icon">{darkMode ? <IconSun /> : <IconMoon />}</span>
          <span id="darkModeLabel">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
        <div className="pd-divider" />
        <div className="pd-item" onClick={() => { close(); onShowToast?.('Change password email sent', 'info'); }}>
          <span className="pd-icon"><IconLock /></span>Change Password
        </div>
        <div className="pd-item" onClick={() => { close(); onShowToast?.('Downloading payslip...', 'info'); }}>
          <span className="pd-icon"><IconDownload /></span>Download Latest Payslip
        </div>
        <div className="pd-divider" />
        <div className="pd-item pd-logout" onClick={onLogout}>
          <span className="pd-icon"><IconLogout /></span>Sign Out
        </div>
      </div>
    </div>
  );
}
