const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const oldStr = `<div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">Сортировка:</span>
                <button 
                  className="font-fira-sans text-sm font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors"
                  onClick={() => setShtore(!shtor)}
                >
                  По бренду <ChevronDown className="w-4 h-4" />
                </button>
              </div>`;

const oldStr2 = `<div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">Сортировка:</span>
                <button 
                  className="font-fira-sans text-sm font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors"
                  onClick={() => setShtore(!shtor)}
                >
                  По Бренду <ChevronDown className="w-4 h-4" />
                </button>
              </div>`;

const newStr = `<div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">Сортировка:</span>
                <div className="relative z-50">
                  <button className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors" onClick={() => setShtore(!shtor)}>
                    По бренду <ChevronDown className="w-4 h-4" />
                  </button>
                  <ul className={"absolute bg-white transition-all mt-4 -left-23 duration-300 ease-in overflow-y-hidden " + (shtor ? "h-[216px]" : "h-0")}>
                    <li className="border-t border-x border-b rounded-t-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">По популярности</p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">Сначала новые</p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">В наличии</p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">По возрастанию цены</p>
                    </li>
                    <li className="border-b border-x rounded-b-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">По бренду</p>
                    </li>
                  </ul>
                </div>
              </div>`;

const files = [
  'Shtornye.jsx', 'Krany.jsx', 'Zapravka.jsx', 'Gidropod.jsx', 
  'Sisterna.jsx', 'Bortov.jsx', 'Autofurgony.jsx', 'Konteyner.jsx', 
  'Pogruzki.jsx', 'Samosvaly.jsx', 'Dopog.jsx'
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes(oldStr)) {
      content = content.replace(oldStr, newStr);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated ' + file);
    } else if (content.includes(oldStr2)) {
      content = content.replace(oldStr2, newStr);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated ' + file);
    } else {
      console.log('Could not find pattern in ' + file);
    }
  }
});
