import React, { useEffect, useRef } from 'react';
import bodyHtml from '../exact/wireframe-body.html?raw';
import script1 from '../exact/wireframe-script-1.js?raw';
import script2 from '../exact/wireframe-script-2.js?raw';
import '../exact/wireframe.css';

function cleanupGlobalArtifacts(container) {
  if (!container) return;
  container.innerHTML = '';
  document.querySelectorAll('script[data-peopleflow-wireframe="true"]').forEach((el) => el.remove());
}

function injectGlobalScript(code, key) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.dataset.peopleflowWireframe = 'true';
  script.dataset.scriptKey = key;
  script.text = code;
  document.body.appendChild(script);
  return script;
}

export function ExactWireframeApp() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    cleanupGlobalArtifacts(host);
    host.innerHTML = bodyHtml;

    // Preserve the exact script execution order from the source wireframe.
    injectGlobalScript(script1, 'wireframe-script-1');
    injectGlobalScript(script2, 'wireframe-script-2');

    // The original HTML expects DOMContentLoaded on the live document.
    // Since React mounts after document load, we replay the init events.
    document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
    window.dispatchEvent(new Event('DOMContentLoaded'));
    window.dispatchEvent(new Event('load'));

    return () => cleanupGlobalArtifacts(host);
  }, []);

  return <div id="peopleflow-wireframe-root" ref={hostRef} />;
}
