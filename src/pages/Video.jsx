import { Header } from "../components/Header";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";
import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";
import { videoData } from "./objects";
import { div } from "motion/react-client";

const Video = () => {
  return (
    <>
      <Header />

      <div>
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="#">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="#">Видео</a>
            </li>
          </ul>

          <div className="flex justify-between mt-5">
            <h1 className="lg:text-3xl font-fira-sans font-medium text-2xl">
              Видеогалерея производителя автоспецтехники РусТрак
            </h1>

            <a
              href="/photogallery/"
              className="border-2 border-[#fec80b] rounded-sm lg:inline-block px-5 py-2 hover:bg-[#ffd43a] transition duration-300 ease-in hidden"
            >
              <p className="font-fira-sans text-lg">Смотреть фото</p>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-8 mb-10">
            {videoData.map((videos) => (
              <div key={videos.id}>
                <iframe
                  width="560"
                  height="315"
                  src={videos.videoItem}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full"
                ></iframe>

                <p className="font-fira-sans text-lg font-medium mt-5">
                    {videos.videoTitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Video;
