const aboutIcon = (name, size = 28) => {
  const paths = {
    listen: '<path d="M6 10a6 6 0 1 1 12 0c0 3-3 3-3 6a4 4 0 0 1-8 0"/><path d="M10 10a2 2 0 1 1 4 0c0 2-2 2-2 4"/>',
    music: '<path d="M9 17V4l11-2v13M9 8l11-2"/><ellipse cx="5.5" cy="18" rx="3.5" ry="2"/><ellipse cx="16.5" cy="16" rx="3.5" ry="2"/>',
    people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v2"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

window.prodigiosAboutContent = () => {
  const details = [
    ['people', 'Para todas las edades', 'Niños, jóvenes y adultos.'],
    ['music', 'Tu instrumento, tu voz', 'Piano, guitarra, violín y canto.'],
    ['pin', 'Nos encontramos en Tacna', 'Clases de música presenciales.']
  ];
  const approach = [
    ['listen', 'Escuchar', 'Conocer tu experiencia, tus gustos y lo que quieres aprender.'],
    ['music', 'Practicar', 'Conectar la técnica con las canciones y el repertorio que vas descubriendo.'],
    ['people', 'Compartir', 'Aprender a interpretar, ganar confianza y disfrutar haciendo música.']
  ];

  return `
  <section class="about-hero" aria-labelledby="about-title">
    <div class="home-container about-hero-layout">
      <div class="about-hero-copy">
        <p class="home-eyebrow">NOSOTROS · PRODIGIOS</p>
        <h1 id="about-title">Un lugar para<br><em>hacer música.</em></h1>
        <p>Somos Prodigios, una academia de música en Tacna. Acompañamos a niños, jóvenes y adultos a encontrar su sonido, con clases presenciales y atención cercana.</p>
        <div class="about-hero-actions">
          <a class="home-button home-button-gold" href="cursos.html">Explora los cursos <span class="home-button-arrow" aria-hidden="true">→</span></a>
          <a class="about-text-link" href="#nuestra-esencia">Conoce Prodigios <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <figure class="about-hero-photo">
        <img src="assets/community.png" width="1942" height="809" alt="Imagen ilustrativa de un profesor acompañando a dos alumnos en una práctica de guitarra" fetchpriority="high">
      </figure>
    </div>
  </section>

  <section class="about-essence" id="nuestra-esencia" aria-labelledby="about-essence-title">
    <div class="home-container">
      <div class="about-essence-layout about-reveal">
        <div>
          <p class="home-eyebrow">NUESTRA ESENCIA</p>
          <h2 id="about-essence-title">La música empieza<br>por <em>escucharte.</em></h2>
        </div>
        <div class="about-essence-copy">
          <p>En Prodigios combinamos técnica, creatividad y práctica para acompañar cada proceso de aprendizaje. Partimos de lo que te gusta escuchar y de lo que quieres aprender a tocar o cantar.</p>
          <p>Creemos en un ambiente cercano, donde preguntar, probar y volver a intentarlo forman parte de la clase. Un espacio para aprender a tu ritmo y disfrutar del camino.</p>
        </div>
      </div>
      <div class="about-details about-reveal" aria-label="Conoce nuestra academia">
        ${details.map(([icon, title, description]) => `<div><span class="about-detail-icon">${aboutIcon(icon, 32)}</span><div class="about-detail-copy"><h3>${title}</h3><p>${description}</p></div></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="about-approach" id="como-aprendemos" aria-labelledby="about-approach-title">
    <div class="home-container about-approach-layout">
      <figure class="about-approach-photo about-reveal">
        <img src="assets/hero-violin.png" width="1916" height="821" alt="Imagen ilustrativa de una alumna concentrada en la práctica del violín" loading="lazy" decoding="async">
      </figure>
      <div class="about-approach-copy about-reveal">
        <p class="home-eyebrow">NUESTRA FORMA DE ENSEÑAR</p>
        <h2 id="about-approach-title">Tu ritmo.<br><em>Nuestro acompañamiento.</em></h2>
        <p>La música se aprende, se comparte y se vive. Te acompañamos para que cada nueva técnica tenga sentido en la música que quieres hacer.</p>
        <ul class="about-approach-list">
          ${approach.map(([icon, title, description]) => `<li><span class="about-approach-icon">${aboutIcon(icon)}</span><div><h3>${title}</h3><p>${description}</p></div></li>`).join('')}
        </ul>
        <a class="about-text-link" href="profesores.html">Conoce al equipo docente <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>

  <section class="about-life" aria-labelledby="about-life-title">
    <div class="home-container about-life-layout">
      <div class="about-life-heading about-reveal">
        <div><p class="home-eyebrow">LA MÚSICA EN EL DÍA A DÍA</p><h2 id="about-life-title">Practicar, expresarte<br>y <em>disfrutar.</em></h2></div>
        <p class="about-life-copy">Una melodía al piano, un acorde de guitarra o tu propia voz. Cada encuentro es una oportunidad para descubrir cómo quieres hacer música.</p>
      </div>
      <figure class="about-life-photo about-life-piano about-reveal"><img src="assets/courses-sheet.png" width="1448" height="1086" alt="Imagen ilustrativa de las manos de un pianista sobre las teclas" loading="lazy" decoding="async"></figure>
      <div class="about-life-grid about-reveal">
        <figure class="about-life-photo about-life-voice"><img src="assets/courses-sheet.png" width="1448" height="1086" alt="Imagen ilustrativa de una cantante interpretando una canción ante un micrófono" loading="lazy" decoding="async"></figure>
        <figure class="about-life-photo about-life-guitar"><img src="assets/courses-sheet.png" width="1448" height="1086" alt="Imagen ilustrativa de un guitarrista practicando con una guitarra acústica" loading="lazy" decoding="async"></figure>
      </div>
      <div class="about-life-action about-reveal"><a class="home-button about-gallery-button" href="galeria.html">Explora la galería <span class="home-button-arrow" aria-hidden="true">→</span></a></div>
    </div>
  </section>

  <section class="home-final about-final" aria-labelledby="about-final-title">
    <img src="assets/final-cta.png" alt="Imagen ilustrativa de una partitura abierta junto a un piano" loading="lazy" decoding="async">
    <div class="home-final-shade"></div>
    <div class="home-container home-final-content about-reveal">
      <p class="home-eyebrow">TU PRÓXIMO PASO</p>
      <h2 id="about-final-title">Encuentra tu lugar<br><em>en Prodigios.</em></h2>
      <p>Cuéntanos qué te gustaría aprender. Te ayudaremos a elegir el curso para ti o tu familia.</p>
      <a class="home-button home-button-gold" href="contacto.html#formulario">Hablemos de tu próxima clase <span class="home-button-arrow" aria-hidden="true">→</span></a>
    </div>
  </section>`;
};

document.addEventListener('DOMContentLoaded', () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate(
        [{opacity: 0, transform: 'translateY(12px)'}, {opacity: 1, transform: 'translateY(0)'}],
        {duration: 300, easing: 'ease-out'}
      );
      observer.unobserve(entry.target);
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.about-reveal').forEach(element => observer.observe(element));
});
