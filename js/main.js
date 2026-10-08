/* ============================================================
   main.js — data.js 의 내용을 화면에 그리고, 인터랙션을 담당합니다.
   내용 수정은 js/data.js 에서 하세요. 이 파일은 건드릴 필요가 없습니다.
   ============================================================ */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const P = DATA.profile;

  /* ---------- 기본 정보 ---------- */
  document.title = `${P.name} | Portfolio`;
  $("#navName").textContent = P.nameEn || P.name;
  $("#heroName").textContent = P.name;
  $("#heroTagline").textContent = P.tagline;
  $("#footerName").textContent = P.nameEn || P.name;
  $("#year").textContent = new Date().getFullYear();

  const avatar = $("#avatar");
  if (P.photo) avatar.innerHTML = `<img src="${esc(P.photo)}" alt="${esc(P.name)} 프로필 사진" />`;
  else avatar.textContent = (P.nameEn || P.name).trim().charAt(0).toUpperCase();

  /* ---------- 역할 문구 회전 ---------- */
  const rotator = $("#roleRotator");
  const roles = P.roles && P.roles.length ? P.roles : ["AI Researcher"];
  rotator.innerHTML = [...roles, roles[0]].map((r) => `<span>${esc(r)}</span>`).join("");
  let roleIdx = 0;
  setInterval(() => {
    roleIdx++;
    rotator.style.transform = `translateY(-${roleIdx * 1.18}em)`;
    if (roleIdx === roles.length) {
      setTimeout(() => {
        rotator.style.transition = "none";
        rotator.style.transform = "translateY(0)";
        roleIdx = 0;
        requestAnimationFrame(() => requestAnimationFrame(() => (rotator.style.transition = "")));
      }, 650);
    }
  }, 2400);

  /* ---------- 스티커 ---------- */
  $("#stickers").innerHTML = (DATA.stickers || [])
    .slice(0, 4)
    .map((s) => `<span class="sticker sticker-${esc(s.color || "cream")}"><span>${esc(s.emoji)}</span>${esc(s.text)}</span>`)
    .join("");

  /* ---------- About ---------- */
  $("#aboutIntro").innerHTML = (P.intro || []).map((t) => `<p>${esc(t)}</p>`).join("");
  const meta = [];
  if (P.location) meta.push(`<li>📍 ${esc(P.location)}</li>`);
  if (P.email) meta.push(`<li>✉️ <a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>`);
  if (P.github) meta.push(`<li>🐙 <a href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a></li>`);
  if (P.linkedin) meta.push(`<li>💼 <a href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>`);
  if (P.resume) meta.push(`<li>📎 <a href="${esc(P.resume)}" target="_blank" rel="noopener">이력서 (PDF)</a></li>`);
  $("#aboutMeta").innerHTML = meta.join("");

  $("#educationList").innerHTML = (DATA.education || [])
    .map((e) => `<li><strong>${esc(e.school)}</strong><span class="sub">${esc(e.major)}</span>${e.note ? `<span class="sub">${esc(e.note)}</span>` : ""}${e.period ? `<span class="period">${esc(e.period)}</span>` : ""}</li>`)
    .join("");

  const listOrEmpty = (arr, render, emptyText) => (arr && arr.length ? arr.map(render).join("") : `<li class="empty">${emptyText}</li>`);

  $("#certList").innerHTML = listOrEmpty(DATA.certificates, (c) => `<li><div><strong>${esc(c.name)}</strong><span class="sub">${esc(c.org)}</span></div><span class="period">${esc(c.date)}</span></li>`, "준비 중이에요");
  $("#langList").innerHTML = listOrEmpty(DATA.languages, (l) => `<li><div><strong>${esc(l.name)}</strong>${l.date ? `<span class="sub">${esc(l.date)}</span>` : ""}</div><span class="score">${esc(l.score)}</span></li>`, "준비 중이에요");

  if (DATA.awards && DATA.awards.length) {
    $("#awardList").innerHTML = DATA.awards.map((a) => `<li><div><strong>${esc(a.name)}</strong><span class="sub">${esc(a.org)}</span></div><span class="period">${esc(a.date)}</span></li>`).join("");
  } else {
    $("#awardsCard").remove();
  }

  /* ---------- Skills ---------- */
  $("#skillsGrid").innerHTML = (DATA.skills || [])
    .map((g, i) => `
      <div class="card skill-card card-${esc(g.color || "cream")} reveal" data-delay="${(i % 4) + 1}">
        <h3 class="card-title">${esc(g.group)} <span class="skill-count">${g.items.length}</span></h3>
        <div class="skill-tags">${g.items.map((s) => `<span class="skill-tag">${esc(s)}</span>`).join("")}</div>
      </div>`)
    .join("");

  const allSkills = (DATA.skills || []).flatMap((g) => g.items);
  const marqueeItems = [...allSkills, ...allSkills].map((s) => `<span class="marquee-item">${esc(s)}</span>`).join("");
  $("#marqueeTrack").innerHTML = marqueeItems;

  /* ---------- Projects ---------- */
  const typeLabel = { paper: "📄 Paper", project: "🛠️ Project" };
  const projectCard = (p, featured, i) => `
    <article class="card project ${featured ? "project-featured tilt" : ""} bg-${esc(p.color || "cream")} reveal" data-type="${esc(p.type)}" data-delay="${(i % 3) + 1}">
      <div class="project-head">
        <span class="project-type ${esc(p.type)}">${typeLabel[p.type] || esc(p.type)}</span>
        <span class="project-period">${esc(p.period)}</span>
      </div>
      <h3 class="project-title">${esc(p.title)}</h3>
      <div class="project-venue">${esc(p.venue)}${p.role ? `<span class="role">${esc(p.role)}</span>` : ""}</div>
      <p class="project-summary">${esc(p.summary)}</p>
      ${p.highlights && p.highlights.length ? `<ul class="project-highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
      ${p.tags && p.tags.length ? `<div class="project-tags">${p.tags.map((t) => `<span class="project-tag">#${esc(t)}</span>`).join("")}</div>` : ""}
      ${p.links && p.links.length ? `<div class="project-links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
    </article>`;

  const projects = DATA.projects || [];
  $("#featuredGrid").innerHTML = projects.filter((p) => p.featured).map((p, i) => projectCard(p, true, i)).join("");
  $("#projectsGrid").innerHTML = projects.filter((p) => !p.featured).map((p, i) => projectCard(p, false, i)).join("");

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    document.querySelectorAll("#filters .chip").forEach((c) => c.classList.toggle("is-active", c === btn));
    const f = btn.dataset.filter;
    document.querySelectorAll(".project").forEach((card) => {
      const show = f === "all" || card.dataset.type === f;
      card.classList.toggle("is-hidden", !show);
      if (show) { card.classList.remove("is-visible"); requestAnimationFrame(() => card.classList.add("is-visible")); }
    });
  });

  /* ---------- Contact ---------- */
  const cl = [];
  if (P.email) cl.push(`<a class="btn btn-accent" href="mailto:${esc(P.email)}">✉️ 메일 보내기</a>`);
  if (P.github) cl.push(`<a class="btn btn-ghost" href="${esc(P.github)}" target="_blank" rel="noopener">GitHub ↗</a>`);
  if (P.linkedin) cl.push(`<a class="btn btn-ghost" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
  if (P.resume) cl.push(`<a class="btn btn-ghost" href="${esc(P.resume)}" target="_blank" rel="noopener">이력서 다운로드</a>`);
  $("#contactLinks").innerHTML = cl.join("");
  if (P.resume) { const r = $("#navResume"); r.href = P.resume; r.textContent = "Resume"; r.target = "_blank"; }

  /* ---------- 스크롤 리빌 ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- 진행바 + 네비 활성화 ---------- */
  const bar = $("#progressBar");
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const sections = navLinks.map((a) => document.getElementById(a.dataset.nav)).filter(Boolean);
  const onScroll = () => {
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    const y = window.scrollY + window.innerHeight * 0.4;
    let current = null;
    sections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
    navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 모바일 메뉴 ---------- */
  const burger = $("#navBurger"), links = $(".nav-links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); } });

  /* ---------- 커서 글로우 + 카드 틸트 (데스크톱만) ---------- */
  const fine = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (fine) {
    const glow = $("#cursorGlow");
    window.addEventListener("mousemove", (e) => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; }, { passive: true });

    document.addEventListener("mousemove", (e) => {
      const el = e.target.closest(".tilt");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
    });
    document.addEventListener("mouseout", (e) => {
      const el = e.target.closest(".tilt");
      if (el && !el.contains(e.relatedTarget)) el.style.transform = "";
    });
  }
})();
