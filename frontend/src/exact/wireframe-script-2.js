// ===================================================
// UNIFIED GREETING HEADER — Utility Functions
// ===================================================

/**
 * getGreeting()
 * Returns time-based salutation based on user's local clock.
 * 00:00–11:59 → "Good morning"
 * 12:00–16:59 → "Good afternoon"
 * 17:00–23:59 → "Good evening"
 */
function getGreeting() {
  var hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

/**
 * getFormattedDate()
 * Returns today's date formatted as: "Thursday, April 2, 2026"
 */
function getFormattedDate() {
  var now = new Date();
  var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
}

/**
 * updateGreetingHeader(firstName)
 * Reusable function: updates the unified header greeting
 * with a dynamic salutation, the user's first name, and today's date.
 * Call this after login and on role switch.
 * @param {string} firstName - User's first name (e.g. "John")
 */
function updateGreetingHeader(firstName) {
  var mainEl = document.getElementById('headerGreetingMain');
  var subEl  = document.getElementById('headerGreetingSub');
  if (mainEl) mainEl.textContent = getGreeting() + ', ' + firstName + '! 👋';
  if (subEl)  subEl.textContent  = "Here's what's happening at work today \u2014 " + getFormattedDate();
}

// ===== ROLE CONFIG =====
const roleConfig = {
  employee:   { name: 'John Doe',      role: 'Software Engineer',  initials: 'JD', empId: 'EMP-10042', dept: 'Senior Software Engineer · Engineering', dash: 'dash-employee',   isITAdmin: false, email: 'john.doe@company.com',     password: 'emp123' },
  manager:    { name: 'Sarah Mitchell', role: 'VP Engineering',     initials: 'SM', empId: 'EMP-10001', dept: 'VP Engineering · Leadership',            dash: 'dash-manager',    isITAdmin: false, email: 'sarah.mitchell@company.com', password: 'mgr123' },
  hr:         { name: 'Anita Patel',   role: 'HR Admin',           initials: 'AP', empId: 'EMP-10010', dept: 'HR Admin · People & Culture',             dash: 'dash-hr',         isITAdmin: false, email: 'anita.patel@company.com',    password: 'hr123'  },
  payroll:    { name: 'Vivek Shah',    role: 'Payroll Admin',      initials: 'VS', empId: 'EMP-10015', dept: 'Payroll Admin · Finance',                 dash: 'dash-payroll',    isITAdmin: false, email: 'vivek.shah@company.com',     password: 'pay123' },
  leadership: { name: 'Rajesh Kumar',  role: 'CEO',                initials: 'RK', empId: 'EMP-10000', dept: 'Chief Executive Officer',                 dash: 'dash-leadership', isITAdmin: false, email: 'rajesh.kumar@company.com',   password: 'ceo123' },
  itadmin:    { name: 'Ravi Kumar',    role: 'IT Admin',           initials: 'RK', empId: 'EMP-10020', dept: 'IT Administrator · Technology',           dash: 'dash-itadmin',    isITAdmin: true,  email: 'ravi.kumar@company.com',     password: 'it123'  }
};

let currentRole = 'employee';
let selectedLoginRole = 'employee';

// Pre-fill default role credentials on load
(function() {
  var cfg = roleConfig['employee'];
  if (cfg) {
    var emailEl = document.getElementById('loginEmail');
    var pwEl = document.getElementById('loginPassword');
    if (emailEl) emailEl.value = cfg.email;
    if (pwEl) pwEl.value = cfg.password;
  }
})();

// ===== LOGIN ROLE SELECTOR =====
function selectRole(role, el) {
  selectedLoginRole = role;
  document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  var cfg = roleConfig[role];
  if (cfg) {
    document.getElementById('loginEmail').value = cfg.email;
    document.getElementById('loginPassword').value = cfg.password;
  }
}

// ===== LOGIN =====
function doLogin() {
  var pw = document.getElementById('loginPassword').value.trim();
  var em = document.getElementById('loginEmail').value.trim().toLowerCase();
  if (!pw) { alert('Please enter your password.'); return; }
  var matched = null;
  var keys = Object.keys(roleConfig);
  for (var i = 0; i < keys.length; i++) {
    var c = roleConfig[keys[i]];
    if (c.password === pw && (!em || c.email.toLowerCase() === em)) {
      matched = keys[i]; break;
    }
  }
  if (!matched) { alert('Wrong password. Please try again.'); return; }
  currentRole = matched;
  selectedLoginRole = matched;
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'flex';
  applyRole(currentRole);
  showToast('Welcome, ' + roleConfig[matched].name + '!', 'success');
}

// ===== LOGOUT =====
function doLogout() {
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('selected'));
  document.querySelector('.role-chip').classList.add('selected');
  selectedLoginRole = 'employee';
  var cfg = roleConfig['employee'];
  if (cfg) {
    document.getElementById('loginEmail').value = cfg.email;
    document.getElementById('loginPassword').value = cfg.password;
  }
  toggleProfileDropdown(true);
  showToast('Signed out successfully', 'info');
}


// ===== APPLY ROLE =====
function applyRole(role) {
  const config = roleConfig[role] || roleConfig.employee;
  // Update header user info (name + role beside avatar)
  const headerUserName = document.getElementById('headerUserName');
  const headerUserRole = document.getElementById('headerUserRole');
  if (headerUserName) headerUserName.textContent = config.name;
  if (headerUserRole) headerUserRole.textContent = config.role;
  // Update header avatar
  document.getElementById('headerAvatar').textContent = config.initials;
  // Update profile dropdown
  document.getElementById('pdAvatar').textContent = config.initials;
  document.getElementById('pdName').textContent = config.name;
  document.getElementById('pdRole').textContent = config.role;
  document.getElementById('pdEmp').textContent = config.empId;
  // Update profile page
  document.getElementById('profilePic').textContent = config.initials;
  document.getElementById('profileName').textContent = config.name;
  document.getElementById('profileDept').textContent = config.dept;
  document.getElementById('profileEmpId').textContent = config.empId;
  // Update payslip header
  var payslipEmpInfo = document.getElementById('payslipEmpInfo');
  var payslipDesignation = document.getElementById('payslipDesignation');
  if (payslipEmpInfo) payslipEmpInfo.textContent = config.empId + ' · ' + config.name;
  if (payslipDesignation) payslipDesignation.textContent = config.dept.split(' · ')[0];
  // Greeting — update unified header
  updateGreetingHeader(config.name.split(' ')[0]);
  // Show/hide IT Admin queue tab in helpdesk
  const adminQueueTab = document.getElementById('adminQueueTab');
  if (adminQueueTab) adminQueueTab.style.display = config.isITAdmin ? 'block' : 'none';

  // ---- ROLE-BASED VISIBILITY ----
  const isHR = (role === 'hr');
  const isManager = (role === 'manager');
  const canApprove = isHR || isManager;

  // HR Checklist: only HR Admin
  const hrChecklistTab = document.getElementById('hrChecklistTab');
  if (hrChecklistTab) hrChecklistTab.style.display = isHR ? 'block' : 'none';

  // Approval Tasks tab: show for manager and HR, but block table for employees
  const approvalTasksTab = document.getElementById('approvalTasksTab');
  if (approvalTasksTab) approvalTasksTab.style.display = canApprove ? 'block' : 'none';

  // Show/hide access denied vs table inside approval-tasks-content
  const approvalAccessDenied = document.getElementById('approvalAccessDenied');
  const approvalTasksTable = document.getElementById('approvalTasksTable');
  if (approvalAccessDenied) approvalAccessDenied.style.display = canApprove ? 'none' : 'block';
  if (approvalTasksTable) approvalTasksTable.style.display = canApprove ? 'block' : 'none';

  // Leave Approval tab: only HR and Manager
  const leaveApprovalTab = document.getElementById('leaveApprovalTab');
  if (leaveApprovalTab) leaveApprovalTab.style.display = canApprove ? 'block' : 'none';

  // Approval Queue tab in Request Hub: HR only
  const approvalQueueTab = document.getElementById('approvalQueueTab');
  if (approvalQueueTab) approvalQueueTab.style.display = isHR ? 'block' : 'none';

  // ---- REPORTS ACCESS CONTROL ----
  // Accessible to: HR Admin, Payroll Admin, Leadership only
  // Blocked for: Employee, Manager, IT Admin
  const canSeeReports = (role === 'hr' || role === 'payroll' || role === 'leadership');
  const reportsNavItem = document.getElementById('reportsNavItem');
  if (reportsNavItem) reportsNavItem.style.display = canSeeReports ? 'flex' : 'none';

  // ---- PEOPLE MODULE: HR-ONLY RULES ----

  // 1. Status column in Employee Directory: HR only
  const dirStatusTh = document.getElementById('dirStatusTh');
  if (dirStatusTh) dirStatusTh.style.display = isHR ? 'table-cell' : 'none';
  document.querySelectorAll('.dir-status-cell').forEach(function(td) {
    td.style.display = isHR ? 'table-cell' : 'none';
  });

  // 2. Onboarding moved to standalone HR-only route. People page keeps Org Chart and Directory only.

  // Employee Report card: HR only
  const employeeReportCard = document.getElementById('employeeReportCard');
  if (employeeReportCard) employeeReportCard.style.display = isHR ? 'block' : 'none';

  // Show correct dashboard
  Object.values(roleConfig).forEach(r => {
    const el = document.getElementById(r.dash);
    if (el) el.style.display = 'none';
  });
  const dashEl = document.getElementById(config.dash);
  if (dashEl) dashEl.style.display = 'block';
  // ── Manager scope tabs: show only for manager, reset to Me on every role change ──
  scopeSwitch('leave', 'me', document.querySelector('#leaveScopeTabs .tab'));
  scopeSwitch('att',   'me', document.querySelector('#attendanceScopeTabs .tab'));
  var leaveScopeTabs = document.getElementById('leaveScopeTabs');
  var attScopeTabs   = document.getElementById('attendanceScopeTabs');
  if (leaveScopeTabs) leaveScopeTabs.style.display = canApprove ? 'flex' : 'none';
  if (attScopeTabs)   attScopeTabs.style.display   = canApprove ? 'flex' : 'none';
  // Populate team dropdowns with role-appropriate people list
  populateTeamDropdowns(role);

  navigate('dashboard');
}

// ===== NAVIGATION =====
function navigate(pageId, navItem) {
  // ---- REPORTS ACCESS GUARD ----
  if (pageId === 'reports') {
    const canSeeReports = (currentRole === 'hr' || currentRole === 'payroll' || currentRole === 'leadership');
    if (!canSeeReports) {
      showToast('Access denied — Reports are restricted to HR, Payroll & Leadership.', 'error');
      return;
    }
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (navItem) {
    navItem.classList.add('active');
  } else {
    const found = document.querySelector('[data-page="' + pageId + '"]');
    if (found) found.classList.add('active');
  }
  const titles = {
    dashboard: 'Home / Overview',
    tasks: 'Task Center / My Tasks',
    profile: 'Employee Profile',
    leave: 'Leave Management',
    attendance: 'Attendance Info / My Attendance',
    payroll: 'Salary / Payslip & Details',
    documents: 'Document Center',
    people: 'People Module',
    taxdocs: 'Tax Documents',
    helpdesk: 'Help Desk',
    requests: 'Expense Claim',
    reports: 'Reports & Analytics'
  };

  // ── Update unified header based on page ──
  const pageHeaders = {
    profile:    { main: 'Employee Information', sub: 'View and manage your personal, address, bank and passport details' },
    tasks:      { main: 'Task Center',        sub: 'All your pending actions, approvals, and reminders' },
    leave:      { main: 'Leave Management',   sub: 'Apply, track, and manage your leaves' },
    attendance: { main: 'Attendance Info',    sub: '' },
    payroll:    { main: 'Salary & Payslips',  sub: 'View payslips, salary structure, CTC breakdown and bank details' },
    documents:  { main: 'Document Center',    sub: '' },
    people:     { main: 'People',             sub: 'Organisation chart, employee directory and onboarding tracker' },
    taxdocs:    { main: 'Tax Documents', sub: 'View and manage your tax certificates and declarations' },
    helpdesk:   { main: 'Help Desk',          sub: 'Create and track support tickets. IT Admin approves all tickets.' },
    requests:   { main: 'Expense Claim',      sub: '' },
    reports:    { main: 'Reports & Analytics',sub: '' }
  };

  const mainEl = document.getElementById('headerGreetingMain');
  const subEl  = document.getElementById('headerGreetingSub');

  if (pageId === 'dashboard') {
    // Restore the personalised greeting on Home
    const cfg = roleConfig[currentRole] || roleConfig.employee;
    const firstName = cfg.name.split(' ')[0];
    if (mainEl) mainEl.textContent = getGreeting() + ', ' + firstName + '! 👋';
    // Role-specific subtitles (sourced from the former page-header <p> of each dashboard)
    const dashSubs = {
      employee:   "Here\u2019s what\u2019s happening at work today \u2014 " + getFormattedDate(),
      manager:    "Team overview and pending approvals \u2014 " + getFormattedDate(),
      hr:         "Workforce management and HR operations \u2014 " + getFormattedDate(),
      payroll:    "Manage salary, payroll runs, and compliance",
      leadership: "Organization-wide metrics and strategic insights",
      itadmin:    "System management, ticket approvals, and user access \u2014 " + getFormattedDate()
    };
    if (subEl) subEl.textContent = dashSubs[currentRole] || dashSubs.employee;
  } else if (pageHeaders[pageId]) {
    if (mainEl) mainEl.textContent = pageHeaders[pageId].main;
    if (subEl)  subEl.textContent  = pageHeaders[pageId].sub;
  }

  // headerTitle removed — greeting header is now the unified global header
  // Close profile dropdown on navigate
  const pd = document.getElementById('profileDropdown');
  if (pd) pd.classList.remove('show');

  // Re-draw org chart connectors when navigating to people page
  if (pageId === 'people' && typeof drawOrgConnectors === 'function') {
    setTimeout(drawOrgConnectors, 120);
  }
}

// ===== TAB SWITCHING =====
function switchTab(tabEl, contentId) {
  if (tabEl) {
    const siblings = tabEl.closest('.tabs') ? tabEl.closest('.tabs').querySelectorAll('.tab') : [];
    siblings.forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');
  }
  const content = document.getElementById(contentId);
  if (content) {
    const parentEl = content.parentElement;
    Array.from(parentEl.children).forEach(child => {
      if (child.id && child.id !== contentId && !child.classList.contains('tabs') && !child.classList.contains('page-header') && !child.classList.contains('card') && !child.classList.contains('it-admin-notice')) {
        child.style.display = 'none';
      }
    });
    content.style.display = 'block';
  }
}

// ===== NAVIGATE TO HOLIDAYS TAB =====
function navigateToHolidays() {
  navigate('leave');
  setTimeout(function() {
    var tabEl = document.getElementById('holidaysTab');
    switchTab(tabEl, 'holidays-tab');
    renderHolidayCalendar();
  }, 80);
}

// ===== PROFILE DROPDOWN =====
function toggleProfileDropdown(forceClose) {
  const pd = document.getElementById('profileDropdown');
  if (forceClose) { pd.classList.remove('show'); return; }
  pd.classList.toggle('show');
  if (pd.classList.contains('show')) {
    setTimeout(() => {
      document.addEventListener('click', function closeDD(e) {
        if (!document.getElementById('headerProfileWrapper').contains(e.target)) {
          pd.classList.remove('show');
          document.removeEventListener('click', closeDD);
        }
      });
    }, 10);
  }
}

// ===== NOTIFICATIONS =====
function toggleNotif() {
  const panel = document.getElementById('notifPanel');
  panel.classList.toggle('show');
  // Close profile dropdown
  document.getElementById('profileDropdown').classList.remove('show');
  if (panel.classList.contains('show')) {
    setTimeout(() => {
      document.addEventListener('click', function closePanel(e) {
        if (!panel.contains(e.target) && !e.target.closest('[onclick="toggleNotif()"]')) {
          panel.classList.remove('show');
          document.removeEventListener('click', closePanel);
        }
      });
    }, 10);
  }
}

// ===== TOASTS =====
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const icons = { success: '', error: '❌', info: 'ℹ️', warning: '' };
  toast.innerHTML = '<span>' + (icons[type] || 'ℹ️') + '</span><span>' + msg + '</span>';
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateX(100%)'; toast.style.transition='all 0.3s'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ===== HOLIDAY CALENDAR =====
var calCurrentYear = 2026;
var calCurrentMonth = 3; // 0-indexed, 3 = April

var holidays2026 = {
  '2026-01-26': { name: 'Republic Day', type: 'national' },
  '2026-04-14': { name: 'Dr. Ambedkar Jayanti', type: 'national' },
  '2026-04-18': { name: 'Good Friday', type: 'other' },
  '2026-08-15': { name: 'Independence Day', type: 'national' },
  '2026-10-02': { name: 'Gandhi Jayanti', type: 'national' }
};

function renderHolidayCalendar() {
  var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var label = document.getElementById('calMonthLabel');
  if (label) label.textContent = monthNames[calCurrentMonth] + ' ' + calCurrentYear;
  var container = document.getElementById('calDays');
  if (!container) return;
  container.innerHTML = '';
  var firstDay = new Date(calCurrentYear, calCurrentMonth, 1).getDay();
  var daysInMonth = new Date(calCurrentYear, calCurrentMonth + 1, 0).getDate();
  var today = new Date();
  for (var i = 0; i < firstDay; i++) {
    var empty = document.createElement('div');
    container.appendChild(empty);
  }
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = calCurrentYear + '-' + String(calCurrentMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var dayOfWeek = new Date(calCurrentYear, calCurrentMonth, d).getDay();
    var isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    var holiday = holidays2026[dateStr];
    var isToday = (today.getFullYear() === calCurrentYear && today.getMonth() === calCurrentMonth && today.getDate() === d);
    var cell = document.createElement('div');
    cell.style.cssText = 'border-radius:6px;padding:5px 2px;text-align:center;font-size:11.5px;font-weight:600;min-height:40px;position:relative;cursor:default;transition:all 0.15s;user-select:none;';
    if (holiday) {
      var isNational = holiday.type === 'national';
      cell.style.background   = isNational ? '#DCFCE7' : '#EDE9FE';
      cell.style.border       = isNational ? '1px solid #16A34A' : '1px solid #7C3AED';
      cell.style.color        = isNational ? '#15803D' : '#5B21B6';
      cell.style.cursor       = 'pointer';
      cell.title = holiday.name;
      cell.innerHTML =
        '<div style="font-size:12px;font-weight:700;line-height:1;">' + d + '</div>' +
        '<div style="font-size:7.5px;margin-top:3px;line-height:1.2;font-weight:500;padding:0 1px;word-break:break-word;">' + holiday.name + '</div>';
      cell.onmouseover = function() {
        this.style.transform = 'scale(1.04)';
        this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
        this.style.zIndex = '2';
      };
      cell.onmouseout = function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
        this.style.zIndex = '1';
      };
    } else if (isWeekend) {
      cell.style.background = '#F1F5F9';
      cell.style.color = '#94A3B8';
      cell.innerHTML = '<div style="font-size:12px;font-weight:500;line-height:1;">' + d + '</div>';
    } else {
      cell.style.background = 'var(--surface)';
      cell.style.border = '1px solid var(--border)';
      cell.style.color = 'var(--text-secondary)';
      cell.innerHTML = '<div style="font-size:12px;font-weight:500;line-height:1;">' + d + '</div>';
      cell.onmouseover = function() { this.style.background = '#F8FAFB'; };
      cell.onmouseout  = function() { this.style.background = 'var(--surface)'; };
    }
    if (isToday) {
      cell.style.background    = 'var(--primary)';
      cell.style.border        = '1px solid var(--primary-hover)';
      cell.style.color         = 'white';
      cell.style.boxShadow     = '0 2px 8px rgba(13,148,136,0.35)';
    }
    container.appendChild(cell);
  }
}

function changeCalMonth(dir) {
  calCurrentMonth += dir;
  if (calCurrentMonth > 11) {   calCurrentMonth = 11; calCurrentYear--;
  }
  renderHolidayCalendar();
}

