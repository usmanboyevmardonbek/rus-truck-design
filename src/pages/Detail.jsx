import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";

import Feedback from "../layout/Feedback";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { catalogProducts } from "./objects";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import {
  translateTitle,
  translateSpecLabel,
  translateSpecValue,
  translatePrice,
} from "../utils/productTranslation";

const categoryPathToKey = {
  "/catalog/shtornye-avtomobili": "cat_shtornye",
  "/catalog/krany-manipulator": "cat_krany",
  "/catalog/zapravka": "cat_zapravka",
  "/catalog/gidropod": "cat_gidropod",
  "/catalog/sisterna": "cat_sisterna",
  "/catalog/evakuator": "cat_evakuator",
  "/catalog/bortovye-avtomobili": "cat_bortovye",
  "/catalog/avtofurgony": "cat_avtofurgony",
  "/catalog/konteynerovozy": "cat_konteynerovozy",
  "/catalog/kryukovye-pogruzchiki": "cat_kryukovye",
  "/catalog/samosvaly": "cat_samosvaly",
  "/catalog/avtomobili-dopog": "cat_dopog",
};

export default function Detail() {
  const { t, lang } = useLanguage();
  const { addToCart, isInCart, toggleFavorite, isInFavorites } = useCart();
  const { slug } = useParams();
  const product = catalogProducts[slug];
  const [activeImg, setActiveImg] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!product) {
    return (
      <>
        
        <div className="container py-24 text-center">
          <h1 className="font-fira-sans text-2xl font-bold mb-4">
            {t("noProductsFound", "Товар не найден")}
          </h1>
          <p className="text-gray-500 mb-6">
            {t(
              "tryChangingFilters",
              "Запрашиваемый автомобиль не найден в каталоге.",
            )}
          </p>
          <NavLink
            to="/catalog"
            className="inline-block bg-[#FEC80B] hover:bg-yellow-500 text-black px-6 py-2.5 rounded font-fira-sans font-medium transition-colors"
          >
            ← {t("catalog", "Каталог")}
          </NavLink>
        </div>
        
      </>
    );
  }

  const localizedTitle = translateTitle(product.title, lang);
  const localizedCategory = t(
    categoryPathToKey[product.categoryPath] || "catalog",
    product.categoryTitle,
  );
  const localizedPrice = translatePrice(product.price, lang);

  const similarProducts = Object.values(catalogProducts).filter(
    (item) =>
      item.categoryPath === product.categoryPath && item.slug !== product.slug,
  );

  return (
    <>
      <Header />
      <div className="bg-[#F8F8F8] min-h-screen pb-20">
        <div className="container py-6">
          <ul className="flex items-center gap-2 mb-6 flex-wrap">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to="/">{t("home", "Главная")}</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to="/catalog">{t("catalog", "Каталог")}</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to={product.categoryPath}>{localizedCategory}</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm line-clamp-1">
              {localizedTitle}
            </li>
          </ul>

          <h1 className="font-fira-sans font-medium uppercase text-2xl md:text-3xl text-black mb-8">
            {localizedTitle}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[55%]">
              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                navigation={{
                  nextEl: ".cat-detail-next",
                  prevEl: ".cat-detail-prev",
                }}
                onSlideChange={(swiper) => setActiveImg(swiper.activeIndex)}
                className="w-full aspect-4/3 bg-white mb-3 relative rounded-sm overflow-hidden shadow-sm"
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={localizedTitle}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <p className="font-fira-sans font-medium text-3xl text-black mb-6 ml-5">
                  {localizedPrice}
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className={`flex-1 transition-all py-3 font-fira-sans font-medium text-base rounded-sm cursor-pointer shadow-sm ${
                      isInCart(product)
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-[#FEC80B] hover:bg-yellow-500 text-black"
                    }`}
                  >
                    {isInCart(product)
                      ? `✓ ${t("inCart", "В корзине")}`
                      : t("addToCart", "Добавить в корзину")}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("feedback-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 border-2 border-[#FEC80B] hover:bg-yellow-50 transition-colors py-3 font-fira-sans font-medium text-base rounded-sm cursor-pointer text-center"
                  >
                    {t("getKp", "Получить КП")}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product)}
                    title={
                      isInFavorites(product)
                        ? t("removeFromFavorites", "Удалить из избранного")
                        : t("addToFavorites", "В избранное")
                    }
                    className={`p-3 border rounded-sm transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                      isInFavorites(product)
                        ? "border-red-400 bg-red-50 text-red-500 shadow-sm"
                        : "border-gray-300 text-gray-500 hover:text-red-500 hover:border-red-300 hover:bg-white"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 transition-transform active:scale-125 ${isInFavorites(product) ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </button>
                </div>

                <ul>
                  {product.shortSpecs.map((spec, i) => (
                    <li key={i} className="flex justify-between py-2.5 gap-4">
                      <p className="font-fira-sans text-base text-black shrink-0">
                        {translateSpecLabel(spec.label, lang)}
                      </p>
                      <p className="font-fira-sans text-base text-black text-right">
                        {translateSpecValue(spec.value, lang)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#feauture"
                className="inline-block mt-4 text-sm font-fira-sans text-gray-500 hover:text-black underline"
              >
                {t("viewAllSpecs", "Смотреть все характеристики →")}
              </a>
            </div>
          </div>

          <section id="feauture" className="mt-12">
            <h2 className="font-fira-sans font-bold text-2xl text-black mb-6">
              {t("specifications", "Характеристики")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-sm overflow-hidden">
                <thead>
                  <tr className="bg-[#FEC80B]">
                    <th
                      colSpan={2}
                      className="font-fira-sans px-6 py-4 text-base text-center text-black font-semibold"
                    >
                      {localizedTitle}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.fullSpecs.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="font-fira-sans text-base px-6 py-3 w-2/5 border border-gray-200 text-gray-700">
                        {translateSpecLabel(spec.label, lang)}
                      </td>
                      <td className="font-fira-sans text-base text-black px-6 py-3 border border-gray-200">
                        {translateSpecValue(spec.value, lang)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {similarProducts.length > 0 && (
            <section className="mt-12">
              <h2 className="font-fira-sans font-bold text-2xl text-black mb-6">
                {t("similarProducts", "Похожие товары")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {similarProducts.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-sm overflow-hidden shadow-sm group"
                  >
                    <NavLink
                      to={`${item.categoryPath}/${item.slug}`}
                      className="block"
                    >
                      <div className="aspect-4/3 bg-gray-100 overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={translateTitle(item.title, lang)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-fira-sans text-sm line-clamp-2 mb-3 leading-tight font-medium">
                          {translateTitle(item.title, lang)}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="bg-[#FEC80B] hover:bg-yellow-500 transition-colors px-3 py-1.5 font-fira-sans text-xs font-medium rounded-sm">
                            {t("learnMore", "Подробнее")}
                          </span>
                          <button
                            type="button"
                            className={`transition-colors p-1 cursor-pointer ${
                              isInFavorites(item)
                                ? "text-red-500"
                                : "text-gray-400 hover:text-red-500"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleFavorite(item);
                            }}
                            title={
                              isInFavorites(item)
                                ? t(
                                    "removeFromFavorites",
                                    "Удалить из избранного",
                                  )
                                : t("addToFavorites", "В избранное")
                            }
                          >
                            <Heart
                              className={`w-5 h-5 transition-transform active:scale-125 ${isInFavorites(item) ? "fill-red-500" : ""}`}
                            />
                          </button>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      
    </>
  );
}
