# Active Frontend Runtime Path

This package is the approved frontend baseline after sign-off and fragment-dependency cleanup.

## Active runtime entry
- `frontend/src/main.jsx`
- `frontend/src/app/App.jsx`

## Active React-controlled surfaces
- Login
- Sidebar shell
- Header
- Profile dropdown
- Notifications panel
- Toast container
- Home wrapper
- Page wrappers for:
  - Profile
  - Attendance
  - Leave
  - To Do
  - Payroll
  - Documents
  - People
  - Expense Claim
  - Help Desk
  - Tax Documents
  - Reports

## Fragment-backed internals still intentionally preserved
To avoid any UI/behavior mismatch from wireframe V119, many inner page sections continue to render preserved exact fragments from:
- `frontend/src/exact/wireframe-body.html`
- `frontend/src/exact/wireframe.css`
- `frontend/src/exact/wireframe-script-1.js`
- `frontend/src/exact/wireframe-script-2.js`

Supporting utilities:
- `frontend/src/utils/exactFragments.js`
- `frontend/src/components/common/HtmlFragment.jsx`
- `frontend/src/components/common/ExactScriptsBridge.jsx`

## Cleanup completed in this pass
- Removed inactive `frontend/src/_wip-decomposed/`
- Kept only the active runtime path and required fragment helpers
- Preserved `ExactWireframeApp.jsx` because it is still used by the runtime fallback boundary

## Safe next step after this cleanup
Start backend API wiring on top of this approved frontend baseline without changing the V119 UI.
