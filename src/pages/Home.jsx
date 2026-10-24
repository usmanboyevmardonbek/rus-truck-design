import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Menu,
  MoveRight,
  ShoppingCart,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { catData } from "./objects";
import { recomendData } from "./objects";
import { novostData } from "./objects";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

import ArcNavigation from "../components/ArcNavigation";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { PhoneModal } from "../components/PhoneModal";

export function Home() {
  const { t } = useLanguage();
  const { addToCart, isInCart, toggleFavorite, isInFavorites } = useCart();
  const [brendDropdown, setBrendDropdown] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const heroSlides = [
    {
      image: "/banner-1.jpg",
      titleKey: "hero_slide1_title",
      titleDefault:
        "АТЗ Рустрак включены в реестр российской промышленной продукции",
      descKey: "hero_slide1_subtitle",
      descDefault: "Теперь доступны для приобретения по 44 ФЗ",
      btn1: {
        type: "call",
        textKey: "orderCall",
        textDefault: "Заказать звонок",
      },
    },
    {
      image: "/banner-2.jpg",
      titleKey: "hero_slide2_title",
      titleDefault: "В наличии шторные фургоны КАМАЗ 4308",
      descKey: "hero_slide2_subtitle",
      descDefault: "Размеры надстройки 6200х2550х2850 мм.\nЦена 5 500 000 руб.",
      btn1: {
        type: "call",
        textKey: "orderCall",
        textDefault: "Заказать звонок",
      },
    },
    {
      image: "/banner-3.webp",
      titleKey: "hero_slide3_title",
      titleDefault: "Бортовые платформы со шторным механизмом",
      descKey: "hero_slide3_subtitle",
      descDefault:
        "Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами, сдвижной крышей.",
      btn1: {
        type: "link",
        href: "/catalog/shtornye-avtomobili",
        textKey: "learnMore",
        textDefault: "Подробнее",
      },
    },
    {
      image: "/banner-4.jpg",
      titleKey: "hero_slide4_title",
      titleDefault: "ООО «РусТрак»",
      descKey: "hero_slide4_subtitle",
      descDefault:
        "Производство и поставка специализированной техники и спецтранспорта",
      btn1: {
        type: "link",
        href: "/catalog",
        textKey: "catalog",
        textDefault: "Каталог",
      },
      btn2: {
        type: "call",
        textKey: "orderCall",
        textDefault: "Заказать звонок",
      },
    },
    {
      image: "/banner-5.jpg",
      titleKey: "hero_slide5_title",
      titleDefault: "Краны манипуляторы на базе MCV/HCV грузовиков",
      descKey: "hero_slide5_subtitle",
      descDefault:
        "Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин, установка блока распределителя управления задними опорами, открытый профиль HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет крана.",
      btn1: {
        type: "link",
        href: "/catalog/krany-manipulator",
        textKey: "learnMore",
        textDefault: "Подробнее",
      },
      btn2: {
        type: "call",
        textKey: "orderCall",
        textDefault: "Заказать звонок",
      },
    },
    {
      image: "/banner-6.jpg",
      titleKey: "hero_slide6_title",
      titleDefault: "Автотопливозаправщики на базе MCV/HCV грузовиков",
      descKey: "hero_slide6_subtitle",
      descDefault:
        "Производство и поставка автотопливозаправщиков объёмом 8 и 6 м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие рукава, производительный узел выдачи топлива.",
      btn1: {
        type: "link",
        href: "/catalog/zapravka",
        textKey: "learnMore",
        textDefault: "Подробнее",
      },
      btn2: {
        type: "call",
        textKey: "orderCall",
        textDefault: "Заказать звонок",
      },
    },
  ];

  const catKeyMap = {
    1: "cat_shtornye",
    2: "cat_krany",
    3: "cat_zapravka",
    4: "cat_gidropod",
    5: "cat_sisterna",
    6: "cat_evakuator",
    7: "cat_avtofurgony",
    8: "cat_konteynerovozy",
    9: "cat_kryukovye",
    10: "cat_samosvaly",
    11: "cat_dopog",
    12: "cat_bortovye",
  };
  const getCatTitle = (cat) => {
    return catKeyMap[cat.id]
      ? t(catKeyMap[cat.id], cat.catTitle)
      : cat.catTitle;
  };

  return (
    <>
     
      <section className="lg:pt-2 pt-4">
        <div className="container">
          <div className="z-10 relative">
            <Swiper
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper hero-swiper rounded-2xl overflow-hidden shadow-sm"
            >
              {heroSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative rounded-2xl overflow-hidden min-h-80 md:min-h-115 lg:min-h-125">
                    <img
                      src={slide.image}
                      alt={t(slide.titleKey, slide.titleDefault)}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/35 md:bg-linear-to-r md:from-black/95 md:via-black/75 md:to-transparent flex items-center p-5 sm:p-8 lg:p-14 z-20">
                      <div className="max-w-2xl text-white lg:space-y-2.5 space-y-4">
                        <h1 className="font-fira-sans font-extrabold text-white text-lg sm:text-2xl lg:text-[32px] leading-snug sm:leading-tight">
                          {t(slide.titleKey, slide.titleDefault)}
                        </h1>
                        <p className="lg:text-xs text-sm  font-fira-sans text-gray-200 lg:line-clamp-3 line-clamp-none whitespace-pre-line leading-relaxed">
                          {t(slide.descKey, slide.descDefault)}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          {slide.btn1 && slide.btn1.type === "link" ? (
                            <a
                              href={slide.btn1.href}
                              className="inline-flex items-center justify-center bg-[#fec80b] hover:bg-[#ffd43a] text-black font-fira-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl transition duration-300 shadow-md"
                            >
                              {t(slide.btn1.textKey, slide.btn1.textDefault)}
                            </a>
                          ) : slide.btn1 && slide.btn1.type === "call" ? (
                            <button
                              onClick={() => setIsPhoneModalOpen(true)}
                              className="inline-flex items-center justify-center border-2 border-[#fec80b] bg-[#fec80b] hover:bg-[#ffd43a] text-black font-fira-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl transition duration-300 cursor-pointer shadow-md"
                            >
                              {t(slide.btn1.textKey, slide.btn1.textDefault)}
                            </button>
                          ) : null}

                          {slide.btn2 && slide.btn2.type === "call" ? (
                            <button
                              onClick={() => setIsPhoneModalOpen(true)}
                              className="inline-flex items-center justify-center border-2 border-white/60 hover:border-[#fec80b] hover:bg-[#fec80b] hover:text-black text-white font-fira-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl transition duration-300 cursor-pointer"
                            >
                              {t(slide.btn2.textKey, slide.btn2.textDefault)}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="category">
        <div className="container">
          <div className="flex mt-15 justify-between">
            <h2 className="font-fira-sans font-medium md:text-[42px] text-xl pl-5">
              {t("categories", "Категории")}
            </h2>
            <div className="flex items-center gap-2">
              <button className="category-swiper-button-prev md:block hidden border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer>">
                <ChevronLeft />
              </button>
              <button className="category-swiper-button-next md:block hidden border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer>">
                <ChevronRight />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: ".category-swiper-button-prev",
              nextEl: ".category-swiper-button-next",
            }}
            loop={true}
            modules={[Navigation]}
            className="mySwiper category-swiper px-4!"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {catData.map((cats) => (
              <SwiperSlide key={cats.id}>
                <div className="mt-10 border border-[#EBEBEB] rounded-sm w-full h-70 pb-6 hover:shadow-[0_0_18px_#FEC80B] transition duration-300 bg-white flex flex-col justify-between">
                  <a
                    href={cats.catLink}
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="px-4 py-3">
                      <p className="font-fira-sans font-medium text-base md:text-lg text-gray-900 truncate">
                        {getCatTitle(cats)}
                      </p>
                      <p className="font-fira-sans text-[#A1A1A1] font-normal text-sm mt-1">
                        {cats.catDesc}
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-4 h-40">
                      <img
                        src={cats.catImage}
                        alt={cats.catTitle}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-center mt-30 gap-8 lg:flex-row flex-col ">
            <div className="max-w-160">
              <h2 className="font-fira-sans font-medium text-[42px] sm:text-3xl sm:mb-2">
                {t("home_about_title", "О компании Рустрак")}
              </h2>

              <p className="mb-10 font-fira-sans font-normal text-lg sm:text-base">
                {t(
                  "home_about_p1",
                  "Наша компания занимает лидирующие позиции на рынке спецтехники: каждый день мы вносим свой вклад в развитие отечественного автопрома и укрепление российской экономики.",
                )}
              </p>

              <p className="font-fira-sans font-normal text-lg sm:text-base">
                {t(
                  "home_about_p2",
                  "«РусТрак» является ведущим производителем коммерческого транспорта и специализированной техники. Наша работа признана и высоко оценена крупнейшими отечественными корпорациями.",
                )}
              </p>

              <div className="border-2 border-[#fec80b] mt-8 py-2 px-4 max-w-50 flex justify-center rounded-xl bg-yellow-300 hover:bg-[#ffd43a] transition duration-300">
                <a
                  href="/about"
                  className="font-fira-sans text-black font-medium text-base cursor-pointer transition duration-300 flex gap-2 items-center"
                >
                  {t("learnMore", "Подробнее")}
                  <span>
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
            </div>

            <div>
              <img src="/about-truck32.png" alt="white-trucks" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FEC80B] mt-20 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-1">
            <div className="pt-20">
              <p className="font-fira-sans font-medium text-8xl">17</p>
              <p className="font-fira-sans font-medium text-3xl">
                {t("home_stats_years", "лет")}
              </p>
              <p className="font-normal text-lg font-fira-sans pt-7 md:text-base">
                За 17 лет деятельности ООО
                <br />
                «РусТрак» превратилось в крупное предприятие по производству и{" "}
                <br /> продаже специальной техники
              </p>
            </div>

            <div className="pt-20">
              <p className="font-fira-sans font-medium text-8xl">85</p>
              <p className="font-fira-sans font-medium text-3xl">
                {t("home_stats_subjects", "субъектов")}
              </p>
              <p className="font-normal text-lg font-fira-sans pt-7">
                Мы обеспечили 85 субъектов РФ <br /> надёжной техникой
                коммерческого и <br /> специализированного <br /> предназначения
              </p>
            </div>

            <div className="pt-20">
              <p className="font-fira-sans font-medium text-8xl">11</p>
              <p className="font-fira-sans font-medium text-3xl">
                {t("home_stats_concerns", "концернов")}
              </p>
              <p className="font-normal text-lg font-fira-sans pt-7">
                ООО «РусТрак» дорожит доверием <br /> автопрома, которое
                подтверждено <br /> полномочиями от 11 <br /> автопроизводителей
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArcNavigation />

      <section className="recommend-section bg-gray-300">
        <div className="container">
          <div className="flex mt-15 justify-between mb-5 pt-12">
            <h2 className="font-fira-sans font-medium lg:text-[42px] text-3xl">
              {t("home_recommended", "Рекомендуемая продукция")}
            </h2>
            <div className="lg:flex items-center gap-2 hidden md:block">
              <button className="recomend-swiper-button-prev border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer">
                <ChevronLeft />
              </button>
              <button className="recomend-swiper-button-next border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer">
                <ChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={12}
            navigation={{
              prevEl: ".recomend-swiper-button-prev",
              nextEl: ".recomend-swiper-button-next",
            }}
            modules={[Navigation]}
            className="mySwiper recomend-swiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {recomendData.map((recomendProduct) => (
              <SwiperSlide key={recomendProduct.id}>
                <div className="wrapper-slider bg-white rounded-md overflow-hidden border border-gray-100 shadow-xs h-full flex flex-col justify-between">
                  <div>
                    <div className="relative">
                      <a href="/catalog">
                        <img
                          src={recomendProduct.recImage}
                          alt={recomendProduct.recText}
                          className="object-cover w-full h-48"
                        />
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(recomendProduct);
                        }}
                        className={`absolute top-2 right-2 p-1.5 rounded-full transition cursor-pointer shadow-sm ${
                          isInFavorites(recomendProduct)
                            ? "bg-red-50 text-red-500"
                            : "bg-white/80 hover:bg-white text-gray-700 hover:text-red-500"
                        }`}
                        title={
                          isInFavorites(recomendProduct)
                            ? t("removeFromFavorites", "Удалить из избранного")
                            : t("addToFavorites", "В избранное")
                        }
                      >
                        <Heart
                          size={18}
                          className={
                            isInFavorites(recomendProduct)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }
                        />
                      </button>
                    </div>

                    <div className="p-3">
                      <a href="/catalog">
                        <p className="font-fira-sans text-sm font-normal lg:text-base text-gray-800 line-clamp-2 min-h-11">
                          {recomendProduct.recText}
                        </p>
                      </a>
                      <p className="font-fira-sans lg:text-xl font-medium mt-2 text-[#222]">
                        {recomendProduct.product}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center p-3 pt-0">
                    <a
                      href="/catalog"
                      className="font-fira-sans text-black font-normal text-sm cursor-pointer bg-[#FEC80B] hover:bg-[#ffd43a] transition duration-300 flex items-center justify-center h-10 rounded-sm flex-1 text-center"
                    >
                      {t("learnMore", "Подробнее")}
                    </a>

                    <button
                      type="button"
                      onClick={() => addToCart(recomendProduct)}
                      className={`h-10 px-3 rounded-sm border transition-colors cursor-pointer flex items-center justify-center shrink-0 ${
                        isInCart(recomendProduct)
                          ? "bg-[#FEC80B] text-black border-[#FEC80B]"
                          : "border-gray-300 text-gray-600 hover:border-[#FEC80B] hover:text-black"
                      }`}
                      title={
                        isInCart(recomendProduct)
                          ? t("inCart", "В корзине")
                          : t("addToCart", "Добавить в корзину")
                      }
                    >
                      <ShoppingCart size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("feedback-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="hidden lg:flex items-center gap-1 cursor-pointer text-[#A1A1A1] hover:text-black transition text-sm shrink-0"
                    >
                      <span>{t("getKp", "Получить КП")}</span>
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="novosti-section">
        <div className="container">
          <div className="flex justify-between items-center mt-10">
            <h2 className="font-fira-sans font-medium text-4xl sm:text-2xl">
              {t("home_news", "Новости")}
            </h2>

            <div className="btn-wrap lg:flex gap-2 hidden md:block">
              <button className="novosti-swiper-button-prev border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer">
                <ChevronLeft />
              </button>
              <button className="novosti-swiper-button-next border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer">
                <ChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            className="mySwiper novosti-swiper"
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            navigation={{
              prevEl: ".novosti-swiper-button-prev",
              nextEl: ".novosti-swiper-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 22,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {novostData.map((novostItem) => (
              <SwiperSlide key={novostItem.id}>
                <div className="mt-5">
                  <a href="/news" className="block overflow-hidden rounded-md">
                    <img
                      src={novostItem.novostImage}
                      alt={novostItem.novostDesc}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-md"
                    />
                  </a>
                  <p className="font-fira-sans font-normal text-sm text-gray-500 mt-3">
                    {novostItem.novostDate}
                  </p>
                  <h5 className="font-fira-sans font-medium text-base line-clamp-2 mt-1">
                    {novostItem.novostDesc}
                  </h5>

                  <a
                    href="/news"
                    className="flex items-center gap-2 mt-2 text-gray-600 hover:text-black transition"
                  >
                    <span className="text-[#A1A1A1] font-fira-sans font-normal text-sm">
                      {t("learnMore", "Подробнее")}
                    </span>
                    <MoveRight size={16} className="text-[#A1A1A1]" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
      />
    </>
  );
}
