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

const contactIcon = (name, size = 22) => {
  const paths = {
    note: '<path d="M9 17V4l11-2v13M9 8l11-2"/><ellipse cx="5.5" cy="18" rx="3.5" ry="2"/><ellipse cx="16.5" cy="16" rx="3.5" ry="2"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>'
  };
  if (name === 'whatsapp') return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};
const contactBrand = () => `<a class="home-brand" href="index.html" aria-label="Academia de Música Prodigios, ir al inicio">${contactIcon('note', 35)}<span>PRODIGIOS</span><small>tu academia, tu música</small></a>`;
const contactHeader = () => `<header class="home-header contact-site-header"><div class="home-container home-header-inner">${contactBrand()}${nav('home-desktop-nav')}<a class="home-whatsapp-pill" href="#whatsapp">${contactIcon('whatsapp', 19)}<span>WhatsApp</span></a><details class="home-mobile-menu"><summary aria-label="Abrir menú"><span></span><span></span><span></span></summary>${nav('home-mobile-nav')}</details></div></header>`;
const contactFooter = () => `<footer class="home-footer" aria-label="Pie de página"><div class="home-container home-footer-top"><div class="home-footer-intro">${contactBrand()}<p>Clases presenciales de piano, guitarra, violín y canto para niños, jóvenes y adultos en Tacna.</p><a class="home-button home-button-gold" href="#whatsapp">${contactIcon('whatsapp', 18)}<span>Consultar horarios</span><span class="home-button-arrow" aria-hidden="true">→</span></a></div><div class="home-footer-grid"><div class="home-footer-column"><h2>Navegación</h2><nav aria-label="Navegación secundaria">${pages.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}</nav></div><div class="home-footer-column"><h2>Cursos</h2><nav aria-label="Cursos de Prodigios"><a href="cursos.html#piano">Piano</a><a href="cursos.html#guitarra">Guitarra</a><a href="cursos.html#violin">Violín</a><a href="cursos.html#canto">Canto</a></nav></div><div class="home-footer-column home-footer-contact"><h2>Contacto</h2><span>${contactIcon('pin', 17)} Tacna, Perú</span><a href="#whatsapp">${contactIcon('whatsapp', 17)} Escribir por WhatsApp</a><a href="#formulario">Formulario de contacto <span aria-hidden="true">↗</span></a></div></div></div><div class="home-container home-footer-bottom"><span>© Academia de Música Prodigios</span><span>Academia de música presencial · Tacna, Perú</span><a href="#top">Volver arriba ↑</a></div></footer>`;

const cta = (title, copy, primaryText = 'Ir a contacto', primaryHref = 'contacto.html', secondaryText = '', secondaryHref = '') => `<section class="section cta-section" aria-label="Siguiente paso"><div><p class="eyebrow">SIGUIENTE PASO</p><h2>${title}</h2><p>${copy}</p></div><div class="button-row">${button(primaryText, primaryHref)}${secondaryText ? button(secondaryText, secondaryHref, true) : ''}</div></section>`;

function header() {
  if (page === 'inicio') return window.prodigiosHomeHeader();
  if (page === 'contacto') return contactHeader();
  return `<div class="sheet-meta"><span>ACADEMIA DE MÚSICA PRODIGIOS / TACNA, PERÚ</span><span>WIREFRAME · PÁGINA ${pageNumber} DE 06</span></div>
  <header class="site-header">
    <a class="logo-box" href="index.html" aria-label="Academia de Música Prodigios, ir a Inicio"><span>LOGO</span><small>PLACEHOLDER</small></a>
    ${nav('desktop-nav')}
    <a class="header-cta" href="contacto.html#whatsapp">Contacto / WhatsApp <span aria-hidden="true">↗</span></a>
    <details class="mobile-menu"><summary>Menú <span aria-hidden="true">+</span></summary>${nav('mobile-nav')}</details>
  </header>`;
}

