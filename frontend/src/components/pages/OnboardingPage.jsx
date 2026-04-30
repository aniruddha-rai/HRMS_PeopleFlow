import React, { useMemo, useState } from 'react';

const OB_STEPS = [
  {
    label: 'Fill Employee Details',
    desc: 'Complete all required personal, address, bank and work information in the system.',
  },
  {
    label: 'Raise Request For ID Creation',
    desc: 'Submit IT request to create employee system account, email ID and access credentials.',
  },
  {
    label: 'ID Creation Done',
    desc: 'Confirm that the employee ID, email and system access have been successfully created.',
  },
  {
    label: 'Laptop & Hardware Assignment',
    desc: 'Assign and configure the laptop, accessories and any required hardware for the employee.',
  },
  {
    label: 'Policy & Compliance Acknowledgement',
    desc: 'Employee has reviewed, understood and acknowledged all company policies and compliance documents.',
  },
];

function AccessDeniedCard() {
  return (
    <div id="ob-access-denied">
      <div className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5" style={{ margin: '0 auto 12px', display: 'block' }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>HR Access Required</div>
        <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>Onboarding management is restricted to HR Administrators.</div>
      </div>
    </div>
  );
}

function StepStatusBadge({ done }) {
  if (done) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'var(--success-muted)', color: 'var(--success)', border: '1px solid rgba(5,150,105,0.18)', fontSize: 10, fontWeight: 500, padding: '2px 8px', borderRadius: 10, flexShrink: 0 }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
        Done
      </span>
    );
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'var(--border-subtle)', color: 'var(--text-tertiary)', fontSize: 10, fontWeight: 500, padding: '2px 8px', borderRadius: 10, flexShrink: 0 }}>
      Pending
    </span>
  );
}

export function OnboardingPage({ currentRole, onShowToast }) {
  const isHR = currentRole === 'hr';
  const [checkedSteps, setCheckedSteps] = useState(() => OB_STEPS.map(() => false));

  const doneCount = checkedSteps.filter(Boolean).length;
  const total = OB_STEPS.length;
  const pct = Math.round((doneCount / total) * 100);
  const allDone = doneCount === total;

  const badgeConfig = useMemo(() => {
    if (pct === 100) return { className: 'badge green', label: 'Ready to Submit', style: {} };
    if (pct > 0) return { className: 'badge amber', label: `In Progress · ${pct}%`, style: {} };
    return {
      className: 'badge',
      label: 'Not Started',
      style: { background: 'var(--border-subtle)', color: 'var(--text-tertiary)' },
    };
  }, [pct]);

  const remaining = total - doneCount;
  const footerNote = !isHR
    ? 'Only HR Administrators can check steps and submit onboarding.'
    : allDone
      ? '✓ All steps completed — ready to submit!'
      : `${remaining} step${remaining > 1 ? 's' : ''} remaining before you can submit`;

  const toggleStep = (idx, value) => {
    if (!isHR) return;
    setCheckedSteps((prev) => prev.map((item, i) => (i === idx ? value : item)));
  };

  const submitOnboarding = () => {
    if (!isHR || !allDone) return;
    setCheckedSteps(OB_STEPS.map(() => false));
    onShowToast?.('Onboarding submitted! All steps have been reset for the next cycle.', 'success');
  };

  if (!isHR) {
    return (
      <div className="page active" id="page-onboarding">
        <div id="onboardingContent">
          <AccessDeniedCard />
        </div>
      </div>
    );
  }

  return (
    <div className="page active" id="page-onboarding">
      <div id="onboardingContent">
        <div id="ob-main-card" className="card" style={{ maxWidth: 680 }}>
          <div className="section-header" style={{ marginBottom: 20 }}>
            <div>
              <div className="card-title">Employee Onboarding Checklist</div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 2 }}>Complete all steps in sequence to finish the onboarding cycle</div>
            </div>
            <span className={badgeConfig.className} id="ob-status-badge" style={badgeConfig.style}>{badgeConfig.label}</span>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 500, marginBottom: 6, color: 'var(--text-secondary)' }}>
              <span>Overall Completion</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600 }} id="ob-pct">{doneCount} / {total} steps</span>
            </div>
            <div style={{ height: 7, background: 'var(--border-subtle)', borderRadius: 4, overflow: 'hidden' }}>
              <div id="ob-progress-fill" style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg,#0D9488,#10B981)', borderRadius: 4, transition: 'width 0.35s ease' }} />
            </div>
          </div>

          <div id="ob-steps-container">
            {OB_STEPS.map((step, i) => {
              const checked = checkedSteps[i];
              const isLast = i === OB_STEPS.length - 1;
              const connectorDone = i > 0 && checkedSteps[i - 1];

              return (
                <div className={`ob-step-row${checked ? ' ob-step-done' : ''}`} id={`ob-row-${i}`} key={step.label}>
                  <div className="ob-step-left">
                    <div className="ob-step-connector-top" style={{ visibility: i === 0 ? 'hidden' : 'visible', background: connectorDone ? 'var(--primary)' : 'var(--border)' }} />
                    <div className={`ob-step-circle ${checked ? 'ob-circle-done' : 'ob-circle-pending'}`}>
                      {checked ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      ) : (
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-tertiary)' }}>{i + 1}</span>
                      )}
                    </div>
                    <div className="ob-step-connector-bottom" style={{ visibility: isLast ? 'hidden' : 'visible', background: checked ? 'var(--primary)' : 'var(--border)' }} />
                  </div>

                  <div className="ob-step-body" style={{ paddingBottom: isLast ? 4 : 8 }}>
                    <div className="ob-step-inner">
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className={`ob-step-label${checked ? ' ob-label-done' : ''}`}>{step.label}</div>
                        <div className="ob-step-desc">{step.desc}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                        <StepStatusBadge done={checked} />
                        <label className="ob-checkbox-label" title={checked ? 'Uncheck this step' : 'Mark as complete'}>
                          <input type="checkbox" className="ob-checkbox" checked={checked} onChange={(event) => toggleStep(i, event.target.checked)} />
                          <span className="ob-checkbox-custom" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="ob-footer" style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              className="quick-btn primary"
              id="ob-submit-btn"
              type="button"
              onClick={submitOnboarding}
              disabled={!allDone || !isHR}
              style={{ opacity: allDone && isHR ? 1 : 0.42, cursor: allDone && isHR ? 'pointer' : 'not-allowed', padding: '8px 22px', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 6, transition: 'opacity 0.2s, box-shadow 0.2s', boxShadow: allDone && isHR ? '0 2px 8px rgba(13,148,136,0.3)' : 'none' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Submit Onboarding
            </button>
            <span id="ob-footer-note" style={{ fontSize: 11, color: allDone ? 'var(--success)' : 'var(--text-tertiary)' }}>{footerNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
