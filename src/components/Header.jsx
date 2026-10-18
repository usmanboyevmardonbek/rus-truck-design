import {
  ChevronDown,
  Heart,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PhoneModal } from "./PhoneModal";
import { SearchBox } from "./SearchBox";
import { motion, AnimatePresence } from "motion/react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

// Full 4-Column Mega Menu (matching rtrf.ru and design screenshot)
function MegaMenuDropdown({ activeTrigger, onClose }) {
  const { t } = useLanguage();

  const categories = [
    { to: "/catalog/shtornye-avtomobili", label: t("cat_shtornye", "Шторные автомобили") },
    { to: "/catalog/krany-manipulator", label: t("cat_krany", "Краны-манипуляторы") },
    { to: "/catalog/zapravka", label: t("cat_zapravka", "Автотопливозаправщики") },
    { to: "/catalog/sisterna", label: t("cat_sisterna", "Автоцистерны") },
    { to: "/catalog/evakuator", label: t("cat_evakuator", "Автоэвакуаторы") },
    { to: "/catalog/bortovye-avtomobili", label: t("cat_bortovye", "Бортовые автомобили") },
    { to: "/catalog/avtofurgony", label: t("cat_avtofurgony", "Изотермические фургоны") },
    { to: "/catalog/konteynerovozy", label: t("cat_konteynerovozy", "Контейнеровозы") },
    { to: "/catalog/kryukovye-pogruzchiki", label: t("cat_kryukovye", "Крюковые погрузчики") },
    { to: "/catalog/samosvaly", label: t("cat_samosvaly", "Самосвалы") },
    { to: "/catalog/avtomobili-dopog", label: t("cat_dopog", "Автомобили ДОПОГ категория EXII") },
    { to: "/catalog/gidropod", label: t("cat_gidropod", "Автогидроподъёмники") },
  ];

  const aboutLinks = [
    { to: "/about", label: t("about_company", "О компании ООО «Рустрак»") },
    { to: "/news", label: t("news", "Новости") },
    { to: "/partners", label: t("partners", "Наши партнёры") },
    { to: "/production", label: t("production", "Производство") },
    { to: "/suppliers", label: t("suppliers", "Поставщикам и партнёрам") },
    { to: "/review", label: t("reviews", "Отзывы") },
    { to: "/cert", label: t("certificates", "Сертификаты") },
    { to: "/vacancies", label: t("vacancies", "Вакансии") },
    { to: "/leasing", label: t("leasing", "Кредит и лизинг") },
    { to: "/catalog/samosvaly", label: t("cat_samosvaly", "Самосвалы") },
  ];

  const mediaLinks = [
    { to: "/photogallery", label: t("photogallery", "Фотогалерея") },
    { to: "/video", label: t("video", "Видео") },
    { to: "/promo", label: t("promo", "Рекламные материалы") },
    { to: "/", label: t("info", "Информационные материалы") },
  ];

  const directLinks = [
    { to: "/service", label: t("service", "Сервис") },
    { to: "/remont", label: t("repair", "Ремонт") },
    { to: "/news", label: t("news", "Новости") },
    { to: "/contact", label: t("contacts", "Контакты") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 w-full max-h-[85vh] overflow-y-auto bg-[#F4F4F4] z-60 shadow-2xl border-t-2 border-[#FEC80B]"
    >
      <div className="container py-8 lg:py-12">
        {/* Mobile Header in MegaMenu */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-300 lg:hidden">
          <div className="flex items-center gap-2">
            <Menu className="w-5 h-5 text-amber-500" />
            <span className="font-fira-sans font-bold text-lg text-gray-900">
              {t("catalog", "Каталог")}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black cursor-pointer rounded-full bg-white shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Column 1: Categories */}
          <div>
            <h3 className="font-fira-sans font-bold text-lg text-black mb-4">
              {t("categories", "Категории")}
            </h3>
            <ul className="space-y-2.5">
              {categories.map((c, i) => (
                <li key={i}>
                  <NavLink
                    to={c.to}
                    onClick={onClose}
                    className="font-fira-sans text-sm sm:text-base text-gray-800 hover:text-[#FEC80B] transition-colors block py-0.5"
                  >
                    {c.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: About us */}
          <div>
            <h3 className="font-fira-sans font-bold text-lg text-black mb-4">
              {t("aboutUs", "О нас")}
            </h3>
            <ul className="space-y-2.5">
              {aboutLinks.map((a, i) => (
                <li key={i}>
                  <NavLink
                    to={a.to}
                    onClick={onClose}
                    className="font-fira-sans text-sm sm:text-base text-gray-800 hover:text-[#FEC80B] transition-colors block py-0.5"
                  >
                    {a.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Media */}
          <div>
            <h3 className="font-fira-sans font-bold text-lg text-black mb-4">
              {t("media", "Медиа")}
            </h3>
            <ul className="space-y-2.5">
              {mediaLinks.map((m, i) => (
                <li key={i}>
                  <NavLink
                    to={m.to}
                    onClick={onClose}
                    className="font-fira-sans text-sm sm:text-base text-gray-800 hover:text-[#FEC80B] transition-colors block py-0.5"
                  >
                    {m.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Big Bold Navigation Links (Service, Repair, News, Contacts) */}
          <div>
            <ul className="space-y-4 pt-1">
              {directLinks.map((d, i) => (
                <li key={i}>
                  <NavLink
                    to={d.to}
                    onClick={onClose}
                    className="font-fira-sans text-2xl lg:text-[1.85rem] font-bold text-black hover:text-[#FEC80B] transition-colors block tracking-tight"
                  >
                    {d.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile contacts in mega menu */}
        <div className="mt-8 pt-6 border-t border-gray-300 lg:hidden space-y-2 text-sm font-fira-sans text-gray-600">
          <p>
            <span className="text-gray-500">{t("forRegions", "Для регионов:")}</span>{" "}
            <a href="tel:88005110525" className="text-black font-semibold">
              8 (800)-511-05-25
            </a>
          </p>
          <p>
            <span className="text-gray-500">{t("nizhnyNovgorod", "Нижний Новгород:")}</span>{" "}
            <a href="tel:88312250055" className="text-black font-semibold">
              8 (831) 225-00-55
            </a>
          </p>
          <p className="text-xs text-gray-400 pt-1">
            {t("address", "г. Нижний Новгород ул. Торфяная, 35")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const { cartCount, favoritesCount } = useCart();
  const [workingTime, setWorkingTime] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeTrigger, setActiveTrigger] = useState(null); // 'catalog' | 'about' | 'media' | 'service'
  const [isScrolled, setIsScrolled] = useState(false);

  const workingTimeRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside listener for working time and mega menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (workingTimeRef.current && !workingTimeRef.current.contains(e.target)) {
        setWorkingTime(false);
      }
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target)
      ) {
        setIsMegaMenuOpen(false);
        setActiveTrigger(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ESC key listener
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsMegaMenuOpen(false);
        setActiveTrigger(null);
        setWorkingTime(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  function openWorkingTimeDropdown() {
    setWorkingTime(!workingTime);
    setIsMegaMenuOpen(false);
    setActiveTrigger(null);
  }

  function handleMenuToggle(triggerName) {
    setWorkingTime(false);
    if (isMegaMenuOpen && activeTrigger === triggerName) {
      setIsMegaMenuOpen(false);
      setActiveTrigger(null);
    } else {
      setIsMegaMenuOpen(true);
      setActiveTrigger(triggerName);
    }
  }

  return (
    <header
      className={`z-100 transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-md" : "relative"
      }`}
    >
      {/* Top Header Bar */}
      <div
        className={`justify-around items-center border-b border-b-yellow-400 py-2 sm:py-2.5 relative z-40 bg-white ${
          isScrolled ? "hidden" : "flex"
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <NavLink
              to="/"
              onClick={() => {
                setIsMegaMenuOpen(false);
                setActiveTrigger(null);
              }}
              className="flex items-center gap-2 sm:gap-3 shrink-0"
            >
              <img
                src="/header-logo.svg"
                alt="РусТрак"
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline-block font-fira-sans text-black font-normal text-xs sm:text-sm relative before:content-[''] before:absolute before:top-2 before:left-0 before:z-10 before:w-0.5 before:h-5 before:bg-yellow-400 pl-4 sm:pl-5 whitespace-pre-line leading-tight">
                {t("headerSubtitle", "производство и продажа\nавтоспецтехники")}
              </span>
            </NavLink>

            <div className="flex items-center gap-6">
              {/* Working Hours Dropdown */}
              <div className="hidden lg:flex lg:flex-col relative" ref={workingTimeRef}>
                <button
                  type="button"
                  onClick={openWorkingTimeDropdown}
                  className="flex items-center gap-1 cursor-pointer text-left select-none"
                >
                  <span className="text-black font-normal font-fira-sans text-sm whitespace-nowrap">
                    {t("workingHours", "Время работы")}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-yellow-500 transition-transform duration-300 ${
                      workingTime ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {workingTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 lg:left-0 top-[calc(100%+8px)] shadow-2xl rounded-xl border border-gray-200 min-w-[220px] bg-white p-3.5 z-60 text-xs font-fira-sans space-y-1.5"
                    >
                      <p className="text-gray-900 font-medium">{t("monFri", "Пн-пт: с 8:00 до 18:00")}</p>
                      <p className="text-gray-500">{t("weekend", "Сб-вс: Выходной")}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="text-gray-400 font-fira-sans text-xs whitespace-nowrap">
                  {t("address", "г. Нижний Новгород ул. Торфяная, 35")}
                </p>
              </div>

              {/* Phone Contacts */}
              <div className="hidden lg:flex flex-col text-xs font-fira-sans whitespace-nowrap">
                <p className="text-gray-500">
                  {t("forRegions", "Для регионов:")}{" "}
                  <a href="tel:88005110525" className="text-black font-semibold hover:text-[#FEC80B]">
                    8 (800)-511-05-25
                  </a>
                </p>
                <p className="text-gray-500">
                  {t("nizhnyNovgorod", "Нижний Новгород:")}{" "}
                  <a href="tel:88312250055" className="text-black font-semibold hover:text-[#FEC80B]">
                    8 (831) 225-00-55
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav / Action Bar */}
      <section className="py-2.5 sm:py-3 relative z-30 bg-white" ref={menuContainerRef}>
        <div className="container">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Scrolled Burger + Logo + Nav */}
            <div className="flex items-center gap-2.5 sm:gap-4 xl:gap-6 min-w-0">
              {/* Catalog Burger Button */}
              <button
                type="button"
                onClick={() => handleMenuToggle("catalog")}
                className={`cursor-pointer flex items-center justify-center bg-[#FEC80B] hover:bg-[#ffd43a] transition duration-200 shadow-xs active:scale-95 shrink-0 ${
                  isScrolled
                    ? "w-10 h-10 sm:w-11 sm:h-11 rounded-lg p-2"
                    : "gap-2 px-3 sm:px-4 py-2 rounded-xl"
                }`}
                title={t("catalog", "Каталог")}
              >
                {isMegaMenuOpen && activeTrigger === "catalog" ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                )}
                {!isScrolled && (
                  <span className="font-fira-sans font-medium text-sm sm:text-base text-black whitespace-nowrap">
                    {t("catalog", "Каталог")}
                  </span>
                )}
              </button>

              {/* Scrolled Logo (Only when scrolled, placed immediately after Catalog button) */}
              {isScrolled && (
                <NavLink
                  to="/"
                  onClick={() => {
                    setIsMegaMenuOpen(false);
                    setActiveTrigger(null);
                  }}
                  className="shrink-0 flex items-center pr-1 sm:pr-2"
                >
                  <img
                    src="/header-logo.svg"
                    alt="РусТрак"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </NavLink>
              )}

              {/* Desktop Nav Links */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-4 xl:gap-7 font-fira-sans text-sm font-medium text-gray-800">
                  {/* About Us (О нас / Biz haqimizda) */}
                  <li>
                    <button
                      type="button"
                      onClick={() => handleMenuToggle("about")}
                      className={`flex items-center gap-1 cursor-pointer transition-colors py-1 select-none whitespace-nowrap ${
                        isMegaMenuOpen && activeTrigger === "about"
                          ? "text-amber-500 font-bold"
                          : "hover:text-amber-500"
                      }`}
                    >
                      <span className="whitespace-nowrap">{t("aboutUs", "О нас")}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${
                          isMegaMenuOpen && activeTrigger === "about" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </li>

                  {/* Media (Медиа / Media) */}
                  <li>
                    <button
                      type="button"
                      onClick={() => handleMenuToggle("media")}
                      className={`flex items-center gap-1 cursor-pointer transition-colors py-1 select-none whitespace-nowrap ${
                        isMegaMenuOpen && activeTrigger === "media"
                          ? "text-amber-500 font-bold"
                          : "hover:text-amber-500"
                      }`}
                    >
                      <span className="whitespace-nowrap">{t("media", "Медиа")}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${
                          isMegaMenuOpen && activeTrigger === "media" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </li>

                  {/* Service (Сервис / Xizmat ko'rsatish) */}
                  <li>
                    <button
                      type="button"
                      onClick={() => handleMenuToggle("service")}
                      className={`flex items-center gap-1 cursor-pointer transition-colors py-1 select-none whitespace-nowrap ${
                        isMegaMenuOpen && activeTrigger === "service"
                          ? "text-amber-500 font-bold"
                          : "hover:text-amber-500"
                      }`}
                    >
                      <span className="whitespace-nowrap">{t("service", "Сервис")}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${
                          isMegaMenuOpen && activeTrigger === "service" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </li>

                  <li>
                    <NavLink
                      to="/remont"
                      onClick={() => {
                        setIsMegaMenuOpen(false);
                        setActiveTrigger(null);
                      }}
                      className="hover:text-amber-500 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t("repair", "Ремонт")}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      onClick={() => {
                        setIsMegaMenuOpen(false);
                        setActiveTrigger(null);
                      }}
                      className="hover:text-amber-500 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t("contacts", "Контакты")}
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right: Search, Cart, Favorites, Call, Language */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Desktop Search Bar */}
              <div className="hidden lg:block">
                <SearchBox mode="desktop" />
              </div>

              {/* Mobile Search Icon */}
              <button
                type="button"
                onClick={() => setIsMobileSearchOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                title={t("search", "Поиск")}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Button */}
              <NavLink
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-[#FEC80B] transition-colors flex items-center justify-center cursor-pointer"
                title={t("cart", "Корзина")}
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FEC80B] text-black font-fira-sans font-bold text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </NavLink>

              {/* Favorites Button */}
              <NavLink
                to="/favorites"
                className="relative p-2 text-gray-700 hover:text-red-500 transition-colors flex items-center justify-center cursor-pointer"
                title={t("favorites", "Избранное")}
              >
                <Heart
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                    favoritesCount > 0 ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white font-fira-sans font-bold text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-xs">
                    {favoritesCount}
                  </span>
                )}
              </NavLink>

              {/* Call Order Button */}
              <button
                type="button"
                onClick={() => setIsPhoneModalOpen(true)}
                className="bg-[#FEC80B] hover:bg-[#ffd43a] rounded-full p-2 text-black cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-xs"
                title={t("orderCall", "Заказать звонок")}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Full-width 4-Column MegaMenu Dropdown (Matches user's screenshot) */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <MegaMenuDropdown
              activeTrigger={activeTrigger}
              onClose={() => {
                setIsMegaMenuOpen(false);
                setActiveTrigger(null);
              }}
            />
          )}
        </AnimatePresence>
      </section>

      {/* Mobile Search Overlay Drawer */}
      <SearchBox
        mode="mobile"
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />

      {/* Call Order Modal */}
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
      />
    </header>
  );
}
export default Header;
