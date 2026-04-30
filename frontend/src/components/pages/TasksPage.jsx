import React, { useEffect, useMemo, useState } from 'react';
import { getOuterHtml } from '../../utils/exactFragments';
import { HtmlFragment } from '../common/HtmlFragment';
import { initTasksPage } from './pageInit';

function makeRootsVisible(html) {
  if (!html) return '';
  return html.replace(
    /(<[^>]+\sid=["'](?:approval-tasks-content|hr-tasks-content|review-section-content|new-task-content)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,
    function (_, start, styleValue) {
      const cleaned = styleValue.replace(/display\s*:\s*none\s*;?/gi, '').replace(/\s{2,}/g, ' ').trim();
      return cleaned ? `${start} style="${cleaned}"` : start;
    }
  );
}

const REVIEW_AVATAR_COLORS = {
  AS: { bg: '#CCFBF1', color: '#0D9488' },
  PN: { bg: '#EDE9FE', color: '#7C3AED' },
  RS: { bg: '#DCFCE7', color: '#059669' },
  MP: { bg: '#E0F2FE', color: '#0EA5E9' },
  DV: { bg: '#FEF3C7', color: '#D97706' },
};

function getQuotedArgsFromOnClick(button) {
  const onclick = button?.getAttribute('onclick') || '';
  return Array.from(onclick.matchAll(/'([^']*)'/g)).map((match) => match[1]);
}

function formatReviewType(type) {
  const labels = {
    performance: 'performance',
    probation: 'probation',
    checkin: 'checkin',
  };
  return labels[type] || type || 'performance';
}

function splitReviewTitle(rawTitle) {
  const title = (rawTitle || '').replace(/\s+/g, ' ').trim();
  const parts = title.split(' — ');
  if (parts.length >= 2) {
    return { name: parts[0].trim(), reviewTitle: parts.slice(1).join(' — ').trim() };
  }
  return { name: '', reviewTitle: title };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatTaskDate(value) {
  if (!value) return 'No due date';
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return value;
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function makeTaskCardHtml(task) {
  const priority = task.priority || 'low';
  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);
  const dueText = task.dueDate ? `Due: ${formatTaskDate(task.dueDate)}` : 'No due date';
  return `
      <div class="task-card" data-status="open" data-due="${escapeHtml(task.dueDate)}" data-task-id="${escapeHtml(task.id)}" data-task-priority="${escapeHtml(priority)}" data-task-assignee="${escapeHtml(task.assignee)}" data-task-desc="${escapeHtml(task.description)}" data-created-order="${escapeHtml(task.createdOrder)}">
        <div class="task-id-row">
          <span class="task-id-chip">${escapeHtml(task.id)}</span>
          <div class="task-row-actions">
            <button class="task-edit-btn" onclick="openEditTaskModal(this.closest('.task-card'))">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Edit
            </button>
            <button class="task-edit-btn task-complete-btn" type="button" title="Mark task as completed">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Complete
            </button>
            <button class="task-edit-btn task-delete-btn" type="button" title="Delete task">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
              Delete
            </button>
          </div>
        </div>
        <div class="task-title">${escapeHtml(task.name)}</div>
        <div class="task-meta"><div class="task-due">${escapeHtml(dueText)}</div><div class="priority-badge ${escapeHtml(priority)}">${escapeHtml(priorityLabel)}</div><span class="badge amber">Pending</span></div>
      </div>`;
}

function injectCreatedTasks(baseHtml, createdTasks) {
  if (!baseHtml || createdTasks.length === 0) return baseHtml;
  const allCount = 5 + createdTasks.length;
  const openCount = 3 + createdTasks.length;
  const inserted = createdTasks.map(makeTaskCardHtml).join('');
  return baseHtml
    .replace(/id="segCount_all">\d+/, `id="segCount_all">${allCount}`)
    .replace(/id="segCount_open">\d+/, `id="segCount_open">${openCount}`)
    .replace(/<option value="all">All \(\d+\)<\/option>/, `<option value="all">All (${allCount})</option>`)
    .replace(/<option value="open" selected>Open \(\d+\)<\/option>/, `<option value="open" selected>Open (${openCount})</option>`)
    .replace(/(\n\s*<div class="task-card" data-status="open")/, `${inserted}$1`);
}

function ensureTaskActionButtons(doc, card) {
  const row = card.querySelector('.task-id-row');
  if (!row || row.querySelector('.task-row-actions')) return;

  const editButton = row.querySelector('.task-edit-btn');
  if (!editButton) return;

  const actions = doc.createElement('div');
  actions.className = 'task-row-actions';
  row.replaceChild(actions, editButton);
  actions.appendChild(editButton);

  const completeButton = doc.createElement('button');
  completeButton.type = 'button';
  completeButton.className = 'task-edit-btn task-complete-btn';
  completeButton.title = 'Mark task as completed';
  completeButton.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Complete';
  actions.appendChild(completeButton);

  const deleteButton = doc.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'task-edit-btn task-delete-btn';
  deleteButton.title = 'Delete task';
  deleteButton.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg> Delete';
  actions.appendChild(deleteButton);
}

function markTaskCardCompleted(card) {
  card.setAttribute('data-status', 'closed');
  card.style.opacity = '0.7';

  const badge = Array.from(card.querySelectorAll('.badge')).find((el) => /pending|open|closed|completed/i.test(el.textContent || ''));
  if (badge) {
    badge.className = 'badge green';
    badge.textContent = 'Completed';
  }

  const completeButton = card.querySelector('.task-complete-btn');
  if (completeButton) completeButton.style.display = 'none';
}

function updateTaskFilterCounts(root) {
  const cards = Array.from(root.querySelectorAll('.task-card[data-task-id]'));
  const total = cards.length;
  const open = cards.filter((card) => card.getAttribute('data-status') === 'open').length;
  const closed = cards.filter((card) => card.getAttribute('data-status') === 'closed').length;

  const setText = (selector, value) => {
    const el = root.querySelector(selector);
    if (el) el.textContent = String(value);
  };

  setText('#segCount_all', total);
  setText('#segCount_open', open);
  setText('#segCount_closed', closed);

  const taskFilter = root.querySelector('#taskFilterSelect');
  if (taskFilter) {
    const allOpt = taskFilter.querySelector('option[value="all"]');
    const openOpt = taskFilter.querySelector('option[value="open"]');
    const closedOpt = taskFilter.querySelector('option[value="closed"]');
    if (allOpt) allOpt.textContent = `All (${total})`;
    if (openOpt) openOpt.textContent = `Open (${open})`;
    if (closedOpt) closedOpt.textContent = `Closed (${closed})`;
  }
}

function syncTaskDropdown(root, createdTasks, deletedTaskIds) {
  const list = root.querySelector('#taskDropdownList');
  const empty = root.querySelector('#taskDropdownEmpty');
  if (!list) return;

  deletedTaskIds.forEach((taskId) => {
    const opt = list.querySelector(`.tf-search-opt[data-value="${taskId}"]`);
    if (opt) opt.remove();
  });

  createdTasks.forEach((task) => {
    if (deletedTaskIds.has(task.id) || list.querySelector(`.tf-search-opt[data-value="${task.id}"]`)) return;
    const opt = root.ownerDocument.createElement('div');
    opt.className = 'tf-search-opt';
    opt.setAttribute('data-value', task.id);
    opt.setAttribute('role', 'option');
    opt.setAttribute('onclick', 'selectTaskDropdownOpt(this)');
    opt.textContent = `${task.id} · ${task.name}`;
    list.insertBefore(opt, empty || null);
  });
}

function prepareMyTasksHtml(baseHtml, createdTasks, taskMutations) {
  const withCreatedTasks = injectCreatedTasks(baseHtml, createdTasks);
  if (!withCreatedTasks || typeof window === 'undefined' || !window.DOMParser) return withCreatedTasks;

  const doc = new window.DOMParser().parseFromString(withCreatedTasks, 'text/html');
  const root = doc.body.firstElementChild;
  if (!root) return withCreatedTasks;

  const deletedTaskIds = new Set(Object.keys(taskMutations.deleted || {}));
  const completedTaskIds = new Set(Object.keys(taskMutations.completed || {}));

  Array.from(root.querySelectorAll('.task-card[data-task-id]')).forEach((card) => {
    const taskId = card.getAttribute('data-task-id');
    if (deletedTaskIds.has(taskId)) {
      card.remove();
      return;
    }

    ensureTaskActionButtons(doc, card);

    if (card.getAttribute('data-status') === 'closed' || completedTaskIds.has(taskId)) {
      markTaskCardCompleted(card);
    }
  });

  syncTaskDropdown(root, createdTasks, deletedTaskIds);
  updateTaskFilterCounts(root);
  return root.outerHTML;
}

function updateApprovalCounts(root) {
  const rows = Array.from(root.querySelectorAll('#approvalTableBody tr[data-ap-status]'));
  const counts = rows.reduce((acc, row) => {
    const status = row.getAttribute('data-ap-status') || 'pending';
    acc.all += 1;
    if (status === 'pending') acc.pending += 1;
    if (status === 'approved') acc.approved += 1;
    return acc;
  }, { all: 0, pending: 0, approved: 0 });

  const setText = (selector, value) => {
    const el = root.querySelector(selector);
    if (el) el.textContent = String(value);
  };

  setText('#apCount_all', counts.all);
  setText('#apCount_pending', counts.pending);
  setText('#apCount_approved', counts.approved);
}

function prepareApprovalsHtml(baseHtml, approvalMutations) {
  if (!baseHtml || typeof window === 'undefined' || !window.DOMParser) return baseHtml;

  const doc = new window.DOMParser().parseFromString(baseHtml, 'text/html');
  const root = doc.body.firstElementChild;
  if (!root) return baseHtml;

  Array.from(root.querySelectorAll('#approvalTableBody tr[data-ap-status]')).forEach((row, index) => {
    const id = row.getAttribute('data-ap-id') || 'AP-' + String(index + 1).padStart(3, '0');
    row.setAttribute('data-ap-id', id);

    row.querySelectorAll('.approve-btn').forEach((button) => {
      button.removeAttribute('onclick');
      button.setAttribute('type', 'button');
    });

    const nextStatus = approvalMutations[id];
    if (nextStatus === 'approved' || nextStatus === 'rejected') {
      row.setAttribute('data-ap-status', nextStatus);
      row.style.opacity = '0.75';
      const actionCell = row.cells[row.cells.length - 1];
      if (actionCell) {
        const badgeClass = nextStatus === 'approved' ? 'green' : 'red';
        const label = nextStatus === 'approved' ? 'Approved' : 'Rejected';
        actionCell.innerHTML = '<span class="badge ' + badgeClass + '">' + label + '</span>';
      }
    }
  });

  updateApprovalCounts(root);
  return root.outerHTML;
}

function getCheckedPriority() {
  return document.querySelector('input[name="nt_priority"]:checked')?.value || 'low';
}

function showFieldState(el, errEl, isError) {
  if (errEl) errEl.style.display = isError ? '' : 'none';
  if (el) el.classList.toggle('input-error', Boolean(isError));
}

function getReviewDataFromCard(card, button) {
  const args = getQuotedArgsFromOnClick(button);
  const rawTitle = card?.querySelector('.task-title')?.textContent?.trim() || '';
  const parsedTitle = splitReviewTitle(rawTitle);

  if (args.length >= 7) {
    return {
      id: args[0],
      initials: args[1],
      name: args[2],
      reviewTitle: args[3],
      type: formatReviewType(args[4]),
      dueDate: args[5],
      status: args[6],
      notes: args[7] || '',
    };
  }

  const id = card?.querySelector('.task-id-chip')?.textContent?.trim() || 'RV-000';
  const initials = card?.querySelector('.task-title div')?.textContent?.trim() || '';
  const due = card?.querySelector('.task-due')?.textContent?.replace(/^Due:\s*/i, '').replace(/^✓\s*Submitted:\s*/i, '').trim() || '';
  const status = card?.querySelector('.badge')?.textContent?.trim() || '';
  const type = card?.getAttribute('data-rv-type') || 'performance';

  return {
    id,
    initials,
    name: parsedTitle.name,
    reviewTitle: parsedTitle.reviewTitle,
    type: formatReviewType(type),
    dueDate: due,
    status,
    notes: status.toLowerCase().includes('completed') ? 'Review submitted successfully.' : '',
  };
}

function getReviewCardName(card) {
  const title = card?.querySelector('.task-title')?.textContent || '';
  return title.replace(/^[A-Z]{2}\b/, '').replace(/\s+/g, ' ').trim();
}

function sortReviewCards(sortValue = 'recent') {
  const list = document.getElementById('reviewUnifiedList');
  if (!list) return;

  const rows = Array.from(list.querySelectorAll('.task-card[data-rv-status]'));
  const priorityRank = { high: 0, medium: 1, low: 2 };

  rows.forEach((row, index) => {
    if (!row.hasAttribute('data-rv-original-order')) row.setAttribute('data-rv-original-order', String(index));
  });

  rows.sort((a, b) => {
    if (sortValue === 'due_asc') {
      return String(a.getAttribute('data-rv-due') || '').localeCompare(String(b.getAttribute('data-rv-due') || ''));
    }
    if (sortValue === 'due_desc') {
      return String(b.getAttribute('data-rv-due') || '').localeCompare(String(a.getAttribute('data-rv-due') || ''));
    }
    if (sortValue === 'name_asc') {
      return getReviewCardName(a).localeCompare(getReviewCardName(b));
    }
    if (sortValue === 'priority_high') {
      const ap = priorityRank[a.getAttribute('data-rv-priority')] ?? 99;
      const bp = priorityRank[b.getAttribute('data-rv-priority')] ?? 99;
      if (ap !== bp) return ap - bp;
      return Number(a.getAttribute('data-rv-original-order') || 0) - Number(b.getAttribute('data-rv-original-order') || 0);
    }
    return Number(a.getAttribute('data-rv-original-order') || 0) - Number(b.getAttribute('data-rv-original-order') || 0);
  });

  rows.forEach((row) => list.appendChild(row));
  if (typeof window._applyRvFilters === 'function') window._applyRvFilters();
}

function ReviewAvatar({ initials }) {
  const palette = REVIEW_AVATAR_COLORS[initials] || { bg: 'var(--primary-muted)', color: 'var(--primary)' };
  return (
    <div style={{ width: 28, height: 28, borderRadius: '50%', background: palette.bg, color: palette.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 700, flexShrink: 0 }}>
      {initials || '—'}
    </div>
  );
}

function ReadonlyReviewField({ label, children, wide = false }) {
  return (
    <div style={{ marginBottom: 16, ...(wide ? { gridColumn: '1 / -1' } : {}) }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>{label}</div>
      <div style={{ padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg)', fontSize: 13, color: 'var(--text-primary)' }}>
        {children || '—'}
      </div>
    </div>
  );
}

function ReviewModal({ modal, onClose }) {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setNotes(modal?.notes || '');
  }, [modal]);

  useEffect(() => {
    if (!modal) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modal]);

  if (!modal) return null;

  const isView = modal.mode === 'view';
  const title = isView ? 'View Review' : 'Start Review';
  const submittedOrDue = isView ? `✓ Submitted: ${modal.dueDate || '—'}` : (modal.dueDate || '—');
  const titleText = [modal.name, modal.reviewTitle].filter(Boolean).join(' — ');

  const handleSubmit = () => {
    window.showToast?.(`Review ${modal.id} submitted successfully.`, 'success');
    onClose();
  };

  return (
    <div
      style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9999, alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(3px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px 28px 24px', width: '100%', maxWidth: 560, maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <span style={{ fontSize: 20 }}>📋</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{title}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-tertiary)', background: 'var(--border-subtle)', border: '1px solid var(--border)', borderRadius: 5, padding: '2px 8px', marginLeft: 2 }}>{modal.id}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{ marginLeft: 'auto', width: 30, height: 30, borderRadius: 7, border: '1px solid var(--border)', background: 'var(--surface)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: 'var(--text-tertiary)', transition: 'var(--ease)' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--border-subtle)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'var(--surface)'; }}
          >
            ✕
          </button>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>Review Title</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg)' }}>
            <ReviewAvatar initials={modal.initials} />
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>{titleText || '—'}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 0 }}>
          <ReadonlyReviewField label="Review Type">{modal.type}</ReadonlyReviewField>
          <ReadonlyReviewField label="Submitted / Due Date">{submittedOrDue}</ReadonlyReviewField>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>Status</div>
          <div style={{ padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg)', fontSize: 13, color: 'var(--text-primary)', maxWidth: '50%' }}>
            {modal.status || (isView ? 'Completed' : 'Pending')}
          </div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>Reviewer Notes</div>
          <textarea
            rows="5"
            placeholder={isView ? '' : 'Add reviewer notes here...'}
            readOnly={isView}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg)', fontSize: 13, fontFamily: 'var(--font)', color: 'var(--text-primary)', resize: 'vertical', outline: 'none', transition: 'var(--ease)', boxSizing: 'border-box', cursor: isView ? 'default' : 'text' }}
            onFocus={(e) => { if (!isView) e.currentTarget.style.borderColor = 'var(--primary)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
          />
        </div>

        {isView ? (
          <div>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: '9px 22px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer', transition: 'var(--ease)' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--primary)'; }}
            >
              Close
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              type="button"
              onClick={handleSubmit}
              style={{ padding: '9px 22px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer', transition: 'var(--ease)' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--primary)'; }}
            >
              Submit Review
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: '9px 18px', background: 'var(--surface)', color: 'var(--text-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 500, fontFamily: 'var(--font)', cursor: 'pointer', transition: 'var(--ease)' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function TasksPage({ currentRole }) {
  const canApprove = currentRole === 'manager' || currentRole === 'hr';
  const isHR = currentRole === 'hr';
  const [activeTab, setActiveTab] = useState('my-tasks-content');
  const [reviewModal, setReviewModal] = useState(null);
  const [createdTasks, setCreatedTasks] = useState([]);
  const [taskMutations, setTaskMutations] = useState({ completed: {}, deleted: {} });
  const [approvalMutations, setApprovalMutations] = useState({});

  const sections = useMemo(() => ({
    'my-tasks-content': getOuterHtml('#page-tasks #my-tasks-content'),
    'approval-tasks-content': makeRootsVisible(getOuterHtml('#page-tasks #approval-tasks-content')),
    'hr-tasks-content': makeRootsVisible(getOuterHtml('#page-tasks #hr-tasks-content')),
    'review-section-content': makeRootsVisible(getOuterHtml('#page-tasks #review-section-content')),
    'new-task-content': makeRootsVisible(getOuterHtml('#page-tasks #new-task-content')),
  }), []);
  const editTaskModalHtml = useMemo(() => getOuterHtml('#editTaskModal'), []);
  const renderedSections = useMemo(() => ({
    ...sections,
    'my-tasks-content': prepareMyTasksHtml(sections['my-tasks-content'], createdTasks, taskMutations),
    'approval-tasks-content': prepareApprovalsHtml(sections['approval-tasks-content'], approvalMutations),
  }), [sections, createdTasks, taskMutations, approvalMutations]);

  const myTaskTotal = useMemo(
    () => Math.max(0, 5 + createdTasks.length - Object.keys(taskMutations.deleted || {}).length),
    [createdTasks.length, taskMutations]
  );

  const tabs = useMemo(() => {
    const items = [{ id: 'my-tasks-content', label: `My Tasks (${myTaskTotal})` }];
    if (canApprove) items.push({ id: 'approval-tasks-content', label: 'Approval Tasks (3)' });
    if (isHR) items.push({ id: 'hr-tasks-content', label: 'HR Checklist' });
    items.push({ id: 'review-section-content', label: 'Review Section' });
    return items;
  }, [canApprove, isHR, myTaskTotal]);

  const switchToMyTasks = React.useCallback(() => {
    setActiveTab('my-tasks-content');
    window.setTimeout(() => {
      if (typeof window.segFilterMyTasks === 'function') {
        const openBtn = document.querySelector('#taskFilterSegment .task-seg-btn[data-value="open"]');
        window.segFilterMyTasks('open', openBtn);
      }
    }, 0);
  }, []);

  const handleNewTaskSave = React.useCallback(() => {
    const nameEl = document.getElementById('nt_taskName');
    const descEl = document.getElementById('nt_description');
    const dueEl = document.getElementById('nt_dueDate');
    const assigneeEl = document.getElementById('nt_assignee');
    const nameErr = document.getElementById('nt_err_taskName');
    const descErr = document.getElementById('nt_err_desc');
    const descLimitErr = document.getElementById('nt_err_desc_limit');

    const name = (nameEl?.value || '').trim();
    const description = (descEl?.value || '').trim();
    const descWords = description ? description.split(/\s+/).length : 0;
    let valid = true;

    showFieldState(nameEl, nameErr, !name);
    if (!name && valid) nameEl?.focus();
    valid = valid && Boolean(name);

    if (!description) {
      showFieldState(descEl, descErr, true);
      if (descLimitErr) descLimitErr.style.display = 'none';
      if (valid) descEl?.focus();
      valid = false;
    } else if (descWords > 1000) {
      showFieldState(descEl, descErr, false);
      showFieldState(descEl, descLimitErr, true);
      if (valid) descEl?.focus();
      valid = false;
    } else {
      showFieldState(descEl, descErr, false);
      if (descLimitErr) descLimitErr.style.display = 'none';
    }

    if (!valid) return;

    const taskPayload = {
      name,
      description,
      dueDate: dueEl?.value || '',
      priority: getCheckedPriority(),
      assignee: assigneeEl?.value || 'me',
    };

    setCreatedTasks((prev) => {
      const nextNumber = 6 + prev.length;
      return [{
        ...taskPayload,
        id: `TASK-${String(nextNumber).padStart(3, '0')}`,
        createdOrder: Date.now(),
      }, ...prev];
    });

    const hasApprovalNotice = document.getElementById('nt_approval_notice')?.style.display !== 'none';
    window.showToast?.(
      hasApprovalNotice ? 'Task saved! It will be routed for approval on completion.' : 'Task created successfully!',
      'success'
    );
    window.ntReset?.();
    switchToMyTasks();
  }, [switchToMyTasks]);

  useEffect(() => {
    const originalSave = window.ntSave;
    const originalCancel = window.ntCancel;
    const installBridge = () => {
      window.ntSave = handleNewTaskSave;
      window.ntCancel = function ntCancelBridge() {
        window.ntReset?.();
        switchToMyTasks();
      };
    };
    installBridge();
    const bridgeTimer = window.setTimeout(installBridge, 120);
    return () => {
      window.clearTimeout(bridgeTimer);
      window.ntSave = originalSave;
      window.ntCancel = originalCancel;
    };
  }, [handleNewTaskSave, switchToMyTasks]);

  useEffect(() => {
    if (activeTab !== 'my-tasks-content') return undefined;
    const id = window.setTimeout(() => {
      const selectedValue = document.querySelector('#taskFilterSegment .task-seg-btn.active')?.getAttribute('data-value')
        || document.getElementById('taskFilterSelect')?.value
        || 'open';
      const selectedButton = document.querySelector(`#taskFilterSegment .task-seg-btn[data-value="${selectedValue}"]`);
      if (typeof window.segFilterMyTasks === 'function') window.segFilterMyTasks(selectedValue, selectedButton);
      const sortValue = document.getElementById('taskSortSelect')?.value || 'recent';
      if (typeof window.applyTaskSort === 'function') window.applyTaskSort(sortValue);
    }, 0);
    return () => window.clearTimeout(id);
  }, [activeTab, createdTasks, taskMutations]);

  useEffect(() => {
    if (activeTab !== 'my-tasks-content') return undefined;
    const root = document.querySelector('#my-tasks-content');
    if (!root) return undefined;

    const handleTaskAction = (event) => {
      const button = event.target.closest('.task-complete-btn, .task-delete-btn');
      if (!button || !root.contains(button)) return;

      event.preventDefault();
      event.stopPropagation();

      const card = button.closest('.task-card[data-task-id]');
      const taskId = card?.getAttribute('data-task-id');
      if (!taskId) return;

      if (button.classList.contains('task-complete-btn')) {
        if (card.getAttribute('data-status') === 'closed') {
          window.showToast?.(`${taskId} is already completed.`, 'info');
          return;
        }
        setTaskMutations((prev) => ({
          completed: { ...prev.completed, [taskId]: true },
          deleted: prev.deleted,
        }));
        window.showToast?.(`${taskId} marked as completed.`, 'success');
        return;
      }

      setTaskMutations((prev) => ({
        completed: prev.completed,
        deleted: { ...prev.deleted, [taskId]: true },
      }));
      window.showToast?.(`${taskId} deleted.`, 'success');
    };

    root.addEventListener('click', handleTaskAction);
    return () => root.removeEventListener('click', handleTaskAction);
  }, [activeTab]);


  useEffect(() => {
    if (activeTab !== 'approval-tasks-content' || !canApprove) return undefined;
    const root = document.querySelector('#approval-tasks-content');
    if (!root) return undefined;

    const handleApprovalAction = (event) => {
      const button = event.target.closest('.approve-btn');
      if (!button || !root.contains(button)) return;

      event.preventDefault();
      event.stopPropagation();

      const row = button.closest('tr[data-ap-id]');
      const approvalId = row?.getAttribute('data-ap-id');
      if (!approvalId || row.getAttribute('data-ap-status') !== 'pending') return;

      const nextStatus = button.classList.contains('approve') ? 'approved' : 'rejected';
      const requestType = row.querySelector('td:nth-child(2)')?.textContent?.trim() || 'Request';
      setApprovalMutations((prev) => ({ ...prev, [approvalId]: nextStatus }));
      window.showToast?.(requestType + ' ' + (nextStatus === 'approved' ? 'approved' : 'rejected') + ' successfully.', nextStatus === 'approved' ? 'success' : 'error');
    };

    root.addEventListener('click', handleApprovalAction, true);
    return () => root.removeEventListener('click', handleApprovalAction, true);
  }, [activeTab, canApprove]);

  useEffect(() => {
    if (activeTab !== 'approval-tasks-content') return undefined;
    const id = window.setTimeout(() => {
      const activeButton = document.querySelector('#approvalFilterSegment .task-seg-btn.active');
      const value = activeButton?.getAttribute('data-ap-value') || 'pending';
      if (typeof window.segFilterApprovals === 'function') window.segFilterApprovals(value, activeButton);
    }, 0);
    return () => window.clearTimeout(id);
  }, [activeTab, approvalMutations]);

  useEffect(() => {
    const id = window.setTimeout(() => initTasksPage(currentRole), 60);
    return () => window.clearTimeout(id);
  }, [currentRole]);

  useEffect(() => {
    if (activeTab === 'approval-tasks-content' && !canApprove) {
      setActiveTab('my-tasks-content');
      return;
    }
    if (activeTab === 'hr-tasks-content' && !isHR) {
      setActiveTab('my-tasks-content');
    }
  }, [activeTab, canApprove, isHR]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (activeTab === 'my-tasks-content' && typeof window.segFilterMyTasks === 'function') {
        const openBtn = document.querySelector('#taskFilterSegment .task-seg-btn[data-value="open"]');
        window.segFilterMyTasks('open', openBtn);
      }
      if (activeTab === 'approval-tasks-content' && typeof window.segFilterApprovals === 'function') {
        const pendingBtn = document.querySelector('#approvalFilterSegment .task-seg-btn[data-ap-value="pending"]');
        if (pendingBtn) window.segFilterApprovals('pending', pendingBtn);
      }
      if (activeTab === 'review-section-content' && typeof window.segFilterReviews === 'function') {
        const pendingBtn = document.querySelector('#reviewFilterSegment .task-seg-btn[data-rv-value="pending"]');
        if (pendingBtn) window.segFilterReviews('pending', pendingBtn);
      }
    }, 80);
    return () => window.clearTimeout(id);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== 'review-section-content') return undefined;
    const id = window.setTimeout(() => {
      const select = document.getElementById('reviewSortSelect');
      window.sortReviews = sortReviewCards;
      if (select) {
        select.onchange = (event) => sortReviewCards(event.target.value || 'recent');
        sortReviewCards(select.value || 'recent');
      }
    }, 80);
    return () => window.clearTimeout(id);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== 'review-section-content') return;
    const id = window.setTimeout(() => {
      const buttons = Array.from(document.querySelectorAll('#review-section-content .task-edit-btn'));
      buttons.forEach((btn) => {
        btn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          const card = btn.closest('.task-card');
          const data = getReviewDataFromCard(card, btn);
          const mode = /^\s*View\b/i.test(btn.textContent || '') ? 'view' : 'start';
          setReviewModal({ ...data, mode });
          return false;
        };
      });
    }, 50);
    return () => window.clearTimeout(id);
  }, [activeTab]);

  return (
    <div className="page active" id="page-tasks">
      <div className="tabs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={tab.id === 'approval-tasks-content' ? 'approvalTasksTab' : tab.id === 'hr-tasks-content' ? 'hrChecklistTab' : tab.id === 'review-section-content' ? 'reviewSectionTab' : undefined}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div id="newTaskTab" style={{ paddingRight: 4 }}>
          <button
            className="btn-sm primary"
            onClick={() => setActiveTab('new-task-content')}
            style={{ fontSize: 12, padding: '5px 14px', display: 'flex', alignItems: 'center', gap: 5 }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New Task
          </button>
        </div>
      </div>

      {['my-tasks-content','approval-tasks-content','hr-tasks-content','review-section-content','new-task-content'].map((id) => (
        <HtmlFragment key={id} html={renderedSections[id]} style={{ display: activeTab === id ? 'block' : 'none' }} />
      ))}

      <HtmlFragment html={editTaskModalHtml} />
      <ReviewModal modal={reviewModal} onClose={() => setReviewModal(null)} />
    </div>
  );
}
