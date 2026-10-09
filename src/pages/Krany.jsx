import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import { Grid2x2, List, Search, Heart, ShoppingCart, Download, ChevronDown } from "lucide-react";
import { Header } from "../components/Header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { Loader } from "../components/Loader";
import Feedback from "../components/Feedback";

const dummyProducts = [
  { 
    id: 1, 
    title: "Кран-манипулятор КАМАЗ 65115 с КМУ HKTC HLC-7016",
    img: "/kran-1.jpg",
    specs: [
      { label: "Марка", value: "МАЗ" },
      { label: "Габариты ТС", value: "7300 x 2550 x 3000 мм" },
      { label: "Грузоподъемность, кг", value: "4000" }
    ]
  },
  { 
    id: 2, 
    title: "Кран-манипулятор КАМАЗ 43118 с КМУ INMAN IT 200",
    img: "/kran-2.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "8500 x 2550 x 3600 мм" },
      { label: "Грузоподъемность, кг", value: "7000" }
    ]
  },
  { 
    id: 3, 
    title: "Кран-манипулятор КАМАЗ 43118 с КМУ UNIC 503",
    img: "/kran-3.jpg",
    specs: [
      { label: "Марка", value: "JAC" },
      { label: "Габариты ТС", value: "8100 x 2400 x 3200 мм" },
      { label: "Грузоподъемность, кг", value: "6500" }
    ]
  },
  { 
    id: 4, 
    title: "Кран-манипулятор КАМАЗ 43118 с КМУ SOOSAN SCS736",
    img: "/kran-4.jpg",
    specs: [
      { label: "Марка", value: "ГАЗ" },
      { label: "Габариты ТС", value: "7500 x 2300 x 2900 мм" },
      { label: "Грузоподъемность, кг", value: "3500" }
    ]
  },
  { 
    id: 5, 
    title: "Кран-манипулятор КамАЗ 43118 с КМУ PALFINGER РК 15500",
    img: "/kran-5.jpg",
    specs: [
      { label: "Марка", value: "HINO" },
      { label: "Габариты ТС", value: "6500 x 2200 x 2800 мм" },
      { label: "Грузоподъемность, кг", value: "3000" }
    ]
  },
  { 
    id: 6, 
    title: "Кран-манипулятор ГАЗ С42А43 с КМУ INMAN IM 20",
    img: "/kran-6.jpg",
    specs: [
      { label: "Марка", value: "УРАЛ" },
      { label: "Габариты ТС", value: "9000 x 2500 x 3800 мм" },
      { label: "Грузоподъемность, кг", value: "8000" }
    ]
  },
  { 
    id: 7, 
    title: "Кран-манипулятор ГАЗон NEXT c КМУ UNIC 374",
    img: "/kran-7.jpg",
    specs: [
      { label: "Марка", value: "DONG FENG" },
      { label: "Габариты ТС", value: "8200 x 2450 x 3100 мм" },
      { label: "Грузоподъемность, кг", value: "7500" }
    ]
  },
  { 
    id: 8, 
    title: "Кран-манипулятор ГАЗон NEXT c КМУ INMAN IT 80",
    img: "/kran-8.jpg",
    specs: [
      { label: "Марка", value: "ISUZU" },
      { label: "Габариты ТС", value: "6000 x 2100 x 2700 мм" },
      { label: "Грузоподъемность, кг", value: "2800" }
    ]
  },
  { 
    id: 9, 
    title: "Кран-манипулятор Валдай-18 (FB6R51) с КМУ ИНМАН ИМ 240N",
    img: "/kran-9.jpg",
    specs: [
      { label: "Марка", value: "МАЗ" },
      { label: "Габариты ТС", value: "9500 x 2550 x 3400 мм" },
      { label: "Грузоподъемность, кг", value: "12000" }
    ]
  }
];

const brands = ["ГАЗ", "КАМАЗ", "JAC", "DAEWOO", "FOTON", "DONG FENG", "МАЗ", "ISUZU", "HINO", "HYUNDAI", "УРАЛ"];
const weights = ["до 12", "до 20", "свыше 20"];
const lengths = ["4.5", "5.0", "5.5", "6.0", "6.2", "6.5", "6.8", "7.0", "7.5"];

