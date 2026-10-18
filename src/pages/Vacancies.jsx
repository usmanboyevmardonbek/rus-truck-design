import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";
import { Header } from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Vacancies = () => {
  const { t } = useLanguage();
  const [vacancieDrop, setVacancieDrop] = useState(false);

  function openVacancie() {
    setVacancieDrop(!vacancieDrop);
  }
  return (
    <>
      <Header />
      <div>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">{t("home", "Главная")}</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/vacancies">{t("vacancies", "Вакансии")}</a>
            </li>
          </ul>

          <h2 className="font-fira-sans text-3xl font-medium mt-3 mb-8">{t("vacancies", "Вакансии")}</h2>

          <div className="border border-gray-200  rounded-2xl hover:border-[#fec80b] transition duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <button
                onClick={openVacancie}
                className={`flex justify-between! w-full px-5 py-5 rounded-2xl   items-center cursor-pointer ${vacancieDrop ? "bg-[#fec80b]" : ""}`}
              >
                <p className="font-fira-sans text-2xl font-medium">
                  {t("autoElectrician", "Автоэлектрик")}
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
                    {t("responsibilities", "Обязанности:")}
                  </h3>
                  <ul>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("resp_1", "электромонтаж осветительного оборудования")}
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("resp_2", "монтаж электрооборудования и надстроек на спецавтомобили")}
                    </li>
                  </ul>
                </div>
                <div className="group-2 mt-5">
                  <h3 className="font-fira-sans text-lg font-medium mb-2">
                    {t("requirements", "Требования:")}
                  </h3>

                  <ul>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("req_1", "опыт работы приветствуется")}
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("req_2", "желание обучаться новому")}
                    </li>
                  </ul>
                </div>
                <div className="group-3 mt-5">
                  <h3 className="font-fira-sans text-lg font-medium mb-2">
                    {t("conditions", "Условия:")}
                  </h3>
                  <ul>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      желание обучаться новому
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("cond_2", "полный соцпакет")}
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("cond_3", "отапливаемый цех, хорошие бытовые условия")}
                    </li>
                    <li className="list-disc font-fira-sans text-lg mb-0.5 ml-8">
                      {t("cond_4", "предоставляем обучение по данному направлению")}
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="bg-[#fec80b] mt-10 mb-10 rounded-sm px-8 py-3 ml-4 cursor-pointer hover:bg-[#ffd43a] transition duration-200">
                    <p className="font-fira-sans text-base">{t("applyJob", "Откликнуться")}</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <Feedback />
      <Footer />
    </>
  );
};

export default Vacancies;
