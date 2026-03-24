// Inject FontAwesome icons into the Material sidebar navigation.
//
// Why JS:
// - MkDocs nav labels are plain text; we can't reliably embed icons there.
// - This keeps nav translations clean and lets us match the Laravel icon set.
//
// This expects FontAwesome to be loaded via mkdocs.yml -> extra_javascript.
(function () {
  const LOCALES = new Set(["it", "en", "de", "fr", "es", "nl"]);

  function normalizePathname(href) {
    try {
      // Use the current page URL as base. In Material, the active nav item often has href="."
      // and using origin would incorrectly resolve it to "/".
      const u = new URL(href, window.location.href);
      let p = u.pathname || "/";
      // Drop trailing slash for easier matching.
      if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
      // Strip locale prefix: /en/diver/dashboard -> /diver/dashboard
      const parts = p.split("/").filter(Boolean);
      if (parts.length > 0 && LOCALES.has(parts[0])) {
        parts.shift();
        p = "/" + parts.join("/");
      }
      return p || "/";
    } catch {
      return "";
    }
  }

  function iconForPath(pathname) {
    // Home
    if (pathname === "/" || pathname === "") return "fa-house";

    // Diver section
    if (pathname.includes("/diver/overview")) return "fa-circle-info";
    if (pathname.includes("/diver/dashboard")) return "fa-house";
    if (pathname.includes("/diver/documents")) return "fa-folder-open";
    if (pathname.includes("/diver/courses")) return "fa-screen-users";
    if (pathname.includes("/diver/free-learnings")) return "fa-narwhal";
    if (pathname.includes("/diver/certifications")) return "fa-address-card";
    if (pathname.includes("/diver/awards")) return "fa-award";
    if (pathname.includes("/diver/dive-logs") || pathname.includes("/diver/dive_log"))
      return "fa-anchor";
    if (pathname.includes("/diver/store")) return "fa-cart-shopping";
    if (pathname.includes("/diver/forms")) return "fa-file-waveform";

    return null;
  }

  function applyNavIcons() {
    // If FontAwesome didn't load (common on GitHub Pages if the external URL is blocked/redirected),
    // don't inject <i> tags. We'll fall back to the local SVG-mask icons (nav-icons.css).
    if (!window.FontAwesome || !window.FontAwesome.dom) return;

    // Disable fallback icons once FA is available.
    try {
      document.documentElement.classList.add("dra-fa-ready");
    } catch {
      // noop
    }

    const links = document.querySelectorAll(".md-nav--primary .md-nav__link");
    for (const a of links) {
      if (!(a instanceof HTMLElement)) continue;
      if (a.dataset.draNavIconApplied === "1") continue;

      const rawHref = a.getAttribute("href") || "";
      if (!rawHref) continue;
      if (rawHref.startsWith("#")) continue;

      const pathname = normalizePathname(rawHref);
      const icon = iconForPath(pathname);
      if (!icon) continue;

      a.dataset.draNavIconApplied = "1";

      const wrap = document.createElement("span");
      wrap.className = "dra-nav-icon";
      wrap.setAttribute("aria-hidden", "true");

      const i = document.createElement("i");
      // Laravel uses fa-light; we keep that for parity.
      i.className = `fa-light ${icon}`;
      wrap.appendChild(i);

      a.prepend(wrap);
    }

    // If FontAwesome SVG framework is loaded (all.min.js), force a rescan after injection.
    try {
      if (window.FontAwesome && window.FontAwesome.dom && typeof window.FontAwesome.dom.i2svg === "function") {
        window.FontAwesome.dom.i2svg();
      }
    } catch {
      // noop
    }
  }

  let scheduled = false;
  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyNavIcons();
    });
  }

  // MkDocs Material can be SPA-like when navigation.instant is enabled.
  // If document$ is present, hook it. We also observe sidebar mutations so icons survive partial rerenders.
  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(scheduleApply);
  } else {
    document.addEventListener("DOMContentLoaded", scheduleApply);
  }

  try {
    const sidebar = document.querySelector(".md-sidebar--primary");
    if (sidebar) {
      const mo = new MutationObserver(scheduleApply);
      mo.observe(sidebar, { childList: true, subtree: true });
    }
  } catch {
    // noop
  }
})();
