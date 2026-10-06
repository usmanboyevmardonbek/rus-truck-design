const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Pogruzki from "./pages/Pogruzki";', 'import Pogruzki from "./pages/Pogruzki";\nimport Samosvaly from "./pages/Samosvaly";');
content = content.replace('<Route path="/kryukovye-pogruzchiki" element={<PageWrapper><Pogruzki/></PageWrapper>}/>', '<Route path="/kryukovye-pogruzchiki" element={<PageWrapper><Pogruzki/></PageWrapper>}/>\n            <Route path="/samosvaly" element={<PageWrapper><Samosvaly/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Samosvaly route');
