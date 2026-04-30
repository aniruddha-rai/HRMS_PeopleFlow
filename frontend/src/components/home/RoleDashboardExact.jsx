import React, { useEffect, useRef } from 'react';
import { getRoleDashboardHtml } from '../../utils/exactFragments';

function formatTime12(dateOrIso) {
  if (!dateOrIso) return '';
  const d = dateOrIso instanceof Date ? dateOrIso : new Date(dateOrIso);
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

export function RoleDashboardExact({ role, currentTime, punchModel }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.innerHTML = getRoleDashboardHtml(role);
    const dashboardRoot = host.firstElementChild;
    if (dashboardRoot) dashboardRoot.style.display = 'block';
  }, [role]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const dashboardRoot = host.firstElementChild;
    if (dashboardRoot) dashboardRoot.style.display = 'block';

    const clockEl = host.querySelector('#liveClock');
    if (clockEl) clockEl.textContent = currentTime;

    if (role !== 'employee') return;

    const punchBtn = host.querySelector('#punchBtn');
    const statusEl = host.querySelector('#punchStatus');
    if (!punchBtn) return;

    const { punchState, punchDoneForToday, punchInTime, punchOutTime } = punchModel || {};

    if (punchState === 'in') {
      punchBtn.textContent = 'Punch In';
      if (punchDoneForToday) {
        punchBtn.style.background = '#94A3B8';
        punchBtn.style.cursor = 'not-allowed';
        punchBtn.style.opacity = '0.65';
        punchBtn.onmouseover = null;
        punchBtn.onmouseout = null;
      } else {
        punchBtn.style.background = '#3B5BDB';
        punchBtn.style.cursor = 'pointer';
        punchBtn.style.opacity = '1';
        punchBtn.onmouseover = function () { this.style.background = '#0F766E'; };
        punchBtn.onmouseout = function () { this.style.background = '#3B5BDB'; };
      }

      if (statusEl) {
        if (punchOutTime) {
          statusEl.textContent = `Punched out at ${formatTime12(punchOutTime)}`;
          statusEl.style.color = '#C92A2A';
        } else {
          statusEl.textContent = '';
          statusEl.style.color = '';
        }
      }
    } else {
      punchBtn.textContent = 'Punch Out';
      punchBtn.style.background = '#2F9E44';
      punchBtn.style.cursor = 'pointer';
      punchBtn.style.opacity = '1';
      punchBtn.onmouseover = function () { this.style.background = '#1A6E34'; };
      punchBtn.onmouseout = function () { this.style.background = '#2F9E44'; };
      if (statusEl && punchInTime) {
        statusEl.textContent = `Punched in at ${formatTime12(punchInTime)}`;
        statusEl.style.color = '#2F9E44';
      }
    }
  }, [punchModel, currentTime, role]);

  return <div ref={hostRef} />;
}
