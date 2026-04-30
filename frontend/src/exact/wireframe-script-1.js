// Draw org chart connector lines using SVG, measuring actual node positions
        function drawOrgConnectors() {
          var wrap = document.getElementById('orgTreeWrap');
          var svg  = document.getElementById('orgConnectorSvg');
          if (!wrap || !svg) return;

          var wrapRect = wrap.getBoundingClientRect();

          function nodeCenter(id) {
            var el = document.getElementById(id);
            if (!el) return null;
            var r = el.getBoundingClientRect();
            return {
              x:      r.left - wrapRect.left + r.width  / 2,
              top:    r.top  - wrapRect.top,
              bottom: r.top  - wrapRect.top  + r.height,
              left:   r.left - wrapRect.left,
              right:  r.left - wrapRect.left + r.width
            };
          }

          var stroke = '#CBD5E1';
          var sw     = '1.5';
          var lines  = [];

          var ceo = nodeCenter('orgNode_ceo');
          var sm  = nodeCenter('orgNode_sm');
          var ap  = nodeCenter('orgNode_ap');
          var vr  = nodeCenter('orgNode_vr');
          var jd  = nodeCenter('orgNode_jd');
          var as_ = nodeCenter('orgNode_as');
          var pn  = nodeCenter('orgNode_pn');
          var nj  = nodeCenter('orgNode_nj');
          var rs  = nodeCenter('orgNode_rs');

          if (!ceo || !sm || !ap || !vr || !jd || !as_ || !pn || !nj || !rs) return;

          // ── Level 0→1: CEO down to horizontal bus, then up to each VP ──
          var midY_01 = ceo.bottom + (sm.top - ceo.bottom) / 2;

          // Vertical drop from CEO
          lines.push('M ' + ceo.x + ' ' + ceo.bottom + ' L ' + ceo.x + ' ' + midY_01);
          // Horizontal bus spanning sm.x → vr.x
          lines.push('M ' + sm.x + ' ' + midY_01 + ' L ' + vr.x + ' ' + midY_01);
          // Vertical rise to each VP
          [sm, ap, vr].forEach(function(vp) {
            lines.push('M ' + vp.x + ' ' + midY_01 + ' L ' + vp.x + ' ' + vp.top);
          });

          // ── Level 1→2: Each VP down to its children ──
          var midY_12 = sm.bottom + (jd.top - sm.bottom) / 2;

          // — Engineering: SM → JD, AS, PN —
          lines.push('M ' + sm.x + ' ' + sm.bottom + ' L ' + sm.x + ' ' + midY_12);
          // Horizontal bus JD.x → PN.x
          lines.push('M ' + jd.x + ' ' + midY_12 + ' L ' + pn.x + ' ' + midY_12);
          [jd, as_, pn].forEach(function(leaf) {
            lines.push('M ' + leaf.x + ' ' + midY_12 + ' L ' + leaf.x + ' ' + leaf.top);
          });

          // — HR: AP → NJ —
          lines.push('M ' + ap.x + ' ' + ap.bottom + ' L ' + ap.x + ' ' + midY_12);
          lines.push('M ' + ap.x + ' ' + midY_12   + ' L ' + nj.x + ' ' + midY_12);
          lines.push('M ' + nj.x + ' ' + midY_12   + ' L ' + nj.x + ' ' + nj.top);

          // — Finance: VR → RS —
          lines.push('M ' + vr.x + ' ' + vr.bottom + ' L ' + vr.x + ' ' + midY_12);
          lines.push('M ' + vr.x + ' ' + midY_12   + ' L ' + rs.x + ' ' + midY_12);
          lines.push('M ' + rs.x + ' ' + midY_12   + ' L ' + rs.x + ' ' + rs.top);

          // Update SVG height to cover full tree
          svg.style.height = (wrap.offsetHeight) + 'px';

          // Build single <path> for all lines
          var pathEl = svg.querySelector('path.org-lines');
          if (!pathEl) {
            pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathEl.setAttribute('class', 'org-lines');
            pathEl.setAttribute('fill', 'none');
            pathEl.setAttribute('stroke', stroke);
            pathEl.setAttribute('stroke-width', sw);
            svg.appendChild(pathEl);
          }
          pathEl.setAttribute('d', lines.join(' '));
        }

        // Draw on page load and whenever the org chart tab is shown
        document.addEventListener('DOMContentLoaded', function() {
          setTimeout(drawOrgConnectors, 120);
        });
        // Re-draw when org chart tab is clicked
        document.addEventListener('click', function(e) {
          if (e.target && (e.target.textContent || '').trim() === 'Org Chart') {
            setTimeout(drawOrgConnectors, 120);
          }
        });
        // Also re-draw on window resize
        window.addEventListener('resize', drawOrgConnectors);