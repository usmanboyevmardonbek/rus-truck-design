import React from "react";
import { Header } from "../components/Header";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Remont = () => {
  return (
    <div>
      <>
        <Header />

        <div className="remont">
          <div className="container">
            <ul className="flex items-center gap-2 ">
              <li className="font-fira-sans text-gray-500 text-sm">
                <a href="/">Главная</a>
              </li>
              <li className="text-gray-500">
                <span>/</span>
              </li>

              <li className="font-fira-sans text-gray-500 text-sm">
                <a href="/">Ремонт</a>
              </li>
            </ul>

            <div>
              <h1 className="font-fira-sans font-medium  lg:text-3xl  md:text-4xl mt-5 text-xl">
                Ремонт шторных полуприцепов от компании «Рустрак» в Нижнем
                Новгороде
              </h1>
              <p className="font-fira-sans text-lg mt-5">
                Логистическая сфера опирается на устойчивую работу прицепной
                техники. Ремонт шторных полуприцепов обеспечивает восстановление
                работоспособности конструкции после интенсивной эксплуатации.
                Наши мастера учитывают конструктивные особенности узлов и
                применяют проверенные методы обслуживания. Компания «Рустрак» в
                Нижнем Новгороде предлагает сервис, ориентированный на качество
                и долговечность оборудования. Своевременные технические
                мероприятия поддерживают стабильное состояние прицепов при
                интенсивных нагрузках. Надёжный подход к обслуживанию формирует
                уверенность в бесперебойной работе техники.
              </p>
            </div>

            <div className="gallery-items flex justify-center gap-5">
              <img
                src="/remont-1.jpg"
                alt="remont-1"
                className="w-120 mt-5 rounded-sm"
              />
              <img
                src="/remont-2-siniq.jpg"
                alt="remont-2"
                className="w-120 mt-5 rounded-sm"
              />
            </div>
            <div className="flex justify-center mt-10 mb-">
              <button className="bg-[#fec80b] rounded-sm cursor-pointer py-3 px-6">
                <p className="font-fira-sans font-medium uppercase">
                  Рассчитать стоимость ремонта
                </p>
              </button>
            </div>

            <div className="remont-desc">
              <h2 className="font-fira-sans font-medium text-2xl">
                Наши услуги
              </h2>
              <p className="font-fira-sans text-lg">
                Компания «Рустрак» выполняет полный ремонт полуприцепов в Нижнем
                Новгороде после повреждений или выхода из строя. Мы
                восстанавливаем конструкцию прицепа, исправляем каркас и боковые
                тенты, ремонтируем двери, замки и механизмы открывания, а также
                восстанавливаем пол и борта прицепа. Все работы выполняются с
                высокой точностью и соблюдением стандартов качества, что
                гарантирует долговечность восстановленных элементов.
              </p>
              <p className="font-fira-sans text-lg mt-1">
                <span className="font-fira-sans font-bold text-xl">Важно:</span>{" "}
                ремонт ходовой, двигателя, замена масел и плановое техническое
                обслуживание не производятся.
              </p>
            </div>

            <div className="flex mt-8 gap-5  items-center">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/remont-2-siniq.jpg"
                    srcSet="/remont-2-siniq.jpg"
                    alt="Image one"
                    className="rounded-2xl w-full max-w-150"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/remont-1.jpg"
                    srcSet="/remont-1.jpg"
                    alt="Image two"
                    className="rounded-2xl w-full max-w-150 "
                  />
                }
              />

              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/remont-3-siniq.jpg"
                    srcSet="/remont-3-siniq.jpg"
                    alt="Image one"
                    className="rounded-2xl w-full max-w-150"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/remont-4.jpg"
                    srcSet="/remont-4.jpg"
                    alt="Image two"
                    className="rounded-2xl w-full max-w-150"
                  />
                }
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Remont;
