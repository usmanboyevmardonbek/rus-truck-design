import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, Layers, Tag, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { catalogProducts, catData } from "../pages/objects";
import { motion, AnimatePresence } from "motion/react";
import { translateTitle } from "../utils/productTranslation";

const brandEquivalents = {
  kamaz: "камаз", камаз: "kamaz",
  maz: "маз", маз: "maz",
  gaz: "газ", газ: "gaz",
  jac: "джек",
  faw: "фав", фав: "faw",
  shacman: "шакман", шакман: "shacman",
  isuzu: "исузу", исузу: "isuzu",
  sollers: "соллерс", соллерс: "sollers",
  palfinger: "палфингер", палфингер: "palfinger",
  inman: "инман", инман: "inman",
  unic: "юник", юник: "unic",
  soosan: "сусан", сусан: "soosan",
  valday: "валдай", валдай: "valday",
  sadko: "садко", садко: "sadko",
  gazon: "газон", газон: "gazon",
  kompas: "компас", компас: "kompas",
  furgon: "фургон", фургон: "furgon",
  samosval: "самосвал", самосвал: "samosval",
  sisterna: "цистерна", tsisterna: "цистерна", цистерна: "sisterna",
  kran: "кран", кран: "kran",
  manipulyator: "манипулятор", манипулятор: "manipulyator",
  evakuator: "эвакуатор", эвакуатор: "evakuator",
  bort: "борт", борт: "bort",
  shtor: "штор", штор: "shtor",
};

const catTitleMap = {
  "/catalog/shtornye-avtomobili": "cat_shtornye",
  "/catalog/krany-manipulator": "cat_krany",
  "/catalog/zapravka": "cat_zapravka",
  "/catalog/gidropod": "cat_gidropod",
  "/catalog/sisterna": "cat_sisterna",
  "/catalog/evakuator": "cat_evakuator",
  "/catalog/avtofurgony": "cat_avtofurgony",
  "/catalog/konteynerovozy": "cat_konteynerovozy",
  "/catalog/kryukovye-pogruzchiki": "cat_kryukovye",
  "/catalog/samosvaly": "cat_samosvaly",
  "/catalog/avtomobili-dopog": "cat_dopog",
  "/catalog/bortovye-avtomobili": "cat_bortovye",
};

