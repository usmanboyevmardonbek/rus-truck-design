import React from "react";
import { Header } from "../components/Header";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

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

            <div className="gallery-items flex justify-center flex-col lg:flex-row gap-5">
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

            <div className="flex flex-col lg:flex-row mt-8 gap-5  items-center justify-center">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/remont-2-siniq.jpg"
                    srcSet="/remont-2-siniq.jpg"
                    alt="Image one"
                    className="rounded-sm w-full! h-100! max-w-150!"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/remont-1.jpg"
                    srcSet="/remont-1.jpg"
                    alt="Image two"
                    className="rounded-sm w-full! h-100! max-w-150!"
                  />
                }
              />

              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/remont-3-siniq.jpg"
                    srcSet="/remont-3-siniq.jpg"
                    alt="Image one"
                    className="rounded-sm w-full! h-100! max-w-150!"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/remont-4.jpg"
                    srcSet="/remont-4.jpg"
                    alt="Image two"
                    className="rounded-sm w-full! h-100! max-w-150!"
                  />
                }
              />
            </div>
            <div className="slider-row">
              <h2 className="font-bold font-fira-sans text-2xl mt-10">
                Преимущества компании «Рустрак»
              </h2>
              <ul>
                <li className="flex items-center gap-2 mt-2">
                  <span className="sliders-items"></span>
                  <p className="font-fira-sans text-lg">
                    Вместительные цеха – обеспечивают удобство работы с
                    крупногабаритными полуприцепами и комфорт для сотрудников.
                  </p>
                </li>
                <li className="flex items-center gap-2 mt-2">
                  <span className="sliders-items"></span>
                  <p className="font-fira-sans text-lg">
                    Профессиональные мастера – специалисты с опытом и знаниями
                    гарантируют качественный и точный ремонт.
                  </p>
                </li>

                <li className="flex items-center gap-2 mt-2">
                  <span className="sliders-items"></span>
                  <p className="font-fira-sans text-lg">
                    Полный цикл производства – все работы выполняются на месте,
                    от диагностики до финальной сборки, без привлечения
                    сторонних подрядчиков.
                  </p>
                </li>

                <li className="flex items-center gap-2 mt-2">
                  <span className="sliders-items"></span>
                  <p className="font-fira-sans text-lg">
                    Опыт 17 лет – долгий срок работы на рынке подтверждает
                    надёжность и компетентность компании.
                  </p>
                </li>
                <li className="flex items-center gap-2 mt-2">
                  <span className="sliders-items"></span>
                  <p className="font-fira-sans text-lg">
                    Гарантия на ремонт – обеспечивает уверенность в
                    долговечности и качестве выполненных работ.
                  </p>
                </li>
              </ul>
              <img src="/proiz-1.jpg" alt="proiz-1" className="w-full mb-5" />

              <div className="flex">
                <img src="/proiz-2.png" alt="proiz-2" className="w-1/3" />
                <img src="/proiz-3.jpg" alt="proiz-3" className="w-1/3" />
                <img src="/proiz-4.png" alt="proiz-4" className="w-1/3" />
              </div>
              <div className="flex justify-center mt-10 mb-">
                <button className="bg-[#fec80b] rounded-sm cursor-pointer py-3 px-6">
                  <p className="font-fira-sans font-medium uppercase">
                    Рассчитать стоимость ремонта
                  </p>
                </button>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-bold font-fira-sans">Качественный сервис для полуприцепов</h2>
                <p className="font-fira-sans text-lg mt-3 mb-10">
                  Ремонт шторных полуприцепов помогает продлить срок службы
                  техники и сохранить её функциональность. Обратитесь к нашей
                  команде, чтобы получить надежное и аккуратное обслуживание.
                  Компания «Рустрак» в Нижнем Новгороде выполняет работы с
                  вниманием к деталям и строгими стандартами качества. Доверьте
                  нам технические задачи и получите результат, который оправдает
                  ожидания. Запланируйте обслуживание заранее и убедитесь в
                  удобстве нашего сервиса. Для начала сотрудничества свяжитесь с
                  нами любым удобным способом, и мы поможем организовать все
                  быстро и профессионально.
                </p>
              </div>
            </div>

            
          </div>
          <Feedback/>
          <Footer/>
        </div>
      </>
    </div>
  );
};

export default Remont;
