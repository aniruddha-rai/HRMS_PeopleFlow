# PeopleFlow HRMS Frontend (Wireframe V119)

This frontend is the approved V119 baseline after final cleanup of fragment dependencies.

## Active runtime
- React + Vite host app
- React-controlled login, shell, home wrapper, and page wrappers
- Preserved exact V119 fragments/scripts for inner page fidelity where still required

## Run
```bash
npm install --registry=https://registry.npmjs.org/
npm run dev
```

Then open `http://localhost:5173`.

## Notes
- The inactive duplicate `_wip-decomposed` tree has been removed in this cleanup pass.
- `src/components/ExactWireframeApp.jsx` is intentionally retained because it is still used as the runtime fallback path.
