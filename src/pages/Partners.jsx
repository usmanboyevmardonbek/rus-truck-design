import { useState } from "react";
import { Header } from "../components/Header";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Partners = () => {

     const [expand, setExpand] = useState(false)

     function matnExpand() {
        setExpand(!expand)
     }
  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div>
            <ul className="flex items-center gap-2">
              <li className="font-fira-sans text-gray-500 text-sm">
                <a href="/">Главная</a>
              </li>
              <li className="text-gray-500">
                <span>/</span>
              </li>

              <li className="font-fira-sans text-gray-500 text-sm">
                <a href="/">Партнёры</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-fira-sans text-3xl font-medium mt-5">
              Партнёры
            </h2>
          </div>
          <div>
            <h3 className="font-fira-sans text-2xl font-medium mt-6">КАМАЗ</h3>
            <p className={`font-fira-sans max-w-220 text-lg mt-6 h-27 overflow-y-hidden ${expand ? "h-auto" : ""}`}>
              Группа компаний «КАМАЗ» – крупнейшая автомобильная корпорация
              Российской Федерации. ПАО «КАМАЗ» входит в 20-ку ведущих мировых
              производителей тяжёлых грузовых автомобилей и находится на 16-м
              месте по объёмам производства тяжёлых грузовиков полной массой
              более 16 тонн. Группа организаций ПАО «КАМАЗ» объединяет 109
              компаний на территории России, СНГ и дальнего зарубежья. Единый
              производственный комплекс группы организаций ПАО «КАМАЗ»
              охватывает весь технологический цикл производства грузовых
              автомобилей – от разработки, изготовления, сборки автотехники и
              автокомпонентов до сбыта готовой продукции и сервисного
              сопровождения.
            </p>

            <button onClick={matnExpand}  className="opacity-50 font-fira-sans underline block mt-5 cursor-pointer">{!expand ? `Читать полностью` : "Свернуть"}</button>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              Группа ГАЗ
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              «Группа ГАЗ» специализируется на разработке и производстве легких
              и среднетоннажных коммерческих автомобилей, автобусов, тяжелых
              грузовиков, силовых агрегатов и автокомпонентов.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ООО "Тракс Восток Руc"
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              ООО «Тракс Восток Рус» является официальным дистрибьютором
              среднетоннажных грузовых автомобилей Компас 9 и Компас 12 с
              различными вариантами надстроек.
            </p>

            <a
              href="https://compasstrucks.ru/"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://compasstrucks.ru/
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              Публичное акционерное общество «НЕФАЗ».
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              Публичное акционерное общество "НЕФАЗ" входит в группу предприятий
              ПАО «КАМАЗ» и является крупнейшим в России заводом по производству
              спецнадстроек на шасси КАМАЗ.
            </p>

            <a
              href="https://nefaz.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://nefaz.ru
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ООО "Палфингер Кран Рус"
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              "Палфингер Кран Рус" - совместное предприятие концерна
              Palfinger(Австрия) и Группы Крафт Инвест (Россия) является
              эксклюзивным дистрибьютором Palfinger на территории Российский
              Федерации и стран СНГ
            </p>

            <a
              href="https://www.palfinger.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://www.palfinger.ru
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ООО «КМУ-РУС»
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              ООО «КМУ-РУС» реализует краны-манипуляторы, автовышки известных
              южнокорейских брендов.
            </p>

            <a
              href="https://kmu-rus.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://kmu-rus.ru
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ОАО "Завод Старт"
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              ОАО "Завод Старт" специализируется на производстве и реализации
              транспортных автоцистерн на широком ассортименте разновидностей
              шасси отечественного и зарубежного производства.
            </p>

            <a
              href="http://zavod-start.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              http://zavod-start.ru
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">МАЗ"</h3>
            <p className="font-fira-sans max-w-220 text-lg">
              Официальный дистрибьютор коммерческой техники МАЗ в России.
            </p>

            <a
              href="https://maz.by"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://maz.by
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              JAC Motors RUS
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              Компания JAC Motors RUS является эксклюзивным импортером и
              дистрибьютором продукции китайского автоконцерна JAC на территории
              России.
            </p>

            <a
              href="https://jaccar.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://jaccar.ru
            </a>
          </div>

          <div className="mt-16">
            <h3 className="font-fira-sans font-medium text-2xl">
              ДУНФЭН ТРАК РУС
            </h3>
            <p className="font-fira-sans mt-5">ДУНФЭН ТРАК РУС</p>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ООО «Фотон Мотор»
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              Компания ООО «Фотон Мотор» основана 27 апреля 2009 года в городе
              Москва, является представительством Пекинской машиностроительной
              компании Beiqi Foton Motor Co., Ltd.на территории РФ.
            </p>

            <a
              href="https://foton-motor.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://foton-motor.ru
            </a>
          </div>

          <div className="mt-20">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ООО «ФЕРРО ОТТИМО»
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              FASSI Эксклюзивный дистрибьютор в РФ ООО «ФЕРРО ОТТИМО»
            </p>

            <a
              href="https://fassi.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://fassi.ru
            </a>
          </div>

          <div className="mt-16">
            <h3 className="font-fira-sans font-medium text-2xl">FAW</h3>
            <p className="font-fira-sans mt-5">FAW</p>
          </div>

          <div className="mt-20 mb-15">
            <h3 className="font-fira-sans font-medium text-2xl mb-6">
              ООО «Шакман моторс»
            </h3>
            <p className="font-fira-sans max-w-220 text-lg">
              Официальный дистрибьютор грузовой техники Shacman в России.
            </p>

            <a
              href="https://shacman.ru"
              className="font-fira-sans underline opacity-50 block mt-5"
            >
              https://shacman.ru
            </a>
          </div>
        </div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Partners;
