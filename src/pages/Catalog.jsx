import { motion } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import { Header } from "../components/Header";
import { catData } from "./objects";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext";
import { NavLink } from "react-router-dom";

const linkToKey = {
  "/catalog/shtornye-avtomobili": { key: "cat_shtornye", count: 30 },
  "/catalog/krany-manipulator": { key: "cat_krany", count: 79 },
  "/catalog/zapravka": { key: "cat_zapravka", count: 26 },
  "/catalog/gidropod": { key: "cat_gidropod", count: 4 },
  "/catalog/sisterna": { key: "cat_sisterna", count: 10 },
  "/catalog/evakuator": { key: "cat_evakuator", count: 2 },
  "/catalog/avtofurgony": { key: "cat_avtofurgony", count: 16 },
  "/catalog/konteynerovozy": { key: "cat_konteynerovozy", count: 2 },
  "/catalog/kryukovye-pogruzchiki": { key: "cat_kryukovye", count: 3 },
  "/catalog/samosvaly": { key: "cat_samosvaly", count: 12 },
  "/catalog/avtomobili-dopog": { key: "cat_dopog", count: 4 },
  "/catalog/bortovye-avtomobili": { key: "cat_bortovye", count: 15 },
};

const formatCount = (count, lang) => {
  if (lang === "uz") return `${count} ta model`;
  if (lang === "en") return `${count} models`;
  if (count % 10 === 1 && count % 100 !== 11) return `${count} модель`;
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return `${count} модели`;
  return `${count} моделей`;
};

const Catalog = () => {
  const { t, lang } = useLanguage();
  return (
    <>
      <Header />

      <div>
        <div className="container py-6">
          <ul className="flex items-center gap-2 mb-6 flex-wrap">
            <li className="font-fira-sans text-gray-500 text-sm hover:text-black cursor-pointer">
              <NavLink to="/">{t("home", "Главная")}</NavLink>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>
            <li className="font-fira-sans text-gray-500 text-sm">
              <NavLink to="/catalog">{t("catalog", "Каталог")}</NavLink>
            </li>
          </ul>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }}
            className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-3.5 md:gap-2 mb-10"
          >
            {catData.map((catalogs) => {
              const meta = linkToKey[catalogs.catLink];
              const title = meta?.key ? t(meta.key, catalogs.catTitle) : catalogs.catTitle;
              const countDesc = meta?.count ? formatCount(meta.count, lang) : catalogs.catDesc;

              return (
                <motion.div
                  variants={fadeUp}
                  key={catalogs.id}
                >
                  <NavLink
                    to={catalogs.catLink}
                    className="flex flex-col items-end justify-between border border-[#EBEBEB] rounded-xl lg:w-full lg:h-80 hover:shadow-[0_0_18px_#FEC80B] transition duration-300 hover:scale-3d bg-white"
                  >
                    <div className="w-full px-3 py-3">
                      <p className="font-fira-sans font-normal text-base md:text-xl truncate">
                        {title}
                      </p>
                      <p className="font-fira-sans text-[#A1A1A1] font-normal text-base">
                        {countDesc}
                      </p>
                    </div>
                    <img src={catalogs.catImage} alt={title} className="w-3/4 object-contain" />
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
};

export default Catalog;
