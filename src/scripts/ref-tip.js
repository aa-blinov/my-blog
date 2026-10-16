// Всплывашка источника над чипом [n]: описание из data-tip и сайт. Только там, где есть наведение; на телефоне тап просто открывает источник
(() => {
  if (!document.querySelector(".content a.ref[data-tip]")) return;
  const tip = document.createElement("div");
  tip.className = "ref-tip";
  tip.id = "ref-tip";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  document.body.append(tip);

  const GAP = 6;
  const EDGE = 16;
  let current = null;

  const show = (a) => {
    current = a;
    tip.textContent = a.dataset.tip;
    const host = document.createElement("span");
    host.className = "ref-tip-host";
    host.textContent = new URL(a.href).hostname.replace(/^www\./, "");
    tip.append(host);
    tip.hidden = false;
    a.setAttribute("aria-describedby", tip.id);

    // Под чипом, а если внизу не влезает, над ним; по горизонтали не вылезает за экран
    const r = a.getBoundingClientRect();
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    const left = Math.min(Math.max(EDGE, r.left + r.width / 2 - w / 2), window.innerWidth - EDGE - w);
    const below = r.bottom + GAP + h <= window.innerHeight;
    tip.style.left = `${left + window.scrollX}px`;
    tip.style.top = `${(below ? r.bottom + GAP : r.top - GAP - h) + window.scrollY}px`;
  };

  const hide = () => {
    if (!current) return;
    current.removeAttribute("aria-describedby");
    current = null;
    tip.hidden = true;
  };

  const canHover = window.matchMedia("(hover: hover)").matches;
  const refOf = (e) => e.target.closest?.(".content a.ref[data-tip]");
  if (canHover) {
    document.addEventListener("mouseover", (e) => { const a = refOf(e); if (a && a !== current) show(a); });
    document.addEventListener("mouseout", (e) => { if (refOf(e) && !e.relatedTarget?.closest?.(".content a.ref")) hide(); });
  }
  document.addEventListener("focusin", (e) => { const a = refOf(e); if (a) show(a); });
  document.addEventListener("focusout", (e) => { if (refOf(e)) hide(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
  window.addEventListener("scroll", hide, { passive: true });
  window.addEventListener("resize", hide);
})();
