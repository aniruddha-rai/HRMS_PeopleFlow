import React, { useEffect, useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:salary-tab|payroll-history-tab|bank-details-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

function escapeAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getUserBankDetails(user) {
  const emailPrefix = String(user?.email || '').split('@')[0] || String(user?.name || '').toLowerCase().replace(/\s+/g, '.');
  return {
    holderName: user?.name || '',
    bankName: 'HDFC Bank',
    accountNumber: 'XXXX XXXX 4521',
    ifsc: 'HDFC0001234',
    branch: 'Koramangala, Bangalore',
    upi: `${emailPrefix}@hdfcbank`,
  };
}

function personalizeBankDetailsHtml(html, user) {
  if (!html) return '';
  const bank = getUserBankDetails(user);
  return html
    .replace(/>John Doe</g, `>${escapeAttr(bank.holderName)}<`)
    .replace(/value="John Doe"/g, `value="${escapeAttr(bank.holderName)}"`)
    .replace(/>john\.doe@hdfcbank</g, `>${escapeAttr(bank.upi)}<`)
    .replace(/value="john\.doe@hdfcbank"/g, `value="${escapeAttr(bank.upi)}"`);
}

const tabs = [
  { id: 'payslip-tab', label: 'Payslip' },
  { id: 'salary-tab', label: 'Salary Structure' },
  { id: 'payroll-history-tab', label: 'History' },
  { id: 'bank-details-tab', label: 'Bank Details' },
];

export function PayrollPage({ user }) {
  const [activeTab, setActiveTab] = useState(() => {
    const requested = typeof window !== 'undefined' ? window.__PF_PAYROLL_TARGET_TAB : '';
    return tabs.some((tab) => tab.id === requested) ? requested : 'payslip-tab';
  });
  const sections = useMemo(() => ({
    'payslip-tab': getOuterHtml('#page-payroll #payslip-tab'),
    'salary-tab': makeRootsVisible(getOuterHtml('#page-payroll #salary-tab')),
    'payroll-history-tab': makeRootsVisible(getOuterHtml('#page-payroll #payroll-history-tab')),
    'bank-details-tab': personalizeBankDetailsHtml(makeRootsVisible(getOuterHtml('#page-payroll #bank-details-tab')), user),
  }), [user]);

  useEffect(() => {
    const requested = window.__PF_PAYROLL_TARGET_TAB;
    if (tabs.some((tab) => tab.id === requested)) {
      setActiveTab(requested);
      try { delete window.__PF_PAYROLL_TARGET_TAB; } catch (e) {}
    }
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (activeTab === 'salary-tab' && typeof window.renderSalaryStructure === 'function') {
        window.renderSalaryStructure();
      }
      if (activeTab === 'payroll-history-tab' && typeof window.renderSalaryHistory === 'function') {
        window.renderSalaryHistory();
      }
      if (activeTab === 'bank-details-tab') {
        const bank = getUserBankDetails(user);
        const bankNameInput = document.getElementById('bankName');
        const bankAccNoInput = document.getElementById('bankAccNo');
        const bankAccNoConfirmInput = document.getElementById('bankAccNoConfirm');
        const bankIfscInput = document.getElementById('bankIfsc');
        const bankBranchInput = document.getElementById('bankBranch');
        const bankUpiInput = document.getElementById('bankUpi');
        const bankSelect = document.getElementById('bankBankName');
        if (bankNameInput) bankNameInput.value = bank.holderName;
        if (bankAccNoInput) bankAccNoInput.value = bank.accountNumber;
        if (bankAccNoConfirmInput) bankAccNoConfirmInput.value = '';
        if (bankIfscInput) bankIfscInput.value = bank.ifsc;
        if (bankBranchInput) bankBranchInput.value = bank.branch;
        if (bankUpiInput) bankUpiInput.value = bank.upi;
        if (bankSelect) bankSelect.value = bank.bankName;
      }
    }, 60);
    return () => window.clearTimeout(id);
  }, [activeTab, user]);

  return (
    <div className="page active" id="page-payroll">
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
