import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart, Download, ChevronDown } from "lucide-react";
import { Header } from "../components/Header";
import Footer from "../components/footer";
import Feedback from "../components/Feedback";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Favorites() {
  const { t } = useLanguage();
  const { favoriteItems, removeFromFavorites, addToCart, isInCart, favoritesCount } = useCart();
  const [filterAvailability, setFilterAvailability] = useState("all"); // 'all' | 'inStock' | 'outOfStock'
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortKey, setSortKey] = useState("popular");

  const sortOptions = [
    { id: "popular", labelKey: "sortPopular", defaultLabel: "По популярности" },
    { id: "newest", labelKey: "sortNewest", defaultLabel: "Сначала новые" },
    { id: "inStock", labelKey: "sortInStock", defaultLabel: "В наличии" },
    { id: "priceAsc", labelKey: "sortPriceAsc", defaultLabel: "По возрастанию цены" },
  ];

  const filteredItems = favoriteItems.filter((item) => {
    if (filterAvailability === "inStock") return !item.outOfStock;
    if (filterAvailability === "outOfStock") return item.outOfStock;
    return true;
  });

  const currentSortOption = sortOptions.find((opt) => opt.id === sortKey) || sortOptions[0];

  return (
    <>
      <Header />
      <main className="bg-white min-h-[60vh] pb-12">
        <div className="container mx-auto px-4 pt-6">
          {/* Breadcrumbs */}
          <ul className="flex items-center gap-2 mb-6">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to="/">{t("home", "Главная")}</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm">{t("favorites", "Избранное")}</li>
          </ul>

          {favoriteItems.length === 0 ? (
            /* Empty State */
            <div className="pb-16 pt-2">
              <h1 className="font-fira-sans font-medium text-xl md:text-2xl text-black mb-2">
                {t("favoritesEmptyTitle", "Ваше избранное пусто.")}
              </h1>
              <p className="font-fira-sans text-sm text-black mb-8">
                {t("favoritesEmptyDesc", "Воспользуйтесь каталогом или поиском, чтобы сохранить подходящий товар.")}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <NavLink
                  to="/"
                  className="border border-[#e2e2e2] hover:border-black font-fira-sans text-sm font-medium px-6 py-2.5 rounded-sm transition-colors text-black"
                >
                  {t("toHome", "На главную")}
                </NavLink>
                <NavLink
                  to="/catalog"
                  className="bg-[#FEC80B] hover:bg-[#ffd43a] font-fira-sans text-sm font-medium px-6 py-2.5 rounded-sm transition-colors text-black"
                >
                  {t("openCatalog", "Открыть каталог")}
                </NavLink>
              </div>
            </div>
          ) : (
            /* Populated State */
            <div>
              {/* Header Row */}
              <div className="flex items-baseline gap-4 mb-6">
                <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black">
                  {t("favorites", "Избранное")}
                </h1>
                <span className="font-fira-sans text-gray-400 text-sm">
                  {favoritesCount} {favoritesCount === 1 ? t("itemWordSingular", "товар") : t("itemWordPlural", "товаров")}
                </span>
              </div>

              {/* Filters & Sorting Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-100 mb-8">
                {/* Radio filters */}
                <div className="flex items-center gap-6 text-sm font-fira-sans">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="availability"
                      value="all"
                      checked={filterAvailability === "all"}
                      onChange={() => setFilterAvailability("all")}
                      className="accent-black w-4 h-4 cursor-pointer"
                    />
                    <span>{t("all", "Все")}</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="availability"
                      value="inStock"
                      checked={filterAvailability === "inStock"}
                      onChange={() => setFilterAvailability("inStock")}
                      className="accent-black w-4 h-4 cursor-pointer"
                    />
                    <span>{t("inStock", "В наличии")}</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="availability"
                      value="outOfStock"
                      checked={filterAvailability === "outOfStock"}
                      onChange={() => setFilterAvailability("outOfStock")}
                      className="accent-black w-4 h-4 cursor-pointer"
                    />
                    <span>{t("outOfStock", "Нет в продаже")}</span>
                  </label>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <div className="flex items-center gap-2 text-sm font-fira-sans">
                    <span className="text-gray-400">{t("sortBy", "Сортировка:")}</span>
                    <button
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="flex items-center gap-1 font-medium hover:text-yellow-600 transition-colors cursor-pointer"
                    >
                      <span>{t(currentSortOption.labelKey, currentSortOption.defaultLabel)}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {isSortOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 shadow-lg rounded-sm py-1 z-30 font-fira-sans text-sm">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSortKey(option.id);
                            setIsSortOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer ${
                            sortKey === option.id ? "font-bold text-black bg-gray-50" : "text-gray-700"
                          }`}
                        >
                          {t(option.labelKey, option.defaultLabel)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {filteredItems.map((item) => (
                  <div
                    key={`${item.id}-${item.page}`}
                    className="bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300 rounded-sm flex flex-col overflow-hidden shadow-xs hover:shadow-md"
                  >
                    {/* Card Image */}
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
                      <img
                        src={item.img ? (item.img.startsWith('/') ? item.img : `/${item.img}`) : "/furgon-1.jpg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/furgon-1.jpg";
                        }}
                      />

                      {/* Heart (remove from favorites) */}
                      <button
                        onClick={() => removeFromFavorites(item.id, item.page)}
                        className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors cursor-pointer z-10 p-1 bg-white/80 rounded-full"
                        title={t("removeFromFavorites", "Убрать из избранного")}
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="font-fira-sans font-medium text-base text-black mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="font-fira-sans font-bold text-xl text-black mb-5">
                          {item.price || t("priceOnRequest", "Цена по запросу")}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-50">
                        <NavLink
                          to={`/${item.page || "catalog"}`}
                          className="bg-[#FEC80B] hover:bg-[#ffd43a] transition-colors text-black font-fira-sans text-xs font-medium py-2.5 px-4 rounded-xs cursor-pointer text-center flex-1"
                        >
                          {t("learnMore", "Подробнее")}
                        </NavLink>

                        <div className="flex items-center gap-2 text-gray-500">
                          <button
                            onClick={() => addToCart(item)}
                            className={`p-2 rounded-xs border transition-colors cursor-pointer ${
                              isInCart(item.id, item.page)
                                ? "bg-[#FEC80B] border-[#FEC80B] text-black"
                                : "hover:text-black border-gray-200"
                            }`}
                            title={isInCart(item.id, item.page) ? t("inCart", "В корзине") : t("toCart", "В корзину")}
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => removeFromFavorites(item.id, item.page)}
                            className="p-2 rounded-xs border border-gray-200 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                            title={t("removeFromFavorites", "Убрать из избранного")}
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </button>

                          <button className="p-2 rounded-xs border border-gray-200 text-gray-400 hover:text-black transition-colors cursor-pointer" title={t("getKp", "Получить КП")}>
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Feedback />
      <Footer />
    </>
  );
}
