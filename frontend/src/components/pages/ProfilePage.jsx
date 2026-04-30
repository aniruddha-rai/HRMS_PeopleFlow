import React, { useEffect, useMemo, useState } from 'react';
import { getInnerHtml, getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

const profileTabs = [
  { id: 'personal-tab', label: 'Personal Details' },
  { id: 'family-tab', label: 'Family Details' },
  { id: 'job-tab', label: 'Job Details' },
  { id: 'history-tab', label: 'Employment History' },
];

function normalizeFamilyTabHtml(html) {
  if (!html) return '';
  return html.replace(
    /<div class="profile-section" style="margin-bottom:20px;">/,
    '<div class="profile-section" style="margin-bottom:20px;border-top:none;padding-top:0;margin-top:0;">'
  );
}

function splitName(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || '',
    lastName: parts.length > 1 ? parts.slice(1).join(' ') : '',
  };
}

function setInputValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value || '';
}

function getUserBankDetails(user) {
  const emailPrefix = String(user?.email || '').split('@')[0] || String(user?.name || '').toLowerCase().replace(/\s+/g, '.');
  return {
    holderName: user?.name || '',
    bankName: 'HDFC Bank',
    accountNumber: 'XXXX XXXX 4521',
    ifsc: 'HDFC0001234',
    upi: `${emailPrefix}@hdfcbank`,
  };
}

function ProfileHeader({ user }) {
  return (
    <div className="profile-header">
      <div className="profile-pic" id="profilePic">{user.initials}</div>
      <div>
        <div className="profile-name" id="profileName">{user.name}</div>
        <div className="profile-role" id="profileDept">{user.dept || user.role}</div>
        <div className="profile-tags">
          <span className="profile-tag" id="profileEmpId">{user.empId}</span>
          <span className="profile-tag">Bangalore</span>
          <span className="profile-tag" style={{ background: 'rgba(59,91,219,0.1)', borderColor: 'rgba(59,91,219,0.2)', color: 'var(--primary)' }}>Active</span>
        </div>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <button className="quick-btn outline" onClick={() => window.enablePersonalEdit?.()}>Edit Profile</button>
      </div>
    </div>
  );
}

function ProfileTabs({ activeTab, onChange }) {
  return (
    <div className="tabs">
      {profileTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function ProfilePanel({ activeTab }) {
  const sections = useMemo(
    () =>
      Object.fromEntries(
        profileTabs.map((tab) => {
          const raw = getInnerHtml(`#page-profile #${tab.id}`);
          return [tab.id, tab.id === 'family-tab' ? normalizeFamilyTabHtml(raw) : raw];
        }),
      ),
    [],
  );

  return (
    <>
      {profileTabs.map((tab) => (
        <HtmlFragment
          key={tab.id}
          id={tab.id}
          html={sections[tab.id]}
          style={{ display: activeTab === tab.id ? 'block' : 'none' }}
        />
      ))}
    </>
  );
}

export function ProfilePage({ user }) {
  const [activeTab, setActiveTab] = useState('personal-tab');
  const familyModalHtml = useMemo(() => getOuterHtml('#familyModal'), []);
  const empHistAdminModalHtml = useMemo(() => getOuterHtml('#empHistAdminModal'), []);

  useEffect(() => {
    if (typeof window.initPersonalTab === 'function') {
      const id = window.setTimeout(() => window.initPersonalTab(), 0);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, [activeTab]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const { firstName, lastName } = splitName(user?.name);
      const bank = getUserBankDetails(user);

      setInputValue('pd_firstName', firstName);
      setInputValue('pd_lastName', lastName);
      setInputValue('pd_bankHolderName', bank.holderName);
      setInputValue('pd_accountNumber', bank.accountNumber);
      setInputValue('pd_ifsc', bank.ifsc);

      const bankSelect = document.getElementById('pd_bankName');
      if (bankSelect) bankSelect.value = bank.bankName;
    }, 0);
    return () => window.clearTimeout(id);
  }, [activeTab, user]);

  useEffect(() => {
    window.__PF_PROFILE_SET_TAB = setActiveTab;

    const restoreAndBind = window.setTimeout(() => {
      if (typeof window.renderEmpHistTable === 'function' && activeTab === 'history-tab') {
        window.renderEmpHistTable();
      }
      if (typeof window.saveFamilyDetails === 'function' && !window.__pfWrappedSaveFamilyDetails) {
        const originalSave = window.saveFamilyDetails;
        window.saveFamilyDetails = function patchedSaveFamilyDetails() {
          const result = originalSave.apply(this, arguments);
          if (window.__PF_PROFILE_SET_TAB) {
            window.__PF_PROFILE_SET_TAB('family-tab');
          }
          return result;
        };
        window.__pfWrappedSaveFamilyDetails = true;
      }
    }, 0);

    return () => {
      window.clearTimeout(restoreAndBind);
      try { delete window.__PF_PROFILE_SET_TAB; } catch (e) {}
    };
  }, [activeTab]);

  return (
    <div className="page active" id="page-profile">
      <ProfileHeader user={user} />
      <div className="card employee-profile-card">
        <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />
        <ProfilePanel activeTab={activeTab} />
      </div>
      <HtmlFragment html={familyModalHtml} />
      <HtmlFragment html={empHistAdminModalHtml} />
    </div>
  );
}
