import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";
import { Header } from "../components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { aboutSlider } from "./objects";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const About = () => {
  return (
    <>
      <Header />
      <div>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">О нас</a>
            </li>
          </ul>
        </motion.div>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="about-section bg-[url(/about-company.jpg)] h-100 mt-5 relative">
          <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
            <div className="pt-18">
              <h2 className="max-w-177 font-fira-sans font-medium lg:text-2xl text-[#ffffff]">
                Автомобильный завод «РусТрак» - ведущий производитель
                коммерческого транспорта и специализированной техники в Нижнем
                Новгороде.
              </h2>
            </div>

            <div>
              <img
                src="/chevron-years.png"
                alt="chevron-years"
                className="w-30 bottom-0 absolute"
              />
            </div>
          </motion.div>

          <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}></motion.div>
        </motion.section>

        <div>
          <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
            <div className="flex mt-15 justify-between">
              <div>
                <h4 className="font-fira-sans lg:text-2xl max-w-170">
                  Автомобильный завод «РусТрак» является предприятием полного
                  цикла: от конструкторско-технологических разработок до
                  готового изделия.
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button className="about-swiper-button-prev lg:block md:block hidden border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer">
                  <ChevronLeft />
                </button>
                <button className="about-swiper-button-next md:block lg:block hidden border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer">
                  <ChevronRight />
                </button>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: ".about-swiper-button-prev",
                nextEl: ".about-swiper-button-next",
              }}
              loop={true}
              modules={[Navigation]}
              className="mySwiper about-swiper px-4! mt-10"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {aboutSlider.map((aboutData) => (
                <SwiperSlide key={aboutData.id}>
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="h-full">
                  <div className="border-2 border-gray-100 rounded-lg h-100 mb-10">
                    <div className="mb-10 ml-5 mr-5 ">
                      <img
                        src={aboutData.sliderImage}
                        alt="about-image-1"
                        className="mb-10 mt-10 ml-5"
                      />

                      <h3 className="font-fira-sans lg:text-2xl mb-3 font-medium mt-1">
                        {aboutData.sliderTitle}
                      </h3>

                      <p className="font-fira-sans  line-clamp-4">
                        {aboutData.sliderDesc}
                      </p>
                    </div>
                  </div>
                </motion.div>
</SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-30">
              <h2 className="font-fira-sans font-medium lg:text-3xl md:text-2xl">
                Сегодня ООО «Рустрак» - это:
              </h2>
              <div className="flex justify-between lg:flex-row flex-col md:flex-row md:gap-5 md:items-center">
                <div>
                  <ul>
                    <li className="flex items-center gap-4 mb-5 text-lg mt-15">
                      <img src="/ok-icon.svg" alt="ok" />
                      <p className="font-fira-sans">
                        3 производственных корпуса, общей площадью более 7000
                        м2;
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-5 text-lg">
                      <img src="/ok-icon.svg" alt="ok" />
                      <p className="font-fira-sans">
                        производственная территория более 20000 м2;
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-5 text-lg">
                      <img src="/ok-icon.svg" alt="ok" />
                      <p className="font-fira-sans">
                        служба качества, гарантирующая выпуск высококачественной
                        техники;
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-5 text-lg">
                      <img src="/ok-icon.svg" alt="ok" />
                      <p className="font-fira-sans">
                        современный парк станочного оборудования;
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-5 text-lg">
                      <img src="/ok-icon.svg" alt="ok" />
                      <p className="font-fira-sans">
                        ежемесячный объём выпускаемой техники - до 110 единиц.
                      </p>
                    </li>
                    <li className="flex items-center gap-4 mb-5 text-lg">
                      <img src="/ok-icon.svg" alt="ok" />
                      <p className="font-fira-sans">
                        наличие собственной конструкторско-технологической
                        службы
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <img src="/about-track.png" alt="about-track" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
            <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
              <div className="lg:grid lg:grid-cols-3 flex  flex-col    gap-6 mb-40 ">
                <div className="bg-[#fec80b] rounded-xl">
                  <h2 className="font-fira-sans text-2xl font-bold mt-15 ml-5">
                    Отрасли применения выпускаемой техники:
                  </h2>
                  <p className="ml-5 font-fira-sans text-lg mt-3">
                    Cтроительная, телекоммуникационная, коммунальная, дорожное
                    хозяйство, логистика, сельское хозяйство.
                  </p>

                  <h2 className="font-fira-sans font-bold text-2xl mt-15 ml-5">
                    Выпускаемая техника:
                  </h2>
                  <p className="ml-5 font-fira-sans text-lg mt-3 pb-10">
                    Краны-манипуляторы, автотопливозаправщики, автовышки,
                    фургоны, самосвалы, бортовые платформы, эвакуаторы, крюковые
                    погрузчики, мастерские, пищевые цистерны, вакуумные машины,
                    автогидроподъёмники.
                  </p>
                </div>

                <div className="flex gap-2 flex-col md:flex-row">
                  <img
                    src="/trucks-images-1.webp"
                    alt="trucks"
                    className="rounded-xl h-full"
                  />

                  <img
                    src="/trucks-images-2.webp"
                    alt="trucks"
                    className="rounded-xl h-full"
                  />
                </div>
              </div>

              <div>
                <p className="font-fira-sans lg:text-lg mb-10 max-w-220">
                  ООО «РусТрак» является официальным дилером на территории РФ
                  следующих марок: Palfinger, ИНМАН, HKTC, UNIC, DongYang,
                  FASSI, Hangil, XCMG, HIAB.
                </p>
                <p className="font-fira-sans lg:text-lg mb-10 max-w-220">
                  За 16 лет деятельности компания заслужила высокий уровень
                  доверия дистрибьютеров и автопроизводителей: ИСУЗУ РУС, КАМАЗ,
                  ГАЗ, DAEWOO, FAW, JAC, ТРАКС ВОСТОК РУС (КОМПАС), МАЗ РУС,
                  ДАЙМЛЕР КАМАЗ РУС (FUSO), ХИНО МОТОРС, FOTON, DONG FENG,
                  SHACHMAN, НЕФАЗ, ЗАВОД СТАРТ
                </p>
                <p className="font-fira-sans lg:text-lg mb-10 max-w-220">
                  Наши клиенты: Газпром, Росатом, Россети, РСК «МИГ», Роснефть и
                  др.
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      <Feedback />
      <Footer />
    </>
  );
};

export default About;
