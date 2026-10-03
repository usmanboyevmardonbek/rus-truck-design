import React from "react";
import { Header } from "../components/Header";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import { photoData } from "./objects";

const Photogallery = () => {
  function useFancybox(options = {}) {
    const [root, setRoot] = useState(null);

    useEffect(() => {
      if (root) {
        Fancybox.bind(root, "[data-fancybox]", options);
        return () => Fancybox.unbind(root, "[data-fancybox]");
      }
    }, [root, options]);

    return [setRoot];
  }

  //  const [fancyboxRef] = useFancybox({
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
              <a href="/">Фотогалерея</a>
            </li>
          </ul>

          <div className="flex justify-between items-center mt-10">
            <h1 className="font-fira-sans text-3xl font-medium">
              Фотогалерея производителя автоспецтехники РусТрак
            </h1>
            <a
              href="/video/"
              className="border-2 border-[#fec80b] rounded-sm inline-block px-5 py-2 hover:bg-[#ffd43a] transition duration-300 ease-in"
            >
              <p className="font-fira-sans text-lg">Смотреть видео</p>
            </a>
          </div>

          <div className="flex gap-10 mt-7">
            <button className="border border-[#ebebeb] inline-block px-5 py-2 cursor-pointer hover:bg-[#FEC80B] transition duration-300 rounded-sm">
              <p className="font-fira-sans text-base">Автомобили</p>
            </button>
            <button className="border border-[#ebebeb] inline-block px-5 py-2 cursor-pointer hover:bg-[#FEC80B] transition duration-300 rounded-sm">
              <p className="font-fira-sans text-base">Производство</p>
            </button>
            <button className="border border-[#ebebeb] inline-block px-5 py-2 cursor-pointer hover:bg-[#FEC80B] transition duration-300 rounded-sm">
              <p className="font-fira-sans text-base">О компании</p>
            </button>
            <button className="border border-[#ebebeb] inline-block px-5 py-2 cursor-pointer hover:bg-[#FEC80B] transition duration-300 rounded-sm">
              <p className="font-fira-sans text-base">Выставки</p>
            </button>
          </div>
          <div ref={Fancybox} className="grid grid-cols-4 mt-10 gap-10">
            {photoData.map((photos) => (
              <a
                data-fancybox="gallery"
                href={photos.fancyImg}
              >
                <img
                  src={photos.fancyImg}
                  alt="Sample image #2"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photogallery;
