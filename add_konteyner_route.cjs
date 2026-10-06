const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Autofurgony from "./pages/Autofurgony";', 'import Autofurgony from "./pages/Autofurgony";\nimport Konteyner from "./pages/Konteyner";');
content = content.replace('<Route path="/avtofurgony" element={<PageWrapper><Autofurgony/></PageWrapper>}/>', '<Route path="/avtofurgony" element={<PageWrapper><Autofurgony/></PageWrapper>}/>\n            <Route path="/konteynerovozy" element={<PageWrapper><Konteyner/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Konteyner route');
