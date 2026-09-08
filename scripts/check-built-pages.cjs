const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const output = path.resolve(process.argv[2] || '_site');
const basePath = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '');
const files = ['404.html'];
for (const section of ['tos', 'security', 'privacy']) {
  const directory = path.join(output, section);
  assert(fs.existsSync(path.join(directory, 'index.html')), `Missing ${section} page`);
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(file);
      else if (entry.name.endsWith('.html')) files.push(path.relative(output, file));
    }
  }
  walk(directory);
}
for (const file of files) {
  const html = fs.readFileSync(path.join(output, file), 'utf8');
  assert(/<html\b/i.test(html), `${file}: missing HTML page layout`);
  for (const id of ['wrapper', 'header', 'page-content', 'bg']) {
    assert(html.includes(`id="${id}"`), `${file}: missing layout element ${id}`);
  }
  for (const stylesheet of ['main', 'motion', 'cursors']) {
    const asset = `/assets/css/${stylesheet}.css`;
    assert(html.includes(`href="${basePath}${asset}"`), `${file}: missing or incorrect ${stylesheet} stylesheet link`);
    assert(fs.existsSync(path.join(output, asset.slice(1))), `Missing built asset: ${asset}`);
  }
}
console.log(`Verified layouts and stylesheet links on ${files.length} built pages.`);
