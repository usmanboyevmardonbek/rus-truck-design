import { ChevronDown } from "lucide-react";
import { useState } from "react";

const aboutLinks = [
  "О компании ООО «Рустрак»",
  "Новости",
  "Наши партнёры",
  "Производство",
  "Поставщикам и партнёрам",
  "Отзывы",
  "Сертификаты",
  "Вакансии",
  "Кредит и лизинг",
  "Сервис",
  "Ремонт",
  "Контакты",
  "Полезные статьи",
];

const mediaLinks = ["Фотогалерея", "Видео", "Рекламные материалы"];

const Footer = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  const toggleSection = (section) => {
    if (section === "about") {
      setOpenAbout(!openAbout);
    } else {
      setOpenMedia(!openMedia);
    }
  };

  const renderLinks = (links) =>
    links.map((link) => (
      <li key={link}>
        <a
          href="#"
          className="font-fira-sans text-lg text-white transition-colors hover:text-[#FEC80B]"
        >
          {link}
        </a>
      </li>
    ));

  const accordionClass = (section) => {
    if (section === "about") {
      return (
        "grid transition-[grid-template-rows] duration-300 " +
        (openAbout ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
      );
    } else {
      return (
        "grid transition-[grid-template-rows] duration-300 " +
        (openMedia ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
      );
    }
  };

  const iconClass = (section) => {
    if (section === "about") {
      return (
        "text-white transition-transform duration-300 " +
        (openAbout ? "rotate-180" : "")
      );
    } else {
      return (
        "text-white transition-transform duration-300 " +
        (openMedia ? "rotate-180" : "")
      );
    }
  };

  return (
    <footer className="bg-black py-12">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.15fr_2fr] md:gap-12">
          <div className="flex flex-col">
            <p className="font-fira-sans text-xl font-medium text-amber-50">
              Тел/факс: <a href="tel:88312250055">8 (831) 225-00-55</a>
            </p>
            <p className="mt-1 font-fira-sans text-xl font-medium text-amber-50">
              Email: <a href="mailto:info@rtrf.ru">info@rtrf.ru</a>
            </p>
            <p className="mt-1 font-fira-sans text-xl font-medium text-amber-50">
              г. Нижний Новгород ул. Торфяная, 35
            </p>
            <div>
              <button className="mt-2 cursor-pointer rounded-xl bg-[#FEC80B] px-8 py-3 transition duration-300 hover:bg-[#ffd43a]">
                <span className="font-fira-sans text-xl font-normal">
                  Заказать звонок
                </span>
              </button>
            </div>
            <img src="/s.svg" alt="" className="mt-10 w-45" />
          </div>

          <nav aria-label="Footer navigation" className="w-full">
            <div className="footer-mobile-menu mt-8 md:hidden">
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection("about")}
                  className="flex items-center gap-4 py-3 text-left"
                >
                  <span className="font-fira-sans text-xl font-medium text-amber-50">
                    О нас
                  </span>
                  <ChevronDown
                    className={iconClass("about") + " h-6 w-6 text-gray-400"}
                  />
                </button>
                <div className={accordionClass("about")}>
                  <ul className="min-h-0 overflow-hidden">
                    {renderLinks(aboutLinks)}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleSection("media")}
                  className="flex items-center gap-4 py-3 text-left"
                >
                  <span className="font-fira-sans text-xl font-medium text-amber-50">
                    Медиа
                  </span>
                  <ChevronDown
                    className={iconClass("media") + " h-6 w-6 text-gray-400"}
                  />
                </button>
                <div className={accordionClass("media")}>
                  <ul className="min-h-0 overflow-hidden">
                    {renderLinks(mediaLinks)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-desktop-menu hidden md:grid md:grid-cols-[2fr_1fr] items-centerz md:gap-10">
              <section>
                <h2 className="mb-8 font-fira-sans text-xl font-medium text-amber-50">
                  О нас
                </h2>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {renderLinks(aboutLinks)}
                </ul>
              </section>
              <section>
                <h2 className="mb-8 font-fira-sans text-xl font-medium text-amber-50">
                  Медиа
                </h2>
                <ul className="space-y-3">{renderLinks(mediaLinks)}</ul>
              </section>
            </div>
          </nav>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
          <div>
            <p className="font-fira-sans text-white">
              2009 - 2026 © Rus - Trucks
            </p>
            <p className="mt-2 font-fira-sans text-white">
              Информация на сайте не является публичной офертой, определяемой
              согласно статье 435 Гражданского кодекса РФ и носит исключительно
              информационный характер.
            </p>
          </div>
          <ul className="flex items-center gap-3">
            {[
              ["/max.svg", "max"],
              ["/telegram.svg", "telegram"],
              ["/vk.svg", "vk"],
              ["/rutube.png", "rutube"],
              ["/youtube.png", "youtube"],
              ["/yandex.png", "yandex"],
            ].map(([src, alt]) => (
              <li key={alt}>
                <a href="#">
                  <img src={src} alt={alt} className="w-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
