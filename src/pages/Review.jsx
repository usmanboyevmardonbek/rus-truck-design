import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Fancybox } from "@fancyapps/ui";
import { reviewData } from "./objects";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Review = () => {
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
        <div className="container">
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">
                Отзывы и рекомендательные письма партнёров ООО «Рустрак»
              </a>
            </li>
          </ul>

          <div>
            <h1 className="font-fira-sans text-3xl font-medium mt-3">Отзывы</h1>
          </div>

          <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3">
            {reviewData.map((revItem) => (
                <a
              data-fancybox="gallery"
              href={revItem.revImg}
              key={revItem.id}
            >
              <img
                src={revItem.revImg}
                alt="revImg"
              />
            </a>
            ))}
            
          </div>
        </div>
      </div>

      <Feedback/>
      <Footer/>
    </>
  );
};

export default Review;
