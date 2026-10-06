import { Grid2x2, List } from "lucide-react";
import { Header } from "../components/Header";
import { useState } from "react";

const Shtornye = () => {
  const [shtor, setShtore] = useState(false);

  function openShtore() {
    setShtore(!shtor);
  }
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
              <a href="/">Каталог</a>
            </li>

            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Шторные автомобили</a>
            </li>
          </ul>
          <div className="flex mt-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-fira-sans font-medium text-2xl">
                Шторные автомобили
              </h1>
              <p className="font-fira-sans text-base opacity-25 mt-2">
                30 товаров
              </p>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex mt-2">
                <p className="font-fira-sans text-[#a2a2a2] ">Сортировка:</p>
                <div className="relative">
                  <button className="cursor-pointer" onClick={openShtore}>
                    <p className="font-fira-sans">По бренду</p>
                  </button>
                    <ul className={`absolute transition-all mt-2 -left-23 duration-300 ease-in shadow- overflow-y-hidden ${shtor ? " h-54" : "h-0"}`}>
                      <li className="border-t border-x border-b rounded-t-sm border-[#a2a2a2] w-60">
                        <p className="font-fira-sans text-base px-5 py-2">
                          По популярности
                        </p>
                      </li>
                      <li className="border-b border-x border-[#a2a2a2] w-60">
                        <p className="font-fira-sans text-base px-5 py-2">
                          Сначала новые
                        </p>
                      </li>
                      <li className="border-b border-x border-[#a2a2a2] w-60">
                        <p className="font-fira-sans text-base px-5 py-2">
                          В наличии
                        </p>
                      </li>
                      <li className="border-b border-x border-[#a2a2a2] w-60">
                        <p className="font-fira-sans text-base px-5 py-2">
                          По возрастанию цены
                        </p>
                      </li>
                      <li className="border-b border-x rounded-b-sm border-[#a2a2a2] w-60 px-5 py-2">
                        <p className="font-fira-sans text-base">По бренду</p>
                      </li>
                    </ul>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-3">
                <List className="text-[#a2a2a2] font-medium" />
                <Grid2x2 />
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shtornye;
