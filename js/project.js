/* ============================================================
   project.js — project.html 에서 주소의 ?id=... 에 해당하는 프로젝트를
   data.js 에서 찾아 상세 내용을 그립니다. 내용 수정은 js/data.js 에서 하세요.
   ============================================================ */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const P = DATA.profile;

  $("#navName").textContent = P.nameEn || P.name;

  const id = new URLSearchParams(location.search).get("id");
  const projects = DATA.projects || [];
  const idx = projects.findIndex((p) => p.id === id);
  const p = projects[idx];
  const box = $("#detail");

  if (!p) {
    box.hidden = true;
    $("#notFound").hidden = false;
    document.title = `프로젝트를 찾을 수 없음 | ${P.name}`;
    return;
  }

  document.title = `${p.title} | ${P.name}`;
  const typeLabel = { paper: "📄 Paper", project: "🛠️ Project" };

  const imgs = (p.images || []).map((im) => (typeof im === "string" ? { src: im, caption: "" } : im)).filter((im) => im && im.src);
  const stats = p.stats || [];
  const sections = p.sections && p.sections.length ? p.sections : (p.detail && p.detail.length ? p.detail.map((t) => ({ text: t })) : []);

  const sectionHTML = (sec) => `
    <section class="detail-section">
      ${sec.heading ? `<h2 class="detail-sub">${esc(sec.heading)}</h2>` : ""}
      ${sec.text ? `<p>${esc(sec.text)}</p>` : ""}
      ${sec.items && sec.items.length ? `<ul class="detail-list">${sec.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
    </section>`;

  box.classList.add(`bg-${p.color || "cream"}`);
  box.innerHTML = `
    <div class="project-head">
      <span class="project-type ${esc(p.type)}">${typeLabel[p.type] || esc(p.type)}</span>
      <span class="project-period">${esc(p.period)}</span>
    </div>
    <h1 class="detail-title">${esc(p.title)}</h1>
    ${imgs.length ? `
      <figure class="detail-hero">
        <img src="${esc(imgs[0].src)}" alt="${esc(imgs[0].caption || p.title + " 아키텍처")}" />
      </figure>` : ""}
    ${p.subtitle ? `<p class="detail-subtitle">${esc(p.subtitle)}</p>` : ""}
    <div class="project-venue">${esc(p.venue)}${p.role ? `<span class="role">${esc(p.role)}</span>` : ""}</div>

    <div class="detail-summary">${(Array.isArray(p.summary) ? p.summary : [p.summary]).filter(Boolean).map((t) => `<p>${esc(t)}</p>`).join("")}</div>

    ${stats.length ? `<div class="detail-stats">${stats.map((st) => `
      <div class="stat">
        <strong>${esc(st.value)}</strong>
        <span>${esc(st.label)}</span>
        ${st.sub ? `<small>${esc(st.sub)}</small>` : ""}
      </div>`).join("")}</div>` : ""}

    ${sections.map(sectionHTML).join("")}

    ${imgs.length > 1 ? `<div class="detail-images">${imgs.slice(1).map((im) => `
      <figure><img src="${esc(im.src)}" alt="${esc(im.caption || p.title)}" loading="lazy" /></figure>`).join("")}</div>` : ""}

    ${p.links && p.links.length ? `
      <h2 class="detail-sub">링크</h2>
      <div class="project-links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}`;

  /* 이미지가 아직 없으면 figure 를 조용히 숨김 */
  box.querySelectorAll("img").forEach((img) => img.addEventListener("error", () => { const f = img.closest("figure"); if (f) f.hidden = true; }));

  /* 모바일 메뉴 */
  const burger = $("#navBurger"), links = $(".nav-links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
})();
