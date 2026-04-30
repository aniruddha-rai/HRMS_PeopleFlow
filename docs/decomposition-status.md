# Decomposition status

Active safe decomposition:
- Login
- Sidebar shell
- Header shell
- Notifications / profile dropdown / toast container
- Home dashboard wrapper

Preserved exact fragments:
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

Safety model:
- If the decomposed runtime throws during render, the app falls back to the stable exact V119 wireframe host.

- Tax Documents and Reports are now React page-level wrappers using exact V119 fragments.
