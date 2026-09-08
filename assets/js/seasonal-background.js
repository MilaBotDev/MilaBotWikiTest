(() => {
  const config = window.siteAppearance || {};
  const DEFAULT_BACKGROUND = config.defaultBackground || "bg.jpg";
  const SCHEDULES = config.backgroundSeasons || [];

  const getDayOfYear = (month, day) => {
    const date = new Date(Date.UTC(2024, month - 1, day));
    const yearStart = new Date(Date.UTC(2024, 0, 0));
    return Math.floor((date - yearStart) / 86400000);
  };

  const isDateInRange = (month, day, range) => {
    const currentDay = getDayOfYear(month, day);
    const startDay = getDayOfYear(range.start.month, range.start.day);
    const endDay = getDayOfYear(range.end.month, range.end.day);

    if (startDay <= endDay) {
      return currentDay >= startDay && currentDay <= endDay;
    }

    return currentDay >= startDay || currentDay <= endDay;
  };

  const getActiveBackground = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const activeRange = SCHEDULES.find((range) =>
      range.enabled && range.image && range.start && range.end && isDateInRange(month, day, range));
    return activeRange?.image || DEFAULT_BACKGROUND;
  };

  const scriptUrl = document.currentScript?.src || window.location.href;
  const imagePath = new URL(`../../images/${encodeURIComponent(getActiveBackground(new Date()))}`, scriptUrl).href;
  document.documentElement.style.setProperty("--site-background-image", `url("${imagePath}")`);
})();
