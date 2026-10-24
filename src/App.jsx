import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Loader } from "./components/Loader";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home";
import { CatTrucks } from "./pages/CatTrucks";
import { Layout } from "./layout/Layout";
import Catalog from "./pages/Catalog";

const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
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
    <CartProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="global-loader" />
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Layout />
                </PageWrapper>
              }
            >
              <Route index element={<Home />} />
              <Route
                path="/catalog/:category"
                element={
                  <PageWrapper>
                    <CatTrucks />
                  </PageWrapper>
                }
              />
              <Route
                path="/catalog"
                element={
                  <PageWrapper>
                    <Catalog />
                  </PageWrapper>
                }
              />
              {/* <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/vacancies"
                element={
                  <PageWrapper>
                    <Vacancies />
                  </PageWrapper>
                }
              />
              <Route
                path="/partners"
                element={
                  <PageWrapper>
                    <Partners />
                  </PageWrapper>
                }
              />
              <Route
                path="/service"
                element={
                  <PageWrapper>
                    <Service />
                  </PageWrapper>
                }
              />
              <Route
                path="/remont"
                element={
                  <PageWrapper>
                    <Remont />
                  </PageWrapper>
                }
              />
              <Route
                path="/news"
                element={
                  <PageWrapper>
                    <News />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="/production"
                element={
                  <PageWrapper>
                    <Production />
                  </PageWrapper>
                }
              />
              <Route
                path="/leasing"
                element={
                  <PageWrapper>
                    <Leasing />
                  </PageWrapper>
                }
              />
              <Route
                path="/photogallery"
                element={
                  <PageWrapper>
                    <Photogallery />
                  </PageWrapper>
                }
              />
              <Route
                path="/promo"
                element={
                  <PageWrapper>
                    <Promo />
                  </PageWrapper>
                }
              />
              <Route
                path="/review"
                element={
                  <PageWrapper>
                    <Review />
                  </PageWrapper>
                }
              />
              <Route
                path="/suppliers"
                element={
                  <PageWrapper>
                    <Suppliers />
                  </PageWrapper>
                }
              />
              <Route
                path="/cert"
                element={
                  <PageWrapper>
                    <Cert />
                  </PageWrapper>
                }
              />
              <Route
                path="/video"
                element={
                  <PageWrapper>
                    <Video />
                  </PageWrapper>
                }
              />
              <Route
                path="/copy"
                element={
                  <PageWrapper>
                    <Copy />
                  </PageWrapper>
                }
              />
              <Route
                path="/cart"
                element={
                  <PageWrapper>
                    <Cart />
                  </PageWrapper>
                }
              />
              <Route
                path="/favorites"
                element={
                  <PageWrapper>
                    <Favorites />
                  </PageWrapper>
                }
              />
              */}
            </Route>
          </Routes>
        )}
      </AnimatePresence>
    </CartProvider>
  );
}

export default App;
