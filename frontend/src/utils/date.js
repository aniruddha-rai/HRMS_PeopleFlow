export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export function getFormattedDate() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

export function getHeaderCopy(pageId, currentRole, firstName) {
  if (pageId === 'dashboard') {
    const dashSubs = {
      employee: `Here's what's happening at work today — ${getFormattedDate()}`,
      manager: `Team overview and pending approvals — ${getFormattedDate()}`,
      hr: `Workforce management and HR operations — ${getFormattedDate()}`,
      payroll: 'Manage salary, payroll runs, and compliance',
      leadership: 'Organization-wide metrics and strategic insights',
      itadmin: `System management, ticket approvals, and user access — ${getFormattedDate()}`,
    };
    return {
      main: `${getGreeting()}, ${firstName}! 👋`,
      sub: dashSubs[currentRole] || dashSubs.employee,
    };
  }

  const pageHeaders = {
    profile: { main: 'Employee Information', sub: 'View and manage your personal, address, bank and passport details' },
    tasks: { main: 'Task Center', sub: 'All your pending actions, approvals, and reminders' },
    leave: { main: 'Leave Management', sub: 'Apply, track, and manage your leaves' },
    attendance: { main: 'Attendance Info', sub: '' },
    payroll: { main: 'Salary & Payslips', sub: 'View payslips, salary structure, CTC breakdown and bank details' },
    documents: { main: 'Document Center', sub: '' },
    people: { main: 'People', sub: 'Organisation chart and employee directory' },
    onboarding: { main: 'Onboarding', sub: 'Track and manage employee onboarding progress' },
    taxdocs: { main: 'Tax Documents', sub: 'View and manage your tax certificates and declarations' },
    helpdesk: { main: 'Help Desk', sub: 'Create and track support tickets. IT Admin approves all tickets.' },
    requests: { main: 'Expense Claim', sub: '' },
    reports: { main: 'Reports & Analytics', sub: '' },
  };
  return pageHeaders[pageId] || { main: 'PeopleFlow HRMS', sub: '' };
}