// Auto-render holiday calendar when tab clicked
document.addEventListener('click', function(e) {
  if (e.target && e.target.textContent && e.target.textContent.trim() === 'Holidays') {
    setTimeout(renderHolidayCalendar, 50);
  }
  // Close task date range popover if click is outside
  var pop = document.getElementById('taskDRPopover');
  var compact = document.getElementById('taskDRCompact');
  if (pop && pop.classList.contains('open') && compact && !compact.contains(e.target)) {
    pop.classList.remove('open');
    var btn = document.getElementById('taskDRTrigger');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});

// ===== ATTENDANCE CALENDAR =====
var attCalYear  = new Date().getFullYear();
var attCalMonth = new Date().getMonth(); // 0-indexed, matches current real month

// Attendance data for demo
var attData = {
  '2026-04-01': { status: 'present',  in: '09:15 AM', out: '06:30 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-02': { status: 'present',  in: '09:05 AM', out: '06:22 PM', hrs: '9h 17m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-03': { status: 'present',  in: '09:30 AM', out: '06:10 PM', hrs: '8h 40m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-04': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-05': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-06': { status: 'present',  in: '09:26 AM', out: '06:53 PM', hrs: '9h 27m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-07': { status: 'late',     in: '10:45 AM', out: '06:30 PM', hrs: '7h 45m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-08': { status: 'absent',   in: '—',        out: '—',        hrs: '—',      shift: '10:00 to 19:00 (GEN)' },
  '2026-04-09': { status: 'present',  in: '09:00 AM', out: '06:00 PM', hrs: '9h 00m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-10': { status: 'absent',   in: '—',        out: '—',        hrs: '—',      shift: '10:00 to 19:00 (GEN)' },
  '2026-04-11': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-12': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-13': { status: 'present',  in: '09:22 AM', out: '06:28 PM', hrs: '9h 06m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-14': { status: 'leave',    in: '—',        out: '—',        hrs: '—',      shift: 'Public Holiday' },
  '2026-04-15': { status: 'present',  in: '09:18 AM', out: '06:20 PM', hrs: '9h 02m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-16': { status: 'present',  in: '09:05 AM', out: '06:10 PM', hrs: '9h 05m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-17': { status: 'present',  in: '09:22 AM', out: '06:18 PM', hrs: '8h 56m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-18': { status: 'leave',    in: '—',        out: '—',        hrs: '—',      shift: 'Good Friday' },
  '2026-04-19': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-20': { status: 'present',  in: '09:18 AM', out: '06:20 PM', hrs: '9h 02m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-21': { status: 'present',  in: '09:15 AM', out: '06:30 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-22': { status: 'present',  in: '09:08 AM', out: '06:22 PM', hrs: '9h 14m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-23': { status: 'present',  in: '09:30 AM', out: '06:00 PM', hrs: '8h 30m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-24': { status: 'present',  in: '09:12 AM', out: '06:28 PM', hrs: '9h 16m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-25': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-26': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-27': { status: 'present',  in: '09:10 AM', out: '06:25 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-28': { status: 'present',  in: '09:20 AM', out: '06:35 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-29': { status: 'present',  in: '09:15 AM', out: '06:30 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-30': { status: 'present',  in: '09:10 AM', out: '06:20 PM', hrs: '9h 10m', shift: '10:00 to 19:00 (GEN)' }
};

var statusStyles = {
  present: { bg: '#E8F5EE', border: '#2DB77B', color: '#1A7A50', dot: '#2DB77B', label: 'Present' },
  late:    { bg: '#FEF9EE', border: '#F59E0B', color: '#8A5A00', dot: '#F59E0B', label: 'Late' },
  absent:  { bg: '#FFF0F0', border: '#F03E3E', color: '#C92A2A', dot: '#F03E3E', label: 'Absent' },
  leave:   { bg: '#E8EEFF', border: '#3B5BDB', color: '#0F766E', dot: '#3B5BDB', label: 'Holiday' },
  weekend: { bg: '#F8F9FB', border: '#E3E7EE', color: '#9BA3AF', dot: '#D1D5DB', label: 'Off' }
};

function renderAttCalendar() {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var lbl = document.getElementById('attCalMonthLabel');
  if (lbl) lbl.textContent = months[attCalMonth] + ' ' + attCalYear;
  var container = document.getElementById('attCalDays');
  if (!container) return;
  container.innerHTML = '';
  var firstDay = new Date(attCalYear, attCalMonth, 1).getDay();
  var daysInMonth = new Date(attCalYear, attCalMonth + 1, 0).getDate();
  var today = new Date();
  // Blank slots before first day
  for (var i = 0; i < firstDay; i++) {
    container.appendChild(document.createElement('div'));
  }
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = attCalYear + '-' + String(attCalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var rec = attData[dateStr];
    var dayOfWeek = new Date(attCalYear, attCalMonth, d).getDay(); // 0=Sun, 6=Sat
    var isActualWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    var isHoliday = !!holidays2026[dateStr];

    // Determine effective status:
    // 1. Use attData record if present
    // 2. Else if it's a configured public holiday → treat as 'leave'
    // 3. Else if it's Sat/Sun → 'weekend'
    // 4. Else (future/no-data weekday) → 'nodata' (neutral, not weekend)
    var effectiveStatus;
    if (rec) {
      effectiveStatus = rec.status;
    } else if (isHoliday) {
      effectiveStatus = 'leave';
    } else if (isActualWeekend) {
      effectiveStatus = 'weekend';
    } else {
      effectiveStatus = 'nodata';
    }

    var nodataStyle = { bg: '#F8F9FB', border: '#E3E7EE', color: '#C0C8D8', dot: '#E3E7EE', label: '' };
    var st = statusStyles[effectiveStatus] || nodataStyle;

    var isToday = (today.getFullYear()===attCalYear && today.getMonth()===attCalMonth && today.getDate()===d);
    var cell = document.createElement('div');
    cell.setAttribute('data-date', dateStr);
    cell.style.cssText = 'border-radius:4px;padding:4px 3px;text-align:center;cursor:pointer;transition:all 0.12s;border:1px solid ' + st.border + ';background:' + st.bg + ';position:relative;min-height:42px;';
    if (isToday) { cell.style.outline = '2px solid #3B5BDB'; cell.style.outlineOffset = '1px'; }

    var statusShort = '';
    if (effectiveStatus === 'present') statusShort = 'P';
    else if (effectiveStatus === 'absent') statusShort = 'A';
    else if (effectiveStatus === 'late') statusShort = 'L';
    else if (effectiveStatus === 'leave') statusShort = 'H';
    else if (effectiveStatus === 'weekend') statusShort = 'O';
    // nodata → no short label

    var shiftLabel = rec ? rec.shift.split(' ')[0] : (isHoliday ? holidays2026[dateStr].name.split(' ')[0] : '');

    cell.innerHTML =
      '<div style="font-size:11px;font-weight:400;color:' + st.color + ';line-height:1;">' + d + '</div>' +
      (statusShort ? '<div style="font-size:10px;font-weight:500;color:' + st.color + ';margin-top:3px;">' + statusShort + '</div>' : '') +
      '<div style="font-size:8px;color:var(--text-tertiary);margin-top:1px;letter-spacing:0.3px;">' + shiftLabel + '</div>';

    var recForDetail = rec || (isHoliday ? { status: 'leave', in: '—', out: '—', hrs: '—', shift: holidays2026[dateStr].name } : null);
    var stForDetail = statusStyles[effectiveStatus] || nodataStyle;
    cell.onclick = (function(ds, r, s) {
      return function() { showAttDayDetail(ds, r, s); };
    })(dateStr, recForDetail, stForDetail);
    cell.onmouseover = function() { this.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'; };
    cell.onmouseout  = function() { this.style.boxShadow = 'none'; };
    container.appendChild(cell);
  }
}

function showAttDayDetail(dateStr, rec, st) {
  var panel = document.getElementById('attDayDetailContent');
  if (!panel) return;
  var parts = dateStr.split('-');
  var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
  var dayName = dayNames[d.getDay()];
  var dateLabel = monthNames[parseInt(parts[1])-1] + ' ' + parts[2] + ', ' + parts[0];
  if (!rec) {
    panel.innerHTML = '<div style="text-align:center;padding:30px 0;color:var(--text-muted);"><div style="font-size:30px;margin-bottom:8px;"></div><div style="font-size:12.5px;font-weight:600;">No data for this date</div></div>';
    return;
  }
  var statusBadgeColor = st.border;
  panel.innerHTML =
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--border);">' +
      '<div style="width:38px;height:38px;border-radius:8px;background:' + st.bg + ';border:1.5px solid ' + st.border + ';display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">' +
        '<div style="font-size:14px;font-weight:600;color:' + st.color + ';line-height:1;">' + parts[2] + '</div>' +
        '<div style="font-size:8px;font-weight:500;color:' + st.color + ';">' + dayName.substring(0,3).toUpperCase() + '</div>' +
      '</div>' +
      '<div>' +
        '<div style="font-size:12px;font-weight:500;color:var(--text-primary);">' + dayName + ', ' + dateLabel + '</div>' +
        '<div style="font-size:11px;color:var(--text-muted);margin-top:1px;">Shift: ' + rec.shift + '</div>' +
      '</div>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Punch In</div>' +
        '<div style="font-size:13px;font-weight:500;color:var(--text-primary);">' + rec.in + '</div>' +
      '</div>' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Punch Out</div>' +
        '<div style="font-size:13px;font-weight:500;color:var(--text-primary);">' + rec.out + '</div>' +
      '</div>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Work Hours</div>' +
        '<div style="font-size:13px;font-weight:500;color:var(--primary);">' + rec.hrs + '</div>' +
      '</div>' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Status</div>' +
        '<div style="font-size:12px;font-weight:500;color:' + st.color + ';">' + st.label + '</div>' +
      '</div>' +
    '</div>' +
    (rec.status !== 'weekend' && rec.status !== 'leave' && rec.status !== 'absent' ?
      '<div style="background:var(--primary-muted);border-radius:6px;padding:8px;font-size:11px;color:var(--primary-hover);">on ' + dateLabel + ' at 06:23</div>' :
      (rec.status === 'absent' ? '<div style="background:var(--danger-light);border-radius:6px;padding:8px;font-size:11px;color:#991B1B;">Marked Absent — <span style="cursor:pointer;text-decoration:underline;" onclick="switchTab(document.querySelector(\'[onclick*=att-reg-tab]\'),\'att-reg-tab\')">Apply Regularization</span></div>' : '')
    );
}

function attChangeMonth(dir) {
  attCalMonth += dir;
  if (attCalMonth > 11) { attCalMonth = 0; attCalYear++; }
  if (attCalMonth < 0)  { attCalMonth = 11; attCalYear--; }
  renderAttCalendar();
  updatePenaltyDaysCount();
  updateAvgWorkHours();
  // Sync the month/year dropdowns with the current calendar position
  var mSel = document.getElementById('attMonthFilter');
  var ySel = document.getElementById('attYearFilter');
  if (mSel) mSel.value = String(attCalMonth);
  if (ySel) ySel.value = String(attCalYear);
  // Reset detail panel
  var panel = document.getElementById('attDayDetailContent');
  if (panel) panel.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--text-tertiary);"><div style="font-size:13px;">Click a date to view details</div></div>';
}

// Auto-render attendance calendar when attendance page is shown
var _origNavigate = navigate;
navigate = function(pageId, navItem) {
  _origNavigate(pageId, navItem);
  if (pageId === 'attendance') { setTimeout(function(){ renderAttCalendar(); updatePenaltyDaysCount(); updateAvgWorkHours(); }, 50); }
};

// ===== SALARY HISTORY =====
var salaryHistoryData = {
  2026: [
    { month: 'March 2026',    gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'February 2026', gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'January 2026',  gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' }
  ],
  2025: [
    { month: 'December 2025', gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'November 2025', gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'October 2025',  gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'September 2025',gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'August 2025',   gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'July 2025',     gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'June 2025',     gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'May 2025',      gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'April 2025',    gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' }
  ],
  2024: [
    { month: 'March 2025',    gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'February 2025', gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'January 2025',  gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'December 2024', gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'November 2024', gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'October 2024',  gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'September 2024',gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'August 2024',   gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'July 2024',     gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'June 2024',     gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'May 2024',      gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'April 2024',    gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' }
  ],
  2023: [
    { month: 'March 2024',    gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'February 2024', gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'January 2024',  gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'December 2023', gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'November 2023', gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'October 2023',  gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'September 2023',gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'August 2023',   gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'July 2023',     gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'June 2023',     gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' }
  ]
};

function renderSalaryHistory() {
  var sel = document.getElementById('historyYearSelect');
  if (!sel) return;
  var year = parseInt(sel.value);
  var rows = salaryHistoryData[year] || [];
  var fyLabel = year === 2026 ? 'FY 2025-26' : year === 2025 ? 'FY 2024-25' : year === 2024 ? 'FY 2023-24' : 'FY 2022-23';
  var html = '<div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;padding:6px 12px;background:var(--bg);border-radius:6px;">' + fyLabel + ' — ' + rows.length + ' records</div>';
  if (rows.length === 0) {
    html += '<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:13px;">No records found for this year.</div>';
  } else {
    html += '<table style="table-layout:fixed;width:100%;"><thead><tr><th style="padding:6px 11px;">Month</th><th style="padding:6px 11px;">Gross Pay</th><th style="padding:6px 11px;">Deductions</th><th style="padding:6px 11px;">Net Pay</th><th style="padding:6px 11px;">Action</th></tr></thead><tbody>';
    rows.forEach(function(r) {
      html += '<tr><td style="padding:5px 11px;"><b>' + r.month + '</b></td><td style="padding:5px 11px;">' + r.gross + '</td><td style="padding:5px 11px;color:var(--danger)">' + r.deductions + '</td><td style="padding:5px 11px;font-weight:500;color:var(--primary)">' + r.net + '</td><td style="padding:5px 11px;"><button class="btn-sm" style="font-size:10.5px;padding:2px 9px;" onclick="showToast(\'Downloading ' + r.month + ' payslip...\',\'info\')">Download</button></td></tr>';
    });
    html += '</tbody></table>';
  }
  document.getElementById('salaryHistoryTable').innerHTML = html;
}

function downloadAllHistory() {
  var sel = document.getElementById('historyYearSelect');
  var year = sel ? sel.value : '2026';
  var fyLabel = year === '2026' ? 'FY 2025-26' : year === '2025' ? 'FY 2024-25' : year === '2024' ? 'FY 2023-24' : 'FY 2022-23';
  showToast('Downloading all payslips for ' + fyLabel + '...', 'info');
}

// ===== SALARY STRUCTURE YEAR-WISE =====
var salaryStructureData = {
  2026: { ctc: '₹18,00,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹75,000',  annual: '₹9,00,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹30,000',  annual: '₹3,60,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹18,500',  annual: '₹2,22,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹9,000',  annual: '-₹1,08,000',  danger: true },
    { comp: 'Net Take-Home',        monthly: '₹1,05,100',annual: '₹12,61,200',  danger: false, bold: true, net: true }
  ]},
  2025: { ctc: '₹15,60,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹65,000',  annual: '₹7,80,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹26,000',  annual: '₹3,12,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹19,000',  annual: '₹2,28,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹7,800',  annual: '-₹93,600',    danger: true },
    { comp: 'Net Take-Home',        monthly: '₹93,800',  annual: '₹11,25,600',  danger: false, bold: true, net: true }
  ]},
  2024: { ctc: '₹13,80,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹57,500',  annual: '₹6,90,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹23,000',  annual: '₹2,76,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹14,500',  annual: '₹1,74,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹6,900',  annual: '-₹82,800',    danger: true },
    { comp: 'Net Take-Home',        monthly: '₹81,500',  annual: '₹9,78,000',   danger: false, bold: true, net: true }
  ]},
  2023: { ctc: '₹12,00,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹50,000',  annual: '₹6,00,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹20,000',  annual: '₹2,40,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹12,500',  annual: '₹1,50,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹6,000',  annual: '-₹72,000',    danger: true },
    { comp: 'Net Take-Home',        monthly: '₹68,500',  annual: '₹8,22,000',   danger: false, bold: true, net: true }
  ]}
};

function renderSalaryStructure() {
  var sel = document.getElementById('salaryStructureYearSelect');
  if (!sel) return;
  var year = parseInt(sel.value);
  var data = salaryStructureData[year];
  if (!data) return;
  var ctcEl = document.getElementById('salaryStructureCtcValue');
  if (ctcEl) ctcEl.textContent = data.ctc;
  var tbl = document.getElementById('salaryStructureTable');
  if (!tbl) return;
  var html = '<table><thead><tr><th>Component</th><th>Monthly</th><th>Annual</th></tr></thead><tbody>';
  data.rows.forEach(function(r) {
    var dc = r.danger ? 'color:var(--danger)' : (r.net ? 'color:var(--primary)' : '');
    var fw = (r.bold || r.net) ? 'font-weight:700' : '';
    var st = [dc, fw].filter(Boolean).join(';');
    html += '<tr style="' + fw + '"><td' + (r.danger ? ' style="color:var(--danger)"' : '') + '>' + (r.bold && !r.net ? '<b>' : '') + r.comp + (r.bold && !r.net ? '</b>' : '') + '</td><td style="' + st + '">' + r.monthly + '</td><td style="' + st + '">' + r.annual + '</td></tr>';
  });
  html += '</tbody></table>';
  tbl.innerHTML = html;
}

// Auto-render on tab switch
document.addEventListener('click', function(e) {
  if (e.target && e.target.textContent) {
    var txt = e.target.textContent.trim();
    if (txt === 'History') { setTimeout(renderSalaryHistory, 60); }
    if (txt === 'Salary Structure') { setTimeout(renderSalaryStructure, 60); }
  }
});

// ===== BANK DETAILS =====
function toggleBankEdit(show) {
  document.getElementById('bankViewMode').style.display = show ? 'none' : 'block';
  document.getElementById('bankEditMode').style.display = show ? 'block' : 'none';
}

function submitBankEdit() {
  var accNo  = document.getElementById('bankAccNo') ? document.getElementById('bankAccNo').value.trim() : '';
  var ifsc   = document.getElementById('bankIFSC') ? document.getElementById('bankIFSC').value.trim() : '';
  var reason = document.getElementById('bankReason') ? document.getElementById('bankReason').value.trim() : '';
  if (!ifsc) { showToast('Please enter the IFSC code.', 'error'); return; }
  if (!reason) { showToast('Please provide a reason for the change.', 'error'); return; }
  toggleBankEdit(false);
  showToast('Bank details update request submitted for approval.', 'success');
}


// ===== PUNCH FLOW =====
// State: 'in' = not yet punched in, 'out' = punched in (waiting for punch out)
var punchState = 'in';
var punchInTime = null;
var punchOutTime = null;
var midnightResetTimer = null;
var punchDoneForToday = false; // once punched out, block re-punch-in same day

function formatTime12(date) {
  var h = date.getHours(), m = date.getMinutes();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return h + ':' + String(m).padStart(2,'0') + ' ' + ampm;
}

function updatePunchUI() {
  var btn = document.getElementById('punchBtn');
  var statusEl = document.getElementById('punchStatus');
  if (!btn) return;
  if (punchState === 'in') {
    // Ready to punch in (or locked for the day)
    if (punchDoneForToday) {
      btn.textContent = 'Punch In';
      btn.style.background = '#94A3B8';
      btn.style.cursor = 'not-allowed';
      btn.style.opacity = '0.65';
      btn.onmouseover = null; btn.onmouseout = null;
    } else {
      btn.textContent = 'Punch In';
      btn.style.background = '#3B5BDB';
      btn.style.cursor = 'pointer';
      btn.style.opacity = '1';
      btn.onmouseover = function(){ this.style.background = '#0F766E'; };
      btn.onmouseout  = function(){ this.style.background = '#3B5BDB'; };
    }
    if (statusEl) {
      if (punchOutTime) {
        statusEl.textContent = 'Punched out at ' + formatTime12(punchOutTime);
        statusEl.style.color = '#C92A2A';
      } else {
        statusEl.textContent = '';
      }
    }
  } else {
    // Punched in — show Punch Out
    btn.textContent = 'Punch Out';
    btn.style.background = '#2F9E44';
    btn.onmouseover = function(){ this.style.background = '#1A6E34'; };
    btn.onmouseout  = function(){ this.style.background = '#2F9E44'; };
    if (statusEl && punchInTime) {
      statusEl.textContent = 'Punched in at ' + formatTime12(punchInTime);
      statusEl.style.color = '#2F9E44';
    }
  }
}

function scheduleMidnightReset() {
  if (midnightResetTimer) clearTimeout(midnightResetTimer);
  var now = new Date();
  var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  var msUntilMidnight = midnight - now;
  midnightResetTimer = setTimeout(function() {
    // If still punched in at midnight, auto punch-out and record
    if (punchState === 'out' && punchInTime) {
      var eod = new Date();
      var todayKey = getTodayKey();
      if (attData[todayKey]) {
        attData[todayKey].out = formatTime12(eod);
        attData[todayKey].hrs = calcHrs(punchInTime, eod);
      }
    }
    punchState = 'in';
    punchInTime = null;
    punchOutTime = null;
    midnightResetTimer = null;
    punchDoneForToday = false; // new day — allow punch-in again
    updatePunchUI();
    showToast('New day started. Punch In to begin attendance.', 'info');
  }, msUntilMidnight);
}

function getTodayKey() {
  var now = new Date();
  return now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2,'0') + '-' +
    String(now.getDate()).padStart(2,'0');
}

function calcHrs(inDate, outDate) {
  var diffMs = outDate - inDate;
  var h = Math.floor(diffMs / 3600000);
  var m = Math.floor((diffMs % 3600000) / 60000);
  return h + 'h ' + String(m).padStart(2,'0') + 'm';
}

function handlePunch() {
  var now = new Date();
  var todayKey = getTodayKey();

  if (punchState === 'in') {
    // ── PUNCH IN ──
    if (punchDoneForToday) { showToast('You have already completed your attendance for today.', 'info'); return; }
    punchInTime = now;
    punchOutTime = null;
    punchState = 'out';

    // Determine status: late if after 10:00 AM
    var isLate = (now.getHours() > 10) || (now.getHours() === 10 && now.getMinutes() > 0);

    // Write into attData
    attData[todayKey] = {
      status: isLate ? 'late' : 'present',
      in: formatTime12(now),
      out: '—',
      hrs: 'In Progress',
      shift: '10:00 to 19:00 (GEN)'
    };

    updatePunchUI();
    showToast('Punched in at ' + formatTime12(now), 'success');
    scheduleMidnightReset();

    // Refresh calendar and detail panel if attendance page is visible
    refreshAttendanceIfVisible(todayKey);

  } else {
    // ── PUNCH OUT ──
    punchOutTime = now;
    punchState = 'in';
    if (midnightResetTimer) { clearTimeout(midnightResetTimer); midnightResetTimer = null; }

    var duration = punchInTime ? calcHrs(punchInTime, now) : '—';

    // Update attData record
    if (attData[todayKey]) {
      attData[todayKey].out = formatTime12(now);
      attData[todayKey].hrs = duration;
    }

    punchDoneForToday = true;
    updatePunchUI();
    showToast('Punched out at ' + formatTime12(now) + ' — Total: ' + duration + '. Punch-in disabled for today.', 'info');

    // Refresh calendar and detail panel if attendance page is visible
    refreshAttendanceIfVisible(todayKey);
  }
}

function refreshAttendanceIfVisible(todayKey) {
  var attPage = document.getElementById('page-attendance');
  if (attPage && attPage.classList.contains('active')) {
    renderAttCalendar();
    // Re-show today's detail panel with updated data
    var rec = attData[todayKey];
    if (rec) {
      var st = statusStyles[rec.status] || statusStyles.present;
      showAttDayDetail(todayKey, rec, st);
    }
  }
}

// ===== LIVE CLOCK =====
function updateLiveClock() {
  var now = new Date();
  var h = String(now.getHours()).padStart(2,'0');
  var m = String(now.getMinutes()).padStart(2,'0');
  var s = String(now.getSeconds()).padStart(2,'0');
  var clockEl = document.getElementById('liveClock');
  if (clockEl) clockEl.textContent = h + ':' + m + ':' + s;
  var ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  var h12 = now.getHours() % 12 || 12;
  var timeStr = h12 + ':' + m + ':' + s + ' ' + ampm;
  var clockEl2 = document.getElementById('liveClockHeader');
  if (clockEl2) clockEl2.textContent = timeStr;
}

setInterval(updateLiveClock, 1000);
updateLiveClock();

// Init on load
window.addEventListener('DOMContentLoaded', function() {
  updatePunchUI();
  renderSalaryStructure();
  // Initialize greeting header with default employee first name
  updateGreetingHeader('John');
  var defaultChip = document.querySelector('.role-chip.selected');
  if (!defaultChip) {
    var first = document.querySelector('.role-chip');
    if (first) first.classList.add('selected');
  }
  initPersonalTab();

  // ── Default filter: Pending ─────────────────────────────────────
  // Expense Claim panel
  var reqPendingBtn = document.querySelector('#reqFilterSegment .task-seg-btn[data-value="pending"]');
  if (reqPendingBtn) filterMyRequests('pending', reqPendingBtn);

  // My Leaves panel
  var myLeavePendingBtn = document.querySelector('#myLeaveFilterSegment .task-seg-btn[data-value="pending"]');
  if (myLeavePendingBtn) filterMyLeaves('pending', myLeavePendingBtn);

  // My Team's Leave History
  var teamLeavePendingBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn[data-value="pending"]');
  if (teamLeavePendingBtn) filterTeamLeaves('pending', teamLeavePendingBtn);
});

// ===== PERSONAL DETAILS TAB =====

function initPersonalTab() {
  // Set DOB max = today (no future dates)
  var today = new Date();
  var todayStr = today.toISOString().split('T')[0];
  var dobEl = document.getElementById('pd_dob');
  if (dobEl) dobEl.setAttribute('max', todayStr);

  // Set passport issue max = today
  var piEl = document.getElementById('pd_passportIssue');
  if (piEl) piEl.setAttribute('max', todayStr);
}

// Collect all editable personal-tab fields (bank fields are read-only — excluded)
var _personalEditableIds = [
  'pd_firstName','pd_middleName','pd_lastName','pd_dob','pd_gender',
  'pd_nationality','pd_bloodGroup',
  'pd_mobile','pd_altMobile',
  'pd_emergencyContact','pd_emergencyName','pd_emergencyRelation',
  'pd_passportNumber','pd_passportIssue','pd_passportExpiry',
  'pd_currFlat','pd_currBuilding','pd_currStreet','pd_currLandmark','pd_currCity','pd_currState','pd_currPin','pd_currCountry',
  'pd_permFlat','pd_permBuilding','pd_permStreet','pd_permLandmark','pd_permCity','pd_permState','pd_permPin','pd_permCountry'
];

function enablePersonalEdit() {
  // Only enable on personal-tab
  // Switch to personal tab first
  var personalTab = document.querySelector('[onclick*="personal-tab"]');
  if (personalTab) { switchTab(personalTab, 'personal-tab'); }

  _personalEditableIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.disabled = false; el.classList.remove('input-error','input-success'); }
  });

  // Enable checkbox
  var chk = document.getElementById('sameAsCurrentChk');
  if (chk) chk.disabled = false;

  // Show save bar
  var bar = document.getElementById('personalSaveBar');
  if (bar) bar.style.display = 'flex';

  document.getElementById('personalSaveStatus').textContent = '';
  showToast('Edit mode enabled — make your changes and save.', 'info');
}

function cancelPersonalEdit() {
  _personalEditableIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.disabled = true; el.classList.remove('input-error','input-success'); }
  });
  var chk = document.getElementById('sameAsCurrentChk');
  if (chk) { chk.disabled = true; chk.checked = false; }

  // Re-enable perm fields if they were locked by copy
  togglePermFields(false);

  var bar = document.getElementById('personalSaveBar');
  if (bar) bar.style.display = 'none';

  // Clear all error messages
  document.querySelectorAll('.field-error').forEach(function(e){ e.classList.remove('show'); });
  showToast('Edit cancelled.', 'info');
}

function handleCopyAddress(checked) {
  if (checked) {
    // Copy current → permanent (all sub-fields)
    var map = {
      pd_permFlat:     'pd_currFlat',
      pd_permBuilding: 'pd_currBuilding',
      pd_permStreet:   'pd_currStreet',
      pd_permLandmark: 'pd_currLandmark',
      pd_permCity:     'pd_currCity',
      pd_permPin:      'pd_currPin',
      pd_permCountry:  'pd_currCountry'
    };
    Object.keys(map).forEach(function(perm) {
      var src = document.getElementById(map[perm]);
      var dst = document.getElementById(perm);
      if (src && dst) dst.value = src.value;
    });
    // State select
    var srcState = document.getElementById('pd_currState');
    var dstState = document.getElementById('pd_permState');
    if (srcState && dstState) dstState.value = srcState.value;

    togglePermFields(true);
    showToast('Permanent address copied from current address.', 'success');
  } else {
    togglePermFields(false);
  }
}

