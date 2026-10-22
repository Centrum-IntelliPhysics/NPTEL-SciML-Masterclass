(function () {
  var W = window.WORKSHOP || {};
  var TBA = "to be announced";

  // ---------- registration links ----------
  var reg = (W.registrationUrl || "").trim();
  document.querySelectorAll("[data-register]").forEach(function (a) {
    if (reg) {
      a.href = reg; a.target = "_blank"; a.rel = "noopener";
    } else {
      a.href = "#register";
      a.setAttribute("aria-disabled", "true");
      a.title = "Registration opens soon";
      if (!a.classList.contains("header-cta")) a.textContent = "Registration opens soon";
    }
  });
  var regText = document.querySelector("[data-register-text]");
  if (regText) {
    regText.innerHTML = reg
      ? 'Register: <a href="' + reg + '" target="_blank" rel="noopener">NPTEL registration page</a>'
      : "Registration link: " + TBA;
  }

  // ---------- contact ----------
  var mail = (W.contactEmail || "").trim();
  var c = document.querySelector("[data-contact]");
  if (c) c.innerHTML = mail ? 'Questions: <a href="mailto:' + mail + '">' + mail + "</a>" : "";
  var ci = document.querySelector("[data-contact-inline]");
  if (ci && mail) ci.innerHTML = ' (<a href="mailto:' + mail + '">' + mail + "</a>)";

  // ---------- session dates ----------
  var tz = W.timezone || "";
  (W.sessions || []).forEach(function (s, i) {
    var el = document.querySelector('[data-when="' + i + '"]');
    if (!el) return;
    var txt = [s.date, s.time].filter(Boolean).join(" · ");
    el.textContent = txt ? txt + (s.time && tz ? " " + tz.split(" ")[0] : "") : "Date " + TBA;
  });
  var tzEl = document.querySelector("[data-tz]");
  if (tzEl && tz) tzEl.textContent = "All times " + tz + ".";

  // ---------- kit link (only if configured) ----------
  var kit = (W.kitUrl || "").trim();
  var kitText = document.querySelector("[data-kit-text]");
  if (kit && kitText) {
    kitText.innerHTML = '<b>Participants:</b> <a href="' + kit + '" target="_blank" rel="noopener">open the kit</a>. All notebooks are in PyTorch and run in Google Colab.';
  }

  // ---------- Colab setup check ----------
  document.querySelectorAll("[data-colab]").forEach(function (a) {
    if (W.setupColabUrl) a.href = W.setupColabUrl;
  });

  // ---------- tabs ----------
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute("aria-selected", on ? "true" : "false");
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { select(t, false); });
    t.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var n = (i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
        select(tabs[n], true);
      }
    });
  });

  // ---------- mobile menu ----------
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); });
    });
  }

  // ---------- theme toggle ----------
  var themeBtn = document.getElementById("theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var cur = root.getAttribute("data-theme") ||
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }
})();
