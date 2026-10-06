const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Gidropod from "./pages/Gidropod";', 'import Gidropod from "./pages/Gidropod";\nimport Sisterna from "./pages/Sisterna";');
content = content.replace('<Route path="/gidropod" element={<PageWrapper><Gidropod/></PageWrapper>}/>', '<Route path="/gidropod" element={<PageWrapper><Gidropod/></PageWrapper>}/>\n            <Route path="/sisterna" element={<PageWrapper><Sisterna/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Sisterna route');
