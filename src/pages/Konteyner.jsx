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
import Slider from "../components/Slider";
import Feedback from "../components/Feedback";
import { NavLink } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    slug: "konteynerovoz-kamaz-65115",
    img: "/kont-1.jpg",
    title: "Контейнеровоз на шасси КАМАЗ 65115",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 2,
    slug: "konteynerovoz-gaz-c41r33",
    img: "/kont-2.jpg",
    title: "Контейнеровоз на шасси ГАЗ C41R33",
    price: "Цена по запросу",
    outOfStock: false,
  },
];

const brands = ["ГАЗ", "КАМАЗ"];
const formulas = ["4x2", "6x4"];

const Konteyner = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("konteynerViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("konteynerViewMode", mode);
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
              Контейнеровозы
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Контейнеровозы
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">2 товара</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">
                  Сортировка:
                </span>
                <div className="relative z-50">
                  <button
                    className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1 transition-colors"
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

          <div className="flex flex-col lg:flex-row gap-8  mb-30">
            <div className="w-full lg:w-70 bg-white p-6 shadow-sm flex flex-col gap-8 shrink-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Марка</h3>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Найти"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 text-sm outline-none "
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
                          className="absolute w-full h-full cursor-pointer accent-black"
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
                          className="absolute w-full h-full cursor-pointer  accent-black"
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
                        to={`/konteynerovozy/${product.slug}`}
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
                            <span className="font-fira-sans font-bold text-gray-600 text-lg uppercase tracking-wider bg-white/50 px-4 py-1 rounded">
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
                          <NavLink to={`/konteynerovozy/${product.slug}`}>
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
                              to={`/konteynerovozy/${product.slug}`}
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
                                    <p className="text-[9px] font-fira-sans text-gray-400 hover:text-black transition-colors">
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
                    Транспортировка грузов обеспечивает быструю и надежную
                    доставку между городами и регионами. Купить контейнеровоз
                    для увеличения мобильности и объема перевозок помогает
                    компаниям справляться с большими объемами работы. Компания
                    «РусТрак» предлагает широкий выбор грузовых автомобилей для
                    разных задач и условий работы. Использование современных
                    машин ускоряет доставку и повышает безопасность грузов.
                    Техника для перевозки контейнеров позволяют перевозить
                    разнообразные грузы с высокой эффективностью. Передовые
                    технологии в автомобильной логистике делают перевозки более
                    удобными и надежными.
                  </p>
                  <h2 className="font-fira-sans text-2xl font-medium mt-3 mb-3">
                    Ассортимент
                  </h2>
                  <p className="text-lg font-fira-sans">
                    Компания «РусТрак» предлагает разнообразные авто
                    контейнеровозы, подходящие для разных задач и условий
                    эксплуатации. В нашем предложении представлены марки,
                    известные надежностью, высокой грузоподъемностью и
                    актуальными технологиями:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">ГАЗ</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">КАМАЗ</p>
                    </li>
                  </ul>

                  <p className="text-lg font-fira-sans">
                    Каждая модель оснащена всем необходимым для безопасной и
                    быстрой транспортировки грузов. Мы уделяем внимание качеству
                    техники и удобству эксплуатации, чтобы перевозки проходили
                    максимально эффективно.
                  </p>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Особенности контейнеровозов
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Высокая грузоподъемность — позволяют перевозить большие
                        объемы грузов за одну поездку, снижая количество рейсов
                        и экономя время.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Надежность конструкции — прочная рама и шасси
                        обеспечивают стабильную работу даже при сложных дорожных
                        условиях.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Универсальность применения — подходят для перевозки
                        разных типов контейнеров и грузов, что делает их
                        удобными для разнообразных задач.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Маневренность и мобильность — возможность работы на
                        узких улицах и в городских условиях, где крупная техника
                        менее эффективна.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Современные технологии и безопасность — передовые
                        тормозные системы, подвеска и электроника повышают
                        безопасность перевозок и комфорт водителя.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Экономичность эксплуатации — контейнеровоз, цена
                        которого сочетает доступность и эффективность, позволяет
                        сократить расходы на эксплуатацию.
                      </p>
                    </li>
                  </ul>
                  <h2 className="mt-3 mb-3 font-fira-sans font-medium text-2xl">
                    Сферы применения
                  </h2>

                  <p className="text-lg font-fira-sans">
                    Контейнерные автомобили широко используются для перевозки
                    различных грузов на дальние и средние расстояния. Они
                    идеально подходят для доставки продукции между городами, что
                    особенно важно для компаний, которым требуется оперативная и
                    безопасная транспортировка.
                  </p>
                  <p className="text-lg font-fira-sans">
                    Кроме того, такие машины активно применяются на промышленных
                    и строительных площадках, где необходимо перемещать
                    контейнеры с оборудованием или материалами. Надежность шасси
                    и высокая грузоподъемность делают их удобными для работы в
                    условиях повышенной нагрузки.
                  </p>
                  <p className="text-lg font-fira-sans">
                    Грузовой автомобиль контейнеровоз также востребован в
                    логистических компаниях и у поставщиков товаров для
                    розничной торговли. Благодаря мобильности и универсальности
                    он позволяет быстро реагировать на изменения в планах
                    доставки и обеспечивать своевременную поставку продукции.
                  </p>

                  <h2 className="text-2xl font-medium font-fira-sans mt-3 mb-3">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Надежная техника — все автомобили контейнеровозы
                        проходят строгий контроль качества и проверку перед
                        поставкой, что гарантирует их долгую и стабильную
                        работу.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Разнообразие моделей — широкий выбор машин позволяет
                        подобрать контейнеровоз под любые задачи и условия
                        эксплуатации.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Профессиональная поддержка — специалисты компании
                        консультируют на каждом этапе, помогая выбрать
                        оптимальное решение для перевозок.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Быстрая доставка и сервис — техника поставляется в
                        кратчайшие сроки, а сервисное обслуживание обеспечивает
                        бесперебойную работу.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Прозрачные условия сотрудничества — понятные условия
                        покупки, гарантия и сопровождение сделки делают
                        сотрудничество удобным и безопасным.
                      </p>
                    </li>
                  </ul>
                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Современные решения для мобильной логистики
                  </h2>
                  <p className="text-lg font-fira-sans">
                    Купить авто контейнеровоз — выгодное решение для ускорения и
                    упрощения перевозок грузов. Выбирайте надежные машины для
                    быстрой и безопасной доставки. Компания «РусТрак» предлагает
                    разнообразные контейнеровозы для любых задач. Начните
                    действовать и оптимизируйте логистику перевозок. Используйте
                    технологические решения, чтобы сэкономить время и силы. Для
                    оформления заказа свяжитесь с нами любым удобным способом, и
                    наши специалисты помогут подобрать оптимальное решение.
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

export default Konteyner;
