import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
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
import { useState, useEffect, useRef } from "react";
import { Loader } from "../components/Loader";
import Feedback from "../components/Feedback";
import { div } from "motion/react-client";
import { similarList } from "./objects";

const dummyProducts = [
  {
    id: 1,
    title: "Шторный грузовик МАЗ 438121 (модель 5389D5)",
    img: "/gruz-1.jpg",
    specs: [
      { label: "Марка", value: "МАЗ" },
      { label: "Габариты ТС", value: "5300 x 2000 x 2000 мм" },
      { label: "Грузоподъемность, кг", value: "4300" },
    ],
  },
  {
    id: 2,
    title: "Шторный грузовик МАЗ 631228-524-010 (модель 4389M2)",
    img: "/gruz-2.jpg",
    specs: [
      { label: "Марка", value: "МАЗ" },
      { label: "Габариты ТС", value: "6500 x 2200 x 2400 мм" },
      { label: "Грузоподъемность, кг", value: "6800" },
    ],
  },
  {
    id: 3,
    title: "Шторный грузовик КАМАЗ 4308",
    img: "/gruz-3.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "6000 x 2100 x 2300 мм" },
      { label: "Грузоподъемность, кг", value: "5500" },
    ],
  },
  {
    id: 4,
    title: "Шторный грузовик КАМАЗ 65657",
    img: "/gruz-4.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "7200 x 2400 x 2500 мм" },
      { label: "Грузоподъемность, кг", value: "10500" },
    ],
  },
  {
    id: 5,
    title: "Шторный грузовик КОМПАС 5",
    img: "/gruz-5.jpg",
    specs: [
      { label: "Марка", value: "КОМПАС" },
      { label: "Габариты ТС", value: "4800 x 1900 x 2000 мм" },
      { label: "Грузоподъемность, кг", value: "3200" },
    ],
  },
  {
    id: 6,
    title: "Шторный грузовик КАМАЗ 65117 (модель 4388F3)",
    img: "/gruz-6.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "8100 x 2500 x 2600 мм" },
      { label: "Грузоподъемность, кг", value: "14000" },
    ],
  },
];

const brands = ["ГАЗ", "КАМАЗ", "JAC", "DAEWOO", "FOTON", "DONG FENG", "МАЗ"];
const weights = ["до 12", "до 20", "до 5,5", "свыше 20"];

