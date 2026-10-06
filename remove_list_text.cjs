const fs = require('fs');

const files = [
  'src/pages/Shtornye.jsx',
  'src/pages/Krany.jsx',
  'src/pages/Zapravka.jsx',
  'src/pages/Gidropod.jsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Regex to match the Specs block
    const regex = /\{\/\* Specs - Only visible in List View \*\/\}\s*\{viewMode === 'list' && \(\s*<div className="flex flex-col gap-2 mt-auto">[\s\S]*?<\/div>\s*\)\}/g;
    
    content = content.replace(regex, '');
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Removed specs from ${file}`);
  }
}
