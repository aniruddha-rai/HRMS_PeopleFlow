# Fragment Dependency Cleanup Summary

## Scope
Cleanup only. No intended UI/behavior changes.

## Removed
- `frontend/src/_wip-decomposed/` (inactive duplicate code tree)

## Retained intentionally
- `frontend/src/components/ExactWireframeApp.jsx`
  - still required by the runtime fallback boundary
- `frontend/src/exact/*`
  - source fragments/scripts/styles from V119
- `frontend/src/utils/exactFragments.js`
  - fragment extraction utility used by active pages
- `frontend/src/components/common/ExactScriptsBridge.jsx`
  - exact script bridge used by the active app path

## Why cleanup was limited
The approved baseline still depends on fragment-backed internals for exact V119 fidelity. Removing those dependencies now would be a refactor, not cleanup, and would increase regression risk before backend integration starts.
