import { Header } from "../components/Header";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Vacancies = () => {
  const [vacancieDrop, setVacancieDrop] = useState(false);

  function openVacancie() {
    setVacancieDrop(!vacancieDrop);
  }
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

          <h2 className="font-fira-sans text-3xl font-medium mt-3 mb-8">Вакансии</h2>

          <div className="border border-gray-200  rounded-2xl hover:border-[#fec80b] transition duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <button
                onClick={openVacancie}
                className={`flex justify-between! w-full px-5 py-5 rounded-2xl   items-center cursor-pointer ${vacancieDrop ? "bg-[#fec80b]" : ""}`}
              >
                <p className="font-fira-sans text-2xl font-medium">
                  Автоэлектрик
                </p>
                <ChevronDown
                  className={`${vacancieDrop ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {vacancieDrop && (
              <div className="pl-10">
                <div className="group-1 mt-7">
                  <h3 className="font-fira-sans text-lg font-medium mb-2">
                    Обязанности:
                  </h3>
                  <ul>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      электромонтаж осветительного оборудования
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      монтаж электрооборудования и надстроек на спецавтомобили
                    </li>
                  </ul>
                </div>
                <div className="group-2 mt-5">
                  <h3 className="font-fira-sans text-lg font-medium mb-2">
                    Требования:
                  </h3>

                  <ul>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      опыт работы приветствуется
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      желание обучаться новому
                    </li>
                  </ul>
                </div>
                <div className="group-3 mt-5">
                  <h3 className="font-fira-sans text-lg font-medium mb-2">
                    Условия:
                  </h3>
                  <ul>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      желание обучаться новому
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      полный соцпакет
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      отапливаемый цех, хорошие бытовые условия
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      предоставляем обучение по данному направлению
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="bg-[#fec80b] mt-10 mb-10 rounded-sm px-8 py-3 ml-4 cursor-pointer hover:bg-[#ffd43a] transition duration-200">
                    <p className="font-fira-sans text-base">Откликнуться</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Feedback />
      <Footer />
    </>
  );
};

export default Vacancies;
