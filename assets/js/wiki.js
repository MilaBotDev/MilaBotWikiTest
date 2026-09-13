(() => {
  const content = document.querySelector('.wiki-content');
  const toc = document.querySelector('.wiki-toc');
  if (content && toc) {
    content.querySelectorAll('h2').forEach((heading, index) => {
      if (!heading.id) heading.id = `wiki-section-${index + 1}`;
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      li.append(link);
      toc.querySelector('ul').append(li);
    });
    toc.hidden = !toc.querySelector('li');
  }
  document.querySelectorAll('[data-wiki-filter]').forEach(input => {
    const catalogue = document.getElementById(input.dataset.wikiFilter);
    if (!catalogue) return;
    const rows = [...catalogue.querySelectorAll('[data-wiki-entry]')];
    const count = document.getElementById(`${catalogue.id}-count`);
    const update = () => {
      const words = input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      let visible = 0;
      rows.forEach(row => {
        row.hidden = !words.every(word => row.textContent.toLocaleLowerCase().includes(word));
        if (!row.hidden) visible++;
      });
      if (count) count.textContent = visible ? `${visible} of ${rows.length} entries` : 'No matches. Try another name or category.';
    };
    input.addEventListener('input', update);
    update();
  });
  const calculator = document.getElementById('wiki-calculator');
  if (calculator) {
    fetch(calculator.dataset.statsUrl).then(response => {
      if (!response.ok) throw new Error('Stats unavailable');
      return response.json();
    }).then(data => {
      const treat = document.getElementById('calc-treat');
      const plate = document.getElementById('calc-plate');
      const level = document.getElementById('calc-level');
      const result = document.getElementById('calc-result');
      const addOption = (select, value, label) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        select.append(option);
      };
      data.treats.forEach(item => addOption(treat, item.id, item.name));
      addOption(plate, '', 'No plate');
      data.plates.forEach(item => addOption(plate, item.id, item.name));
      const update = () => {
        const value = Number(level.value);
        if (!Number.isInteger(value) || value < 1 || value > data.maxLevel) {
          result.textContent = `Enter a whole level from 1 to ${data.maxLevel}.`;
          return;
        }
        const base = data.treats.find(item => item.id === treat.value);
        const effects = data.plates.find(item => item.id === plate.value)?.effects || {};
        const hp = Math.floor((base.hp + (effects.hpFlat || 0) + (value - 1) * data.levelBonus.hpFlat) * (1 + (effects.hpPercent || 0) / 100));
        const attack = Math.floor((base.attack + (effects.attackFlat || 0) + (value - 1) * data.levelBonus.attackFlat) * (1 + (effects.attackPercent || 0) / 100));
        result.textContent = `${hp} HP · ${attack} attack`;
      };
      calculator.addEventListener('input', update);
      calculator.hidden = false;
      document.getElementById('calc-fallback').hidden = true;
      update();
    }).catch(() => {
      document.getElementById('calc-fallback').textContent = 'The calculator could not load. Use the formulas and reference tables below.';
    });
  }
})();
