const fs = require('fs');
let content = fs.readFileSync('src/pages/Shtornye.jsx', 'utf-8');

// Replace local loader with global loader logic
let oldLoader = `<AnimatePresence>
                {isLocalLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-[#F8F8F8]/80 flex items-start justify-center pt-20 backdrop-blur-[2px]"
                  >
                    <div className="w-[40px] h-[40px] border-[3px] border-[#EBEBEB] border-t-[#FEC80B] rounded-full animate-spin"></div>
                  </motion.div>
                )}
              </AnimatePresence>`;

let newLoader = `<AnimatePresence>
                {isLocalLoading && <Loader />}
              </AnimatePresence>`;

// Add window.scrollTo(0,0) to handleViewChange to make it act like refresh
content = content.replace('if (mode === viewMode) return;\n    setIsLocalLoading(true);', 
`if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);`);

content = content.replace(oldLoader, newLoader);

fs.writeFileSync('src/pages/Shtornye.jsx', content, 'utf-8');
console.log('Fixed loader in Shtornye.jsx');
