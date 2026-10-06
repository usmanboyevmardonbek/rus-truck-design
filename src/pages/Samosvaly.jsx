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
    title: "Самосвал на шасси КОМПАС 9",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 2, 
    title: "Самосвал-зерновоз на шасси КАМАЗ 6520-3072-53 (модель...",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 3, 
    title: "Самосвал на шасси JAC N90N (модель 53391A), высокий борт",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 4, 
    title: "Самосвал на шасси JAC N120S (модель 53392A), высокий борт",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 5, 
    title: "Самосвал на шасси JAC N120S (модель 53392A), борт h=750 мм",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 6, 
    title: "Самосвал на шасси JAC N90N (модель 53391A), борт h=750 мм",
    price: "Цена по запросу",
    outOfStock: false
  }
];

const brands = ["КАМАЗ", "JAC"];
const formulas = ["4x2"];
const lengths = ["4600", "5000", "5200", "6500"];

const Samosvaly = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("samosvalyViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("samosvalyViewMode", mode);
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
            <li className="font-fira-sans text-gray-400 text-sm">Самосвалы</li>
          </ul>

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Самосвалы
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">
                12 товаров
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

              {/* SEO Text Block below Grid (Hidden in List View) */}
              {viewMode === 'grid' && (
                <div className="bg-white p-6 md:p-8 rounded shadow-sm mt-10">
                  <p className="font-fira-sans text-gray-600 mb-6 leading-relaxed">
                    Грузовые перевозки являются важным элементом экономического развития и промышленной логистики. Решение купить новый самосвал позволяет повысить эффективность перевозки материалов и сократить расходы на обслуживание машин. При выборе подходящей модели мы всегда поможем подобрать автомобиль для работы в различных дорожных условиях. Компания «РусТрак» предлагает разнообразные модели с современными техническими характеристиками. Надёжные машины поддерживают стабильную перевозку грузов на производственные площадки. Обновление парка позволяет выполнять более сложные задачи и увеличивать объём перевозок.
                  </p>

                  <h2 className="font-fira-sans font-bold text-2xl mb-4">Ассортимент</h2>
                  <p className="font-fira-sans text-gray-600 mb-4 leading-relaxed">
                    Компания «РусТрак» предлагает технику для перевозки сыпучих и строительных материалов. Каталог самосвалов объединяет модели различной грузоподъёмности и конфигурации для работы в разных условиях эксплуатации.
                    <br/><br/>
                    <strong>Доступные варианты шасси:</strong>
                  </p>
                  
                  <ul className="list-none font-fira-sans text-gray-600 mb-6 flex flex-col gap-1">
                    <li>КАМАЗ</li>
                    <li>JAC</li>
                    <li>ГАЗ</li>
                    <li>ВАЛДАЙ</li>
                    <li>КОМПАС</li>
                    <li>DONG FENG</li>
                    <li>SOLLERS</li>
                  </ul>
                  
                  <p className="font-fira-sans text-gray-600 mb-6 leading-relaxed">
                    Модели отличаются техническими характеристиками и возможностями для выполнения различных задач. Такой подход обеспечивает безопасную и эффективную транспортировку грузов, объединяя надёжность оборудования с практичностью использования.
                  </p>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Особенности самосвалов</h3>
                  <ul className="list-disc pl-5 font-fira-sans text-gray-600 mb-6 flex flex-col gap-2">
                    <li><strong>Разная грузоподъёмность</strong> – позволяет перевозить как небольшие, так и крупные объёмы сыпучих материалов, подбирая модель под конкретные задачи.</li>
                    <li><strong>Адаптация к дорожным условиям</strong> – техника легко справляется с грунтовыми, городскими и строительными дорогами.</li>
                    <li><strong>Разнообразие конфигураций кузова</strong> – возможность выбрать машину с оптимальной платформой для специфических грузов делает решение купить самосвал более точным под задачи.</li>
                    <li><strong>Экономичное расходование топлива</strong> – современные двигатели снижают затраты на эксплуатацию при интенсивной работе.</li>
                    <li><strong>Надёжность и долговечность</strong> – прочные шасси и качественные комплектующие обеспечивают долгий срок службы техники.</li>
                    <li><strong>Простота обслуживания</strong> – доступные запчасти и удобная конструкция облегчают техническое обслуживание и ремонт.</li>
                  </ul>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Сферы применения</h3>
                  <p className="font-fira-sans text-gray-600 mb-4 leading-relaxed">
                    Купить авто самосвал актуально для строительства, где техника используется для перевозки сыпучих материалов, щебня и грунта на строительные площадки. Она обеспечивает быструю и эффективную доставку грузов, сокращая время на логистику.
                  </p>
                  <p className="font-fira-sans text-gray-600 mb-4 leading-relaxed">
                    В городских условиях такой транспорт перевозит строительные и бытовые отходы, участвует в расчистке территорий после снегопадов и доставке материалов для благоустройства улиц и дворов. Машины справляются с различными дорожными условиями и задачами.
                  </p>
                  <p className="font-fira-sans text-gray-600 mb-6 leading-relaxed">
                    В сельской и лесной отрасли самосвалы перевозят урожай, корм, древесину и удобрения, обеспечивая надёжную доставку грузов на большие расстояния. На промышленных и логистических объектах автомобили применяются для перемещения материалов между площадками, повышая эффективность работы.
                  </p>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Преимущества работы с компанией «РусТрак»</h3>
                  <ul className="list-disc pl-5 font-fira-sans text-gray-600 mb-6 flex flex-col gap-2">
                    <li><strong>Широкий выбор техники</strong> – каталог самосвалов включает модели различной грузоподъёмности и конфигурации, подходящие для любых задач и условий эксплуатации.</li>
                    <li><strong>Консультации и подбор</strong> – специалисты помогают выбрать самосвал с учётом конкретных требований и условий работы.</li>
                    <li><strong>Гарантия качества</strong> – компания предлагает только проверенные модели с надёжными шасси и комплектующими.</li>
                    <li><strong>Выгодные условия покупки</strong> – специалисты предоставляют полную информацию о покупке и помогают рассчитать стоимость грузового самосвала для каждой модели.</li>
                    <li><strong>Оперативная доставка</strong> – техника поставляется в кратчайшие сроки, обеспечивая бесперебойную работу предприятий.</li>
                    <li><strong>Опыт и репутация</strong> – многолетний опыт позволяет решать задачи любой сложности и поддерживать доверие клиентов.</li>
                  </ul>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Надёжная техника для любых условий</h3>
                  <p className="font-fira-sans text-gray-600 leading-relaxed">
                    Купить новый самосвал цена которого выгодна, позволит повысить эффективность перевозки грузов и сократить затраты. Машины обеспечивают стабильную эксплуатацию в разных условиях и подходят для самых разнообразных задач. Компания «РусТрак» предлагает модели с различной грузоподъёмностью и конфигурацией. Ознакомьтесь с каталогом и выберите подходящую технику для своих нужд. Наши специалисты помогут подобрать оптимальный вариант и ответят на все вопросы по поставке и эксплуатации. Для оформления заказа свяжитесь с нами любым удобным способом и обеспечьте стабильную работу своих проектов.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Samosvaly;
