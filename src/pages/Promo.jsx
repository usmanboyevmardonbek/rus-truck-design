import React from "react";
import { Header } from "../components/Header";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Promo = () => {
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
              <a href="/">Рекламные материалы</a>
            </li>
          </ul>

          <div>
            <h1 className="font-fira-sans text-3xl font-medium mt-6">
              Рекламные материалы
            </h1>
          </div>

          <div>
            <h3 className="font-fira-sans text-2xl font-medium  mt-7">
              OOO РУСТРАК
            </h3>
            <a href="/promo-1.pdf" target="_blank" className="underline">
              <p className="font-fira-sans text-lg mt-5">
                Завод-доработчик коммерческого транспорта
              </p>
            </a>
          </div>

          <div>
            <h3 className="font-fira-sans text-2xl font-medium mt-10">
              Автотопливозаправщики
            </h3>
            <a href="/promo-2.pdf" target="_blank" className="underline">
              <p className="font-fira-sans text-lg mt-5">Листовка ГАЗ NEXT</p>
            </a>
            <a href="/promo-3.pdf" target="_blank" className="underline">
              <p className="font-fira-sans text-lg">Листовка ГАЗ</p>
            </a>
            <a href="/promo-4.pdf" target="_blank" className="underline">
              <p className="font-fira-sans text-lg">Листовка FUSO</p>
            </a>
          </div>

          <div>
            <h3 className="font-fira-sans text-2xl font-medium mt-10">
              Пищевые цистерны
            </h3>

            <a href="/promo-5.pdf" target="_blank" className="underline">
              <p className="font-fira-sans text-lg mt-5">
                Листовка ГАЗ NEXT пищевая цистерна
              </p>
            </a>
            <a href="/promo-6.pdf" target="_blank" className="underline">
              <p className="font-fira-sans text-lg mb-10">
                Листовка FUSO пищевая цистерна
              </p>
            </a>
          </div>
        </div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Promo;
