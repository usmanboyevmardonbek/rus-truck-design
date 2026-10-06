const fs = require('fs');
const path = require('path');

const pagesDir = 'src/pages';
const skipFiles = ['Home.jsx'];

fs.readdirSync(pagesDir).forEach(file => {
    if (!file.endsWith('.jsx') || skipFiles.includes(file)) return;
    
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes('motion.section')) return;
    
    let hasChanges = false;
    
    if (content.includes('<section')) {
        let importsToAdd = [];
        if (!content.includes('motion/react')) {
            importsToAdd.push('import { motion } from "motion/react";');
        }
        if (!content.includes('utils/animation')) {
            importsToAdd.push('import { fadeUp } from "../utils/animation";');
        }
        
        if (importsToAdd.length > 0) {
            content = importsToAdd.join('\n') + '\n' + content;
            hasChanges = true;
        }
        
        content = content.replace(/<section\b/g, '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}');
        content = content.replace(/<\/section>/g, '</motion.section>');
        hasChanges = true;
    }
    
    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Updated ' + file);
    }
});
