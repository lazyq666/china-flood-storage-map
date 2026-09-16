/* Mobile map layout behavior. */
(function () {
  const body = document.body;
  const sidebar = document.querySelector(".sidebar");
  const mapStage = document.querySelector(".map-stage");
  const detailPanel = document.getElementById("detailPanel");
  if (!sidebar || !mapStage || !detailPanel) return;

  body.classList.add("mobile-sheet-layout");
  body.dataset.sheetState = "medium";

  function addMapBrand() {
    const brand = document.createElement("div");
    brand.className = "mobile-map-brand";
    brand.innerHTML = '<img src="./logo.svg" alt=""><span>全国蓄滞洪区</span>';
    mapStage.append(brand);
  }

  function addSheetHandle() {
    const handle = document.createElement("div");
    handle.className = "mobile-sheet-handle";
    handle.setAttribute("role", "button");
    handle.setAttribute("tabindex", "0");
    handle.setAttribute("aria-label", "拖动或轻点调整目录高度");
    sidebar.prepend(handle);
    return handle;
  }

  function sheetHeightForState(state) {
    if (state === "peek") return 112;
    if (state === "expanded") return window.innerHeight - 22;
    return Math.round(window.innerHeight * 0.45);
  }

  function setSheetState(state) {
    body.dataset.sheetState = state;
    body.style.removeProperty("--mobile-sheet-height");
  }

  function bindCatalogDrag(handle) {
    let drag = null;
    let suppressClick = false;

    const endDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const height = sidebar.getBoundingClientRect().height;
      drag = null;
      body.classList.remove("is-dragging-sheet");
      body.style.removeProperty("--mobile-sheet-height");
      const closest = ["peek", "medium", "expanded"]
        .map((state) => [state, Math.abs(height - sheetHeightForState(state))])
        .sort((first, second) => first[1] - second[1])[0][0];
      setSheetState(closest);
    };

    handle.addEventListener("pointerdown", (event) => {
      suppressClick = false;
      drag = {
        pointerId: event.pointerId,
        startY: event.clientY,
        startHeight: sidebar.getBoundingClientRect().height
      };
      body.classList.add("is-dragging-sheet");
      handle.setPointerCapture(event.pointerId);
    });
    handle.addEventListener("pointermove", (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      if (Math.abs(event.clientY - drag.startY) > 6) suppressClick = true;
      const nextHeight = Math.max(
        112,
        Math.min(window.innerHeight - 22, drag.startHeight - (event.clientY - drag.startY))
      );
      body.style.setProperty("--mobile-sheet-height", `${nextHeight}px`);
    });
    handle.addEventListener("pointerup", endDrag);
    handle.addEventListener("pointercancel", endDrag);
    handle.addEventListener("click", () => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }
      const current = body.dataset.sheetState;
      setSheetState(current === "peek" ? "medium" : current === "medium" ? "expanded" : "medium");
    });
    handle.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      handle.click();
    });
  }

  function bindDetailDrag() {
    const header = detailPanel.querySelector(".detail-header");
    if (!header) return;
    let drag = null;

    new MutationObserver(() => {
      const open = detailPanel.classList.contains("open");
      body.classList.toggle("detail-is-open", open);
      if (open) body.style.setProperty("--mobile-detail-height", `${Math.round(window.innerHeight * 0.45)}px`);
    }).observe(detailPanel, { attributes: true, attributeFilter: ["class"] });

    header.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, a")) return;
      drag = {
        pointerId: event.pointerId,
        startY: event.clientY,
        startHeight: detailPanel.getBoundingClientRect().height
      };
      body.classList.add("is-dragging-sheet");
      header.setPointerCapture(event.pointerId);
    });
    header.addEventListener("pointermove", (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const height = Math.max(
        260,
        Math.min(window.innerHeight - 14, drag.startHeight - (event.clientY - drag.startY))
      );
      body.style.setProperty("--mobile-detail-height", `${height}px`);
    });
    const endDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      drag = null;
      body.classList.remove("is-dragging-sheet");
      const expanded = detailPanel.getBoundingClientRect().height / window.innerHeight > 0.76;
      const height = expanded ? window.innerHeight - 14 : Math.round(window.innerHeight * 0.45);
      body.style.setProperty("--mobile-detail-height", `${height}px`);
    };
    header.addEventListener("pointerup", endDrag);
    header.addEventListener("pointercancel", endDrag);
  }

  addMapBrand();
  bindCatalogDrag(addSheetHandle());
  bindDetailDrag();
})();
