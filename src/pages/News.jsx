import React from "react";

import { Header } from "../components/Header";
import { newsData } from "./objects";
import { Swiper, SwiperSlide } from "swiper/react";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { MoveRight } from "lucide-react";

const News = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container">
          <ul className="flex items-center gap-2 ">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Новости</a>
            </li>
          </ul>

          <h2 className="font-fira-sans font-medium text-3xl mt-4 mb-11">
            Новости РусТрак
          </h2>

          <div className="lg:flex  gap-5 hidden">
            <div className="w-[80%]">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper news-swiper"
              >
                <SwiperSlide className="w-1/1!">
                  <img
                    src="swiper-news-1.webp"
                    alt="swiper-news-1"
                    className="h-100 rounded-2xl w-150!"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-1/1!">
                  <img
                    src="swiper-news-2.jpg"
                    alt="swiper-news-2"
                    className="h-100 rounded-xl w-150!"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-1/1! object-cover">
                  <img
                    src="swiper-news-3.jpg"
                    alt="swiper-news-3"
                    className="h-100 rounded-xl w-150!"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-1/1! object-cover">
                  <img
                    src="swiper-news-4.jpg"
                    alt="swiper-news-4"
                    className="h-100 rounded-xl w-150!"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-1/1! object-cover">
                  <img
                    src="swiper-news-5.jpg"
                    alt="swiper-news-5"
                    className="h-100 rounded-xl w-150!"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-1/1! object-cover">
                  <img
                    src="swiper-news-6.jpg"
                    alt="swiper-news-6"
                    className="h-100 rounded-xl w-150!"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="ml-5 mt-2">
              <p className="font-fira-sans text-xl mb-2">07.07.2026</p>

              <a href="#">
                <p className="font-fira-sans text-2xl font-medium mb-48">
                  Первый в России контейнеровоз на шасси КАМАЗ‑65658 выпустил
                  «Рустрак»
                </p>
              </a>

              <a href="#" className="flex gap-3 items-center group">
                <p className="font-fira-sans text-[#a2a2a2] text-lg group-hover:text-[#ffd43a] group-hover:transition duration-200 ease-in">
                  Подробнее
                </p>
                <MoveRight className="text-[#a2a2a2] group-hover:text-[#ffd43a] group-transition duration-200 ease-in:" />
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 mt-15 gap-6 mb-20 grid-cols-2">
            {newsData.map((newsThings) => (
              <div key={newsThings.id}>
                <a href="#" className="group">
                  <img src={newsThings.newsImage} alt="news-image" className="w-140 h-70 max-w-full rounded-xl"/>
                  <div className="ml-1 mt-2 mb-5">
                    <p className="font-fira-sans text-lg">{newsThings.newsDate}</p>
                    <p className="font-fira-sans line-clamp-2 font-medium text-lg">{newsThings.newsDesc}</p>
                  </div>

                  <span className="flex items-center gap-2 ml-1">
                    <p className="font-fira-sans text-[#a2a2a2] text-lg group-hover:text-[#ffd43a] group-hover:transition duration-200 ease-in">
                      Подробнее
                    </p>
                    <MoveRight className="text-[#a2a2a2] group-hover:text-[#ffd43a] group-transition duration-200 ease-in" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <Feedback/>
        <Footer/>
      </div>
    </>
  );
};

export default News;
