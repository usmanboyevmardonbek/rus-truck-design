import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";
import { Header } from "../components/Header";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Suppliers = () => {
  return (
    <>
      <Header />

      <div>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Поставщикам и партнёрам</a>
            </li>
          </ul>

          <div>
            <h1 className="font-fira-sans text-3xl font-medium mt-5">
              Поставщикам и партнёрам
            </h1>
            <h3 className="font-fira-sans text-3xl font-medium mt-6 mb-6">
              ООО «Рустрак» приглашает к сотрудничеству.
            </h3>
          </div>

          <div>
            <p className="font-fira-sans text-lg mb-6">
              Наша компания 17 лет работает на рынке производства и продажи
              коммерческого транспорта и спецтехники и прочно занимает ведущие
              позиции на российском рынке.
            </p>
            <p className="font-fira-sans text-lg">
              Мы приглашаем к сотрудничеству поставщиков комплектующих, как одно
              из основных направлений развития компании.{" "}
            </p>
            <p className="font-fira-sans text-lg mb-10">
              Наша компания заинтересована в долгосрочном и эффективном
              сотрудничестве.{" "}
            </p>
            <p className="font-fira-sans text-lg">Мы ценим в партнёрах: </p>
          </div>

          <ul className="mt-6">
            <li className="flex mb-2 items-center gap-3">
              <span className="text-xl font-medium w-9 h-9 bg-[#FEC80B] flex items-center justify-center rounded-full">
                1
              </span>
              <p className="font-fira-sans text-lg">
                Высококачественную продукцию;
              </p>
            </li>
            <li className="flex mb-2 items-center gap-3">
              <span className="text-xl font-medium  w-9 h-9 bg-[#FEC80B] flex items-center justify-center rounded-full">
                2
              </span>
              <p className="font-fira-sans text-lg">Гибкую ценовую политику;</p>
            </li>
            <li className="flex mb-2 items-center gap-3">
              <span className="text-xl font-medium w-9 h-9 bg-[#FEC80B] flex items-center justify-center rounded-full">
                3
              </span>
              <p className="font-fira-sans text-lg">
                Регулярное информирование об ассортименте и складских остатках
                продукции;
              </p>
            </li>
            <li className="flex mb-2 items-center gap-3">
              <span className="text-xl font-medium w-9 h-9 bg-[#FEC80B] flex items-center justify-center rounded-full">
                4
              </span>
              <p className="font-fira-sans text-lg">
                Минимальные сроки поставки.
              </p>
            </li>
          </ul>

          <div>
            <p className="font-fira-sans text-lg mt-5 mb-6">
              Основные принципы ООО «РусТрак» при взаимодействии с партнёрами:
            </p>

            <ul className="mt-10">
              <li className="font-fira-sans text-lg"> - Доверие, </li>
              <li className="font-fira-sans text-lg"> - честность, </li>
              <li className="font-fira-sans text-lg"> - взаимопомощь; </li>
            </ul>

            <p className="text-lg font-fira-sans mt-6 max-w-220">
              Долгосрочное сотрудничество на взаимовыгодной основе.
              Обязательность и точность выполнения договоренностей. Соблюдение
              международных норм деловой этики.
            </p>

            <p className="text-lg font-fira-sans">Всегда рады Вам!</p>
          </div>
        </motion.div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Suppliers;
