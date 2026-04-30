# PeopleFlow HRMS frontend re-baseline

## New source of truth
- **Active frontend source of truth:** `Wireframe_HRMS_V119.html`
- **Previous wireframe used earlier:** `Wireframe_HRMS_V87.html`

## Page inventory comparison
Both wireframes expose the same top-level page ids:
- dashboard
- tasks
- profile
- attendance
- leave
- payroll
- taxdocs
- documents
- people
- helpdesk
- requests
- reports

## What can still be reused safely
### Reused
- Backend folder structure
- Spring Boot modular monolith starter
- PostgreSQL + Flyway direction
- Module naming from the solution design
- High-level route/module map (Home, To Do, Attendance Info, Leave, Salary, Tax Documents, Documents, People, Expense Claim, Help Desk, Reports, Profile)
- Role model (Employee, Manager, HR Admin, Payroll Admin, Leadership, IT Admin)
- Reports restriction rule and me/team scope concept

### Must be rebuilt from V119
Because the latest wireframe changes are spread across many sections and panels, frontend reuse from older generated passes is unsafe.
The frontend was therefore re-baselined from V119 only.

Rebuilt from the new wireframe only:
- login surface
- shell layout
- all page layouts
- all page markup
- all styling
- all inline interactions and page behaviors preserved by the original wireframe script

## Implementation strategy used here
To avoid UI drift, the frontend is rebuilt as a React/Vite host around the exact V119 wireframe assets:
- `frontend/src/exact/wireframe-body.html`
- `frontend/src/exact/wireframe.css`
- `frontend/src/exact/wireframe-script-1.js`
- `frontend/src/exact/wireframe-script-2.js`

This keeps the latest wireframe visually exact while still giving you a React project baseline.
