// Existing illustrative assets; replace these entries with confirmed academy photos.
const galleryCategories = {todos: 'Todas', clases: 'En clase', instrumentos: 'Instrumentos', voz: 'Voz'};
const galleryPhotos = [
  {id:'en-compania', title:'Aprender en compañía', category:'clases', src:'assets/community.png', position:'90% center', alt:'un profesor acompañando una práctica de guitarra en grupo', feature:true},
  {id:'violin-practica', title:'Una melodía al violín', category:'clases', src:'assets/hero-violin.png', position:'78% center', alt:'una alumna concentrada en la práctica del violín', tall:true},
  {id:'piano-detalle', title:'Entre teclas y notas', category:'instrumentos', src:'assets/courses-sheet.png', crop:[3,3,718,537], alt:'las manos de un pianista sobre las teclas'},
  {id:'voz-expresion', title:'Encontrar tu voz', category:'voz', src:'assets/courses-sheet.png', crop:[727,546,718,537], alt:'una cantante interpretando una canción ante un micrófono'},
  {id:'guitarra-detalle', title:'El ritmo de las cuerdas', category:'instrumentos', src:'assets/courses-sheet.png', crop:[727,3,718,537], alt:'las manos de un guitarrista practicando acordes'},
  {id:'violin-interpretacion', title:'La expresión de un arco', category:'instrumentos', src:'assets/teachers-sheet.png', crop:[727,3,718,537], alt:'una intérprete tocando una pieza de violín'},
  {id:'partituras', title:'Tiempo de estudio', category:'instrumentos', src:'assets/final-cta.png', position:'83% center', alt:'una partitura abierta junto a un piano'},
  {id:'canto-practica', title:'La voz y su expresión', category:'voz', src:'assets/teachers-sheet.png', crop:[727,546,718,537], alt:'una intérprete de canto practicando con un micrófono'}
];
const galleryFeatured = ['en-compania','violin-practica','voz-expresion'].map(id=>galleryPhotos.find(photo=>photo.id===id));

