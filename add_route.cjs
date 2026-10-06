const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Shtornye from "./pages/Shtornye";', 'import Shtornye from "./pages/Shtornye";\nimport Krany from "./pages/Krany";');
content = content.replace('<Route path="/shtornye-avtomobili" element={<PageWrapper><Shtornye/></PageWrapper>}/>', '<Route path="/shtornye-avtomobili" element={<PageWrapper><Shtornye/></PageWrapper>}/>\n            <Route path="/krany-manipulyatory" element={<PageWrapper><Krany/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Krany route');
