import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../exact/wireframe.css';
import { roleConfig } from '../data/roleConfig';
import { getFormattedDate, getGreeting, getHeaderCopy } from '../utils/date';
import { LoginScreen } from '../components/login/LoginScreen';
import { Sidebar } from '../components/shell/Sidebar';
import { Header } from '../components/shell/Header';
import { NotificationsPanel } from '../components/shell/NotificationsPanel';
import { ToastContainer } from '../components/common/ToastContainer';
import { ExactScriptsBridge } from '../components/common/ExactScriptsBridge';
import { RoleDashboardExact } from '../components/home/RoleDashboardExact';
import { ExactPage } from '../components/pages/ExactPage';
import { ProfilePage } from '../components/pages/ProfilePage';
import { AttendancePage } from '../components/pages/AttendancePage';
import { LeavePage } from '../components/pages/LeavePage';
import { TasksPage } from '../components/pages/TasksPage';
import { PayrollPage } from '../components/pages/PayrollPage';
import { DocumentsPage } from '../components/pages/DocumentsPage';
import { PeoplePage } from '../components/pages/PeoplePage';
import { OnboardingPage } from '../components/pages/OnboardingPage';
import { ExpenseClaimsPage } from '../components/pages/ExpenseClaimsPage';
import { HelpDeskPage } from '../components/pages/HelpDeskPage';
import { TaxDocumentsPage } from '../components/pages/TaxDocumentsPage';
import { ReportsPage } from '../components/pages/ReportsPage';
import { ExactWireframeApp } from '../components/ExactWireframeApp';

const toastIcons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
const PUNCH_STORAGE_KEY = 'pf-punch-state';
const THEME_STORAGE_KEY = 'pf-theme';

function getTodayKey(now = new Date()) {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function formatTime12(date) {
  const d = date instanceof Date ? date : new Date(date);
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

function calcDuration(inIso, outIso) {
  if (!inIso || !outIso) return '—';
  const diffMs = new Date(outIso) - new Date(inIso);
  if (!Number.isFinite(diffMs) || diffMs <= 0) return '—';
  const h = Math.floor(diffMs / 3600000);
  const m = Math.floor((diffMs % 3600000) / 60000);
  return `${h}h ${String(m).padStart(2, '0')}m`;
}

function getDefaultPunchModel() {
  return {
    punchState: 'in',
    punchDoneForToday: false,
    punchInTime: null,
    punchOutTime: null,
    dayKey: getTodayKey(),
  };
}

function hydratePunchModel() {
  const base = getDefaultPunchModel();
  try {
    const raw = localStorage.getItem(PUNCH_STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    const todayKey = getTodayKey();
    if (!parsed || parsed.dayKey !== todayKey) return base;
    return {
      ...base,
      ...parsed,
      dayKey: todayKey,
    };
  } catch (e) {
    return base;
  }
}

class RuntimeFallbackBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    console.error('PeopleFlow safe decomposed runtime failed. Falling back to exact wireframe app.', error);
  }
  render() {
    if (this.state.failed) {
      return <ExactWireframeApp />;
    }
    return this.props.children;
  }
}

function SafeDecomposedApp() {
  const [selectedRole, setSelectedRole] = useState('employee');
  const [email, setEmail] = useState(roleConfig.employee.email);
  const [password, setPassword] = useState(roleConfig.employee.password);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState('employee');
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) === 'dark';
    } catch (e) {
      return false;
    }
  });
  const [toasts, setToasts] = useState([]);
  const [currentTime, setCurrentTime] = useState('09:15:32');
  const [punchModel, setPunchModel] = useState(() => hydratePunchModel());

  const user = roleConfig[currentRole] || roleConfig.employee;
  const firstName = user.name.split(' ')[0];
  const headerCopy = useMemo(() => getHeaderCopy(currentPage, currentRole, firstName), [currentPage, currentRole, firstName]);

