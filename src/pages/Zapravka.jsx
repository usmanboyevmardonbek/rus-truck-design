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
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Loader } from "../components/Loader";
import { div } from "motion/react-client";
import Feedback from "../components/Feedback";

const dummyProducts = [
  {
    id: 1,
    img: "zapravka-1.jpg",
    title: "Топливозаправщик Садко 9 (С41А13) с АТЗ 4,5 м3 двухсекционная",
    price: "от 8   800 000 ₽",
    specs: [
      { label: "Марка", value: "ГАЗ" },
      { label: "Объем цистерны, л", value: "4900" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 2,
    img: "zapravka-2.jpg",
    title: "Автотопливозаправщик на шасси ГАЗ C41R13 (модель 4389JY)",
    price: "от 6 200 000 ₽",
    specs: [
      { label: "Марка", value: "ГАЗ" },
      { label: "Объем цистерны, л", value: "5000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 3,
    img: "zapravka-3.jpg",
    title: "Автотопливозаправщик Валдай 18 FB6R31",
    price: "от 9 050 000 ₽",
    specs: [
      { label: "Марка", value: "Валдай" },
      { label: "Объем цистерны, л", value: "7000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 4,
    img: "zapravka-4.jpg",
    title: "Автотопливозаправщик Валдай 12 АТЗ 6",
    price: "от 7 550 000 ₽",
    specs: [
      { label: "Марка", value: "Валдай" },
      { label: "Объем цистерны, л", value: "6000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 5,
    img: "zapravka-5.jpg",
    title: "Топливозаправщик Валдай 12 АТЗ 8",
    price: "от 7 850 000 ₽",
    specs: [
      { label: "Марка", value: "Валдай" },
      { label: "Объем цистерны, л", value: "8000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 6,
    img: "zapravka-6.jpg",
    title: "Автотопливозаправщик на шасси YANSHI 10",
    price: "Цена по запросу",
    specs: [
      { label: "Марка", value: "YANGAI" },
      { label: "Объем цистерны, л", value: "10000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 7,
    img: "zapravka-7.jpg",
    title: "Топливозаправщик SOLLERS TR180 боковина 10 м.куб",
    price: "от 8 670 000 ₽",
    specs: [
      { label: "Марка", value: "SOLLERS" },
      { label: "Объем цистерны, л", value: "10000" },
      { label: "Полная масса, т", value: "свыше 12" },
    ],
  },
  {
    id: 8,
    img: "zapravka-8.jpg",
    title: "Автотопливозаправщик SOLLERS TR120 АТЗ 8,0 м.куб",
    price: "от 6 030 000 ₽",
    specs: [
      { label: "Марка", value: "SOLLERS" },
      { label: "Объем цистерны, л", value: "8000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
  {
    id: 9,
    img: "zapravka-9.jpg",
    title: "Топливозаправщик JAC N90 АТЗ 6,0 двухсекционная",
    price: "Цена по запросу",
    specs: [
      { label: "Марка", value: "JAC" },
      { label: "Объем цистерны, л", value: "6000" },
      { label: "Полная масса, т", value: "до 12" },
    ],
  },
];

const brands = [
  "ГАЗ",
  "JAC",
  "FOTON",
  "DONG FENG",
  "SOLLERS",
  "YANGAI",
  "Валдай",
];
const weights = ["до 12"];

const Zapravka = () => {
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("zapravkaViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("zapravkaViewMode", mode);
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
              Автотопливозаправщики
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                Автотопливозаправщики
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">26 товаров</p>
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
            <div className="w-full lg:w-70 bg-white p-6 shadow-sm flex flex-col gap-8 shrink-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">Цена</h3>
                <div className="mb-2">
                  <div className="h-1 bg-gray-200 w-full rounded relative mb-4 mt-2">
                    <div className="absolute h-full bg-[#FEC80B] left-[0%] right-[30%]"></div>
                    <div className="absolute w-4 h-4 bg-white border-4 border-[#FEC80B] rounded-full top-1/2 -translate-y-1/2 left-[0%] cursor-pointer"></div>
                    <div className="absolute w-4 h-4 bg-white border-4 border-[#FEC80B] rounded-full top-1/2 -translate-y-1/2 right-[30%] cursor-pointer"></div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        placeholder="от"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        placeholder="до"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                      />
                    </div>
                  </div>
                </div>
              </div>

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

              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">
                  Объем цистерны, л.
                </h3>
                <div className="mb-2">
                  <div className="h-1 bg-gray-200 w-full rounded relative mb-4 mt-2">
                    <div className="absolute h-full bg-[#FEC80B] left-[15%] right-[10%]"></div>
                    <div className="absolute w-4 h-4 bg-white border-4 border-[#FEC80B] rounded-full top-1/2 -translate-y-1/2 left-[15%] cursor-pointer"></div>
                    <div className="absolute w-4 h-4 bg-white border-4 border-[#FEC80B] rounded-full top-1/2 -translate-y-1/2 right-[10%] cursor-pointer"></div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        placeholder="от"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        placeholder="до"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#FEC80B]"
                      />
                    </div>
                  </div>
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
                          alt="productImg"
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
                              ? "flex-1 flex flex-col max-w-110"
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
                            <button
                              className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm cursor-pointer ${viewMode === "list" ? "w-full" : ""}`}
                            >
                              Подробнее
                            </button>

                            <div
                              className={`flex items-center text-gray-500 ${viewMode === "grid" ? "gap-3" : "gap-4 w-full justify-between"}`}
                            >
                              {viewMode === "grid" && (
                                <>
                                  <button className="hover:text-black transition-colors">
                                    <ShoppingCart className="w-5 h-5 cursor-pointer" />
                                  </button>
                                  <button className="hover:text-black transition-colors">
                                    <Heart className="w-5 h-5  cursor-pointer" />
                                  </button>
                                </>
                              )}
                              <button
                                className={`flex items-center gap-1.5 group-hover:text-black transition-colors  ${viewMode === "list" ? "ml-auto" : ""}`}
                              >
                                <p className="text-[9px] text-gray-400 hover:text-black transition duration-200">
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
                  <p className="font-fira-sans text-lg mt-15">
                    Надёжное снабжение топливом упрощает работу на любых
                    объектах. Купить автотопливозаправщик — возможность
                    заправлять технику прямо на месте, экономя время и снижая
                    расходы. Оборудование оснащено прочными цистернами и
                    современными насосами для точного учета топлива. Компания
                    «РусТрак» предлагает модели, которые подходят для различных
                    задач и объёмов. Выбор подходящего автозаправщика зависит от
                    интенсивности работы и условий эксплуатации. Использование
                    проверенных систем заправки гарантирует безопасность и
                    бесперебойную работу на всех объектах.
                  </p>

                  <h2 className="font-fira-sans text-[22px] font-medium mt-5">
                    Ассортимент
                  </h2>

                  <p className="text-lg font-fira-sans mt-5">
                    Компания «РусТрак» предлагает разнообразную технику, где
                    каждая модель АТЗ адаптирована под различные задачи и объёмы
                    работы. В нашем каталоге представлены автомобили ведущих
                    марок:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">ГАЗ</p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">КАМАЗ</p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">JAC</p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">FAW</p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">FOTON</p>
                    </li>
                  </ul>

                  <p className="font-fira-sans text-lg">
                    Доступные варианты вместимости цистерн:
                  </p>

                  <ul>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        5 200 литров (5 м³)
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        6 000 литров (6 тонн)
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        8 000 литров (8 м³)
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        10 000 литров (10 м³)
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        12 000 литров (12 м³)
                      </p>
                    </li>
                  </ul>
                  <p className="font-fira-sans text-lg mb-5">
                    Все модели сертифицированы и соответствуют современным
                    стандартам качества и безопасности, что гарантирует
                    надёжность, долговечность и уверенность в бесперебойной
                    работе.
                  </p>

                  <h2 className="font-fira-sans text-2xl font-medium mb-3">
                    Особенности автотопливозаправщиков
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb-2 inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Гибкость эксплуатации – автомобильный топливозаправщик
                        оснащён двумя топливными отсеками, что позволяет
                        работать сразу с разными видами горючего.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Надежность и долговечность – цистерна выполнена из
                        прочной стали 09Г2С толщиной 3 мм.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb-2 inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Минимальные затраты на обслуживание – алюминиевые
                        коммуникации легкие, устойчивые к коррозии и не требуют
                        сложного ухода.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb-2 inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Дополнительная защита на дороге – боковое устройство из
                        алюминия снижает риск повреждений при движении.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Быстрый доступ к узлам – складная алюминиевая лестница
                        облегчает обслуживание.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb-2 inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Экономия времени при заправке – топливозаправочные
                        машины оснащены шиберным насосом с производительностью
                        600 л/мин, что обеспечивает высокую скорость работы.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Удобство подключения – два всасывающих рукава длиной по
                        3 метра позволяют организовать заправку в любых
                        условиях.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Сокращение простоев – быстроразъемные соединения Elaflex
                        Ду-75 гарантируют надежность и ускоряют процессы.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Комфорт при работе – крышка узла выдачи топлива оснащена
                        газлифтами для удобного и безопасного использования.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Защита горловин – автоцистерна для ГСМ оснащена
                        ограждением по всей длине, что облегчает обслуживание и
                        повышает безопасность.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Работа на расстоянии – раздаточный рукав Ду-25 длиной 10
                        метров обеспечивает удобство при заправке.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Стабильность давления – дыхательное устройство УД-33
                        гарантирует безопасное хранение топлива.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Полный контроль электросистемы – мобильный заправщик
                        оборудован тремя выключателями массы, позволяющими
                        обесточить машину с любой стороны и из кабины.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Простота операций – управление донными клапанами
                        сосредоточено в узле выдачи, что делает процесс быстрым
                        и надежным.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Защита от статического электричества – штырь заземления
                        длиной 10 метров обеспечивает безопасность при работе с
                        горючим.{" "}
                      </p>
                    </li>
                  </ul>

                  <h2 className="font-fira-sans text-2xl font-medium mb-5">
                    Сферы применения
                  </h2>
                  <p className="font-fira-sans text-lg">
                    Купить автотопливозаправщик выгодно для любых сфер
                    деятельности, где требуется оперативная заправка автомобилей
                    и спецмашин. Он незаменим на строительных площадках, где
                    оборудование должно работать без простоев, а также в
                    сельском хозяйстве для обслуживания тракторов и комбайнов. В
                    промышленности и на производственных объектах он
                    обеспечивает бесперебойную работу автопарка. Системы
                    заправки активно применяются коммунальными и дорожными
                    службами, а также транспортными компаниями, которым важно
                    экономить время и ресурсы. Кроме того, автозаправщики
                    подходят для организации мобильных заправочных станций на
                    удалённых объектах и мероприятиях. Их универсальность делает
                    процесс снабжения топливом проще, безопаснее и эффективнее.
                  </p>

                  <h2 className="font-fira-sans text-2xl font-medium mt-5 mb-2">
                    Преимущества работы с компанией «РусТрак»
                  </h2>

                  <ul>
                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Разнообразие техники – возможность подобрать
                        автотопливозаправщик под любые задачи и объемы работы.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Качество и надежность – автотопливозаправщик
                        соответствует современным стандартам и обеспечена
                        системами безопасности.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Помощь в выборе оборудования – специалисты компании
                        консультируют и подбирают оптимальное решение с учетом
                        ваших потребностей.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Мобильная доставка и оперативность – техника
                        доставляется и вводится в эксплуатацию без лишних
                        задержек.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Техническая поддержка и сервис – компания обеспечивает
                        обслуживание, ремонт и консультации по эксплуатации
                        оборудования.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Экономия времени и ресурсов – с правильным
                        автозаправщиком вы сокращаете простои техники и снижаете
                        расходы на топливо.
                      </p>
                    </li>

                    <li className="flex items-center gap-4 mb-2">
                      <span className="romb inline-block"></span>
                      <p className="font-fira-sans text-lg">
                        Индивидуальный подход к каждому клиенту – решение
                        подбирается с учетом особенностей работы, объема и
                        условий эксплуатации.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-fira-sans font-medium">
                    Простая и безопасная заправка на месте
                  </h2>

                  <p className="font-fira-sans text-lg mt-5">
                    Купить автотопливозаправщик — первый шаг к удобному и
                    безопасному обеспечению транспорта топливом. Не откладывайте
                    решение — выберите модель, которая идеально подходит для
                    ваших задач. Компания «РусТрак» имеет большой выбор надёжных
                    и современных автозаправщиков. Мы поможем определить
                    подходящее решение, учитывая ваши потребности и условия
                    эксплуатации. Убедитесь, что ваш автопарк всегда заправлен и
                    готов к работе. Для оформления заказа свяжитесь с нами любым
                    удобным способом, и мы подберём оптимальный вариант именно
                    для вас.
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
                {/* {.map((krans) => (
                  <SwiperSlide key={krans.id} className="rounded-xl ">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={fadeUp}
                      className="h-full"
                    >
                      <img
                        src={krans.img}
                        alt="listImage"
                        className="rounded-sm md:w-full w-full"
                      />
                    </motion.div>

                    <div className="bg-[#ffff] px-2 py-2 rounded-sm">
                      <p className="font-fira-sans line-clamp-2">
                        {krans.title}
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
                ))} */}
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

export default Zapravka;