const Shtornye = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("shtornyeViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("shtornyeViewMode", mode);
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
              Шторные автомобили
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Шторные автомобили
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">30 товаров</p>
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

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-70  bg-white p-6 shadow-sm flex flex-col gap-8 shrink-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
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
                  Полная масса, тонн
                </h3>
                <div className="flex flex-col gap-3">
                  {weights.map((weight, idx) => (
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
                        {weight}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-[#FEC80B] hover:bg-yellow-500 transition-colors rounded-sm font-fira-sans font-medium text-sm">
                Показать товары
              </button>
            </div>

            <div className="flex-1 relative min-h-125 w-full">
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
                          ? "bg-white"
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
                          alt="img"
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors">
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
                            className={`font-fira-sans  text-lg leading-tight ${viewMode === "list" ? "mb-6 text-lg" : "mb-4 flex-1 line-clamp-1"}`}
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
                            Цена по запросу
                          </p>

                          <div
                            className={
                              viewMode === "grid"
                                ? "flex items-center justify-between gap-2"
                                : "flex flex-col items-end gap-4 w-full"
                            }
                          >
                            <button
                              className={`bg-[#FEC80B] hover:bg-yellow-500 transition duration-300 cursor-pointer  font-fira-sans text-xs font-medium py-2.5 px-6 rounded-sm ${viewMode === "list" ? "w-full" : ""}`}
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
                                className={`flex items-center gap-1.5 transition-colors cursor-pointer  ${viewMode === "list" ? "ml-auto" : ""}`}
                              >
                                <p className="text-[10px] font-fira-sans     text-gray-400 hover:text-black transition-colors ">
                                  Получить КП
                                </p>
                                <Download className="w-4 h-4" />
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
                  <p className="font-fira-sans mt-20 text-lg">
                    Шторный грузовик сочетает удобство загрузки и надежность на
                    дороге. Мощные двигатели и современная техника делают
                    управление безопасным и комфортным. Компания «РусТрак»
                    предлагает шторные автомобили, готовые к любым задачам.
                    Надёжная конструкция и качественные материалы обеспечивают
                    долгий срок службы машин. Выбор подходящей машины поможет
                    справиться с самыми разными задачами. Каждая модель
                    создаётся с учётом потребностей владельцев, сочетая
                    практичность и долговечность.
                  </p>
                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Ассортимент
                  </h2>

                  <p className="font-fira-sans mt-2 text-lg">
                    Мы предлагаем широкий ассортимент коммерческих автомобилей,
                    отвечающих современным стандартам качества. В нашем каталоге
                    представлена шторная машина в различных исполнениях и
                    марках, что позволяет подобрать технику под любые задачи
                    эксплуатации.
                  </p>

                  <p className="font-fira-sans text-lg">Марки:</p>
                      <ul>
                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">ГАЗ</p>
                        </li>
                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">Валдай</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">КАМАЗ</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">Компас</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">JAC</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">МАЗ</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">FAW</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">FOTON</p>
                        </li>

                        <li className="flex items-center gap-4 mb-2">
                          <span className="romb inline-block"></span>
                          <p className="font-fira-sans text-lg">DAEWOO</p>
                        </li>
                      </ul>

                  <p className="font-fira-sans text-lg mt-2">
                    Размеры и тоннаж автомобилей зависят от выбранного шасси: от
                    компактных моделей грузоподъёмностью 3 тонны до мощных
                    машин, рассчитанных на перевозку до 30 тонн. Такой диапазон
                    позволяет подобрать оптимальное решение для любых
                    логистических и коммерческих задач, обеспечивая надёжность и
                    долговечность техники.
                  </p>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Особенности шторных автомобилей
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Оцинкованные стойки на болтовых соединениях — при
                        повреждении их можно быстро заменить без сложного
                        ремонта, что снижает затраты и сокращает простои.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Алюминиевые направляющие с резиновым уплотнителем —
                        шторно бортовой автомобиль получает надёжную
                        герметизацию, защищающую груз от влаги и пыли при
                        эксплуатации в любых условиях.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Профиль Hossen — усиленный конструктивный элемент,
                        который повышает жёсткость и долговечность всей
                        надстройки.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Откидные борта на 180° — позволяют легко загружать и
                        разгружать груз с любой стороны, экономя время на
                        маршруте.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Сдвижная штора в обе стороны — гибкость эксплуатации:
                        доступ к грузу возможен с любой стороны платформы.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Алюминиевая передняя стенка — лёгкая и прочная, она
                        снижает общий вес конструкции и повышает устойчивость к
                        коррозии
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Сдвижная крыша — обеспечивает удобный доступ сверху, что
                        особенно важно при погрузке негабаритных грузов в шторно
                        бортовой фургон.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Тент крыши с крестообразным усилителем — выдерживает
                        дополнительные нагрузки и сохраняет форму даже при
                        длительной эксплуатации.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Двунаправленное усиление бокового тента — повышает
                        надёжность при перевозке тяжёлых и хрупких грузов.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Скрытые петли крепления груза — безопасная фиксация без
                        выступающих элементов, что делает платформу аккуратной и
                        удобной.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Складная лестница — быстрый и безопасный доступ к кузову
                        без дополнительных приспособлений.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Три варианта крепления надстройки к подрамнику — шторный
                        фургон адаптируется к разным условиям монтажа,
                        обеспечивая универсальность для различных задач и типов
                        шасси.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Сдвижные центральные стойки — позволяют оптимально
                        использовать пространство и упрощают работу с
                        крупногабаритными грузами.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Алюминиевые ворота со скрытой запорной арматурой —
                        надёжная защита груза и эстетичный внешний вид без
                        лишних деталей.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Противозаливной козырёк — дополнительная защита от
                        осадков и грязи, повышающая сохранность перевозимого
                        груза.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Сферы применения{" "}
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Шторный грузовик от компании «РусТрак» находят широкое
                    применение в строительных компаниях, логистических и
                    транспортных организациях, обеспечивая безопасную и удобную
                    доставку материалов. Они используются для коммерческой
                    доставки товаров, в торговых и оптовых компаниях, а также
                    при перевозке негабаритных и тяжёлых грузов. Надёжная
                    конструкция и качественная защита груза делают их удобными
                    для длительных маршрутов и работы в любых погодных условиях,
                    обеспечивая эффективность перевозок и сохранность имущества.
                  </p>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Большой выбор техники <br /> У нас представлены шторные
                        и другие коммерческие автомобили различных марок и
                        типов, что позволяет <br /> подобрать технику под любые
                        задачи.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Профессиональная поддержка Наши специалисты помогают
                        подобрать технику с учётом задач клиента и особенностей
                        бизнеса.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Сертификация и контроль качества Все грузовики проходят
                        строгую проверку и сертифицированы, что гарантирует
                        безопасность эксплуатации.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Гарантийное и послегарантийное обслуживание Компания
                        обеспечивает поддержку после покупки, включая
                        техническое обслуживание и консультации.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Удобство покупки Предоставляются прозрачные условия
                        приобретения, различные формы оплаты и индивидуальные
                        предложения для клиентов.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg ">
                        Опыт и репутация «РусТрак» имеет многолетний опыт работы
                        на рынке коммерческих автомобилей, что подтверждает
                        высокий профессионализм и доверие клиентов.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                    Техника, созданная для надежности и комфорта
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Купить шторный грузовик — выгодное решение, позволяющее
                    оптимизировать логистику и сократить затраты на
                    эксплуатацию. Выбирая технику, которая соответствует вашим
                    требованиям и стандартам качества, вы получаете надёжный
                    автомобиль, полностью готовый к эксплуатации. Компания
                    «РусТрак» поможет подобрать модель, идеально подходящую для
                    ваших нужд. Ознакомьтесь с характеристиками и возможностями
                    каждой машины. Сделайте выбор в пользу надёжности, комфорта
                    и долговечности вашей техники. Для оформления заказа
                    свяжитесь с нами любым удобным способом и получите
                    консультацию специалистов.
                  </p>
                </div>
              )}
            </div>
          </div>
          {viewMode === "grid" && (
            <div>
              <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
                Похожие товары
              </h2>
              <Swiper
                className="mySwiper similarSwiper"
                spaceBetween={15}
                slidesPerView={2}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },

                  992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },

                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                  },
                }}
              >
                {similarList.map((lists) => (
                  <SwiperSlide key={lists.id} className="rounded-xl ">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={fadeUp}
                      className="h-full"
                    >
                      <img
                        src={lists.img}
                        alt="listImage"
                        className="rounded-sm md:w-full w-full"
                      />
                    </motion.div>

                    <div className="bg-[#ffff] px-2 py-2 rounded-sm">
                      <p className="font-fira-sans line-clamp-2">
                        {lists.title}
                      </p>

                      <div className="flex justify-between items-center">
                        <a
                          href="#"
                          className="bg-[#fec80b] hover:bg-[#ffd43a] transition duration-300 ease-in rounded-sm px-3 py-3"
                        >
                          <p className="font-fira-sans">Подробнее</p>
                        </a>
                        <button className="cursor-pointer">
                          <Heart />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
};

export default Shtornye;
