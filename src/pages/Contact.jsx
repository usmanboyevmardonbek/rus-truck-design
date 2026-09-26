import React from "react";
import { Header } from "../components/Header";
import { contactData } from "./objects";
import Feedback from "../components/feedback";
import Footer from "../components/footer";

function Contact() {
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
              <a href="/">Контакты</a>
            </li>
          </ul>

          <h2 className="font-fira-sans text-3xl font-medium mt-3">
            Контакты производителя автоспецтехники РусТрак
          </h2>

          <div className="flex mt-8 flex-col lg:flex-row">
            <div className="bg-[#FEC80B] px-8 py-8 md:w-200">
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

            <div style={{ position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
                width="800"
                height="400"
                frameBorder="1"
                allowFullScreen="true"
                style={{ position: "relative;" }}
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="font-fira-sans font-medium text-3xl mt-6">
              Сотрудники
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 items-center gap-8 mb-5 grid-cols-1">
            {contactData.map((contactItems) => (
              <div key={contactItems.id} className="mt-10 border-2 border-gray-200 rounded-xl">
                <img
                  src={contactItems.userImage}
                  alt="userImage"
                  className="object-cover  rounded-full w-full"
                />

                <div className="text-center">
                  <h3 className="font-fira-sans font-medium text-2xl">
                    {contactItems.userName}
                  </h3>
                  <p className="line-clamp-1 font-fira-sans text-[#a2a2a2] mb-8">
                    {contactItems.userJob}
                  </p>
                  <p className="font-fira-sans">{contactItems.userNumber}</p>
                  <p className="font-fira-sans cursor-pointer pb-5">
                    <a href="#">{contactItems.userEmail}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
          <Feedback/>
          <Footer/>

      </div>
    </>
  );
}

export default Contact;
