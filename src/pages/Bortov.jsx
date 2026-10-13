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
import { useState } from "react";
import { Loader } from "../components/Loader";
import Feedback from "../components/Feedback";
import Slider from "../components/Slider";

const dummyProducts = [
  {
    id: 1,
    img: "bortov-1.jpg",
    title: "Бортовой автомобиль МАЗ 631228",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 2,
    img: "bortov-2.jpg",
    title: "Бортовой автомобиль Камаз Компас 43089-33T1",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 3,
    img: "bortov-3.jpg",
    title: "Бортовой автомобиль КАМАЗ 43082",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 4,
    img: "bortov-4.jpg",
    title: "Бортовой автомобиль КАМАЗ 43089",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 5,
    img: "bortov-5.jpg",
    title: "Бортовой автомобиль JAC N120L",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 6,
    img: "bortov-6.jpg",
    title: "Бортовой автомобиль JAC N90L",
    price: "Цена по запросу",
    outOfStock: false,
  },
];

const brands = ["КАМАЗ", "JAC", "DAEWOO", "FAW", "FOTON", "DONG FENG", "МАЗ"];
const lengths = [
  "4200",
  "4500...5500",
  "4600",
  "5200...5400",
  "5500...7500",
  "6200...6400",
  "6200...7500",
  "6700...7400",
  "7400",
  "8400",
];

