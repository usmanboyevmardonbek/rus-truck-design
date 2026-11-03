import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

export function TruckCard({ truck, viewMode }) {
  const { t, lang } = useLanguage();
  return (
    <>
      <motion.div
        className={`${viewMode === "grid" ? "" : "flex items-center justify-between gap-8"}`}
      >
        <div
          className={`${viewMode === "grid" ? "flex-col" : "flex-row"} flex flex-1`}
        >
          <Link
            className={`relative flex items-center justify-center overflow-hidden shrink-0 aspect-4/3 w-60`}
          >
            <img src={truck?.img} alt="" className="size-full object-cover" />
          </Link>
          <div className="pl-6 flex flex-1 flex-col justify-center">
            <Link
              className={`font-fira-sans text-base sm:text-lg leading-tight hover:text-[#FEC80B] transition-colors font-medium ${viewMode === "list" ? "mb-6" : "mb-3 flex-1 line-clamp-2"}`}
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
          <h3 className="font-medium font-fira-sans text-center mb-3">
            {`${truck?.price?.toLocaleString().replaceAll(",", " ")} ${truck?.suffix?.[lang] || ""}`}
          </h3>
          <div className={`flex flex-col ${viewMode === "grid" ? "flex-row gap-3" : "flex-col"}`}>
            <a
              href="#"
              className={`inline-block bg-[#fec80b] px-11 py-3 rounded-sm hover:bg-[#ffd43a] transition duration-300`}
            >
              <p className="font-fira-sans text-base text-center">Подробнее</p>
            </a>
            <button className="inline-block cursor-pointer">
              <p className="text-base font-fira-sans mt-2 text-[#a2a2a2]">
                Получить КП
              </p>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
