const homePages = [
  ['Inicio', 'index.html'], ['Cursos', 'cursos.html'], ['Nosotros', 'nosotros.html'],
  ['Profesores', 'profesores.html'], ['Galería', 'galeria.html'], ['Contacto', 'contacto.html']
];

const homeCourses = [
  { id: 'piano', title: 'Piano', description: 'Desarrolla tu sensibilidad musical y técnica desde cero o lleva tu talento más lejos.', audience: 'Niños, jóvenes y adultos', learning: 'Técnica, lectura y repertorio', level: 'Todos los niveles' },
  { id: 'guitarra', title: 'Guitarra', description: 'Aprende diferentes estilos y acompaña tus canciones favoritas.', audience: 'Niños, jóvenes y adultos', learning: 'Acordes, ritmo y repertorio', level: 'Todos los niveles' },
  { id: 'violin', title: 'Violín', description: 'Formación clásica y contemporánea para todas las edades.', audience: 'Niños, jóvenes y adultos', learning: 'Postura, afinación y repertorio', level: 'Todos los niveles' },
  { id: 'canto', title: 'Canto', description: 'Técnica vocal, interpretación y confianza en tu voz.', audience: 'Niños, jóvenes y adultos', learning: 'Respiración, técnica vocal e interpretación', level: 'Todos los niveles' }
];

