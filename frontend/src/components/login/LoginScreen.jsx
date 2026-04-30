import React from 'react';
import { roleConfig } from '../../data/roleConfig';

const roles = [
  ['employee', 'Employee'],
  ['manager', 'Manager'],
  ['hr', 'HR Admin'],
  ['payroll', 'Payroll Admin'],
  ['leadership', 'Leadership'],
  ['itadmin', 'IT Admin'],
];

function BrandIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function LoginScreen({ selectedRole, email, password, onRoleChange, onEmailChange, onPasswordChange, onLogin, darkMode }) {
  const cardStyle = darkMode
    ? {
        background: '#1E2130',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        border: '1px solid #2D3248',
      }
    : {
        background: '#FFFFFF',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        border: '1px solid rgba(13,148,136,0.12)',
      };

  const titleColor = darkMode ? 'var(--text-primary)' : 'var(--text-primary)';
  const subColor = darkMode ? 'var(--text-secondary)' : 'var(--text-secondary)';
  const inputStyle = darkMode
    ? {
        width: '100%',
        padding: '9px 12px',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '12.5px',
        fontFamily: 'var(--font)',
        outline: 'none',
        color: 'var(--text-primary)',
        background: 'var(--bg)',
      }
    : {
        width: '100%',
        padding: '9px 12px',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '12.5px',
        fontFamily: 'var(--font)',
        outline: 'none',
        color: 'var(--text-primary)',
        background: 'var(--bg)',
      };

  return (
    <div
      id="loginScreen"
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: 'radial-gradient(ellipse at 62% 50%, #0F7E85 0%, #095356 35%, #042C2C 65%, #010D0D 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '26px' }}>
        <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BrandIcon />
        </div>
        <span style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>PeopleFlow HRMS</span>
      </div>

      <div style={{ borderRadius: 'var(--radius-lg)', padding: '28px', width: '100%', maxWidth: '372px', ...cardStyle }} className="login-card">
        <div className="login-title" style={{ color: titleColor, marginBottom: '3px' }}>Sign in to your account</div>
        <div className="login-sub" style={{ color: subColor, marginBottom: '22px' }}>Enter your credentials to continue</div>

        <div className="login-form-group">
          <label className="login-label" style={{ color: subColor }}>Login ID / Email</label>
          <input className="login-input" id="loginEmail" type="text" placeholder="john.doe@company.com" value={email} onChange={(e) => onEmailChange(e.target.value)} style={inputStyle} />
        </div>

        <div className="login-form-group">
          <label className="login-label" style={{ color: subColor }}>Password</label>
          <input className="login-input" id="loginPassword" type="password" placeholder="Enter password" value={password} onChange={(e) => onPasswordChange(e.target.value)} style={inputStyle} />
        </div>

        <div className="login-roles">
          <div className="login-label" style={{ color: subColor, marginBottom: '10px' }}>Login as</div>
          <div className="login-role-chips" id="roleChips" style={{ justifyContent: 'flex-start' }}>
            {roles.map(([key, label]) => (
              <div
                key={key}
                className={`role-chip ${selectedRole === key ? 'selected' : ''}`}
                onClick={() => onRoleChange(key, roleConfig[key])}
                style={{ cursor: 'pointer' }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <button className="login-btn" onClick={onLogin}>Sign In</button>
        <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '10.5px', color: darkMode ? 'var(--text-secondary)' : '#94A3B8' }}>
          Select a role above — credentials are auto-filled
        </div>
      </div>
    </div>
  );
}