const Krany = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("kranyViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("kranyViewMode", mode);
      setIsLocalLoading(false);
    }, 600);
  };

  return (
    <>
      <Header />
      <div className="bg-[#F8F8F8] min-h-screen pb-20">
        <div className="container py-6">
          
          <ul className="flex items-center gap-2 mb-6">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">Главная</li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">Каталог</li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm">Краны-манипуляторы</li>
          </ul>

         
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Краны-манипуляторы
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">
                47 товаров
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">Сортировка:</span>
                <div className="relative z-50">
                  <button className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors" onClick={() => setShtore(!shtor)}>
                    По бренду <ChevronDown className="w-4 h-4" />
                  </button>
                  <ul className={"absolute bg-white transition-all mt-4 -left-23 duration-300 ease-in overflow-y-hidden " + (shtor ? "h-[216px]" : "h-0")}>
                    <li className="border-t border-x border-b rounded-t-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">По популярности</p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">Сначала новые</p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">В наличии</p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">По возрастанию цены</p>
                    </li>
                    <li className="border-b border-x rounded-b-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">По бренду</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleViewChange('list')}
                  className={`p-2 transition-colors rounded-sm ${viewMode === 'list' ? 'bg-[#FEC80B] text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleViewChange('grid')}
                  className={`p-2 transition-colors rounded-sm ${viewMode === 'grid' ? 'bg-[#FEC80B] text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}
                >
                  <Grid2x2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            <div className="w-full lg:w-70 bg-white p-6 shadow-sm flex flex-col gap-8 shrink-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              
              
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Марка</h3>
                <div className="relative mb-4">
                  <input 
                    type="text" 
                    placeholder="Найти"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 text-sm outline-none focus:border-[#FEC80B]"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
                <div className="flex flex-col gap-3">
                  {brands.map((brand, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Полная масса, тонн</h3>
                <div className="flex flex-col gap-3">
                  {weights.map((weight, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">{weight}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Длина платформы, м</h3>
                <div className="flex flex-col gap-3">
                  {lengths.map((len, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">{len}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Грузоподъемность КМУ, тонн</h3>
                <div className="flex items-center justify-between gap-4">
                  <div className="relative flex-1">
                    <input 
                      type="number" 
                      placeholder="от"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                    />
                  </div>
                  <div className="w-4 h-[1px] bg-gray-400 shrink-0"></div>
                  <div className="relative flex-1">
                    <input 
                      type="number" 
                      placeholder="до"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-[#FEC80B] hover:bg-yellow-500 transition-colors rounded-sm font-fira-sans font-medium text-sm">
                Показать товары
              </button>
            </div>

            
            <div className="flex-1 relative min-h-[500px] w-full">
              <AnimatePresence>
                {isLocalLoading && <Loader />}
              </AnimatePresence>

              {!isLocalLoading && (
                <motion.div 
                  key={viewMode}
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className={
                    viewMode === 'grid' 
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" 
                      : "flex flex-col gap-5"
                  }
                >
                  {dummyProducts.map((product) => (
                    <motion.div 
                      variants={fadeUp}
                      key={product.id} 
                      className={
                        viewMode === 'grid'
                          ? "bg-white group flex flex-col"
                          : "bg-white group flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300 min-h-55"
                      }
                    >
                      
                      <div className={
                        viewMode === 'grid'
                          ? "relative bg-gray-200 aspect-4/3 w-full flex items-center justify-center overflow-hidden shrink-0"
                          : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0"
                      }>
                        <img src={product.img} alt="img" className="w-full h-full object-cover" />
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10">
                          <Heart className="w-6 h-6" />
                        </button>
                      </div>

                      
                      <div className={
                        viewMode === 'grid'
                          ? "p-2 flex flex-col flex-1"
                          : "p-2 flex flex-col md:flex-row flex-1 justify-between gap-6"
                      }>
                        
                        
                        <div className={viewMode === 'list' ? "flex-1 flex flex-col max-w-110" : "flex-1 flex flex-col"}>
                          <h3 className={`font-fira-sans  text-lg  ${viewMode === 'list' ? 'mb-6 text-lg' : 'mb-4 flex-1 line-clamp-2'}`}>
                            {product.title}
                          </h3>
                          
                          
                        </div>
                        
                        
                        <div className={
                          viewMode === 'grid'
                            ? "mt-auto"
                            : "flex flex-col items-end justify-between shrink-0"
                        }>
                          <p className={`font-fira-sans font-bold text-xl ${viewMode === 'grid' ? 'mb-5' : 'mb-4'}`}>
                            Цена по запросу
                          </p>
                          
                          <div className={
                            viewMode === 'grid'
                              ? "flex items-center justify-between gap-2"
                              : "flex flex-col items-end gap-4 w-full"
                          }>
                            <button className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm ${viewMode === 'list' ? 'w-full' : ''} cursor-pointer`}>
                              Подробнее
                            </button>
                            
                            <div className={`flex items-center text-gray-500 ${viewMode === 'grid' ? 'gap-3' : 'gap-4 w-full justify-between'}`}>
                              {viewMode === 'grid' && (
                                <>
                                  <button className="hover:text-black transition-colors">
                                    <ShoppingCart className="w-5 h-5" />
                                  </button>
                                  <button className="hover:text-black transition-colors">
                                    <Heart className="w-5 h-5" />
                                  </button>
                                </>
                              )}
                              <button className={`flex items-center gap-1.5  ${viewMode === 'list' ? 'ml-auto' : ''}`}>
                                
                                <p className="text-[9px]  text-gray-400 group-hover/kp:text-black transition-colors">Получить КП</p>
                                <Download className="w-3 h-3 cursor-pointer" />
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Feedback/>
      <Footer />
    </>
  );
};

export default Krany;