useEffect(() => {
  window.__PF_CURRENT_ROLE = currentRole;
  window.__PF_CURRENT_PAGE = currentPage;
  window.__PF_LOGGED_IN = loggedIn;
  return () => {
    try { delete window.__PF_CURRENT_ROLE; } catch (e) {}
    try { delete window.__PF_CURRENT_PAGE; } catch (e) {}
    try { delete window.__PF_LOGGED_IN; } catch (e) {}
  };
}, [currentRole, currentPage, loggedIn]);


  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hh}:${mm}:${ss}`);
      const todayKey = getTodayKey(now);
      setPunchModel((prev) => {
        if (prev.dayKey === todayKey) return prev;
        return getDefaultPunchModel();
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, darkMode ? 'dark' : 'light');
    } catch (e) {}
  }, [darkMode]);

  useEffect(() => {
    try {
      localStorage.setItem(PUNCH_STORAGE_KEY, JSON.stringify(punchModel));
    } catch (e) {}
  }, [punchModel]);

  const addToast = useCallback((message, type = 'info') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, message, type, icon: toastIcons[type] || 'ℹ️' }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const handleRoleChange = useCallback((role, cfg) => {
    setSelectedRole(role);
    setEmail(cfg.email);
    setPassword(cfg.password);
  }, []);

  const handleLogin = useCallback(() => {
    const normalizedEmail = email.trim().toLowerCase();
    const matched = Object.entries(roleConfig).find(([, cfg]) => cfg.password === password.trim() && (!normalizedEmail || cfg.email.toLowerCase() === normalizedEmail));
    if (!password.trim()) {
      window.alert('Please enter your password.');
      return;
    }
    if (!matched) {
      window.alert('Wrong password. Please try again.');
      return;
    }
    const [role] = matched;
    setCurrentRole(role);
    setSelectedRole(role);
    setLoggedIn(true);
    setCurrentPage('dashboard');
    setShowNotif(false);
    setShowProfile(false);
    addToast(`Welcome, ${roleConfig[role].name}!`, 'success');
  }, [email, password, addToast]);

  const handleLogout = useCallback(() => {
    setLoggedIn(false);
    setCurrentRole('employee');
    setSelectedRole('employee');
    setEmail(roleConfig.employee.email);
    setPassword(roleConfig.employee.password);
    setCurrentPage('dashboard');
    setShowNotif(false);
    setShowProfile(false);
    addToast('Signed out successfully', 'info');
  }, [addToast]);

  const handleNavigate = useCallback((pageId) => {
    if (pageId === 'reports' && !['hr', 'payroll', 'leadership'].includes(currentRole)) {
      addToast('Access denied — Reports are restricted to HR, Payroll & Leadership.', 'error');
      return;
    }
    if (pageId === 'onboarding' && currentRole !== 'hr') {
      addToast('Access denied — Onboarding is restricted to HR Administrators.', 'error');
      return;
    }
    setCurrentPage(pageId);
    setShowNotif(false);
    setShowProfile(false);
  }, [currentRole, addToast]);

  const handlePunch = useCallback(() => {
    const now = new Date();
    const todayKey = getTodayKey(now);

    setPunchModel((prev) => {
      const base = prev.dayKey === todayKey ? prev : getDefaultPunchModel();

      if (base.punchState === 'in') {
        if (base.punchDoneForToday) {
          addToast('You have already completed your attendance for today.', 'info');
          return base;
        }
        addToast(`Punched in at ${formatTime12(now)}`, 'success');
        return {
          punchState: 'out',
          punchDoneForToday: false,
          punchInTime: now.toISOString(),
          punchOutTime: null,
          dayKey: todayKey,
        };
      }

      const duration = calcDuration(base.punchInTime, now.toISOString());
      addToast(`Punched out at ${formatTime12(now)} — Total: ${duration}. Punch-in disabled for today.`, 'info');
      return {
        punchState: 'in',
        punchDoneForToday: true,
        punchInTime: base.punchInTime,
        punchOutTime: now.toISOString(),
        dayKey: todayKey,
      };
    });
  }, [addToast]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const noopNames = [
      '_applyApFilters','_applyRvFilters','_getApRows','_getDropdownValue','_getRvRows','addEmpHistRow','addFamilyChildRow','addMultiClaimRow','applyApprovalDRFromPopover','applyHDDateRange','applyHDDateRangeFromPopover','applyLeaveApprovalDR','applyLeaveApprovalDRFromPopover','applyMyLeaveDR','applyMyLeaveDRFromPopover','applyReqDateRange','applyReqDateRangeFromPopover','applyReviewDRFromPopover','applyTaskDateRange','applyTaskDateRangeFromPopover','applyTaskDropdownFilter','applyTaskPriorityFilter','applyTaskSort','applyTeamLeaveDR','applyTeamLeaveDRFromPopover','approvalTypeDropdownKeydown','attChangeTeamMonth','calcHrs','cancelEmpHistEdit','cancelITDeclaration','cancelPersonalEdit','changeCalMonth','checkLandlordPANRequired','checkSandwichLeave','clearApprovalDateRange','clearFieldError','clearHDDateRange','clearLeaveApprovalDR','clearMyLeaveDR','clearReqDateRange','clearReviewDateRange','clearTaskDateRange','clearTeamLeaveDR','clearTeamSelection','closeApprovalTypeDropdown','closeClaimTypePage','closeEditHdModal','closeEditReqModal','closeEditTaskModal','closeEmpHistAdminModal','closeFamilyModal','closeLeaveCalendar','closeReviewTypeDropdown','closeTaskDropdown','dismissRejectionBanner','downloadAllHistory','empCTCCellHtml','empCloneRecords','empFmtDate','empStatusBadge','enablePersonalEdit','enableRaiseClaimEdit','escHtml','filterApprovalTypeDropdownOptions','filterApprovalsByPriority','filterApprovalsByType','filterDirectory','filterHDByDate','filterHelpDeskTickets','filterLeaveApprovals','filterMyLeaves','filterMyRequests','filterMyTasks','filterMyTasksByDate','filterMyTasksBySearch','filterReqByDate','filterReviewTypeDropdownOptions','filterReviewsByPriority','filterReviewsByType','filterTaskDropdownOptions','filterTaxDocsByFY','filterTeamDropdown','filterTeamLeaves','formatTime12','generateClaimNumber','getCTCIcon','getTodayKey','getVal','handleCopyAddress','handleMaritalChange','handleReqAttach','hrApproveEmpHist','hrRejectEmpHist','initPersonalTab','lvAddCC','lvCCInput','lvCCKeydown','lvRemoveCC','lvRenderCCTags','lvcalChangeMonth','ntAddCC','ntCCInput','ntCCKeydown','ntCancel','ntClearFile','ntDescCount','ntDragLeave','ntDragOver','ntDrop','ntFileSelected','ntIsApprover','ntPrioChange','ntRemoveCC','ntRenderCCTags','ntReset','ntSave','ntShowFile','ntUpdateApprovalNotice','onMCSubChange','onSingleSubcategoryChange','openClaimTypePage','openEditHdModal','openEditReqModal','openEditTaskModal','openEmpHistAdminModal','openFamilyEditFromTab','openFamilyModal','openLeaveCalendar','openTeamDropdown','populateClaimSubCategory','populateTeamDropdowns','refreshAttendanceIfVisible','removeEmpHistRow','removeFamilyChildRow','removeMultiClaimRow','renderAttTeamData','renderDropdownList','renderEmpHistTable','renderHolidayCalendar','renderLeaveCalendar','renderLeaveTeamData','renderSalaryHistory','renderSalaryStructure','resetClaimTypeSelector','reviewTypeDropdownKeydown','saveDraftEditReq','saveEditHd','saveEditReq','saveEditTask','saveFamilyDetails','saveFamilyTabParents','savePersonalDetails','saveReqFormDraft','segFilterApprovals','segFilterHD','segFilterMyTasks','segFilterReviews','selectApprovalTypeDropdownOpt','selectClaimTypeCard','selectReviewTypeDropdownOpt','selectTaskDropdownOpt','selectTaxRegime','selectTeamPerson','setClaimMode','setVal','showFieldError','showHRAdminDemoNotice','sortApprovals','sortReviews','startEmpHistEdit','submitBankEdit','submitEmpHistForApproval','submitITDeclaration','submitLeaveWithSandwichCheck','submitMultiClaim','submitReqForm','submitSingleClaim','switchITDeclFY','switchITDeclHeaderFY','switchPOIHeaderFY','syncEmpHistField','taskDropdownKeydown','toggleApprovalDRPopover','toggleApprovalTypeDropdown','toggleBankEdit','toggleHDDRPopover','toggleLeaveApprovalDRPopover','toggleMyLeaveDRPopover','togglePermFields','toggleRejectReasonBox','toggleReqDRPopover','toggleReviewDRPopover','toggleReviewTypeDropdown','toggleRowCTC','toggleTaskDRPopover','toggleTaskDropdown','toggleTeamLeaveDRPopover','updateMultiClaimTotal','updateTeamLeaveFilterCounts','validateEmpHistRecords','validatePersonalDetails'
    ];
    noopNames.forEach((name) => { if (!(name in window)) window[name] = () => {}; });

    window.navigate = (pageId) => handleNavigate(pageId);
    window.showToast = (msg, type = 'info') => addToast(msg, type);
    window.doLogout = () => handleLogout();
    window.toggleNotif = () => setShowNotif((prev) => !prev);
    window.toggleProfileDropdown = (forceClose) => setShowProfile((prev) => (forceClose ? false : !prev));
    window.toggleDarkMode = () => toggleDarkMode();
    window.handlePunch = () => handlePunch();
    window.navigateToHolidays = () => handleNavigate('leave');
    window.navigateToSalaryBankDetails = () => {
      window.__PF_PAYROLL_TARGET_TAB = 'bank-details-tab';
      handleNavigate('payroll');
    };
    window.getFormattedDate = getFormattedDate;
    window.getGreeting = getGreeting;
    window.switchTab = (tabEl, contentId) => {
      if (tabEl && tabEl.closest('.tabs')) {
        tabEl.closest('.tabs').querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
        tabEl.classList.add('active');
      }
      const content = document.getElementById(contentId);
      if (content && content.parentElement) {
        Array.from(content.parentElement.children).forEach((child) => {
          if (child !== content && child.classList && !child.classList.contains('tabs') && child.id) child.style.display = 'none';
        });
        content.style.display = 'block';
      }
    };

    return () => {
      ['navigate','showToast','doLogout','toggleNotif','toggleProfileDropdown','toggleDarkMode','handlePunch','navigateToHolidays','navigateToSalaryBankDetails','getFormattedDate','getGreeting','switchTab'].forEach((name) => { try { delete window[name]; } catch (e) {} });
    };
  }, [addToast, handleLogout, handleNavigate, handlePunch, toggleDarkMode]);

  if (!loggedIn) {
    return (
      <>
        <ExactScriptsBridge />
        <LoginScreen
          selectedRole={selectedRole}
          email={email}
          password={password}
          onRoleChange={handleRoleChange}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onLogin={handleLogin}
          darkMode={darkMode}
        />
        <ToastContainer toasts={toasts} />
      </>
    );
  }

  return (
    <>
      <ExactScriptsBridge />
      <div className="app" id="mainApp">
        <Sidebar currentPage={currentPage} currentRole={currentRole} onNavigate={handleNavigate} />
        <div className="main">
          <Header
            headerCopy={headerCopy}
            user={user}
            showNotif={showNotif}
            onToggleNotif={() => setShowNotif((prev) => !prev)}
            showProfile={showProfile}
            onToggleProfile={() => setShowProfile((prev) => !prev)}
            onLogout={handleLogout}
            onToggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            onNavigate={handleNavigate}
            onShowToast={addToast}
            onCloseProfile={() => setShowProfile(false)}
          />
          {currentPage === 'dashboard' ? (
            <div className="page active" id="page-dashboard">
              <RoleDashboardExact role={currentRole} currentTime={currentTime} punchModel={punchModel} />
            </div>
          ) : currentPage === 'profile' ? (
            <ProfilePage user={user} />
          ) : currentPage === 'attendance' ? (
            <AttendancePage currentRole={currentRole} />
          ) : currentPage === 'leave' ? (
            <LeavePage currentRole={currentRole} />
          ) : currentPage === 'tasks' ? (
            <TasksPage currentRole={currentRole} />
          ) : currentPage === 'payroll' ? (
            <PayrollPage user={user} />
          ) : currentPage === 'documents' ? (
            <DocumentsPage />
          ) : currentPage === 'taxdocs' ? (
            <TaxDocumentsPage />
          ) : currentPage === 'people' ? (
            <PeoplePage currentRole={currentRole} onShowToast={addToast} />
          ) : currentPage === 'onboarding' ? (
            <OnboardingPage currentRole={currentRole} onShowToast={addToast} />
          ) : currentPage === 'requests' ? (
            <ExpenseClaimsPage currentRole={currentRole} />
          ) : currentPage === 'helpdesk' ? (
            <HelpDeskPage currentRole={currentRole} />
          ) : currentPage === 'reports' ? (
            <ReportsPage />
          ) : (
            <ExactPage pageId={currentPage} currentRole={currentRole} />
          )}
        </div>
      </div>
      <NotificationsPanel open={showNotif} />
      <ToastContainer toasts={toasts} />
    </>
  );
}

export function App() {
  return (
    <RuntimeFallbackBoundary>
      <SafeDecomposedApp />
    </RuntimeFallbackBoundary>
  );
}
