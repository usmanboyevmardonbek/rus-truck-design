import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import {
  Grid2x2,
  List,
  Search,
  Heart,
  ShoppingCart,
  Download,
} from "lucide-react";
import { Header } from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import Footer from "../components/footer";
import Feedback from "../components/Feedback";
import Slider from "../components/Slider";
import { useState } from "react";
import { Loader } from "../components/Loader";
import { NavLink } from "react-router-dom";
import { matchesBrand, matchesFormula } from "../utils/filterUtils";
import {
  translateTitle,
  translateSpecLabel,
  translateSpecValue,
  translatePrice,
} from "../utils/productTranslation";
import CategoryArticle from "../components/CategoryArticle";

const dummyProducts = [
  {
    id: 1,
    slug: "palfinger-p180t-gaz-c41r13",
    img: "/gid-1.jpg",
    title: "Автогидроподъемник PALFINGER P180T на шасси ГАЗ C41R13",
    price: "Цена по запросу",
    outOfStock: false,
    specs: [
      { label: "Марка", value: "ГАЗ" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Высота подъема", value: "18 м" },
    ],
  },
  {
    id: 2,
    slug: "palfinger-p240a-hd-78",
    img: "/gid-2.jpg",
    title: "Автогидроподъемник PALFINGER P 240A на шасси HD-78",
    price: "Цена по запросу",
    outOfStock: true,
    specs: [
      { label: "Марка", value: "Hyundai" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Высота подъема", value: "24 м" },
    ],
  },
  {
    id: 3,
    slug: "palfinger-p200a-isuzu-nmr-85h",
    img: "/gid-3.jpg",
    title: "Автогидроподъемник PALFINGER P 200A на шасси ISUZU NMR-85H",
    price: "Цена по запросу",
    outOfStock: true,
    specs: [
      { label: "Марка", value: "ISUZU" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Высота подъема", value: "20 м" },
    ],
  },
];

const brands = ["ГАЗ", "Hyundai", "ISUZU"];
const formulas = ["4x2"];

const Gidropod = () => {
  const { t, lang } = useLanguage();
  const { addToCart, isInCart, toggleFavorite, isInFavorites } = useCart();
  const [shtor, setShtore] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("gidropodViewMode") || "grid";
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFormulas, setSelectedFormulas] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");

  const handleToggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleToggleFormula = (formula) => {
    setSelectedFormulas((prev) =>
      prev.includes(formula) ? prev.filter((f) => f !== formula) : [...prev, formula]
    );
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setSelectedFormulas([]);
    setBrandSearch("");
  };

  const visibleBrands = brands.filter((b) =>
    b.toLowerCase().includes(brandSearch.trim().toLowerCase())
  );

  const filteredProducts = dummyProducts.filter((product) => {
    const brandMatch = matchesBrand(product, selectedBrands);
    const formulaMatch = matchesFormula(product, selectedFormulas);
    return brandMatch && formulaMatch;
  });

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsLocalLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setViewMode(mode);
      localStorage.setItem("gidropodViewMode", mode);
      setIsLocalLoading(false);
    }, 600);
  };

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
            <li className="font-fira-sans text-gray-400 text-sm">
              {t("cat_gidropod", "Автогидроподъёмники")}
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="flex items-baseline gap-4">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                {t("cat_gidropod", "Автогидроподъёмники")}
              </h1>
              <p className="font-fira-sans text-gray-400 text-sm">
                {filteredProducts.length} {t("productsWord", "товаров")}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative">
                <span className="font-fira-sans text-gray-400 text-sm">
                  {t("sortBy", "Сортировка:")}
                </span>
                <div className="relative z-50">
                  <button
                    className="cursor-pointer font-fira-sans text-sm font-medium flex items-center gap-1 transition-colors"
                    onClick={() => setShtore(!shtor)}
                  >
                    {t("sortBrand", "По бренду")}
                  </button>
                  <ul
                    className={
                      "absolute bg-white transition-all mt-4 -left-23 duration-300 ease-in overflow-y-hidden shadow-lg z-50 " +
                      (shtor ? "h-50" : "h-0")
                    }
                  >
                    <li className="border-t border-x border-b rounded-t-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        {t("sortPopular", "По популярности")}
                      </p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        {t("sortNewest", "Сначала новые")}
                      </p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        {t("sortInStock", "В наличии")}
                      </p>
                    </li>
                    <li className="border-b border-x border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        {t("sortPriceAsc", "По возрастанию цены")}
                      </p>
                    </li>
                    <li className="border-b border-x rounded-b-sm border-[#a2a2a2] w-60 bg-white">
                      <p className="font-fira-sans text-sm px-5 py-2.5 hover:bg-gray-50 cursor-pointer">
                        {t("sortBrand", "По бренду")}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewChange("list")}
                  className={`p-2 transition-colors rounded-sm ${
                    viewMode === "list"
                      ? "bg-[#FEC80B] text-black shadow-sm"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleViewChange("grid")}
                  className={`p-2 transition-colors rounded-sm ${
                    viewMode === "grid"
                      ? "bg-[#FEC80B] text-black shadow-sm"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  <Grid2x2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start mb-30">
            <div className="w-full lg:w-70 bg-white p-6 shadow-sm flex flex-col gap-8 shrink-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">{t("brand", "Марка")}</h3>
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                    placeholder={t("search", "Найти")}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 text-sm outline-none focus:border-[#FEC80B]"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="flex flex-col gap-3">
                  {visibleBrands.length === 0 ? (
                    <p className="text-xs text-gray-400 py-2">{t("brandNotFound", "Марки не найдены")}</p>
                  ) : (
                    visibleBrands.map((brand, idx) => {
                      const isChecked = selectedBrands.includes(brand);
                      return (
                        <label
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer group select-none"
                        >
                          <div
                            className={`relative flex items-center justify-center w-5 h-5 border rounded-sm transition-colors shrink-0 ${
                              isChecked
                                ? "bg-[#FEC80B] border-[#FEC80B]"
                                : "border-gray-300 group-hover:border-[#FEC80B]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleBrand(brand)}
                              className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                            />
                            {isChecked && (
                              <svg
                                className="w-3.5 h-3.5 text-black pointer-events-none stroke-[3]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                          <span
                            className={`font-fira-sans text-sm transition-colors ${
                              isChecked ? "text-black font-semibold" : "text-gray-700"
                            }`}
                          >
                            {brand}
                          </span>
                        </label>
                      );
                    })
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-fira-sans font-bold text-lg mb-4">
                  {t("wheelFormula", "Колесная формула")}
                </h3>
                <div className="flex flex-col gap-3">
                  {formulas.map((formula, idx) => {
                    const isChecked = selectedFormulas.includes(formula);
                    return (
                      <label
                        key={idx}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <div
                          className={`relative flex items-center justify-center w-5 h-5 border rounded-sm transition-colors shrink-0 ${
                            isChecked
                              ? "bg-[#FEC80B] border-[#FEC80B]"
                              : "border-gray-300 group-hover:border-[#FEC80B]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleFormula(formula)}
                            className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                          />
                          {isChecked && (
                            <svg
                              className="w-3.5 h-3.5 text-black pointer-events-none stroke-[3]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`font-fira-sans text-sm transition-colors ${
                            isChecked ? "text-black font-semibold" : "text-gray-700"
                          }`}
                        >
                          {formula}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("product-grid-view");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 bg-[#FEC80B] hover:bg-yellow-500 transition-colors rounded-sm font-fira-sans font-medium text-sm cursor-pointer"
                >
                  {t("showProducts", "Показать товары")} ({filteredProducts.length})
                </button>
                {(selectedBrands.length > 0 || selectedFormulas.length > 0) && (
                  <button
                    onClick={handleResetFilters}
                    className="w-full py-1 text-gray-500 hover:text-black transition-colors font-fira-sans text-xs underline cursor-pointer text-center"
                  >
                    {t("resetFilters", "Сбросить фильтры")}
                  </button>
                )}
              </div>
            </div>

            <div id="product-grid-view" className="flex-1 relative min-h-125 w-full flex flex-col gap-10">
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
                  {filteredProducts.length === 0 ? (
                    <div className="col-span-full py-16 text-center bg-white border border-dashed border-gray-300 rounded-md p-8">
                      <p className="font-fira-sans text-lg font-medium text-gray-700 mb-2">
                        {t("noProductsFound", "Товары не найдены")}
                      </p>
                      <p className="font-fira-sans text-sm text-gray-500 mb-6">
                        {t("tryChangingFilters", "Попробуйте изменить параметры фильтрации")}
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-sm cursor-pointer"
                      >
                        {t("resetFilters", "Сбросить фильтры")}
                      </button>
                    </div>
                  ) : (
                    filteredProducts.map((product) => {
                      const localizedTitle = translateTitle(product.title, lang);
                      return (
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
                            to={`/catalog/gidropod/${product.slug}`}
                            className={
                              viewMode === "grid"
                                ? "relative bg-gray-200 aspect-4/3 w-full flex items-center justify-center overflow-hidden shrink-0 block"
                                : "relative bg-gray-200 w-full md:w-[320px] flex items-center justify-center overflow-hidden shrink-0 block"
                            }
                          >
                            <img
                              src={product.img}
                              alt={localizedTitle}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />

                            {product.outOfStock && (
                              <div className="absolute inset-0 bg-white/70 flex items-center justify-center backdrop-blur-[1px]">
                                <span className="font-fira-sans font-bold text-gray-600 text-lg uppercase tracking-wider px-4 py-1 rounded">
                                  {t("outOfStock", "Нет в продаже")}
                                </span>
                              </div>
                            )}

                            <button
                              type="button"
                              className={`absolute top-4 right-4 transition-colors z-10 cursor-pointer ${
                                isInFavorites(product) ? "text-red-500" : "text-gray-500 hover:text-red-500"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleFavorite(product);
                              }}
                              title={
                                isInFavorites(product)
                                  ? t("removeFromFavorites", "Удалить из избранного")
                                  : t("addToFavorites", "В избранное")
                              }
                            >
                              <Heart
                                className={`w-6 h-6 transition-transform active:scale-125 ${
                                  isInFavorites(product) ? "fill-red-500 text-red-500" : ""
                                }`}
                              />
                            </button>
                          </NavLink>

                          <div
                            className={
                              viewMode === "grid"
                                ? "p-3 flex flex-col flex-1"
                                : "p-3 flex flex-col md:flex-row flex-1 justify-between gap-6"
                            }
                          >
                            <div
                              className={
                                viewMode === "list"
                                  ? "flex-1 flex flex-col max-w-112.5"
                                  : "flex-1 flex flex-col"
                              }
                            >
                              <NavLink to={`/catalog/gidropod/${product.slug}`}>
                                <h3
                                  className={`font-fira-sans text-base sm:text-lg hover:text-[#FEC80B] transition-colors font-medium ${
                                    viewMode === "list" ? "mb-6 text-lg" : "mb-4 flex-1 line-clamp-2"
                                  }`}
                                >
                                  {localizedTitle}
                                </h3>
                              </NavLink>

                              {product.specs && (
                                <ul className="space-y-1 mb-4 text-xs text-gray-600">
                                  {product.specs.map((s, idx) => (
                                    <li
                                      key={idx}
                                      className="flex justify-between border-b border-gray-100 py-0.5"
                                    >
                                      <span className="text-gray-400">
                                        {translateSpecLabel(s.label, lang)}:
                                      </span>
                                      <span className="font-medium text-gray-700">
                                        {translateSpecValue(s.value, lang)}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>

                            <div
                              className={
                                viewMode === "grid"
                                  ? "mt-auto"
                                  : "flex flex-col items-end justify-between shrink-0"
                              }
                            >
                              <p
                                className={`font-fira-sans font-bold text-lg sm:text-xl text-black ${
                                  viewMode === "grid" ? "mb-4" : "mb-4"
                                }`}
                              >
                                {translatePrice(product.price, lang)}
                              </p>

                              <div
                                className={
                                  viewMode === "grid"
                                    ? "flex items-center justify-between gap-2"
                                    : "flex flex-col items-end gap-4 w-full"
                                }
                              >
                                <NavLink
                                  to={`/catalog/gidropod/${product.slug}`}
                                  className={`bg-[#FEC80B] hover:bg-yellow-500 transition-colors text-black font-fira-sans text-xs font-medium py-2.5 px-6 rounded-sm text-center ${
                                    viewMode === "list" ? "w-full" : ""
                                  }`}
                                >
                                  {t("learnMore", "Подробнее")}
                                </NavLink>

                                <div
                                  className={`flex items-center text-gray-500 ${
                                    viewMode === "grid" ? "gap-3" : "gap-4 w-full justify-between"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <button
                                      type="button"
                                      onClick={() => addToCart(product)}
                                      className={`transition-colors cursor-pointer ${
                                        isInCart(product) ? "text-green-600 font-bold" : "hover:text-black"
                                      }`}
                                      title={
                                        isInCart(product)
                                          ? t("inCart", "В корзине")
                                          : t("addToCart", "Добавить в корзину")
                                      }
                                    >
                                      <ShoppingCart
                                        className={`w-5 h-5 ${
                                          isInCart(product) ? "text-green-600" : ""
                                        }`}
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => toggleFavorite(product)}
                                      className={`transition-colors cursor-pointer ${
                                        isInFavorites(product) ? "text-red-500" : "hover:text-black"
                                      }`}
                                      title={
                                        isInFavorites(product)
                                          ? t("removeFromFavorites", "Удалить из избранного")
                                          : t("addToFavorites", "В избранное")
                                      }
                                    >
                                      <Heart
                                        className={`w-6 h-6 transition-transform active:scale-125 ${
                                          isInFavorites(product) ? "fill-red-500 text-red-500" : ""
                                        }`}
                                      />
                                    </button>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const el = document.getElementById("feedback-section");
                                      if (el) el.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className={`flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer group/kp ${
                                      viewMode === "list" ? "ml-auto" : ""
                                    }`}
                                  >
                                    <p className="text-[9px] font-fira-sans">{t("getKp", "Получить КП")}</p>
                                    <Download className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  )}
                </motion.div>
              )}

              {/* Multilingual SEO Description Article */}
              {viewMode === "grid" && <CategoryArticle category="gidropod" />}
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

export default Gidropod;
