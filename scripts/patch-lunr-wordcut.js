const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'node_modules', 'lunr-languages', 'lunr.hi.js');
const fallbackSnippet = `    if (!lunr.wordcut) {
      lunr.wordcut = require('./wordcut');
    }
    var segmenter = lunr.wordcut;
`;
const originalSnippet = '    var segmenter = lunr.wordcut;\n';

if (!fs.existsSync(targetPath)) {
  console.warn(`[patch-lunr-wordcut] Target file not found: ${targetPath}`);
  process.exit(0);
}

const source = fs.readFileSync(targetPath, 'utf8');

if (source.includes("lunr.wordcut = require('./wordcut');")) {
  console.log('[patch-lunr-wordcut] Hindi tokenizer patch already applied.');
  process.exit(0);
}

if (!source.includes(originalSnippet)) {
  console.error('[patch-lunr-wordcut] Unable to locate patch target in lunr.hi.js.');
  process.exit(1);
}

fs.writeFileSync(targetPath, source.replace(originalSnippet, fallbackSnippet), 'utf8');
console.log('[patch-lunr-wordcut] Applied Hindi tokenizer fallback patch.');
