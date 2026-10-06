import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import { Grid2x2, List, Search, Heart, ShoppingCart, Download, ChevronDown } from "lucide-react";
import { Header } from "../components/Header";
import Footer from "../components/footer";
import { useState } from "react";
import { Loader } from "../components/Loader";

const dummyProducts = [
  { 
    id: 1, 
    title: "Шторный грузовик КАМАЗ 4308 ДОПОГ EXII (модель 4308H2-16)",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 2, 
    title: "Бортовой автомобиль КАМАЗ 4308-3063-69, ДОПОГ категория...",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 3, 
    title: "Кран-манипулятор JAC N200L с КМУ INMAN IM150N, ДОПОГ...",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 4, 
    title: "Кран-манипулятор DAEWOO CL8CF с КМУ PALFINGER PK 8500,...",
    price: "Цена по запросу",
    outOfStock: false
  }
];

const brands = ["КАМАЗ", "JAC", "DAEWOO"];
const types = ["100"];
const masses = ["до 12", "до 20"];
const formulas = ["4x2", "6x4"];
const lengths = ["5.2-6.2", "6.2", "6.4", "7.5"];

const Dopog = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("dopogViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("dopogViewMode", mode);
      setIsLocalLoading(false);
    }, 600);
  };

  return (
    <>
      <Header />
      <div className="bg-[#F8F8F8] min-h-screen pb-20">
        <div className="container py-6">
          {/* Breadcrumbs */}
          <ul className="flex items-center gap-2 mb-6">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">Главная</li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">Каталог</li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm">Автомобили ДОПОГ категория EXII</li>
          </ul>

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Автомобили ДОПОГ категория EXII
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">
                4 товара
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
            {/* Sidebar Filters */}
            <div className="w-full lg:w-[280px] bg-white p-6 shadow-sm flex flex-col gap-8 shrink-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              
              {/* Brand Filter */}
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

              {/* Type Filter */}
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Тип бортовой платформы</h3>
                <div className="flex flex-col gap-3">
                  {types.map((type, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mass Filter */}
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Полная масса, тонн</h3>
                <div className="flex flex-col gap-3">
                  {masses.map((mass, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">{mass}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Wheel formula Filter */}
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Колесная формула</h3>
                <div className="flex flex-col gap-3">
                  {formulas.map((form, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">{form}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Length Filter */}
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

              {/* KMU Filter (Range Slider UI) */}
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Грузоподъемность КМУ, тонн</h3>
                <div className="mb-2">
                  <div className="h-1 bg-gray-200 w-full rounded relative mb-4 mt-2">
                    <div className="absolute h-full bg-[#FEC80B] left-[0%] right-[0%]"></div>
                    <div className="absolute w-4 h-4 bg-white border-4 border-[#FEC80B] rounded-full top-1/2 -translate-y-1/2 left-[0%] cursor-pointer"></div>
                    <div className="absolute w-4 h-4 bg-white border-4 border-[#FEC80B] rounded-full top-1/2 -translate-y-1/2 right-[0%] cursor-pointer"></div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative flex-1">
                      <input 
                        type="number" 
                        placeholder="от"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input 
                        type="number" 
                        placeholder="до"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-[#FEC80B] hover:bg-yellow-500 transition-colors rounded-sm font-fira-sans font-medium text-sm">
                Показать товары
              </button>
            </div>

            {/* Product Area with Global Loader Triggered */}
            <div className="flex-1 relative min-h-[500px] w-full flex flex-col gap-10">
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
                          ? "bg-white group flex flex-col hover:shadow-lg transition-shadow duration-300 relative"
                          : "bg-white group flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300 min-h-[220px] relative"
                      }
                    >
                      {/* Image Container */}
                      <div className={
                        viewMode === 'grid'
                          ? "relative bg-gray-200 aspect-[4/3] w-full flex items-center justify-center overflow-hidden shrink-0"
                          : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0"
                      }>
                        <span className="text-gray-400 font-fira-sans text-sm">Место для фото</span>
                        
                        {/* Out of stock overlay */}
                        {product.outOfStock && (
                          <div className="absolute inset-0 bg-white/70 flex items-center justify-center backdrop-blur-[1px]">
                            <span className="font-fira-sans font-bold text-gray-600 text-lg uppercase tracking-wider bg-white/50 px-4 py-1 rounded">Нет в продаже</span>
                          </div>
                        )}

                        <button className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10">
                          <Heart className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Content Container */}
                      <div className={
                        viewMode === 'grid'
                          ? "p-5 flex flex-col flex-1"
                          : "p-6 flex flex-col md:flex-row flex-1 justify-between gap-6"
                      }>
                        
                        {/* Title - (No specs text in list view as requested) */}
                        <div className={viewMode === 'list' ? "flex-1 flex flex-col max-w-[450px]" : "flex-1 flex flex-col"}>
                          <h3 className={`font-fira-sans font-medium text-base leading-tight ${viewMode === 'list' ? 'mb-6 text-lg' : 'mb-4 flex-1 line-clamp-2'}`}>
                            {product.title}
                          </h3>
                        </div>
                        
                        {/* Right / Bottom Actions */}
                        <div className={
                          viewMode === 'grid'
                            ? "mt-auto"
                            : "flex flex-col items-end justify-between shrink-0"
                        }>
                          <p className={`font-fira-sans font-bold text-xl ${viewMode === 'grid' ? 'mb-5' : 'mb-4'}`}>
                            {product.price}
                          </p>
                          
                          <div className={
                            viewMode === 'grid'
                              ? "flex items-center justify-between gap-2"
                              : "flex flex-col items-end gap-4 w-full"
                          }>
                            {product.outOfStock ? (
                              <button className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 rounded-sm w-full flex items-center justify-center gap-2`}>
                                Мне нужен такой же <Download className="w-4 h-4 ml-1" />
                              </button>
                            ) : (
                              <>
                                <button className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm ${viewMode === 'list' ? 'w-full' : ''}`}>
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
                                  <button className={`flex items-center gap-1.5 hover:text-black transition-colors group/kp ${viewMode === 'list' ? 'ml-auto' : ''}`}>
                                    <Download className="w-4 h-4" />
                                    <span className="text-xs uppercase tracking-wider text-gray-400 group-hover/kp:text-black transition-colors font-medium">Получить КП</span>
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* No SEO block required on this page */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dopog;
