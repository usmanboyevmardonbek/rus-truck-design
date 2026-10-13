import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import { Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { zapravkaSlider } from "../pages/objects";

import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-fira-sans font-medium mt-3 mb-3">
          Похожие товары
        </h2>
        <Swiper
          className="mySwiper similarSwiper"
          spaceBetween={15}
          slidesPerView={2}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },

            992: {
              slidesPerView: 4,
              spaceBetween: 15,
            },

            1280: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
        >
          {zapravkaSlider.map((krans) => (
            <SwiperSlide key={krans.id} className="rounded-xl ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className="h-full"
              >
                <img
                  src={krans.img}
                  alt="listImage"
                  className="rounded-sm md:w-full w-full"
                />
              </motion.div>

              <div className="bg-[#ffff] px-2 py-2 rounded-sm">
                <p className="font-fira-sans line-clamp-2">{krans.title}</p>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="bg-[#fec80b] hover:bg-[#ffd43a] transition duration-300 ease-in rounded-sm px-3 py-3"
                  >
                    <p className="font-fira-sans">Подробнее</p>
                  </a>
                  <button className="cursor-pointer">
                    <Heart />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
