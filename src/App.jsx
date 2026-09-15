import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Service from "./pages/Service";
import Remont from "./pages/Remont";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/remont" element={<Remont/>}/>


    </Routes>
  )
}

export default App