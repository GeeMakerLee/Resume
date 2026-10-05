(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('lang-toggle');

  function setLanguage(en) {
    root.lang = en ? 'en' : 'zh-CN';
    toggle.textContent = en ? '中文' : 'EN';
    toggle.setAttribute('aria-label', en ? '切换中文' : 'Switch to English');
    document.title = en
      ? 'Hao Li · Applied AI & Agent Systems'
      : '李昊 · AI 应用与 Agent 开发';
  }

  function syncUrl() {
    if (location.protocol !== 'http:' && location.protocol !== 'https:') return;
    const url = new URL(location.href);
    if (root.lang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    if (root.dataset.view === 'product') url.searchParams.set('view', 'product');
    else url.searchParams.delete('view');
    history.replaceState(null, '', url);
  }

  setLanguage(new URLSearchParams(location.search).get('lang') === 'en');
  toggle.addEventListener('click', () => {
    const en = root.lang !== 'en';
    setLanguage(en);
    syncUrl();
  });

  const viewButtons = document.querySelectorAll('[data-view-button]');
  function setView(view) {
    root.dataset.view = view === 'product' ? 'product' : 'engineering';
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.viewButton === root.dataset.view)));
  }
  setView(new URLSearchParams(location.search).get('view'));
  viewButtons.forEach(button => button.addEventListener('click', () => {
    setView(button.dataset.viewButton);
    syncUrl();
  }));

  function revealProject() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); }
    catch { return; }
    const project = document.getElementById(id);
    if (!project || !project.classList.contains('project-card')) return;
    const detail = project.querySelector('details');
    if (detail) detail.open = true;
  }
  revealProject();
  window.addEventListener('hashchange', revealProject);
  document.getElementById('print').addEventListener('click', () => window.print());

  const media = window.PORTFOLIO_MEDIA || {};
  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const entries = media[gallery.dataset.gallery];
    if (!Array.isArray(entries)) return;
    entries.forEach(item => {
      if (!item || !/^assets\/screenshots\/[a-zA-Z0-9/_-]+\.(png|jpe?g|webp)$/i.test(item.src)
          || item.src.includes('..')) return;
      const figure = document.createElement('figure');
      figure.className = 'screenshot';
      figure.hidden = true;
      const link = document.createElement('a');
      link.href = item.src;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const img = document.createElement('img');
      img.alt = item.en || item.zh || 'Project screenshot';
      img.decoding = 'async';
      img.addEventListener('load', () => { figure.hidden = false; });
      img.addEventListener('error', () => { figure.remove(); });
      const caption = document.createElement('figcaption');
      ['zh', 'en'].forEach(lang => {
        const span = document.createElement('span');
        span.dataset.lang = lang;
        span.textContent = item[lang] || item.zh || item.en || '';
        caption.append(span);
      });
      link.append(img);
      figure.append(link, caption);
      gallery.append(figure);
      img.src = item.src;
    });
  });
})();
