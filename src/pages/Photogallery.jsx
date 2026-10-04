import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { Fancybox } from "@fancyapps/ui";
import { photoData } from "./objects";
import Footer from "../components/footer";
import Feedback from "../components/Feedback";

const proizvodstvaData = [
  { id: 101, fancyImg: "/proizpodstva/furgon-1.jpg" },
  { id: 102, fancyImg: "/proizpodstva/furgon-2.jpg" },
  { id: 103, fancyImg: "/proizpodstva/furgon-3.jpg" },
  { id: 104, fancyImg: "/proizpodstva/furgon-4.jpg" },
  { id: 105, fancyImg: "/proizpodstva/furgon-5.jpg" },
];

const oKompaniyaData = [
  { id: 201, fancyImg: "/o kompaniya/furgon-6.jpg" },
  { id: 202, fancyImg: "/o kompaniya/furgon-7.jpg" },
  { id: 203, fancyImg: "/o kompaniya/furgon-8.jpg" },
  { id: 204, fancyImg: "/o kompaniya/furgon-9.jpg" },
];

const vistavkaData = [
  { id: 301, fancyImg: "/vistavka/furgon-10.jpg" },
  { id: 302, fancyImg: "/vistavka/furgon-11.jpg" },
  { id: 303, fancyImg: "/vistavka/furgon-12.jpg" },
  { id: 304, fancyImg: "/vistavka/furgon-15.jpg" },
  { id: 305, fancyImg: "/vistavka/furgon-16.jpg" },
];

const categories = {
  cars: photoData,
  production: proizvodstvaData,
  about: oKompaniyaData,
  exhibitions: vistavkaData,
};

const Photogallery = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("cars");

  useEffect(() => {
    const container = containerRef.current;
    Fancybox.bind(container, "[data-fancybox]", {});

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, [activeTab]);

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
              <a href="/">Фотогалерея</a>
            </li>
          </ul>

          <div className="flex justify-between items-center mt-10">
            <h1 className="font-fira-sans text-3xl font-medium">
              Фотогалерея производителя автоспецтехники РусТрак
            </h1>
            <a
              href="/video/"
              className="border-2 border-[#fec80b] rounded-sm inline-block px-5 py-2 hover:bg-[#ffd43a] transition duration-300 ease-in"
            >
              <p className="font-fira-sans text-lg">Смотреть видео</p>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <button 
              onClick={() => setActiveTab("cars")}
              className={`border border-[#ebebeb] inline-block px-4 py-2 cursor-pointer transition duration-300 rounded-sm text-sm sm:text-base ${activeTab === "cars" ? "bg-[#FEC80B]" : "hover:bg-[#FEC80B]"}`}
            >
              <p className="font-fira-sans">Автомобили</p>
            </button>
            <button 
              onClick={() => setActiveTab("production")}
              className={`border border-[#ebebeb] inline-block px-4 py-2 cursor-pointer transition duration-300 rounded-sm text-sm sm:text-base ${activeTab === "production" ? "bg-[#FEC80B]" : "hover:bg-[#FEC80B]"}`}
            >
              <p className="font-fira-sans">Производство</p>
            </button>
            <button 
              onClick={() => setActiveTab("about")}
              className={`border border-[#ebebeb] inline-block px-4 py-2 cursor-pointer transition duration-300 rounded-sm text-sm sm:text-base ${activeTab === "about" ? "bg-[#FEC80B]" : "hover:bg-[#FEC80B]"}`}
            >
              <p className="font-fira-sans">О компании</p>
            </button>
            <button 
              onClick={() => setActiveTab("exhibitions")}
              className={`border border-[#ebebeb] inline-block px-4 py-2 cursor-pointer transition duration-300 rounded-sm text-sm sm:text-base ${activeTab === "exhibitions" ? "bg-[#FEC80B]" : "hover:bg-[#FEC80B]"}`}
            >
              <p className="font-fira-sans">Выставки</p>
            </button>
          </div>
          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5 mb-20">
            {categories[activeTab].map((photos) => (
              <a
                key={photos.id}
                data-fancybox="gallery"
                href={photos.fancyImg}
                className="block overflow-hidden rounded-sm group"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={photos.fancyImg}
                    alt="Gallery item"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Photogallery;
