'use strict';

(() => {
  const translate = (key, values = {}) => window.ReboxLanguage?.translate(key, values) ?? key;

  function initAssembly() {
    const container = document.querySelector('.assembly-scroll');
    if (!container) return;
    const steps = [...container.querySelectorAll('li[data-step]')]
      .filter(step => step.querySelector('.step-photo'));
    if (!steps.length) return;

    const visual = document.createElement('div');
    visual.className = 'assembly-visual';
    visual.setAttribute('aria-hidden', 'true');
    const stage = document.createElement('div');
    stage.className = 'assembly-stage';
    const scenes = steps.map(step => {
      const scene = step.querySelector('.step-photo').cloneNode(true);
      scene.removeAttribute('id');
      scene.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
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

    function updateCounter() {
      counter.textContent = translate('assembly.counter', {
        n: String(Math.max(0, current) + 1).padStart(2, '0'),
        total: String(steps.length).padStart(2, '0')
      });
    }

    function setCurrent(index) {
      if (index === current) return;
      current = index;
      steps.forEach((step, position) => step.classList.toggle('is-current', position === current));
      scenes.forEach((scene, position) => scene.classList.toggle('is-current', position === current));
      marks.forEach((mark, position) => mark.classList.toggle('is-current', position <= current));
      updateCounter();
    }

    function updateStep() {
      scheduled = false;
      if (!container.classList.contains('scroll-ready')) return;
      const readingLine = window.innerHeight * 0.5;
      let closest = 0;
      let distance = Infinity;
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const delta = Math.abs(rect.top + rect.height / 2 - readingLine);
        if (delta < distance) {
          closest = index;
          distance = delta;
        }
      });
      setCurrent(closest);
    }

    function scheduleUpdate() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateStep);
    }

    function updateLayout() {
      container.classList.toggle('scroll-ready', wideScreen.matches && !reducedMotion.matches);
      current = -1;
      setCurrent(0);
      scheduleUpdate();
    }

    window.addEventListener('scroll', scheduleUpdate, {passive: true});
    window.addEventListener('resize', updateLayout, {passive: true});
    wideScreen.addEventListener('change', updateLayout);
    reducedMotion.addEventListener('change', updateLayout);
    document.addEventListener('rebox:languagechange', () => {
      updateCounter();
      scheduleUpdate();
    });
    if ('ResizeObserver' in window) new ResizeObserver(scheduleUpdate).observe(container);
    updateLayout();
  }

  function initUses() {
    const section = document.querySelector('#usos');
    if (!section) return;
    const slots = [...section.querySelectorAll('.uses-slot[data-uses-slot]')];
    if (!slots.length) return;
    const presets = [...section.querySelectorAll('[data-uses-preset]')];
    const counter = section.querySelector('.uses-count');
    const clearButton = section.querySelector('.uses-clear');
    const contents = slots.map(() => 'socks');
    let selectedPreset = 'socks';

    function render() {
      slots.forEach((slot, index) => {
        const content = contents[index];
        const filled = Boolean(content);
        const label = !filled ? 'uses.slotEmpty' : content === 'socks' ? 'uses.slotSocks' : 'uses.slotAccessories';
        slot.classList.toggle('is-filled', filled);
        slot.setAttribute('aria-pressed', String(filled));
        slot.setAttribute('aria-label', translate(label, {n: index + 1}));
        const object = slot.querySelector('.uses-object');
        if (object) {
          object.classList.remove('uses-object-socks', 'uses-object-accessories');
          object.classList.add(`uses-object-${content || 'socks'}`);
        }
      });
      presets.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.usesPreset === selectedPreset));
      });
      const count = contents.filter(Boolean).length;
      if (counter) counter.textContent = translate('uses.count', {n: count, total: slots.length});
      if (clearButton) clearButton.disabled = count === 0;
    }

    presets.forEach(button => button.addEventListener('click', () => {
      const preset = button.dataset.usesPreset;
      if (!['socks', 'accessories', 'custom'].includes(preset)) return;
      selectedPreset = preset;
      contents.fill(preset === 'custom' ? null : preset);
      render();
    }));
    slots.forEach((slot, index) => slot.addEventListener('click', () => {
      contents[index] = contents[index] ? null : (
        selectedPreset === 'accessories' || (selectedPreset === 'custom' && index % 2)
          ? 'accessories' : 'socks'
      );
      render();
    }));
    clearButton?.addEventListener('click', () => {
      selectedPreset = 'custom';
      contents.fill(null);
      render();
    });
    document.addEventListener('rebox:languagechange', render);
    render();
  }

  function initComparison() {
    document.querySelectorAll('[data-comparison]').forEach(comparison => {
      const slider = comparison.querySelector('.comparison-range');
      if (!slider) return;
      const render = () => {
        const value = Math.min(100, Math.max(0, Number(slider.value) || 0));
        comparison.style.setProperty('--split', `${value}%`);
        slider.setAttribute('aria-valuetext', translate('comparison.value', {
          box: value,
          organizer: 100 - value
        }));
      };
      slider.addEventListener('input', render);
      document.addEventListener('rebox:languagechange', render);
      render();
    });
  }

  function initNavigation() {
    const progress = document.querySelector('.reading-progress > span');
    const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
    const destinations = links.map(link => {
      const hash = link.getAttribute('href').slice(1);
      if (!hash) return null;
      try { return document.getElementById(decodeURIComponent(hash)); }
      catch { return null; }
    });
    if (!progress && !links.length) return;
    let scheduled = false;

    function render() {
      scheduled = false;
      if (progress) {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const value = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
        progress.style.transform = `scaleX(${value})`;
      }
      let current = -1;
      destinations.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= 180) current = index;
      });
      links.forEach((link, index) => {
        if (index === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(render);
    }

    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule, {passive: true});
    document.addEventListener('rebox:languagechange', schedule);
    window.addEventListener('load', schedule, {once: true});
    render();
  }

  function initPrices() {
    const quantity = document.querySelector('#order-quantity');
    if (!quantity) return;
    const unitOutput = document.querySelector('#unit-price');
    const totalOutput = document.querySelector('#order-total');
    const depositOutput = document.querySelector('#order-deposit');
    const summary = document.querySelector('#quote-summary');
    const rows = [...document.querySelectorAll('.price-row[data-tier]')];
    const prices = [3100, 2500, 2000, 1800, 1600];

    function render() {
      const count = quantity.valueAsNumber;
      const valid = Number.isInteger(count) && count >= 1 && count <= 100000;
      quantity.setAttribute('aria-invalid', String(!valid));
      if (!valid) {
        [unitOutput, totalOutput, depositOutput].forEach(output => {
          if (output) output.textContent = '-';
        });
        rows.forEach(row => row.classList.remove('is-current'));
        if (summary) summary.textContent = translate('quote.invalid');
        return;
      }

      const tier = count < 50 ? 0 : count < 200 ? 1 : count < 500 ? 2 : count < 1000 ? 3 : 4;
      const unit = prices[tier];
      const total = count * unit;
      const deposit = total / 2;
      const locale = window.ReboxLanguage?.getLanguage() === 'es' ? 'es-CL' : 'en-CL';
      const currency = new Intl.NumberFormat(locale, {
        style: 'currency', currency: 'CLP', currencyDisplay: 'narrowSymbol', minimumFractionDigits: 0, maximumFractionDigits: 0
      });
      const formatted = {
        quantity: count,
        unit: currency.format(unit),
        total: currency.format(total),
        deposit: currency.format(deposit)
      };
      if (unitOutput) unitOutput.textContent = formatted.unit;
      if (totalOutput) totalOutput.textContent = formatted.total;
      if (depositOutput) depositOutput.textContent = formatted.deposit;
      rows.forEach(row => row.classList.toggle('is-current', Number(row.dataset.tier) === tier));
      if (summary) summary.textContent = translate('quote.summary', formatted);
    }

    quantity.addEventListener('input', render);
    quantity.addEventListener('change', render);
    document.addEventListener('rebox:languagechange', render);
    render();
  }

  function initGallery() {
    const dialog = document.querySelector('#photo-dialog');
    const triggers = [...document.querySelectorAll('button[data-gallery]')];
    if (!dialog || !triggers.length) return;
    const image = dialog.querySelector('.dialog-image img, img.dialog-image');
    const caption = dialog.querySelector('.dialog-caption');
    const closeButton = dialog.querySelector('.dialog-close');
    const previousButton = dialog.querySelector('.dialog-prev');
    const nextButton = dialog.querySelector('.dialog-next');
    if (!image) return;
    let current = 0;
    let returnFocus = null;

    function render() {
      const trigger = triggers[current];
      const thumbnail = trigger.querySelector('img');
      const source = trigger.dataset.full || thumbnail?.currentSrc || thumbnail?.getAttribute('src');
      if (source) image.setAttribute('src', source);
      image.alt = thumbnail?.alt || '';
      if (caption) caption.textContent = thumbnail?.alt || '';
      if (previousButton) {
        previousButton.disabled = triggers.length < 2;
        previousButton.setAttribute('aria-label', translate('gallery.previous'));
      }
      if (nextButton) {
        nextButton.disabled = triggers.length < 2;
        nextButton.setAttribute('aria-label', translate('gallery.next'));
      }
      closeButton?.setAttribute('aria-label', translate('gallery.close'));
    }

    function move(direction) {
      current = (current + direction + triggers.length) % triggers.length;
      render();
    }

    function restoreFocus() {
      if (returnFocus?.isConnected) returnFocus.focus();
    }

    function close() {
      if (typeof dialog.close === 'function') dialog.close();
      else {
        dialog.removeAttribute('open');
        restoreFocus();
      }
    }

    triggers.forEach((trigger, index) => trigger.addEventListener('click', () => {
      current = index;
      returnFocus = trigger;
      render();
      if (!dialog.open) {
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
      }
      closeButton?.focus();
    }));
    closeButton?.addEventListener('click', close);
    previousButton?.addEventListener('click', () => move(-1));
    nextButton?.addEventListener('click', () => move(1));
    dialog.addEventListener('close', restoreFocus);
    dialog.addEventListener('keydown', event => {
      if (!dialog.open) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      } else if (event.key === 'Escape' && typeof dialog.showModal !== 'function') {
        event.preventDefault();
        close();
      }
    });
    document.addEventListener('rebox:languagechange', () => {
      if (dialog.open) render();
    });
  }

  function initVideoLinks() {
    const video = document.querySelector('#assembly-video');
    if (!video) return;
    document.querySelectorAll('[data-video-time]').forEach(button => {
      button.addEventListener('click', () => {
        const time = Number(button.dataset.videoTime);
        if (!Number.isFinite(time) || time < 0) return;
        const seek = () => {
          const limit = Number.isFinite(video.duration) ? video.duration : time;
          video.currentTime = Math.min(time, limit);
        };
        if (video.readyState >= 1) seek();
        else video.addEventListener('loadedmetadata', seek, {once: true});
        const playback = video.play();
        playback?.catch(() => {});
        video.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'center'
        });
      });
    });
  }

  initAssembly();
  initUses();
  initComparison();
  initNavigation();
  initPrices();
  initGallery();
  initVideoLinks();
})();
