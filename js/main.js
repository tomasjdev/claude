// Horizonte Inmobiliaria — lógica compartida del sitio

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initFooterYear();
  initNewsletterForm();
  markActiveNavLink();
});

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function markActiveNavLink() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });
}

function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function initNewsletterForm() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = form.querySelector("input");
    if (input.value.trim()) {
      input.value = "";
      input.placeholder = "¡Gracias por suscribirte!";
    }
  });
}

/* Íconos SVG reutilizables */
const ICONS = {
  bed: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 18h18"/><path d="M5 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/></svg>`,
  bath: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z"/><path d="M4 12V6a2 2 0 0 1 2-2h1"/></svg>`,
  area: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M3 9h18" stroke-opacity="0"/></svg>`,
  pin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
};

function propertyCardHTML(p) {
  const tagLabel = p.type === "renta" ? "En renta" : "En venta";
  return `
  <article class="property-card">
    <div class="property-media">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <span class="property-tag ${p.type}">${tagLabel}</span>
      <span class="property-price">${formatPrice(p)}</span>
    </div>
    <div class="property-body">
      <h3><a href="propiedad.html?id=${p.id}">${p.title}</a></h3>
      <div class="property-location">${ICONS.pin} ${p.location}</div>
      <div class="property-specs">
        <span>${ICONS.bed} ${p.bedrooms} rec.</span>
        <span>${ICONS.bath} ${p.bathrooms} baños</span>
        <span>${p.area} m²</span>
      </div>
      <a class="property-link" href="propiedad.html?id=${p.id}">Ver detalles &rarr;</a>
    </div>
  </article>`;
}

function renderProperties(container, list) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div class="empty-state">No se encontraron propiedades con los filtros seleccionados.</div>`;
    return;
  }
  container.innerHTML = list.map(propertyCardHTML).join("");
}
