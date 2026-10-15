import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import Slider from "../components/Slider";
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
import { useState } from "react";
import { Loader } from "../components/Loader";
import Feedback from "../components/Feedback";

const dummyProducts = [
  {
    id: 1,
    img: "/sams-1.jpg",
    title: "Самосвал на шасси КОМПАС 9",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 2,
    img: "/sams-2.jpg",
    title: "Самосвал-зерновоз на шасси КАМАЗ 6520-3072-53 (модель...",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 3,
    img: "/sams-3.jpg",
    title: "Самосвал на шасси JAC N90N (модель 53391A), высокий борт",
    price: "Цена по запросу",
    outOfStock: false,
  },
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
          <ul className="flex items-center gap-2 mb-6">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              Главная
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              Каталог
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm">Самосвалы</li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Самосвалы
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">12 товаров</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">
                  Сортировка:
                </span>
                <div className="relative z-50">
                  <button
                    className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors"
                    onClick={() => setShtore(!shtor)}
                  >
                    По бренду <ChevronDown className="w-4 h-4" />
                  </button>
                  <ul
                    className={
                      "absolute bg-white transition-all mt-4 -left-23 duration-300 ease-in overflow-y-hidden " +
                      (shtor ? "h-54" : "h-0")
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

          <div className="flex flex-col lg:flex-row gap-8 items-start  mb-30">
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
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input
                          type="checkbox"
                          className="opacity-0 absolute w-full h-full cursor-pointer peer"
                        />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
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
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input
                          type="checkbox"
                          className="opacity-0 absolute w-full h-full cursor-pointer peer"
                        />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">
                        {form}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">
                  Длина платформы, м
                </h3>
                <div className="flex flex-col gap-3">
                  {lengths.map((len, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
                        <input
                          type="checkbox"
                          className="opacity-0 absolute w-full h-full cursor-pointer peer"
                        />
                        <div className="w-3 h-3 bg-[#FEC80B] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">
                        {len}
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
                      <div
                        className={
                          viewMode === "grid"
                            ? "relative bg-gray-200 aspect-4/3 w-full flex items-center justify-center overflow-hidden shrink-0"
                            : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0"
                        }
                      >
                        <img
                          src={product.img}
                          alt="Images"
                          className="w-full h-full object-cover"
                        />

                        <button className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10">
                          <Heart className="w-6 h-6" />
                        </button>
                      </div>

                      <div
                        className={
                          viewMode === "grid"
                            ? "p-2 flex flex-col flex-1"
                            : "p-2 flex flex-col md:flex-row flex-1 justify-between gap-6"
                        }
                      >
                        <div
                          className={
                            viewMode === "list"
                              ? "flex-1 flex flex-col max-w-112.5"
                              : "flex-1 flex flex-col"
                          }
                        >
                          <h3
                            className={`font-fira-sans text-lg ${viewMode === "list" ? "mb-6 text-lg" : "mb-4 flex-1 line-clamp-2"}`}
                          >
                            {product.title}
                          </h3>
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
                            {product.outOfStock ? (
                              <button
                                className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 rounded-sm w-full flex items-center justify-center gap-2`}
                              >
                                Мне нужен такой же{" "}
                                <Download className="w-4 h-4 ml-1" />
                              </button>
                            ) : (
                              <>
                                <button
                                  className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm ${viewMode === "list" ? "w-full" : ""}`}
                                >
                                  Подробнее
                                </button>

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
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {viewMode === "grid" && (
                <div>
                  <p className="font-fira-sans text-lg ">
                    Грузовые перевозки являются важным элементом экономического
                    развития и промышленной логистики. Решение купить новый
                    самосвал позволяет повысить эффективность перевозки
                    материалов и сократить расходы на обслуживание машин. При
                    выборе подходящей модели мы всегда поможем подобрать
                    автомобиль для работы в различных дорожных условиях.
                    Компания «РусТрак» предлагает разнообразные модели с
                    современными техническими характеристиками. Надёжные машины
                    поддерживают стабильную перевозку грузов на производственные
                    площадки. Обновление парка позволяет выполнять более сложные
                    задачи и увеличивать объём перевозок.
                  </p>

                  <h2 className="mb-3 mt-3 text-2xl font-medium font-fira-sans">
                    Ассортимент
                  </h2>

                  <p className="font-fira-sans text-lg">
                    Компания «РусТрак» предлагает технику для перевозки сыпучих
                    и строительных материалов. Каталог самосвалов объединяет
                    модели различной грузоподъёмности и конфигурации для работы
                    в разных условиях эксплуатации.
                  </p>

                  <p className="font-fira-sans text-lg">
                    Доступные варианты шасси:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">КАМАЗ</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">JAC</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">ГАЗ</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">ВАЛДАЙ</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">КОМПАС</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">DONG FENG</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">SOLLERS</p>
                    </li>
                  </ul>

                  <p className="font-fira-sans text-lg">
                    Модели отличаются техническими характеристиками и
                    возможностями для выполнения различных задач. Такой подход
                    обеспечивает безопасную и эффективную транспортировку
                    грузов, объединяя надёжность оборудования с практичностью
                    использования.
                  </p>

                  <h2 className="font-fira-sans text-2xl mt-3 mb-3 font-medium">
                    Особенности самосвалов
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Разная грузоподъёмность – позволяет перевозить как
                        небольшие, так и крупные объёмы сыпучих материалов,
                        подбирая модель под конкретные задачи.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Адаптация к дорожным условиям – техника легко
                        справляется с грунтовыми, городскими и строительными
                        дорогами.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Разнообразие конфигураций кузова – возможность выбрать
                        машину с оптимальной платформой для специфических грузов
                        делает решение купить самосвал более точным под задачи.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Экономичное расходование топлива – современные двигатели
                        снижают затраты на эксплуатацию при интенсивной работе.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Надёжность и долговечность – прочные шасси и
                        качественные комплектующие обеспечивают долгий срок
                        службы техники.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Простота обслуживания – доступные запчасти и удобная
                        конструкция облегчают техническое обслуживание и ремонт.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Сферы применения
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Купить авто самосвал актуально для строительства, где
                    техника используется для перевозки сыпучих материалов, щебня
                    и грунта на строительные площадки. Она обеспечивает быструю
                    и эффективную доставку грузов, сокращая время на логистику.
                  </p>
                  <p className="text-lg font-fira-sans">
                    В городских условиях такой транспорт перевозит строительные
                    и бытовые отходы, участвует в расчистке территорий после
                    снегопадов и доставке материалов для благоустройства улиц и
                    дворов. Машины справляются с различными дорожными условиями
                    и задачами.
                  </p>
                  <p className="text-lg font-fira-sans">
                    В сельской и лесной отрасли самосвалы перевозят урожай,
                    корм, древесину и удобрения, обеспечивая надёжную доставку
                    грузов на большие расстояния. На промышленных и
                    логистических объектах автомобили применяются для
                    перемещения материалов между площадками, повышая
                    эффективность работы.
                  </p>
                  <h2 className="font-fira-sans text-2xl font-medium mt-3 mb-3">
                    Преимущества работы с компанией «РусТрак»
                  </h2>
                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Широкий выбор техники – каталог самосвалов включает
                        модели различной грузоподъёмности и конфигурации,
                        подходящие для любых задач и условий эксплуатации.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Консультации и подбор – специалисты помогают выбрать
                        самосвал с учётом конкретных требований и условий
                        работы.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Гарантия качества – компания предлагает только
                        проверенные модели с надёжными шасси и комплектующими.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Выгодные условия покупки – специалисты предоставляют
                        полную информацию о покупке и помогают рассчитать
                        стоимость грузового самосвала для каждой модели.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Оперативная доставка – техника поставляется в кратчайшие
                        сроки, обеспечивая бесперебойную работу предприятий.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Опыт и репутация – многолетний опыт позволяет решать
                        задачи любой сложности и поддерживать доверие клиентов.
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-fira-sans text-2xl font-medium mt-3 mb-3">
                    Надёжная техника для любых условий
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Купить новый самосвал цена которого выгодна, позволит
                    повысить эффективность перевозки грузов и сократить затраты.
                    Машины обеспечивают стабильную эксплуатацию в разных
                    условиях и подходят для самых разнообразных задач. Компания
                    «РусТрак» предлагает модели с различной грузоподъёмностью и
                    конфигурацией. Ознакомьтесь с каталогом и выберите
                    подходящую технику для своих нужд. Наши специалисты помогут
                    подобрать оптимальный вариант и ответят на все вопросы по
                    поставке и эксплуатации. Для оформления заказа свяжитесь с
                    нами любым удобным способом и обеспечьте стабильную работу
                    своих проектов.
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

export default Samosvaly;
