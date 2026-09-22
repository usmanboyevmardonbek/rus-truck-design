import React from "react";
import { Header } from "../components/Header";

function Contact() {
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
              <a href="/">Контакты</a>
            </li>
          </ul>

          <h2 className="font-fira-sans text-3xl font-medium mt-3">
            Контакты производителя автоспецтехники РусТрак
          </h2>

          <div className="flex mt-8">
            <div className="bg-[#FEC80B] px-8 py-8">
              <p className="font-fira-sans">603035 г. Нижний Новгород,</p>
              <p className="font-fira-sans mb-11">ул. Торфяная, д. 35</p>

              <div>
                <p className="font-fira-sans font-bold text-lg">
                  Нижний Новгород:{" "}
                  <span className="font-normal">8 (831) 225-00-55</span>
                </p>
                <p className="font-fira-sans font-bold text-lg">
                  Для регионов:{" "}
                  <span className="font-normal">8 (800)-511-05-25</span>
                </p>
              </div>
              <p className="font-fira-sans font-bold text-lg mb-10">
                Электронная почта:
                <span className="font-normal">
                  <a href="#">info@rtrf.ru</a>
                </span>
              </p>

              <p className="font-fira-sans font-bold text-lg">
                Запись на техническое обслуживание:
              </p>

              <span className="font-fira-sans">
                <a href="tel:88312250055">8 (831) 225-00-55</a>
              </span>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
