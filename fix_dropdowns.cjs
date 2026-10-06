const fs = require('fs');

const headerPath = 'src/components/Header.jsx';
let content = fs.readFileSync(headerPath, 'utf-8');

// The blocks in Header.jsx are simple so we can do exact replacements.

// 1. workingTime
content = content.replace(
    '{workingTime && (',
    '<AnimatePresence>\n                  {workingTime && ('
);
content = content.replace(
    '<div className="absolute left-1/2 -translate-x-1/3 top-[calc(100%+6px)] shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] w-max bg-white p-4">',
    '<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }} className="absolute left-1/2 -translate-x-1/3 top-[calc(100%+6px)] shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] w-max bg-white p-4">'
);

// 2. specSourse, parse, catalog all use the exact same wrapper div string.
// Let's replace the condition openings:
content = content.replace('{specSourse && (', '<AnimatePresence>\n                        {specSourse && (');
content = content.replace('{parse && (', '<AnimatePresence>\n                        {parse && (');
content = content.replace('{catalog && (', '<AnimatePresence>\n                        {catalog && (');

// Let's replace the div openings:
content = content.replace(
    /<div className="wrapper absolute top-full left-1\/2 -translate-x-1\/2 max-w-300 w-full bg-gray-200 p-6">/g,
    '<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }} className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6">'
);

// We need to replace the `</div>\n                  )}` closures with `</motion.div>\n                  )}\n                  </AnimatePresence>`.
// However, regex replacement could be messy. Let's do a simple count for closing tags.
content = content.replace(/<\/div>\n(\s*)}\)/g, '</motion.div>\n$1)}\n$1</AnimatePresence>');

// For the wrapper ones, they are 11 levels deep... 
// Actually, this is getting complex to do via regex.

fs.writeFileSync('src/components/Header.jsx', content, 'utf-8');
