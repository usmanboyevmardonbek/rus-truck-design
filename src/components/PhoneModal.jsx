import { X } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "../utils/animation";

export function PhoneModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white rounded-2xl w-full max-w-[450px] p-8 relative"
          >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-center mt-2 mb-2 font-fira-sans">Заказать звонок</h2>
        <p className="text-center text-sm font-medium mb-8 font-fira-sans">
          Наш менеджер свяжется с Вами в ближайшее время
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 font-fira-sans">Ваше имя *</label>
            <input
              type="text"
              placeholder="Иван"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 font-fira-sans">Телефон *</label>
            <input
              type="tel"
              placeholder="+7"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-yellow-400"
              required
            />
          </div>

          <div className="flex items-start gap-3 mt-4">
            <input
              type="checkbox"
              id="agreement"
              className="mt-1 w-5 h-5 accent-black cursor-pointer rounded"
              required
            />
            <label htmlFor="agreement" className="text-sm text-gray-600 leading-tight font-fira-sans mt-2">
              Я согласен{" "}
              <a href="#" className="text-blue-600 hover:underline ">
                на обработку персональных данных
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FEC80B] hover:bg-yellow-500 text-black font-medium py-3 rounded-md transition-colors mt-6"
          >
            Оставить заявку
          </button>
        </form>

        <div className="mt-8 text-center text-sm space-y-1">
          <p className="font-fira-sans">Для регионов: <span className="font-medium font-fira-sans">8 (800) 511-05-25</span></p>
          <p className="font-fira-sans">Нижний Новгород: <span className="font-medium font-fira-sans">8 (831) 235-25-51</span></p>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
