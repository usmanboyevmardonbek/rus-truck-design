import React from "react";
import { motion } from "motion/react";

export const Loader = () => {
  return (
    <motion.div 
      key="global-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div className="w-[50px] h-[50px] border-[4px] border-[#F0F0F0] border-t-[#FEC80B] rounded-full animate-spin"></div>
    </motion.div>
  );
};
