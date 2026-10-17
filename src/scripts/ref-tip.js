// Всплывашка источника над чипом [n]: описание из data-tip и сайт.
// Мышь: по наведению. Клавиатура: по фокусу. Тач: первый тап показывает, второй по тому же чипу открывает источник
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
  const canHover = window.matchMedia("(hover: hover)").matches;
  let current = null;
  let pointerFocus = false; // фокус от касания не в счёт, иначе первый тап сразу открывал бы ссылку

  const place = () => {
    // Под чипом, а если внизу не влезает, над ним; по горизонтали не вылезает за экран
    const r = current.getBoundingClientRect();
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    const left = Math.min(Math.max(EDGE, r.left + r.width / 2 - w / 2), window.innerWidth - EDGE - w);
    const below = r.bottom + GAP + h <= window.innerHeight;
    tip.style.left = `${left + window.scrollX}px`;
    tip.style.top = `${(below ? r.bottom + GAP : r.top - GAP - h) + window.scrollY}px`;
  };

  const show = (a) => {
    if (current && current !== a) current.removeAttribute("aria-describedby");
    current = a;
    tip.textContent = a.dataset.tip;
    const host = document.createElement("span");
    host.className = "ref-tip-host";
    host.textContent = new URL(a.href).hostname.replace(/^www\./, "");
    tip.append(host);
    if (!canHover) {
      const hint = document.createElement("span");
      hint.className = "ref-tip-hint";
      hint.textContent = "ещё одно нажатие откроет источник";
      tip.append(hint);
    }
    tip.hidden = false;
    a.setAttribute("aria-describedby", tip.id);
    place();
  };

  const hide = () => {
    if (!current) return;
    current.removeAttribute("aria-describedby");
    current = null;
    tip.hidden = true;
  };

  const refOf = (e) => e.target.closest?.(".content a.ref[data-tip]");
  if (canHover) {
    document.addEventListener("mouseover", (e) => { const a = refOf(e); if (a && a !== current) show(a); });
    document.addEventListener("mouseout", (e) => {
      if (refOf(e) && !e.relatedTarget?.closest?.(".content a.ref") && document.activeElement !== current) hide();
    });
  } else {
    // На таче фокус ставится уже после отпускания пальца, поэтому флаг снимаем на клике, а не по таймеру
    document.addEventListener("pointerdown", () => { pointerFocus = true; }, true);
    document.addEventListener("pointercancel", () => { pointerFocus = false; }, true);
    document.addEventListener("click", (e) => {
      pointerFocus = false;
      const a = refOf(e);
      if (!a) { hide(); return; }
      if (a === current) return; // второй тап: обычный переход по ссылке
      e.preventDefault();
      show(a);
    });
  }
  document.addEventListener("focusin", (e) => { const a = refOf(e); if (a && !pointerFocus) show(a); });
  document.addEventListener("focusout", (e) => { if (refOf(e) && canHover) hide(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
  // Tab к чипу ниже экрана прокручивает страницу: чип в фокусе, всплывашка едет за ним, а не гаснет
  window.addEventListener("scroll", () => { if (!current) return; if (document.activeElement === current) place(); else hide(); }, { passive: true });
  window.addEventListener("resize", hide);
})();