function togglePermFields(locked) {
  var ids = ['pd_permFlat','pd_permBuilding','pd_permStreet','pd_permLandmark','pd_permCity','pd_permState','pd_permPin','pd_permCountry'];
  ids.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.disabled = locked;
  });
}

// ── Validation helpers ──
function showFieldError(id, msg) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.add('input-error');
  var err = document.getElementById('err_' + id.replace('pd_',''));
  if (err) { err.textContent = msg || err.textContent; err.classList.add('show'); }
}
function clearFieldError(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('input-error');
  var err = document.getElementById('err_' + id.replace('pd_',''));
  if (err) err.classList.remove('show');
}

function validatePersonalDetails() {
  var valid = true;

  // First Name
  var fn = document.getElementById('pd_firstName');
  if (!fn || !fn.value.trim()) { showFieldError('pd_firstName'); valid = false; }
  else clearFieldError('pd_firstName');

  // Last Name
  var ln = document.getElementById('pd_lastName');
  if (!ln || !ln.value.trim()) { showFieldError('pd_lastName'); valid = false; }
  else clearFieldError('pd_lastName');

  // DOB — required, not in future
  var dob = document.getElementById('pd_dob');
  if (!dob || !dob.value) { showFieldError('pd_dob', 'Date of birth is required.'); valid = false; }
  else {
    var dobDate = new Date(dob.value);
    var today = new Date(); today.setHours(0,0,0,0);
    if (dobDate >= today) { showFieldError('pd_dob', 'Date of birth cannot be today or a future date.'); valid = false; }
    else clearFieldError('pd_dob');
  }

  // Mobile Number — required
  var mob = document.getElementById('pd_mobile');
  if (!mob || !mob.value.trim()) { showFieldError('pd_mobile'); valid = false; }
  else clearFieldError('pd_mobile');

  // Passport — optional, but if filled validate
  var pn = document.getElementById('pd_passportNumber');
  if (pn && pn.value.trim()) {
    if (!/^[A-Z][0-9]{7}$|^[A-Z]{1,2}[0-9]{6,10}$/.test(pn.value.trim().toUpperCase())) {
      showFieldError('pd_passportNumber', 'Enter a valid passport number (6–12 characters).'); valid = false;
    } else clearFieldError('pd_passportNumber');
  } else clearFieldError('pd_passportNumber');

  // Passport dates — if issue filled, must not be future
  var pi = document.getElementById('pd_passportIssue');
  var pe = document.getElementById('pd_passportExpiry');
  if (pi && pi.value) {
    var issueDate = new Date(pi.value);
    var now = new Date(); now.setHours(0,0,0,0);
    if (issueDate > now) { showFieldError('pd_passportIssue'); valid = false; }
    else clearFieldError('pd_passportIssue');
    if (pe && pe.value) {
      var expiryDate = new Date(pe.value);
      if (expiryDate <= issueDate) { showFieldError('pd_passportExpiry', 'Expiry must be after issue date.'); valid = false; }
      else clearFieldError('pd_passportExpiry');
    }
  } else {
    clearFieldError('pd_passportIssue');
  }

  // Current Address — flat, building, street, city, state, pin
  var cf = document.getElementById('pd_currFlat');
  if (!cf || !cf.value.trim()) { showFieldError('pd_currFlat'); valid = false; }
  else clearFieldError('pd_currFlat');

  var cb = document.getElementById('pd_currBuilding');
  if (!cb || !cb.value.trim()) { showFieldError('pd_currBuilding'); valid = false; }
  else clearFieldError('pd_currBuilding');

  var cs = document.getElementById('pd_currStreet');
  if (!cs || !cs.value.trim()) { showFieldError('pd_currStreet'); valid = false; }
  else clearFieldError('pd_currStreet');

  var cc = document.getElementById('pd_currCity');
  if (!cc || !cc.value.trim()) { showFieldError('pd_currCity'); valid = false; }
  else clearFieldError('pd_currCity');

  var cst = document.getElementById('pd_currState');
  if (!cst || !cst.value) { showFieldError('pd_currState'); valid = false; }
  else clearFieldError('pd_currState');

  var cp = document.getElementById('pd_currPin');
  if (!cp || !/^\d{6}$/.test(cp.value.trim())) { showFieldError('pd_currPin', 'PIN must be a 6-digit number.'); valid = false; }
  else clearFieldError('pd_currPin');

  // Emergency Contact Number — required
  var ec = document.getElementById('pd_emergencyContact');
  if (!ec || !ec.value.trim()) { showFieldError('pd_emergencyContact'); valid = false; }
  else clearFieldError('pd_emergencyContact');

  return valid;
}

// Navigate to Salary panel → Bank Details tab (from Profile Bank Details section)
function navigateToSalaryBankDetails() {
  navigate('payroll');
  var bankTab = document.querySelector('[onclick*="bank-details-tab"]');
  if (bankTab) switchTab(bankTab, 'bank-details-tab');
}

function savePersonalDetails() {
  var statusEl = document.getElementById('personalSaveStatus');
  statusEl.textContent = 'Validating…';

  if (!validatePersonalDetails()) {
    statusEl.textContent = 'Please fix the errors above.';
    statusEl.style.color = 'var(--danger)';
    showToast('Please fix the highlighted errors.', 'error');
    return;
  }

  // All valid — lock fields, hide bar
  statusEl.textContent = '';
  _personalEditableIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.disabled = true; el.classList.remove('input-error','input-success'); }
  });
  var chk = document.getElementById('sameAsCurrentChk');
  if (chk) chk.disabled = true;

  var bar = document.getElementById('personalSaveBar');
  if (bar) bar.style.display = 'none';

  showToast('Personal details saved successfully!', 'success');
}

// ══════════════════════════════════════════════════════════════
// TEAM SCOPE FEATURE — Me / My Team filter for Leave & Attendance
// Applies only to Manager and HR roles.
// Employee role: unaffected (scope tabs hidden, Me view shown as-is)
// ══════════════════════════════════════════════════════════════

// ── Static team data per role ──────────────────────────────────
var teamData = {
  manager: [
    { id: 'amit',  name: 'Amit Sharma',  title: 'Software Engineer',     dept: 'Engineering' },
    { id: 'priya', name: 'Priya Nair',   title: 'Frontend Developer',    dept: 'Engineering' },
    { id: 'rahul', name: 'Rahul Singh',  title: 'QA Engineer',           dept: 'Engineering' },
    { id: 'deepa', name: 'Deepa Verma',  title: 'DevOps Engineer',       dept: 'Engineering' }
  ],
  hr: [
    { id: 'sarah',  name: 'Sarah Mitchell', title: 'VP Engineering',     dept: 'Leadership'  },
    { id: 'vivek',  name: 'Vivek Shah',     title: 'Payroll Admin',      dept: 'Finance'     },
    { id: 'rajesh', name: 'Rajesh Kumar',   title: 'CEO',                dept: 'Leadership'  }
  ]
};

// ── Leave balances per person (keyed by id) ────────────────────
var leavePersonData = {
  amit:   { el: 8,  sl: 5,  cl: 2, co: 1, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Mar 1',  to: 'Mar 2',  days: 2, status: 'Approved', fromISO: '2026-03-01' },
    { type: 'Sick Leave',   from: 'Feb 10', to: 'Feb 10', days: 1, status: 'Approved', fromISO: '2026-02-10' }
  ]},
  priya:  { el: 14, sl: 7,  cl: 3, co: 0, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Casual Leave', from: 'Mar 15', to: 'Mar 15', days: 1, status: 'Approved', fromISO: '2026-03-15' }
  ]},
  rahul:  { el: 5,  sl: 3,  cl: 1, co: 2, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Apr 10', to: 'Apr 12', days: 3, status: 'Pending',  fromISO: '2026-04-10' },
    { type: 'Casual Leave', from: 'Feb 20', to: 'Feb 20', days: 1, status: 'Approved', fromISO: '2026-02-20' }
  ]},
  deepa:  { el: 11, sl: 6,  cl: 3, co: 1, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Sick Leave',   from: 'Apr 8',  to: 'Apr 8',  days: 1, status: 'Pending',  fromISO: '2026-04-08' }
  ]},
  sarah:  { el: 10, sl: 8,  cl: 4, co: 2, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Jan 20', to: 'Jan 21', days: 2, status: 'Approved', fromISO: '2026-01-20' }
  ]},
  vivek:  { el: 9,  sl: 6,  cl: 3, co: 1, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Casual Leave', from: 'Mar 5',  to: 'Mar 5',  days: 1, status: 'Approved', fromISO: '2026-03-05' }
  ]},
  rajesh: { el: 12, sl: 10, cl: 5, co: 3, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Dec 24', to: 'Dec 26', days: 3, status: 'Approved', fromISO: '2025-12-24' }
  ]}
};

// ── Attendance data per person ─────────────────────────────────
var attPersonData = {
  amit:   { today: { status:'Present', in:'09:52', out:'—', hrs:'In Progress' }, monthly: { wd:22, present:20, absent:2, late:1, avg:'08:12', pct:'90.9%', pctBadge:'green' } },
  priya:  { today: { status:'Present', in:'09:45', out:'—', hrs:'In Progress' }, monthly: { wd:22, present:22, absent:0, late:0, avg:'08:30', pct:'100%',  pctBadge:'green' } },
  rahul:  { today: { status:'On Leave',in:'—',    out:'—', hrs:'—'           }, monthly: { wd:22, present:18, absent:4, late:3, avg:'07:58', pct:'81.8%', pctBadge:'amber' } },
  deepa:  { today: { status:'Late',   in:'10:32', out:'—', hrs:'In Progress' }, monthly: { wd:22, present:21, absent:1, late:4, avg:'08:05', pct:'95.5%', pctBadge:'green' } },
  sarah:  { today: { status:'Present', in:'09:00', out:'18:30', hrs:'09:30'  }, monthly: { wd:22, present:21, absent:1, late:0, avg:'09:10', pct:'95.5%', pctBadge:'green' } },
  vivek:  { today: { status:'Present', in:'09:15', out:'—', hrs:'In Progress'}, monthly: { wd:22, present:20, absent:2, late:2, avg:'08:40', pct:'90.9%', pctBadge:'green' } },
  rajesh: { today: { status:'Present', in:'08:45', out:'18:00', hrs:'09:15'  }, monthly: { wd:22, present:22, absent:0, late:0, avg:'09:05', pct:'100%',  pctBadge:'green' } }
};

// ── Currently selected person per panel ───────────────────────
var selectedPerson = { leave: null, att: null };

// ── Config map for each panel ──────────────────────────────────
var panelCfg = {
  leave: {
    tabs:        'leaveScopeTabs',
    meView:      'leaveMeView',
    teamView:    'leaveTeamView',
    dropWrap:    'leaveTeamDropdownWrap',
    searchInput: 'leavePersonSearch',
    dropdown:    'leavePersonDropdown',
    chip:        'leaveSelectedChip',
    chipName:    'leaveSelectedName'
  },
  att: {
    tabs:        'attendanceScopeTabs',
    meView:      'attendanceMeView',
    teamView:    'attendanceTeamView',
    dropWrap:    'attTeamDropdownWrap',
    searchInput: 'attPersonSearch',
    dropdown:    'attPersonDropdown',
    chip:        'attSelectedChip',
    chipName:    'attSelectedName'
  }
};

// ── scopeSwitch: toggle Me / My Team ──────────────────────────
function scopeSwitch(panelKey, scope, tabEl) {
  var cfg = panelCfg[panelKey];
  if (!cfg) return;

  // Update tab active state
  var tabsEl = document.getElementById(cfg.tabs);
  if (tabsEl) tabsEl.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
  if (tabEl) tabEl.classList.add('active');

  // Toggle Me / Team views
  var meEl   = document.getElementById(cfg.meView);
  var teamEl = document.getElementById(cfg.teamView);
  if (meEl)   meEl.style.display   = (scope === 'me')   ? '' : 'none';
  if (teamEl) teamEl.style.display = (scope === 'team') ? '' : 'none';

  // Show / hide dropdown wrap
  var dw = document.getElementById(cfg.dropWrap);
  if (dw) dw.style.display = (scope === 'team') ? '' : 'none';

  // Hide chip when switching back to Me
  if (scope === 'me') {
    var chip = document.getElementById(cfg.chip);
    if (chip) chip.style.display = 'none';
    selectedPerson[panelKey] = null;
  }
}

// ── populateTeamDropdowns: called from applyRole ───────────────
function populateTeamDropdowns(role) {
  // Reset selections
  selectedPerson = { leave: null, att: null };
  // Clear search inputs
  ['leavePersonSearch','attPersonSearch'].forEach(function(id){
    var el = document.getElementById(id); if (el) el.value = '';
  });
  // Hide chips
  ['leaveSelectedChip','attSelectedChip'].forEach(function(id){
    var el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  // Hide team data blocks
  var ltp = document.getElementById('leaveTeamPrompt');
  var ltc = document.getElementById('leaveTeamCards');
  var atp = document.getElementById('attTeamPrompt');
  var atb = document.getElementById('attTeamBlocks');
  if (ltp) ltp.style.display = '';
  if (ltc) ltc.style.display = 'none';
  if (atp) atp.style.display = '';
  if (atb) atb.style.display = 'none';
}

// ── openTeamDropdown: render list and show ─────────────────────
function openTeamDropdown(panelKey) {
  renderDropdownList(panelKey, '');
  var cfg = panelCfg[panelKey];
  var dd = document.getElementById(cfg.dropdown);
  if (dd) dd.style.display = 'block';

  // Close on outside click (once)
  setTimeout(function(){
    document.addEventListener('click', function _close(e){
      var wrap = document.getElementById(cfg.dropWrap);
      if (wrap && !wrap.contains(e.target)) {
        if (dd) dd.style.display = 'none';
        document.removeEventListener('click', _close);
      }
    });
  }, 0);
}

// ── filterTeamDropdown: filter list on keyup ───────────────────
function filterTeamDropdown(panelKey) {
  var cfg = panelCfg[panelKey];
  var input = document.getElementById(cfg.searchInput);
  var q = input ? input.value.toLowerCase() : '';
  renderDropdownList(panelKey, q);
  var dd = document.getElementById(cfg.dropdown);
  if (dd) dd.style.display = 'block';
}

// ── renderDropdownList: build dropdown items ───────────────────
function renderDropdownList(panelKey, query) {
  var cfg = panelCfg[panelKey];
  var dd = document.getElementById(cfg.dropdown);
  if (!dd) return;

  var people = teamData[currentRole] || [];
  var filtered = people.filter(function(p){
    return !query || p.name.toLowerCase().indexOf(query) !== -1;
  });

  if (filtered.length === 0) {
    dd.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-tertiary);">No results</div>';
    return;
  }

  dd.innerHTML = filtered.map(function(p){
    return '<div onclick="selectTeamPerson(\'' + panelKey + '\',\'' + p.id + '\',\'' + p.name + '\')" '
      + 'style="padding:8px 12px;font-size:12.5px;cursor:pointer;transition:background 0.1s;" '
      + 'onmouseover="this.style.background=\'var(--primary-muted)\'" '
      + 'onmouseout="this.style.background=\'\'">'
      + '<div style="font-weight:500;color:var(--text-primary);">' + p.name + '</div>'
      + '<div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">' + p.title + ' · ' + p.dept + '</div>'
      + '</div>';
  }).join('');
}

// ── selectTeamPerson: called when a person is clicked ─────────
function selectTeamPerson(panelKey, personId, personName) {
  var cfg = panelCfg[panelKey];
  selectedPerson[panelKey] = personId;

  // Update search input and chip
  var input = document.getElementById(cfg.searchInput);
  if (input) input.value = personName;
  var chip = document.getElementById(cfg.chip);
  var chipName = document.getElementById(cfg.chipName);
  if (chipName) chipName.textContent = personName;
  if (chip) chip.style.display = 'flex';

  // Close dropdown
  var dd = document.getElementById(cfg.dropdown);
  if (dd) dd.style.display = 'none';

  // Render data for selected person
  if (panelKey === 'leave') renderLeaveTeamData();
  if (panelKey === 'att')   renderAttTeamData();
}

// ── clearTeamSelection: × button on chip ──────────────────────
function clearTeamSelection(panelKey) {
  var cfg = panelCfg[panelKey];
  selectedPerson[panelKey] = null;
  var input = document.getElementById(cfg.searchInput);
  if (input) input.value = '';
  var chip = document.getElementById(cfg.chip);
  if (chip) chip.style.display = 'none';

  if (panelKey === 'leave') {
    var ltp = document.getElementById('leaveTeamPrompt');
    var ltc = document.getElementById('leaveTeamCards');
    if (ltp) ltp.style.display = '';
    if (ltc) ltc.style.display = 'none';
  }
  if (panelKey === 'att') {
    var atp = document.getElementById('attTeamPrompt');
    var atb = document.getElementById('attTeamBlocks');
    if (atp) atp.style.display = '';
    if (atb) atb.style.display = 'none';
  }
}

// ── renderLeaveTeamData: update leave cards + table ───────────
function renderLeaveTeamData() {
  var pid = selectedPerson.leave;
  var data = pid ? leavePersonData[pid] : null;

  var prompt = document.getElementById('leaveTeamPrompt');
  var cards  = document.getElementById('leaveTeamCards');
  if (!data) {
    if (prompt) prompt.style.display = '';
    if (cards)  cards.style.display  = 'none';
    return;
  }
  if (prompt) prompt.style.display = 'none';
  if (cards)  cards.style.display  = '';

  // Balance cards
  var balanceEl = document.getElementById('leaveTeamBalanceCards');
  if (balanceEl) {
    balanceEl.innerHTML =
      '<div class="leave-card" style="border-left:3px solid #0D9488;">'
        + '<div class="leave-card-icon" style="background:#F0FDFA;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#0D9488;white-space:nowrap;">' + data.el + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.elTotal + '</span></div><div class="leave-label">Earned Leave</div></div></div>'
      + '<div class="leave-card" style="border-left:3px solid #0EA5E9;">'
        + '<div class="leave-card-icon" style="background:#F0F9FF;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#0EA5E9;white-space:nowrap;">' + data.sl + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.slTotal + '</span></div><div class="leave-label">Sick Leave</div></div></div>'
      + '<div class="leave-card" style="border-left:3px solid #D97706;">'
        + '<div class="leave-card-icon" style="background:#FFFBEB;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#D97706;white-space:nowrap;">' + data.cl + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.clTotal + '</span></div><div class="leave-label">Casual Leave</div></div></div>'
      + '<div class="leave-card" style="border-left:3px solid #7C3AED;">'
        + '<div class="leave-card-icon" style="background:#F5F3FF;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#7C3AED;white-space:nowrap;">' + data.co + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.coTotal + '</span></div><div class="leave-label">Comp-Off</div></div></div>';
  }

  // History table
  var tbody = document.getElementById('leaveTeamTableBody');
  if (tbody) {
    tbody.innerHTML = data.history.map(function(r){
      var badgeClass = r.status === 'Approved' ? 'green' : (r.status === 'Pending' ? 'amber' : 'red');
      var actionBtn  = r.status === 'Pending'
        ? '<button class="approve-btn approve" onclick="showToast(\'Leave approved!\',\'success\')">Approve</button> '
          + '<button class="approve-btn reject" onclick="showToast(\'Leave rejected\',\'error\')">Reject</button>'
        : '—';
      var dateAttr = r.fromISO ? ' data-leave-date="' + r.fromISO + '"' : '';
      return '<tr data-leave-status="' + r.status.toLowerCase() + '"' + dateAttr + '><td>' + r.type + '</td><td>' + r.from + '</td><td>' + r.to + '</td><td>' + r.days
        + '</td><td><span class="badge ' + badgeClass + '">' + r.status + '</span></td><td>' + actionBtn + '</td></tr>';
    }).join('');
    // Clear date range pickers and reset button state for the newly loaded person
    var drFrom = document.getElementById('teamLeaveDRFrom');
    var drTo   = document.getElementById('teamLeaveDRTo');
    if (drFrom) drFrom.value = '';
    if (drTo)   drTo.value   = '';
    var drPill    = document.getElementById('teamLeaveDRActivePill');
    var drClearB  = document.getElementById('teamLeaveDRClearBtn');
    var drTrigger = document.getElementById('teamLeaveDRTrigger');
    var drPop     = document.getElementById('teamLeaveDRPopover');
    var drLabel   = document.getElementById('teamLeaveDRBtnLabel');
    if (drPill)    { drPill.textContent = ''; drPill.style.display = 'none'; }
    if (drClearB)  drClearB.style.display = 'none';
    if (drTrigger) drTrigger.classList.remove('active');
    if (drPop)     drPop.classList.remove('open');
    if (drLabel)   drLabel.style.display = '';
    // Update filter counts and reset segment to All
    updateTeamLeaveFilterCounts(data.history);
    // Apply whichever filter is currently active (stays on All for fresh load)
    var activeBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn.active');
    filterTeamLeaves(activeBtn ? activeBtn.getAttribute('data-value') : 'all', activeBtn);
  }
}

// ── renderAttTeamData: update Today + Monthly blocks ──────────
function renderAttTeamData() {
  var pid  = selectedPerson.att;
  var data = pid ? attPersonData[pid] : null;

  var prompt = document.getElementById('attTeamPrompt');
  var blocks = document.getElementById('attTeamBlocks');
  if (!data) {
    if (prompt) prompt.style.display = '';
    if (blocks) blocks.style.display = 'none';
    return;
  }
  if (prompt) prompt.style.display = 'none';
  if (blocks) blocks.style.display = '';

  var td = data.today;
  var statusBadge = td.status === 'Present' ? 'green' : (td.status === 'On Leave' ? 'amber' : 'red');

  // Today stat mini-cards
  var todayCards = document.getElementById('attTodayCards');
  if (todayCards) {
    todayCards.innerHTML =
      '<div style="background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<div style="font-size:12px;font-weight:600;color:var(--primary);">' + td.in + '</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">In Time</div></div>'
      + '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<div style="font-size:12px;font-weight:600;color:var(--text-primary);">' + td.out + '</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Out Time</div></div>'
      + '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<div style="font-size:12px;font-weight:600;color:var(--text-primary);">' + td.hrs + '</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Work Hrs</div></div>'
      + '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<span class="badge ' + statusBadge + '">' + td.status + '</span><div style="font-size:10px;color:var(--text-secondary);margin-top:4px;">Status</div></div>';
  }

  // Today table row
  var todayRow = document.getElementById('attTodayRow');
  var people   = teamData[currentRole] || [];
  var person   = people.find(function(p){ return p.id === pid; }) || { name: pid };
  if (todayRow) {
    todayRow.innerHTML = '<tr><td><b>' + person.name + '</b></td>'
      + '<td><span class="badge ' + statusBadge + '">' + td.status + '</span></td>'
      + '<td>' + td.in + '</td><td>' + td.out + '</td><td>' + td.hrs + '</td></tr>';
  }

  // Monthly row
  var md = data.monthly;
  var monthlyRow = document.getElementById('attMonthlyRow');
  if (monthlyRow) {
    monthlyRow.innerHTML = '<tr>'
      + '<td>' + md.wd + '</td><td>' + md.present + '</td><td>' + md.absent + '</td>'
      + '<td>' + md.late + '</td><td>' + md.avg + '</td>'
      + '<td><span class="badge ' + md.pctBadge + '">' + md.pct + '</span></td></tr>';
  }
}
// ===== TAX DOCS FY FILTER =====
function filterTaxDocsByFY(fy) {
  var fys = ['2025-26', '2024-25', '2023-24'];
  fys.forEach(function(y) {
    var el = document.getElementById('taxdocs-fy-' + y);
    if (el) el.style.display = (y === fy) ? '' : 'none';
  });
  var title = document.getElementById('taxdocs-main-title');
  if (title) title.textContent = 'Tax Documents — FY ' + fy;
}

// ===== DARK MODE TOGGLE =====
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  const label = document.getElementById('darkModeLabel');
  if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  try { localStorage.setItem('pf-theme', isDark ? 'dark' : 'light'); } catch(e) {}
}
// Restore theme on load
(function() {
  try {
    if (localStorage.getItem('pf-theme') === 'dark') {
      document.documentElement.classList.add('dark');
      var label = document.getElementById('darkModeLabel');
      if (label) label.textContent = 'Light Mode';
    }
  } catch(e) {}
})();
// ===== HELPDESK STATUS FILTER =====
// ===== HELP DESK FILTERS =====

