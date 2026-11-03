'use strict';
(() => {
  const container = document.querySelector('.assembly-scroll');
  const steps = [...container.querySelectorAll('[data-step]')];
  if (!steps.length) return;

  // Los textos y sus imágenes siguen disponibles sin JavaScript.
  // En pantallas amplias, una escena fija acompaña la lectura continua.
  const visual = document.createElement('div');
  visual.className = 'assembly-visual';
  visual.setAttribute('aria-hidden', 'true');
  const stage = document.createElement('div');
  stage.className = 'assembly-stage';
  const scenes = steps.map(step => {
    const scene = step.querySelector('.step-photo').cloneNode(true);
    scene.removeAttribute('role');
    scene.removeAttribute('aria-label');
    stage.append(scene);
    return scene;
  });
  const caption = document.createElement('div');
  caption.className = 'scroll-caption';
  const counter = document.createElement('span');
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  const marks = steps.map(() => {
    const mark = document.createElement('i');
    progress.append(mark);
    return mark;
  });
  caption.append(counter, progress);
  visual.append(stage, caption);
  container.prepend(visual);

  const wideScreen = window.matchMedia('(min-width: 900px) and (min-height: 680px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = -1;
  let scheduled = false;

  function updateStep() {
    scheduled = false;
    if (!container.classList.contains('scroll-ready')) return;
    const readingLine = window.innerHeight * 0.5;
    let closest = 0;
    let distance = Infinity;
    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      const delta = Math.abs(rect.top + rect.height / 2 - readingLine);
      if (delta < distance) { closest = index; distance = delta; }
    });
    if (closest === current) return;
    current = closest;
    steps.forEach((step, index) => step.classList.toggle('is-current', index === current));
    scenes.forEach((scene, index) => scene.classList.toggle('is-current', index === current));
    marks.forEach((mark, index) => mark.classList.toggle('is-current', index <= current));
    counter.textContent = `PASO ${String(current + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`;
  }

  function scheduleUpdate() {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateStep); }
  }

  function updateLayout() {
    container.classList.toggle('scroll-ready', wideScreen.matches && !reducedMotion.matches);
    current = -1;
    scheduleUpdate();
  }

  // No se intercepta la rueda, el teclado ni los gestos táctiles.
  window.addEventListener('scroll', scheduleUpdate, {passive: true});
  window.addEventListener('resize', updateLayout, {passive: true});
  wideScreen.addEventListener('change', updateLayout);
  reducedMotion.addEventListener('change', updateLayout);
  if ('ResizeObserver' in window) new ResizeObserver(scheduleUpdate).observe(container);
  updateLayout();
})();

function initUsos() {
  const section = document.querySelector('#usos');
  if (!section || section.dataset.usesReady === 'true') return;
  section.dataset.usesReady = 'true';

  const slots = [...section.querySelectorAll('[data-uses-slot]')];
  const presets = [...section.querySelectorAll('[data-uses-preset]')];
  const counter = section.querySelector('.uses-count');
  const clearButton = section.querySelector('.uses-clear');
  const contents = slots.map(() => 'socks');
  let selectedPreset = 'socks';

  function render() {
    slots.forEach((slot, index) => {
      const content = contents[index];
      const filled = Boolean(content);
      slot.classList.toggle('is-filled', filled);
      slot.setAttribute('aria-pressed', String(filled));
      slot.setAttribute('aria-label', `Espacio ${index + 1}: ${filled ? content === 'socks' ? 'calcetines. Vaciar espacio.' : 'accesorios. Vaciar espacio.' : 'vacío. Llenar espacio.'}`);
      const object = slot.querySelector('.uses-object');
      object.className = `uses-object uses-object-${content || 'socks'}`;
    });
    presets.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.usesPreset === selectedPreset)));
    const count = contents.filter(Boolean).length;
    counter.textContent = `${count} de 6 espacios`;
    clearButton.disabled = count === 0;
  }

  presets.forEach(button => button.addEventListener('click', () => {
    selectedPreset = button.dataset.usesPreset;
    slots.forEach((_, index) => { contents[index] = selectedPreset === 'custom' ? null : selectedPreset; });
    render();
  }));

  slots.forEach((slot, index) => slot.addEventListener('click', () => {
    contents[index] = contents[index] ? null : selectedPreset === 'accessories' ? 'accessories' : selectedPreset === 'custom' && index % 2 ? 'accessories' : 'socks';
    render();
  }));

  clearButton.addEventListener('click', () => {
    selectedPreset = 'custom';
    contents.fill(null);
    render();
  });

  render();
}

initUsos();

(() => {
  const comparison = document.querySelector('[data-comparison]');
  const slider = comparison?.querySelector('.comparison-range');
  if (slider) {
    const updateComparison = () => {
      const value = Number(slider.value);
      comparison.style.setProperty('--split', `${value}%`);
      slider.setAttribute('aria-valuetext', value === 0 ? 'Organizador visible' : value === 100 ? 'Caja de zapatos visible' : `${value} % caja de zapatos, ${100 - value} % organizador`);
    };
    slider.addEventListener('input', updateComparison);
    updateComparison();
  }

  const progress = document.querySelector('.reading-progress>span');
  const links = [...document.querySelectorAll('.site-header nav a')];
  const destinations = links.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  function updateNavigation() {
    scheduled = false;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`;
    let current = -1;
    destinations.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= 180) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleNavigation() {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateNavigation); }
  }
  window.addEventListener('scroll', scheduleNavigation, {passive:true});
  window.addEventListener('resize', scheduleNavigation, {passive:true});
  updateNavigation();

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motionPreference.matches && 'IntersectionObserver' in window) {
    const reveals = document.querySelectorAll('.uses-copy,.uses-demo,.purpose-intro,.purpose-statements article,.collab-art,.collab-copy,.faq-intro,.closing');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
      });
    }, {threshold:.12});
    reveals.forEach(element => { element.classList.add('reveal-pending'); observer.observe(element); });
    motionPreference.addEventListener('change', event => {
      if (event.matches) { reveals.forEach(element => element.classList.add('is-revealed')); observer.disconnect(); }
    });
  }
})();