const galleryIcon = name => {
  const paths = {expand:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>'};
  return `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

// A clipped SVG viewport isolates each photo without stretching the raster asset.
const galleryPicture = (photo, context, contain = false) => {
  const label = `Imagen ilustrativa de ${photo.alt}`;
  if (!photo.crop) return `<img class="gallery-shot" src="${photo.src}" alt="${label}" style="object-position:${photo.position}" ${context==='featured'?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
  const [x,y,width,height] = photo.crop;
  const clipId = `gallery-crop-${context}-${photo.id}`;
  return `<svg class="gallery-shot gallery-shot-crop" viewBox="${x} ${y} ${width} ${height}" preserveAspectRatio="xMidYMid ${contain?'meet':'slice'}" role="img" aria-label="${label}"><defs><clipPath id="${clipId}" clipPathUnits="userSpaceOnUse"><rect x="${x}" y="${y}" width="${width}" height="${height}"/></clipPath></defs><image href="${photo.src}" x="0" y="0" width="1448" height="1086" clip-path="url(#${clipId})"/></svg>`;
};

window.prodigiosGalleryContent = () => `
  <section class="gallery-hero" aria-labelledby="gallery-title">
    <div class="home-container gallery-hero-layout">
      <div class="gallery-hero-copy">
        <p class="home-eyebrow">GALERÍA · PRODIGIOS</p>
        <h1 id="gallery-title">Momentos que<br><em>nos inspiran.</em></h1>
        <p>La concentración al practicar, una canción compartida y el encuentro con tu instrumento. La música también se descubre en estos pequeños momentos.</p>
        <a class="home-button home-button-gold" href="#momentos">Explora las imágenes <span class="home-button-arrow" aria-hidden="true">↓</span></a>
      </div>
      <div class="gallery-feature">
        <div class="gallery-feature-frame">
          ${galleryFeatured.map((photo,index)=>`<button class="gallery-feature-slide" type="button" data-feature-slide="${index}" data-gallery-photo="${photo.id}" data-gallery-origin="featured" aria-label="Ampliar: ${photo.title}" aria-haspopup="dialog" ${index?'hidden':''}>${galleryPicture(photo,'featured')}<span class="gallery-expand-icon">${galleryIcon('expand')}</span></button>`).join('')}
        </div>
        <div class="gallery-feature-caption"><p id="gallery-feature-title">${galleryFeatured[0].title}</p><div class="gallery-feature-arrows"><button class="gallery-round-button" type="button" data-feature-step="-1" aria-label="Imagen destacada anterior"><span class="gallery-arrow-left">${contactIcon('arrow',21)}</span></button><button class="gallery-round-button" type="button" data-feature-step="1" aria-label="Imagen destacada siguiente">${contactIcon('arrow',21)}</button></div></div>
        <div class="gallery-feature-dots" aria-label="Seleccionar imagen destacada">${galleryFeatured.map((photo,index)=>`<button type="button" data-feature-index="${index}" aria-label="Ver imagen ${index+1}: ${photo.title}" ${index?'':'aria-current="true"'}><span></span></button>`).join('')}</div>
        <span class="gallery-sr-only" id="gallery-feature-status" role="status" aria-live="polite"></span>
      </div>
    </div>
  </section>

  <section class="gallery-collection" id="momentos" aria-labelledby="gallery-collection-title">
    <div class="home-container">
      <div class="gallery-collection-heading"><div><p class="home-eyebrow">EL MUNDO DE LA MÚSICA</p><h2 id="gallery-collection-title">Una mirada a<br><em>nuestro día a día.</em></h2></div><p>Explora las imágenes por tema.<br>Selecciona una fotografía para verla en detalle.</p></div>
      <div class="gallery-filter-bar"><div class="gallery-filters" role="group" aria-label="Filtrar imágenes">${Object.entries(galleryCategories).map(([key,label])=>`<button type="button" class="gallery-filter" data-photo-filter="${key}" aria-pressed="${key==='todos'}" aria-controls="gallery-photo-grid">${label}</button>`).join('')}</div><p id="gallery-results-count" role="status" aria-live="polite">${galleryPhotos.length} imágenes</p></div>
      <div class="gallery-photo-grid" id="gallery-photo-grid">
        ${galleryPhotos.map(photo=>`<button type="button" class="gallery-image-card${photo.feature?' gallery-image-feature':''}${photo.tall?' gallery-image-tall':''}" data-gallery-photo="${photo.id}" data-photo-category="${photo.category}" aria-label="Ampliar: ${photo.title}" aria-haspopup="dialog">${galleryPicture(photo,'grid')}<span class="gallery-card-shade"></span><span class="gallery-card-caption"><span>${galleryCategories[photo.category]}</span><strong>${photo.title}</strong></span><span class="gallery-expand-icon">${galleryIcon('expand')}</span></button>`).join('')}
      </div>
      <div class="gallery-mobile-controls"><button class="gallery-round-button" type="button" data-browse-step="-1" aria-label="Ver fotos anteriores" disabled><span class="gallery-arrow-left">${contactIcon('arrow',21)}</span></button><span>Desliza para explorar</span><button class="gallery-round-button" type="button" data-browse-step="1" aria-label="Ver fotos siguientes">${contactIcon('arrow',21)}</button></div>
    </div>
  </section>

  <section class="home-final gallery-final" aria-labelledby="gallery-final-title"><img src="assets/final-cta.png" alt="Imagen ilustrativa de una partitura abierta junto a un piano" loading="lazy" decoding="async"><div class="home-final-shade"></div><div class="home-container home-final-content"><p class="home-eyebrow">TU PRÓXIMO PASO</p><h2 id="gallery-final-title">Encuentra el curso<br><em>que va contigo.</em></h2><p>Explora piano, guitarra, violín y canto. Si tienes dudas, te ayudamos a elegir por dónde comenzar.</p><div class="gallery-final-actions"><a class="home-button home-button-gold" href="cursos.html">Explorar cursos <span class="home-button-arrow" aria-hidden="true">→</span></a><a class="gallery-text-link" href="contacto.html#formulario">Consultar una clase <span aria-hidden="true">↗</span></a></div></div></section>

  <dialog class="gallery-lightbox" id="gallery-lightbox" aria-labelledby="gallery-lightbox-title"><div class="gallery-lightbox-inner"><header class="gallery-lightbox-header"><div><p class="home-eyebrow" id="gallery-lightbox-category"></p><h2 id="gallery-lightbox-title"></h2></div><button class="gallery-round-button" type="button" data-close-gallery aria-label="Cerrar imagen">${galleryIcon('close')}</button></header><div class="gallery-lightbox-photo" id="gallery-lightbox-photo"></div><div class="gallery-lightbox-controls"><button class="gallery-viewer-button" type="button" data-viewer-step="-1"><span class="gallery-arrow-left">${contactIcon('arrow',21)}</span><span>Anterior</span></button><span id="gallery-lightbox-status" role="status" aria-live="polite"></span><button class="gallery-viewer-button" type="button" data-viewer-step="1"><span>Siguiente</span>${contactIcon('arrow',21)}</button></div></div></dialog>`;

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('gallery-photo-grid');
  const dialog = document.getElementById('gallery-lightbox');
  if (!grid || !dialog) return;
  const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fade = element => {if(!reducedMotion()) element.animate([{opacity:0},{opacity:1}],{duration:240,easing:'ease-out'});};
  let filter = 'todos', featuredIndex = 0, viewerIndex = 0, viewerPhotos = [], opener = null, priorOverflow = '';
  const activePhotos = () => galleryPhotos.filter(photo=>filter==='todos'||photo.category===filter);

  const updateBrowse = () => {
    const atStart=grid.scrollLeft<=4;
    const atEnd=grid.scrollLeft>=grid.scrollWidth-grid.clientWidth-4;
    document.querySelector('[data-browse-step="-1"]').disabled=atStart;
    document.querySelector('[data-browse-step="1"]').disabled=atEnd;
  };
  const showFeatured = index => {
    featuredIndex=(index+galleryFeatured.length)%galleryFeatured.length;
    document.querySelectorAll('[data-feature-slide]').forEach((slide,i)=>{slide.hidden=i!==featuredIndex;if(i===featuredIndex) fade(slide);});
    document.querySelectorAll('[data-feature-index]').forEach((dot,i)=>{if(i===featuredIndex) dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});
    document.getElementById('gallery-feature-title').textContent=galleryFeatured[featuredIndex].title;
    document.getElementById('gallery-feature-status').textContent=`Imagen ${featuredIndex+1} de ${galleryFeatured.length}: ${galleryFeatured[featuredIndex].title}`;
  };
  const renderViewer = () => {
    const photo=viewerPhotos[viewerIndex];
    document.getElementById('gallery-lightbox-title').textContent=photo.title;
    document.getElementById('gallery-lightbox-category').textContent=galleryCategories[photo.category];
    const stage=document.getElementById('gallery-lightbox-photo');
    stage.innerHTML=galleryPicture(photo,'viewer',true);
    document.getElementById('gallery-lightbox-status').textContent=`Foto ${viewerIndex+1} de ${viewerPhotos.length}`;
    fade(stage);
  };
  const moveViewer = step => {viewerIndex=(viewerIndex+step+viewerPhotos.length)%viewerPhotos.length;renderViewer();};
  const applyFilter = value => {
    filter=value;
    document.querySelectorAll('[data-photo-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.photoFilter===value)));
    grid.classList.toggle('is-filtered',value!=='todos');
    grid.querySelectorAll('[data-photo-category]').forEach(card=>{card.hidden=value!=='todos'&&card.dataset.photoCategory!==value;});
    document.getElementById('gallery-results-count').textContent=`${activePhotos().length} imágenes`;
    grid.scrollLeft=0;
    fade(grid);
    requestAnimationFrame(updateBrowse);
  };

  document.addEventListener('click', event => {
    const filterButton=event.target.closest('[data-photo-filter]');
    if(filterButton){applyFilter(filterButton.dataset.photoFilter);return;}
    const featureStep=event.target.closest('[data-feature-step]');
    if(featureStep){showFeatured(featuredIndex+Number(featureStep.dataset.featureStep));return;}
    const featureDot=event.target.closest('[data-feature-index]');
    if(featureDot){showFeatured(Number(featureDot.dataset.featureIndex));return;}
    const photoButton=event.target.closest('[data-gallery-photo]');
    if(photoButton){
      viewerPhotos=photoButton.dataset.galleryOrigin==='featured'?galleryFeatured:activePhotos();
      viewerIndex=viewerPhotos.findIndex(photo=>photo.id===photoButton.dataset.galleryPhoto);
      opener=photoButton;
      renderViewer();
      priorOverflow=document.body.style.overflow;
      document.body.style.overflow='hidden';
      dialog.showModal();
      dialog.querySelector('[data-close-gallery]').focus();
      return;
    }
    if(event.target.closest('[data-close-gallery]')){dialog.close();return;}
    const viewerStep=event.target.closest('[data-viewer-step]');
    if(viewerStep){moveViewer(Number(viewerStep.dataset.viewerStep));return;}
    const browseStep=event.target.closest('[data-browse-step]');
    if(browseStep){const first=[...grid.children].find(card=>!card.hidden);grid.scrollBy({left:Number(browseStep.dataset.browseStep)*(first.getBoundingClientRect().width+16),behavior:reducedMotion()?'instant':'smooth'});}
  });
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();});
  dialog.addEventListener('close',()=>{document.body.style.overflow=priorOverflow;opener?.focus({preventScroll:true});});
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveViewer(event.key==='ArrowLeft'?-1:1);}});
  grid.addEventListener('scroll',updateBrowse,{passive:true});
  window.addEventListener('resize',updateBrowse);
  updateBrowse();
});
