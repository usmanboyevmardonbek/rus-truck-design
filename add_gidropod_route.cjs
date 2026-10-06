const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Zapravka from "./pages/Zapravka";', 'import Zapravka from "./pages/Zapravka";\nimport Gidropod from "./pages/Gidropod";');
content = content.replace('<Route path="/zapravka" element={<PageWrapper><Zapravka/></PageWrapper>}/>', '<Route path="/zapravka" element={<PageWrapper><Zapravka/></PageWrapper>}/>\n            <Route path="/gidropod" element={<PageWrapper><Gidropod/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Gidropod route');
