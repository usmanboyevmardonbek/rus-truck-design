import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Remont from "./pages/Remont";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Vacancies from "./pages/Vacancies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vacancies" element={<Vacancies/>}/>
      
      <Route path="/service" element={<Service/>}/>
      <Route path="/remont" element={<Remont/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/contact" element={<Contact/>}/>




    </Routes>
  )
}

export default App