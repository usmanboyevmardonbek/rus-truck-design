const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Krany from "./pages/Krany";', 'import Krany from "./pages/Krany";\nimport Zapravka from "./pages/Zapravka";');
content = content.replace('<Route path="/krany-manipulator" element={<PageWrapper><Krany/></PageWrapper>}/>', '<Route path="/krany-manipulator" element={<PageWrapper><Krany/></PageWrapper>}/>\n            <Route path="/zapravka" element={<PageWrapper><Zapravka/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Zapravka route');
