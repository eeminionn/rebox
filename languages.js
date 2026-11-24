'use strict';

(() => {
  const supportedLanguages = new Set(['en', 'es']);
  const attributeBindings = [
    ['data-i18n-alt', 'alt'],
    ['data-i18n-label', 'aria-label'],
    ['data-i18n-content', 'content'],
    ['data-i18n-title', 'title']
  ];
  let language = 'en';

  function translate(key, values = {}) {
    const copy = window.REBOX_COPY || {};
    const template = copy[language]?.[key] ?? copy.en?.[key] ?? key;
    return String(template).replace(/\{(\w+)\}/g, (match, name) => (
      values[name] === undefined ? match : String(values[name])
    ));
  }

  function setLanguage(nextLanguage) {
    if (!supportedLanguages.has(nextLanguage)) return;
    language = nextLanguage;
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = translate(element.dataset.i18n);
    });
    attributeBindings.forEach(([binding, attribute]) => {
      document.querySelectorAll(`[${binding}]`).forEach(element => {
        element.setAttribute(attribute, translate(element.getAttribute(binding)));
      });
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.dispatchEvent(new CustomEvent('rebox:languagechange', {
      detail: {language}
    }));
  }

  window.ReboxLanguage = {
    translate,
    getLanguage: () => language,
    setLanguage
  };

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  // Each visit starts in English; the selector changes this visit only.
  setLanguage('en');
})();
