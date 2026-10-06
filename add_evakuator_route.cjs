const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Sisterna from "./pages/Sisterna";', 'import Sisterna from "./pages/Sisterna";\nimport Evakuator from "./pages/Evakuator";');
content = content.replace('<Route path="/sisterna" element={<PageWrapper><Sisterna/></PageWrapper>}/>', '<Route path="/sisterna" element={<PageWrapper><Sisterna/></PageWrapper>}/>\n            <Route path="/evakuator" element={<PageWrapper><Evakuator/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Evakuator route');
