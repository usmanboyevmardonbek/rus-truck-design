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
    slug: "furgon-kamaz-43089",
    img: "/furgony-1.jpg",
    title: "Изотермический фургон КАМАЗ 43089",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 2,
    slug: "furgon-kamaz-43082",
    img: "/furgony-2.jpg",
    title: "Изотермический фургон КАМАЗ 43082",
    price: "Цена по запросу",
    outOfStock: false,
  },
  {
    id: 3,
    slug: "furgon-shacman-x3000",
    img: "/furgony-3.jpg",
    title: "Изотермический фургон SHACMAN X3000",
    price: "Цена по запросу",
    outOfStock: false,
  },
];

const brands = ["КАМАЗ", "JAC", "DAEWOO", "FAW", "DONG FENG", "SHACMAN"];

const Autofurgony = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("autofurgonyViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("autofurgonyViewMode", mode);
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
              Изотермические фургоны
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Изотермические фургоны
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">16 товаров</p>
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

          <div className="flex flex-col lg:flex-row gap-8 items-start mb-20">
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
                        to={`/avtofurgony/${product.slug}`}
                        className={
                          viewMode === "grid"
                            ? "relative bg-gray-200 aspect-4/3-full flex items-center justify-center overflow-hidden shrink-0 block"
                            : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0 block"
                        }
                      >
                        <img
                          src={product.img}
                          alt="Images"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />

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
                          <NavLink to={`/avtofurgony/${product.slug}`}>
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
                              to={`/avtofurgony/${product.slug}`}
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
                                    <p className="text-[9px] font-fira-sans ">
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
                    Транспортировка товаров с соблюдением температурного режима
                    становится всё более востребованной в разных отраслях.
                    Купить изотермический фургон для сохранения качества
                    продукции на протяжении всего пути становится рациональным
                    решением для компаний, стремящихся к оптимизации логистики.
                    Использование специализированных транспортных средств
                    снижает риск порчи и экономит ресурсы. Компания «РусТрак»
                    предлагает широкий выбор моделей с современными технологиями
                    изоляции и контроля температуры. Инвестиции в надежный
                    транспорт повышают эффективность логистических процессов и
                    минимизируют убытки. Надёжность техники напрямую отражается
                    на доверии клиентов и стабильности бизнеса.
                  </p>
                  <h2 className="mt-3 mb-3 text-2xl font-fira-sans font-medium">
                    Ассортимент
                  </h2>

                  <p className="text-lg font-fira-sans">
                    В компании представлен широкий выбор техники для перевозки
                    различных грузов. Каждый грузовой фургон изотермический
                    способен обеспечить надежную доставку и сохранность
                    продукции. Модели отличаются габаритами, грузоподъемностью и
                    особенностями конструкции, что позволяет подобрать
                    оптимальный вариант для любых перевозок. Среди доступных
                    марок:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">KAMAZ</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">JAC</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">DAEWOO</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">FAW</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">ISUZU</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">HYUNDAI</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">HINO</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">DONG FENG</p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">SHACMAN</p>
                    </li>
                  </ul>
                  <p className="text-lg font-fira-sans">
                    Каждая марка отличается надежностью и современными
                    технологиями, обеспечивая сохранность груза на всех этапах
                    транспортировки. Выбор подходящей модели позволяет
                    оптимизировать логистику и повысить эффективность работы
                    компании.
                  </p>

                  <h2 className="text-2xl font-fira-sans mt-3 mb-3 font-medium">
                    Особенности изотермических фургонов
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Сохранение температуры – надежная термоизоляция
                        позволяет поддерживать стабильный температурный режим,
                        предотвращая порчу продукции.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Разнообразие моделей – широкий выбор фургонов разного
                        объема и грузоподъёмности обеспечивает оптимальный
                        вариант для любых задач.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Надежность техники – проверенные марки и современные
                        технологии снижают риск поломок и обеспечивают долгий
                        срок службы транспорта.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb-2 inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Экономия ресурсов – уменьшение потерь груза и
                        оптимизация логистики сокращают затраты на перевозку и
                        хранение, при этом фургоны изотермические цены которые
                        остаются доступными для компаний любого масштаба.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Удобство эксплуатации – продуманная конструкция фургонов
                        облегчает загрузку, разгрузку и обслуживание транспорта.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Поддержка производителя – наличие сервисных центров и
                        консультаций позволяет быстро решать любые вопросы,
                        связанные с эксплуатацией.
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-medium font-fira-sans text-2xl mt-3 mb-3">
                    Сферы применения
                  </h2>
                  <p className="text-lg font-fira-sans">
                    Изотермические фургоны активно используются в пищевой
                    промышленности для перевозки продуктов, требующих
                    поддержания определённой температуры. Фрукты, овощи, мясо и
                    молочная продукция сохраняют свежесть на протяжении всего
                    пути, что особенно важно для дальних перевозок и дистрибуции
                    в розничные сети.
                  </p>
                  <p className="text-lg font-fira-sans">
                    Транспорт с термоизоляцией также незаменим для
                    фармацевтической отрасли. Лекарства, вакцины и другие
                    медицинские препараты требуют строгого соблюдения
                    температурного режима, а изотермический фургон обеспечивает
                    безопасные условия доставки от производителя до конечного
                    потребителя.
                  </p>
                  <p className="text-lg font-fira-sans">
                    Кроме того, такие фургоны применяются в химической и
                    косметической промышленности. Продукция, чувствительная к
                    перепадам температуры, сохраняет свои свойства благодаря
                    поддержанию стабильного микроклимата внутри кузова.
                    Использование надёжного транспорта минимизирует риски порчи
                    и повышает эффективность логистических процессов.
                  </p>

                  <h2 className="text-2xl font-medium font-fira-sans mt-3 mb-3">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb-2 inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Широкий выбор техники – компания предлагает фургоны
                        разных марок и моделей, что позволяет подобрать
                        оптимальный вариант под любые задачи, при этом новый
                        изотермический фургон цена остаётся конкурентоспособной.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Качество и надежность – все транспортные средства
                        соответствуют современным стандартам и проходят проверку
                        перед продажей, обеспечивая долгий срок службы.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Профессиональная консультация – специалисты помогают
                        выбрать подходящую модель с учётом особенностей бизнеса
                        и требований к перевозкам.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Поддержка и сервис – «РусТрак» обеспечивает сервисное
                        обслуживание, ремонт и поставку запчастей, что снижает
                        риски простоя техники.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Индивидуальный подход – компания учитывает потребности
                        каждого клиента, предлагая гибкие условия покупки и
                        дополнительное оборудование.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mt-3 mb-3">
                      <span className="romb inline-block"></span>
                      <p className="text-lg font-fira-sans">
                        Оптимизация логистики – грамотный подбор техники и
                        сопровождение сделки позволяют повысить эффективность
                        перевозок и сократить расходы.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-medium font-fira-sans mt-3 mb-3">
                    Оптимальные решения для температурной логистики
                  </h2>

                  <p className="font-fira-sans text-lg">
                    Купить фургон изотермический цена которого соответствует
                    бюджету и разным задачам — разумное решение для компаний,
                    стремящихся к надежной перевозке товаров. Такой транспорт
                    обеспечивает стабильный температурный режим и минимизирует
                    потери продукции. Компания «РусТрак» помогает подобрать
                    технику с учётом индивидуальных требований и особенностей
                    бизнеса. Оцените доступные варианты и выберите оптимальное
                    решение для своих перевозок. Начните улучшать логистику уже
                    сейчас, повышая эффективность работы и сокращая риски. Для
                    оформления заказа свяжитесь с нами любым удобным способом, и
                    специалисты помогут завершить процесс быстро и удобно.
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

export default Autofurgony;
