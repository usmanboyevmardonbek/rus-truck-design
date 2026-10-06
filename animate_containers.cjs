const fs = require('fs');
const path = require('path');

const pagesDir = 'src/pages';
const skipFiles = ['Home.jsx'];

const files = fs.readdirSync(pagesDir);

for (const file of files) {
    if (!file.endsWith('.jsx') || skipFiles.includes(file)) continue;

    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes('motion.div className="container"')) continue; // Already processed

    let hasChanges = false;
    let idx = 0;

    while ((idx = content.indexOf('<div className="container">', idx)) !== -1) {
        // Find matching closing div
        let divCount = 1;
        let searchIdx = idx + '<div className="container">'.length;
        
        while (divCount > 0 && searchIdx < content.length) {
            let nextOpen = content.indexOf('<div', searchIdx);
            let nextClose = content.indexOf('</div', searchIdx);
            
            // Avoid false positives like <div... /> or <divSomething
            // In JSX, they are usually <div or </div>
            if (nextClose === -1) break;
            
            if (nextOpen !== -1 && nextOpen < nextClose) {
                divCount++;
                searchIdx = nextOpen + 4;
            } else {
                divCount--;
                searchIdx = nextClose + 5;
            }
        }
        
        if (divCount === 0) {
            // searchIdx is right after `</div`
            // Let's replace the opening tag
            let beforeOpen = content.substring(0, idx);
            let afterOpen = content.substring(idx + '<div className="container">'.length);
            
            content = beforeOpen + '<motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>' + afterOpen;
            
            // Adjust searchIdx because we added characters
            let diff = '<motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>'.length - '<div className="container">'.length;
            searchIdx += diff;
            
            // Find the </div> that we need to replace
            // It ends at searchIdx, so it starts at searchIdx - 5
            let beforeClose = content.substring(0, searchIdx - 5);
            let afterClose = content.substring(searchIdx - 5 + 6); // 6 is length of </div>
            
            content = beforeClose + '</motion.div>' + afterClose;
            
            hasChanges = true;
            // Advance idx past the closing tag
            idx = searchIdx + ('</motion.div>'.length - 6);
        } else {
            idx += '<div className="container">'.length; // Malformed or couldn't parse
        }
    }

    if (hasChanges) {
        let importsToAdd = [];
        if (!content.includes('motion/react')) {
            importsToAdd.push('import { motion } from "motion/react";');
        }
        if (!content.includes('utils/animation')) {
            importsToAdd.push('import { fadeUp } from "../utils/animation";');
        }

        if (importsToAdd.length > 0) {
            content = importsToAdd.join('\n') + '\n' + content;
        }

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Animated containers in ' + file);
    }
}
