import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Remont from "./pages/Remont";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Vacancies from "./pages/Vacancies";
import Partners from "./pages/Partners";
import Production from "./pages/Production";
import Leasing from "./pages/Leasing";
import Photogallery from "./pages/Photogallery";
import Promo from "./pages/Promo";
import Review from "./pages/Review";
import Suppliers from "./pages/Suppliers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vacancies" element={<Vacancies/>}/>
      <Route path="/partners" element={<Partners/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/remont" element={<Remont/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/production" element={<Production/>}/>
      <Route path="/leasing" element={<Leasing/>}/>
      <Route path="/photogallery" element={<Photogallery/>}/>
      <Route path="/promo" element={<Promo/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/suppliers" element={<Suppliers/>}/>










    </Routes>
  )
}

export default App