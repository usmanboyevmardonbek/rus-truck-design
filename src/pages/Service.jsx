import React from "react";
import { Header } from "../components/Header";
import Feedback from "../components/feedback";
import Footer from "../components/footer";

const Service = () => {
  return (
    <>
      <Header />

      <div className="garantiy">
        <div className="container">
          <ul className="flex items-center gap-2 ">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Сервис и гарантии</a>
            </li>
          </ul>

          <div>
            <h1 className="font-fira-sans mt-5 font-medium text-4xl">
              Сервис по гарантийному ремонту автоспецтехники <br /> РусТрак
            </h1>

            <p className="font-fira-sans text-lg mt-5 max-w-200">
              После приобретения продукции в ООО «Рустрак» Вы всегда можете
              обратиться за помощью по любым вопросам, связанными с гарантийным
              обслуживанием, настройкой и ремонтом транспорного средства,
              поставкой дополнительного обурудования, а также внесением
              доработок под задачи клиента. Вы можете обратиться за технической
              поддержкой и консультацией по эксплуатации в любое время и в любой
              срок после заключения контракта.
            </p>
          </div>

          <div>
            <h3 className="font-fira-sans text-2xl font-medium mt-10">
              Как получить поддержку?
            </h3>

            <ul className="inline-block mr-5">
              <li className="flex gap-5 mt-10">
                <span className="text-lg font-bold bg-amber-300 w-8 h-8 rounded-2xl text-center">
                  1
                </span>
                <p className="font-fira-sans text-lg max-w-170">
                  <a href="/" className="underline cursor-pointer">
                    Заполнить Рекламационный акт
                  </a>
                  с внесением подписи ответственного лица и печати организации,
                  подробно описать характер отказа. Приложить фото: шильды в
                  пассажирской двери, шильды вышедшего из строя оборудования,
                  первая страница ПТС.
                </p>
              </li>
              <li className="flex gap-5 items-center mt-7">
                <span className="text-lg font-bold bg-amber-300 w-8 h-8 rounded-2xl text-center">
                  2
                </span>
                <p className="font-fira-sans text-lg max-w-170">
                  Сфотографировать неисправности, а также общий вид изделия в
                  целом.
                </p>
              </li>
              <li className="flex gap-5 items-center mt-12">
                <span className="text-lg font-bold bg-amber-300 w-8 h-8 rounded-2xl text-center">
                  3
                </span>
                <p className="font-fira-sans text-lg max-w-170">
                  Отправить заполненный акт, копию ПТС, фотографии
                  неисправностей по электронной почте: kb1@rtrf.ru
                </p>
              </li>
            </ul>
          </div>
          <div className="garantiya-bottom mt-15">
            <p className="font-fira-sans text-lg ">
              После этого специалисты гарантийной службы свяжутся с владельцем и
              предложат варианты <br /> организации ремонта.
            </p>
            <p className="font-fira-sans text-lg mt-10 mb-2">
              Любые вопросы относительно гарантийного обслуживания техники
              производства «РусТрак» можно задать по телефону 8 (831) 225-00-55
              (доб 610) или по электронной почте: kb1@rtrf.ru
            </p>
          </div>
          
        </div>
        <Feedback/>

        <Footer/>
      </div>
    </>
  );
};

export default Service;
