(function () {
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    function render() {
      var t = document.documentElement.getAttribute("data-theme");
      btn.textContent = t === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
    btn.addEventListener("click", function () {
      var t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      try { localStorage.setItem("theme", t); } catch (e) {}
      render();
    });
    render();
  });
})();
