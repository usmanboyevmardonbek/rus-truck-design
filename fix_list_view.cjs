const fs = require('fs');

const files = [
  'src/pages/Shtornye.jsx',
  'src/pages/Krany.jsx',
  'src/pages/Zapravka.jsx',
  'src/pages/Gidropod.jsx'
];

const specsBlock = `
                          {/* Specs - Only visible in List View */}
                          {viewMode === 'list' && (
                            <div className="flex flex-col gap-2 mt-auto">
                              {product.specs.map((spec, i) => (
                                <div key={i} className="flex items-end text-sm font-fira-sans text-gray-500 w-full">
                                  <span className="shrink-0">{spec.label}</span>
                                  <span className="flex-1 border-b border-dashed border-gray-300 mx-2 mb-1"></span>
                                  <span className="shrink-0 text-gray-800 font-medium">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          )}`;

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Check if we already have specs
    if (!content.includes('Specs - Only visible in List View')) {
      content = content.replace(
        /<\/h3>/g,
        '</h3>' + specsBlock
      );
    }
    
    // Hide SEO text in Gidropod.jsx
    if (file.includes('Gidropod')) {
      content = content.replace(
        '<div className="bg-white p-6 md:p-8 rounded shadow-sm mt-10">',
        '{viewMode === \'grid\' && (\n              <div className="bg-white p-6 md:p-8 rounded shadow-sm mt-10">'
      );
      content = content.replace(
        /<\/ul>\n\s*<\/div>\n\n\s*<\/div>/g,
        '</ul>\n              </div>\n              )}\n\n            </div>'
      );
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
