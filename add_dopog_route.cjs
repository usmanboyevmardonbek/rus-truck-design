const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Samosvaly from "./pages/Samosvaly";', 'import Samosvaly from "./pages/Samosvaly";\nimport Dopog from "./pages/Dopog";');
content = content.replace('<Route path="/samosvaly" element={<PageWrapper><Samosvaly/></PageWrapper>}/>', '<Route path="/samosvaly" element={<PageWrapper><Samosvaly/></PageWrapper>}/>\n            <Route path="/avtomobili-dopog" element={<PageWrapper><Dopog/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Dopog route');
