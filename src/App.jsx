import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Loader } from "./components/Loader";
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
import Catalog from "./pages/Catalog";
import Shtornye from "./pages/Shtornye";
import Krany from "./pages/Krany";
import Zapravka from "./pages/Zapravka";
import Gidropod from "./pages/Gidropod";
import Sisterna from "./pages/Sisterna";
import Evakuator from "./pages/Evakuator";
import Bortov from "./pages/Bortov";
import Autofurgony from "./pages/Autofurgony";
import Konteyner from "./pages/Konteyner";
import Pogruzki from "./pages/Pogruzki";
import Samosvaly from "./pages/Samosvaly";
import Dopog from "./pages/Dopog";
import Cert from "./pages/Cert";
import Video from "./pages/Video";

// We define a smoother fadeUp variant specifically for page transitions
const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Scroll to top on route change before new page renders
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Loader 1.5 soniya aylanadi
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="global-loader" />
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>
            <Route path="/about" element={<PageWrapper><About/></PageWrapper>}/>
            <Route path="/vacancies" element={<PageWrapper><Vacancies/></PageWrapper>}/>
            <Route path="/partners" element={<PageWrapper><Partners/></PageWrapper>}/>
            <Route path="/service" element={<PageWrapper><Service/></PageWrapper>}/>
            <Route path="/remont" element={<PageWrapper><Remont/></PageWrapper>}/>
            <Route path="/news" element={<PageWrapper><News/></PageWrapper>}/>
            <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>}/>
            <Route path="/production" element={<PageWrapper><Production/></PageWrapper>}/>
            <Route path="/leasing" element={<PageWrapper><Leasing/></PageWrapper>}/>
            <Route path="/photogallery" element={<PageWrapper><Photogallery/></PageWrapper>}/>
            <Route path="/promo" element={<PageWrapper><Promo/></PageWrapper>}/>
            <Route path="/review" element={<PageWrapper><Review/></PageWrapper>}/>
            <Route path="/suppliers" element={<PageWrapper><Suppliers/></PageWrapper>}/>
            <Route path="/catalog" element={<PageWrapper><Catalog/></PageWrapper>}/>
            <Route path="/shtornye-avtomobili" element={<PageWrapper><Shtornye/></PageWrapper>}/>
            <Route path="/krany-manipulator" element={<PageWrapper><Krany/></PageWrapper>}/>
            <Route path="/zapravka" element={<PageWrapper><Zapravka/></PageWrapper>}/>
            <Route path="/gidropod" element={<PageWrapper><Gidropod/></PageWrapper>}/>
            <Route path="/sisterna" element={<PageWrapper><Sisterna/></PageWrapper>}/>
            <Route path="/evakuator" element={<PageWrapper><Evakuator/></PageWrapper>}/>
            <Route path="/bortovye-avtomobili" element={<PageWrapper><Bortov/></PageWrapper>}/>
            <Route path="/avtofurgony" element={<PageWrapper><Autofurgony/></PageWrapper>}/>
            <Route path="/konteynerovozy" element={<PageWrapper><Konteyner/></PageWrapper>}/>
            <Route path="/kryukovye-pogruzchiki" element={<PageWrapper><Pogruzki/></PageWrapper>}/>
            <Route path="/samosvaly" element={<PageWrapper><Samosvaly/></PageWrapper>}/>
            <Route path="/avtomobili-dopog" element={<PageWrapper><Dopog/></PageWrapper>}/>
            <Route path="/cert" element={<PageWrapper><Cert/></PageWrapper>}/>
            <Route path="/video" element={<PageWrapper><Video/></PageWrapper>}/>


          </Routes>
        )}
      </AnimatePresence>
    </>
  )
}

export default App