// Core status filter — called by both segment control and date-clear restore
function filterHelpDeskTickets(status) {
  // Clear date picker when status filter is applied
  var datePicker = document.getElementById('hdDateFilter');
  if (datePicker) datePicker.value = '';

  var cards = document.querySelectorAll('#my-tickets-tab .ticket-card');
  var visible = 0;
  cards.forEach(function(card) {
    var s = card.getAttribute('data-hd-status');
    // 'open' matches both 'open' (formerly in-progress & escalated)
    var show = (status === 'all') || (s === status);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  var empty = document.getElementById('hdFilter-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}

// Segmented control handler — updates active pill, then delegates to core filter
function segFilterHD(value, btn) {
  document.querySelectorAll('#hdFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-hd-value') === value);
  });
  filterHelpDeskTickets(value);
}

// Date picker filter — shows tickets raised on the selected date; clear restores status filter
function filterHDByDate(selectedDate) {
  var cards = document.querySelectorAll('#my-tickets-tab .ticket-card');
  if (!selectedDate) {
    // Restore whichever segment is currently active
    var activeBtn = document.querySelector('#hdFilterSegment .task-seg-btn.active');
    var activeVal = activeBtn ? activeBtn.getAttribute('data-hd-value') : 'open';
    filterHelpDeskTickets(activeVal);
    return;
  }
  // Deactivate all segment buttons while date filter is active
  document.querySelectorAll('#hdFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  var visible = 0;
  cards.forEach(function(card) {
    var raised = card.getAttribute('data-hd-raised');
    var show = (raised === selectedDate);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  var empty = document.getElementById('hdFilter-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}

// ===== TASK FILTER =====
function filterMyTasks(statusFilter) {
  // When status changes, clear the date filter so they don't conflict
  var dateInput = document.getElementById('taskDateFilter');
  if (dateInput) dateInput.value = '';

  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(card) {
    var s = card.getAttribute('data-status');
    var show = (statusFilter === 'all') || (s === statusFilter);
    card.style.display = show ? '' : 'none';
  });
}

// Segmented control handler — scoped to #taskFilterSegment, syncs hidden select
function segFilterMyTasks(value, btn) {
  // Update hidden select for backward compat
  var sel = document.getElementById('taskFilterSelect');
  if (sel) sel.value = value;
  // Update active state only on To Do segment buttons (scoped)
  document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-value') === value);
  });
  filterMyTasks(value);
}

function filterMyTasksByDate(selectedDate) {
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  if (!selectedDate) {
    // No date selected — restore the current status filter
    var sel = document.getElementById('taskFilterSelect');
    filterMyTasks(sel ? sel.value : 'open');
    return;
  }
  // Deactivate To Do segment buttons when filtering by date
  document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b) { b.classList.remove('active'); });
  // Show any card whose due date matches, regardless of status
  cards.forEach(function(card) {
    var due = card.getAttribute('data-due');
    card.style.display = (due === selectedDate) ? '' : 'none';
  });
}

// Initialise: show only open tasks on load
document.addEventListener('DOMContentLoaded', function() {
  filterMyTasks('open');
  // Set min date for due date picker to today
  var today = new Date().toISOString().split('T')[0];
  var dd = document.getElementById('nt_dueDate');
  if (dd) dd.min = today;
});

// ===== LEAVE CC (NOTIFICATION ONLY — no approval logic) =====
var lvCCList = [];

function lvRenderCCTags() {
  var container = document.getElementById('lv_cc_tags');
  if (!container) return;
  container.innerHTML = '';
  lvCCList.forEach(function(name, idx) {
    var tag = document.createElement('span');
    tag.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:2px 7px;border-radius:10px;font-size:11px;font-weight:500;cursor:default;white-space:nowrap;'
      + 'background:var(--primary-muted);border:1px solid var(--primary-border);color:var(--primary);';
    tag.innerHTML = name
      + '<button onclick="lvRemoveCC('+idx+')" style="background:none;border:none;cursor:pointer;padding:0;line-height:1;font-size:12px;color:inherit;margin-left:1px;" title="Remove">×</button>';
    container.appendChild(tag);
  });
}

function lvAddCC(val) {
  var v = val.trim().replace(/,$/,'').trim();
  if (!v || lvCCList.indexOf(v) !== -1) return;
  lvCCList.push(v);
  lvRenderCCTags();
}

function lvRemoveCC(idx) {
  lvCCList.splice(idx, 1);
  lvRenderCCTags();
}

function lvCCKeydown(e) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    var input = document.getElementById('lv_cc_input');
    if (input && input.value.trim()) { lvAddCC(input.value); input.value = ''; }
  } else if (e.key === 'Backspace') {
    var input = document.getElementById('lv_cc_input');
    if (input && input.value === '' && lvCCList.length > 0) {
      lvCCList.pop(); lvRenderCCTags();
    }
  }
}

function lvCCInput(e) {
  var input = e.target;
  if (input.value.endsWith(')')) { lvAddCC(input.value); input.value = ''; }
}

// Focus styles for leave CC wrap
document.addEventListener('DOMContentLoaded', function() {
  var inp = document.getElementById('lv_cc_input');
  var wrap = document.getElementById('lv_cc_wrap');
  if (inp && wrap) {
    inp.addEventListener('focus', function(){ wrap.style.borderColor='var(--primary)'; wrap.style.boxShadow='0 0 0 2px rgba(13,148,136,0.15)'; });
    inp.addEventListener('blur',  function(){ wrap.style.borderColor='var(--border)';  wrap.style.boxShadow=''; });
  }
});

// ===== NEW TASK FEATURE =====

// CC tag management
var ntCCList = [];
var ntManagerHRTerms = ['manager','hr','admin'];

function ntIsApprover(name) {
  var lower = name.toLowerCase();
  return ntManagerHRTerms.some(function(t){ return lower.indexOf(t) !== -1; });
}

function ntUpdateApprovalNotice() {
  var hasApprover = ntCCList.some(ntIsApprover);
  var notice = document.getElementById('nt_approval_notice');
  if (notice) notice.style.display = hasApprover ? 'flex' : 'none';
}

function ntRenderCCTags() {
  var container = document.getElementById('nt_cc_tags');
  if (!container) return;
  container.innerHTML = '';
  ntCCList.forEach(function(name, idx) {
    var isApprover = ntIsApprover(name);
    var tag = document.createElement('span');
    tag.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:2px 7px;border-radius:10px;font-size:11px;font-weight:500;cursor:default;white-space:nowrap;'
      + (isApprover ? 'background:var(--warning-muted);border:1px solid #FDE68A;color:var(--warning);'
                    : 'background:var(--primary-muted);border:1px solid var(--primary-border);color:var(--primary);');
    tag.innerHTML = name
      + '<button onclick="ntRemoveCC('+idx+')" style="background:none;border:none;cursor:pointer;padding:0;line-height:1;font-size:12px;color:inherit;margin-left:1px;" title="Remove">×</button>';
    container.appendChild(tag);
  });
  ntUpdateApprovalNotice();
}

function ntAddCC(val) {
  var v = val.trim().replace(/,$/,'').trim();
  if (!v || ntCCList.indexOf(v) !== -1) return;
  ntCCList.push(v);
  ntRenderCCTags();
}

function ntRemoveCC(idx) {
  ntCCList.splice(idx, 1);
  ntRenderCCTags();
}

function ntCCKeydown(e) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    var input = document.getElementById('nt_cc_input');
    if (input && input.value.trim()) { ntAddCC(input.value); input.value = ''; }
  } else if (e.key === 'Backspace') {
    var input = document.getElementById('nt_cc_input');
    if (input && input.value === '' && ntCCList.length > 0) {
      ntCCList.pop(); ntRenderCCTags();
    }
  }
}

function ntCCInput(e) {
  var input = e.target;
  // Auto-add if user selected from datalist (ends with closing paren)
  if (input.value.endsWith(')')) {
    ntAddCC(input.value); input.value = '';
  }
}

// CC wrap focus styles
document.addEventListener('DOMContentLoaded', function() {
  var inp = document.getElementById('nt_cc_input');
  var wrap = document.getElementById('nt_cc_wrap');
  if (inp && wrap) {
    inp.addEventListener('focus', function(){ wrap.style.borderColor='var(--primary)'; wrap.style.boxShadow='0 0 0 2px rgba(13,148,136,0.15)'; });
    inp.addEventListener('blur',  function(){ wrap.style.borderColor='var(--border)'; wrap.style.boxShadow=''; });
  }
  // Initialise Help Desk: show open tickets by default
  filterHelpDeskTickets('open');
});

// Priority radio visual update
function ntPrioChange() {
  var colorMap = { low: 'var(--success)', medium: 'var(--warning)', high: 'var(--danger)' };
  var ids = { low: 'nt_prio_low_lbl', medium: 'nt_prio_med_lbl', high: 'nt_prio_high_lbl' };
  // Reset all to secondary
  Object.keys(ids).forEach(function(v) {
    var el = document.getElementById(ids[v]);
    if (el) el.style.color = 'var(--text-secondary)';
  });
  // Highlight selected
  var selected = document.querySelector('input[name="nt_priority"]:checked');
  if (selected && ids[selected.value]) {
    var el = document.getElementById(ids[selected.value]);
    if (el) el.style.color = colorMap[selected.value];
  }
}

// Description word counter
function ntDescCount() {
  var ta = document.getElementById('nt_description');
  var counter = document.getElementById('nt_desc_count');
  var errLimit = document.getElementById('nt_err_desc_limit');
  if (!ta || !counter) return;
  var words = ta.value.trim() === '' ? 0 : ta.value.trim().split(/\s+/).length;
  counter.textContent = words + ' / 1000 words';
  counter.style.color = words > 1000 ? 'var(--danger)' : 'var(--text-tertiary)';
  if (errLimit) errLimit.style.display = words > 1000 ? '' : 'none';
}

// File upload
function ntDragOver(e) {
  e.preventDefault();
  var dz = document.getElementById('nt_drop_zone');
  if (dz) { dz.style.borderColor='var(--primary)'; dz.style.background='var(--primary-muted)'; }
}
function ntDragLeave(e) {
  var dz = document.getElementById('nt_drop_zone');
  if (dz) { dz.style.borderColor='var(--border)'; dz.style.background='var(--bg)'; }
}
function ntDrop(e) {
  e.preventDefault();
  ntDragLeave(e);
  var file = e.dataTransfer && e.dataTransfer.files[0];
  if (file) ntShowFile(file);
}
function ntFileSelected(e) {
  var file = e.target.files[0];
  if (file) ntShowFile(file);
}
function ntShowFile(file) {
  var info = document.getElementById('nt_file_info');
  var name = document.getElementById('nt_file_name');
  var size = document.getElementById('nt_file_size');
  if (info) info.style.display = 'flex';
  if (name) name.textContent = file.name;
  if (size) size.textContent = (file.size / 1024).toFixed(1) + ' KB';
}
function ntClearFile() {
  var info = document.getElementById('nt_file_info');
  var input = document.getElementById('nt_file_input');
  if (info) info.style.display = 'none';
  if (input) input.value = '';
}

// Validate + Save
function ntSave() {
  var valid = true;
  var nameEl = document.getElementById('nt_taskName');
  var nameErr = document.getElementById('nt_err_taskName');
  var descEl = document.getElementById('nt_description');
  var descErr = document.getElementById('nt_err_desc');
  var descLimitErr = document.getElementById('nt_err_desc_limit');

  // Task name
  if (!nameEl || !nameEl.value.trim()) {
    if (nameErr) nameErr.style.display = '';
    if (nameEl) { nameEl.classList.add('input-error'); nameEl.focus(); }
    valid = false;
  } else {
    if (nameErr) nameErr.style.display = 'none';
    if (nameEl) nameEl.classList.remove('input-error');
  }

  // Description
  var descWords = (descEl && descEl.value.trim()) ? descEl.value.trim().split(/\s+/).length : 0;
  if (!descEl || !descEl.value.trim()) {
    if (descErr) descErr.style.display = '';
    if (descEl) descEl.classList.add('input-error');
    valid = false;
  } else if (descWords > 1000) {
    if (descLimitErr) descLimitErr.style.display = '';
    if (descEl) descEl.classList.add('input-error');
    valid = false;
  } else {
    if (descErr) descErr.style.display = 'none';
    if (descLimitErr) descLimitErr.style.display = 'none';
    if (descEl) descEl.classList.remove('input-error');
  }

  if (!valid) return;

  // Determine if needs approval
  var hasApprover = ntCCList.some(ntIsApprover);
  var msg = hasApprover
    ? 'Task saved! It will be routed for approval on completion.'
    : 'Task created successfully!';
  showToast(msg, 'success');
  ntReset();
  // Switch back to My Tasks tab
  var myTasksTab = document.querySelector('.tab[onclick*="my-tasks-content"]');
  if (myTasksTab) switchTab(myTasksTab, 'my-tasks-content');
}

// Cancel — discard and go back to My Tasks
function ntCancel() {
  ntReset();
  var myTasksTab = document.querySelector('.tab[onclick*="my-tasks-content"]');
  if (myTasksTab) switchTab(myTasksTab, 'my-tasks-content');
}

// Reset form to defaults
function ntReset() {
  var f = ['nt_taskName','nt_description','nt_dueDate'];
  f.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var assignee = document.getElementById('nt_assignee');
  if (assignee) assignee.value = 'me';
  ntCCList = [];
  ntRenderCCTags();
  // Reset priority to Low
  var lowRadio = document.querySelector('input[name="nt_priority"][value="low"]');
  if (lowRadio) { lowRadio.checked = true; ntPrioChange(); }
  // Reset word counter
  var counter = document.getElementById('nt_desc_count');
  if (counter) counter.textContent = '0 / 1000 words';
  // Clear errors
  ['nt_err_taskName','nt_err_desc','nt_err_desc_limit'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display='none';
  });
  ['nt_taskName','nt_description'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.classList.remove('input-error');
  });
  ntClearFile();
  ntUpdateApprovalNotice();
}