function footer() {
  if (page === 'inicio') return window.prodigiosHomeFooter();
  if (page === 'contacto') return contactFooter();
  return `<footer class="site-footer">
    <div class="footer-top"><div><p class="eyebrow">PIE DE PÁGINA</p><h2>Academia de Música Prodigios</h2><p>Academia de música presencial · Tacna, Perú.</p></div><div class="footer-grid">
      <div><h3>Navegación</h3><nav aria-label="Navegación secundaria">${pages.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}</nav></div>
      <div><h3>Contacto y ubicación</h3><p>WhatsApp: [número]</p><p>Teléfono: [número]</p><p>Dirección: [dirección exacta], Tacna</p></div>
      <div><h3>Horario y redes</h3><p>Horario: [días y horas]</p><p>Instagram: [perfil]</p><p>Facebook: [perfil]</p></div>
    </div></div><div class="footer-bottom"><span>MOCKUP ESTRUCTURAL · DATOS POR DEFINIR</span><a href="#top">Volver arriba ↑</a></div>
  </footer>`;
}

function pageIntro(title, description, crumb = '') {
  return `<section class="page-intro"><div><p class="eyebrow">${pageNumber} / ${crumb || title.toUpperCase()}</p><h1>${title}</h1><p>${description}</p></div><div class="intro-index" aria-hidden="true">${pageNumber}<span>/ 06</span></div></section>`;
}

function home() {
  return window.prodigiosHomeContent();
}

function courses() {
  const data = [
    ['piano', 'Piano', 'Descripción breve del enfoque del curso de piano.', 'Niños, jóvenes o adultos; precisar grupos disponibles.', 'Lectura, técnica y práctica musical; ajustar según el programa.', 'Nivel inicial o según evaluación.', 'Profesor/a de piano'],
    ['guitarra', 'Guitarra', 'Descripción breve del enfoque del curso de guitarra.', 'Niños, jóvenes o adultos; precisar grupos disponibles.', 'Acordes, ritmo y repertorio; ajustar según el programa.', 'Nivel inicial o según evaluación.', 'Profesor/a de guitarra'],
    ['violin', 'Violín', 'Descripción breve del enfoque del curso de violín.', 'Niños, jóvenes o adultos; precisar grupos disponibles.', 'Postura, afinación y repertorio; ajustar según el programa.', 'Nivel inicial o según evaluación.', 'Profesor/a de violín'],
    ['canto', 'Canto', 'Descripción breve del enfoque del curso de canto.', 'Niños, jóvenes o adultos; precisar grupos disponibles.', 'Técnica vocal y expresión; ajustar según el programa.', 'Nivel inicial o según evaluación.', 'Profesor/a de canto']
  ];
  return `${pageIntro('Cursos', 'Toda la oferta académica en una sola página. Selecciona un instrumento o voz para revisar la estructura de cada curso.')}
  <section class="section course-directory"><p class="eyebrow">IR DIRECTAMENTE A UN CURSO</p><nav aria-label="Cursos de esta página">${data.map(([id, name], i) => `<a href="#${id}"><span>0${i + 1}</span>${name}<span aria-hidden="true">↓</span></a>`).join('')}</nav></section>
  <section class="section course-list">${data.map(([id, name, description, audience, learn, level, teacher], i) => `<article class="course-detail" id="${id}"><div class="course-title"><span class="eyebrow">CURSO 0${i + 1} / 04</span><h2>${name}</h2><p>${description}</p>${button('Consultar horarios y disponibilidad', 'contacto.html#whatsapp')}</div><div class="course-specs"><div><h3>Dirigido a</h3><p>${audience}</p></div><div><h3>Qué aprenderá</h3><p>${learn}</p></div><div><h3>Nivel / requisito previo</h3><p>${level}</p></div><div><h3>Profesor relacionado</h3><p>${teacher}</p><a class="text-link" href="profesores.html">Ver profesores ↗</a></div></div>${placeholder('Imagen de ' + name, 'course-detail-image')}</article>`).join('')}</section>
  ${cta('Encuentra el curso adecuado', 'Escribe para consultar horarios, cupos y detalles de inscripción.', 'Consultar disponibilidad', 'contacto.html#whatsapp')}`;
}

