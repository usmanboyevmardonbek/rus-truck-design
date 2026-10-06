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
    title: "Эвакуатор на шасси КАМАЗ 4308 с КМУ PALFINGER PK 13500T",
    price: "Цена по запросу",
    outOfStock: false
  },
  { 
    id: 2, 
    title: "Эвакуатор на шасси ISUZU FSR-34UL-NCUN с КМУ PALFINGER PK...",
    price: "Цена по запросу",
    outOfStock: true
  }
];

const brands = ["КАМАЗ"];
const types = ["Прямого типа"];
const formulas = ["4x2"];
const lengths = ["4800"];

const Evakuator = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("evakuatorViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("evakuatorViewMode", mode);
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
            <li className="font-fira-sans text-gray-400 text-sm">Автоэвакуаторы</li>
          </ul>

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Автоэвакуаторы
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">
                2 товара
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">Сортировка:</span>
                <button 
                  className="font-fira-sans text-sm font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors"
                  onClick={() => setShtore(!shtor)}
                >
                  По бренду <ChevronDown className="w-4 h-4" />
                </button>
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

              {/* Platform Type Filter */}
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
                    Автомобильная техника развивается стремительными темпами, предлагая водителям новые возможности и удобства. Купить автоэвакуатор становится разумным решением для расширения возможностей бизнеса и повышения мобильности. Сфера перевозки автомобилей требует надежного оборудования и точного планирования. Компания «РусТрак» предлагает специализированную технику, которая отвечает высоким стандартам безопасности. Внедрение современных решений позволяет сократить время выполнения задач и повысить качество обслуживания. Надежное оборудование сочетает функциональность с долговечностью и простотой эксплуатации.
                  </p>

                  <h2 className="font-fira-sans font-bold text-2xl mb-4">Ассортимент</h2>
                  <p className="font-fira-sans text-gray-600 mb-4 leading-relaxed">
                    В наличии представлена надежная техника, рассчитанная на разные условия эксплуатации и задачи. Модели подбираются с учетом требований к грузоподъемности, маневренности и техническим характеристикам, что обеспечивает удобство и стабильность работы.
                    <br/><br/>
                    <strong>Доступные варианты на базе:</strong>
                  </p>
                  <ul className="list-disc pl-5 font-fira-sans text-gray-600 mb-6 flex flex-col gap-2">
                    <li>КАМАЗ</li>
                    <li>ISUZU</li>
                  </ul>
                  <p className="font-fira-sans text-gray-600 mb-6 leading-relaxed">
                    Каждая позиция отличается качественной сборкой и продуманной конструкцией, что положительно сказывается на сроке службы и удобстве эксплуатации. Такой выбор позволяет подобрать подходящее решение под конкретные условия.
                  </p>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Особенности автоэвакуаторов</h3>
                  <ul className="list-disc pl-5 font-fira-sans text-gray-600 mb-6 flex flex-col gap-2">
                    <li><strong>Надежность конструкции</strong> — эвакуатор для автомобиля рассчитан на интенсивную эксплуатацию и стабильную работу при высоких нагрузках.</li>
                    <li><strong>Высокая грузоподъемность</strong> — позволяет безопасно перевозить различные транспортные средства без снижения эффективности.</li>
                    <li><strong>Удобство управления</strong> — продуманная компоновка упрощает работу оператора и снижает утомляемость.</li>
                    <li><strong>Долговечность узлов и агрегатов</strong> — качественные материалы и сборка увеличивают срок службы техники.</li>
                    <li><strong>Безопасность при погрузке</strong> — технические решения обеспечивают устойчивость и контроль при выполнении работ.</li>
                    <li><strong>Универсальность применения</strong> — эвакуаторы на шасси КАМАЗ и ISUZU подходят для выполнения разных задач в любых условиях эксплуатации.</li>
                  </ul>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Сферы применения</h3>
                  <p className="font-fira-sans text-gray-600 mb-6 leading-relaxed">
                    Эвакуатор с КМУ широко применяется для перевозки легковых транспортных средств на различные расстояния и для решения сложных задач на дороге. Конструкция и технические возможности обеспечивают безопасную погрузку и стабильное перемещение без риска повреждений, а удобство управления позволяет легко маневрировать даже в плотном городском движении.
                    <br/><br/>
                    Эвакуационный автомобиль эффективно используется для эвакуации неисправных автомобилей после поломок и дорожно-транспортных происшествий. Надежность узлов и прочность конструкции позволяют выполнять задачи на трассах и в условиях ограниченного пространства без потери эффективности.
                    <br/><br/>
                    Дополнительно возможна эксплуатация при работе с коммерческим транспортом и на площадках с ограниченным пространством. Универсальность конструкции делает такие автомобили подходящими для регулярной и интенсивной эксплуатации в разных условиях.
                  </p>
                  
                  <h3 className="font-fira-sans font-bold text-xl mb-3">Преимущества работы с компанией «РусТрак»</h3>
                  <ul className="list-disc pl-5 font-fira-sans text-gray-600 mb-6 flex flex-col gap-2">
                    <li><strong>Наличие всех необходимых сертификатов</strong> — техника соответствует установленным требованиям и нормативам.</li>
                    <li><strong>Контроль качества на каждом этапе</strong> — проверка оборудования перед передачей заказчику.</li>
                    <li><strong>Гарантийное и постгарантийное обслуживание</strong> — техническая поддержка в процессе эксплуатации.</li>
                    <li><strong>Удобный процесс покупки</strong> — сопровождение сделки и помощь с оформлением документов.</li>
                    <li><strong>Практический опыт работы</strong> — понимание особенностей техники и условий эксплуатации.</li>
                    <li><strong>Конкурентная цена</strong> — возможность приобрести недорогой автоэвакуатор без ущерба для качества.</li>
                    <li><strong>Доверие со стороны клиентов</strong> — стабильная работа и подтвержденное качество поставляемой техники.</li>
                  </ul>

                  <h3 className="font-fira-sans font-bold text-xl mb-3">Современные решения для перевозки</h3>
                  <p className="font-fira-sans text-gray-600 leading-relaxed">
                    Купить эвакуатор с КМУ — практичное решение для расширения возможностей транспортировки и облегчения работы на дорогах. Такой транспорт открывает новые горизонты и упрощает выполнение сложных задач.
                    <br/><br/>
                    Компания «РусТрак» предлагает проверенную технику с гарантией качества и долгим сроком службы. Позаботьтесь о безопасности и эффективности своих перевозок. Сделайте работу более удобной и надежной с современным оборудованием. Для оформления заказа свяжитесь с нами любым удобным способом, и мы поможем подобрать оптимальное решение.
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

export default Evakuator;
