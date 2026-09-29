import React from "react";
import { Header } from "../components/Header";
import { ChevronDown } from "lucide-react";

const Vacancies = () => {
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
              <a href="/">Вакансии</a>
            </li>
          </ul>

          <h2 className="font-fira-sans text-3xl font-medium mt-3">Вакансии</h2>


          <div className="border border-gray-200 px-3 py-3 rounded-2xl hover:border-[#fec80b] transition duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-fira-sans text-2xl font-medium">Автоэлектрик</h3>
                </div>
                <span>
                    <ChevronDown/>
                </span>
            </div>
          </div>

          <div className="group-1 mt-7">
            <h3 className="font-fira-sans text-lg font-medium mb-2">Обязанности:</h3>
            <ul>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">электромонтаж осветительного оборудования</li>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">монтаж электрооборудования и надстроек на спецавтомобили</li>
            </ul>
          </div>
          <div className="group-2 mt-5">
            <h3 className="font-fira-sans text-lg font-medium mb-2">Требования:</h3>

            <ul>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">опыт работы приветствуется</li>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">желание обучаться новому</li>
            </ul>
          </div>
          <div className="group-3 mt-5">
            <h3 className="font-fira-sans text-lg font-medium mb-2">Условия:</h3>
            <ul>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">желание обучаться новому</li>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">полный соцпакет</li>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">отапливаемый цех, хорошие бытовые условия</li>
                <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">предоставляем обучение по данному направлению</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
