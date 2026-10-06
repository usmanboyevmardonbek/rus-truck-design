const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf-8');

content = content.replace('import Evakuator from "./pages/Evakuator";', 'import Evakuator from "./pages/Evakuator";\nimport Bortov from "./pages/Bortov";');
content = content.replace('<Route path="/evakuator" element={<PageWrapper><Evakuator/></PageWrapper>}/>', '<Route path="/evakuator" element={<PageWrapper><Evakuator/></PageWrapper>}/>\n            <Route path="/bortovye-avtomobili" element={<PageWrapper><Bortov/></PageWrapper>}/>');

fs.writeFileSync('src/App.jsx', content, 'utf-8');
console.log('Added Bortov route');
