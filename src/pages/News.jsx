import React from "react";

import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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

          <h2 className="font-fira-sans font-medium text-3xl mt-4">
            Новости РусТрак
          </h2>

          
        </div>
      </div>
    </>
  );
};

export default News;