export function SearchBox({ mode = "desktop", isOpen = false, onClose }) {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Index products and categories
  const allProducts = Object.entries(catalogProducts || {}).map(([slug, prod]) => ({
    ...prod,
    slug: prod.slug || slug,
    categoryPath: prod.categoryPath || "/catalog",
    image: Array.isArray(prod.images) && prod.images.length > 0 ? prod.images[0] : (prod.image || "/cat-1.webp"),
  }));

  const allCategories = (catData || []).map((cat) => ({
    ...cat,
    link: cat.catLink || "/catalog",
  }));

  // Perform search
  const performSearch = (q) => {
    const raw = q.toLowerCase().trim();
    if (!raw) return { categories: [], products: [] };

    const tokens = raw.split(/\s+/).filter(Boolean);

    const matchedCategories = allCategories.filter((cat) => {
      const text = `${cat.catTitle} ${cat.catDesc || ""}`.toLowerCase();
      return tokens.every((token) => {
        const altToken = brandEquivalents[token];
        return text.includes(token) || (altToken && text.includes(altToken));
      });
    });

    const matchedProducts = allProducts.filter((prod) => {
      const text = `${prod.title} ${prod.brand || ""} ${prod.categoryTitle || ""} ${prod.slug}`.toLowerCase();
      return tokens.every((token) => {
        const altToken = brandEquivalents[token];
        return text.includes(token) || (altToken && text.includes(altToken));
      });
    });

    return {
      categories: matchedCategories.slice(0, 3),
      products: matchedProducts.slice(0, 10),
      totalCount: matchedCategories.length + matchedProducts.length,
    };
  };

  const results = performSearch(query);

  // Close on outside click for desktop
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Autofocus when mobile drawer opens
  useEffect(() => {
    if (mode === "mobile" && isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [mode, isOpen]);

  // Navigate handler
  const handleSelect = (url) => {
    navigate(url);
    setIsDropdownOpen(false);
    setQuery("");
    if (onClose) onClose();
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (results.products.length > 0) {
        const first = results.products[0];
        handleSelect(`${first.categoryPath}/${first.slug}`);
      } else if (results.categories.length > 0) {
        handleSelect(results.categories[0].link);
      }
    } else if (e.key === "Escape") {
      setIsDropdownOpen(false);
      if (onClose) onClose();
    }
  };

  // DESKTOP MODE
  if (mode === "desktop") {
    return (
      <div ref={containerRef} className="relative w-48 lg:w-56 xl:w-72">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => {
              if (query.trim()) setIsDropdownOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={t("searchPlaceholder", "Поиск по каталогу...")}
            className="w-full h-10 border border-[#FEC80B] rounded-full font-fira-sans text-xs sm:text-sm pl-3.5 pr-14 bg-white outline-none shadow-xs focus:ring-2 focus:ring-[#FEC80B]/50 transition-all"
          />

          <div className="absolute right-2 flex items-center gap-0.5">
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setIsDropdownOpen(false);
                  inputRef.current?.focus();
                }}
                className="p-1 text-gray-400 hover:text-black cursor-pointer rounded-full transition-colors"
                title={t("searchClear", "Очистить")}
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                if (query.trim()) {
                  setIsDropdownOpen(true);
                  if (results.products.length > 0) {
                    const first = results.products[0];
                    handleSelect(`${first.categoryPath}/${first.slug}`);
                  }
                }
              }}
              className="p-1.5 text-black hover:text-[#FEC80B] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Live Suggestions Dropdown */}
        <AnimatePresence>
          {isDropdownOpen && query.trim().length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-[calc(100%+8px)] w-[360px] sm:w-[420px] lg:w-[460px] max-h-[460px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 z-70 p-3"
            >
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 mb-2">
                <span className="text-xs font-fira-sans text-gray-500">
                  {t("foundProducts", "Найдено товаров:")}{" "}
                  <strong className="text-black font-bold">{results.products.length}</strong>
                </span>
                <span className="text-[11px] text-gray-400 font-fira-sans">
                  Enter ↵ {t("quickView", "Перейти")}
                </span>
              </div>

              {/* Categories */}
              {results.categories.length > 0 && (
                <div className="mb-3">
                  <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider font-fira-sans">
                    {t("searchCategories", "Категории")}
                  </div>
                  <div className="space-y-1">
                    {results.categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleSelect(cat.link)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-amber-50/70 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Layers className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="font-fira-sans font-medium text-sm text-gray-800 group-hover:text-amber-600 transition-colors">
                            {catTitleMap[cat.link] ? t(catTitleMap[cat.link], cat.catTitle) : cat.catTitle}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 font-fira-sans">{cat.catDesc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products */}
              {results.products.length > 0 ? (
                <div>
                  <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider font-fira-sans">
                    {t("catalog", "Каталог")}
                  </div>
                  <div className="space-y-1.5 mt-1">
                    {results.products.map((prod) => {
                      const localizedTitle = translateTitle(prod.title, lang);
                      const localizedCatTitle = catTitleMap[prod.categoryPath] ? t(catTitleMap[prod.categoryPath], prod.categoryTitle) : prod.categoryTitle;
                      const localizedPrice = prod.price === "Цена по запросу" ? t("priceOnRequest", "Цена по запросу") : prod.price;

                      return (
                        <button
                          key={prod.id}
                          onClick={() => handleSelect(`${prod.categoryPath}/${prod.slug}`)}
                          className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors text-left cursor-pointer group border border-transparent hover:border-gray-200"
                        >
                          <img
                            src={prod.image}
                            alt={localizedTitle}
                            className="w-14 h-12 object-contain bg-gray-50 rounded-lg p-1 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-fira-sans font-medium text-sm text-gray-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                              {localizedTitle}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs text-gray-400 font-fira-sans truncate">
                                {localizedCatTitle}
                              </span>
                              <span className="text-xs text-black font-semibold font-fira-sans">
                                • {localizedPrice}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500 shrink-0 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : results.categories.length === 0 ? (
                <div className="py-8 text-center px-4">
                  <Search className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="font-fira-sans font-medium text-sm text-gray-700">
                    {t("noResultsFound", "По вашему запросу ничего не найдено")}
                  </p>
                  <p className="text-xs text-gray-400 font-fira-sans mt-1">
                    Попробуйте ввести марку (КАМАЗ, МАЗ, JAC) или категорию (манипулятор, цистерна)
                  </p>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // MOBILE MODAL MODE
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-110 flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Search Box Drawer */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 bg-white w-full shadow-2xl rounded-b-3xl border-b border-gray-200 p-4 max-h-[85vh] flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <Search className="w-5 h-5 text-amber-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("searchPlaceholder", "Поиск по каталогу...")}
                className="w-full text-base font-fira-sans outline-none bg-transparent placeholder-gray-400 text-gray-900"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-gray-400 hover:text-black cursor-pointer rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-fira-sans px-3 py-1.5 rounded-full cursor-pointer transition-colors shrink-0"
              >
                {t("searchClose", "Закрыть")}
              </button>
            </div>

            {/* Results in Mobile */}
            <div className="overflow-y-auto mt-3 flex-1 divide-y divide-gray-100">
              {query.trim().length === 0 ? (
                <div className="py-6 px-2 text-center text-gray-400 font-fira-sans text-sm">
                  Начните вводить название модели, бренд или тип техники...
                </div>
              ) : results.products.length === 0 && results.categories.length === 0 ? (
                <div className="py-8 text-center px-4">
                  <p className="font-fira-sans font-medium text-base text-gray-700">
                    {t("noResultsFound", "По вашему запросу ничего не найдено")}
                  </p>
                  <p className="text-xs text-gray-400 font-fira-sans mt-1">
                    Попробуйте изменить запрос, например: КАМАЗ, фургон, кран, МАЗ
                  </p>
                </div>
              ) : (
                <>
                  {/* Matching Categories */}
                  {results.categories.length > 0 && (
                    <div className="py-2">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-fira-sans px-2 mb-1">
                        {t("searchCategories", "Категории")}
                      </div>
                      {results.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleSelect(cat.link)}
                          className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-amber-50 active:bg-amber-100 cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <Layers className="w-4 h-4 text-amber-500" />
                            <span className="font-fira-sans font-medium text-sm text-gray-800">
                              {catTitleMap[cat.link] ? t(catTitleMap[cat.link], cat.catTitle) : cat.catTitle}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">{cat.catDesc}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Matching Products */}
                  {results.products.length > 0 && (
                    <div className="py-2">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-fira-sans px-2 mb-1">
                        {t("foundProducts", "Найдено товаров:")} {results.products.length}
                      </div>
                      <div className="space-y-1">
                        {results.products.map((prod) => {
                          const localizedTitle = translateTitle(prod.title, lang);
                          const localizedCatTitle = catTitleMap[prod.categoryPath] ? t(catTitleMap[prod.categoryPath], prod.categoryTitle) : prod.categoryTitle;
                          const localizedPrice = prod.price === "Цена по запросу" ? t("priceOnRequest", "Цена по запросу") : prod.price;

                          return (
                            <button
                              key={prod.id}
                              onClick={() => handleSelect(`${prod.categoryPath}/${prod.slug}`)}
                              className="w-full flex items-center gap-3 p-2.5 rounded-xl text-left hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
                            >
                              <img
                                src={prod.image}
                                alt={localizedTitle}
                                className="w-14 h-12 object-contain bg-gray-50 rounded-lg p-1 shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-fira-sans font-medium text-sm text-gray-900 line-clamp-1">
                                  {localizedTitle}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-xs text-gray-400 font-fira-sans truncate">
                                    {localizedCatTitle}
                                  </span>
                                  <span className="text-xs text-black font-semibold font-fira-sans">
                                    • {localizedPrice}
                                  </span>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
