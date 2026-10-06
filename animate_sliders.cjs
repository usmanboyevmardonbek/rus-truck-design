const fs = require('fs');
const path = require('path');

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir);

for (const file of files) {
    if (!file.endsWith('.jsx')) continue;
    
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes('<SwiperSlide') && !content.includes('variants={fadeUp} className="h-full"')) {
        let hasChanges = false;
        
        // Add imports if needed
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

        // We replace `<SwiperSlide ...>` with `<SwiperSlide ...><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="h-full">`
        content = content.replace(/<SwiperSlide(.*?)>/g, '<SwiperSlide$1>\n<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="h-full">');
        
        // Replace `</SwiperSlide>` with `</motion.div></SwiperSlide>`
        content = content.replace(/<\/SwiperSlide>/g, '</motion.div>\n</SwiperSlide>');

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Animated sliders in ' + file);
    }
}
