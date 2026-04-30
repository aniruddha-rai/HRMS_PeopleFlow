PeopleFlow HRMS V119 React Frontend + Backend Structure

This package is the approved frontend baseline after sign-off and final cleanup of fragment dependencies.

Run frontend:
  cd frontend
  npm install --registry=https://registry.npmjs.org/
  npm run dev

Run backend structure:
  cd backend
  mvn spring-boot:run

## Active frontend runtime
Entry:
- src/main.jsx
- src/app/App.jsx

Active React-controlled surfaces:
- Login
- Sidebar/Header shell
- Profile dropdown
- Notifications panel
- Toast container
- Home wrapper
- Page wrappers for all major modules

Fragment-backed internals retained intentionally:
- src/exact/wireframe-body.html
- src/exact/wireframe.css
- src/exact/wireframe-script-1.js
- src/exact/wireframe-script-2.js
- src/utils/exactFragments.js
- src/components/common/HtmlFragment.jsx
- src/components/common/ExactScriptsBridge.jsx

Cleanup completed:
- removed inactive frontend/src/_wip-decomposed/
- documented the active runtime path
- kept only the required fragment helpers for the approved baseline

See:
- docs/active-frontend-path.md
- docs/fragment-dependency-cleanup.md
