// segmented panels for .entry cards (see _includes/entry.html)
// panels render open, and are closed here once JS is running, so the page still
// works — and stays findable with ctrl-F — if this script never loads

document.addEventListener('DOMContentLoaded', function () {
  var groups = document.querySelectorAll('.entry__seg');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var DURATION = 220;

  // open/close animation: grow or shrink the panel's height (plus its padding and
  // top margin, which would otherwise pop in/out) while fading it. skipped for
  // people who ask their system for reduced motion, or browsers without animate().
  function animatePanel(panel, opening) {
    if (panel._anim) panel._anim.cancel();
    if (opening) panel.hidden = false;
    if (reduceMotion.matches || !panel.animate) {
      panel.hidden = !opening;
      return;
    }
    var cs = getComputedStyle(panel);
    var shown = {
      height: panel.offsetHeight + 'px',
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      marginTop: cs.marginTop,
      opacity: 1
    };
    var gone = { height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', opacity: 0 };
    panel.style.overflow = 'hidden';
    var anim = panel.animate(opening ? [gone, shown] : [shown, gone], {
      duration: DURATION,
      easing: 'ease-out'
    });
    panel._anim = anim;
    anim.onfinish = function () {
      panel.style.overflow = '';
      panel._anim = null;
      if (!opening) panel.hidden = true;
    };
    anim.oncancel = function () {
      panel.style.overflow = '';
    };
  }

  groups.forEach(function (seg) {
    var buttons = Array.prototype.slice.call(seg.querySelectorAll('button'));

    function panelFor(button) {
      return document.getElementById(button.getAttribute('aria-controls'));
    }

    // initial state: everything closed, no animation
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
      var panel = panelFor(b);
      if (panel) panel.hidden = true;
    });

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var wasOpen = button.getAttribute('aria-pressed') === 'true';
        buttons.forEach(function (b) {
          if (b.getAttribute('aria-pressed') === 'true') {
            b.setAttribute('aria-pressed', 'false');
            var p = panelFor(b);
            if (p) animatePanel(p, false);
          }
        });
        if (!wasOpen) {
          button.setAttribute('aria-pressed', 'true');
          var panel = panelFor(button);
          if (panel) animatePanel(panel, true);
        }
      });
    });
  });
});
