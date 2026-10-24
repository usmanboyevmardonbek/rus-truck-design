import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { PhoneModal } from "../components/PhoneModal";

const catalogLinks = [
  { key: "cat_shtornye", defaultTitle: "Шторные автомобили", path: "/catalog/shtornye-avtomobili" },
  { key: "cat_krany", defaultTitle: "Краны-манипуляторы", path: "/catalog/krany-manipulator" },
  { key: "cat_zapravka", defaultTitle: "Автотопливозаправщики", path: "/catalog/zapravka" },
  { key: "cat_sisterna", defaultTitle: "Автоцистерны", path: "/catalog/sisterna" },
  { key: "cat_evakuator", defaultTitle: "Автоэвакуаторы", path: "/catalog/evakuator" },
  { key: "cat_bortovye", defaultTitle: "Бортовые автомобили", path: "/catalog/bortovye-avtomobili" },
  { key: "cat_avtofurgony", defaultTitle: "Изотермические фургоны", path: "/catalog/avtofurgony" },
  { key: "cat_konteynerovozy", defaultTitle: "Контейнеровозы", path: "/catalog/konteynerovozy" },
  { key: "cat_samosvaly", defaultTitle: "Самосвалы", path: "/catalog/samosvaly" },
  { key: "cat_dopog", defaultTitle: "Автомобили ДОПОГ EXII", path: "/catalog/avtomobili-dopog" },
  { key: "cat_gidropod", defaultTitle: "Автогидроподъёмники", path: "/catalog/gidropod" },
  { key: "allCategories", defaultTitle: "Все категории", path: "/catalog" },
];

const aboutLinks = [
  { key: "about_company", defaultTitle: "О компании ООО «Рустрак»", path: "/about" },
  { key: "news", defaultTitle: "Новости", path: "/news" },
  { key: "partners", defaultTitle: "Наши партнёры", path: "/partners" },
  { key: "production", defaultTitle: "Производство", path: "/production" },
  { key: "suppliers", defaultTitle: "Поставщикам и партнёрам", path: "/suppliers" },
  { key: "reviews", defaultTitle: "Отзывы", path: "/review" },
  { key: "certificates", defaultTitle: "Сертификаты", path: "/cert" },
  { key: "vacancies", defaultTitle: "Вакансии", path: "/vacancies" },
  { key: "leasing", defaultTitle: "Кредит и лизинг", path: "/leasing" },
  { key: "service", defaultTitle: "Сервис", path: "/service" },
  { key: "repair", defaultTitle: "Ремонт", path: "/remont" },
  { key: "contacts", defaultTitle: "Контакты", path: "/contact" },
];

const mediaLinks = [
  { key: "photogallery", defaultTitle: "Фотогалерея", path: "/photogallery" },
  { key: "video", defaultTitle: "Видео", path: "/video" },
  { key: "promo", defaultTitle: "Рекламные материалы", path: "/promo" },
];

