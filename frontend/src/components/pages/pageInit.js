function ensureRoleAwareTeamOverrides() {
  if (window.__pfRoleAwareTeamOverridesApplied) return;
  if (!window.teamData || !window.panelCfg) return;

  window.__pfRoleAwareTeamOverridesApplied = true;

  window.renderDropdownList = function renderDropdownList(panelKey, query) {
    var cfg = window.panelCfg[panelKey];
    var dd = document.getElementById(cfg.dropdown);
    if (!dd) return;

    var role = window.__PF_CURRENT_ROLE || 'employee';
    var people = (window.teamData && window.teamData[role]) || [];
    var q = (query || '').toLowerCase();

    var filtered = people.filter(function (p) {
      return !q || p.name.toLowerCase().indexOf(q) !== -1;
    });

    if (filtered.length === 0) {
      dd.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-tertiary);">No results</div>';
      return;
    }

    dd.innerHTML = filtered.map(function (p) {
      return '<div onclick="selectTeamPerson(\'' + panelKey + '\',\'' + p.id + '\',\'' + p.name + '\')" '
        + 'style="padding:8px 12px;font-size:12.5px;cursor:pointer;transition:background 0.1s;" '
        + 'onmouseover="this.style.background=\'var(--primary-muted)\'" '
        + 'onmouseout="this.style.background=\'\'">'
        + '<div style="font-weight:500;color:var(--text-primary);">' + p.name + '</div>'
        + '<div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">' + p.title + ' · ' + p.dept + '</div>'
        + '</div>';
    }).join('');
  };

  window.renderAttTeamData = function renderAttTeamData() {
    var pid = window.selectedPerson && window.selectedPerson.att;
    var data = pid && window.attPersonData ? window.attPersonData[pid] : null;

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

    var role = window.__PF_CURRENT_ROLE || 'employee';
    var people = (window.teamData && window.teamData[role]) || [];
    var person = people.find(function (p) { return p.id === pid; }) || { name: pid };

    var todayRow = document.getElementById('attTodayRow');
    if (todayRow) {
      todayRow.innerHTML = '<tr><td><b>' + person.name + '</b></td>'
        + '<td><span class="badge ' + statusBadge + '">' + td.status + '</span></td>'
        + '<td>' + td.in + '</td><td>' + td.out + '</td><td>' + td.hrs + '</td></tr>';
    }

    var monthlyRow = document.getElementById('attMonthlyRow');
    if (monthlyRow) {
      var md = data.monthly || {};
      if (Array.isArray(md)) {
        monthlyRow.innerHTML = md.map(function (r) {
          var b = r.status === 'Present' ? 'green' : (r.status === 'On Leave' ? 'amber' : 'red');
          return '<tr><td>' + (r.date || '—') + '</td><td><span class="badge ' + b + '">' + (r.status || '—') + '</span></td><td>' + (r.in || '—') + '</td><td>' + (r.out || '—') + '</td><td>' + (r.hrs || '—') + '</td></tr>';
        }).join('');
      } else {
        monthlyRow.innerHTML = '<tr>'
          + '<td>' + (md.wd || '—') + '</td><td>' + (md.present || '—') + '</td><td>' + (md.absent || '—') + '</td>'
          + '<td>' + (md.late || '—') + '</td><td>' + (md.avg || '—') + '</td>'
          + '<td><span class="badge ' + (md.pctBadge || 'gray') + '">' + (md.pct || '—') + '</span></td></tr>';
      }
    }
  };
}


export function initTasksPage(currentRole) {
  const isHR = currentRole === 'hr';
  const canApprove = currentRole === 'manager' || currentRole === 'hr';

  const approvalTasksTab = document.getElementById('approvalTasksTab');
  if (approvalTasksTab) approvalTasksTab.style.display = canApprove ? 'block' : 'none';

  const hrChecklistTab = document.getElementById('hrChecklistTab');
  if (hrChecklistTab) hrChecklistTab.style.display = isHR ? 'block' : 'none';

  const approvalAccessDenied = document.getElementById('approvalAccessDenied');
  const approvalTasksTable = document.getElementById('approvalTasksTable');
  if (approvalAccessDenied) approvalAccessDenied.style.display = canApprove ? 'none' : 'block';
  if (approvalTasksTable) approvalTasksTable.style.display = canApprove ? 'block' : 'none';

  if (!canApprove) {
    const approvalContent = document.getElementById('approval-tasks-content');
    const myTasksContent = document.getElementById('my-tasks-content');
    if (approvalContent && approvalContent.style.display !== 'none') {
      approvalContent.style.display = 'none';
      if (myTasksContent) myTasksContent.style.display = 'block';
      var myTabBtn = document.querySelector('#page-tasks .tabs .tab[onclick*="my-tasks-content"]');
      if (myTabBtn) {
        document.querySelectorAll('#page-tasks .tabs .tab').forEach(function (t) { t.classList.remove('active'); });
        myTabBtn.classList.add('active');
      }
    }
  }
}

export function initAttendancePage(currentRole) {
  ensureRoleAwareTeamOverrides();
  const canUseTeam = currentRole === 'manager' || currentRole === 'hr';
  const scopeTabs = document.getElementById('attendanceScopeTabs');
  if (scopeTabs) scopeTabs.style.display = canUseTeam ? 'block' : 'none';

  const monthSel = document.getElementById('attMonthFilter');
  const yearSel = document.getElementById('attYearFilter');

  if (typeof window.attCalMonth !== 'undefined' && monthSel) {
    monthSel.value = String(window.attCalMonth);
  } else if (monthSel) {
    window.attCalMonth = parseInt(monthSel.value || '0', 10);
  }
  if (typeof window.attCalYear !== 'undefined' && yearSel) {
    yearSel.value = String(window.attCalYear);
  } else if (yearSel) {
    window.attCalYear = parseInt(yearSel.value || new Date().getFullYear(), 10);
  }

  if (typeof window.populateTeamDropdowns === 'function') {
    window.populateTeamDropdowns(currentRole);
  }

  if (typeof window.renderAttCalendar === 'function') window.renderAttCalendar();
  if (typeof window.updatePenaltyDaysCount === 'function') window.updatePenaltyDaysCount();
  if (typeof window.updateAvgWorkHours === 'function') window.updateAvgWorkHours();

  const detailPanel = document.getElementById('attDayDetailContent');
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  if (
    typeof window.showAttDayDetail === 'function' &&
    typeof window.attCalMonth !== 'undefined' &&
    typeof window.attCalYear !== 'undefined' &&
    window.attCalMonth === today.getMonth() &&
    window.attCalYear === today.getFullYear() &&
    window.attData &&
    window.statusStyles &&
    Object.prototype.hasOwnProperty.call(window.attData, todayKey)
  ) {
    const rec = window.attData[todayKey];
    const st = window.statusStyles[rec.status] || window.statusStyles.present;
    window.showAttDayDetail(todayKey, rec, st);
  } else if (detailPanel) {
    detailPanel.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--text-tertiary);"><div style="font-size:13px;">Click a date to view details</div></div>';
  }
}

export function initLeavePage(currentRole) {
  ensureRoleAwareTeamOverrides();
  const canUseTeam = currentRole === 'manager' || currentRole === 'hr';
  const scopeTabs = document.getElementById('leaveScopeTabs');
  if (scopeTabs) scopeTabs.style.display = canUseTeam ? 'block' : 'none';

  if (typeof window.populateTeamDropdowns === 'function') {
    window.populateTeamDropdowns(currentRole);
  }
}
