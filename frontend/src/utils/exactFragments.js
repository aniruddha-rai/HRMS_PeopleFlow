import bodyHtml from '../exact/wireframe-body.html?raw';

let cachedDoc = null;

function getDoc() {
  if (cachedDoc) return cachedDoc;
  const parser = new DOMParser();
  cachedDoc = parser.parseFromString(bodyHtml, 'text/html');
  return cachedDoc;
}

export function getOuterHtml(selector) {
  const el = getDoc().querySelector(selector);
  return el ? el.outerHTML : '';
}

export function getInnerHtml(selector) {
  const el = getDoc().querySelector(selector);
  return el ? el.innerHTML : '';
}

export function getRoleDashboardHtml(role) {
  const map = {
    employee: '#dash-employee',
    manager: '#dash-manager',
    hr: '#dash-hr',
    payroll: '#dash-payroll',
    leadership: '#dash-leadership',
    itadmin: '#dash-itadmin',
  };
  return getOuterHtml(map[role] || map.employee);
}

export function getPageHtml(pageId) {
  return getInnerHtml(`#page-${pageId}`);
}
