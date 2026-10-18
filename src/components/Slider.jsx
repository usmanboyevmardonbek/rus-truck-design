import React from "react";
import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import { zapravkaSlider } from "../pages/objects";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { translateTitle } from "../utils/productTranslation";

const Slider = () => {
  const { t, lang } = useLanguage();
  const { toggleFavorite, isInFavorites } = useCart();

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl sm:text-2xl font-fira-sans font-bold mb-4 text-black">
        {t("similarProducts", "Похожие товары")}
      </h2>
      <Swiper
        className="mySwiper similarSwiper"
        spaceBetween={15}
        slidesPerView={2}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 14,
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
        {zapravkaSlider.map((krans) => {
          const detailUrl = `${krans.categoryPath || "/catalog/krany-manipulator"}/${krans.slug}`;
          const isFav = isInFavorites(krans);

          return (
            <SwiperSlide key={krans.id} className="rounded-lg h-auto">
              <div className="bg-white rounded-md overflow-hidden flex flex-col justify-between h-full border border-gray-100 shadow-xs hover:shadow-md transition-shadow group">
                <NavLink to={detailUrl} className="block overflow-hidden bg-gray-100 aspect-4/3 relative">
                  <img
                    src={krans.img}
                    alt={translateTitle(krans.title, lang)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </NavLink>

                <div className="p-3 flex flex-col justify-between flex-1">
                  <NavLink to={detailUrl} className="block mb-3">
                    <p className="font-fira-sans line-clamp-2 text-xs sm:text-sm font-medium text-black min-h-[36px] sm:min-h-[40px] leading-snug hover:text-amber-600 transition-colors">
                      {translateTitle(krans.title, lang)}
                    </p>
                  </NavLink>

                  <div className="flex justify-between items-center mt-auto pt-2">
                    <NavLink
                      to={detailUrl}
                      className="bg-[#FEC80B] hover:bg-[#ffd43a] transition duration-200 rounded-sm px-3 sm:px-3.5 py-1.5 text-xs font-fira-sans font-semibold text-black inline-flex items-center justify-center shadow-xs active:scale-95"
                    >
                      {t("learnMore", "Подробнее")}
                    </NavLink>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(krans);
                      }}
                      className={`cursor-pointer p-1 transition-colors ${
                        isFav ? "text-red-500" : "text-gray-400 hover:text-red-500"
                      }`}
                      title={
                        isFav
                          ? t("removeFromFavorites", "Удалить из избранного")
                          : t("addToFavorites", "В избранное")
                      }
                    >
                      <Heart
                        className={`w-5 h-5 transition-transform active:scale-125 ${
                          isFav ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
