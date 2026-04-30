import React from 'react';

export function ToastContainer({ toasts }) {
  return (
    <div className="toast-container" id="toastContainer">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type || 'info'}`}>
          <span>{toast.icon}</span>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