// ── Requests Filter Functions ──────────────────────────────────────
function filterMyRequests(status, btn) {
  // Update segment buttons
  document.querySelectorAll('#reqFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  // Clear date filter
  var dateFilter = document.getElementById('reqDateFilter');
  if (dateFilter) dateFilter.value = '';
  // Filter cards
  var cards = document.querySelectorAll('#req-cards-wrap .card');
  cards.forEach(function(card) {
    var cardStatus = card.getAttribute('data-req-status') || '';
    if (status === 'all' || cardStatus === status) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterReqByDate(selectedDate) {
  if (!selectedDate) {
    // Restore active filter
    var activeBtn = document.querySelector('#reqFilterSegment .task-seg-btn.active');
    var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
    filterMyRequests(status, activeBtn);
    return;
  }
  var cards = document.querySelectorAll('#req-cards-wrap .card');
  cards.forEach(function(card) {
    var cardDate = card.getAttribute('data-req-date') || '';
    card.style.display = (cardDate === selectedDate) ? '' : 'none';
  });
}

// ── Edit Request Modal ─────────────────────────────────────────────
// ── Edit Ticket Modal: Help Desk ──────────────────────────────────

function openEditHdModal(tktNum, category, priority, subject, description, raisedDate, status) {
  // Populate ticket number
  document.getElementById('editHdNum').textContent = '#' + tktNum;

  // Category
  var catSel = document.getElementById('editHdCategory');
  if (catSel) {
    for (var i = 0; i < catSel.options.length; i++) {
      if (catSel.options[i].text === category) { catSel.selectedIndex = i; break; }
    }
  }

  // Priority
  var priSel = document.getElementById('editHdPriority');
  if (priSel) {
    for (var j = 0; j < priSel.options.length; j++) {
      if (priSel.options[j].text === priority) { priSel.selectedIndex = j; break; }
    }
  }

  // Subject, description, date
  var subjEl = document.getElementById('editHdSubject');
  if (subjEl) subjEl.value = subject || '';
  var descEl = document.getElementById('editHdDescription');
  if (descEl) descEl.value = description || '';
  var dateEl = document.getElementById('editHdDate');
  if (dateEl) dateEl.value = raisedDate || '';

  // Reset attachment label
  document.getElementById('editHdAttachLabel').textContent = 'Upload supporting document';
  var fileInput = document.getElementById('editHdAttachment');
  if (fileInput) fileInput.value = '';

  // Status badge
  var statusEl = document.getElementById('editHdStatus');
  if (statusEl) statusEl.textContent = status || '';

  // Open modal
  document.getElementById('editHdModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEditHdModal() {
  document.getElementById('editHdModal').classList.remove('open');
  document.body.style.overflow = '';
}

function saveEditHd() {
  var subject = document.getElementById('editHdSubject').value.trim();
  if (!subject) { showToast('Subject is required.', 'error'); return; }
  closeEditHdModal();
  showToast('Ticket updated successfully!', 'success');
}

function openEditReqModal(reqNum, reqType, reqTitle, reqAmount, reqDate, reqStatus) {
  document.getElementById('editReqNum').textContent = reqNum;
  var typeSelect = document.getElementById('editReqType');
  if (typeSelect) {
    for (var i = 0; i < typeSelect.options.length; i++) {
      if (typeSelect.options[i].text === reqType) { typeSelect.selectedIndex = i; break; }
    }
  }
  var titleEl = document.getElementById('editReqTitle');
  if (titleEl) titleEl.value = reqTitle || '';
  var amountEl = document.getElementById('editReqAmount');
  if (amountEl) amountEl.value = reqAmount || '';
  var dateEl = document.getElementById('editReqDate');
  if (dateEl) dateEl.value = reqDate || '';
  var statusEl = document.getElementById('editReqStatus');
  if (statusEl) statusEl.textContent = reqStatus || '';
  document.getElementById('editReqAttachLabel').textContent = 'Upload Receipt or Invoice';
  document.getElementById('editReqModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEditReqModal() {
  document.getElementById('editReqModal').classList.remove('open');
  document.body.style.overflow = '';
}

function saveEditReq() {
  var amount = document.getElementById('editReqAmount').value;
  var attachment = document.getElementById('editReqAttachment').files[0];
  if (!amount || parseFloat(amount) <= 0) {
    showToast('Amount is required.', 'error'); return;
  }
  if (!attachment) {
    showToast('Please attach a receipt or invoice.', 'error'); return;
  }
  closeEditReqModal();
  showToast('Request updated successfully!', 'success');
}

// ── Raise Request Form Validation & Submit ─────────────────────────
// Auto-generate claim number on page load / tab open
var _reqClaimCounter = 1045;
function generateClaimNumber() {
  _reqClaimCounter++;
  var num = 'CLM-' + _reqClaimCounter;
  var el = document.getElementById('raiseClaimNumText');
  if (el) el.textContent = num;
  var el2 = document.getElementById('claimTypeFormNum');
  if (el2) el2.textContent = num;
  return num;
}
// Generate on first view of tab
(function() {
  var tab = document.querySelector('[onclick*="raise-request-tab"]');
  if (tab) {
    var orig = tab.getAttribute('onclick');
    tab.setAttribute('onclick', orig + '; generateClaimNumber();');
  }
})();

// ── Claim Type Page routing (Change 5) ───────────────
var _claimTypeConfig = {
  travel:  { emoji: '✈️',  label: 'Travel Claim' },
  general: { emoji: '🧾', label: 'General Claim' },
  misc:    { emoji: '📋', label: 'Miscellaneous Claim' }
};

// Shared subcategory list for all claim types
var _claimSubcategoryOptions = [
  'Business Promotion','Conveyance Exp','Daily Allowance','Fuel Exp',
  'Internet Exp','Others','Refreshment Exp','Telephone Exp','Travelling Exp'
];

var _activeClaimType = '';
var _claimMode = 'single';
var _multiClaimRowCounter = 0;

function selectClaimTypeCard(type) {
  // Highlight selected card
  ['travel','general','misc'].forEach(function(t) {
    var card = document.getElementById('claimCard_' + t);
    if (!card) return;
    if (t === type) {
      card.style.borderColor = 'var(--primary)';
      card.style.background  = 'var(--primary-muted)';
    } else {
      card.style.borderColor = 'var(--border)';
      card.style.background  = 'var(--surface)';
    }
  });
  _activeClaimType = type;

  // Show the form section
  var sec = document.getElementById('claimFormSection');
  if (sec) sec.style.display = '';

  // Default to single mode
  setClaimMode('single');

  // Scroll into view
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetClaimTypeSelector() {
  _activeClaimType = '';
  ['travel','general','misc'].forEach(function(t) {
    var card = document.getElementById('claimCard_' + t);
    if (card) { card.style.borderColor = 'var(--border)'; card.style.background = 'var(--surface)'; }
  });
  var sec = document.getElementById('claimFormSection');
  if (sec) sec.style.display = 'none';
  // Reset single form
  var fields = ['sc_subcategory','sc_amount','sc_date','sc_from','sc_to','sc_purpose','sc_client','sc_description'];
  fields.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var lbl = document.getElementById('sc_receiptLabel');
  if(lbl) lbl.textContent = 'Upload receipt (PDF, JPG, PNG)';
  var inp = document.getElementById('sc_receipt');
  if(inp) inp.value='';
  // Hide travel fields
  var tf = document.getElementById('sc_travelFields');
  if(tf) tf.style.display = 'none';
  // Clear multi rows
  var mr = document.getElementById('multiClaimRows');
  if(mr) mr.innerHTML = '';
  _multiClaimRowCounter = 0;
  updateMultiClaimTotal();
}

function setClaimMode(mode) {
  _claimMode = mode;
  var singleBtn = document.getElementById('modeSingleBtn');
  var multiBtn  = document.getElementById('modeMultiBtn');
  var singleForm = document.getElementById('singleClaimForm');
  var multiForm  = document.getElementById('multiClaimForm');

  if (mode === 'single') {
    if(singleBtn){ singleBtn.style.background='var(--primary)'; singleBtn.style.color='white'; }
    if(multiBtn) { multiBtn.style.background='var(--bg)'; multiBtn.style.color='var(--text-secondary)'; }
    if(singleForm) singleForm.style.display = '';
    if(multiForm)  multiForm.style.display  = 'none';
  } else {
    if(multiBtn) { multiBtn.style.background='var(--primary)'; multiBtn.style.color='white'; }
    if(singleBtn){ singleBtn.style.background='var(--bg)'; singleBtn.style.color='var(--text-secondary)'; }
    if(singleForm) singleForm.style.display = 'none';
    if(multiForm)  multiForm.style.display  = '';
    // Add first row if empty
    var mr = document.getElementById('multiClaimRows');
    if(mr && mr.children.length === 0) addMultiClaimRow();
  }
}

function onSingleSubcategoryChange(sub) {
  var tf = document.getElementById('sc_travelFields');
  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  if(tf) tf.style.display = (travelSubs.indexOf(sub) !== -1) ? 'block' : 'none';
  // Clear travel fields when hiding
  if(travelSubs.indexOf(sub) === -1) {
    var f = document.getElementById('sc_from'); if(f) f.value='';
    var t = document.getElementById('sc_to');   if(t) t.value='';
  }
}

function addMultiClaimRow() {
  _multiClaimRowCounter++;
  var idx = _multiClaimRowCounter;
  var container = document.getElementById('multiClaimRows');
  if(!container) return;

  var row = document.createElement('div');
  row.id = 'mcRow_' + idx;
  row.style.cssText = 'border:1px solid var(--border);border-radius:var(--radius);padding:12px 14px;background:var(--bg);position:relative;';

  row.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <span style="font-size:11px;font-weight:600;color:var(--text-tertiary);font-family:var(--mono);">Claim #${idx}</span>
      <button onclick="removeMultiClaimRow(${idx})" title="Remove" style="width:22px;height:22px;border-radius:5px;border:1px solid var(--border);background:var(--danger-muted);color:var(--danger);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:9px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div class="form-group" style="margin:0;">
          <div class="form-label">Subcategory <span style="color:var(--danger)">*</span></div>
          <select class="form-input" id="mc_sub_${idx}" onchange="onMCSubChange(${idx},this.value)">
            <option value="">— Select —</option>
            <option>Business Promotion</option><option>Conveyance Exp</option>
            <option>Daily Allowance</option><option>Fuel Exp</option>
            <option>Internet Exp</option><option>Others</option>
            <option>Refreshment Exp</option><option>Telephone Exp</option>
            <option>Travelling Exp</option>
          </select>
        </div>
        <div class="form-group" style="margin:0;">
          <div class="form-label">Amount (₹) <span style="color:var(--danger)">*</span></div>
          <input class="form-input" id="mc_amount_${idx}" type="number" min="0.01" step="0.01" placeholder="₹ 0.00" oninput="updateMultiClaimTotal()">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div class="form-group" style="margin:0;">
          <div class="form-label">Date <span style="color:var(--danger)">*</span></div>
          <input class="form-input" id="mc_date_${idx}" type="date">
        </div>
        <div class="form-group" style="margin:0;">
          <div class="form-label">Description</div>
          <input class="form-input" id="mc_desc_${idx}" type="text" placeholder="Optional description">
        </div>
      </div>
      <!-- Travel extra fields (Travel From / Travel To only) -->
      <div id="mc_travelFields_${idx}" style="display:none;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div class="form-group" style="margin:0;"><div class="form-label">Travel From <span style="color:var(--danger)">*</span></div><input class="form-input" id="mc_from_${idx}" placeholder="e.g. Bangalore"></div>
          <div class="form-group" style="margin:0;"><div class="form-label">Travel To <span style="color:var(--danger)">*</span></div><input class="form-input" id="mc_to_${idx}" placeholder="e.g. Mumbai"></div>
        </div>
      </div>
      <!-- Receipt upload -->
      <div class="form-group" style="margin:0;">
        <div class="form-label">Receipt</div>
        <label class="file-upload-label" for="mc_receipt_${idx}" style="padding:6px 10px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <span id="mc_receiptLabel_${idx}">Upload receipt</span>
        </label>
        <input type="file" id="mc_receipt_${idx}" style="display:none" accept=".pdf,.jpg,.jpeg,.png"
          onchange="document.getElementById('mc_receiptLabel_${idx}').textContent=this.files[0]?this.files[0].name:'Upload receipt'">
      </div>
    </div>`;

  container.appendChild(row);
}

function onMCSubChange(idx, sub) {
  var tf = document.getElementById('mc_travelFields_' + idx);
  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  if(tf) tf.style.display = (travelSubs.indexOf(sub) !== -1) ? 'block' : 'none';
  if(travelSubs.indexOf(sub) === -1) {
    var f = document.getElementById('mc_from_'+idx); if(f) f.value='';
    var t = document.getElementById('mc_to_'+idx);   if(t) t.value='';
  }
}

function removeMultiClaimRow(idx) {
  var row = document.getElementById('mcRow_' + idx);
  if(row) row.remove();
  updateMultiClaimTotal();
}

function updateMultiClaimTotal() {
  var total = 0;
  document.querySelectorAll('#multiClaimRows input[type="number"]').forEach(function(inp){
    var v = parseFloat(inp.value);
    if(!isNaN(v) && v > 0) total += v;
  });
  var el = document.getElementById('multiClaimTotal');
  if(el) el.textContent = '₹ ' + total.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function submitSingleClaim() {
  var sub  = document.getElementById('sc_subcategory').value;
  var amt  = document.getElementById('sc_amount').value;
  var dt   = document.getElementById('sc_date').value;

  if(!sub)  { showToast('Please select a Subcategory.','error'); return; }
  if(!amt || parseFloat(amt) <= 0) { showToast('Please enter a valid positive Amount.','error'); return; }
  if(!dt)   { showToast('Please select a valid Claim Date.','error'); return; }

  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  if(travelSubs.indexOf(sub) !== -1) {
    var from = document.getElementById('sc_from').value.trim();
    var to   = document.getElementById('sc_to').value.trim();
    if(!from) { showToast('Travel From is required for this expense type.','error'); return; }
    if(!to)   { showToast('Travel To is required for this expense type.','error'); return; }
  }

  var claimNum = document.getElementById('raiseClaimNumText') ? document.getElementById('raiseClaimNumText').textContent : 'CLM-1045';
  showToast('Claim ' + claimNum + ' submitted successfully!', 'success');
  resetClaimTypeSelector();
  generateClaimNumber();
}

function submitMultiClaim() {
  var rows = document.querySelectorAll('#multiClaimRows > div');
  if(rows.length === 0) { showToast('Please add at least one claim row.','error'); return; }
  var valid = true;
  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  rows.forEach(function(row) {
    var id = row.id.replace('mcRow_','');
    if(!document.getElementById('mc_sub_'+id).value)    { valid=false; }
    var a = document.getElementById('mc_amount_'+id).value;
    if(!a || parseFloat(a)<=0) { valid=false; }
    if(!document.getElementById('mc_date_'+id).value)   { valid=false; }
    var sub = document.getElementById('mc_sub_'+id).value;
    if(travelSubs.indexOf(sub) !== -1) {
      if(!document.getElementById('mc_from_'+id).value.trim())    valid=false;
      if(!document.getElementById('mc_to_'+id).value.trim())      valid=false;
    }
  });
  if(!valid) { showToast('Please fill all required fields in every claim row.','error'); return; }
  var claimNum = document.getElementById('raiseClaimNumText') ? document.getElementById('raiseClaimNumText').textContent : 'CLM-1045';
  showToast(rows.length + ' claim(s) submitted under ' + claimNum + ' successfully!', 'success');
  resetClaimTypeSelector();
  generateClaimNumber();
}

function openClaimTypePage(type) {
  // Legacy function — delegate to new card selector
  selectClaimTypeCard(type);
}

function closeClaimTypePage() {
  resetClaimTypeSelector();
}

// ── IT Declaration header FY switch (Change 1) ───────
function switchITDeclHeaderFY(val) {
  var titleEl  = document.getElementById('itDeclCardTitle');
  var badgeEl  = document.getElementById('itDeclStatusBadge');
  var formCard = document.querySelector('#taxdocs-itdecl-tab .card:last-of-type');

  // Also sync the inner form dropdown if present
  var innerSel = document.getElementById('itDeclFYSelect');

  if (val === '2025-26') {
    if (titleEl) titleEl.textContent = 'IT Declaration — FY 2025-26';
    if (badgeEl) { badgeEl.textContent = 'Pending Submission'; badgeEl.className = 'badge amber'; }
    if (innerSel) { innerSel.value = 'current'; switchITDeclFY('current'); }
  } else {
    if (titleEl) titleEl.textContent = 'IT Declaration — FY ' + val;
    if (badgeEl) { badgeEl.textContent = 'Submitted'; badgeEl.className = 'badge green'; }
    if (innerSel) { innerSel.value = val; switchITDeclFY(val); }
    showToast('Viewing FY ' + val + ' IT Declaration (read-only)', 'info');
  }
}

// ── Proof of Investment header FY switch ───────────
function switchPOIHeaderFY(val) {
  var titleEl = document.getElementById('poiCardTitle');
  var badgeEl = document.getElementById('poiStatusBadge');
  var poiContent = document.getElementById('taxdocs-poi-tab');

  if (val === '2025-26') {
    if (titleEl) titleEl.textContent = 'Proof of Investment — FY 2025-26';
    if (badgeEl) { badgeEl.textContent = '2 Pending'; badgeEl.className = 'badge red'; }
    // Restore current FY content visibility
    if (poiContent) {
      var uploadCard = poiContent.querySelector('.card:last-of-type');
      if (uploadCard) uploadCard.style.display = '';
      var submittedCard = poiContent.querySelector('.card:nth-of-type(2)');
      if (submittedCard) submittedCard.style.display = '';
    }
  } else {
    if (titleEl) titleEl.textContent = 'Proof of Investment — FY ' + val;
    if (badgeEl) { badgeEl.textContent = 'Submitted'; badgeEl.className = 'badge green'; }
    // Hide upload card for previous FY (read-only view)
    if (poiContent) {
      var uploadCard = poiContent.querySelector('.card:last-of-type');
      if (uploadCard) uploadCard.style.display = 'none';
    }
    showToast('Viewing FY ' + val + ' Proof of Investment (read-only)', 'info');
  }
}

function enableRaiseClaimEdit() {
  showToast('Form is now editable', 'info');
}

function saveReqFormDraft() {
  showToast('Draft saved — ' + (document.getElementById('raiseClaimNumText') ? document.getElementById('raiseClaimNumText').textContent : 'CLM-1045'), 'success');
}

function saveDraftEditReq() {
  showToast('Draft saved successfully', 'success');
  closeEditReqModal();
}

function submitReqForm() {
  // Legacy — delegate to new single claim submit
  submitSingleClaim();
}

function handleReqAttach(input) {
  var label = document.getElementById('reqAttachLabel');
  if (label) label.textContent = input.files[0] ? input.files[0].name : 'Upload Receipt or Invoice';
}
// ── Date Range Filter: To Do Panel ────────────────────────────────
function toggleTaskDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('taskDRPopover');
  var btn = document.getElementById('taskDRTrigger');
  var isOpen = pop.classList.contains('open');
  // Close all other popovers first
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyTaskDateRangeFromPopover() {
  var pop = document.getElementById('taskDRPopover');
  var btn = document.getElementById('taskDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyTaskDateRange();
}
function applyTaskDateRange() {
  var from = document.getElementById('taskDRFrom').value;
  var to   = document.getElementById('taskDRTo').value;
  if (!from && !to) { clearTaskDateRange(); return; }

  // Update button state — show only the clear (✕) button, never show the date pill text
  var pill   = document.getElementById('taskDRActivePill');
  var clearB = document.getElementById('taskDRClearBtn');
  var triggerBtn = document.getElementById('taskDRTrigger');
  if (pill) { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB) clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');

  // Clear the single-date picker and deactivate segment buttons
  var singlePicker = document.getElementById('taskDateFilter');
  if (singlePicker) singlePicker.value = '';
  document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999); // inclusive

  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(card) {
    var due = card.getAttribute('data-due');
    if (!due) { card.style.display = 'none'; return; }
    var d = new Date(due);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    card.style.display = inRange ? '' : 'none';
  });
}

function clearTaskDateRange() {
  document.getElementById('taskDRFrom').value = '';
  document.getElementById('taskDRTo').value   = '';
  // Reset button visual state
  var pill   = document.getElementById('taskDRActivePill');
  var clearB = document.getElementById('taskDRClearBtn');
  var triggerBtn = document.getElementById('taskDRTrigger');
  var pop    = document.getElementById('taskDRPopover');
  if (pill)  { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB) clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)   pop.classList.remove('open');
  // Restore active status filter
  var sel = document.getElementById('taskFilterSelect');
  var activeBtn = document.querySelector('#taskFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : (sel ? sel.value : 'open');
  filterMyTasks(status);
}

// ── Date Range Filter: Help Desk Panel ────────────────────────────
function toggleHDDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('hdDRPopover');
  var btn = document.getElementById('hdDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyHDDateRangeFromPopover() {
  var pop = document.getElementById('hdDRPopover');
  var btn = document.getElementById('hdDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyHDDateRange();
}
function applyHDDateRange() {
  var from = document.getElementById('hdDRFrom').value;
  var to   = document.getElementById('hdDRTo').value;
  if (!from && !to) { clearHDDateRange(); return; }

  // Update button state — show the clear (x) button while keeping the Date Range label visible
  var pill       = document.getElementById('hdDRActivePill');
  var clearB     = document.getElementById('hdDRClearBtn');
  var triggerBtn = document.getElementById('hdDRTrigger');
  var btnLabel   = document.getElementById('hdDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)  btnLabel.style.display = '';

  // Clear single-date picker and deactivate segment buttons
  var singlePicker = document.getElementById('hdDateFilter');
  if (singlePicker) singlePicker.value = '';
  document.querySelectorAll('#hdFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var cards = document.querySelectorAll('#my-tickets-tab .ticket-card');
  var visible = 0;
  cards.forEach(function(card) {
    var raised = card.getAttribute('data-hd-raised');
    if (!raised) { card.style.display = 'none'; return; }
    var d = new Date(raised);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    card.style.display = inRange ? '' : 'none';
    if (inRange) visible++;
  });

  var empty = document.getElementById('hdFilter-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}

function clearHDDateRange() {
  document.getElementById('hdDRFrom').value = '';
  document.getElementById('hdDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('hdDRActivePill');
  var clearB     = document.getElementById('hdDRClearBtn');
  var triggerBtn = document.getElementById('hdDRTrigger');
  var pop        = document.getElementById('hdDRPopover');
  var btnLabel   = document.getElementById('hdDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)       pop.classList.remove('open');
  if (btnLabel)  btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#hdFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-hd-value') : 'open';
  filterHelpDeskTickets(status);
}

// ── Status Filter: My Leaves ────────────────────────────────────
function filterMyLeaves(status, btn) {
  // Update segment active state
  document.querySelectorAll('#myLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');

  // Filter table rows
  var rows = document.querySelectorAll('#myLeaveTableBody tr');
  rows.forEach(function(row) {
    var rowStatus = (row.getAttribute('data-leave-status') || '').toLowerCase();
    row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
  });
}

// ── Status Filter: Team Leaves ───────────────────────────────────
function filterTeamLeaves(status, btn) {
  // Update segment active state
  document.querySelectorAll('#teamLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');

  // Filter rendered table rows (renderLeaveTeamData injects data-leave-status)
  var rows = document.querySelectorAll('#leaveTeamTableBody tr');
  rows.forEach(function(row) {
    var rowStatus = (row.getAttribute('data-leave-status') || '').toLowerCase();
    row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
  });
}

// ── Helper: update team leave filter counts ──────────────────────
function updateTeamLeaveFilterCounts(historyArr) {
  var total    = historyArr.length;
  var pending  = historyArr.filter(function(r){ return r.status === 'Pending';  }).length;
  var approved = historyArr.filter(function(r){ return r.status === 'Approved'; }).length;
  var allEl  = document.getElementById('teamLeaveCount_all');
  var penEl  = document.getElementById('teamLeaveCount_pending');
  var appEl  = document.getElementById('teamLeaveCount_approved');
  if (allEl)  allEl.textContent  = total;
  if (penEl)  penEl.textContent  = pending;
  if (appEl)  appEl.textContent  = approved;
  // Reset segment to "Pending" active whenever new person is loaded
  document.querySelectorAll('#teamLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-value') === 'pending');
  });
  // Apply pending filter so rows update immediately
  var pendingBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn[data-value="pending"]');
  filterTeamLeaves('pending', pendingBtn);
}

// ── Date Range Filter: My Leaves ─────────────────────────────────
// ── Date Range Filter: My Leaves ─────────────────────────────────
function toggleMyLeaveDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('myLeaveDRPopover');
  var btn = document.getElementById('myLeaveDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyMyLeaveDRFromPopover() {
  var pop = document.getElementById('myLeaveDRPopover');
  var btn = document.getElementById('myLeaveDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyMyLeaveDR();
}
function applyMyLeaveDR() {
  var from = document.getElementById('myLeaveDRFrom').value;
  var to   = document.getElementById('myLeaveDRTo').value;
  if (!from && !to) { clearMyLeaveDR(); return; }

  // Update button state — show the clear (x) button while keeping the Date Range label visible
  var pill       = document.getElementById('myLeaveDRActivePill');
  var clearB     = document.getElementById('myLeaveDRClearBtn');
  var triggerBtn = document.getElementById('myLeaveDRTrigger');
  var btnLabel   = document.getElementById('myLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)   btnLabel.style.display = '';

  // Deactivate status segment while date range is active
  document.querySelectorAll('#myLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var rows = document.querySelectorAll('#myLeaveTableBody tr');
  rows.forEach(function(row) {
    var dateAttr = row.getAttribute('data-leave-date');
    if (!dateAttr) { row.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    row.style.display = inRange ? '' : 'none';
  });
}

function clearMyLeaveDR() {
  document.getElementById('myLeaveDRFrom').value = '';
  document.getElementById('myLeaveDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('myLeaveDRActivePill');
  var clearB     = document.getElementById('myLeaveDRClearBtn');
  var triggerBtn = document.getElementById('myLeaveDRTrigger');
  var pop        = document.getElementById('myLeaveDRPopover');
  var btnLabel   = document.getElementById('myLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)        pop.classList.remove('open');
  if (btnLabel)   btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#myLeaveFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterMyLeaves(status, activeBtn);
}

// ── Date Range Filter: Team Leaves ────────────────────────────────
// ── Date Range Filter: Team Leaves ────────────────────────────────
function toggleTeamLeaveDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('teamLeaveDRPopover');
  var btn = document.getElementById('teamLeaveDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyTeamLeaveDRFromPopover() {
  var pop = document.getElementById('teamLeaveDRPopover');
  var btn = document.getElementById('teamLeaveDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyTeamLeaveDR();
}
function applyTeamLeaveDR() {
  var from = document.getElementById('teamLeaveDRFrom').value;
  var to   = document.getElementById('teamLeaveDRTo').value;
  if (!from && !to) { clearTeamLeaveDR(); return; }

  // Update button state — show the clear (x) button while keeping the Date Range label visible
  var pill       = document.getElementById('teamLeaveDRActivePill');
  var clearB     = document.getElementById('teamLeaveDRClearBtn');
  var triggerBtn = document.getElementById('teamLeaveDRTrigger');
  var btnLabel   = document.getElementById('teamLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)   btnLabel.style.display = '';

  // Deactivate status segment while date range is active
  document.querySelectorAll('#teamLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var rows = document.querySelectorAll('#leaveTeamTableBody tr');
  rows.forEach(function(row) {
    var dateAttr = row.getAttribute('data-leave-date');
    if (!dateAttr) { row.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    row.style.display = inRange ? '' : 'none';
  });
}

function clearTeamLeaveDR() {
  document.getElementById('teamLeaveDRFrom').value = '';
  document.getElementById('teamLeaveDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('teamLeaveDRActivePill');
  var clearB     = document.getElementById('teamLeaveDRClearBtn');
  var triggerBtn = document.getElementById('teamLeaveDRTrigger');
  var pop        = document.getElementById('teamLeaveDRPopover');
  var btnLabel   = document.getElementById('teamLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)        pop.classList.remove('open');
  if (btnLabel)   btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterTeamLeaves(status, activeBtn);
}

// ── Date Range Filter: Expense Claim Panel ────────────────────────
function toggleReqDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('reqDRPopover');
  var btn = document.getElementById('reqDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyReqDateRangeFromPopover() {
  var pop = document.getElementById('reqDRPopover');
  var btn = document.getElementById('reqDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyReqDateRange();
}
function applyReqDateRange() {
  var from = document.getElementById('reqDRFrom').value;
  var to   = document.getElementById('reqDRTo').value;
  if (!from && !to) { clearReqDateRange(); return; }

  // Update button state — show the clear (x) button while keeping the Date Range label visible
  var pill       = document.getElementById('reqDRActivePill');
  var clearB     = document.getElementById('reqDRClearBtn');
  var triggerBtn = document.getElementById('reqDRTrigger');
  var btnLabel   = document.getElementById('reqDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)  btnLabel.style.display = '';

  // Clear single-date picker and deactivate segment buttons
  var singlePicker = document.getElementById('reqDateFilter');
  if (singlePicker) singlePicker.value = '';
  document.querySelectorAll('#reqFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var cards = document.querySelectorAll('#req-cards-wrap .card');
  cards.forEach(function(card) {
    var dateAttr = card.getAttribute('data-req-date');
    if (!dateAttr) { card.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    card.style.display = inRange ? '' : 'none';
  });
}

function clearReqDateRange() {
  document.getElementById('reqDRFrom').value = '';
  document.getElementById('reqDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('reqDRActivePill');
  var clearB     = document.getElementById('reqDRClearBtn');
  var triggerBtn = document.getElementById('reqDRTrigger');
  var pop        = document.getElementById('reqDRPopover');
  var btnLabel   = document.getElementById('reqDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)       pop.classList.remove('open');
  if (btnLabel)  btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#reqFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterMyRequests(status, activeBtn);
}

// ===== EDIT TASK MODAL =====
var _editingTaskCard = null; // reference to the card being edited

// ════════════════════════════════════════════════════════
//  V74 NEW FEATURE FUNCTIONS
// ════════════════════════════════════════════════════════

// ── 1b: Task Dropdown selector ────────────────────────
// ── Searchable All Tasks Dropdown ────────────────────────────────
function toggleTaskDropdown() {
  var menu    = document.getElementById('taskDropdownMenu');
  var trigger = document.getElementById('taskDropdownTrigger');
  var search  = document.getElementById('taskDropdownSearch');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeTaskDropdown();
  } else {
    menu.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    if (search) { search.value = ''; filterTaskDropdownOptions(''); search.focus(); }
  }
}

function closeTaskDropdown() {
  var menu    = document.getElementById('taskDropdownMenu');
  var trigger = document.getElementById('taskDropdownTrigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
}

function filterTaskDropdownOptions(q) {
  var query = q.trim().toLowerCase();
  var opts  = document.querySelectorAll('#taskDropdownList .tf-search-opt');
  var anyVisible = false;
  opts.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    var show = !query || txt.indexOf(query) !== -1;
    opt.classList.toggle('hidden', !show);
    if (show) anyVisible = true;
  });
  var empty = document.getElementById('taskDropdownEmpty');
  if (empty) empty.style.display = anyVisible ? 'none' : '';
}

function selectTaskDropdownOpt(opt) {
  var value = opt.getAttribute('data-value');
  var label = value ? opt.textContent.trim() : 'All Tasks';
  // Update selected styling
  document.querySelectorAll('#taskDropdownList .tf-search-opt').forEach(function(o) {
    o.classList.toggle('selected', o === opt);
  });
  // Update trigger label
  var lbl = document.getElementById('taskDropdownLabel');
  if (lbl) lbl.textContent = label;
  closeTaskDropdown();
  // Call existing filter function — no change to logic
  applyTaskDropdownFilter(value);
}

function taskDropdownKeydown(e) {
  if (e.key === 'Escape') closeTaskDropdown();
}

// Close on outside click
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('taskDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeTaskDropdown();
});

// ── Helper: get selected value from a tf-search-list ─────────────
function _getDropdownValue(listId) {
  var sel = document.querySelector('#' + listId + ' .tf-search-opt.selected');
  return sel ? sel.getAttribute('data-value') : '';
}

// ── Searchable All Reviews Dropdown (Review Section) ─────────────
function toggleReviewTypeDropdown() {
  var menu    = document.getElementById('reviewTypeDropdownMenu');
  var trigger = document.getElementById('reviewTypeDropdownTrigger');
  var search  = document.getElementById('reviewTypeDropdownSearch');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeReviewTypeDropdown();
  } else {
    // Close other dropdowns
    closeTaskDropdown(); closeApprovalTypeDropdown();
    menu.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    if (search) { search.value = ''; filterReviewTypeDropdownOptions(''); search.focus(); }
  }
}
function closeReviewTypeDropdown() {
  var menu    = document.getElementById('reviewTypeDropdownMenu');
  var trigger = document.getElementById('reviewTypeDropdownTrigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
}
function filterReviewTypeDropdownOptions(q) {
  var query = q.trim().toLowerCase();
  var opts  = document.querySelectorAll('#reviewTypeDropdownList .tf-search-opt');
  var anyVisible = false;
  opts.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    var show = !query || txt.indexOf(query) !== -1;
    opt.classList.toggle('hidden', !show);
    if (show) anyVisible = true;
  });
  var empty = document.getElementById('reviewTypeDropdownEmpty');
  if (empty) empty.style.display = anyVisible ? 'none' : '';
}
function selectReviewTypeDropdownOpt(opt) {
  var value = opt.getAttribute('data-value');
  var label = value ? opt.textContent.trim() : 'All Reviews';
  document.querySelectorAll('#reviewTypeDropdownList .tf-search-opt').forEach(function(o) {
    o.classList.toggle('selected', o === opt);
  });
  var lbl = document.getElementById('reviewTypeDropdownLabel');
  if (lbl) lbl.textContent = label;
  closeReviewTypeDropdown();
  filterReviewsByType(value);
}
function reviewTypeDropdownKeydown(e) {
  if (e.key === 'Escape') closeReviewTypeDropdown();
}
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('reviewTypeDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeReviewTypeDropdown();
});

// ── Searchable All Types Dropdown (Approval Tasks) ────────────────
function toggleApprovalTypeDropdown() {
  var menu    = document.getElementById('approvalTypeDropdownMenu');
  var trigger = document.getElementById('approvalTypeDropdownTrigger');
  var search  = document.getElementById('approvalTypeDropdownSearch');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeApprovalTypeDropdown();
  } else {
    // Close other dropdowns
    closeTaskDropdown(); closeReviewTypeDropdown();
    menu.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    if (search) { search.value = ''; filterApprovalTypeDropdownOptions(''); search.focus(); }
  }
}
function closeApprovalTypeDropdown() {
  var menu    = document.getElementById('approvalTypeDropdownMenu');
  var trigger = document.getElementById('approvalTypeDropdownTrigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
}
function filterApprovalTypeDropdownOptions(q) {
  var query = q.trim().toLowerCase();
  var opts  = document.querySelectorAll('#approvalTypeDropdownList .tf-search-opt');
  var anyVisible = false;
  opts.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    var show = !query || txt.indexOf(query) !== -1;
    opt.classList.toggle('hidden', !show);
    if (show) anyVisible = true;
  });
  var empty = document.getElementById('approvalTypeDropdownEmpty');
  if (empty) empty.style.display = anyVisible ? 'none' : '';
}
function selectApprovalTypeDropdownOpt(opt) {
  var value = opt.getAttribute('data-value');
  var label = value ? opt.textContent.trim() : 'All Types';
  document.querySelectorAll('#approvalTypeDropdownList .tf-search-opt').forEach(function(o) {
    o.classList.toggle('selected', o === opt);
  });
  var lbl = document.getElementById('approvalTypeDropdownLabel');
  if (lbl) lbl.textContent = label;
  closeApprovalTypeDropdown();
  filterApprovalsByType(value);
}
function approvalTypeDropdownKeydown(e) {
  if (e.key === 'Escape') closeApprovalTypeDropdown();
}
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('approvalTypeDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeApprovalTypeDropdown();
});

function applyTaskDropdownFilter(taskId) {
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(c) {
    if (!taskId || c.getAttribute('data-task-id') === taskId) {
      c.style.display = '';
    } else {
      c.style.display = 'none';
    }
  });
}

// ── 1c: Priority filter ───────────────────────────────
function applyTaskPriorityFilter(priority) {
  var statusSel = document.getElementById('taskFilterSelect');
  var currentStatus = statusSel ? statusSel.value : 'all';
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(c) {
    var statusMatch = (currentStatus === 'all') || (c.getAttribute('data-status') === currentStatus);
    var priorityMatch = !priority || (c.getAttribute('data-task-priority') === priority);
    c.style.display = (statusMatch && priorityMatch) ? '' : 'none';
  });
}

// ── 1d: Sort tasks ────────────────────────────────────
// Task creation order encoded by TASK-NNN id (lower = older)
var _taskPriorityOrder = { high: 0, medium: 1, low: 2 };
function applyTaskSort(sortVal) {
  var wrap = document.getElementById('my-tasks-content');
  var cards = Array.from(wrap.querySelectorAll('.task-card'));
  cards.sort(function(a, b) {
    if (sortVal === 'recent') {
      // Default: descending by TASK id (highest number = most recently created)
      var idA = parseInt((a.getAttribute('data-task-id') || '0').replace('TASK-', ''));
      var idB = parseInt((b.getAttribute('data-task-id') || '0').replace('TASK-', ''));
      return idB - idA;
    }
    if (sortVal === 'due_asc' || sortVal === 'due_desc') {
      var dA = a.getAttribute('data-due') || '9999-99-99';
      var dB = b.getAttribute('data-due') || '9999-99-99';
      if (!a.getAttribute('data-due')) dA = sortVal === 'due_asc' ? '9999-99-99' : '0000-00-00';
      if (!b.getAttribute('data-due')) dB = sortVal === 'due_asc' ? '9999-99-99' : '0000-00-00';
      return sortVal === 'due_asc' ? dA.localeCompare(dB) : dB.localeCompare(dA);
    }
    if (sortVal === 'priority_high' || sortVal === 'priority_low') {
      var pA = _taskPriorityOrder[a.getAttribute('data-task-priority')] !== undefined ? _taskPriorityOrder[a.getAttribute('data-task-priority')] : 9;
      var pB = _taskPriorityOrder[b.getAttribute('data-task-priority')] !== undefined ? _taskPriorityOrder[b.getAttribute('data-task-priority')] : 9;
      return sortVal === 'priority_high' ? pA - pB : pB - pA;
    }
    return 0;
  });
  // Re-append in sorted order (preserves filter visibility)
  var filterWrap = document.getElementById('taskFilterWrap');
  cards.forEach(function(c) { wrap.appendChild(c); });
  // Make sure filter wrap stays first
  if (filterWrap) wrap.insertBefore(filterWrap, wrap.firstChild);
}

// Apply default sort (Recently Created) on page load
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    applyTaskSort('recent');
    // Change 6: Set attendance month/year dropdowns to actual current month/year
    var now = new Date();
    var curMonth = now.getMonth();
    var curYear  = now.getFullYear();
    var mSel = document.getElementById('attMonthFilter');
    var ySel = document.getElementById('attYearFilter');
    if (mSel) mSel.value = String(curMonth);
    if (ySel) {
      // Add current year option if not already present
      var found = false;
      for (var i = 0; i < ySel.options.length; i++) {
        if (parseInt(ySel.options[i].value) === curYear) { ySel.selectedIndex = i; found = true; break; }
      }
      if (!found) {
        var opt = document.createElement('option');
        opt.value = String(curYear); opt.textContent = String(curYear); opt.selected = true;
        ySel.appendChild(opt);
      }
    }
  });
})();

// ── 2: Attendance Month/Year filter ──────────────────
function applyAttMonthYearFilter() {
  var monthSel = document.getElementById('attMonthFilter');
  var yearSel  = document.getElementById('attYearFilter');
  if (!monthSel || !yearSel) return;
  var m = parseInt(monthSel.value);
  var y = parseInt(yearSel.value);
  attCalMonth = m;
  attCalYear  = y;
  renderAttCalendar();
  updatePenaltyDaysCount();
  updateAvgWorkHours();
}

function resetAttMonthYearFilter() {
  var now = new Date();
  var curMonth = now.getMonth();
  var curYear  = now.getFullYear();
  var monthSel = document.getElementById('attMonthFilter');
  var yearSel  = document.getElementById('attYearFilter');
  if (monthSel) monthSel.value = String(curMonth);
  if (yearSel)  yearSel.value  = String(curYear);
  attCalMonth = curMonth;
  attCalYear  = curYear;
  renderAttCalendar();
  updatePenaltyDaysCount();
  updateAvgWorkHours();
}

// ── Compute and display Avg Work Hours for the selected month ──────────────
function updateAvgWorkHours() {
  var valEl = document.getElementById('avgWorkHrsValue');
  var tagEl = document.getElementById('avgWorkHrsTag');
  if (!valEl || !tagEl) return;

  var daysInMonth = new Date(attCalYear, attCalMonth + 1, 0).getDate();
  var totalMinutes = 0;
  var workingDays = 0; // days with actual hour data (present or late with hrs)

  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = attCalYear + '-' + String(attCalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var rec = attData[dateStr];
    if (!rec) continue;
    if ((rec.status === 'present' || rec.status === 'late') && rec.hrs && rec.hrs !== '—' && rec.hrs !== 'In Progress') {
      // Parse "Xh Ym" format
      var hrsStr = rec.hrs;
      var hMatch = hrsStr.match(/(\d+)h/);
      var mMatch = hrsStr.match(/(\d+)m/);
      var h = hMatch ? parseInt(hMatch[1]) : 0;
      var m = mMatch ? parseInt(mMatch[1]) : 0;
      totalMinutes += h * 60 + m;
      workingDays++;
    }
  }

  if (workingDays === 0) {
    valEl.textContent = '—';
    tagEl.textContent = 'No data';
    tagEl.style.background = '#F1F5F9';
    tagEl.style.color = '#64748B';
    return;
  }

  var avgMins = Math.round(totalMinutes / workingDays);
  var avgH = Math.floor(avgMins / 60);
  var avgM = avgMins % 60;
  var avgLabel = avgH + 'h ' + String(avgM).padStart(2,'0') + 'm';
  valEl.textContent = avgLabel;

  // Contextual tag: colour-code vs 9h standard
  var stdMins = 9 * 60;
  var diff = avgMins - stdMins;
  if (diff >= 0) {
    tagEl.style.background = '#F0FDF4'; tagEl.style.color = '#0D9488';
    tagEl.textContent = '+' + Math.floor(diff/60) + 'h ' + String(Math.abs(diff%60)).padStart(2,'0') + 'm vs std';
  } else {
    tagEl.style.background = '#FFF0F0'; tagEl.style.color = '#C92A2A';
    var absDiff = Math.abs(diff);
    tagEl.textContent = '-' + Math.floor(absDiff/60) + 'h ' + String(absDiff%60).padStart(2,'0') + 'm vs std';
  }
}

// Count absent days in current displayed month and update Penalty Days box
function updatePenaltyDaysCount() {
  var absentCount = 0;
  var daysInMonth = new Date(attCalYear, attCalMonth + 1, 0).getDate();
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = attCalYear + '-' + String(attCalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    if (attData[dateStr] && attData[dateStr].status === 'absent') {
      absentCount++;
    }
  }
  var valEl  = document.getElementById('penaltyDaysValue');
  var tagEl  = document.getElementById('penaltyDaysTag');
  if (valEl) valEl.textContent = absentCount;
  if (tagEl) {
    if (absentCount === 0) {
      tagEl.style.background = '#F0FDF4'; tagEl.style.color = '#0D9488';
      tagEl.textContent = 'All Clear';
    } else {
      tagEl.style.background = '#FFF0F0'; tagEl.style.color = '#C92A2A';
      tagEl.textContent = absentCount + ' Absent Day' + (absentCount !== 1 ? 's' : '');
    }
  }
}

// ── 3: Sandwich / Consecutive Leave Rule ─────────────
function checkSandwichLeave() {
  var fromEl = document.getElementById('leaveFromDate');
  var toEl   = document.getElementById('leaveToDate');
  var warn   = document.getElementById('sandwichWarning');
  var block  = document.getElementById('consecutiveLeaveBlock');
  if (!fromEl || !toEl || !warn || !block) return;

  warn.style.display  = 'none';
  block.style.display = 'none';

  var from = fromEl.value ? new Date(fromEl.value) : null;
  var to   = toEl.value   ? new Date(toEl.value)   : null;
  if (!from || !to || to < from) return;

  // Count actual calendar days (inclusive)
  var msPerDay = 86400000;
  var totalCalDays = Math.round((to - from) / msPerDay) + 1;

  // Check if span crosses weekend
  var crossesWeekend = false;
  for (var d = new Date(from); d <= to; d = new Date(d.getTime() + msPerDay)) {
    if (d.getDay() === 0 || d.getDay() === 6) { crossesWeekend = true; break; }
  }

  // Sandwich: leave spans across weekend
  if (crossesWeekend && totalCalDays > 2) {
    warn.style.display = 'flex';
  }

  // Block exactly 3 consecutive working-day leaves (sandwich case restriction)
  // Count working days (Mon–Fri) in range
  var workingDays = 0;
  for (var d2 = new Date(from); d2 <= to; d2 = new Date(d2.getTime() + msPerDay)) {
    if (d2.getDay() !== 0 && d2.getDay() !== 6) workingDays++;
  }
  if (workingDays === 3 && crossesWeekend) {
    block.style.display = 'flex';
    warn.style.display  = 'none'; // Show block warning only
  }
}

function submitLeaveWithSandwichCheck() {
  var block = document.getElementById('consecutiveLeaveBlock');
  if (block && block.style.display !== 'none') {
    showToast('Cannot apply 3 consecutive leaves (Sandwich Rule). Please adjust dates or contact HR.', 'error');
    return;
  }
  showToast('Leave request submitted!', 'success');
}

// ── 4: Tax Regime Toggle ─────────────────────────────
var _currentRegime = 'old';
function selectTaxRegime(regime) {
  _currentRegime = regime;
  var formCard = document.querySelector('#taxdocs-itdecl-tab .card:last-of-type');
  // Sync the summary card dropdown if it exists
  var dropdown = document.getElementById('taxRegimeDropdown');
  if (dropdown) dropdown.value = (regime === 'old') ? 'Old Regime' : 'New Regime';

  if (regime === 'old') {
    if (formCard) formCard.style.display = '';
  } else {
    if (formCard) formCard.style.display = 'none';
    showToast('New Regime selected — no deductions applicable. Standard deduction of ₹75,000 applies.', 'info');
  }
}

// ── 5: IT Declaration — Previous FY data filter ──────
var _itDeclPrevData = {
  '2024-25': { ppf: 65000, elss: 25000, lic: 20000, nsc: 0, health_self: 15000, health_par: 0, rent: 22000, hlint: 0, nps: 50000, edu: 0, don: 0 },
  '2023-24': { ppf: 60000, elss: 20000, lic: 18000, nsc: 0, health_self: 12000, health_par: 0, rent: 20000, hlint: 0, nps: 40000, edu: 0, don: 0 },
  '2022-23': { ppf: 50000, elss: 15000, lic: 15000, nsc: 0, health_self: 10000, health_par: 0, rent: 18000, hlint: 0, nps: 30000, edu: 0, don: 0 }
};

function switchITDeclFY(val) {
  var notice     = document.getElementById('itDeclPrevNotice');
  var labelEl    = document.getElementById('itDeclPrevFYLabel');
  var inputs     = document.querySelectorAll('#taxdocs-itdecl-tab .card:last-of-type input[type="number"], #taxdocs-itdecl-tab .card:last-of-type input[type="text"]');
  var submitBtn  = document.querySelector('#taxdocs-itdecl-tab .card:last-of-type .btn-sm.primary');

  if (val === 'current') {
    if (notice) notice.style.display = 'none';
    // Restore current FY values
    var cur = [72000, 30000, 23000, 0, 18000, 0, 25000, 'ABCDE1234F', 0, 0, 0, 0];
    inputs.forEach(function(inp, i) { if (cur[i] !== undefined) inp.value = cur[i]; inp.disabled = false; });
    if (submitBtn) submitBtn.disabled = false;
  } else {
    var data = _itDeclPrevData[val];
    if (!data) return;
    if (notice) { notice.style.display = 'flex'; }
    if (labelEl) labelEl.textContent = 'FY ' + val;
    var vals = [data.ppf, data.elss, data.lic, data.nsc, data.health_self, data.health_par, data.rent, '', 0, data.hlint, data.nps, data.edu, data.don];
    inputs.forEach(function(inp, i) { if (vals[i] !== undefined) inp.value = vals[i]; inp.disabled = true; });
    if (submitBtn) submitBtn.disabled = true;
    showToast('Viewing previous FY ' + val + ' data (read-only)', 'info');
  }
}

// ── Run penalty count on attendance page open ─────────
document.addEventListener('DOMContentLoaded', function() {
  // Also init penalty count when attendance page first renders
  updatePenaltyDaysCount();
  updateAvgWorkHours();
  // Apply default task sort
  applyTaskSort('recent');
});

// ════════════════════════════════════════════════════
//  V76 NEW FEATURE FUNCTIONS
// ════════════════════════════════════════════════════

// ════════════════════════════════════════════════════
// Called from "Add / Edit Spouse & Children" button inside Family Details tab
function openFamilyEditFromTab() { openFamilyModal(); }

// Save bar for Father/Mother fields in Family Details tab
function saveFamilyTabParents() { showToast('Family details saved successfully!', 'success'); }

//  V77 — MARITAL STATUS + FAMILY DETAILS MODAL
// ════════════════════════════════════════════════════

var _familyData = null; // stores saved family details
var _familyChildCount = 0; // tracks child rows in modal

// Called when any marital status radio is changed
function handleMaritalChange(val) {
  if (val === 'Married') {
    openFamilyModal();
  }
  // Update the display badge
  var disp = document.getElementById('maritalStatusDisplay');
  if (disp) disp.textContent = val;
}

// Open the family details modal
function openFamilyModal() {
  var modal = document.getElementById('familyModal');
  if (!modal) return;

  // Pre-fill if data was previously saved
  if (_familyData) {
    setVal('fm_spouseFirstName', _familyData.spouseFirstName);
    setVal('fm_spouseLastName',  _familyData.spouseLastName);
    setVal('fm_spouseDob',       _familyData.spouseDob);
    setVal('fm_spouseOccupation',_familyData.spouseOccupation);
    setVal('fm_spouseMobile',    _familyData.spouseMobile);
    setVal('fm_spouseDependent', _familyData.spouseDependent);
    // Restore child rows
    var container = document.getElementById('familyModalChildrenRows');
    if (container) container.innerHTML = '';
    _familyChildCount = 0;
    (_familyData.children || []).forEach(function(c) {
      addFamilyChildRow();
      var idx = _familyChildCount;
      setVal('fm_child' + idx + '_name',   c.name);
      setVal('fm_child' + idx + '_dob',    c.dob);
      setVal('fm_child' + idx + '_gender', c.gender);
    });
  } else {
    // Fresh modal — clear fields and add one child row
    ['fm_spouseFirstName','fm_spouseLastName','fm_spouseDob','fm_spouseOccupation','fm_spouseMobile','fm_spouseDependent'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
    });
    var container = document.getElementById('familyModalChildrenRows');
    if (container) container.innerHTML = '';
    _familyChildCount = 0;
    addFamilyChildRow(); // start with one empty child row
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFamilyModal() {
  var modal = document.getElementById('familyModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';

  // If user opened modal by clicking Married but cancels without saving,
  // revert radio to Single
  if (!_familyData) {
    var singleRadio = document.getElementById('ms_single');
    if (singleRadio) { singleRadio.checked = true; }
    var disp = document.getElementById('maritalStatusDisplay');
    if (disp) disp.textContent = 'Single';
  }
}

// Add a child row inside the modal
function addFamilyChildRow() {
  _familyChildCount++;
  var idx = _familyChildCount;
  var container = document.getElementById('familyModalChildrenRows');
  if (!container) return;
  var row = document.createElement('div');
  row.id = 'fm_childRow_' + idx;
  row.style.cssText = 'background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;position:relative;';
  row.innerHTML =
    '<div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:8px;">Child ' + idx + '</div>' +
    '<button onclick="removeFamilyChildRow(' + idx + ')" style="position:absolute;top:10px;right:10px;background:none;border:none;cursor:pointer;font-size:13px;color:var(--text-tertiary);" title="Remove">✕</button>' +
    '<div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;">' +
      '<div class="form-group"><div class="form-label">Full Name</div>' +
        '<input id="fm_child' + idx + '_name" class="form-input" placeholder="Child\'s full name"></div>' +
      '<div class="form-group"><div class="form-label">Date of Birth</div>' +
        '<input id="fm_child' + idx + '_dob" class="form-input" type="date" style="cursor:pointer;"></div>' +
      '<div class="form-group"><div class="form-label">Gender</div>' +
        '<select id="fm_child' + idx + '_gender" class="form-input">' +
          '<option value="">— Select —</option><option>Male</option><option>Female</option><option>Other</option>' +
        '</select></div>' +
    '</div>';
  container.appendChild(row);
}

function removeFamilyChildRow(idx) {
  var row = document.getElementById('fm_childRow_' + idx);
  if (row) row.remove();
}

// Save family details from modal → display in Family Details tab
function saveFamilyDetails() {
  // Collect spouse data
  var spouse = {
    firstName:  getVal('fm_spouseFirstName'),
    lastName:   getVal('fm_spouseLastName'),
    dob:        getVal('fm_spouseDob'),
    occupation: getVal('fm_spouseOccupation'),
    mobile:     getVal('fm_spouseMobile'),
    dependent:  getVal('fm_spouseDependent')
  };

  // Collect all child rows
  var children = [];
  var rows = document.querySelectorAll('#familyModalChildrenRows > div[id^="fm_childRow_"]');
  rows.forEach(function(row) {
    var idx = row.id.replace('fm_childRow_', '');
    var name   = getVal('fm_child' + idx + '_name');
    var dob    = getVal('fm_child' + idx + '_dob');
    var gender = getVal('fm_child' + idx + '_gender');
    if (name || dob || gender) {
      children.push({ name: name, dob: dob, gender: gender });
    }
  });

  // Get marital status
  var selectedRadio = document.querySelector('input[name="pd_maritalStatus"]:checked');
  var maritalStatus = selectedRadio ? selectedRadio.value : 'Married';

  // Store data
  _familyData = {
    maritalStatus:   maritalStatus,
    spouseFirstName: spouse.firstName,
    spouseLastName:  spouse.lastName,
    spouseDob:       spouse.dob,
    spouseOccupation:spouse.occupation,
    spouseMobile:    spouse.mobile,
    spouseDependent: spouse.dependent,
    children:        children
  };

  // Populate Family Details tab display fields
  setVal('fd_spouseFirstName',  spouse.firstName);
  setVal('fd_spouseLastName',   spouse.lastName);
  setVal('fd_spouseDob',        spouse.dob);
  setVal('fd_spouseOccupation', spouse.occupation);
  setVal('fd_spouseMobile',     spouse.mobile);
  setVal('fd_spouseDependent',  spouse.dependent);

  // Marital status badge in Family tab
  var badge = document.getElementById('familyMaritalBadge');
  if (badge) badge.textContent = maritalStatus;

  // Render children in Family tab
  var childDisplay = document.getElementById('familyChildrenDisplay');
  var noChild = document.getElementById('familyNoChildren');
  if (childDisplay) {
    childDisplay.innerHTML = '';
    if (children.length > 0) {
      if (noChild) noChild.style.display = 'none';
      children.forEach(function(c, i) {
        var block = document.createElement('div');
        block.style.cssText = 'background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;';
        block.innerHTML =
          '<div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:8px;">Child ' + (i+1) + '</div>' +
          '<div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;">' +
            '<div class="form-group"><div class="form-label">Full Name</div><input class="form-input" value="' + escHtml(c.name) + '" disabled></div>' +
            '<div class="form-group"><div class="form-label">Date of Birth</div><input class="form-input" type="date" value="' + escHtml(c.dob) + '" disabled style="cursor:default;"></div>' +
            '<div class="form-group"><div class="form-label">Gender</div><input class="form-input" value="' + escHtml(c.gender) + '" disabled></div>' +
          '</div>';
        childDisplay.appendChild(block);
      });
    } else {
      if (noChild) noChild.style.display = 'block';
    }
  }

  // Show Spouse/Children sections directly in the merged Family Details tab
  var spouseSection   = document.getElementById('familySpouseSection');
  var childrenSection = document.getElementById('familyChildrenSection');
  if (spouseSection)   spouseSection.style.display   = (maritalStatus === 'Married') ? '' : 'none';
  if (childrenSection) childrenSection.style.display = (children.length > 0) ? '' : 'none';

  // Update marital status badge in Family Details tab
  var badge = document.getElementById('familyMaritalBadge');
  if (badge) badge.textContent = maritalStatus;

  // Update marital status display badge in personal tab
  var statusDisp = document.getElementById('maritalStatusDisplay');
  if (statusDisp) { statusDisp.textContent = maritalStatus; statusDisp.style.display = 'inline-flex'; }

  closeFamilyModal();
  showToast('Family details saved successfully!', 'success');

  // Auto-navigate to Family Details tab
  var familyTabBtn = document.querySelector('[onclick*="family-tab"]');
  if (familyTabBtn) switchTab(familyTabBtn, 'family-tab');
}

// Helper: get value from a form element
function getVal(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
// Helper: set value on a form element
function setVal(id, val) {
  var el = document.getElementById(id);
  if (el) el.value = val || '';
}
// Helper: escape HTML for safe insertion
function escHtml(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Change 2: Sub-Category Dropdown for Claim Types ──
var _claimSubCategories = {
  travel:     { hint: 'Select the specific travel sub-type', options: ['Fuel / Petrol', 'Flight Ticket', 'Train / Bus Ticket', 'Cab / Auto / Taxi', 'Hotel / Accommodation', 'Toll / Parking', 'Other Travel'] },
  meal:       { hint: 'Select the meal expense sub-type',   options: ['Client Meal', 'Team Lunch', 'Team Dinner', 'Working Meal (Overtime)', 'Conference Meal', 'Other Meal'] },
  office:     { hint: 'Select the office expense sub-type', options: ['Stationery / Paper', 'Computer Peripheral', 'Software / License', 'Furniture', 'Printing / Photocopying', 'Courier / Postage', 'Other Office Supply'] },
  medical:    { hint: 'Select the medical expense sub-type',options: ['Doctor Consultation', 'Medicines / Pharmacy', 'Diagnostic Tests / Lab', 'Hospital Admission', 'Dental Treatment', 'Vision / Spectacles', 'Other Medical'] },
  healthcare: { hint: 'Select the healthcare sub-type',    options: ['Health Insurance Premium', 'Wellness / Gym Membership', 'Preventive Health Check', 'Mental Health', 'Other Healthcare'] },
  education:  { hint: 'Select the education expense sub-type', options: ['Online Course / Certification', 'College / University Fee', 'Books / Study Material', 'Conference / Seminar', 'Professional Exam Fee', 'Other Education'] },
  misc:       { hint: 'Select the miscellaneous sub-type',  options: ['Laundry / Dry Cleaning', 'Communication / Internet', 'Event / Conference Fee', 'Donation / Charity', 'Subscription', 'Other Miscellaneous'] }
};

function populateClaimSubCategory(type) {
  var sel  = document.getElementById('claimSubCategorySelect');
  var hint = document.getElementById('claimSubCategoryHint');
  if (!sel) return;
  sel.innerHTML = '<option value="">— Select Sub-Category —</option>';
  var config = _claimSubCategories[type];
  if (!config) return;
  config.options.forEach(function(opt) {
    var o = document.createElement('option');
    o.value = opt; o.textContent = opt;
    sel.appendChild(o);
  });
  if (hint) hint.textContent = config.hint;
}

// ── Change 3: IT Declaration Cancel + Submit ──────────
function submitITDeclaration() {
  var panEl  = document.getElementById('hra_landlordPAN');
  var rentEl = document.getElementById('hra_monthlyRent');
  // Change 4 validation: annual rent > ₹1,00,000 → PAN required
  if (rentEl && panEl) {
    var annualRent = parseFloat(rentEl.value || 0) * 12;
    if (annualRent > 100000 && !panEl.value.trim()) {
      document.getElementById('landlordPANHint').style.display = 'block';
      panEl.style.borderColor = 'var(--danger)';
      panEl.focus();
      showToast('Landlord PAN is mandatory when annual rent exceeds ₹1,00,000', 'error');
      return;
    }
  }
  showToast('IT Declaration submitted successfully!', 'success');
}

function cancelITDeclaration() {
  // Clear all number inputs in the IT declaration form
  var inputs = document.querySelectorAll('#taxdocs-itdecl-tab .card:last-of-type input[type="number"]');
  inputs.forEach(function(inp) { inp.value = ''; });
  // Clear text inputs (Landlord PAN)
  var textInputs = document.querySelectorAll('#taxdocs-itdecl-tab .card:last-of-type input[type="text"]');
  textInputs.forEach(function(inp) { inp.value = ''; });
  // Reset PAN validation state
  var panHint = document.getElementById('landlordPANHint');
  var panEl   = document.getElementById('hra_landlordPAN');
  if (panHint) panHint.style.display = 'none';
  if (panEl)   panEl.style.borderColor = '';
  showToast('IT Declaration cancelled — data discarded', 'info');
}

// ── Change 4: Landlord PAN mandatory check ────────────
function checkLandlordPANRequired() {
  var rentEl  = document.getElementById('hra_monthlyRent');
  var panEl   = document.getElementById('hra_landlordPAN');
  var labelEl = document.getElementById('landlordPANLabel');
  var hintEl  = document.getElementById('landlordPANHint');
  if (!rentEl || !panEl) return;
  var annualRent = parseFloat(rentEl.value || 0) * 12;
  if (annualRent > 100000) {
    if (labelEl) labelEl.innerHTML = 'Landlord PAN <span style="color:var(--danger)">*</span> <span style="font-size:10px;color:var(--amber);font-weight:500;">(mandatory — annual rent &gt; ₹1,00,000)</span>';
    if (hintEl && !panEl.value.trim()) hintEl.style.display = 'block';
    panEl.setAttribute('required', 'required');
    panEl.style.borderColor = panEl.value.trim() ? '' : 'var(--amber)';
  } else {
    if (labelEl) labelEl.textContent = 'Landlord PAN';
    if (hintEl)  hintEl.style.display = 'none';
    panEl.removeAttribute('required');
    panEl.style.borderColor = '';
  }
}

// ════════════════════════════════════════════════════════════════
//  EMPLOYMENT HISTORY — Editable + Approval Workflow
// ════════════════════════════════════════════════════════════════

// ── Data store ──
var empHistData = {
  records: [
    { id: 1, company: 'PeopleFlow Technologies', designation: 'Senior Software Engineer', department: 'Engineering', from: '2023-04-01', to: '',        ctc: '18 LPA', isCurrent: true,  status: 'approved' },
    { id: 2, company: 'PeopleFlow Technologies', designation: 'Software Engineer',        department: 'Engineering', from: '2021-06-01', to: '2023-03-31', ctc: '12 LPA', isCurrent: false, status: 'approved' }
  ],
  pendingSnapshot: null,   // { records: [...], requestedAt: Date }
  mode: 'view',            // 'view' | 'edit'
  nextId: 3
};

// ── Utility: format date ──
function empFmtDate(val) {
  if (!val) return 'Present';
  var d = new Date(val + 'T00:00:00');
  if (isNaN(d)) return val;
  return d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}

// ── Utility: deep-clone records ──
function empCloneRecords(recs) {
  return recs.map(function(r) { return Object.assign({}, r); });
}

// ── CTC mask HTML (for view mode) ──
function empCTCCellHtml(ctcVal) {
  return '<div class="ctc-cell" data-visible="false">' +
    '<span class="ctc-text"><span class="ctc-mask">***</span><span class="ctc-value" hidden>₹' + ctcVal + '</span></span>' +
    '<button type="button" class="ctc-reveal-btn" onclick="toggleRowCTC(this)" aria-label="Show CTC" aria-pressed="false" title="Show CTC">' +
    getCTCIcon(false) + '</button></div>';
}

// ── Status badge HTML ──
function empStatusBadge(status) {
  if (status === 'pending')  return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:var(--warning-muted);color:var(--warning);border:1px solid #FDE68A;">⏳ Pending</span>';
  if (status === 'approved') return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:var(--success-muted);color:var(--success);border:1px solid #A7F3D0;">✓ Approved</span>';
  if (status === 'rejected') return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:var(--danger-muted);color:var(--danger);border:1px solid #FECACA;">✕ Rejected</span>';
  return '';
}

// ── Render table ──
function renderEmpHistTable() {
  var tbody = document.getElementById('empHistTableBody');
  if (!tbody) return;
  var isEdit = empHistData.mode === 'edit';
  var hasPending = empHistData.records.some(function(r) { return r.status === 'pending'; });

  // Status column header visibility
  var statusTh = document.getElementById('empHistStatusTh');
  if (statusTh) statusTh.style.display = (isEdit ? 'none' : '');

  tbody.innerHTML = '';

  empHistData.records.forEach(function(rec, idx) {
    var tr = document.createElement('tr');
    tr.style.cssText = 'border-bottom:1px solid var(--border-subtle);transition:background 0.12s;';
    tr.onmouseover = function() { this.style.background = 'var(--bg)'; };
    tr.onmouseout  = function() { this.style.background = ''; };

    var tdStyle = 'padding:10px 12px;vertical-align:middle;font-size:13px;color:var(--text-primary);';
    var inputStyle = 'width:100%;padding:5px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12.5px;font-family:var(--font);color:var(--text-primary);background:var(--surface);outline:none;min-width:100px;transition:border-color 0.14s;';

    if (isEdit) {
      // ── EDIT MODE: show inputs ──
      var isCurrentChecked = rec.isCurrent ? 'checked' : '';
      tr.innerHTML =
        '<td style="' + tdStyle + 'min-width:140px;">' +
          '<input type="text" data-field="company" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.company + '" placeholder="Company name *" style="' + inputStyle + '">' +
          '<span class="emp-err" id="empErr_company_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Required</span>' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:140px;">' +
          '<input type="text" data-field="designation" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.designation + '" placeholder="Designation *" style="' + inputStyle + '">' +
          '<span class="emp-err" id="empErr_designation_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Required</span>' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:120px;">' +
          '<input type="text" data-field="department" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.department + '" placeholder="Department" style="' + inputStyle + '">' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:140px;">' +
          '<input type="month" data-field="from" data-id="' + rec.id + '" class="emp-hist-input" value="' + (rec.from ? rec.from.substring(0,7) : '') + '" style="' + inputStyle + 'cursor:pointer;">' +
          '<span class="emp-err" id="empErr_from_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Required</span>' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:160px;">' +
          '<label style="display:flex;align-items:center;gap:5px;font-size:11.5px;color:var(--text-secondary);margin-bottom:4px;cursor:pointer;">' +
            '<input type="checkbox" data-field="isCurrent" data-id="' + rec.id + '" class="emp-hist-input" ' + isCurrentChecked + ' style="accent-color:var(--primary);cursor:pointer;"> Currently working here' +
          '</label>' +
          '<input type="month" data-field="to" data-id="' + rec.id + '" class="emp-hist-input" value="' + (rec.to ? rec.to.substring(0,7) : '') + '" style="' + inputStyle + 'cursor:pointer;' + (rec.isCurrent ? 'display:none;' : '') + '">' +
          '<span class="emp-err" id="empErr_to_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Must be after start date</span>' +
        '</td>' +
        '<td class="ctc-cell-col" style="' + tdStyle + 'min-width:100px;">' +
          '<input type="text" data-field="ctc" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.ctc + '" placeholder="e.g. 12 LPA" style="' + inputStyle + '">' +
        '</td>' +
        '<td style="' + tdStyle + 'text-align:center;">' +
          (empHistData.records.length > 1
            ? '<button onclick="removeEmpHistRow(' + rec.id + ')" title="Remove row" style="background:none;border:none;cursor:pointer;color:var(--danger);padding:3px;border-radius:4px;" onmouseover="this.style.background=\'var(--danger-muted)\'" onmouseout="this.style.background=\'none\'">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>'
            : '<span style="color:var(--text-tertiary);font-size:11px;">—</span>') +
        '</td>';
    } else {
      // ── VIEW MODE: read-only ──
      var isPending = rec.status === 'pending';
      var rowBg = isPending ? 'background:var(--warning-muted);' : '';
      tr.style.cssText += rowBg;
      tr.innerHTML =
        '<td style="' + tdStyle + '">' +
          '<span style="font-weight:' + (rec.isCurrent ? '600' : '400') + ';">' + rec.company + '</span>' +
          (rec.isCurrent ? '<span style="display:inline-flex;margin-left:6px;font-size:10px;font-weight:600;padding:1px 6px;border-radius:20px;background:var(--primary-muted);color:var(--primary);border:1px solid var(--primary-border);">Current</span>' : '') +
        '</td>' +
        '<td style="' + tdStyle + '">' + rec.designation + '</td>' +
        '<td style="' + tdStyle + '">' + rec.department + '</td>' +
        '<td style="' + tdStyle + 'font-family:var(--mono);font-size:12px;">' + empFmtDate(rec.from) + '</td>' +
        '<td style="' + tdStyle + 'font-family:var(--mono);font-size:12px;">' + (rec.isCurrent ? '<span style="color:var(--primary);font-weight:600;">Present</span>' : empFmtDate(rec.to)) + '</td>' +
        '<td class="ctc-cell-col" style="' + tdStyle + '">' + empCTCCellHtml(rec.ctc) + '</td>' +
        '<td style="' + tdStyle + '">' + empStatusBadge(rec.status) + '</td>';
    }

    tbody.appendChild(tr);

    // Attach live event listeners after inject
    if (isEdit) {
      tr.querySelectorAll('.emp-hist-input').forEach(function(inp) {
        inp.addEventListener('input', function() { syncEmpHistField(inp); });
        inp.addEventListener('change', function() { syncEmpHistField(inp); });
        inp.addEventListener('focus', function() { inp.style.borderColor = 'var(--primary)'; inp.style.boxShadow = '0 0 0 2px rgba(13,148,136,0.15)'; });
        inp.addEventListener('blur',  function() { inp.style.borderColor = ''; inp.style.boxShadow = ''; });
      });
    }
  });
}

// ── Sync input change to data ──
function syncEmpHistField(inp) {
  var id    = parseInt(inp.dataset.id);
  var field = inp.dataset.field;
  var rec   = empHistData.records.find(function(r) { return r.id === id; });
  if (!rec) return;

  if (inp.type === 'checkbox') {
    rec[field] = inp.checked;
    // Toggle "to" date field
    var toInput = inp.closest('tr').querySelector('[data-field="to"]');
    if (toInput) toInput.style.display = inp.checked ? 'none' : '';
    if (inp.checked) rec.to = '';
  } else if (inp.type === 'month') {
    rec[field] = inp.value ? inp.value + '-01' : '';
  } else {
    rec[field] = inp.value.trim();
  }
}

// ── Enter edit mode ──
function startEmpHistEdit() {
  // Check if there's already a pending request
  var hasPending = empHistData.records.some(function(r) { return r.status === 'pending'; });
  if (hasPending) {
    showToast('A pending approval request already exists. Please wait for HR Admin to review.', 'warning');
    return;
  }
  empHistData._editSnapshot = empCloneRecords(empHistData.records);
  empHistData.mode = 'edit';
  // Show/hide buttons
  document.getElementById('empHistEditBtn').style.display  = 'none';
  document.getElementById('empHistSaveBtn').style.display  = 'flex';
  document.getElementById('empHistCancelBtn').style.display = '';
  document.getElementById('empHistAddRowWrap').style.display = '';
  renderEmpHistTable();
  showToast('Edit mode enabled. Make your changes and submit for approval.', 'info');
}

// ── Cancel edit ──
function cancelEmpHistEdit() {
  if (empHistData._editSnapshot) {
    empHistData.records = empHistData._editSnapshot;
  }
  empHistData.mode = 'view';
  document.getElementById('empHistEditBtn').style.display  = '';
  document.getElementById('empHistSaveBtn').style.display  = 'none';
  document.getElementById('empHistCancelBtn').style.display = 'none';
  document.getElementById('empHistAddRowWrap').style.display = 'none';
  renderEmpHistTable();
  showToast('Changes discarded', 'info');
}

// ── Add new row ──
function addEmpHistRow() {
  empHistData.records.push({ id: empHistData.nextId++, company: '', designation: '', department: '', from: '', to: '', ctc: '', isCurrent: false, status: 'approved' });
  renderEmpHistTable();
}

// ── Remove row ──
function removeEmpHistRow(id) {
  if (empHistData.records.length <= 1) return;
  empHistData.records = empHistData.records.filter(function(r) { return r.id !== id; });
  renderEmpHistTable();
}

// ── Validate ──
function validateEmpHistRecords() {
  var valid = true;
  empHistData.records.forEach(function(rec) {
    // Company
    var compErr = document.getElementById('empErr_company_' + rec.id);
    if (!rec.company) { if (compErr) compErr.style.display = ''; valid = false; }
    else { if (compErr) compErr.style.display = 'none'; }
    // Designation
    var desErr = document.getElementById('empErr_designation_' + rec.id);
    if (!rec.designation) { if (desErr) desErr.style.display = ''; valid = false; }
    else { if (desErr) desErr.style.display = 'none'; }
    // From date
    var fromErr = document.getElementById('empErr_from_' + rec.id);
    if (!rec.from) { if (fromErr) fromErr.style.display = ''; valid = false; }
    else { if (fromErr) fromErr.style.display = 'none'; }
    // To date (if not current)
    var toErr = document.getElementById('empErr_to_' + rec.id);
    if (!rec.isCurrent) {
      if (!rec.to || rec.to <= rec.from) { if (toErr) toErr.style.display = ''; valid = false; }
      else { if (toErr) toErr.style.display = 'none'; }
    } else {
      if (toErr) toErr.style.display = 'none';
    }
  });
  return valid;
}

// ── Submit for Approval ──
function submitEmpHistForApproval() {
  if (!validateEmpHistRecords()) {
    showToast('Please fix validation errors before submitting.', 'error');
    return;
  }
  // Mark all edited records as pending
  empHistData.records.forEach(function(r) { r.status = 'pending'; });
  empHistData.pendingSnapshot = { records: empCloneRecords(empHistData.records), requestedAt: new Date() };
  empHistData.mode = 'view';
  // Restore original approved data for display while pending
  var original = empHistData._editSnapshot || [];
  var pendingMap = {};
  empHistData.records.forEach(function(r) { pendingMap[r.id] = r; });
  // Keep pending status but show old values visually — combine:
  // For simplicity, show pending badge and notify HR
  document.getElementById('empHistEditBtn').style.display  = '';
  document.getElementById('empHistSaveBtn').style.display  = 'none';
  document.getElementById('empHistCancelBtn').style.display = 'none';
  document.getElementById('empHistAddRowWrap').style.display = 'none';
  // Show pending banner
  var banner = document.getElementById('empHistPendingBanner');
  if (banner) { banner.style.display = 'flex'; }
  renderEmpHistTable();
  showToast('Update request submitted to HR Admin for approval.', 'success');
  // Simulate HR Admin notification (demo button appears)
  showHRAdminDemoNotice();
}

// ── Demo: Show HR Admin review notice ──
function showHRAdminDemoNotice() {
  var wrap = document.getElementById('empHistHeaderActions');
  if (!wrap) return;
  // Remove existing demo btn
  var existing = document.getElementById('empHistHRReviewBtn');
  if (existing) existing.remove();
  var btn = document.createElement('button');
  btn.id = 'empHistHRReviewBtn';
  btn.className = 'quick-btn';
  btn.style.cssText = 'font-size:11.5px;background:#7C3AED;border-color:#7C3AED;color:#fff;display:flex;align-items:center;gap:5px;';
  btn.title = 'Demo: Open HR Admin Review Panel';
  btn.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> HR Admin Review';
  btn.onclick = openEmpHistAdminModal;
  wrap.appendChild(btn);
}

// ── Open HR Admin modal ──
function openEmpHistAdminModal() {
  if (!empHistData.pendingSnapshot) return;
  var modal = document.getElementById('empHistAdminModal');
  if (!modal) return;
  modal.style.display = 'flex';

  // Date
  var dateEl = document.getElementById('empHistAdminReqDate');
  if (dateEl && empHistData.pendingSnapshot.requestedAt) {
    dateEl.textContent = empHistData.pendingSnapshot.requestedAt.toLocaleString('en-IN', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  }

  // Build diff
  var tbody = document.getElementById('empHistAdminDiffBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  var original  = empHistData._editSnapshot || [];
  var proposed  = empHistData.pendingSnapshot.records;
  var fields    = [
    { key:'company',     label:'Company Name' },
    { key:'designation', label:'Designation' },
    { key:'department',  label:'Department' },
    { key:'from',        label:'From' },
    { key:'to',          label:'To' },
    { key:'ctc',         label:'CTC' }
  ];

  proposed.forEach(function(newRec, idx) {
    var oldRec = original.find(function(r) { return r.id === newRec.id; }) || {};
    fields.forEach(function(f) {
      var oldVal = f.key === 'from' || f.key === 'to' ? empFmtDate(oldRec[f.key]) : (oldRec[f.key] || '—');
      var newVal = f.key === 'from' || f.key === 'to' ? empFmtDate(newRec[f.key]) : (newRec[f.key] || '—');
      var changed = oldVal !== newVal;
      var tr = document.createElement('tr');
      tr.style.background = changed ? 'rgba(251,191,36,0.07)' : '';
      tr.innerHTML =
        '<td style="padding:7px 12px;border:1px solid var(--border);font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">' + (idx + 1) + '</td>' +
        '<td style="padding:7px 12px;border:1px solid var(--border);font-size:12px;font-weight:500;color:var(--text-secondary);">' + f.label + '</td>' +
        '<td style="padding:7px 12px;border:1px solid var(--border);font-size:12px;color:var(--text-primary);">' + oldVal + '</td>' +
        '<td style="padding:7px 12px;border:1px solid var(--border);font-size:12px;color:' + (changed ? 'var(--warning)' : 'var(--text-primary)') + ';font-weight:' + (changed ? '600' : '400') + ';">' +
          (changed ? '<span style="margin-right:4px;">→</span>' : '') + newVal +
        '</td>';
      tbody.appendChild(tr);
    });
  });

  // Reset reject state
  var reasonWrap = document.getElementById('empHistAdminRejectReasonWrap');
  if (reasonWrap) reasonWrap.style.display = 'none';
  var confirmBtn = document.getElementById('empHistAdminConfirmRejectBtn');
  if (confirmBtn) confirmBtn.style.display = 'none';
  var toggleBtn = document.getElementById('empHistAdminRejectToggleBtn');
  if (toggleBtn) toggleBtn.style.display = '';
  var reasonInput = document.getElementById('empHistAdminRejectReason');
  if (reasonInput) reasonInput.value = '';
  var errEl = document.getElementById('empHistAdminRejectErr');
  if (errEl) errEl.style.display = 'none';
}

function closeEmpHistAdminModal() {
  var modal = document.getElementById('empHistAdminModal');
  if (modal) modal.style.display = 'none';
}

function toggleRejectReasonBox() {
  var wrap = document.getElementById('empHistAdminRejectReasonWrap');
  var confirmBtn = document.getElementById('empHistAdminConfirmRejectBtn');
  var toggleBtn  = document.getElementById('empHistAdminRejectToggleBtn');
  if (!wrap) return;
  var isShown = wrap.style.display !== 'none';
  wrap.style.display = isShown ? 'none' : '';
  if (confirmBtn) confirmBtn.style.display = isShown ? 'none' : '';
  if (toggleBtn)  toggleBtn.style.display  = isShown ? '' : 'none';
}

// ── HR Admin: Approve ──
function hrApproveEmpHist() {
  if (!empHistData.pendingSnapshot) return;
  // Apply proposed changes
  empHistData.records = empHistData.pendingSnapshot.records.map(function(r) {
    return Object.assign({}, r, { status: 'approved' });
  });
  empHistData.pendingSnapshot = null;
  empHistData._editSnapshot   = null;
  // Hide banners
  var pendingBanner = document.getElementById('empHistPendingBanner');
  if (pendingBanner) pendingBanner.style.display = 'none';
  // Remove HR admin demo button
  var demoBtn = document.getElementById('empHistHRReviewBtn');
  if (demoBtn) demoBtn.remove();
  closeEmpHistAdminModal();
  renderEmpHistTable();
  showToast('Employment history update approved and applied.', 'success');
}

// ── HR Admin: Reject ──
function hrRejectEmpHist() {
  var reasonEl = document.getElementById('empHistAdminRejectReason');
  var errEl    = document.getElementById('empHistAdminRejectErr');
  var reason   = reasonEl ? reasonEl.value.trim() : '';
  if (!reason) {
    if (errEl) errEl.style.display = '';
    return;
  }
  if (errEl) errEl.style.display = 'none';
  // Revert to snapshot
  if (empHistData._editSnapshot) {
    empHistData.records = empHistData._editSnapshot.map(function(r) {
      return Object.assign({}, r, { status: 'rejected' });
    });
  }
  empHistData.pendingSnapshot = null;
  empHistData._editSnapshot   = null;
  // Hide pending banner, show rejection banner
  var pendingBanner = document.getElementById('empHistPendingBanner');
  if (pendingBanner) pendingBanner.style.display = 'none';
  var rejBanner = document.getElementById('empHistRejectedBanner');
  if (rejBanner) { rejBanner.style.display = 'flex'; }
  var msgEl = document.getElementById('empHistRejectionMsg');
  if (msgEl) msgEl.textContent = 'Reason: "' + reason + '". Existing records remain active.';
  // Remove HR admin demo button
  var demoBtn = document.getElementById('empHistHRReviewBtn');
  if (demoBtn) demoBtn.remove();
  closeEmpHistAdminModal();
  // Reset rejected status back to approved for display (keep old data)
  empHistData.records.forEach(function(r) { r.status = 'approved'; });
  renderEmpHistTable();
  showToast('Employment history update request rejected.', 'error');
}

function dismissRejectionBanner() {
  var banner = document.getElementById('empHistRejectedBanner');
  if (banner) banner.style.display = 'none';
}

// ── Init on DOMContentLoaded ──
document.addEventListener('DOMContentLoaded', function() {
  renderEmpHistTable();
});

// ── Also render when switching to the tab ──
var _origSwitchTab = window.switchTab;
if (typeof _origSwitchTab === 'function') {
  window.switchTab = function(el, tabId) {
    _origSwitchTab(el, tabId);
    if (tabId === 'history-tab') renderEmpHistTable();
  };
}

// ── Change 5: Enable Spouse & Children fields on edit ─
// Patch enablePersonalEdit to also enable spouse/children fields
var _origEnablePersonalEdit = window.enablePersonalEdit;
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var orig = window.enablePersonalEdit;
    if (typeof orig === 'function') {
      window.enablePersonalEdit = function() {
        orig();
        // Also enable spouse & children fields
        var spouseChildIds = [
          'pd_spouseFirstName','pd_spouseLastName','pd_spouseDob','pd_spouseOccupation','pd_spouseMobile','pd_spouseDependent',
          'pd_child1Name','pd_child1Dob','pd_child1Gender',
          'pd_child2Name','pd_child2Dob','pd_child2Gender'
        ];
        spouseChildIds.forEach(function(id) {
          var el = document.getElementById(id);
          if (el) el.disabled = false;
        });
        var addBtn = document.getElementById('addChildBtn');
        if (addBtn) addBtn.disabled = false;
      };
    }
  });
})();

// ── Directory Search & Filter (First Name + Department + Status) ──
function filterDirectory() {
  var searchVal = (document.getElementById('dirSearchInput') ? document.getElementById('dirSearchInput').value : '').toLowerCase().trim();
  var deptVal   = (document.getElementById('dirDeptFilter')  ? document.getElementById('dirDeptFilter').value  : '').toLowerCase().trim();
  var statusVal = (document.getElementById('dirStatusFilter') ? document.getElementById('dirStatusFilter').value : '').toLowerCase().trim();
  var rows = document.querySelectorAll('#dirTableBody tr');
  rows.forEach(function(row) {
    var firstName = (row.getAttribute('data-firstname') || '').toLowerCase();
    var dept      = (row.getAttribute('data-dept')      || '').toLowerCase();
    var status    = (row.getAttribute('data-status')    || '').toLowerCase();
    var nameMatch   = !searchVal || firstName.indexOf(searchVal) === 0;
    var deptMatch   = !deptVal   || dept === deptVal;
    var statusMatch = !statusVal || status === statusVal;
    row.style.display = (nameMatch && deptMatch && statusMatch) ? '' : 'none';
  });
}

// ── CTC Column Toggle (Employment History tab) ──
function getCTCIcon(isVisible) {
  if (isVisible) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"></path>' +
      '<circle cx="12" cy="12" r="3"></circle>' +
      '</svg>';
  }

  return '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>' +
    '<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>' +
    '<path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>' +
    '<line x1="1" y1="1" x2="23" y2="23"></line>' +
    '</svg>';
}

function toggleRowCTC(button) {
  var cell = button.closest('.ctc-cell');
  if (!cell) return;

  var mask = cell.querySelector('.ctc-mask');
  var value = cell.querySelector('.ctc-value');
  var isVisible = cell.getAttribute('data-visible') === 'true';
  var nextVisible = !isVisible;

  cell.setAttribute('data-visible', nextVisible ? 'true' : 'false');

  if (mask) mask.hidden = nextVisible;
  if (value) value.hidden = !nextVisible;

  button.innerHTML = getCTCIcon(nextVisible);
  button.setAttribute('aria-pressed', String(nextVisible));
  button.setAttribute('aria-label', nextVisible ? 'Hide CTC' : 'Show CTC');
  button.setAttribute('title', nextVisible ? 'Hide CTC' : 'Show CTC');
}

function openEditTaskModal(card) {
  _editingTaskCard = card;

  // Read data from card's data attributes
  var taskId    = card.getAttribute('data-task-id') || '';
  var taskName  = card.querySelector('.task-title') ? card.querySelector('.task-title').textContent.trim() : '';
  var dueAttr   = card.getAttribute('data-due') || '';
  var priority  = card.getAttribute('data-task-priority') || 'low';
  var desc      = card.getAttribute('data-task-desc') || '';
  var assignee  = card.getAttribute('data-task-assignee') || 'me';

  // Populate modal fields
  document.getElementById('et_taskId').textContent    = taskId;
  document.getElementById('et_taskName').value        = taskName;
  document.getElementById('et_dueDate').value         = dueAttr;
  document.getElementById('et_description').value     = desc;

  // Priority radios
  var prioInputs = document.querySelectorAll('input[name="et_priority"]');
  prioInputs.forEach(function(r) {
    r.checked = (r.value === priority);
  });

  // Assignee
  var assigneeEl = document.getElementById('et_assignee');
  if (assigneeEl) {
    for (var i = 0; i < assigneeEl.options.length; i++) {
      if (assigneeEl.options[i].value === assignee) { assigneeEl.selectedIndex = i; break; }
    }
  }

  // Clear errors
  ['et_err_taskName','et_err_desc'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  ['et_taskName','et_description'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('input-error');
  });

  document.getElementById('editTaskModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() { document.getElementById('et_taskName').focus(); }, 80);
}

function closeEditTaskModal() {
  document.getElementById('editTaskModal').classList.remove('open');
  document.body.style.overflow = '';
  _editingTaskCard = null;
}

function saveEditTask() {
  var nameEl = document.getElementById('et_taskName');
  var descEl = document.getElementById('et_description');
  var nameErr = document.getElementById('et_err_taskName');
  var descErr = document.getElementById('et_err_desc');
  var valid = true;

  // Validate name
  if (!nameEl.value.trim()) {
    nameErr.style.display = ''; nameEl.classList.add('input-error');
    nameEl.focus(); valid = false;
  } else {
    nameErr.style.display = 'none'; nameEl.classList.remove('input-error');
  }

  // Validate description
  if (!descEl.value.trim()) {
    descErr.style.display = ''; descEl.classList.add('input-error');
    valid = false;
  } else {
    descErr.style.display = 'none'; descEl.classList.remove('input-error');
  }

  if (!valid) return;

  if (_editingTaskCard) {
    // Update task card title
    var titleEl = _editingTaskCard.querySelector('.task-title');
    if (titleEl) titleEl.textContent = nameEl.value.trim();

    // Update data attributes
    _editingTaskCard.setAttribute('data-task-desc', descEl.value.trim());
    _editingTaskCard.setAttribute('data-due', document.getElementById('et_dueDate').value);
    var selPrio = document.querySelector('input[name="et_priority"]:checked');
    if (selPrio) _editingTaskCard.setAttribute('data-task-priority', selPrio.value);
    var assigneeEl = document.getElementById('et_assignee');
    if (assigneeEl) _editingTaskCard.setAttribute('data-task-assignee', assigneeEl.value);

    // Update due date display in task-meta
    var dueEl = _editingTaskCard.querySelector('.task-due');
    var newDue = document.getElementById('et_dueDate').value;
    if (dueEl && newDue) {
      var d = new Date(newDue);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      dueEl.textContent = 'Due: ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }

    // Update priority badge in task-meta
    var prioEl = _editingTaskCard.querySelector('.priority-badge');
    if (prioEl && selPrio) {
      prioEl.className = 'priority-badge ' + selPrio.value;
      prioEl.textContent = selPrio.value.charAt(0).toUpperCase() + selPrio.value.slice(1);
    }
  }

  showToast('Task updated successfully!', 'success');
  closeEditTaskModal();
}

// ===== TASK SEARCH =====
function filterMyTasksBySearch(query) {
  var q = query.trim().toLowerCase();
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  var visible = 0;
  cards.forEach(function(card) {
    var title = (card.querySelector('.task-title') || {}).textContent || '';
    var id    = (card.getAttribute('data-task-id') || '').toLowerCase();
    var desc  = (card.getAttribute('data-task-desc') || '').toLowerCase();
    var show  = !q || title.toLowerCase().indexOf(q) !== -1 || id.indexOf(q) !== -1 || desc.indexOf(q) !== -1;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  // Reset segment active state when searching
  if (q) {
    document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b){ b.classList.remove('active'); });
  } else {
    // Restore default open filter when search is cleared
    segFilterMyTasks('open', document.querySelector('#taskFilterSegment .task-seg-btn[data-value="open"]'));
  }
}

// ===== LEAVE HOLIDAY CALENDAR =====
var lvcalYear  = new Date().getFullYear();
var lvcalMonth = new Date().getMonth();
var lvcalTarget = 'from'; // 'from' or 'to'

function openLeaveCalendar(target) {
  lvcalTarget = target;
  // Position popup near the clicked input
  var inputId = target === 'from' ? 'leaveFromDate' : 'leaveToDate';
  var inp = document.getElementById(inputId);
  var popup = document.getElementById('leaveCalPopup');
  if (!inp || !popup) return;
  var rect = inp.getBoundingClientRect();
  popup.style.top  = (rect.bottom + window.scrollY + 4) + 'px';
  popup.style.left = (rect.left  + window.scrollX) + 'px';
  popup.style.display = 'block';
  // Parse currently set date to init month
  var curVal = inp.value;
  if (curVal && curVal.match(/^\d{4}-\d{2}-\d{2}$/)) {
    var parts = curVal.split('-');
    lvcalYear  = parseInt(parts[0]);
    lvcalMonth = parseInt(parts[1]) - 1;
  } else {
    lvcalYear  = new Date().getFullYear();
    lvcalMonth = new Date().getMonth();
  }
  renderLeaveCalendar();
}

function closeLeaveCalendar() {
  var popup = document.getElementById('leaveCalPopup');
  if (popup) popup.style.display = 'none';
}

function lvcalChangeMonth(dir) {
  lvcalMonth += dir;
  if (lvcalMonth > 11) { lvcalMonth = 0; lvcalYear++; }
  if (lvcalMonth < 0)  { lvcalMonth = 11; lvcalYear--; }
  renderLeaveCalendar();
}

function renderLeaveCalendar() {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var lbl = document.getElementById('lvcalMonthLabel');
  if (lbl) lbl.textContent = months[lvcalMonth] + ' ' + lvcalYear;
  var container = document.getElementById('lvcalDays');
  if (!container) return;
  container.innerHTML = '';
  var firstDay    = new Date(lvcalYear, lvcalMonth, 1).getDay();
  var daysInMonth = new Date(lvcalYear, lvcalMonth + 1, 0).getDate();
  var today       = new Date(); today.setHours(0,0,0,0);
  // Blank slots
  for (var i = 0; i < firstDay; i++) container.appendChild(document.createElement('div'));
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr   = lvcalYear + '-' + String(lvcalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var dayOfWeek = new Date(lvcalYear, lvcalMonth, d).getDay();
    var isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    var holiday   = (typeof holidays2026 !== 'undefined') ? holidays2026[dateStr] : null;
    var isToday   = (new Date(lvcalYear, lvcalMonth, d).getTime() === today.getTime());
    var cell = document.createElement('div');
    cell.style.cssText = 'border-radius:5px;padding:4px 2px;text-align:center;font-size:11.5px;font-weight:600;min-height:30px;cursor:pointer;transition:all 0.12s;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center;';
    if (isToday) {
      cell.style.background = 'var(--primary)'; cell.style.color = 'white'; cell.style.border = '1px solid var(--primary-hover)';
    } else if (holiday) {
      var isNat = holiday.type === 'national';
      cell.style.background = isNat ? '#DCFCE7' : '#EDE9FE';
      cell.style.border     = isNat ? '1px solid #16A34A' : '1px solid #7C3AED';
      cell.style.color      = isNat ? '#15803D' : '#5B21B6';
      cell.title = holiday.name;
    } else if (isWeekend) {
      cell.style.background = '#F1F5F9'; cell.style.color = '#94A3B8'; cell.style.border = '1px solid #CBD5E1';
    } else {
      cell.style.background = 'var(--surface)'; cell.style.border = '1px solid var(--border)'; cell.style.color = 'var(--text-secondary)';
    }
    cell.innerHTML = '<div>' + d + '</div>';
    if (holiday) cell.innerHTML += '<div style="font-size:7px;line-height:1.1;margin-top:1px;overflow:hidden;max-width:38px;word-break:break-word;">' + holiday.name + '</div>';
    (function(ds, c) {
      c.onclick = function() {
        var inp = document.getElementById(lvcalTarget === 'from' ? 'leaveFromDate' : 'leaveToDate');
        if (inp) { inp.value = ds; checkSandwichLeave(); }
        closeLeaveCalendar();
      };
      c.onmouseover = function() { if (!isToday) this.style.opacity = '0.78'; };
      c.onmouseout  = function() { this.style.opacity = '1'; };
    })(dateStr, cell);
    container.appendChild(cell);
  }
}

// Close calendar on outside click
document.addEventListener('click', function(e) {
  var popup = document.getElementById('leaveCalPopup');
  if (popup && popup.style.display === 'block') {
    var fromInp = document.getElementById('leaveFromDate');
    var toInp   = document.getElementById('leaveToDate');
    if (!popup.contains(e.target) && e.target !== fromInp && e.target !== toInp) {
      closeLeaveCalendar();
    }
  }
});

// =====================================================================
//  REVIEW SECTION FILTER BAR
// =====================================================================

function _getRvRows() {
  return document.querySelectorAll('#reviewUnifiedList [data-rv-status]');
}

function _applyRvFilters() {
  var statusBtn = document.querySelector('#reviewFilterSegment .task-seg-btn.active');
  var status    = statusBtn ? statusBtn.getAttribute('data-rv-value') : 'all';
  var type      = _getDropdownValue('reviewTypeDropdownList') || '';
  var priority  = (document.getElementById('reviewPriorityFilter') || {}).value || '';
  var fromVal   = (document.getElementById('reviewDRFrom') || {}).value || '';
  var toVal     = (document.getElementById('reviewDRTo')   || {}).value || '';
  var fromDate  = fromVal ? new Date(fromVal) : null;
  var toDate    = toVal   ? new Date(toVal)   : null;
  if (toDate) toDate.setHours(23,59,59,999);

  _getRvRows().forEach(function(row) {
    var rs = row.getAttribute('data-rv-status')   || '';
    var rt = row.getAttribute('data-rv-type')     || '';
    var rp = row.getAttribute('data-rv-priority') || '';
    var rd = row.getAttribute('data-rv-due')      || '';
    var show = true;
    if (status !== 'all' && rs !== status)  show = false;
    if (type     && rt !== type)            show = false;
    if (priority && rp !== priority)        show = false;
    if (fromDate || toDate) {
      var d = rd ? new Date(rd) : null;
      if (!d || (fromDate && d < fromDate) || (toDate && d > toDate)) show = false;
    }
    row.style.display = show ? '' : 'none';
  });
}

function segFilterReviews(value, btn) {
  document.querySelectorAll('#reviewFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-rv-value') === value);
  });
  _applyRvFilters();
}
function filterReviewsByType(v)     { _applyRvFilters(); }
function filterReviewsByPriority(v) { _applyRvFilters(); }
function sortReviews(v) {
  var list = document.getElementById('reviewUnifiedList');
  if (!list) return;
  var rows = Array.prototype.slice.call(list.querySelectorAll('.task-card[data-rv-status]'));
  var priorityRank = { high: 0, medium: 1, low: 2 };
  rows.forEach(function(row, idx) {
    if (!row.hasAttribute('data-rv-order')) row.setAttribute('data-rv-order', String(idx));
  });
  rows.sort(function(a, b) {
    if (v === 'due_asc') {
      return String(a.getAttribute('data-rv-due') || '').localeCompare(String(b.getAttribute('data-rv-due') || ''));
    }
    if (v === 'due_desc') {
      return String(b.getAttribute('data-rv-due') || '').localeCompare(String(a.getAttribute('data-rv-due') || ''));
    }
    if (v === 'name_asc') {
      var an = (a.querySelector('.task-title') || {}).textContent || '';
      var bn = (b.querySelector('.task-title') || {}).textContent || '';
      return an.trim().localeCompare(bn.trim());
    }
    if (v === 'priority_high') {
      var ar = priorityRank[a.getAttribute('data-rv-priority')];
      var br = priorityRank[b.getAttribute('data-rv-priority')];
      return (ar == null ? 99 : ar) - (br == null ? 99 : br);
    }
    return Number(a.getAttribute('data-rv-order') || 0) - Number(b.getAttribute('data-rv-order') || 0);
  });
  rows.forEach(function(row) { list.appendChild(row); });
  _applyRvFilters();
}

function toggleReviewDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('reviewDRPopover');
  var btn = document.getElementById('reviewDRTrigger');
  if (!pop) return;
  var isOpen = pop.style.display !== 'none';
  document.querySelectorAll('[id$="DRPopover"]').forEach(function(p){ p.style.display='none'; });
  if (!isOpen) { pop.style.display='block'; if(btn) btn.setAttribute('aria-expanded','true'); }
  else         {                             if(btn) btn.setAttribute('aria-expanded','false'); }
}
function applyReviewDRFromPopover() {
  var pop = document.getElementById('reviewDRPopover');
  var btn = document.getElementById('reviewDRTrigger');
  if (pop) pop.style.display = 'none';
  if (btn) btn.setAttribute('aria-expanded','false');
  var from = (document.getElementById('reviewDRFrom')||{}).value || '';
  var to   = (document.getElementById('reviewDRTo')  ||{}).value || '';
  var clearB  = document.getElementById('reviewDRClearBtn');
  var trigger = document.getElementById('reviewDRTrigger');
  var label   = document.getElementById('reviewDRBtnLabel');
  if (from || to) {
    if (clearB)  clearB.style.display  = '';
    if (trigger) trigger.classList.add('active');
    // Keep the Date Range label visible after applying; only the clear button indicates active state.
    if (label)   label.style.display   = '';
  }
  _applyRvFilters();
}
function clearReviewDateRange() {
  var ids = ['reviewDRFrom','reviewDRTo'];
  ids.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var pop     = document.getElementById('reviewDRPopover');
  var clearB  = document.getElementById('reviewDRClearBtn');
  var trigger = document.getElementById('reviewDRTrigger');
  var label   = document.getElementById('reviewDRBtnLabel');
  if (pop)     pop.style.display  = 'none';
  if (clearB)  clearB.style.display  = 'none';
  if (trigger) { trigger.classList.remove('active'); trigger.setAttribute('aria-expanded','false'); }
  if (label)   label.style.display   = '';
  _applyRvFilters();
}

// =====================================================================
//  APPROVAL TASKS FILTER BAR
// =====================================================================

function _getApRows() {
  return document.querySelectorAll('#approvalTableBody tr[data-ap-status]');
}

function _applyApFilters() {
  var statusBtn = document.querySelector('#approvalFilterSegment .task-seg-btn.active');
  var status    = statusBtn ? statusBtn.getAttribute('data-ap-value') : 'all';
  var type      = _getDropdownValue('approvalTypeDropdownList') || '';
  var priority  = (document.getElementById('approvalPriorityFilter') || {}).value || '';
  var fromVal   = (document.getElementById('approvalDRFrom') || {}).value || '';
  var toVal     = (document.getElementById('approvalDRTo')   || {}).value || '';
  var fromDate  = fromVal ? new Date(fromVal) : null;
  var toDate    = toVal   ? new Date(toVal)   : null;
  if (toDate) toDate.setHours(23,59,59,999);

  _getApRows().forEach(function(row) {
    var rs = row.getAttribute('data-ap-status')   || '';
    var rt = row.getAttribute('data-ap-type')     || '';
    var rp = row.getAttribute('data-ap-priority') || '';
    var rd = row.getAttribute('data-ap-date')     || '';
    var show = true;
    if (status !== 'all' && rs !== status)  show = false;
    if (type     && rt !== type)            show = false;
    if (priority && rp !== priority)        show = false;
    if (fromDate || toDate) {
      var d = rd ? new Date(rd) : null;
      if (!d || (fromDate && d < fromDate) || (toDate && d > toDate)) show = false;
    }
    row.style.display = show ? '' : 'none';
  });
}

function segFilterApprovals(value, btn) {
  document.querySelectorAll('#approvalFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-ap-value') === value);
  });
  _applyApFilters();
}
function filterApprovalsByType(v)     { _applyApFilters(); }
function filterApprovalsByPriority(v) { _applyApFilters(); }
function sortApprovals(v)             { /* visual only — data is static */ }

function toggleApprovalDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('approvalDRPopover');
  var btn = document.getElementById('approvalDRTrigger');
  if (!pop) return;
  var isOpen = pop.style.display !== 'none';
  document.querySelectorAll('[id$="DRPopover"]').forEach(function(p){ p.style.display='none'; });
  if (!isOpen) { pop.style.display='block'; if(btn) btn.setAttribute('aria-expanded','true'); }
  else         {                             if(btn) btn.setAttribute('aria-expanded','false'); }
}
function applyApprovalDRFromPopover() {
  var pop = document.getElementById('approvalDRPopover');
  var btn = document.getElementById('approvalDRTrigger');
  if (pop) pop.style.display = 'none';
  if (btn) btn.setAttribute('aria-expanded','false');
  var from = (document.getElementById('approvalDRFrom')||{}).value || '';
  var to   = (document.getElementById('approvalDRTo')  ||{}).value || '';
  var clearB  = document.getElementById('approvalDRClearBtn');
  var trigger = document.getElementById('approvalDRTrigger');
  var label   = document.getElementById('approvalDRBtnLabel');
  if (from || to) {
    if (clearB)  clearB.style.display  = '';
    if (trigger) trigger.classList.add('active');
    if (label)   label.style.display   = '';
  }
  _applyApFilters();
}
function clearApprovalDateRange() {
  var ids = ['approvalDRFrom','approvalDRTo'];
  ids.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var pop     = document.getElementById('approvalDRPopover');
  var clearB  = document.getElementById('approvalDRClearBtn');
  var trigger = document.getElementById('approvalDRTrigger');
  var label   = document.getElementById('approvalDRBtnLabel');
  if (pop)     pop.style.display     = 'none';
  if (clearB)  clearB.style.display  = 'none';
  if (trigger) { trigger.classList.remove('active'); trigger.setAttribute('aria-expanded','false'); }
  if (label)   label.style.display   = '';
  _applyApFilters();
}

// Close both new popovers on outside click
document.addEventListener('click', function(e) {
  ['reviewDRPopover','approvalDRPopover'].forEach(function(id) {
    var pop = document.getElementById(id);
    var compactId = id === 'reviewDRPopover' ? 'reviewDRCompact' : 'approvalDRCompact';
    var compact = document.getElementById(compactId);
    if (pop && pop.style.display !== 'none' && compact && !compact.contains(e.target)) {
      pop.style.display = 'none';
      var btn = document.getElementById(id.replace('Popover','Trigger'));
      if (btn) btn.setAttribute('aria-expanded','false');
    }
  });
});

// ── Leave Approval Tab: Status Filter ────────────────────────────
function filterLeaveApprovals(status, btn) {
  document.querySelectorAll('#leaveApprovalFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  var rows = document.querySelectorAll('#leaveApprovalTableBody tr');
  rows.forEach(function(row) {
    var rowStatus = (row.getAttribute('data-la-status') || '').toLowerCase();
    row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
  });
}

// ── Leave Approval Tab: Date Range (popover, matches My Leaves) ───
function toggleLeaveApprovalDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('leaveApprovalDRPopover');
  var btn = document.getElementById('leaveApprovalDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyLeaveApprovalDRFromPopover() {
  var pop = document.getElementById('leaveApprovalDRPopover');
  var btn = document.getElementById('leaveApprovalDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyLeaveApprovalDR();
}
function applyLeaveApprovalDR() {
  var from = document.getElementById('leaveApprovalDRFrom').value;
  var to   = document.getElementById('leaveApprovalDRTo').value;
  if (!from && !to) { clearLeaveApprovalDR(); return; }

  var clearB     = document.getElementById('leaveApprovalDRClearBtn');
  var triggerBtn = document.getElementById('leaveApprovalDRTrigger');
  var btnLabel   = document.getElementById('leaveApprovalDRBtnLabel');
  if (clearB)     clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)   btnLabel.style.display = '';

  document.querySelectorAll('#leaveApprovalFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var rows = document.querySelectorAll('#leaveApprovalTableBody tr');
  rows.forEach(function(row) {
    var dateAttr = row.getAttribute('data-la-date');
    if (!dateAttr) { row.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    row.style.display = inRange ? '' : 'none';
  });
}
function clearLeaveApprovalDR() {
  document.getElementById('leaveApprovalDRFrom').value = '';
  document.getElementById('leaveApprovalDRTo').value   = '';
  var clearB     = document.getElementById('leaveApprovalDRClearBtn');
  var triggerBtn = document.getElementById('leaveApprovalDRTrigger');
  var pop        = document.getElementById('leaveApprovalDRPopover');
  var btnLabel   = document.getElementById('leaveApprovalDRBtnLabel');
  if (clearB)     clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)        pop.classList.remove('open');
  if (btnLabel)   btnLabel.style.display = '';
  var activeBtn = document.querySelector('#leaveApprovalFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterLeaveApprovals(status, activeBtn);
}
