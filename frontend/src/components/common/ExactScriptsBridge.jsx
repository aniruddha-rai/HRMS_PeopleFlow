import { useEffect } from 'react';
import script1 from '../../exact/wireframe-script-1.js?raw';
import script2 from '../../exact/wireframe-script-2.js?raw';

function inject(code, key) {
  if (document.querySelector(`script[data-peopleflow-exact-script="${key}"]`)) return;
  const el = document.createElement('script');
  el.type = 'text/javascript';
  el.dataset.peopleflowExactScript = key;
  el.text = code;
  document.body.appendChild(el);
}

export function ExactScriptsBridge() {
  useEffect(() => {
    if (window.__peopleflowExactScriptsLoaded) return;
    window.__peopleflowExactScriptsLoaded = true;
    inject(script1, 'script-1');
    inject(script2, 'script-2');
    window.setTimeout(() => {
      document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
      window.dispatchEvent(new Event('load'));
    }, 0);
  }, []);
  return null;
}