function about() {
  return `${pageIntro('Nosotros', 'Una presentación clara y cercana de la Academia de Música Prodigios.')}
  <section class="section split-section"> <div>${sectionHead('01', 'Quiénes somos', 'Academia de música presencial ubicada en Tacna, Perú.')}<p class="body-copy">Espacio para una descripción breve y auténtica de la academia: a quién recibe, qué enseña y cómo se vive el aprendizaje musical.</p></div>${placeholder('Imagen de la academia', 'landscape-placeholder')}</section>
  <section class="section story-section"><div class="story-label"><p class="eyebrow">02 / SECCIÓN</p><h2>Nuestra historia</h2></div><div class="story-content"><p>Texto breve por completar: cómo nació Prodigios y cuáles han sido algunos momentos importantes de su recorrido.</p><div class="story-stops"><div><span>01</span><p>Inicio de la academia</p></div><div><span>02</span><p>Crecimiento de la comunidad</p></div><div><span>03</span><p>Prodigios hoy</p></div></div></div></section>
  <section class="section">${sectionHead('03', 'Nuestra forma de enseñar', 'Tres ideas que pueden explicar la experiencia de clase.')}<div class="three-grid">${[['Escuchar', 'Espacio para explicar la atención a cada alumno.'], ['Practicar', 'Espacio para describir la dinámica de las clases.'], ['Compartir', 'Espacio para describir actividades y presentaciones.']].map(([title, copy], i) => `<article class="outlined-card reason-card"><span class="card-number">0${i + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section>
  <section class="section split-section reverse-split">${placeholder('Clases y actividades', 'landscape-placeholder')}<div>${sectionHead('04', 'Qué buscamos lograr con nuestros alumnos')}<p class="body-copy">Espacio para contar qué significa avanzar musicalmente en Prodigios: aprender, disfrutar el proceso y ganar confianza para compartir música.</p></div></section>
  <section class="section">${sectionHead('05', 'La academia en imágenes', 'Placeholders para fotografías del espacio y de las clases.')}<div class="three-grid about-gallery">${placeholder('Instalaciones')}${placeholder('Clases')}${placeholder('Alumnos')}</div></section>
  ${cta('Conoce el siguiente paso', 'Explora los cursos o conversa con la academia.', 'Explorar cursos', 'cursos.html', 'Ir a contacto', 'contacto.html')}`;
}

function teachers() {
  const items = [
    ['01', 'Profesor/a de piano', 'Piano', 'Piano'],
    ['02', 'Profesor/a de guitarra', 'Guitarra', 'Guitarra'],
    ['03', 'Profesor/a de violín', 'Violín', 'Violín'],
    ['04', 'Profesor/a de canto', 'Canto', 'Canto']
  ];
  return `${pageIntro('Profesores', 'Conoce al equipo que acompaña el aprendizaje musical en Prodigios.')}
  <section class="section">${sectionHead('01', 'Equipo docente', 'Tarjetas preparadas para fotografías y perfiles breves.')}<div class="teacher-grid">${items.map(([n, name, specialty, course]) => `<article class="outlined-card teacher-card">${placeholder('Foto profesor', 'teacher-photo')}<div class="teacher-info"><span class="card-number">DOCENTE ${n}</span><h3>${name}</h3><dl><div><dt>Especialidad</dt><dd>${specialty}</dd></div><div><dt>Curso que enseña</dt><dd>${course}</dd></div></dl><p>Breve descripción de experiencia o formación por completar.</p></div></article>`).join('')}</div></section>
  ${cta('Aprende con nuestro equipo', 'Consulta los cursos o escribe para conocer horarios y disponibilidad.', 'Ver cursos', 'cursos.html', 'Consultar por WhatsApp', 'contacto.html#whatsapp')}`;
}

function gallery() {
  const items = [
    ['Clases', 'clases'], ['Alumnos', 'clases'], ['Profesores', 'clases'],
    ['Presentaciones', 'presentaciones'], ['Conciertos', 'presentaciones'],
    ['Actividades', 'presentaciones'], ['Instalaciones', 'instalaciones'], ['Videos', 'presentaciones']
  ];
  return `${pageIntro('Galería', 'Un espacio para mostrar clases, personas, actividades y el lugar donde ocurre la música.')}
  <section class="section gallery-section">${sectionHead('01', 'Momentos en Prodigios', 'Los bloques indican qué fotografías y videos se incorporarán más adelante.')}<div class="filter-row" role="group" aria-label="Filtrar galería"><button class="filter-button is-active" type="button" data-filter="todos" aria-pressed="true">Todos</button><button class="filter-button" type="button" data-filter="clases" aria-pressed="false">Clases</button><button class="filter-button" type="button" data-filter="presentaciones" aria-pressed="false">Presentaciones</button><button class="filter-button" type="button" data-filter="instalaciones" aria-pressed="false">Instalaciones</button></div><div class="gallery-grid">${items.map(([label, category], i) => `<article class="gallery-item" data-category="${category}">${placeholder(label === 'Videos' ? 'Video' : 'Imagen', 'gallery-image')}<div><span>0${i + 1} / ${category.toUpperCase()}</span><h3>${label}</h3></div></article>`).join('')}</div></section>
  ${cta('¿Quieres conocer la academia?', 'Escríbenos para consultar clases o coordinar una visita.', 'Ir a contacto', 'contacto.html')}`;
}

function contact() {
  const questions = [
    ['¿Cómo consulto los horarios?', 'Escríbenos por WhatsApp o deja tus datos en el formulario. Te indicaremos los horarios disponibles para el curso que te interesa.'],
    ['¿Hay clases para niños, jóvenes y adultos?', 'Sí. Prodigios ofrece clases para distintas edades. Al contactarnos, indícanos la edad del alumno para orientarte mejor.'],
    ['¿Necesito experiencia previa?', 'Hay opciones para distintos niveles. Cuéntanos si estás empezando o si ya tienes experiencia para recomendarte el punto de partida adecuado.'],
    ['¿Cómo comienzo?', 'Primero elige el curso que te interesa, consulta disponibilidad y luego coordina directamente con la academia el proceso de inscripción.'],
    ['¿Dónde está Prodigios?', 'La academia está en Tacna. La dirección exacta y las indicaciones para llegar se confirmarán directamente por el canal de contacto.']
  ];
  const steps = [
    ['01', 'Cuéntanos qué buscas', 'Indica el curso, la edad del alumno y cualquier duda que tengas.'],
    ['02', 'Revisa las opciones', 'Te orientaremos sobre horarios, disponibilidad y el curso más adecuado.'],
    ['03', 'Coordina tu inicio', 'Con la información clara, podrás organizar directamente tu inscripción.']
  ];
  return `<section class="contact-hero" aria-labelledby="contact-title"><div class="home-container contact-hero-grid"><div class="contact-hero-copy"><p class="home-eyebrow">CONTACTO · TACNA</p><h1 id="contact-title">Hablemos de tu<br><em>próxima clase.</em></h1><p>¿Piano, guitarra, violín o canto? Cuéntanos qué te interesa y te ayudaremos a revisar horarios y disponibilidad.</p><div class="contact-hero-actions"><a class="home-button home-button-gold" href="#whatsapp">${contactIcon('whatsapp', 18)}<span>Escribir por WhatsApp</span><span class="home-button-arrow" aria-hidden="true">→</span></a><a class="contact-text-link" href="cursos.html">Explorar cursos <span aria-hidden="true">→</span></a></div></div><aside class="contact-hero-card" aria-label="Información rápida"><div><span class="contact-card-icon">${contactIcon('pin', 24)}</span><p>Ubicación</p><strong>Tacna, Perú</strong></div><div><span class="contact-card-icon">${contactIcon('clock', 24)}</span><p>Horarios</p><strong>Consultar disponibilidad</strong></div><div id="whatsapp"><span class="contact-card-icon">${contactIcon('whatsapp', 24)}</span><p>Canal recomendado</p><strong>WhatsApp</strong></div></aside></div></section>

  <section class="contact-main"><div class="home-container contact-main-grid"><div class="contact-copy"><p class="home-eyebrow">ESCRÍBENOS</p><h2>Tu consulta puede empezar <em>con algo simple.</em></h2><p>No necesitas tener decidido todo. Dinos qué instrumento te interesa, para quién serían las clases y qué necesitas saber.</p><div class="contact-channels"><a href="#whatsapp"><span>${contactIcon('whatsapp', 22)}</span><div><small>CANAL PRINCIPAL</small><strong>Consultar por WhatsApp</strong><p>Para horarios, disponibilidad e inscripción.</p></div><b aria-hidden="true">↗</b></a><div><span>${contactIcon('pin', 22)}</span><div><small>UBICACIÓN</small><strong>Tacna, Perú</strong><p><!-- REEMPLAZAR: añadir dirección exacta y referencia cuando la academia la confirme. -->Dirección exacta disponible al contactarnos.</p></div></div></div></div>
  <div class="contact-form-card" id="formulario"><p class="home-eyebrow">FORMULARIO</p><h2>Déjanos tu consulta</h2><form id="contact-form" novalidate><div class="contact-field-row"><label>Nombre<input name="nombre" type="text" autocomplete="name" placeholder="Tu nombre"></label><label>Teléfono<input name="telefono" type="tel" autocomplete="tel" placeholder="Tu número de contacto"></label></div><label>Curso de interés<select name="curso"><option value="">Selecciona un curso</option><option>Piano</option><option>Guitarra</option><option>Violín</option><option>Canto</option><option>Aún no lo sé</option></select></label><label>Mensaje<textarea name="mensaje" rows="5" placeholder="Cuéntanos qué te gustaría saber"></textarea></label><button class="contact-submit" type="submit"><span>Enviar consulta</span><span aria-hidden="true">→</span></button><p class="contact-form-note" id="form-note" aria-live="polite">El envío del formulario todavía no está conectado. Para una consulta inmediata, usa WhatsApp.</p></form></div></div></section>

  <section class="contact-steps"><div class="home-container"><div class="contact-section-heading"><div><p class="home-eyebrow">CÓMO EMPEZAR</p><h2>Tres pasos para comenzar.</h2></div><p>Un proceso simple desde tu primera consulta hasta coordinar las clases.</p></div><div class="contact-step-grid">${steps.map(([n,title,copy]) => `<article><span>${n}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></div></section>

  <section class="contact-faq"><div class="home-container contact-faq-grid"><div class="contact-faq-heading"><p class="home-eyebrow">PREGUNTAS FRECUENTES</p><h2>Antes de escribirnos.</h2><p>Estas respuestas cubren las dudas más comunes para que llegues a la conversación con una idea más clara.</p></div><div class="contact-faq-list">${questions.map(([q,a], i) => `<details ${i === 0 ? 'open' : ''}><summary><span>${q}</span><b aria-hidden="true">+</b></summary><p>${a}</p></details>`).join('')}</div></div></section>

  <section class="contact-final"><div class="home-container contact-final-inner">${contactIcon('note', 48)}<p class="home-eyebrow">TU PRÓXIMO PASO</p><h2>Encuentra el curso adecuado para ti.</h2><p>Revisa nuestros cursos o escríbenos para consultar horarios y disponibilidad.</p><div class="contact-final-actions"><a class="home-button home-button-gold" href="#whatsapp">${contactIcon('whatsapp', 18)}<span>Consultar por WhatsApp</span><span class="home-button-arrow" aria-hidden="true">→</span></a><a class="contact-text-link" href="cursos.html">Ver cursos <span aria-hidden="true">→</span></a></div></div></section>`;
}

const content = { inicio: home, cursos: courses, nosotros: about, profesores: teachers, galeria: gallery, contacto: contact };
document.getElementById('site').innerHTML = `<div class="sheet" id="top">${header()}<main id="main-content">${(content[page] || home)()}</main>${footer()}</div>`;

document.querySelectorAll('.filter-button').forEach(filter => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(item => {
      const active = item === filter;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.hidden = selected !== 'todos' && item.dataset.category !== selected;
    });
  });
});

document.getElementById('contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-note').textContent = 'El formulario todavía no está conectado. Para una consulta inmediata, usa WhatsApp.';
});

