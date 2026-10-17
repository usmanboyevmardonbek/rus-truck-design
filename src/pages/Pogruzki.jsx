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
import { NavLink } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    slug: "palfinger-ph-t20pi-isuzu-giga",
    img: "/pog-1.jpg",
    title: "Крюковой погрузчик PALFINGER PH T20Pi на шасси ISUZU GIGA-Q",
    price: "Цена по запросу",
    outOfStock: true,
  },
  {
    id: 2,
    slug: "palfinger-ph-t05-isuzu-1",
    img: "/pog-2.jpg",
    title: "Крюковой погрузчик PALFINGER PH T05_L3900 SLD на шасси ISUZ...",
    price: "Цена по запросу",
    outOfStock: true,
  },
  {
    id: 3,
    slug: "palfinger-ph-t05-isuzu-2",
    img: "/pog-3.jpg",
    title: "Крюковой погрузчик PALFINGER PH T05_L3900 SLD на шасси...",
    price: "Цена по запросу",
    outOfStock: true,
  },
];

const formulas = ["4x2", "6x4"];

const Pogruzki = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("pogruzkiViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("pogruzkiViewMode", mode);
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
              Крюковые погрузчики
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Крюковые погрузчики
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">3 товара</p>
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
                          className=" absolute w-full h-full cursor-pointer  accent-black"
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
                        to={`/kryukovye-pogruzchiki/${product.slug}`}
                        className={
                          viewMode === "grid"
                            ? "relative bg-gray-200 aspect-4/3 w-full flex items-center justify-center overflow-hidden shrink-0 block"
                            : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0 block"
                        }
                      >
                        <img
                          src={product.img}
                          alt="Images"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />

                        {product.outOfStock && (
                          <div className="absolute inset-0 bg-white/70 flex items-center justify-center backdrop-blur-[1px]">
                            <span className="font-fira-sans font-bold text-gray-600 text-lg uppercase tracking-wider">
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
                          <NavLink to={`/kryukovye-pogruzchiki/${product.slug}`}>
                            <h3
                              className={`font-fira-sans text-lg hover:text-[#FEC80B] transition-colors ${
                                viewMode === "list" ? "mb-6 text-lg" : "mb-4 flex-1 line-clamp-2"
                              }`}
                            >
                              {product.title}
                            </h3>
                          </NavLink>
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
                              to={`/kryukovye-pogruzchiki/${product.slug}`}
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
                                    className={`flex items-center gap-1.5 ${viewMode === "list" ? "ml-auto" : ""}`}
                                  >
                                    <span className="text-[9px] text-gray-400 hover:text-black transition-colors font-medium">
                                      Получить КП
                                    </span>
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
                    Транспортная логистика оказывает значительное влияние на
                    развитие промышленности и торговли. Для эффективной работы
                    портов и складов используют крюковой погрузчик, способный
                    справляться с тяжелыми грузами. Новые технические решения в
                    этой сфере повышают скорость и безопасность операций.
                    Компания «РусТрак» внедряет инновационные подходы,
                    оптимизируя процессы перевозки и хранения. Автоматизация и
                    цифровые системы контроля позволяют снизить человеческий
                    фактор и ускорить обработку грузов. Применение современных
                    механизмов значительно увеличивает производительность и
                    снижает издержки.
                  </p>

                  <h2 className="font-fira-sans font-medium text-2xl mt-3 mb-3">
                    Ассортимент
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Мы предлагаем только качественную и сертифицированную
                    технику, которая соответствует всем стандартам безопасности
                    и надежности. Каждая единица оборудования проходит строгий
                    контроль и готова к интенсивной эксплуатации, что
                    гарантирует долгий срок службы и эффективность работы. Среди
                    представленных марок:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">ISUZU</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="text-lg font-fira-sans">HYUNDAI</p>
                    </li>
                  </ul>

                  <p className="text-lg font-fira-sans">
                    Все модели оснащены современными системами управления и
                    проверенными механизмами, что делает их удобными и
                    безопасными в эксплуатации. Выбор техники позволяет
                    подобрать оптимальное решение под любые задачи и условия
                    работы, обеспечивая стабильность и производительность на
                    высоком уровне.
                  </p>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Особенности крюковых погрузчиков
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Мощные подъемные механизмы – крюковые мультилифты
                        позволяют легко справляться с тяжелыми и
                        крупногабаритными грузами.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Надёжная конструкция шасси – обеспечивает стабильность и
                        долговечность даже при интенсивной эксплуатации.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Гибкость и маневренность – техника легко работает в
                        ограниченном пространстве, на узких складах и
                        стройплощадках.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Система автоматической защиты – предотвращает перегрузку
                        и защищает механизмы от поломок.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Энергоэффективность – оптимизированный расход топлива
                        снижает эксплуатационные затраты.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Удобство обслуживания – простая конструкция узлов и
                        лёгкий доступ к сервисным точкам ускоряют ремонт и
                        техобслуживание.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Адаптивность к условиям работы – техника готова к
                        эксплуатации при разных климатических и дорожных
                        условиях.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-medium font-fira-sans mt-3 mb-3">
                    Сферы применения
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Погрузчик с крюком активно используется в портах и на
                    терминалах для быстрой погрузки и разгрузки контейнеров и
                    крупногабаритных грузов. Техника позволяет эффективно
                    перемещать тяжелые материалы между складами и транспортными
                    средствами, ускоряя обработку грузов и снижая нагрузку на
                    персонал. На строительных площадках такие машины помогают
                    транспортировать строительные блоки, металлоконструкции и
                    другие тяжёлые материалы, обеспечивая точность и
                    безопасность при подъёме и перемещении. Их универсальность
                    позволяет работать в ограниченном пространстве и на неровной
                    местности, что особенно важно для крупных объектов и
                    многоэтажного строительства.
                  </p>
                  <p className="text-lg font-fira-sans">
                    В промышленности техника применяется для перемещения сырья,
                    готовой продукции и крупногабаритного оборудования внутри
                    производственных цехов и складских помещений. Использование
                    современных механизмов повышает скорость операций и
                    минимизирует риск повреждения грузов, что делает
                    логистические процессы более стабильными и предсказуемыми.
                  </p>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Широкий выбор техники – компания предлагает
                        разнообразные модели погрузчиков и специализированного
                        оборудования, что позволяет подобрать решение под любые
                        задачи.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Качественная сертифицированная техника – крюковой
                        погрузчик проходит строгий контроль качества и полностью
                        соответствует стандартам безопасности и надежности.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Профессиональная поддержка – специалисты компании готовы
                        помочь с выбором, настройкой и эксплуатацией
                        оборудования.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Сервисное обслуживание и запчасти – оперативный ремонт и
                        наличие оригинальных запчастей минимизируют простои
                        техники.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Индивидуальные решения – компания подбирает технику и
                        условия работы с учетом особенностей бизнеса каждого
                        клиента.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Опыт и репутация – «РусТрак» имеет многолетний опыт на
                        рынке и зарекомендовал себя как надежный партнер в сфере
                        транспортной логистики.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Оптимизация затрат – выгодные условия поставки и
                        обслуживания помогают снизить расходы на эксплуатацию
                        оборудования.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-medium font-fira-sans mt-3 mb-3">
                    Надёжные решения для грузоперевозок
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Погрузчик с крюком демонстрирует высокую эффективность при
                    работе с тяжелыми грузами и ускоряет логистические процессы.
                    Инвестиции в современную технику помогают повысить
                    производительность и снизить затраты. Компания «РусТрак»
                    предлагает широкий спектр решений для транспортной логистики
                    и обслуживания оборудования. Оцените возможности
                    автоматизации и внедрите новые технологии в свой бизнес.
                    Следите за обновлениями и совершенствуйте процессы хранения
                    и перевозки грузов. Для оформления заказа свяжитесь с нами
                    любым удобным способом, и наши специалисты помогут подобрать
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

export default Pogruzki;
