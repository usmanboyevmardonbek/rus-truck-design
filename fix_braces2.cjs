const fs = require('fs');
let content = fs.readFileSync('src/components/Header.jsx', 'utf-8');
content = content.replace(/<\/motion\.div>\s*<\/AnimatePresence>/g, '</motion.div>\n                    )}\n                    </AnimatePresence>');
fs.writeFileSync('src/components/Header.jsx', content, 'utf-8');
