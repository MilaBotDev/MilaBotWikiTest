// Edit logo, favicon, and background settings here.
// Dates repeat annually, use the visitor's local date, and include both ends.
// Ranges can cross New Year. The first matching enabled entry wins.
window.siteAppearance = {
  // Paths are relative to the website root.
  logoFallback: 'images/Favicon.png',
  defaultBackground: 'bg.jpg', // Filename in images/.

  // Outside these seasons, choose randomly from images/Logos.
  // The favicon always matches the chosen logo.
  logoSeasons: [
    {
      enabled: false,
      name: 'Example: June',
      start: { month: 6, day: 1 },
      end: { month: 6, day: 30 },
      image: 'MilaBotPinkish.jpg', // Filename in images/Logos/.
    },
  ],

  backgroundSeasons: [
    {
      enabled: true,
      name: 'Pride month',
      start: { month: 6, day: 1 },
      end: { month: 6, day: 30 },
      image: 'bgPrideMonth.jpg', // Filename in images/.
    },
  ],
};