const homeIcon = (name, size = 32) => {
  if (name === 'whatsapp') return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;
  const paths = {
    people: '<circle cx="8" cy="8" r="3"/><circle cx="18" cy="8" r="3"/><path d="M2 21v-3a6 6 0 0 1 12 0v3M12 21v-3a6 6 0 0 1 10-4.5V21"/>',
    teacher: '<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2H4ZM8 15l4 3 4-3"/>',
    bag: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2M7 13l5 4 5-4"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5L2 9ZM5 12v6c4 3 10 3 14 0v-6M22 9v8"/>',
    heart: '<path d="M12 21 3.6 12.4a5 5 0 0 1 7.1-7.1L12 6.6l1.3-1.3a5 5 0 0 1 7.1 7.1L12 21Z"/>',
    stage: '<path d="M3 4h18v16H3zM7 4v16M17 4v16M3 10l4 3M21 10l-4 3M7 20h10"/>',
    growth: '<path d="M3 21h18M5 18v-5h3v5M11 18V9h3v9M17 18V5h3v13M15 5l2-2 2 2"/>',
    note: '<path d="M9 17V4l11-2v13M9 8l11-2"/><ellipse cx="5.5" cy="18" rx="3.5" ry="2"/><ellipse cx="16.5" cy="16" rx="3.5" ry="2"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

const homeBrand = () => `<a class="home-brand" href="index.html" aria-label="Academia de Música Prodigios, ir al inicio">${homeIcon('note', 35)}<span>PRODIGIOS</span><small>tu academia, tu música</small></a>`;
const homeButton = (label, href, variant = 'gold', icon = '') => `<a class="home-button home-button-${variant}" href="${href}">${icon ? homeIcon(icon, 18) : ''}<span>${label}</span><span class="home-button-arrow" aria-hidden="true">→</span></a>`;
const homeNav = (className) => `<nav class="${className}" aria-label="Navegación principal">${homePages.map(([label, href], i) => `<a href="${href}" ${i === 0 ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav>`;

window.prodigiosHomeHeader = () => `<header class="home-header"><div class="home-container home-header-inner">${homeBrand()}${homeNav('home-desktop-nav')}<a class="home-whatsapp-pill" href="contacto.html#whatsapp">${homeIcon('whatsapp', 19)}<span>WhatsApp</span></a><details class="home-mobile-menu"><summary aria-label="Abrir menú"><span></span><span></span><span></span></summary>${homeNav('home-mobile-nav')}</details></div></header>`;

window.prodigiosHomeContent = () => {
  const trustItems = [
    ['people', 'Todas las edades'],
    ['teacher', 'Profesores especializados'],
    ['bag', 'Clases presenciales'],
    ['pin', 'En Tacna']
  ];
  const experienceItems = [
    ['Aprendizaje a tu ritmo', 'Clases pensadas para avanzar desde tu nivel actual.'],
    ['Acompañamiento cercano', 'Orientación durante el proceso para que sigas progresando.'],
    ['Música que se comparte', 'Actividades y experiencias que van más allá de practicar una canción.']
  ];
  const gallery = [
    ['class', 'Clase de guitarra en grupo'],
    ['violin', 'Estudiante de violín practicando'],
    ['piano', 'Manos tocando el piano'],
    ['voice', 'Clase de canto'],
    ['music', 'Partitura y piano']
  ];

  return `<section class="home-hero" aria-labelledby="home-hero-title"><img class="home-hero-image" src="assets/hero-violin.png" alt="Estudiante practicando violín en un aula de música" fetchpriority="high"><div class="home-hero-shade"></div><div class="home-container home-hero-content"><p class="home-eyebrow">ACADEMIA DE MÚSICA EN TACNA</p><h1 id="home-hero-title">Tu música<br><em>empieza aquí.</em></h1><p>Clases presenciales de piano, guitarra, violín y canto para niños, jóvenes y adultos.</p><div class="home-hero-actions">${homeButton('Consultar horarios por WhatsApp', 'contacto.html#whatsapp', 'gold', 'whatsapp')}<a class="home-hero-secondary" href="#cursos">Ver cursos <span aria-hidden="true">↓</span></a></div></div></section>

  <section class="home-attributes home-trust" aria-label="Información principal de la academia"><div class="home-container home-attributes-grid">${trustItems.map(([icon, title]) => `<div class="home-attribute">${homeIcon(icon, 29)}<div><h2>${title}</h2></div></div>`).join('')}</div></section>

  <section class="home-courses home-light" id="cursos" aria-labelledby="home-courses-title"><div class="home-container"><div class="home-section-heading home-heading-with-aside"><div><p class="home-eyebrow">NUESTROS CURSOS</p><h2 id="home-courses-title">Encuentra <em>tu instrumento</em></h2></div><div class="home-heading-aside"><p>Elige el curso que más te interesa y revisa sus detalles.</p><a class="home-inline-link" href="cursos.html">Ver todos los cursos <span aria-hidden="true">→</span></a></div></div><div class="home-course-grid">${homeCourses.map(({id, title, audience}) => `<button class="home-course-card home-course-${id}" type="button" data-home-course="${id}" aria-label="Ver detalles del curso de ${title}"><span class="home-course-art" role="img" aria-label="Fotografía ilustrativa de ${title}"></span><span class="home-course-content"><strong>${title}</strong><span class="home-course-meta">${audience}</span><span class="home-course-open">Ver curso <span aria-hidden="true">↗</span></span></span></button>`).join('')}</div></div><dialog class="home-course-dialog" id="home-course-dialog" aria-labelledby="home-course-dialog-title"><div class="home-course-dialog-layout"><div class="home-course-dialog-art" role="img" aria-label="Fotografía ilustrativa del curso seleccionado"></div><div class="home-course-dialog-body"><button type="button" class="home-course-dialog-close" data-close-course aria-label="Cerrar detalles del curso">×</button><p class="home-eyebrow">CURSO PRESENCIAL · TACNA</p><h2 id="home-course-dialog-title"></h2><p class="home-course-dialog-description" id="home-course-dialog-description"></p><dl><div><dt>Dirigido a</dt><dd id="home-course-dialog-audience"></dd></div><div><dt>Aprenderás</dt><dd id="home-course-dialog-learning"></dd></div><div><dt>Nivel</dt><dd id="home-course-dialog-level"></dd></div></dl><div class="home-course-dialog-actions"><a class="home-button home-button-gold" id="home-course-dialog-link" href="cursos.html">Ver curso completo <span aria-hidden="true">→</span></a><a class="home-course-dialog-contact" href="contacto.html#whatsapp">Consultar horarios ↗</a></div></div></div></dialog></section>

  <!-- REEMPLAZAR community.png por una fotografía real de alumnos o una clase de Prodigios cuando esté disponible. -->
  <section class="home-experience home-light" aria-labelledby="home-experience-title"><div class="home-container home-experience-grid"><div class="home-experience-media"><img src="assets/community.png" alt="Profesor acompañando una práctica musical" loading="lazy"></div><div class="home-experience-copy"><p class="home-eyebrow">LA EXPERIENCIA PRODIGIOS</p><h2 id="home-experience-title">Aprender música también es <em>vivirla.</em></h2><p class="home-experience-lead">Un espacio para aprender, practicar y ganar confianza mientras disfrutas el proceso.</p><div class="home-experience-list">${experienceItems.map(([title, copy], i) => `<div class="home-experience-item"><span>0${i + 1}</span><div><h3>${title}</h3><p>${copy}</p></div></div>`).join('')}</div><a class="home-inline-link" href="nosotros.html">Conoce Prodigios <span aria-hidden="true">→</span></a></div></div></section>

  <!-- REEMPLAZAR las imágenes ilustrativas de esta galería por fotografías reales antes de publicación. -->
  <section class="home-gallery" aria-labelledby="home-gallery-title"><div class="home-container home-gallery-layout"><div class="home-gallery-intro"><p class="home-eyebrow">GALERÍA</p><h2 id="home-gallery-title">Así se vive<br><em>Prodigios</em></h2><p>Clases, práctica y momentos compartidos alrededor de la música.</p>${homeButton('Ver galería', 'galeria.html')}</div><div class="home-gallery-frame"><div class="home-gallery-track" id="home-gallery-track">${gallery.map(([id, label]) => `<div class="home-gallery-slide home-gallery-${id}" role="img" aria-label="Imagen ilustrativa: ${label}"></div>`).join('')}</div><div class="home-gallery-controls"><button type="button" class="home-gallery-arrow" data-gallery-direction="prev" aria-label="Imagen anterior">←</button><div class="home-gallery-dots" aria-label="Posición de galería">${gallery.map((_, i) => `<button type="button" class="home-gallery-dot ${i === 0 ? 'is-active' : ''}" data-gallery-index="${i}" aria-label="Ir a imagen ${i + 1}" ${i === 0 ? 'aria-current="true"' : ''}></button>`).join('')}</div><button type="button" class="home-gallery-arrow" data-gallery-direction="next" aria-label="Imagen siguiente">→</button></div></div></div></section>

  <section class="home-final" aria-labelledby="home-final-title"><img src="assets/final-cta.png" alt="Partitura abierta junto a un piano" loading="lazy"><div class="home-final-shade"></div><div class="home-container home-final-content">${homeIcon('note', 54)}<p class="home-eyebrow">TU PRÓXIMO PASO</p><h2 id="home-final-title">Empieza tu camino musical.</h2><p>Cuéntanos qué instrumento te interesa y consulta horarios y disponibilidad.</p>${homeButton('Consultar por WhatsApp', 'contacto.html#whatsapp', 'gold', 'whatsapp')}</div></section>`;
};

window.prodigiosHomeFooter = () => `<footer class="home-footer"><div class="home-container home-footer-inner">${homeBrand()}<div class="home-footer-main"><nav aria-label="Navegación secundaria">${homePages.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</nav><div class="home-footer-details"><span>${homeIcon('pin', 18)} Tacna, Perú</span><a href="contacto.html#whatsapp">${homeIcon('whatsapp', 18)} Consultar horarios y disponibilidad</a><a href="contacto.html">Información de contacto</a></div></div></div><div class="home-container home-footer-bottom"><span>© Academia de Música Prodigios</span><a href="#top">Volver arriba ↑</a></div></footer>`;

let homeGalleryIndex = 0;
const setHomeGalleryActive = index => {
  homeGalleryIndex = index;
  document.querySelectorAll('.home-gallery-dot').forEach((dot, i) => {
    dot.classList.toggle('is-active', i === index);
    if (i === index) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
};
const updateHomeGallery = index => {
  const track = document.getElementById('home-gallery-track');
  if (!track) return;
  const slides = [...track.children];
  const visibleCount = window.innerWidth < 640 ? 1 : 2;
  const positionCount = slides.length - visibleCount + 1;
  const next = (index + positionCount) % positionCount;
  setHomeGalleryActive(next);
  track.scrollLeft = slides[next].offsetLeft - slides[0].offsetLeft;
};

document.addEventListener('click', event => {
  const courseButton = event.target.closest('[data-home-course]');
  if (courseButton) {
    const course = homeCourses.find(item => item.id === courseButton.dataset.homeCourse);
    const dialog = document.getElementById('home-course-dialog');
    if (course && dialog) {
      dialog.querySelector('#home-course-dialog-title').textContent = course.title;
      dialog.querySelector('#home-course-dialog-description').textContent = course.description;
      dialog.querySelector('#home-course-dialog-audience').textContent = course.audience;
      dialog.querySelector('#home-course-dialog-learning').textContent = course.learning;
      dialog.querySelector('#home-course-dialog-level').textContent = course.level;
      dialog.querySelector('#home-course-dialog-link').href = `cursos.html#${course.id}`;
      dialog.querySelector('.home-course-dialog-art').className = `home-course-dialog-art home-course-dialog-${course.id}`;
      dialog.querySelector('.home-course-dialog-art').setAttribute('aria-label', `Fotografía ilustrativa de ${course.title}`);
      dialog.showModal();
    }
  }
  if (event.target.closest('[data-close-course]')) document.getElementById('home-course-dialog')?.close();
  if (event.target.id === 'home-course-dialog') event.target.close();
  const arrow = event.target.closest('[data-gallery-direction]');
  if (arrow) updateHomeGallery(homeGalleryIndex + (arrow.dataset.galleryDirection === 'next' ? 1 : -1));
  const dot = event.target.closest('[data-gallery-index]');
  if (dot) updateHomeGallery(Number(dot.dataset.galleryIndex));
});

document.addEventListener('scroll', event => {
  const track = event.target;
  if (track?.id !== 'home-gallery-track') return;
  const slides = [...track.children];
  const visibleCount = window.innerWidth < 640 ? 1 : 2;
  const positionCount = slides.length - visibleCount + 1;
  const nearest = Math.min(positionCount - 1, Math.round(track.scrollLeft / (slides[1].offsetLeft - slides[0].offsetLeft)));
  setHomeGalleryActive(nearest);
}, true);
