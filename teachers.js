// Add confirmed names and biographies to this list when available.
const teacherProfiles = [
  {id: 'piano', course: 'Piano', title: 'Docente de piano', focus: 'Lectura musical, coordinación y expresión al tocar.', photo: 'un docente practicando al piano'},
  {id: 'guitarra', course: 'Guitarra', title: 'Docente de guitarra', focus: 'Acordes, ritmo y canciones para construir tu repertorio.', photo: 'un docente de guitarra acompañando a un alumno'},
  {id: 'violin', course: 'Violín', title: 'Docente de violín', focus: 'Postura, afinación y repertorio clásico y contemporáneo.', photo: 'una docente interpretando una pieza de violín'},
  {id: 'canto', course: 'Canto', title: 'Docente de canto', focus: 'Técnica vocal, interpretación y confianza en tu voz.', photo: 'una docente de canto ante un micrófono'}
];

const teacherPortrait = (id, description, hero = false) => `<figure class="teachers-photo teachers-photo-${id}"><img src="assets/teachers-sheet.png" width="1448" height="1086" alt="Imagen ilustrativa de ${description}" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></figure>`;

window.prodigiosTeachersContent = () => {
  const support = [
    ['person', 'Partimos de ti', 'Tu experiencia, tus gustos y lo que quieres aprender orientan el trabajo en clase.'],
    ['note', 'Conectamos técnica y música', 'Ponemos en práctica lo aprendido con el instrumento o la voz y tu repertorio.'],
    ['clock', 'Acompañamos tu avance', 'Atención cercana para resolver dudas, practicar y avanzar a tu ritmo.']
  ];

  return `
  <section class="teachers-hero" aria-labelledby="teachers-title">
    <div class="home-container teachers-hero-layout">
      <div class="teachers-hero-copy">
        <p class="home-eyebrow">PROFESORES · PRODIGIOS</p>
        <h1 id="teachers-title">Un equipo que<br>comparte<br><em>su pasión.</em></h1>
        <p>Conoce a quienes te acompañan a descubrir tu instrumento y tu voz. Clases presenciales en Tacna, con técnica, práctica y un trato cercano.</p>
        <div class="teachers-hero-actions">
          <a class="home-button home-button-gold" href="#equipo">Conoce al equipo <span class="home-button-arrow" aria-hidden="true">↓</span></a>
          <a class="teachers-text-link" href="cursos.html">Explora los cursos <span aria-hidden="true">→</span></a>
        </div>
      </div>
      ${teacherPortrait('guitarra', 'un docente de guitarra acompañando a un alumno', true)}
    </div>
  </section>

  <section class="teachers-team" id="equipo" aria-labelledby="teachers-team-title">
    <div class="home-container">
      <div class="teachers-team-heading teachers-reveal">
        <div><p class="home-eyebrow">NUESTRO EQUIPO</p><h2 id="teachers-team-title">Conoce a quienes<br><em>te acompañan.</em></h2></div>
        <p>Piano, guitarra, violín y canto.<br>Encuentra el curso que conecta contigo y conoce qué aprenderás en clase.</p>
      </div>
      <div class="teachers-profile-grid teachers-reveal">
        ${teacherProfiles.map(profile => `<a class="teachers-profile" href="cursos.html#${profile.id}" aria-label="Conocer el curso de ${profile.course}">
          ${teacherPortrait(profile.id, profile.photo)}
          <div class="teachers-profile-info">
            <h3>${profile.title}</h3>
            <p>${profile.focus}</p>
            <span class="teachers-profile-action">Conoce el curso <span class="teachers-profile-arrow">${contactIcon('arrow', 21)}</span></span>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="teachers-support" aria-labelledby="teachers-support-title">
    <div class="home-container teachers-support-layout">
      <div class="teachers-support-copy teachers-reveal">
        <p class="home-eyebrow">ASÍ TE ACOMPAÑAMOS</p>
        <h2 id="teachers-support-title">Aprender a tu ritmo.<br><em>Con alguien a tu lado.</em></h2>
        <p>Aprender lleva práctica y tiempo. En Prodigios trabajamos contigo para que entiendas lo que tocas, disfrutes del proceso y avances con confianza.</p>
        <ul class="teachers-support-list">
          ${support.map(([icon, title, description]) => `<li><span class="teachers-support-icon">${contactIcon(icon, 28)}</span><div><h3>${title}</h3><p>${description}</p></div></li>`).join('')}
        </ul>
        <a class="home-button home-button-gold" href="contacto.html#formulario">Consulta tu próxima clase <span class="home-button-arrow" aria-hidden="true">→</span></a>
      </div>
      <figure class="teachers-support-photo teachers-reveal"><img src="assets/community.png" width="1942" height="809" alt="Imagen ilustrativa de un profesor y dos alumnos compartiendo una práctica de guitarra" loading="lazy" decoding="async"></figure>
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
  document.querySelectorAll('.teachers-reveal').forEach(element => observer.observe(element));
});
