import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';

const tabs = [
  { id: 'org-chart-tab', label: 'Org Chart' },
  { id: 'directory-tab', label: 'Directory' },
];

const initialEmployees = [
  {
    id: 'EMP-10042',
    firstName: 'john',
    name: 'John Doe',
    initials: 'JD',
    email: 'john.doe@company.com',
    designation: 'Sr. Software Engineer',
    department: 'Engineering',
    reportingTo: 'Sarah Mitchell',
    status: 'Active',
    avatarGradient: 'linear-gradient(135deg,#0D9488,#14B8A6)',
    deptBadge: 'blue',
  },
  {
    id: 'EMP-10043',
    firstName: 'amit',
    name: 'Amit Sharma',
    initials: 'AS',
    email: 'amit.sharma@company.com',
    designation: 'Software Engineer',
    department: 'Engineering',
    reportingTo: 'Sarah Mitchell',
    status: 'Active',
    avatarGradient: 'linear-gradient(135deg,#059669,#10B981)',
    deptBadge: 'blue',
  },
  {
    id: 'EMP-10044',
    firstName: 'priya',
    name: 'Priya Nair',
    initials: 'PN',
    email: 'priya.nair@company.com',
    designation: 'UI/UX Designer',
    department: 'Engineering',
    reportingTo: 'Sarah Mitchell',
    status: 'Active',
    avatarGradient: 'linear-gradient(135deg,#BE185D,#EC4899)',
    deptBadge: 'blue',
  },
  {
    id: 'EMP-10045',
    firstName: 'rahul',
    name: 'Rahul Singh',
    initials: 'RS',
    email: 'rahul.singh@company.com',
    designation: 'Product Manager',
    department: 'Product',
    reportingTo: 'Vikram Rao',
    status: 'Inactive',
    avatarGradient: 'linear-gradient(135deg,#B45309,#F59E0B)',
    deptBadge: 'purple',
  },
  {
    id: 'EMP-10046',
    firstName: 'neha',
    name: 'Neha Joshi',
    initials: 'NJ',
    email: 'neha.joshi@company.com',
    designation: 'HR Executive',
    department: 'HR',
    reportingTo: 'Anita Patel',
    status: 'Active',
    avatarGradient: 'linear-gradient(135deg,#7C3AED,#8B5CF6)',
    deptBadge: 'gray',
  },
];

