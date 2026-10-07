import { Header } from "../components/Header";
import Feedback from "../components/Feedback";
import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import { certData } from "./objects";
import { div } from "motion/react-client";
import { Fancybox } from "@fancyapps/ui";
import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";

const Cert = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    Fancybox.bind(container, "[data-fancybox]", {});

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, []);
  return (
    <>
      <Header />

      <div>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
          <ul className="flex items-center gap-2 mb-4">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="#">Сертификаты</a>
            </li>
          </ul>
          <div>
            <h1 className="font-fira-sans text-3xl font-medium mb-8">
              Сертификаты
            </h1>
          </div>

          <div ref={containerRef} className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3  gap-6">
            {certData.map((certificates) => (
            <a
              data-fancybox="gallery"
              href={certificates.certImg}
              key={certificates.id}
            >
              <img
                src={certificates.certImg}
                alt="certImage"
              />
            </a>
            ))}
          </div>
        </motion.div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
};

export default Cert;
