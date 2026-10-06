const fs = require('fs');
let content = fs.readFileSync('src/components/Header.jsx', 'utf-8');

// The best way is to find `<AnimatePresence>` and then the next `<motion.div` and then the next `</div>` which corresponds to it.
// Let's use string manipulation based on `workingTime`, `specSourse`, `parse`, `catalog`.

const targets = [
  { name: 'workingTime' },
  { name: 'specSourse' },
  { name: 'parse' },
  { name: 'catalog' }
];

targets.forEach(t => {
  const startCondition = `{${t.name} && (`;
  let idx = content.indexOf(startCondition);
  if (idx !== -1) {
    let divIdx = content.indexOf('<motion.div', idx);
    if (divIdx !== -1) {
      // Find the first </div> after <motion.div
      // But wait! There could be nested divs.
      // Let's look for `)}\n` after divIdx
      let closeBracketIdx = content.indexOf(')}', divIdx);
      if (closeBracketIdx !== -1) {
        // The nearest </div> before `)}` is the one we want to replace.
        let substring = content.substring(divIdx, closeBracketIdx);
        // Replace the LAST `</div>` in this substring with `</motion.div>`
        let lastDivIdx = substring.lastIndexOf('</div>');
        if (lastDivIdx !== -1) {
           substring = substring.substring(0, lastDivIdx) + '</motion.div>' + substring.substring(lastDivIdx + 6);
           content = content.substring(0, divIdx) + substring + '</AnimatePresence>\n' + content.substring(closeBracketIdx + 2);
        }
      }
    }
  }
});

fs.writeFileSync('src/components/Header.jsx', content, 'utf-8');
console.log('Fixed tags properly');
