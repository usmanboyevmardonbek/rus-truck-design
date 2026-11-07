import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/data";
import { useLanguage } from "../context/LanguageContext";
import { Heart, Mail, ShoppingCart } from "lucide-react";
import { div } from "motion/react-client";

export const TruckCard = ({ truck, viewMode }) => {
  const { t, lang } = useLanguage();
  return (
    <>
      <motion.div
        className={`${viewMode === "grid" ? "" : "flex items-center justify-between gap-8"}`}
      >
        <div
          className={`${viewMode === "grid" ? "flex-col" : "flex-row"} flex flex-1 items-center`}
        >
          <Link
            className={`relative flex items-center justify-center overflow-hidden shrink-0 aspect-4/3 ${viewMode === "grid" ? "w-full" : "w-60"}`}
          >
            <img src={truck?.img} alt="" className="size-full object-cover" />
          </Link>
          <div
            className={`flex flex-1 flex-col justify-center w-full ${viewMode === "grid" ? "px-0" : "pl-6"}`}
          >
            <Link
              className={`font-fira-sans  text-lg leading-tight hover:text-[#FEC80B] transition-colors  ${viewMode === "list" ? "mb-6" : "mb-3 flex-1 line-clamp-2"}  }`}
            >
              {truck?.title}
            </Link>
            {viewMode !== "grid" && (
              <ul className="w-full">
                {truck?.specs?.map((spec, i) => {
                  return (
                    <li key={i} className="flex items-end gap-1">
                      <p>{spec?.label}</p>
                      <span className="flex-1 border-b border-dashed border-[#a2a2a2]"></span>
                      <p>{spec?.value}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div>
          <h3
            className={`font-medium font-fira-sans text-center mb-3 ${viewMode === "grid" ? "text-left" : "text-center"}`}
          >
            {`${truck?.price?.toLocaleString().replaceAll(",", " ")} ${truck?.suffix?.[lang] || ""}`}
          </h3>
          <div
            className={`flex flex-col ${viewMode === "grid" ? "flex-row gap-3 items-center" : "flex-col"}`}
          >
            {truck?.outOfStock ? (
              <button
                className={`bg-[#fec80b]
                   px-4 py-3 rounded-sm hover:bg-[#ffd43a] transition duration-300 flex items-center justify-center gap-3 cursor-pointer w-full`}
              >
                <p className="font-fira-sans text-base text-center">
                  Мне нужен такой же
                </p>
                <Mail />
              </button>
            ) : (
              <div className="flex gap-3">
                <a
                  href="#"
                  className={`inline-block bg-[#fec80b] px-4 py-3 rounded-sm hover:bg-[#ffd43a] transition duration-300`}
                >
                  <p className="font-fira-sans text-xs text-center">
                    Подробнее
                  </p>
                </a>

                <div className="flex items-center gap-2">
                  <button className="cursor-pointer">
                    {viewMode === "grid" && <ShoppingCart />}
                  </button>
                  <button className="cursor-pointer">
                    {viewMode === "grid" && <Heart />}
                  </button>
                </div>

                <button className="inline-block cursor-pointer">
                  <p className="text-base font-fira-sans mt-2 text-[#a2a2a2]">
                    Получить КП
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};
