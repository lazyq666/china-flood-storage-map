/* THROWAWAY mobile layout prototype. Activate with ?prototype=mobile&variant=A|B|C. */
(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("prototype") !== "mobile") return;

  const variants = {
    A: { label: "A · 40% 地图卡片", medium: 0.4 },
    B: { label: "B · 45% 地图优先", medium: 0.45 },
    C: { label: "C · 目录优先", medium: 0.48 }
  };
  const requestedVariant = String(params.get("variant") || "A").toUpperCase();
  const currentVariant = variants[requestedVariant] ? requestedVariant : "A";
  const body = document.body;
  const sidebar = document.querySelector(".sidebar");
  const mapStage = document.querySelector(".map-stage");
  const detailPanel = document.getElementById("detailPanel");
  const headingCount = document.getElementById("searchCount");

  body.classList.add("mobile-sheet-prototype");
  body.dataset.mobileVariant = currentVariant;
  body.dataset.sheetState = "medium";

  function addMapScaffold() {
    const placeholder = document.createElement("div");
    placeholder.className = "mobile-map-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.innerHTML = `
      <svg viewBox="0 0 390 844" preserveAspectRatio="none">
        <path class="road" d="M-20 168C72 190 124 282 222 276s126-89 196-70M22 18c65 102 54 203 137 282s158 96 242 61M-10 525c92-56 161-45 221 13s111 72 202 30"/>
        <path class="river" d="M305-30c-42 94-5 160-70 224s-121 85-101 159 113 85 91 187-109 108-93 233"/>
        <path class="area" d="M91 244c26-34 79-40 113-11 24 21 23 64-5 83-30 20-79 15-104-12-15-17-17-43-4-60Z"/>
        <path class="area" d="M234 376c28-23 75-20 96 11 18 28 7 66-23 80-34 16-78 2-91-31-9-22-2-46 18-60Z"/>
        <g class="pin" transform="translate(178 284)"><circle r="13"/><circle r="6"/></g>
        <g class="pin" transform="translate(274 418)"><circle r="13"/><circle r="6"/></g>
      </svg>`;
    mapStage.prepend(placeholder);

    const brand = document.createElement("div");
    brand.className = "mobile-map-brand";
    brand.innerHTML = '<img src="./logo.svg" alt=""><span>全国蓄滞洪区</span>';
    mapStage.append(brand);
  }

  function addSheetChrome() {
    const handle = document.createElement("div");
    handle.className = "mobile-sheet-handle";
    handle.setAttribute("role", "button");
    handle.setAttribute("tabindex", "0");
    handle.setAttribute("aria-label", "拖动或轻点调整目录高度");
    sidebar.prepend(handle);

    const heading = document.createElement("div");
    heading.className = "mobile-sheet-heading";
    heading.innerHTML = `<strong>蓄滞洪区</strong><span>${headingCount?.textContent || "共 97 处"}</span>`;
    handle.after(heading);

    if (headingCount && window.MutationObserver) {
      new MutationObserver(() => {
        heading.querySelector("span").textContent = headingCount.textContent;
      }).observe(headingCount, { childList: true, characterData: true, subtree: true });
    }

    return handle;
  }

  function setVariant(nextVariant) {
    const url = new URL(window.location.href);
    url.searchParams.set("prototype", "mobile");
    url.searchParams.set("variant", nextVariant);
    window.location.href = url.toString();
  }

  function addSwitcher() {
    const keys = Object.keys(variants);
    const switcher = document.createElement("nav");
    switcher.className = "mobile-prototype-switcher";
    switcher.setAttribute("aria-label", "移动端布局方案");
    switcher.innerHTML = `
      <button type="button" data-direction="-1" aria-label="上一个方案">‹</button>
      <span class="mobile-prototype-label">${variants[currentVariant].label}</span>
      <button type="button" data-direction="1" aria-label="下一个方案">›</button>`;
    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-direction]");
      if (!button) return;
      const index = keys.indexOf(currentVariant);
      const nextIndex = (index + Number(button.dataset.direction) + keys.length) % keys.length;
      setVariant(keys[nextIndex]);
    });
    document.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      const target = event.target;
      if (target instanceof Element && (target.closest("input, textarea, [contenteditable]") || target.isContentEditable)) return;
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      const index = keys.indexOf(currentVariant);
      setVariant(keys[(index + direction + keys.length) % keys.length]);
    });
    body.append(switcher);
  }

  function sheetHeightForState(state) {
    if (state === "peek") return 112;
    if (state === "expanded") return window.innerHeight - 22;
    return Math.round(window.innerHeight * variants[currentVariant].medium);
  }

  function setSheetState(state) {
    body.dataset.sheetState = state;
    body.style.removeProperty("--mobile-sheet-height");
  }

  function bindDrag(handle) {
    let drag = null;
    let suppressClick = false;
    const onPointerMove = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      if (Math.abs(event.clientY - drag.startY) > 6) suppressClick = true;
      const nextHeight = Math.max(112, Math.min(window.innerHeight - 22, drag.startHeight - (event.clientY - drag.startY)));
      body.style.setProperty("--mobile-sheet-height", `${nextHeight}px`);
    };
    const endDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const height = sidebar.getBoundingClientRect().height;
      drag = null;
      body.classList.remove("is-dragging-sheet");
      body.style.removeProperty("--mobile-sheet-height");
      const peek = sheetHeightForState("peek");
      const medium = sheetHeightForState("medium");
      const expanded = sheetHeightForState("expanded");
      const closest = [
        ["peek", Math.abs(height - peek)],
        ["medium", Math.abs(height - medium)],
        ["expanded", Math.abs(height - expanded)]
      ].sort((a, b) => a[1] - b[1])[0][0];
      setSheetState(closest);
    };
    handle.addEventListener("pointerdown", (event) => {
      suppressClick = false;
      drag = { pointerId: event.pointerId, startY: event.clientY, startHeight: sidebar.getBoundingClientRect().height };
      body.classList.add("is-dragging-sheet");
      handle.setPointerCapture(event.pointerId);
    });
    handle.addEventListener("pointermove", onPointerMove);
    handle.addEventListener("pointerup", endDrag);
    handle.addEventListener("pointercancel", endDrag);
    handle.addEventListener("click", () => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }
      const next = body.dataset.sheetState === "peek" ? "medium" : body.dataset.sheetState === "medium" ? "expanded" : "medium";
      setSheetState(next);
    });
    handle.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      handle.click();
    });
  }

  function bindDetailState() {
    if (!detailPanel || !window.MutationObserver) return;
    new MutationObserver(() => {
      const open = detailPanel.classList.contains("open");
      body.classList.toggle("detail-is-open", open);
      if (!open) return;
      const ratio = currentVariant === "B" ? .45 : currentVariant === "A" ? .58 : 1;
      const base = currentVariant === "C" ? window.innerHeight - 14 : Math.round(window.innerHeight * ratio);
      body.style.setProperty("--mobile-detail-height", `${Math.min(window.innerHeight - 14, base)}px`);
    }).observe(detailPanel, { attributes: true, attributeFilter: ["class"] });

    let startY = 0;
    let startHeight = 0;
    let dragging = false;
    const header = detailPanel.querySelector(".detail-header");
    header?.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, a")) return;
      dragging = true;
      startY = event.clientY;
      startHeight = detailPanel.getBoundingClientRect().height;
      body.classList.add("is-dragging-sheet");
      header.setPointerCapture(event.pointerId);
    });
    header?.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const height = Math.max(260, Math.min(window.innerHeight - 14, startHeight - (event.clientY - startY)));
      body.style.setProperty("--mobile-detail-height", `${height}px`);
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      body.classList.remove("is-dragging-sheet");
      const ratio = detailPanel.getBoundingClientRect().height / window.innerHeight;
      const height = ratio > .76 ? window.innerHeight - 14 : Math.round(window.innerHeight * (currentVariant === "B" ? .45 : .58));
      body.style.setProperty("--mobile-detail-height", `${height}px`);
    };
    header?.addEventListener("pointerup", end);
    header?.addEventListener("pointercancel", end);
  }

  addMapScaffold();
  const handle = addSheetChrome();
  addSwitcher();
  bindDrag(handle);
  bindDetailState();
})();
