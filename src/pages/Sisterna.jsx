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
import { NavLink } from "react-router-dom";
import Feedback from "../components/Feedback";

const dummyProducts = [
  {
    id: 1,
    slug: "kamaz-43089-food",
    img: "/sisterna-1.jpg",
    title: "Пищевая цистерна КАМАЗ 43089",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 2,
    slug: "gazon-next-food-4-2",
    img: "/sisterna-2.jpg",
    title: "ГАЗон NEXT с пищевой цистерной 4,2 куба",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 3,
    slug: "jac-n90-vacuum",
    img: "/sisterna-3.jpg",
    title: "Вакуумная цистерна JAC N90",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 4,
    slug: "jac-n90-autocisterna",
    img: "/sisterna-4.jpg",
    title: "Вакуумная автоцистерна на шасси JAC N90",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 5,
    slug: "jac-n90-ko-523",
    img: "/sisterna-5.jpg",
    title: "Вакуумное оборудование КО-523 на шасси JAC N-90",
    price: "Цена по запросу",
    outOfStock: false,
  },
];

const brands = ["ГАЗ", "КАМАЗ", "JAC"];
const types = ["Вакуумная автоцистерна", "Пищевая автоцистерна"];

const Sisterna = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("sisternaViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("sisternaViewMode", mode);
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
              Автоцистерны
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Автоцистерны
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">10 товаров</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">
                  Сортировка:
                </span>
                <div className="relative z-50">
                  <button
                    className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1ransition-colors"
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
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm group-hover:border-[#FEC80B] transition-colors">
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
                  Тип автоцистерны
                </h3>
                <div className="flex flex-col gap-3">
                  {types.map((type, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded-sm transition-colors">
                        <input
                          type="checkbox"
                          className="absolute w-full h-full cursor-pointer accent-black"
                        />
                        
                      </div>
                      <span className="font-fira-sans text-sm text-gray-700">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-[#FEC80B] hover:bg-yellow-500 transition-colors rounded-sm font-fira-sans font-medium text-sm">
                Показать товары
              </button>
            </div>

            <div className="flex-1 relative min-h-125]w-full flex flex-col gap-10">
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
                          ? "bg-white group flex flex-col "
                          : "bg-white group flex flex-col md:flex-row"
                      }
                    >
                      <NavLink
                        to={`/sisterna/${product.slug}`}
                        className={
                          viewMode === "grid"
                            ? "relative bg-gray-200 aspect-4/3 w-full flex items-center justify-center overflow-hidden shrink-0"
                            : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0"
                        }
                      >
                        <img
                          src={product.img}
                          alt="image"
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
                              ? "flex-1 flex flex-col max-w-110"
                              : "flex-1 flex flex-col"
                          }
                        >
                          <NavLink to={`/sisterna/${product.slug}`}>
                            <h3
                              className={`font-fira-sans text-lg hover:text-[#FEC80B] transition-colors ${
                                viewMode === "list"
                                  ? "mb-6 text-lg"
                                  : "mb-4 flex-1 line-clamp-2"
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
                              to={`/sisterna/${product.slug}`}
                              className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm cursor-pointer text-center ${
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
                                    <ShoppingCart className="w-4 h-5" />
                                  </button>
                                  <button className="hover:text-black transition-colors">
                                    <Heart className="w-5 h-5" />
                                  </button>
                                </>
                              )}
                              <button
                                className={`flex items-center gap-1.5 hover:text-black transition-colors group/kp ${viewMode === "list" ? "ml-auto" : ""}`}
                              >
                                <span className="text-[9px]  font-fira-sans">
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
                  <p className="font-fira-sans text-lg">
                    Техника для обслуживания жидких и вязких сред требует
                    точности и продуманного подхода. Вакуумная автоцистерна
                    обеспечивает аккуратное обращение с рабочими средами и
                    поддерживает стабильность технологических операций. Её
                    конструкция направлена на удобное управление и безопасность
                    персонала. Компания «РусТрак» предлагает решения,
                    соответствующие строгим требованиям и особенностям отрасли.
                    Модели отличаются прочностью и способностью сохранять
                    рабочие характеристики при длительной эксплуатации. Такой
                    подход укрепляет доверие к технике и снижает вероятность
                    непредвидённых остановок.
                  </p>

                  <h2 className="font-medium font-fira-sans text-2xl mt-4 mb-4">
                    Ассортимент
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Мы предлагаем модели автоцистерн, доступные в разных
                    исполнениях и модификациях. В нашем каталоге представлен
                    большой выбор техники, среди которой каждый сможет найти
                    подходящий вариант для своих нужд.
                  </p>

                  <p className="font-fira-sans text-lg">Марка:</p>

                  <ul>
                    <li className="flex items-center gap-3 mb-3 mt-2">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">ГАЗ</p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">КАМАЗ</p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">JAC</p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">ISUZU</p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">HYUNDAI</p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">HINO</p>
                    </li>
                  </ul>

                  <p className="font-fira-sans text-lg">Тип автоцистерны:</p>

                  <ul>
                    <li className="flex items-center gap-3 mb-3 mt-2">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Вакуумная автоцистерна
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Пищевая автоцистерна
                      </p>
                    </li>
                  </ul>

                  <p className="font-fira-sans text-lg">
                    Все модели проходят обязательную сертификацию и
                    соответствуют российским и международным стандартам
                    качества. Это обеспечивает надёжность, безопасность
                    эксплуатации и долговечность техники, а также даёт
                    уверенность в соответствии оборудования заявленным
                    требованиям.
                  </p>

                  <h2 className="font-fira-sans text-2xl font-medium mt-3 mb-3">
                    Особенности автоцистерн
                  </h2>

                  <ul>
                    <li className="flex items-center gap-3 mb-3 mt-2">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Создание вакуума – обеспечивает эффективный сбор и
                        транспортировку жидких и вязких веществ без разливов и
                        потерь.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Прочность конструкции – корпус и комплектующие выполнены
                        из материалов, устойчивых к коррозии и механическим
                        нагрузкам.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Система управления – позволяет точно контролировать
                        процесс закачки и откачки жидкостей, упрощая работу
                        оператора.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Универсальность применения – техника может
                        использоваться в различных отраслях благодаря
                        адаптируемым параметрам и модификациям.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Обслуживание и ремонт – продуманная конструкция упрощает
                        доступ к ключевым узлам для профилактики и ремонта.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Безопасность эксплуатации – встроенные системы защиты
                        предотвращают аварийные ситуации и обеспечивают
                        безопасную работу с опасными средами.
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-fira-sans text-2xl font-medium mb-2">
                    Сферы применения
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Автоцистерна вакуумная используется в самых разных сферах,
                    где важны безопасная и эффективная транспортировка и
                    хранение жидких и вязких веществ. Она применяется в
                    промышленности для перемещения технологических жидкостей, в
                    коммунальной сфере для откачки сточных вод и обслуживания
                    городских систем, а также в пищевой отрасли для перевозки
                    жидких продуктов и сырья. Надёжность и прочность конструкции
                    делают её востребованной в строительстве и сельском
                    хозяйстве, где требуется аккуратная работа с жидкостями при
                    различных условиях эксплуатации. Такая автоцистерна помогает
                    оптимизировать процессы, повышает эффективность работы и
                    обеспечивает безопасность персонала.
                  </p>

                  <h2 className="font-fira-sans text-2xl font-medium">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-3 mb-3 mt-2">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Широкий ассортимент техники – в наличии различные модели
                        вакуумных автоцистерн, адаптированные под конкретные
                        задачи и условия эксплуатации.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Надёжность оборудования – все автоцистерны проходят
                        строгий контроль качества и обеспечивают безопасную и
                        стабильную работу.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Индивидуальный подбор решений – специалисты помогают
                        выбрать модель с оптимальными характеристиками и
                        комплектацией под ваши потребности.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Поддержка на всех этапах – консультации при выборе,
                        сопровождение при заказе и техническая поддержка после
                        покупки.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Доставка и сервис – компания обеспечивает оперативную
                        поставку и качественное обслуживание техники в Нижнем
                        Новгороде и регионе.
                      </p>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <span className="inline-block romb"></span>
                      <p className="font-fira-sans text-lg">
                        Прозрачные условия сотрудничества – честные цены,
                        подробные спецификации и официальная документация для
                        каждого заказа.
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-fira-sans text-2xl font-medium">
                    Комфорт и безопасность при транспортировке жидкостей
                  </h2>

                  <p className="font-fira-sans text-lg mt-2">
                    Автоцистерна, купить которую не только выгодно, но и удобно,
                    обеспечит надёжную и безопасную работу при транспортировке и
                    хранении различных жидкостей. Выберите модель,
                    соответствующую вашим требованиям и условиям эксплуатации.
                    Компания «РусТрак» готова предоставить консультацию и помочь
                    с подбором техники. Ознакомьтесь с техническими
                    характеристиками и доступными опциями. Сделайте шаг к
                    повышению эффективности и безопасности ваших процессов.
                    Оформите заказ на нашем сайте или свяжитесь с нами любым
                    удобным способом.
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

export default Sisterna;
