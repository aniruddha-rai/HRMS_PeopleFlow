import React from 'react';

const items = [
  { unread: true, text: '<b>March Payslip</b> is now available for download', time: 'Today, 9:00 AM' },
  { unread: true, text: 'Your leave request has been <b>approved</b> by Sarah Mitchell', time: 'Yesterday, 4:30 PM' },
  { unread: false, text: 'Ticket <b>#TKT-2601</b> has been escalated due to SLA breach', time: 'Mar 31, 2026' },
  { unread: false, text: 'Holiday reminder: <b>Good Friday</b> on April 18', time: 'Mar 30, 2026' },
];

export function NotificationsPanel({ open }) {
  return (
    <div className={`notif-panel ${open ? 'show' : ''}`} id="notifPanel">
      <div className="notif-header">
        <div className="notif-header-title">🔔 Notifications</div>
        <span style={{ fontSize: '11px', color: 'var(--primary)', cursor: 'pointer' }}>Mark all read</span>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className={`notif-item ${item.unread ? 'unread' : ''}`}>
          <div className="notif-dot2" style={item.unread ? undefined : { background: 'transparent' }} />
          <div>
            <div className="notif-text" dangerouslySetInnerHTML={{ __html: item.text }} />
            <div className="notif-time">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
