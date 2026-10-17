import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import {
  Grid2x2,
  List,
  Search,
  Heart,
  ShoppingCart,
  Download,
  ChevronDown,
} from "lucide-react";
import { Header } from "../components/Header";
import Footer from "../components/footer";
import Feedback from "../components/Feedback";
import Slider from "../components/Slider";

import { useState } from "react";
import { Loader } from "../components/Loader";
import { NavLink } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    slug: "palfinger-p180t-gaz-c41r13",
    img: "/gid-1.jpg",
    title: "Автогидроподъемник PALFINGER P180T на шасси ГАЗ C41R13",
    price: "Цена по запросу",
    outOfStock: false,
    specs: [
      { label: "Марка", value: "ГАЗ" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Высота подъема", value: "18 м" },
    ],
  },
  {
    id: 2,
    slug: "palfinger-p240a-hd-78",
    img: "/gid-2.jpg",
    title: "Автогидроподъемник PALFINGER P 240A на шасси HD-78",
    price: "Цена по запросу",
    outOfStock: true,
    specs: [
      { label: "Марка", value: "Hyundai" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Высота подъема", value: "24 м" },
    ],
  },
  {
    id: 3,
    slug: "palfinger-p200a-isuzu-nmr-85h",
    img: "/gid-3.jpg",
    title: "Автогидроподъемник PALFINGER P 200A на шасси ISUZU NMR-85H",
    price: "Цена по запросу",
    outOfStock: true,
    specs: [
      { label: "Марка", value: "ISUZU" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Высота подъема", value: "20 м" },
    ],
  },
];

const brands = ["ГАЗ"];
const formulas = ["4x2"];

const Gidropod = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("gidropodViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("gidropodViewMode", mode);
      setIsLocalLoading(false);
    }, 600);
  };

  return (
    <>
      <Header />
      <div className="bg-[#F8F8F8] min-h-screen pb-20">
        <div className="container py-6">
          <ul className="flex items-center gap-2 mb-6">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              Главная
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              Каталог
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm">
              Автогидроподъёмники
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Автогидроподъёмники
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">4 товара</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">
                  Сортировка:
                </span>
                <div className="relative z-50">
                  <button
                    className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1  transition-colors"
                    onClick={() => setShtore(!shtor)}
                  >
                    По бренду
                  </button>
                  <ul
                    className={
                      "absolute bg-white transition-all mt-4 -left-23 duration-300 ease-in overflow-y-hidden " +
                      (shtor ? "h-50" : "h-0")
                    }
                  >
                    <li className="border-t border-x border-b rounded-t-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        По популярности
                      </p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        Сначала новые
                      </p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        В наличии
                      </p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        По возрастанию цены
                      </p>
                    </li>
                    <li className="border-b border-x rounded-b-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        По бренду
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewChange("list")}
                  className={`p-2 transition-colors rounded-sm ${viewMode === "list" ? "bg-[#FEC80B] text-black shadow-sm" : "text-gray-400 hover:text-black"}`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleViewChange("grid")}
                  className={`p-2 transition-colors rounded-sm ${viewMode === "grid" ? "bg-[#FEC80B] text-black shadow-sm" : "text-gray-400 hover:text-black"}`}
                >
                  <Grid2x2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start mb-30">
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
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm  transition-colors">
                        <input
                          type="checkbox"
                          className="accent-black absolute w-full h-full cursor-pointer"
                        />
                        
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">
                  Колесная формула
                </h3>
                <div className="flex flex-col gap-3">
                  {formulas.map((form, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm  transition-colors">
                        <input
                          type="checkbox"
                          className="accent-black absolute w-full h-full cursor-pointer"
                        />
                        
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">
                        {form}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-[#FEC80B] hover:bg-yellow-500 transition-colors rounded-sm font-fira-sans font-medium text-sm">
                Показать товары
              </button>
            </div>

            <div className="flex-1 relative min-h-125 w-full flex flex-col gap-10">
              <AnimatePresence>{isLocalLoading && <Loader />}</AnimatePresence>

              {!isLocalLoading && (
                <motion.div
                  key={viewMode}
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                      : "flex flex-col gap-5"
                  }
                >
                  {dummyProducts.map((product) => (
                    <motion.div
                      variants={fadeUp}
                      key={product.id}
                      className={
                        viewMode === "grid"
                          ? "bg-white group flex flex-col"
                          : "bg-white group flex flex-col md:flex-row"
                      }
                    >
                      <NavLink
                        to={`/gidropod/${product.slug}`}
                        className={
                          viewMode === "grid"
                            ? "relative bg-gray-200 aspect-4/3-full flex items-center justify-center overflow-hidden shrink-0"
                            : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0"
                        }
                      >
                        <img
                          src={product.img}
                          alt="Images"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />

                        {product.outOfStock && (
                          <div className="absolute inset-0 bg-white/70 flex items-center justify-center backdrop-blur-[1px]">
                            <span className="font-fira-sans font-bold text-gray-600 text-lg uppercase tracking-wider px-4 py-1 rounded">
                              Нет в продаже
                            </span>
                          </div>
                        )}

                        <button
                          type="button"
                          className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Heart className="w-6 h-6" />
                        </button>
                      </NavLink>

                      <div
                        className={
                          viewMode === "grid"
                            ? "p-5 flex flex-col flex-1"
                            : "p-6 flex flex-col md:flex-row flex-1 justify-between gap-6"
                        }
                      >
                        <div
                          className={
                            viewMode === "list"
                              ? "flex-1 flex flex-col max-w-112.5"
                              : "flex-1 flex flex-col"
                          }
                        >
                          <NavLink to={`/gidropod/${product.slug}`}>
                            <h3
                              className={`font-fira-sans font-medium text-base leading-tight hover:text-[#FEC80B] transition-colors ${
                                viewMode === "list" ? "mb-6 text-lg" : "mb-4 flex-1 line-clamp-2"
                              }`}
                            >
                              {product.title}
                            </h3>
                          </NavLink>

                          {viewMode === "list" && (
                            <div className="flex flex-col gap-2 mt-auto">
                              {product.specs.map((spec, i) => (
                                <div
                                  key={i}
                                  className="flex items-end text-sm font-fira-sans text-gray-500 w-full"
                                >
                                  <span className="shrink-0">{spec.label}</span>
                                  <span className="flex-1 border-b border-dashed border-gray-300 mx-2 mb-1"></span>
                                  <span className="shrink-0 text-gray-800 font-medium">
                                    {spec.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div
                          className={
                            viewMode === "grid"
                              ? "mt-auto"
                              : "flex flex-col items-end justify-between shrink-0"
                          }
                        >
                          <p
                            className={`font-fira-sans font-bold text-xl ${viewMode === "grid" ? "mb-5" : "mb-4"}`}
                          >
                            {product.price}
                          </p>

                          <div
                            className={
                              viewMode === "grid"
                                ? "flex items-center justify-between gap-2"
                                : "flex flex-col items-end gap-4 w-full"
                            }
                          >
                            <NavLink
                              to={`/gidropod/${product.slug}`}
                              className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm text-center ${
                                viewMode === "list" ? "w-full" : ""
                              }`}
                            >
                              Подробнее
                            </NavLink>

                            <div
                              className={`flex items-center text-gray-500 ${viewMode === "grid" ? "gap-3" : "gap-4 w-full justify-between"}`}
                                >
                                  {viewMode === "grid" && (
                                    <>
                                      <button className="hover:text-black transition-colors">
                                        <ShoppingCart className="w-5 h-5" />
                                      </button>
                                      <button className="hover:text-black transition-colors">
                                        <Heart className="w-5 h-5" />
                                      </button>
                                    </>
                                  )}
                                  <button
                                    className={`flex items-center gap-1.5 hover:text-black transition-colors group/kp ${viewMode === "list" ? "ml-auto" : ""}`}
                                  >
                                    <p className="text-[9px] font-fira-sans">
                                      Получить КП
                                    </p>
                                    <Download className="w-3 h-3" />
                                  </button>
                                </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {viewMode === "grid" && (
                <div>
                  <p className="text-lg font-fira-sans">
                    Машины для работы на высоте становятся всё более
                    технологичными и удобными. Купить автогидроподъемник —
                    выгодное решение для повышения эффективности и безопасности
                    работ. Такая техника обеспечивает точное выполнение задач и
                    минимизирует риски. Компания «РусТрак» предлагает надёжные
                    модели для разных условий эксплуатации. Продуманная
                    конструкция гарантирует устойчивость и точность движения.
                    Дополнительные функции делают управление проще и повышают
                    удобство работы.
                  </p>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Ассортимент
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Компания «РусТрак» предлагает технику разных типов и
                    назначения, подходящую для любых задач. В наличии есть
                    машины проверенных марок:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">ГАЗ</p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">ISUZU</p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">FUSO</p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">PALFINGER</p>
                    </li>
                  </ul>
                  <p className="text-lg font-fira-sans">
                    Вся техника сертифицирована и соответствует строгим
                    стандартам качества, что гарантирует безопасность и долгий
                    срок эксплуатации. Компания соблюдает международные нормы и
                    российские требования, а каждая единица проходит проверку
                    перед поставкой клиенту. Это позволяет клиентам быть
                    уверенными в надежности и эффективности приобретаемого
                    оборудования.
                  </p>
                  <h2 className="font-fira-sans text-2xl font-medium mt-3 mb-3">
                    Особенности автогидроподъемников
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Регулируемая высота подъёма <br /> Позволяет точно
                        поднимать людей и грузы на нужную высоту, повышая
                        безопасность и удобство работы.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Гидравлическая система управления <br /> Обеспечивает
                        плавное и точное движение стрелы, снижая риск резких
                        рывков и повреждений.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Стабилизационные опоры <br /> Гарантируют устойчивость
                        техники даже на неровной поверхности, предотвращая
                        опрокидывание.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Компактные размеры шасси <br /> Упрощают маневрирование
                        в ограниченном пространстве и транспортировку
                        оборудования.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Эргономичное управление <br /> Панель управления
                        продумана для удобства оператора, сокращая время
                        обучения и снижая усталость.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-3 mt-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Надёжная конструкция стрелы и платформы <br />
                        Обеспечивает долговечность эксплуатации и высокую
                        устойчивость при работе с грузом.
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-fira-sans text-2xl font-medium mt-3 mb-3">
                    Сферы применения
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Купить автогидроподъемник будет надёжным решением для
                    повышения безопасности и эффективности работ. Такие машины
                    применяются для обслуживания линий электропередач, монтажа и
                    ремонта наружной рекламы, установки освещения и
                    видеонаблюдения, а также для строительных и отделочных
                    работ. Техника востребована в коммунальном хозяйстве, при
                    обслуживании зданий и сооружений, на складах и промышленных
                    объектах. Универсальность и надежность ускоряют процессы,
                    повышают безопасность и снижают трудозатраты.
                    Автогидроподъемники обеспечивают точное и эффективное
                    выполнение задач в любых условиях. Использование такой
                    техники становится оптимальным решением для организаций
                    любого масштаба.
                  </p>
                  <h2 className="text-2xl mt-3 mb-3 font-fira-sans font-medium">
                    Преимущества работы с компанией «РусТрак»
                  </h2>
                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Широкий ассортимент техники <br />
                        Компания предлагает разнообразные модели
                        автогидроподъемников, подходящие для разных задач и{" "}
                        <br /> условий эксплуатации.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Профессиональная консультация <br />
                        Специалисты помогают выбрать оптимальное оборудование с
                        учётом высоты подъёма, грузоподъёмности и <br />{" "}
                        специфики работы.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Удобство покупки <br />
                        Компания предлагает гибкие условия приобретения, включая
                        доставку и оформление документов, что <br /> экономит
                        время клиентов.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Поддержка и обслуживание <br />
                        После покупки доступны сервисные услуги и консультации
                        по эксплуатации, что продлевает срок службы <br />{" "}
                        техники.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Индивидуальный подход <br /> Каждому клиенту подбираются
                        решения, учитывающие конкретные задачи и бюджет, что
                        повышает <br /> эффективность использования техники.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Техника, которая облегчает работу на высоте
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Купить автогидроподъемник — шаг к повышению эффективности и
                    безопасности работы. Мы поможем с выбором техники, учитывая
                    ваши задачи и требования. Компания «РусТрак» предоставляет
                    широкий ассортимент моделей и консультации специалистов.
                    Изучите характеристики и подберите подходящую модель.
                    Действуйте активно, чтобы обеспечить удобство и
                    продуктивность работы. Для оформления заказа свяжитесь с
                    нами любым удобным способом, и мы поможем выбрать
                    оптимальное решение.
                  </p>
                </div>
              )}
            </div>
          </div>
          {viewMode === "grid" && <Slider />}
        </div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
};

export default Gidropod;
