const coursePrograms = {
  piano: {
    caption: 'Sensibilidad y técnica, nota a nota.',
    image: 'Manos de un pianista sobre las teclas de un piano',
    lessons: ['Lectura musical y coordinación de ambas manos.', 'Técnica y expresión al tocar.', 'Repertorio para poner en práctica lo aprendido.']
  },
  guitarra: {
    caption: 'Tus canciones empiezan con un acorde.',
    image: 'Guitarrista practicando con una guitarra acústica',
    lessons: ['Acordes, cambios y acompañamiento.', 'Ritmo y diferentes formas de tocar.', 'Canciones para construir tu repertorio.']
  },
  violin: {
    caption: 'Encuentra tu voz entre las cuerdas.',
    image: 'Estudiante tocando el violín con un arco',
    lessons: ['Postura y manejo del instrumento y el arco.', 'Afinación, lectura y técnica.', 'Repertorio clásico y contemporáneo.']
  },
  canto: {
    caption: 'Aprende a conocer y cuidar tu voz.',
    image: 'Cantante interpretando una canción frente a un micrófono',
    lessons: ['Respiración y técnica vocal.', 'Afinación y expresión al cantar.', 'Interpretación y confianza con tu repertorio.']
  }
};

const coursePhoto = (id, label, expanded = false) => `<div class="courses-photo courses-photo-${id}${expanded ? ' courses-photo-expanded' : ''}" role="img" aria-label="Fotografía ilustrativa: ${label}">${expanded ? '<img src="assets/courses-sheet.png" alt="" aria-hidden="true" draggable="false">' : ''}</div>`;

window.prodigiosCoursesContent = () => {
  const courses = window.prodigiosCourses;
  const requestedCourse = window.location.hash.slice(1);
  const initialCourse = courses.some(course => course.id === requestedCourse) ? requestedCourse : courses[0].id;
  return `
    <a class="courses-skip" href="#main-content">Saltar al contenido</a>
    <section class="courses-hero" aria-labelledby="courses-title">
      <div class="home-container courses-hero-layout">
        <div class="courses-hero-copy">
          <p class="home-eyebrow">CURSOS DE MÚSICA · TACNA</p>
          <h1 id="courses-title">Encuentra el instrumento que conecta <em>contigo.</em></h1>
          <p>Elige el piano, la guitarra, el violín o tu propia voz. Aprende a tu ritmo, con clases presenciales y un acompañamiento cercano.</p>
          <div class="courses-hero-actions">
            ${homeButton('Explorar cursos', '#oferta')}
            ${homeButton('Consultar horarios', 'contacto.html#whatsapp', 'outline')}
          </div>
        </div>
        <figure class="courses-hero-figure">
          ${coursePhoto('piano', coursePrograms.piano.image)}
        </figure>
      </div>
    </section>

    <section class="courses-offer" id="oferta" aria-labelledby="courses-offer-title">
      <div class="home-container">
        <div class="courses-offer-heading">
          <div><p class="home-eyebrow">NUESTROS CURSOS</p><h2 id="courses-offer-title">Cuatro maneras de<br><em>hacer música.</em></h2></div>
          <p>Para niños, jóvenes y adultos.<br>Desde tus primeras notas hasta el siguiente paso en tu aprendizaje.</p>
        </div>
        <div class="courses-directory" role="tablist" aria-label="Seleccionar un curso">
          ${courses.map(({id, title}) => `<button type="button" role="tab" id="course-tab-${id}" data-course-tab="${id}" aria-controls="course-panel-${id}" aria-selected="${id === initialCourse}" tabindex="${id === initialCourse ? '0' : '-1'}">${title}</button>`).join('')}
        </div>
        <div class="courses-panels">
        ${courses.map(course => {
          const program = coursePrograms[course.id];
          const active = course.id === initialCourse;
          return `<article class="courses-program${active ? ' is-active' : ''}" role="tabpanel" id="course-panel-${course.id}" data-course-panel="${course.id}" aria-labelledby="course-tab-${course.id}" tabindex="0"${active ? '' : ' aria-hidden="true" inert'}>
            <figure class="courses-program-figure">
              ${coursePhoto(course.id, program.image, true)}
            </figure>
            <div class="courses-program-copy">
              <p class="home-eyebrow">${program.caption}</p>
              <h2 id="course-title-${course.id}">${course.title}</h2>
              <p class="courses-program-intro">${course.description}</p>
              <dl class="courses-program-meta">
                <div><dt>Para quién</dt><dd>${course.audience}</dd></div>
                <div><dt>Nivel</dt><dd>${course.level}</dd></div>
              </dl>
              <h3>Qué aprenderás</h3>
              <ul class="courses-learning">${program.lessons.map(lesson => `<li>${lesson}</li>`).join('')}</ul>
              <div class="courses-program-actions">
                ${homeButton('Consultar este curso', `contacto.html?curso=${encodeURIComponent(course.title)}#whatsapp`)}
                <a class="courses-teacher-link" href="profesores.html">Conoce al equipo docente <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>`;
        }).join('')}
        </div>
      </div>
    </section>

    <section class="courses-approach" aria-labelledby="courses-approach-title">
      <div class="home-container courses-approach-layout">
        <div class="courses-approach-copy">
          <p class="home-eyebrow">APRENDER EN PRODIGIOS</p>
          <h2 id="courses-approach-title">Tu ritmo.<br>Nuestro <em>acompañamiento.</em></h2>
          <p>La música se aprende, se comparte y se vive. Combinamos técnica y práctica en un ambiente cercano, creativo y motivador.</p>
          <ul class="courses-approach-list">
            <li><span class="courses-approach-icon">${homeIcon('teacher', 26)}</span><div><h3>Partimos de ti</h3><p>Tu experiencia, tus gustos y lo que quieres aprender.</p></div></li>
            <li><span class="courses-approach-icon">${homeIcon('note', 26)}</span><div><h3>Aprendemos haciendo música</h3><p>Práctica y técnica conectadas con el instrumento o la voz.</p></div></li>
            <li><span class="courses-approach-icon">${homeIcon('growth', 26)}</span><div><h3>Te acompañamos al avanzar</h3><p>Atención personalizada durante tu proceso de aprendizaje.</p></div></li>
          </ul>
        </div>
        <figure class="courses-approach-figure"><img src="assets/community.png" alt="Fotografía ilustrativa de un profesor de guitarra acompañando a sus alumnos" loading="lazy"></figure>
      </div>
    </section>

    <section class="home-final courses-final" aria-labelledby="courses-final-title">
      <img src="assets/final-cta.png" alt="Partitura abierta junto a un piano en un aula de música" loading="lazy">
      <div class="home-final-shade"></div>
      <div class="home-container home-final-content">
        ${homeIcon('note', 44)}
        <h2 id="courses-final-title">Tu camino musical<br>empieza con una conversación.</h2>
        <p>Cuéntanos qué te gustaría aprender. Te ayudaremos a elegir un curso y consultar horarios y disponibilidad.</p>
        ${homeButton('Escríbenos por WhatsApp', 'contacto.html#whatsapp', 'gold', 'whatsapp')}
      </div>
    </section>`;
};

