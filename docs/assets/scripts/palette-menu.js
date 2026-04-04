// Single palette control with 3 options: Dark, Light, System.
//
// MkDocs Material follows the OS color scheme only while no explicit preference
// is stored. Once the user toggles, Material persists "__palette" in localStorage.
//
// This script replaces the default 2-state toggle UI with a single button that
// opens a small menu, allowing the user to select:
// - Dark: persist dark palette
// - Light: persist light palette
// - System: clear persisted preference so OS setting takes effect
(function () {
  const DRA_MODE_KEY = "dra_palette_mode";
  const SYSTEM_MQL = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function lang() {
    return (document.documentElement.getAttribute("lang") || "en").toLowerCase();
  }

  function t(key) {
    const it = lang().startsWith("it");
    const dict = {
      button: it ? "Tema" : "Theme",
      dark: it ? "Scuro" : "Dark",
      light: it ? "Chiaro" : "Light",
      system: it ? "Sistema" : "System",
      system_long: it ? "Segui sistema" : "Follow system"
    };
    return dict[key] || key;
  }

  function el(tag, attrs) {
    const n = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (k === "class") n.className = v;
        else if (k === "text") n.textContent = v;
        else n.setAttribute(k, v);
      }
    }
    return n;
  }

  function injectStylesOnce() {
    if (document.getElementById("dra-palette-menu-style")) return;
    const style = el("style", { id: "dra-palette-menu-style" });
    style.textContent = `
      form[data-md-component="palette"] .md-option,
      form[data-md-component="palette"] label[for^="__palette_"] {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        overflow: hidden !important;
        clip: rect(0 0 0 0) !important;
        white-space: nowrap !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      .dra-palette-menu {
        position: fixed;
        z-index: 1000;
        display: grid;
        grid-auto-flow: column;
        gap: 0.25rem;
        padding: 0.35rem;
        border-radius: 0.7rem;
        background: var(--md-default-bg-color);
        border: 1px solid rgba(127, 127, 127, 0.35);
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
      }
      .dra-palette-item {
        width: 2.35rem;
        height: 2.35rem;
        border-radius: 0.55rem;
        border: 0;
        background: transparent;
        color: var(--md-default-fg-color);
        display: grid;
        place-items: center;
        cursor: pointer;
      }
      .dra-palette-item:hover {
        background: rgba(127, 127, 127, 0.15);
      }
      .dra-palette-item[aria-pressed="true"] {
        background: rgba(127, 127, 127, 0.22);
        outline: 2px solid rgba(127, 127, 127, 0.28);
        outline-offset: -2px;
      }
      .dra-palette-item svg {
        width: 1.35rem;
        height: 1.35rem;
        fill: currentColor;
      }
    `;
    document.head.appendChild(style);
  }

  function getPaletteForm() {
    return document.querySelector('form[data-md-component="palette"]');
  }

  function getStoredPalette() {
    try {
      if (typeof window.__md_get === "function") return window.__md_get("__palette");
    } catch {
      // noop
    }
    return null;
  }

  function getSelectedMode() {
    // Persist the user's explicit choice so the icon reflects the selection
    // (e.g. "System" should stay "System" even if the OS is currently dark).
    try {
      const raw = localStorage.getItem(DRA_MODE_KEY);
      if (raw === "light" || raw === "dark" || raw === "system") return raw;
    } catch {
      // noop
    }

    // First visit or after storage clear: infer best-effort from Material state.
    const stored = getAnyStoredPalette();
    if (!stored || !stored.color) return "system";
    const scheme = String(stored.color.scheme || "");
    if (scheme === "slate") return "dark";
    if (scheme === "default") return "light";
    return "system";
  }

  function setSelectedMode(mode) {
    try {
      localStorage.setItem(DRA_MODE_KEY, mode);
    } catch {
      // noop
    }
  }

  function getAnyStoredPalette() {
    // Prefer the theme helper (scoped key), but fall back to scanning localStorage
    // to detect an explicit user preference across locales/scope paths.
    const scoped = getStoredPalette();
    if (scoped && scoped.color) return scoped;
    try {
      for (const k of Object.keys(localStorage)) {
        if (!k.endsWith(".__palette")) continue;
        const v = localStorage.getItem(k);
        if (!v) continue;
        const parsed = JSON.parse(v);
        if (parsed && parsed.color) return parsed;
      }
    } catch {
      // noop
    }
    return null;
  }

  function clearStoredPalette() {
    // Material scopes the key by pathname: "<scope.pathname>.__palette".
    // We clear any key ending with ".__palette" so it works across locales.
    try {
      for (const k of Object.keys(localStorage)) {
        if (k.endsWith(".__palette")) localStorage.removeItem(k);
      }
    } catch {
      // noop
    }
  }

  function applyPaletteFromInput(input) {
    if (!input) return;
    const body = document.body;
    if (!body) return;

    const media = input.getAttribute("data-md-color-media");
    const scheme = input.getAttribute("data-md-color-scheme");
    const primary = input.getAttribute("data-md-color-primary");
    const accent = input.getAttribute("data-md-color-accent");

    if (media) body.setAttribute("data-md-color-media", media);
    if (scheme) body.setAttribute("data-md-color-scheme", scheme);
    if (primary) body.setAttribute("data-md-color-primary", primary);
    if (accent) body.setAttribute("data-md-color-accent", accent);
  }

  function applySystemPaletteNow() {
    // Keep Material unpinned and apply current OS preference live.
    clearStoredPalette();
    const mode = SYSTEM_MQL && SYSTEM_MQL.matches ? "dark" : "light";
    applyPaletteFromInput(findPaletteInput(mode));
    setTimeout(updateAnchorIcon, 0);
  }

  function findPaletteInput(mode) {
    const form = getPaletteForm();
    if (!form) return null;
    if (mode === "light") {
      return form.querySelector("[data-md-color-media='(prefers-color-scheme: light)']")
        || form.querySelector("[data-md-color-scheme='default']");
    }
    if (mode === "dark") {
      return form.querySelector("[data-md-color-media='(prefers-color-scheme: dark)']")
        || form.querySelector("[data-md-color-scheme='slate']");
    }
    return null;
  }

  function applyMode(mode) {
    setSelectedMode(mode);
    if (mode === "system") {
      applySystemPaletteNow();
      return;
    }

    const input = findPaletteInput(mode);
    if (input) {
      input.click();
      // Material updates DOM attributes and localStorage; refresh icon after that.
      setTimeout(updateAnchorIcon, 0);
      return;
    }

    // Fallback: if the palette inputs are not present for any reason,
    // clear preference and let OS decide rather than getting stuck.
    clearStoredPalette();
    window.location.reload();
  }

  function iconSvg(kind) {
    // Keep icons inline, no dependencies.
    if (kind === "dark") {
      // Moon with small plus (similar to screenshot)
      return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
        '<path d="M12 2a9 9 0 0 0 0 18 9.1 9.1 0 0 0 7.7-4.2 8 8 0 0 1-9.5-9.5A9.1 9.1 0 0 0 12 2m8 1v2h2v2h-2v2h-2V7h-2V5h2V3z"/>' +
        "</svg>"
      );
    }
    if (kind === "light") {
      // Sun
      return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
        '<path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.5 4.9 4.9 3.5 7 5.6 5.6 7zM17 18.4l1.4-1.4 2.1 2.1-1.4 1.4zM1 11h3v2H1zm19 0h3v2h-3zM3.5 19.1 5.6 17 7 18.4l-2.1 2.1zM17 5.6 19.1 3.5 20.5 4.9 18.4 7z"/>' +
        "</svg>"
      );
    }
    // System: split circle
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
      '<path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20m1 2.1A8 8 0 0 1 13 19.9V4.1z"/>' +
      "</svg>"
    );
  }

  let menu = null;
  let anchorBtn = null;
  let lastMode = null;
  let systemListenerAttached = false;

  function closeMenu() {
    if (!menu) return;
    menu.remove();
    menu = null;
    document.removeEventListener("mousedown", onDocMouseDown, true);
    document.removeEventListener("keydown", onDocKeyDown, true);
  }

  function onDocMouseDown(e) {
    if (!menu) return;
    const target = e.target;
    if (target instanceof Node) {
      if (menu.contains(target)) return;
      if (anchorBtn && anchorBtn.contains(target)) return;
    }
    closeMenu();
  }

  function onDocKeyDown(e) {
    if (e.key === "Escape") closeMenu();
  }

  function positionMenu() {
    if (!menu || !anchorBtn) return;
    const r = anchorBtn.getBoundingClientRect();
    const top = Math.min(window.innerHeight - 8, Math.max(8, r.bottom + 10));
    // Align right edge of menu with right edge of button for a compact look.
    menu.style.top = `${top}px`;
    menu.style.left = `${Math.min(window.innerWidth - 8, Math.max(8, r.right))}px`;
    menu.style.transform = "translateX(-100%)";
  }

  function buildMenu() {
    const m = el("div", { class: "dra-palette-menu", role: "menu" });

    const modes = [
      { id: "dark", label: t("dark") },
      { id: "light", label: t("light") },
      { id: "system", label: t("system_long") }
    ];

    const active = getSelectedMode();
    for (const mode of modes) {
      const b = el("button", {
        type: "button",
        class: "dra-palette-item",
        role: "menuitemradio",
        "aria-label": mode.label,
        "aria-pressed": active === mode.id ? "true" : "false"
      });
      b.innerHTML = iconSvg(mode.id);
      b.addEventListener("click", () => {
        closeMenu();
        applyMode(mode.id);
      });
      m.appendChild(b);
    }

    return m;
  }

  function updateAnchorIcon() {
    if (!anchorBtn) return;
    const modeNow = getSelectedMode();
    if (modeNow === lastMode) return;
    lastMode = modeNow;
    anchorBtn.innerHTML = iconSvg(modeNow === "system" ? "system" : modeNow);
    anchorBtn.setAttribute("aria-label", t("button"));
    anchorBtn.setAttribute("title", t("button"));
  }

  function toggleMenu() {
    if (menu) {
      closeMenu();
      return;
    }
    menu = buildMenu();
    document.body.appendChild(menu);
    positionMenu();

    document.addEventListener("mousedown", onDocMouseDown, true);
    document.addEventListener("keydown", onDocKeyDown, true);
    window.addEventListener("resize", positionMenu, { passive: true, once: true });
  }

  function ensureControl() {
    injectStylesOnce();

    const form = getPaletteForm();
    if (!form) return;

    // Ensure we have a stable selection baseline.
    // If nothing was stored yet, initialize it from current Material state.
    try {
      if (!localStorage.getItem(DRA_MODE_KEY)) setSelectedMode(getSelectedMode());
    } catch {
      // noop
    }

    // Avoid double-inject on SPA navigations.
    if (form.dataset.draPaletteMenu === "1") {
      updateAnchorIcon();
      return;
    }
    form.dataset.draPaletteMenu = "1";

    anchorBtn = el("button", { type: "button", class: "md-header__button md-icon" });
    anchorBtn.addEventListener("click", toggleMenu);
    form.appendChild(anchorBtn);

    // Keep in sync when the underlying palette changes (e.g. via keyboard, other UI, etc.)
    form.addEventListener(
      "change",
      () => {
        // If something else changes the palette, treat that as an explicit selection.
        // We infer from the scheme that Material applied.
        try {
          const applied = String(document.body && document.body.getAttribute("data-md-color-scheme") || "");
          if (applied === "slate") setSelectedMode("dark");
          else if (applied === "default") setSelectedMode("light");
        } catch {
          // noop
        }
        updateAnchorIcon();
      },
      { passive: true }
    );

    updateAnchorIcon();

    // If user chose "System", keep the palette synced while the page stays open.
    // Material doesn't reliably live-update on OS changes once a palette was ever stored,
    // so we enforce it here.
    if (!systemListenerAttached && SYSTEM_MQL) {
      const onChange = () => {
        try {
          if (getSelectedMode() !== "system") return;
        } catch {
          return;
        }
        applySystemPaletteNow();
      };
      if (typeof SYSTEM_MQL.addEventListener === "function") SYSTEM_MQL.addEventListener("change", onChange);
      else if (typeof SYSTEM_MQL.addListener === "function") SYSTEM_MQL.addListener(onChange);
      systemListenerAttached = true;
    }

    // Some OS/browser combos only reflect the new scheme after the tab regains focus.
    // This keeps "System" consistent even if the change happened while the page was backgrounded.
    window.addEventListener(
      "focus",
      () => {
        try {
          if (getSelectedMode() !== "system") return;
        } catch {
          return;
        }
        applySystemPaletteNow();
      },
      { passive: true }
    );
    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState !== "visible") return;
        try {
          if (getSelectedMode() !== "system") return;
        } catch {
          return;
        }
        applySystemPaletteNow();
      },
      { passive: true }
    );
  }

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(() => {
      // Close menu on page changes to avoid stale positioning.
      closeMenu();
      ensureControl();
    });
  } else {
    document.addEventListener("DOMContentLoaded", ensureControl);
  }
})();
