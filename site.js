const pages = [
  { key: 'inicio', label: 'Inicio', href: 'index.html' },
  { key: 'cursos', label: 'Cursos', href: 'cursos.html' },
  { key: 'nosotros', label: 'Nosotros', href: 'nosotros.html' },
  { key: 'profesores', label: 'Profesores', href: 'profesores.html' },
  { key: 'galeria', label: 'Galería', href: 'galeria.html' },
  { key: 'contacto', label: 'Contacto', href: 'contacto.html' }
];

const page = document.body.dataset.page || 'inicio';
const pageNumber = String(pages.findIndex(item => item.key === page) + 1).padStart(2, '0');
const nav = (className = '') => `<nav class="${className}" aria-label="Navegación principal">${pages.map(item => `<a href="${item.href}" ${item.key === page ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav>`;
const placeholder = (label, extra = '') => `<div class="placeholder ${extra}" role="img" aria-label="Espacio para ${label.toLowerCase()}"><span>${label}</span></div>`;
const sectionHead = (number, title, description = '', action = '') => `<div class="section-head"><div><p class="eyebrow">${number} / SECCIÓN</p><h2>${title}</h2>${description ? `<p class="section-intro">${description}</p>` : ''}</div>${action}</div>`;
const button = (text, href, secondary = false) => `<a class="button ${secondary ? 'button-secondary' : ''}" href="${href}">${text}<span aria-hidden="true">↗</span></a>`;
const cta = (title, copy, primaryText = 'Ir a contacto', primaryHref = 'contacto.html', secondaryText = '', secondaryHref = '') => `<section class="section cta-section" aria-label="Siguiente paso"><div><p class="eyebrow">SIGUIENTE PASO</p><h2>${title}</h2><p>${copy}</p></div><div class="button-row">${button(primaryText, primaryHref)}${secondaryText ? button(secondaryText, secondaryHref, true) : ''}</div></section>`;

function header() {
  if (page === 'inicio' || page === 'cursos') return window.prodigiosHomeHeader();
  if (page === 'nosotros' || page === 'profesores' || page === 'galeria') return window.prodigiosHeader();
  if (page === 'contacto') return window.prodigiosContactHeader();
  return `<div class="sheet-meta"><span>ACADEMIA DE MÚSICA PRODIGIOS / TACNA, PERÚ</span><span>WIREFRAME · PÁGINA ${pageNumber} DE 06</span></div>
  <header class="site-header">
    <a class="logo-box" href="index.html" aria-label="Academia de Música Prodigios, ir a Inicio"><span>LOGO</span><small>PLACEHOLDER</small></a>
    ${nav('desktop-nav')}
    <a class="header-cta" href="contacto.html#whatsapp">Contacto / WhatsApp <span aria-hidden="true">↗</span></a>
    <details class="mobile-menu"><summary>Menú <span aria-hidden="true">+</span></summary>${nav('mobile-nav')}</details>
  </header>`;
}

function footer() {
  return window.prodigiosFooter();
}

function pageIntro(title, description, crumb = '') {
  return `<section class="page-intro"><div><p class="eyebrow">${pageNumber} / ${crumb || title.toUpperCase()}</p><h1>${title}</h1><p>${description}</p></div><div class="intro-index" aria-hidden="true">${pageNumber}<span>/ 06</span></div></section>`;
}

function home() {
  return window.prodigiosHomeContent();
}

function courses() {
  return window.prodigiosCoursesContent();
}

function about() {
  return window.prodigiosAboutContent();
}

function teachers() {
  return window.prodigiosTeachersContent();
}

function gallery() {
  return window.prodigiosGalleryContent();
}

function contact() {
  return window.prodigiosContactContent();
}

const content = { inicio: home, cursos: courses, nosotros: about, profesores: teachers, galeria: gallery, contacto: contact };
document.getElementById('site').innerHTML = `<div class="sheet" id="top">${header()}<main id="main-content">${(content[page] || home)()}</main>${footer()}</div>`;

document.getElementById('contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-note').textContent = 'El formulario todavía no está conectado al canal definitivo de recepción.';
});

const requestedCourse = new URLSearchParams(window.location.search).get('curso');
const courseSelect = document.querySelector('#contact-form select[name="curso"]');
if (courseSelect && [...courseSelect.options].some(option => option.value === requestedCourse)) {
  courseSelect.value = requestedCourse;
}