const Footer = () => {
  const { t } = useLanguage();
  const [openCatalog, setOpenCatalog] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const toggleSection = (section) => {
    if (section === "catalog") setOpenCatalog(!openCatalog);
    else if (section === "about") setOpenAbout(!openAbout);
    else setOpenMedia(!openMedia);
  };

  const renderLinksList = (links) => (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.path + link.key}>
          <Link
            to={link.path}
            className="font-fira-sans text-sm text-gray-300 transition-colors hover:text-[#FEC80B] block"
          >
            {t(link.key, link.defaultTitle)}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <footer className="bg-black py-12 text-white">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_2.4fr] md:gap-10">
            {/* Left Contact Column */}
            <div className="flex flex-col">
              <p className="font-fira-sans text-xl font-medium text-amber-50">
                {t("forRegions", "Тел/факс:")} <a href="tel:88312250055" className="hover:text-[#FEC80B] transition-colors">8 (831) 225-00-55</a>
              </p>
              <p className="mt-1 font-fira-sans text-xl font-medium text-amber-50">
                Email: <a href="mailto:info@rtrf.ru" className="hover:text-[#FEC80B] transition-colors">info@rtrf.ru</a>
              </p>
              <p className="mt-1 font-fira-sans text-base font-normal text-gray-300">
                {t("address", "г. Нижний Новгород ул. Торфяная, 35")}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setIsPhoneModalOpen(true)}
                  className="mt-4 cursor-pointer rounded-xl bg-[#FEC80B] px-8 py-3 text-black transition duration-300 hover:bg-[#ffd43a] font-fira-sans text-lg font-medium"
                >
                  {t("orderCall", "Заказать звонок")}
                </button>
              </div>
              <img src="/footer-uchun.svg" alt="logo" className="mt-8 w-44 opacity-80" />
            </div>

            {/* Navigation Columns */}
            <nav aria-label="Footer navigation" className="w-full">
              {/* Mobile Accordion */}
              <div className="footer-mobile-menu md:hidden space-y-3">
                {/* Catalog Accordion */}
                <div className="border-b border-neutral-800 pb-3">
                  <button
                    type="button"
                    onClick={() => toggleSection("catalog")}
                    className="flex w-full items-center justify-between py-2 text-left"
                  >
                    <span className="font-fira-sans text-lg font-medium text-amber-50">
                      {t("catalog", "Каталог")}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        openCatalog ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      openCatalog ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden pt-2 pl-2">
                      {renderLinksList(catalogLinks)}
                    </div>
                  </div>
                </div>

                {/* About Accordion */}
                <div className="border-b border-neutral-800 pb-3">
                  <button
                    type="button"
                    onClick={() => toggleSection("about")}
                    className="flex w-full items-center justify-between py-2 text-left"
                  >
                    <span className="font-fira-sans text-lg font-medium text-amber-50">
                      {t("aboutUs", "О нас")}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        openAbout ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      openAbout ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden pt-2 pl-2">
                      {renderLinksList(aboutLinks)}
                    </div>
                  </div>
                </div>

                {/* Media Accordion */}
                <div className="border-b border-neutral-800 pb-3">
                  <button
                    type="button"
                    onClick={() => toggleSection("media")}
                    className="flex w-full items-center justify-between py-2 text-left"
                  >
                    <span className="font-fira-sans text-lg font-medium text-amber-50">
                      {t("media", "Медиа")}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        openMedia ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      openMedia ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden pt-2 pl-2">
                      {renderLinksList(mediaLinks)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop 3 Columns */}
              <div className="footer-desktop-menu hidden md:grid md:grid-cols-3 gap-8">
                {/* Column 1: Catalog */}
                <section>
                  <h2 className="mb-5 font-fira-sans text-lg font-semibold text-amber-50 border-b border-neutral-800 pb-2">
                    <Link to="/catalog" className="hover:text-[#FEC80B] transition-colors">
                      {t("catalog", "Каталог")}
                    </Link>
                  </h2>
                  {renderLinksList(catalogLinks)}
                </section>

                {/* Column 2: About */}
                <section>
                  <h2 className="mb-5 font-fira-sans text-lg font-semibold text-amber-50 border-b border-neutral-800 pb-2">
                    <Link to="/about" className="hover:text-[#FEC80B] transition-colors">
                      {t("aboutUs", "О нас")}
                    </Link>
                  </h2>
                  {renderLinksList(aboutLinks)}
                </section>

                {/* Column 3: Media */}
                <section>
                  <h2 className="mb-5 font-fira-sans text-lg font-semibold text-amber-50 border-b border-neutral-800 pb-2">
                    {t("media", "Медиа")}
                  </h2>
                  {renderLinksList(mediaLinks)}
                </section>
              </div>
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-neutral-800 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <p className="font-fira-sans text-sm text-gray-400">
                2009 - 2026 © Rus - Trucks.
              </p>
              <p className="mt-2 font-fira-sans text-xs text-gray-500 leading-relaxed">
                {t("footer_disclaimer", "Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.")}
              </p>
            </div>
            <ul className="flex items-center gap-4 md:justify-end">
              {[
                ["/telegram.svg", "telegram", "https://t.me/"],
                ["/vk.svg", "vk", "https://vk.com/"],
                ["/rutube.png", "rutube", "https://rutube.ru/"],
                ["/youtube.png", "youtube", "https://youtube.com/"],
                ["/yandex.png", "yandex", "https://dzen.ru/"],
              ].map(([src, alt, href]) => (
                <li key={alt}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-1 rounded-full hover:opacity-80 transition-opacity"
                  >
                    <img src={src} alt={alt} className="w-6 h-6 object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* Global Phone Modal */}
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
      />
    </>
  );
};

export default Footer;
