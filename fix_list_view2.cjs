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
    
    // First, remove ALL specs blocks completely
    const specsRegex = /\n*\s*\{\/\* Specs - Only visible in List View \*\/\}\s*\{viewMode === 'list' && \(\s*<div className="flex flex-col gap-2 mt-auto">[\s\S]*?<\/div>\s*\)\}/g;
    content = content.replace(specsRegex, '');
    
    // Now, put it back ONLY in the right place.
    // The right place is between `</h3>` and `</div>` inside the `Content Container`.
    // Let's find the exact string:
    // </h3>
    // </div>
    // {/* Right / Bottom Actions */}
    
    const targetStr = `</h3>\n                        </div>\n                        \n                        {/* Right / Bottom Actions */}`;
    const specsBlock = `</h3>
                          
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
                          )}
                        </div>
                        
                        {/* Right / Bottom Actions */}`;
                        
    content = content.replace(targetStr, specsBlock);
    
    // For Gidropod, we ALSO need to fix the SEO block visibility
    if (file.includes('Gidropod')) {
       // Ensure SEO block is wrapped
       if (!content.includes('{viewMode === \'grid\' && (')) {
           content = content.replace(
             '<div className="bg-white p-6 md:p-8 rounded shadow-sm mt-10">',
             '{viewMode === \'grid\' && (\n              <div className="bg-white p-6 md:p-8 rounded shadow-sm mt-10">'
           );
           content = content.replace(
             /<\/ul>\n\s*<\/div>\n\n\s*<\/div>/g,
             '</ul>\n              </div>\n              )}\n\n            </div>'
           );
       }
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Fixed ${file}`);
  }
}
