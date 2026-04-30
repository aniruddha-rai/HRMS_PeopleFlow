import React, { useRef } from 'react';
import { NotificationBell } from './icons';
import { ProfileDropdown } from './ProfileDropdown';

export function Header({
  headerCopy,
  user,
  showNotif,
  onToggleNotif,
  showProfile,
  onToggleProfile,
  onLogout,
  onToggleDarkMode,
  darkMode,
  onNavigate,
  onShowToast,
  onCloseProfile,
}) {
  const wrapperRef = useRef(null);

  return (
    <header className="header">
      <div className="header-greeting" id="headerGreeting">
        <div className="header-greeting-main" id="headerGreetingMain">{headerCopy.main}</div>
        <div className="header-greeting-sub" id="headerGreetingSub">{headerCopy.sub}</div>
      </div>
      <div className="header-actions">
        <div className="icon-btn" onClick={onToggleNotif} title="Notifications" style={{ position: 'relative' }}>
          <NotificationBell />
          <span className="notif-dot" />
        </div>
        <div className="header-profile" id="headerProfileWrapper" style={{ position: 'relative' }} ref={wrapperRef}>
          <div className="header-user-group" onClick={onToggleProfile} tabIndex={0} role="button" title="My Profile">
            <div className="header-avatar" id="headerAvatar">{user.initials}</div>
            <div className="header-user-info" id="headerUserInfo">
              <div className="header-user-name" id="headerUserName">{user.name}</div>
              <div className="header-user-role" id="headerUserRole">{user.role}</div>
            </div>
          </div>
          <ProfileDropdown
            user={user}
            open={showProfile}
            onLogout={onLogout}
            onToggleDarkMode={onToggleDarkMode}
            darkMode={darkMode}
            onNavigate={onNavigate}
            onShowToast={onShowToast}
            onClose={onCloseProfile}
          />
        </div>
      </div>
    </header>
  );
}