const departments = ['', 'Engineering', 'Sales', 'HR', 'Finance', 'Product'];
const statuses = ['', 'Active', 'Inactive'];
const states = ['', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Delhi', 'Telangana', 'Gujarat', 'Rajasthan', 'West Bengal', 'Other'];
const banks = ['', 'HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'Punjab National Bank', 'Bank of Baroda', 'Canara Bank', 'Other'];
const documentTypes = [
  { label: 'Aadhaar Card', sub: 'Govt. issued ID', icon: '▣', bg: '#E0F2FE', color: '#0EA5E9' },
  { label: 'PAN Card', sub: 'Income tax ID', icon: '▤', bg: '#FEF3C7', color: '#D97706' },
  { label: 'Passport', sub: 'Travel document', icon: '▦', bg: '#EDE9FE', color: '#7C3AED' },
  { label: 'Driving Licence', sub: 'Driving ID proof', icon: '▭', bg: '#D1FAE5', color: '#059669' },
  { label: 'Voter ID', sub: 'Election card', icon: '☑', bg: '#FCE7F3', color: '#DB2777' },
  { label: 'Degree Certificate', sub: 'Graduation / PG', icon: '◇', bg: '#CCFBF1', color: '#0D9488' },
  { label: 'Marksheet', sub: '10th / 12th / grad', icon: '▧', bg: '#DBEAFE', color: '#2563EB' },
  { label: 'Experience Letter', sub: 'Previous employer', icon: '▥', bg: '#FFEDD5', color: '#C2410C' },
  { label: 'Offer Letter', sub: 'Current/previous offer', icon: '✉', bg: '#F1F5F9', color: '#475569' },
  { label: 'Other Document', sub: 'Miscellaneous', icon: '□', bg: '#F8FAFC', color: '#64748B' },
];
const avatarGradients = [
  'linear-gradient(135deg,#0D9488,#14B8A6)',
  'linear-gradient(135deg,#059669,#10B981)',
  'linear-gradient(135deg,#BE185D,#EC4899)',
  'linear-gradient(135deg,#B45309,#F59E0B)',
  'linear-gradient(135deg,#7C3AED,#8B5CF6)',
  'linear-gradient(135deg,#2563EB,#38BDF8)',
];

const defaultAddEmployeeForm = {
  firstName: '',
  middleName: '',
  lastName: '',
  dob: '',
  gender: '',
  nationality: '',
  bloodGroup: '',
  maritalStatus: 'Single',
  mobile: '',
  altMobile: '',
  emergencyContact: '',
  emergencyName: '',
  emergencyRelation: '',
  currFlat: '',
  currBuilding: '',
  currStreet: '',
  currLandmark: '',
  currCity: '',
  currState: '',
  currPin: '',
  currCountry: 'India',
  sameAsCurrent: false,
  permFlat: '',
  permBuilding: '',
  permStreet: '',
  permLandmark: '',
  permCity: '',
  permState: '',
  permPin: '',
  permCountry: 'India',
  bankHolderName: '',
  bankName: '',
  accountNumber: '',
  ifsc: '',
  passportNumber: '',
  passportIssue: '',
  passportExpiry: '',
  workEmail: '',
  designation: '',
  department: '',
  reportingTo: '',
  status: 'Active',
};

function PeopleTabs({ activeTab, onChange }) {
  return (
    <div className="tabs" id="peopleTabs">
      {tabs.map((tab) => (
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

function AddIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function SectionTitle({ tone = 'primary', icon, title, optional }) {
  const bgMap = {
    primary: '#F0FDFA',
    accent: '#F0F9FF',
    warning: '#FFFBEB',
    purple: '#EDE9FE',
  };
  const strokeMap = {
    primary: '#0D9488',
    accent: '#0EA5E9',
    warning: '#D97706',
    purple: '#7C3AED',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <div style={{ width: 26, height: 26, borderRadius: 6, background: bgMap[tone], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon || <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={strokeMap[tone]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg>}
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: 0.1 }}>
        {title} {optional ? <span style={{ fontSize: 11, fontWeight: 400, color: 'var(--text-tertiary)' }}>(Optional)</span> : null}
      </span>
    </div>
  );
}

function FieldError({ children, show }) {
  return <span className={`field-error ${show ? 'show' : ''}`}>{children}</span>;
}

function FormInput({ label, required, error, children, style }) {
  return (
    <div className="form-group" style={style}>
      <div className="form-label">
        {label} {required ? <span style={{ color: 'var(--danger)' }}>*</span> : null}
      </div>
      {children}
      {error ? <FieldError show>{error}</FieldError> : null}
    </div>
  );
}

function normalizeText(value) {
  return String(value || '').trim();
}

function initialsFor(name) {
  return normalizeText(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('') || 'NE';
}

function firstNameFor(name) {
  return normalizeText(name).split(/\s+/)[0]?.toLowerCase() || '';
}

function badgeForDepartment(department) {
  if (department === 'Engineering') return 'blue';
  if (department === 'Product') return 'purple';
  if (department === 'HR') return 'gray';
  if (department === 'Finance') return 'amber';
  if (department === 'Sales') return 'green';
  return 'gray';
}

function nextEmployeeId(employees) {
  const maxNumeric = employees.reduce((max, employee) => {
    const numeric = Number(String(employee.id || '').replace(/\D/g, ''));
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 10046);
  return `EMP-${maxNumeric + 1}`;
}

function employeeFromAddForm(form, employees) {
  const name = [form.firstName, form.middleName, form.lastName].map(normalizeText).filter(Boolean).join(' ');
  const index = employees.length % avatarGradients.length;
  return {
    id: nextEmployeeId(employees),
    firstName: firstNameFor(name),
    name,
    initials: initialsFor(name),
    email: normalizeText(form.workEmail).toLowerCase(),
    designation: normalizeText(form.designation),
    department: normalizeText(form.department),
    reportingTo: normalizeText(form.reportingTo) || '—',
    status: normalizeText(form.status) || 'Active',
    avatarGradient: avatarGradients[index],
    deptBadge: badgeForDepartment(form.department),
  };
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeText(email));
}

function validateAddForm(form) {
  const errors = {};
  if (!normalizeText(form.firstName)) errors.firstName = 'First name is required.';
  if (!normalizeText(form.lastName)) errors.lastName = 'Last name is required.';
  if (!form.dob) errors.dob = 'Please select a valid date of birth.';
  if (!normalizeText(form.mobile)) errors.mobile = 'Mobile number is required.';
  if (!normalizeText(form.emergencyContact)) errors.emergencyContact = 'Emergency contact is required.';
  if (!normalizeText(form.currFlat)) errors.currFlat = 'Flat / Unit No. is required.';
  if (!normalizeText(form.currBuilding)) errors.currBuilding = 'Building / Society name is required.';
  if (!normalizeText(form.currStreet)) errors.currStreet = 'Street / Area is required.';
  if (!normalizeText(form.currCity)) errors.currCity = 'City is required.';
  if (!normalizeText(form.currState)) errors.currState = 'Please select a state.';
  if (!/^\d{6}$/.test(normalizeText(form.currPin))) errors.currPin = 'Enter a valid 6-digit PIN code.';
  if (!normalizeText(form.bankHolderName)) errors.bankHolderName = 'Account holder name is required.';
  if (!normalizeText(form.bankName)) errors.bankName = 'Please select a bank.';
  if (!/^\d{9,20}$/.test(normalizeText(form.accountNumber))) errors.accountNumber = 'Enter a valid account number.';
  if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(normalizeText(form.ifsc).toUpperCase())) errors.ifsc = 'Enter a valid 11-character IFSC code.';
  if (normalizeText(form.passportNumber) && !/^[A-Z0-9]{6,12}$/i.test(normalizeText(form.passportNumber))) errors.passportNumber = 'Enter a valid passport number (6-12 characters).';
  if (form.passportIssue && form.passportIssue > new Date().toISOString().slice(0, 10)) errors.passportIssue = 'Issue date cannot be in the future.';
  if (form.passportIssue && form.passportExpiry && form.passportExpiry <= form.passportIssue) errors.passportExpiry = 'Expiry date must be after issue date.';
  if (!validateEmail(form.workEmail)) errors.workEmail = 'A valid work email is required.';
  if (!normalizeText(form.designation)) errors.designation = 'Designation is required.';
  if (!normalizeText(form.department)) errors.department = 'Please select a department.';
  return errors;
}

function validateEditForm(form) {
  const errors = {};
  if (!normalizeText(form.name)) errors.name = 'Full name is required.';
  if (!validateEmail(form.email)) errors.email = 'A valid work email is required.';
  if (!normalizeText(form.designation)) errors.designation = 'Designation is required.';
  if (!normalizeText(form.department)) errors.department = 'Please select a department.';
  return errors;
}

function AddEmployeeModal({ open, form, errors, documents, selectedDocType, onClose, onChange, onCopyAddress, onSelectDocType, onAddDocument, onRemoveDocument, onSubmit }) {
  const fileInputRef = useRef(null);
  if (!open) return null;

  const update = (key) => (event) => onChange(key, event.target.value);
  const upperUpdate = (key) => (event) => onChange(key, event.target.value.toUpperCase());
  const handleFile = (file) => {
    if (!file || !selectedDocType) return;
    onAddDocument(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div
      id="addEmployeeModal"
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(3px)', padding: '20px 16px', overflowY: 'auto' }}
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: 800, boxShadow: 'var(--shadow-lg)', position: 'relative', margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', borderBottom: '1px solid var(--border)', background: 'var(--primary)', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'white', letterSpacing: -0.1 }}>Add New Employee</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 1 }}>Fill in the personal details for the new employee</div>
            </div>
          </div>
          <button type="button" onClick={onClose} style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'white', transition: 'var(--ease)' }} aria-label="Close">✕</button>
        </div>

        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <SectionTitle title="Basic Information" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>} />
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <FormInput label="First Name" required error={errors.firstName}><input className={`form-input ${errors.firstName ? 'input-error' : ''}`} placeholder="Enter first name" maxLength="50" value={form.firstName} onChange={update('firstName')} /></FormInput>
              <FormInput label="Middle Name"><input className="form-input" placeholder="Enter middle name" maxLength="50" value={form.middleName} onChange={update('middleName')} /></FormInput>
              <FormInput label="Last Name" required error={errors.lastName}><input className={`form-input ${errors.lastName ? 'input-error' : ''}`} placeholder="Enter last name" maxLength="50" value={form.lastName} onChange={update('lastName')} /></FormInput>
            </div>
            <div className="form-grid" style={{ marginTop: 13, gridTemplateColumns: '1fr 1fr 1fr' }}>
              <FormInput label="Date of Birth" required error={errors.dob}><input className={`form-input ${errors.dob ? 'input-error' : ''}`} type="date" style={{ cursor: 'pointer' }} value={form.dob} onChange={update('dob')} /></FormInput>
              <FormInput label="Gender"><select className="form-input" value={form.gender} onChange={update('gender')}><option value="">— Select —</option><option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option></select></FormInput>
              <FormInput label="Nationality"><input className="form-input" placeholder="e.g. Indian" maxLength="50" value={form.nationality} onChange={update('nationality')} /></FormInput>
              <FormInput label="Blood Group"><select className="form-input" value={form.bloodGroup} onChange={update('bloodGroup')}><option value="">— Select —</option>{['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((bg) => <option key={bg}>{bg}</option>)}</select></FormInput>
              <div className="form-group" style={{ gridColumn: '1/-1' }}>
                <div className="form-label">Marital Status</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 6, flexWrap: 'wrap' }}>
                  {['Single', 'Married', 'Divorced', 'Widowed'].map((value) => (
                    <label key={value} style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer', fontSize: 12.5, color: 'var(--text-secondary)' }}>
                      <input type="radio" name="ae_maritalStatus" value={value} checked={form.maritalStatus === value} onChange={update('maritalStatus')} style={{ accentColor: 'var(--primary)', width: 14, height: 14, cursor: 'pointer' }} /> {value}
                    </label>
                  ))}
                </div>
              </div>
              <FormInput label="Mobile Number" required error={errors.mobile}><input className={`form-input ${errors.mobile ? 'input-error' : ''}`} placeholder="+91 XXXXX XXXXX" inputMode="tel" maxLength="15" value={form.mobile} onChange={update('mobile')} /></FormInput>
              <FormInput label="Alternate Mobile"><input className="form-input" placeholder="Enter alternate mobile" inputMode="tel" maxLength="15" value={form.altMobile} onChange={update('altMobile')} /></FormInput>
              <FormInput label="Emergency Contact Number" required error={errors.emergencyContact}><input className={`form-input ${errors.emergencyContact ? 'input-error' : ''}`} placeholder="Enter emergency contact" inputMode="tel" maxLength="15" value={form.emergencyContact} onChange={update('emergencyContact')} /></FormInput>
              <FormInput label="Emergency Contact Name"><input className="form-input" placeholder="Name of emergency contact" maxLength="80" value={form.emergencyName} onChange={update('emergencyName')} /></FormInput>
              <FormInput label="Relationship"><select className="form-input" value={form.emergencyRelation} onChange={update('emergencyRelation')}><option value="">— Select —</option>{['Spouse', 'Parent', 'Sibling', 'Child', 'Friend', 'Other'].map((v) => <option key={v}>{v}</option>)}</select></FormInput>
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border-subtle)' }} />

          <div>
            <SectionTitle tone="accent" title="Address Details" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>} />
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 8 }}>Current Address</div>
            <AddressGrid prefix="curr" form={form} errors={errors} onChange={onChange} required />
            <div style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.7 }}>Permanent Address</div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 12, color: 'var(--text-secondary)' }}>
                  <input type="checkbox" checked={form.sameAsCurrent} onChange={(event) => onCopyAddress(event.target.checked)} style={{ accentColor: 'var(--primary)', width: 13, height: 13, cursor: 'pointer' }} />
                  <span>Same as current address</span>
                </label>
              </div>
              <AddressGrid prefix="perm" form={form} errors={{}} onChange={onChange} disabled={form.sameAsCurrent} />
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border-subtle)' }} />

          <div>
            <SectionTitle tone="warning" title="Bank Details" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>} />
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <FormInput label="Account Holder Name" required error={errors.bankHolderName}><input className={`form-input ${errors.bankHolderName ? 'input-error' : ''}`} placeholder="Enter account holder name" maxLength="80" value={form.bankHolderName} onChange={update('bankHolderName')} /></FormInput>
              <FormInput label="Bank Name" required error={errors.bankName}><select className={`form-input ${errors.bankName ? 'input-error' : ''}`} value={form.bankName} onChange={update('bankName')}>{banks.map((bank) => <option key={bank || 'blank'} value={bank}>{bank || '— Select Bank —'}</option>)}</select></FormInput>
              <FormInput label="Account Number" required error={errors.accountNumber}><input className={`form-input ${errors.accountNumber ? 'input-error' : ''}`} placeholder="Enter account number" style={{ fontFamily: 'var(--mono)', letterSpacing: 0.5 }} maxLength="20" autoComplete="off" value={form.accountNumber} onChange={update('accountNumber')} /></FormInput>
              <FormInput label="IFSC Code" required error={errors.ifsc}><input className={`form-input ${errors.ifsc ? 'input-error' : ''}`} placeholder="e.g. HDFC0001234" style={{ fontFamily: 'var(--mono)', letterSpacing: 0.5, textTransform: 'uppercase' }} maxLength="11" value={form.ifsc} onChange={upperUpdate('ifsc')} /></FormInput>
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border-subtle)' }} />

          <div>
            <SectionTitle tone="purple" title="Passport Details" optional icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M8 12h8" /><path d="M8 8h8" /><path d="M8 16h4" /></svg>} />
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <FormInput label="Passport Number" error={errors.passportNumber}><input className={`form-input ${errors.passportNumber ? 'input-error' : ''}`} placeholder="e.g. A1234567" maxLength="12" value={form.passportNumber} onChange={upperUpdate('passportNumber')} /></FormInput>
              <FormInput label="Issue Date" error={errors.passportIssue}><input className={`form-input ${errors.passportIssue ? 'input-error' : ''}`} type="date" style={{ cursor: 'pointer' }} value={form.passportIssue} onChange={update('passportIssue')} /></FormInput>
              <FormInput label="Expiry Date" error={errors.passportExpiry}><input className={`form-input ${errors.passportExpiry ? 'input-error' : ''}`} type="date" style={{ cursor: 'pointer' }} value={form.passportExpiry} onChange={update('passportExpiry')} /></FormInput>
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border-subtle)' }} />

          <div id="ae_docUploadSection">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <SectionTitle tone="accent" title="Document Upload" optional icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>} />
              <button type="button" className="ae-add-doc-btn" onClick={() => onSelectDocType(selectedDocType ? '' : 'picker')}><AddIcon /> Add Document</button>
            </div>
            {selectedDocType === 'picker' ? (
              <div id="ae_docPicker" style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '14px 16px', marginBottom: 14 }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>Choose Document Type</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 8 }}>
                  {documentTypes.map((docType) => (
                    <button
                      key={docType.label}
                      type="button"
                      className={`ae-doc-tile ${selectedDocType === docType.label ? 'selected' : ''}`}
                      onClick={() => onSelectDocType(docType.label)}
                    >
                      <span className="ae-doc-tile-icon" style={{ background: docType.bg, color: docType.color }}>{docType.icon}</span>
                      <span className="ae-doc-tile-copy">
                        <span className="ae-doc-tile-label">{docType.label}</span>
                        <span className="ae-doc-tile-sub">{docType.sub}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            {selectedDocType && selectedDocType !== 'picker' ? (
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11.5, color: 'var(--text-secondary)', marginBottom: 6 }}>Uploading: <strong style={{ color: 'var(--primary)' }}>{selectedDocType}</strong><button type="button" onClick={() => onSelectDocType('picker')} style={{ marginLeft: 8, fontSize: 10.5, color: 'var(--text-tertiary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Change</button></div>
                <div
                  className="ae-drop-zone"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => { event.preventDefault(); handleFile(event.dataTransfer.files?.[0]); }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 6 }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)' }}>Drop file here or <span style={{ color: 'var(--primary)', textDecoration: 'underline', cursor: 'pointer' }}>browse</span></div>
                  <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 3 }}>PDF, JPG, PNG · Max 5 MB per file</div>
                </div>
                <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={(event) => handleFile(event.target.files?.[0])} />
              </div>
            ) : null}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {documents.map((doc) => (
                <div key={doc.id} className="ae-doc-card">
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>{doc.type}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{doc.name} · {doc.size}</div>
                  </div>
                  <button type="button" onClick={() => onRemoveDocument(doc.id)} className="ae-doc-remove">Remove</button>
                </div>
              ))}
            </div>
            {documents.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'var(--bg)', border: '1.5px dashed var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5" style={{ marginBottom: 7 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>No documents added yet.</div>
                <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 2 }}>Click "Add Document" to upload ID proofs, certificates, and more.</div>
              </div>
            ) : null}
          </div>

          <div style={{ height: 1, background: 'var(--border-subtle)' }} />

          <div>
            <SectionTitle tone="primary" title="Job Details" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>} />
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <FormInput label="Work Email" required error={errors.workEmail}><input className={`form-input ${errors.workEmail ? 'input-error' : ''}`} placeholder="e.g. john.doe@company.com" type="email" maxLength="80" value={form.workEmail} onChange={update('workEmail')} /></FormInput>
              <FormInput label="Designation" required error={errors.designation}><input className={`form-input ${errors.designation ? 'input-error' : ''}`} placeholder="e.g. Software Engineer" maxLength="80" value={form.designation} onChange={update('designation')} /></FormInput>
              <FormInput label="Department" required error={errors.department}><select className={`form-input ${errors.department ? 'input-error' : ''}`} value={form.department} onChange={update('department')}>{departments.map((dept) => <option key={dept || 'blank'} value={dept}>{dept || '— Select Department —'}</option>)}</select></FormInput>
              <FormInput label="Reporting To"><input className="form-input" placeholder="Manager's name" maxLength="80" value={form.reportingTo} onChange={update('reportingTo')} /></FormInput>
              <FormInput label="Status"><select className="form-input" value={form.status} onChange={update('status')}><option>Active</option><option>Inactive</option></select></FormInput>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, paddingTop: 4, borderTop: '1px solid var(--border-subtle)', alignItems: 'center' }}>
            <button type="button" className="quick-btn primary" onClick={onSubmit} style={{ padding: '7px 20px', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Submit
            </button>
            <button type="button" className="quick-btn outline" onClick={onClose} style={{ padding: '7px 18px', fontSize: 12.5 }}>Cancel</button>
            <span style={{ fontSize: 11.5, color: 'var(--text-tertiary)', marginLeft: 4 }}>{Object.keys(errors).length ? 'Please fix the highlighted fields.' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressGrid({ prefix, form, errors, onChange, required = false, disabled = false }) {
  const key = (name) => `${prefix}${name}`;
  const update = (name) => (event) => onChange(key(name), event.target.value);
  return (
    <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
      <FormInput label="Flat / Unit No." required={required} error={errors[key('Flat')]}>
        <input className={`form-input ${errors[key('Flat')] ? 'input-error' : ''}`} placeholder="e.g. Flat 4B, Door No. 12" maxLength="60" value={form[key('Flat')]} onChange={update('Flat')} disabled={disabled} />
      </FormInput>
      <FormInput label="Building / Society / Apartment" required={required} error={errors[key('Building')]} style={{ gridColumn: '2/-1' }}>
        <input className={`form-input ${errors[key('Building')] ? 'input-error' : ''}`} placeholder="e.g. Sunrise Towers, Brigade Residency" maxLength="80" value={form[key('Building')]} onChange={update('Building')} disabled={disabled} />
      </FormInput>
      <FormInput label="Street / Area / Locality" required={required} error={errors[key('Street')]} style={{ gridColumn: '1/-1' }}>
        <input className={`form-input ${errors[key('Street')] ? 'input-error' : ''}`} placeholder="e.g. MG Road, Koramangala 5th Block" maxLength="100" value={form[key('Street')]} onChange={update('Street')} disabled={disabled} />
      </FormInput>
      <FormInput label="Landmark" style={{ gridColumn: '1/-1' }}>
        <input className="form-input" placeholder="e.g. Near Forum Mall" maxLength="100" value={form[key('Landmark')]} onChange={update('Landmark')} disabled={disabled} />
      </FormInput>
      <FormInput label="City" required={required} error={errors[key('City')]}>
        <input className={`form-input ${errors[key('City')] ? 'input-error' : ''}`} placeholder="Enter city" maxLength="50" value={form[key('City')]} onChange={update('City')} disabled={disabled} />
      </FormInput>
      <FormInput label="State" required={required} error={errors[key('State')]}>
        <select className={`form-input ${errors[key('State')] ? 'input-error' : ''}`} value={form[key('State')]} onChange={update('State')} disabled={disabled}>{states.map((state) => <option key={state || 'blank'} value={state}>{state || '— Select State —'}</option>)}</select>
      </FormInput>
      <FormInput label="PIN Code" required={required} error={errors[key('Pin')]}>
        <input className={`form-input ${errors[key('Pin')] ? 'input-error' : ''}`} placeholder="6-digit PIN" maxLength="6" style={{ fontFamily: 'var(--mono)' }} inputMode="numeric" value={form[key('Pin')]} onChange={update('Pin')} disabled={disabled} />
      </FormInput>
      <FormInput label="Country">
        <input className="form-input" maxLength="50" value={form[key('Country')]} onChange={update('Country')} disabled={disabled} />
      </FormInput>
    </div>
  );
}

function EditEmployeeModal({ open, employee, form, errors, onClose, onChange, onSubmit }) {
  if (!open || !employee) return null;
  const update = (key) => (event) => onChange(key, event.target.value);

  return (
    <div id="editEmployeeModal" style={{ position: 'fixed', inset: 0, zIndex: 9100, background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(3px)', overflowY: 'auto', padding: '24px 16px' }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', maxWidth: 720, margin: '0 auto', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--primary-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 7, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <EditIcon />
            </div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>Edit Employee</div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'var(--mono)' }}>{employee.id}</div>
            </div>
          </div>
          <button type="button" onClick={onClose} style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid var(--border)', background: 'var(--surface)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'var(--ease)' }} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <SectionTitle title="Basic Information" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>} />
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <FormInput label="Full Name" required error={errors.name}><input className={`form-input ${errors.name ? 'input-error' : ''}`} placeholder="e.g. John Doe" maxLength="100" value={form.name} onChange={update('name')} /></FormInput>
              <FormInput label="Work Email" required error={errors.email}><input className={`form-input ${errors.email ? 'input-error' : ''}`} placeholder="e.g. john.doe@company.com" type="email" maxLength="80" value={form.email} onChange={update('email')} /></FormInput>
            </div>
          </div>
          <div style={{ height: 1, background: 'var(--border-subtle)' }} />
          <div>
            <SectionTitle tone="accent" title="Work Details" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>} />
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <FormInput label="Designation" required error={errors.designation}><input className={`form-input ${errors.designation ? 'input-error' : ''}`} placeholder="e.g. Software Engineer" maxLength="80" value={form.designation} onChange={update('designation')} /></FormInput>
              <FormInput label="Department" required error={errors.department}><select className={`form-input ${errors.department ? 'input-error' : ''}`} value={form.department} onChange={update('department')}>{departments.map((dept) => <option key={dept || 'blank'} value={dept}>{dept || '— Select Department —'}</option>)}</select></FormInput>
              <FormInput label="Reporting To"><input className="form-input" placeholder="Manager's name" maxLength="80" value={form.reportingTo} onChange={update('reportingTo')} /></FormInput>
              <FormInput label="Status"><select className="form-input" value={form.status} onChange={update('status')}><option>Active</option><option>Inactive</option></select></FormInput>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, paddingTop: 4, borderTop: '1px solid var(--border-subtle)', alignItems: 'center' }}>
            <button type="button" className="quick-btn primary" onClick={onSubmit} style={{ padding: '7px 20px', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Save / Update
            </button>
            <button type="button" className="quick-btn outline" onClick={onClose} style={{ padding: '7px 18px', fontSize: 12.5 }}>Cancel</button>
            <span style={{ fontSize: 11.5, color: 'var(--text-tertiary)', marginLeft: 4 }}>{Object.keys(errors).length ? 'Please fix the highlighted fields.' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectoryTab({ isHR, onShowToast }) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState(defaultAddEmployeeForm);
  const [addErrors, setAddErrors] = useState({});
  const [documents, setDocuments] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', designation: '', department: '', reportingTo: '', status: 'Active' });
  const [editErrors, setEditErrors] = useState({});

  const filteredEmployees = useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    const deptValue = department.trim().toLowerCase();
    const statusValue = status.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesName = !searchValue || employee.firstName.startsWith(searchValue);
      const matchesDept = !deptValue || employee.department.toLowerCase() === deptValue;
      const matchesStatus = !statusValue || employee.status.toLowerCase() === statusValue;
      return matchesName && matchesDept && matchesStatus;
    });
  }, [employees, search, department, status]);

  useEffect(() => {
    if (!isHR) {
      setStatus('');
      setAddOpen(false);
      setEditingEmployee(null);
    }
  }, [isHR]);

  const handleAddEmployee = () => {
    if (!isHR) return;
    setAddForm(defaultAddEmployeeForm);
    setAddErrors({});
    setDocuments([]);
    setSelectedDocType('');
    setAddOpen(true);
  };

  const handleAddChange = (key, value) => {
    setAddForm((prev) => {
      const next = { ...prev, [key]: value };
      if (prev.sameAsCurrent && key.startsWith('curr')) {
        const suffix = key.slice(4);
        const permKey = "perm" + suffix;
        if (Object.prototype.hasOwnProperty.call(prev, permKey)) {
          next[permKey] = value;
        }
      }
      return next;
    });
    setAddErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleCopyAddress = (checked) => {
    setAddForm((prev) => ({
      ...prev,
      sameAsCurrent: checked,
      ...(checked ? {
        permFlat: prev.currFlat,
        permBuilding: prev.currBuilding,
        permStreet: prev.currStreet,
        permLandmark: prev.currLandmark,
        permCity: prev.currCity,
        permState: prev.currState,
        permPin: prev.currPin,
        permCountry: prev.currCountry,
      } : {}),
    }));
  };

  const handleAddDocument = (file) => {
    if (!file || !selectedDocType || selectedDocType === 'picker') return;
    const size = file.size >= 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(file.size / 1024))} KB`;
    setDocuments((prev) => [...prev, { id: `${Date.now()}-${file.name}`, type: selectedDocType, name: file.name, size }]);
    setSelectedDocType('');
  };

  const handleSubmitAdd = () => {
    if (!isHR) return;
    const errors = validateAddForm(addForm);
    setAddErrors(errors);
    if (Object.keys(errors).length) return;
    const newEmployee = employeeFromAddForm(addForm, employees);
    setEmployees((prev) => [...prev, newEmployee]);
    setAddOpen(false);
    setAddForm(defaultAddEmployeeForm);
    setDocuments([]);
    setSelectedDocType('');
    onShowToast?.(`Employee ${newEmployee.name} added successfully.`, 'success');
  };

  const handleEditEmployee = (employee) => {
    if (!isHR) return;
    setEditingEmployee(employee);
    setEditForm({
      name: employee.name,
      email: employee.email,
      designation: employee.designation,
      department: employee.department,
      reportingTo: employee.reportingTo === '—' ? '' : employee.reportingTo,
      status: employee.status,
    });
    setEditErrors({});
  };

  const handleEditChange = (key, value) => {
    setEditForm((prev) => ({ ...prev, [key]: value }));
    setEditErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmitEdit = () => {
    if (!isHR || !editingEmployee) return;
    const errors = validateEditForm(editForm);
    setEditErrors(errors);
    if (Object.keys(errors).length) return;
    const updatedName = normalizeText(editForm.name);
    setEmployees((prev) => prev.map((employee) => {
      if (employee.id !== editingEmployee.id) return employee;
      return {
        ...employee,
        firstName: firstNameFor(updatedName),
        name: updatedName,
        initials: initialsFor(updatedName),
        email: normalizeText(editForm.email).toLowerCase(),
        designation: normalizeText(editForm.designation),
        department: normalizeText(editForm.department),
        reportingTo: normalizeText(editForm.reportingTo) || '—',
        status: normalizeText(editForm.status) || 'Active',
        deptBadge: badgeForDepartment(editForm.department),
      };
    }));
    setEditingEmployee(null);
    onShowToast?.(`Employee ${updatedName} updated successfully.`, 'success');
  };

  return (
    <div id="directory-tab">
      <div className="card">
        <div className="section-header" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="card-title">Employee Directory</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              id="dirSearchInput"
              className="form-input"
              placeholder="Search by first name..."
              style={{ width: 200, fontSize: 12 }}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <select
              id="dirDeptFilter"
              className="form-input"
              style={{ width: 150, fontSize: 12 }}
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept || 'all'} value={dept}>{dept || 'All Departments'}</option>
              ))}
            </select>
            {isHR ? (
              <select
                id="dirStatusFilter"
                className="form-input"
                style={{ width: 120, fontSize: 12 }}
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                {statuses.map((statusValue) => (
                  <option key={statusValue || 'all'} value={statusValue}>{statusValue || 'All Status'}</option>
                ))}
              </select>
            ) : null}
            {isHR ? (
              <button
                id="addEmployeeBtn"
                type="button"
                className="quick-btn primary"
                onClick={handleAddEmployee}
                style={{ display: 'flex', whiteSpace: 'nowrap', gap: 5 }}
              >
                <AddIcon />
                Add Employee
              </button>
            ) : null}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Employee ID</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Reporting To</th>
              {isHR ? <th id="dirStatusTh">Status</th> : null}
              {isHR ? <th id="dirActionsHeader">Actions</th> : null}
            </tr>
          </thead>
          <tbody id="dirTableBody">
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                data-firstname={employee.firstName}
                data-dept={employee.department.toLowerCase()}
                data-status={employee.status.toLowerCase()}
                data-fullname={employee.name}
                data-email={employee.email}
                data-empid={employee.id}
                data-designation={employee.designation}
                data-reporting={employee.reportingTo}
              >
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: employee.avatarGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 600, color: 'white', flexShrink: 0 }}>
                      {employee.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-primary)' }}>{employee.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{employee.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-tertiary)' }}>{employee.id}</td>
                <td style={{ fontSize: 12.5 }}>{employee.designation}</td>
                <td><span className={`badge ${employee.deptBadge}`}>{employee.department}</span></td>
                <td style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>{employee.reportingTo}</td>
                {isHR ? (
                  <td className="dir-status-cell"><span className={`badge ${employee.status === 'Active' ? 'green' : 'gray'}`}>{employee.status}</span></td>
                ) : null}
                {isHR ? (
                  <td className="dir-action-cell">
                    <button
                      type="button"
                      className="dir-edit-btn"
                      title="Edit Employee"
                      onClick={() => handleEditEmployee(employee)}
                    >
                      <EditIcon />
                      Edit
                    </button>
                  </td>
                ) : null}
              </tr>
            ))}
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan={isHR ? 7 : 5} style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: '18px 11px' }}>
                  No employees found.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <AddEmployeeModal
        open={addOpen}
        form={addForm}
        errors={addErrors}
        documents={documents}
        selectedDocType={selectedDocType}
        onClose={() => setAddOpen(false)}
        onChange={handleAddChange}
        onCopyAddress={handleCopyAddress}
        onSelectDocType={setSelectedDocType}
        onAddDocument={handleAddDocument}
        onRemoveDocument={(id) => setDocuments((prev) => prev.filter((doc) => doc.id !== id))}
        onSubmit={handleSubmitAdd}
      />
      <EditEmployeeModal
        open={Boolean(editingEmployee)}
        employee={editingEmployee}
        form={editForm}
        errors={editErrors}
        onClose={() => setEditingEmployee(null)}
        onChange={handleEditChange}
        onSubmit={handleSubmitEdit}
      />
    </div>
  );
}

export function PeoplePage({ currentRole, onShowToast }) {
  const [activeTab, setActiveTab] = useState('org-chart-tab');
  const isHR = currentRole === 'hr';
  const orgChartHtml = useMemo(() => getOuterHtml('#page-people #org-chart-tab'), []);

  const safeTab = tabs.some((tab) => tab.id === activeTab) ? activeTab : 'org-chart-tab';

  useEffect(() => {
    if (safeTab !== 'org-chart-tab') return undefined;
    const id = window.setTimeout(() => {
      if (typeof window.drawOrgConnectors === 'function') {
        try { window.drawOrgConnectors(); } catch (e) {}
      }
    }, 80);
    return () => window.clearTimeout(id);
  }, [safeTab]);

  return (
    <div className="page active" id="page-people">
      <PeopleTabs activeTab={safeTab} onChange={setActiveTab} />
      <HtmlFragment html={orgChartHtml} style={{ display: safeTab === 'org-chart-tab' ? 'block' : 'none' }} />
      <div style={{ display: safeTab === 'directory-tab' ? 'block' : 'none' }}>
        <DirectoryTab isHR={isHR} onShowToast={onShowToast} />
      </div>
    </div>
  );
}
