import { Header } from "../components/Header";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";


const Production = () => {
  
  return (
    <>
      <Header />
      <div>
        <div className="container">
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Производство</a>
            </li>
          </ul>

          <h1 className="font-fira-sans text-3xl font-medium mt-5">
            Производство
          </h1>

          <div className="mt-7">
            <img src="/production-1.jpg" alt="production-rasmi" />
          </div>

          <div className="mt-9">
            <p className="font-fira-sans text-lg max-w-240 mb-15">
              Компания «РусТрак» — ведущий производитель коммерческого
              транспорта и специализированной техники в Нижнем Новгороде. Наша
              продукция - это автофургоны, бортовые платформы,
              краны-манипуляторы, мастерские, пищевые цистерны,
              автотопливозаправщики, автогидроподъёмники, самосвалы, выкуумные
              машины эвакуаторы, крюковые погрузчики. Все автомобили собираются
              на собственном производстве.
            </p>

            <img src="/production-2.jpg" alt="production-rasmi" />
          </div>

          <div className="mt-9">
            <p className="font-fira-sans text-lg max-w-240">
              Производственные мощности «РусТрак» состоят из 3 корпусов, общей
              площадью более 7000 квадратных метров. Станочный парк оснащён
              современным высокотехнологичным оборудованием, что определяет
              высокое качество готовой продукции. Компания использует
              комплектующие известных мировых и отечественных производителей.
              Сегодня производительность компании - от 110 единиц в месяц.
            </p>
          </div>

          <div>
            <h3 className="font-fira-sans text-2xl font-medium mt-15">
              Высококвалифицированный персонал
            </h3>
            <p className="font-fira-sans text-lg mt-5 max-w-220">
              Залог качества продукции ООО «РусТрак» - это работа команды
              профессионалов на технологичном оборудовании компании. Руководство
              компании заботится о своих сотрудниках, создавая максимально
              комфортные условия труда и повышая профессиональную подготовку
              сотрудников. Каждые полгода сотрудники компании проходят
              переаттестацию знаний и навыков и проходят курсы повышения
              квалификации.
            </p>
          </div>

          <Swiper
            className="mySwiper production-swiper mt-10 "
            spaceBetween={22}
            slidesPerView={4}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
          >
            <SwiperSlide>
              <img src="/production-swiper-1.jpg" alt="production-swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/production-swiper-2.jpg" alt="production-swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/production-swiper-3.jpg" alt="production-swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/production-swiper-4.jpg" alt="production-swiper" />
            </SwiperSlide>
          </Swiper>

          <div className="mt-12 ">
            <h3 className="font-fira-sans  text-2xl font-medium">
              Собственное конструкторское бюро
            </h3>
            <p className="font-fira-sans text-lg mt-5 mb-10 max-w-220">
              Компания «РусТрак» имеет собственное
              конструкторско-технологическое бюро, которое работает в тесном
              сотрудничестве с производством. Такая схема работы позволяет
              постоянно улучшать и модернизировать выпускаемую спецтехнику,
              учитывая пожелания наших клиентов. Мы готовы изготовить автомобиль
              практически для любых нужд!
            </p>
          </div>

          <div>
            <img src="/maydon.jpg" alt="maydon" />
          </div>

          <div>
            <h3 className="font-fira-sans text-2xl font-medium mt-10 mb-5">
              Контроль качества
            </h3>
            <p className="font-fira-sans text-lg max-w-220">
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

            <p className="font-fira-sans text-lg max-w-230 mt-20">
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
