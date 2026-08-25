// segmented panels for .entry cards (see _includes/entry.html)
// panels render open, and are closed here once JS is running, so the page still
// works — and stays findable with ctrl-F — if this script never loads

document.addEventListener('DOMContentLoaded', function () {
  var groups = document.querySelectorAll('.entry__seg');

  groups.forEach(function (seg) {
    var buttons = Array.prototype.slice.call(seg.querySelectorAll('button'));

    function panelFor(button) {
      return document.getElementById(button.getAttribute('aria-controls'));
    }

    function closeAll() {
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', 'false');
        var panel = panelFor(b);
        if (panel) panel.hidden = true;
      });
    }

    closeAll();

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var wasOpen = button.getAttribute('aria-pressed') === 'true';
        closeAll();
        if (!wasOpen) {
          button.setAttribute('aria-pressed', 'true');
          var panel = panelFor(button);
          if (panel) panel.hidden = false;
        }
      });
    });
  });
});
