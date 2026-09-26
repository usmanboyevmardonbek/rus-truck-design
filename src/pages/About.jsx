import React from "react";
import { Header } from "../components/Header";

const About = () => {
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
              <a href="/">О нас</a>
            </li>
          </ul>
        </div>

        <section className="about-section bg-[url(/about-company.jpg)] h-100 mt-5 relative">
          <div className="container">
            <div className="pt-18">
              <h2 className="max-w-177 font-fira-sans font-medium text-2xl text-[#ffffff]">
              Автомобильный завод «РусТрак» - ведущий производитель
              коммерческого транспорта и специализированной техники в Нижнем
              Новгороде.
            </h2>
            </div>

            <div>
              <img src="/chevron-years.png" alt="chevron-years"  className="w-30 bottom-0 absolute"/>
            </div>
          </div>

          <div className="container"></div>
        </section>


        <div>
          <div className="container">
            <div className="flex">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
