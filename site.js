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
  if (page === 'inicio') return window.prodigiosHomeHeader();
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
    '¿Cómo puedo consultar los horarios?',
    '¿Necesito experiencia previa?',
    '¿Hay clases para niños y adultos?',
    '¿Cómo puedo inscribirme?',
    '¿Dónde está ubicada la academia?'
  ];
  return `${pageIntro('Contacto', 'Elige la forma más cómoda de escribirnos o visitar la academia.')}
  <section class="section contact-section"><div class="contact-info"><p class="eyebrow">01 / DATOS DE CONTACTO</p><h2>Hablemos de tu próximo curso</h2><p>Completar los datos definitivos antes de publicar la web.</p><div class="contact-methods"><div id="whatsapp"><h3>WhatsApp</h3><p>[Número de WhatsApp]</p><span>Canal principal para consultas</span></div><div><h3>Teléfono</h3><p>[Número de teléfono]</p></div><div><h3>Dirección</h3><p>[Dirección exacta], Tacna, Perú</p></div><div><h3>Horario</h3><p>[Días y horas de atención]</p></div><div><h3>Redes sociales</h3><p>[Instagram] · [Facebook]</p></div></div></div>
  <div class="contact-form-wrap"><p class="eyebrow">02 / FORMULARIO</p><h2>Envíanos una consulta</h2><form id="contact-form" novalidate><label>Nombre<input name="nombre" type="text" placeholder="Tu nombre"></label><label>Teléfono<input name="telefono" type="tel" placeholder="Tu número de contacto"></label><label>Curso de interés<select name="curso"><option value="">Selecciona un curso</option><option>Piano</option><option>Guitarra</option><option>Violín</option><option>Canto</option><option>Aún no lo sé</option></select></label><label>Mensaje<textarea name="mensaje" rows="5" placeholder="Cuéntanos qué te gustaría saber"></textarea></label><button class="button" type="submit">Enviar consulta <span aria-hidden="true">↗</span></button><p class="form-note" id="form-note" aria-live="polite">Formulario de muestra · sin envío activo</p></form></div></section>
  <section class="section map-section">${sectionHead('03', 'Visítanos', 'Ubicación exacta por confirmar.')}<div class="map-layout">${placeholder('Mapa · Tacna, Perú', 'map-placeholder')}<div class="outlined-card map-address"><h3>Academia de Música Prodigios</h3><p>[Dirección exacta]</p><p>Tacna, Perú</p><p>[Referencia para llegar]</p></div></div></section>
  <section class="section">${sectionHead('04', 'Cómo empezar', 'Un recorrido simple desde la primera consulta hasta la clase.')}<div class="three-grid">${[['Escríbenos', 'Consulta el curso que te interesa.'], ['Revisa opciones', 'Confirma horarios y disponibilidad.'], ['Empieza tu curso', 'Coordina el proceso de inscripción.']].map(([title, copy], i) => `<article class="outlined-card step-card"><span class="step-number">0${i + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section>
  <section class="section faq-section">${sectionHead('05', 'Preguntas frecuentes', 'Respuestas breves por completar con información confirmada.')}<div class="faq-list">${questions.map(q => `<details><summary>${q}<span aria-hidden="true">+</span></summary><p>Respuesta breve por confirmar con la academia.</p></details>`).join('')}</div></section>
  ${cta('¿Tienes otra pregunta?', 'Escríbenos por el canal de contacto que prefieras.', 'Ver datos de contacto', '#whatsapp')}`;
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
  document.getElementById('form-note').textContent = 'Este mockup no envía datos. Completa el canal de contacto antes de publicar.';
});

