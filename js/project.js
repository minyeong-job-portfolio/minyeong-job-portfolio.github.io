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

  const paragraphs = p.detail && p.detail.length ? p.detail : [p.summary];

  box.classList.add(`bg-${p.color || "cream"}`);
  box.innerHTML = `
    <div class="project-head">
      <span class="project-type ${esc(p.type)}">${typeLabel[p.type] || esc(p.type)}</span>
      <span class="project-period">${esc(p.period)}</span>
    </div>
    <h1 class="detail-title">${esc(p.title)}</h1>
    <div class="project-venue">${esc(p.venue)}${p.role ? `<span class="role">${esc(p.role)}</span>` : ""}</div>

    ${p.tags && p.tags.length ? `<div class="project-tags">${p.tags.map((t) => `<span class="project-tag">#${esc(t)}</span>`).join("")}</div>` : ""}

    <div class="detail-body">
      ${paragraphs.map((t) => `<p>${esc(t)}</p>`).join("")}
    </div>

    ${p.images && p.images.length ? `<div class="detail-images">${p.images.map((src) => `<img src="${esc(src)}" alt="${esc(p.title)} 이미지" loading="lazy" />`).join("")}</div>` : ""}

    ${p.highlights && p.highlights.length ? `
      <h2 class="detail-sub">주요 성과 · 역할</h2>
      <ul class="project-highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}

    ${p.links && p.links.length ? `
      <h2 class="detail-sub">링크</h2>
      <div class="project-links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}`;

  /* 모바일 메뉴 */
  const burger = $("#navBurger"), links = $(".nav-links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
})();