let courseTransitionVersion = 0;

function activateCourse(id, { animate = true, updateUrl = true } = {}) {
  const panels = [...document.querySelectorAll('[data-course-panel]')];
  const next = panels.find(panel => panel.dataset.coursePanel === id);
  if (!next) return;
  const previous = panels.find(panel => panel.classList.contains('is-active'));
  if (previous === next) return;

  const version = ++courseTransitionVersion;
  const focusWasInPanel = panels.some(panel => panel.contains(document.activeElement));
  panels.forEach(panel => {
    panel.getAnimations().forEach(animation => animation.cancel());
    panel.classList.remove('is-active', 'is-leaving');
    const active = panel === next;
    panel.inert = !active;
    if (active) panel.removeAttribute('aria-hidden');
    else panel.setAttribute('aria-hidden', 'true');
  });
  next.classList.add('is-active');

  document.querySelectorAll('[data-course-tab]').forEach(tab => {
    const selected = tab.dataset.courseTab === id;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusWasInPanel) tab.focus({ preventScroll: true });
  });

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.hash = id;
    history.replaceState(history.state, '', url);
  }

  if (!animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (previous) {
    previous.classList.add('is-leaving');
    const exit = previous.animate(
      [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }],
      { duration: 180, easing: 'ease-out' }
    );
    exit.finished.then(() => {
      if (version === courseTransitionVersion) previous.classList.remove('is-leaving');
    }).catch(() => {});
  }
  next.animate(
    [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 280, easing: 'cubic-bezier(.2,.65,.3,1)' }
  );
}

// Incoming course links open the selected panel with its selector in view.
document.addEventListener('DOMContentLoaded', () => {
  const directory = document.querySelector('.courses-directory');
  if (!directory) return;

  directory.addEventListener('click', event => {
    const tab = event.target.closest('[data-course-tab]');
    if (tab) activateCourse(tab.dataset.courseTab);
  });

  directory.addEventListener('keydown', event => {
    const tabs = [...directory.querySelectorAll('[data-course-tab]')];
    const current = tabs.indexOf(event.target.closest('[data-course-tab]'));
    if (current < 0) return;
    let next;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    tabs[next].focus({ preventScroll: true });
    activateCourse(tabs[next].dataset.courseTab);
  });

  const id = window.location.hash.slice(1);
  if (id && ['oferta', 'piano', 'guitarra', 'violin', 'canto'].includes(id)) {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
});

window.addEventListener('hashchange', () => {
  activateCourse(window.location.hash.slice(1), { animate: false, updateUrl: false });
});
