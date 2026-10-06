import { Header } from "../components/Header";
import { catData } from "./objects";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";

const Catalog = () => {
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
          </ul>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  lg:gap-10 gap-3.5 md:gap-2  mb-10">
            {catData.map((catalogs) => (
              <a
                key={catalogs.id}
                href="#"
                className="flex flex-col items-end justify-between border border-[#EBEBEB] rounded-xl lg:w-1/1 lg:h-80 hover:shadow-[0_0_18px_#FEC80B] transition duration-300 hover:scale-3d"
              >
                <div className="w-full px-3 py-3">
                  <p className="font-fira-sans font-normal text-base md:text-xl truncate">
                    {catalogs.catTitle}
                  </p>
                  <p className="font-fira-sans text-[#A1A1A1] font-normal text-base">
                    {catalogs.catDesc}
                  </p>
                </div>
                <img src={catalogs.catImage} alt="catImage" className="w-3/4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
};

export default Catalog;
