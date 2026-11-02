(() => {
  'use strict';
  const root = document.querySelector('.board-scene');
  const copy = document.querySelector('#board-words');
  if (!root || !copy) return;
  const words = JSON.parse(copy.textContent);
  const cells = [...root.querySelectorAll('[data-cell]')];
  const initial = [true, false, false, false, true, false, false, false, true];
  let stones = [...initial];
  const targets = { rows: [5, 2, 1], cols: [2, 5, 1] };
  const fill = (text, data) => text.replace(/\{(\w+)\}/g, (_, key) => String(data[key]));
  function render() {
    const weights = stones.map((occupied, i) => {
      if (!occupied) return 0;
      const row = Math.floor(i / 3), col = i % 3;
      return 1 + [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
        .filter(([r, c]) => r >= 0 && r < 3 && c >= 0 && c < 3 && stones[r * 3 + c]).length;
    });
    cells.forEach((button, i) => {
      const span = button.querySelector('span');
      if (stones[i]) {
        const stone = span || document.createElement('span');
        stone.textContent = String(weights[i]);
        stone.setAttribute('aria-hidden', 'true');
        if (!span) button.append(stone);
      } else if (span) span.remove();
      const content = stones[i] ? fill(words.stone, { weight: weights[i] }) : words.empty;
      button.setAttribute('aria-label', fill(words.cell, { row: Math.floor(i / 3) + 1, column: i % 3 + 1, content }));
      button.setAttribute('aria-pressed', String(stones[i]));
    });
    let matched = 0;
    for (let i = 0; i < 3; i++) {
      const row = weights.slice(i * 3, i * 3 + 3).reduce((a, b) => a + b, 0);
      const col = weights[i] + weights[i + 3] + weights[i + 6];
      for (const [kind, actual, goal] of [['row', row, targets.rows[i]], ['col', col, targets.cols[i]]]) {
        const output = root.querySelector(`[data-${kind}="${i}"]`);
        output.textContent = `${actual === goal ? "✓ " : ""}${actual} / ${goal}`;
        output.classList.toggle('matched', actual === goal);
        if (actual === goal) matched++;
      }
    }
    root.querySelector('[role="status"]').textContent = matched === 6 ? words.matched : '';
  }
  cells.forEach((button, i) => button.addEventListener('click', () => { stones[i] = !stones[i]; render(); }));
  root.querySelector('[data-reset]').addEventListener('click', () => { stones = [...initial]; render(); });
  render();
})();
