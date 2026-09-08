(() => {
  const logo = document.querySelector('#header .logo img');
  if (!logo) return;

  const scriptUrl = document.currentScript.src;
  const siteRoot = new URL('../../', scriptUrl);
  const config = window.siteAppearance || {};
  const fallback = new URL(config.logoFallback || 'images/Favicon.png', siteRoot).href;
  const images = window.siteLogoImages || [];
  const favicon = document.querySelector('link[rel="icon"]') ||
    document.head.appendChild(document.createElement('link'));
  favicon.rel = 'icon';
  // Let the browser detect the image format (logos may be JPEG, PNG, etc.).
  favicon.removeAttribute('type');

  const setImage = (url) => {
    logo.src = url;
    favicon.href = url;
  };

  logo.addEventListener('error', () => {
    if (logo.src !== fallback) setImage(fallback);
  });

  const today = new Date();
  const currentDay = (today.getMonth() + 1) * 100 + today.getDate();
  const season = (config.logoSeasons || []).find((entry) => {
    if (!entry.enabled || !entry.image || !entry.start || !entry.end) return false;
    const start = entry.start.month * 100 + entry.start.day;
    const end = entry.end.month * 100 + entry.end.day;
    return start <= end
      ? currentDay >= start && currentDay <= end
      : currentDay >= start || currentDay <= end;
  });
  const selected = season
    ? `images/Logos/${encodeURIComponent(season.image)}`
    : images[Math.floor(Math.random() * images.length)];
  setImage(selected ? new URL(selected, siteRoot).href : fallback);
})();
