const fs = require('fs');
let content = fs.readFileSync('src/components/Header.jsx', 'utf-8');

// Function to wrap conditional blocks with AnimatePresence and motion.div
function animateBlock(content, conditionStr, divStartStr) {
    const startIndex = content.indexOf(conditionStr);
    if (startIndex === -1) return content;
    
    // Find the opening of the div
    const divStartIndex = content.indexOf(divStartStr, startIndex);
    if (divStartIndex === -1) return content;

    // Find the end of the div by counting braces/divs or simply finding the corresponding )}
    // Since we know it's something like:
    // {condition && (
    //   <div ...>
    //     ...
    //   </div>
    // )}
    
    // Let's find the matching `)}`
    // We can do this by searching forward for `)}` which matches the indentation of `{condition && (`
    
    const blockEnd = content.indexOf(')}', divStartIndex);
    if (blockEnd === -1) return content;
    
    // It's safer to just split and replace exactly if we know the content
    return content; 
}

// Manual replace because we know the exact string pattern
// For workingTime
content = content.replace(
    /\{workingTime && \([\s\S]*?<div className="absolute left-1\/2 -translate-x-1\/3 top-\[calc\(100%\+6px\)\] shadow-\[0_4px_12px_0_rgba\(0,0,0,0.1\)\] w-max bg-white p-4">/g,
    '<AnimatePresence>\n                  {workingTime && (\n                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }} className="absolute left-1/2 -translate-x-1/3 top-[calc(100%+6px)] shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] w-max bg-white p-4">'
);
content = content.replace(
    /<\/div>\n                  \)}/g,
    '</motion.div>\n                  )}\n                  </AnimatePresence>'
);

// For specSourse
content = content.replace(
    /\{specSourse && \([\s\S]*?<div className="wrapper absolute top-full left-1\/2 -translate-x-1\/2 max-w-300 w-full bg-gray-200 p-6 z-60">/g,
    '<AnimatePresence>\n                {specSourse && (\n                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }} className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6 z-60">'
);
content = content.replace(
    /<\/div>\n                \)}/g,
    '</motion.div>\n                )}\n                </AnimatePresence>'
);

// For parse and catalog, they use `p-6">` without `z-60`
content = content.replace(
    /\{parse && \([\s\S]*?<div className="wrapper absolute top-full left-1\/2 -translate-x-1\/2 max-w-300 w-full bg-gray-200 p-6">/g,
    '<AnimatePresence>\n                        {parse && (\n                          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }} className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6">'
);
content = content.replace(
    /\{catalog && \([\s\S]*?<div className="wrapper absolute top-full left-1\/2 -translate-x-1\/2 max-w-300 w-full bg-gray-200 p-6">/g,
    '<AnimatePresence>\n                        {catalog && (\n                          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }} className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6">'
);
content = content.replace(
    /<\/div>\n                        \)}/g,
    '</motion.div>\n                        )}\n                        </AnimatePresence>'
);

fs.writeFileSync('src/components/Header.jsx', content, 'utf-8');
console.log('Dropdowns animated');