const Bortov = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("bortovViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("bortovViewMode", mode);
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
              Бортовые автомобили
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Бортовые автомобили
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">21 товар</p>
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
                    По бренду
                  </button>
                  <ul
                    className={
                      "absolute bg-white transition-all mt-4 -left-23 duration-300 ease-in overflow-y-hidden " +
                      (shtor ? "h-[216px]" : "h-0")
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

          <div className="flex flex-col lg:flex-row gap-8 items-start mb-25">
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
                          alt="image"
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
                              ? "flex-1 flex flex-col max-w-111"
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
                                    <span className="font-fira-sans text-[9px]">
                                      Получить КП
                                    </span>

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
                  <p className="text-lg font-fira-sans mt-6">
                    Автомобильная техника продолжает развиваться, открывая новые
                    возможности для бизнеса и промышленности. Многие компании
                    стремятся купить бортовые автомобили для повышения
                    эффективности транспортировки грузов. Выбор подходящей
                    модели требует внимательного изучения характеристик и
                    эксплуатационных качеств. Компания «РусТрак» предлагает
                    широкий ассортимент грузовых машин, отвечающих современным
                    требованиям надежности. Техническая поддержка и сервисное
                    обслуживание играют важную роль в долгосрочной эксплуатации
                    транспорта. Инвестиции в качественную технику помогают
                    оптимизировать расходы и ускорить логистические процессы.
                  </p>

                  <h2 className="font-fira-sans text-2xl mt-3 mb-3 font-medium">
                    Ассортимент
                  </h2>

                  <p className="font-fira-sans text-lg">
                    Компания «РусТрак» предлагает широкий выбор бортовых
                    автомобилей, позволяя подобрать технику под любые задачи и
                    бюджет. В нашем каталоге представлены надежные и проверенные
                    модели от ведущих производителей:
                  </p>

                  <ul>
                    <li className="flex items-center gap-3 mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">KAMAZ</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">JAC</p>
                    </li>
                    <li className="flex items-center gap-3 mt-2 mb-3" mt-2 mb-3>
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">DAEWOO</p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">FAW</p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">ISUZU</p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">FOTON</p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">HYUNDAI</p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">HINO</p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">FUSO</p>
                    </li>

                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">DONG FENG</p>
                    </li>

                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">МАЗ mt-2 mb-3</p>
                    </li>
                  </ul>

                  <p className="font-fira-sans text-lg mt-2 mb-3">
                    Каждая марка обладает своими преимуществами, а специалисты
                    «РусТрак» помогут выбрать оптимальный вариант для вашего
                    бизнеса. Независимо от выбранной модели, вы получите высокое
                    качество, гарантию и полное сервисное сопровождение.
                  </p>

                  <h2 className="font-fira-sans text-2xl font-medium mb-3">
                    Особенности бортовых автомобилей
                  </h2>

                  <ul>
                    <li className="flex items-center gap-3 mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Надежность и долговечность — техника выдерживает большие
                        нагрузки и интенсивную эксплуатацию без снижения
                        производительности.
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Разнообразие моделей — широкий выбор марок и модификаций
                        позволяет подобрать автомобиль под любые задачи и
                        бюджет.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mt-2 mb-3" mt-2 mb-3>
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Высокая грузоподъемность — каждая грузовая бортовая
                        платформа, спроектирована для эффективной
                        транспортировки грузов различного объема и веса.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Современные технологии — машины оснащены современными
                        двигателями и системами безопасности, что повышает
                        комфорт и экономичность.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Гарантийное обслуживание — «РусТрак» обеспечивает
                        поддержку и сервисное сопровождение на весь срок
                        эксплуатации.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Дополнительные опции и комплектации — возможность
                        адаптировать автомобиль под специфические требования
                        бизнеса.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Экономичность и эффективность — оптимальное соотношение
                        цены, затрат на обслуживание и эксплуатационных
                        характеристик.
                      </p>
                    </li>
                  </ul>
                  <h2 className="font-fira-sans text-2xl font-medium mb-3">
                    Сферы применения
                  </h2>

                  <p className="font-fira-sans text-lg">
                    Бортовые автомобили находят широкое применение в сфере
                    грузоперевозок, обеспечивая быструю и безопасную доставку
                    различных товаров. Многие компании стремятся купить бортовой
                    грузовик, чтобы транспортировать строительные материалы,
                    промышленное оборудование и другие тяжелые грузы, где важна
                    надежность техники и стабильная работа в любых условиях.
                  </p>
                  <p className="font-fira-sans text-lg">
                    Кроме того, такой автомобиль с бортовой платформой активно
                    используется в сельском хозяйстве для перевозки
                    сельскохозяйственной продукции, кормов и техники. Компактные
                    и маневренные модели позволяют работать на узких дорогах и
                    сельских участках, облегчая логистику и снижая время на
                    транспортировку.
                  </p>
                  <p className="font-fira-sans text-lg">
                    В промышленном и коммерческом секторе бортовые машины
                    помогают организовать оперативные поставки продукции,
                    ускоряют работу предприятий и повышают эффективность
                    бизнеса. Возможность адаптировать технику под конкретные
                    задачи делает её универсальным решением для компаний
                    различного профиля.
                  </p>

                  <h2 className="font-fira-sans text-2xl font-medium mb-3">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-3 mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Широкий выбор техники — разнообразие марок и моделей
                        позволяет подобрать бортовой грузовик цена которого не
                        только выгодна, но и соответствует потребностям под
                        любые задачи и бюджет.
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Профессиональная консультация — специалисты помогут
                        выбрать оптимальную модель, учитывая потребности вашего
                        бизнеса.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mt-2 mb-3" mt-2 mb-3>
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Гарантия качества — все автомобили проходят проверку и
                        поставляются с официальной гарантией производителя.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Сервисное сопровождение — полная поддержка на всех
                        этапах эксплуатации: от обслуживания до ремонта.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Индивидуальный подход — подбор дополнительных опций и
                        комплектаций под конкретные задачи и отрасли.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Удобные условия покупки — гибкие схемы оплаты и помощь в
                        оформлении документов делают процесс покупки простым и
                        прозрачным.
                      </p>
                    </li>
                    <li className="flex items-center gap-3  mt-2 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">
                        Надежность и ответственность — компания обеспечивает
                        своевременную поставку и долгосрочное сотрудничество с
                        клиентами.
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-fira-sans text-2xl font-medium">
                    Надежные машины для больших задач
                  </h2>

                  <p className="font-fira-sans text-lg ">
                    Новый бортовой автомобиль станет надежным помощником в любых
                    транспортных задачах. Компания «РусТрак» предлагает широкий
                    выбор техники с гарантией качества и поддержкой
                    специалистов. Мы поможем подобрать подходящую модель и
                    оформить покупку без лишних сложностей. Обновите автопарк и
                    повысьте эффективность работы вашей компании. Воспользуйтесь
                    дополнительными опциями и сервисными пакетами для долгой и
                    бесперебойной эксплуатации. Для оформления заказа свяжитесь
                    с нами любым удобным способом, и мы обеспечим быстрый и
                    удобный процесс покупки.
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

export default Bortov;
