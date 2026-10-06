const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Bortov from "./pages/Bortov";', 'import Bortov from "./pages/Bortov";\nimport Autofurgony from "./pages/Autofurgony";');
content = content.replace('<Route path="/bortovye-avtomobili" element={<PageWrapper><Bortov/></PageWrapper>}/>', '<Route path="/bortovye-avtomobili" element={<PageWrapper><Bortov/></PageWrapper>}/>\n            <Route path="/izotermicheskie-furgony" element={<PageWrapper><Autofurgony/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Autofurgony route');
