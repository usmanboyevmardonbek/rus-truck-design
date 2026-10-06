const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Konteyner from "./pages/Konteyner";', 'import Konteyner from "./pages/Konteyner";\nimport Pogruzki from "./pages/Pogruzki";');
content = content.replace('<Route path="/konteynerovozy" element={<PageWrapper><Konteyner/></PageWrapper>}/>', '<Route path="/konteynerovozy" element={<PageWrapper><Konteyner/></PageWrapper>}/>\n            <Route path="/kryukovye-pogruzchiki" element={<PageWrapper><Pogruzki/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Pogruzki route');
