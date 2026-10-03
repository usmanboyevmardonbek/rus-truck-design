import { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const productionSlides = [
  {
    id: 1,
    img: "/production-swiper-1.jpg",
    title: "Сборочный цех",
    desc: "Сборка специализированных фургонов",
  },
  {
    id: 2,
    img: "/production-swiper-2.jpg",
    title: "Контроль качества",
    desc: "Проверка систем и узлов",
  },
  {
    id: 3,
    img: "/production-swiper-3.jpg",
    title: "Технологическая линия",
    desc: "Современное станочное оборудование",
  },
  {
    id: 4,
    img: "/production-swiper-4.jpg",
    title: "Монтаж оборудования",
    desc: "Установка гидравлических систем",
  },
  {
    id: 5,
    img: "/production-swiper-1.jpg",
    title: "Подготовка шасси",
    desc: "Базовые шасси мировых брендов",
  },
  {
    id: 6,
    img: "/production-swiper-2.jpg",
    title: "Тестирование техники",
    desc: "Испытание готовой продукции",
  },
];

const Production = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    Fancybox.bind(container, "[data-fancybox]", {});

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="py-6">
        <div className="container">
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/" className="hover:text-black transition duration-200">
                Главная
              </a>
            </li>
            <li className="text-gray-400">
              <span>/</span>
            </li>
            <li className="font-fira-sans text-gray-800 text-sm font-medium">
              Производство
            </li>
          </ul>

          <h1 className="font-fira-sans text-2xl sm:text-3xl lg:text-4xl font-semibold mt-6 text-gray-900">
            Производство
          </h1>

          <div className="mt-6 overflow-hidden rounded-xl shadow-sm border border-gray-100">
            <img
              src="/production-1.jpg"
              alt="production-rasmi"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-8">
            <p className="font-fira-sans text-base sm:text-lg leading-relaxed max-w-4xl mb-8 text-gray-700">
              Компания «РусТрак» — ведущий производитель коммерческого
              транспорта и специализированной техники в Нижнем Новгороде. Наша
              продукция - это автофургоны, бортовые платформы,
              краны-манипуляторы, мастерские, пищевые цистерны,
              автотопливозаправщики, автогидроподъёмники, самосвалы, вакуумные
              машины, эвакуаторы, крюковые погрузчики. Все автомобили собираются
              на собственном производстве.
            </p>

            <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100">
              <img
                src="/production-2.jpg"
                alt="production-rasmi"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="font-fira-sans text-base sm:text-lg leading-relaxed max-w-4xl text-gray-700">
              Производственные мощности «РусТрак» состоят из 3 корпусов общей
              площадью более 7000 квадратных метров. Станочный парк оснащён
              современным высокотехнологичным оборудованием, что определяет
              высокое качество готовой продукции. Компания использует
              комплектующие известных мировых и отечественных производителей.
              Сегодня производительность компании - от 110 единиц в месяц.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="mt-14" ref={containerRef}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-fira-sans text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
                  Высококвалифицированный персонал
                </h3>
                <p className="font-fira-sans text-base sm:text-lg text-gray-600 mt-3 max-w-3xl leading-relaxed">
                  Залог качества продукции ООО «РусТрак» - это работа команды
                  профессионалов на технологичном оборудовании компании.
                  Руководство компании заботится о своих сотрудниках, создавая
                  максимально комфортные условия труда и повышая
                  профессиональную подготовку специалистов.
                </p>
              </div>

              {/* Swiper Navigation Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 pb-1">
                <button
                  className="production-swiper-button-prev w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-[#FEC80B] hover:border-[#FEC80B] transition-all duration-300 cursor-pointer shadow-xs active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  className="production-swiper-button-next w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-[#FEC80B] hover:border-[#FEC80B] transition-all duration-300 cursor-pointer shadow-xs active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            {/* Responsive Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".production-swiper-button-prev",
                nextEl: ".production-swiper-button-next",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              grabCursor={true}
              slidesPerView={1.2}
              spaceBetween={14}
              breakpoints={{
                480: {
                  slidesPerView: 1.6,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 22,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="mySwiper production-swiper mt-6"
            >
              {productionSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <a
                    data-fancybox="production-gallery"
                    href={slide.img}
                    data-caption={slide.title}
                    className="group block overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-4/3 bg-gray-100">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="text-white text-xs font-medium bg-[#FEC80B] text-black px-2.5 py-1 rounded w-fit mb-1">
                          РусТрак
                        </span>
                        <p className="text-white text-sm font-semibold">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h4 className="font-fira-sans font-medium text-gray-900 text-sm line-clamp-1 group-hover:text-black transition-colors">
                        {slide.title}
                      </h4>
                      <p className="font-fira-sans text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {slide.desc}
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-14">
            <h3 className="font-fira-sans text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
              Собственное конструкторское бюро
            </h3>
            <p className="font-fira-sans text-base sm:text-lg mt-4 mb-8 max-w-4xl text-gray-700 leading-relaxed">
              Компания «РусТрак» имеет собственное конструкторско-технологическое
              бюро, которое работает в тесном сотрудничестве с производством.
              Такая схема работы позволяет постоянно улучшать и модернизировать
              выпускаемую спецтехнику, учитывая пожелания наших клиентов. Мы
              готовы изготовить автомобиль практически для любых нужд!
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100">
            <img
              src="/maydon.jpg"
              alt="maydon"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-12">
            <h3 className="font-fira-sans text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Контроль качества
            </h3>
            <p className="font-fira-sans text-base sm:text-lg max-w-4xl text-gray-700 leading-relaxed">
              Контроль качества нашей продукции осуществляется на всех этапах
              производства. Мы используем только надёжные комплектующие, покупая
              их у проверенных поставщиков. Специалисты «РусТрак» строго следят
              за выполнением технологии производства. Постоянное тестирование и
              испытания выпускаемой продукции исключают поступление рекламаций.
              На производстве введена общемировая практика сертификации
              соответствия продукции: на каждую единицу спецтехники, которая
              сходит с нашего производства, имеется сертификат международного
              образца (ISO 9001).
            </p>

            <p className="font-fira-sans text-base sm:text-lg max-w-4xl mt-6 text-gray-700 leading-relaxed">
              Отдел контроля качества оценивает каждую единицу техники, что
              гарантирует нашим покупателям длительный срок эксплуатации и
              безотказную работу техники.
            </p>
          </div>
        </div>
      </div>

      <Feedback />
      <Footer />
    </>
  );
};

export default Production;
