import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/footer";
import Feedback from "../components/Feedback";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { catalogProducts } from "./objects";

export default function Detail() {
  const { slug } = useParams();
  const product = catalogProducts[slug];
  const [activeImg, setActiveImg] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!product) {
    return (
      <>
        <Header />
        <div className="container py-24 text-center">
          <h1 className="font-fira-sans text-2xl font-bold mb-4">Товар не найден</h1>
          <p className="text-gray-500 mb-6">Запрашиваемый автомобиль не найден в каталоге.</p>
          <NavLink
            to="/catalog"
            className="inline-block bg-[#FEC80B] hover:bg-yellow-500 text-black px-6 py-2.5 rounded font-fira-sans font-medium transition-colors"
          >
            ← Перейти в каталог
          </NavLink>
        </div>
        <Footer />
      </>
    );
  }

  // Shu toifadagi boshqa mashinalar (o'xshash mahsulotlar)
  const similarProducts = Object.values(catalogProducts).filter(
    (item) => item.categoryPath === product.categoryPath && item.slug !== product.slug
  );

  return (
    <>
      <Header />
      <div className="bg-[#F8F8F8] min-h-screen pb-20">
        <div className="container py-6">
          {/* Breadcrumbs */}
          <ul className="flex items-center gap-2 mb-6 flex-wrap">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to="/catalog">Каталог</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to={product.categoryPath}>{product.categoryTitle}</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm line-clamp-1">{product.title}</li>
          </ul>

          {/* Sarlavha */}
          <h1 className="font-fira-sans font-bold text-2xl md:text-3xl text-black mb-8">
            {product.title}
          </h1>

          {/* Asosiy blok (Slider + Info) */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Chap tomon: Slayder */}
            <div className="w-full lg:w-[55%]">
              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                navigation={{
                  nextEl: ".cat-detail-next",
                  prevEl: ".cat-detail-prev",
                }}
                onSlideChange={(swiper) => setActiveImg(swiper.activeIndex)}
                className="w-full aspect-4/3 bg-white mb-3 relative rounded-sm overflow-hidden shadow-sm"
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
                <button className="cat-detail-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/80 hover:bg-white flex items-center justify-center rounded-full shadow transition cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="cat-detail-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/80 hover:bg-white flex items-center justify-center rounded-full shadow transition cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Swiper>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  spaceBetween={8}
                  slidesPerView={4}
                  watchSlidesProgress
                  className="w-full"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className={`aspect-4/3 bg-white rounded-sm overflow-hidden cursor-pointer border-2 transition-colors ${
                          activeImg === i ? "border-[#FEC80B]" : "border-transparent"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`thumb-${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            {/* O'ng tomon: Qisqa ma'lumot va harakatlar */}
            <div className="flex-1 bg-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <p className="font-fira-sans font-bold text-2xl text-black mb-6">
                  {product.price}
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  <button className="w-full bg-[#FEC80B] hover:bg-yellow-500 transition-colors py-3 font-fira-sans font-medium text-base rounded-sm cursor-pointer">
                    Добавить в корзину
                  </button>
                  <button className="w-full border-2 border-[#FEC80B] hover:bg-yellow-50 transition-colors py-3 font-fira-sans font-medium text-base rounded-sm cursor-pointer">
                    Получить КП
                  </button>
                </div>

                <ul className="divide-y divide-gray-100">
                  {product.shortSpecs.map((spec, i) => (
                    <li key={i} className="flex justify-between py-2.5 gap-4">
                      <span className="font-fira-sans text-sm text-gray-500 shrink-0">
                        {spec.label}
                      </span>
                      <span className="font-fira-sans text-sm text-black text-right font-medium">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#feauture"
                className="inline-block mt-4 text-sm font-fira-sans text-[#FEC80B] hover:underline"
              >
                Смотреть все характеристики →
              </a>
            </div>
          </div>

          {/* Xarakteristikalar jadvali */}
          <section id="feauture" className="mt-12">
            <h2 className="font-fira-sans font-bold text-2xl text-black mb-6">
              Характеристики
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-sm overflow-hidden">
                <thead>
                  <tr className="bg-[#FEC80B]">
                    <th
                      colSpan={2}
                      className="font-fira-sans font-bold text-left px-6 py-4 text-base"
                    >
                      {product.title}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.fullSpecs.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="font-fira-sans text-sm text-gray-600 px-6 py-3 w-2/5 border-b border-gray-100">
                        {spec.label}
                      </td>
                      <td className="font-fira-sans text-sm text-black px-6 py-3 border-b border-gray-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* O'xshash yuk mashinalari */}
          {similarProducts.length > 0 && (
            <section className="mt-12">
              <h2 className="font-fira-sans font-bold text-2xl text-black mb-6">
                Похожие товары
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {similarProducts.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-sm overflow-hidden shadow-sm group"
                  >
                    <NavLink to={`${item.categoryPath}/${item.slug}`} className="block">
                      <div className="aspect-4/3 bg-gray-100 overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-fira-sans text-sm line-clamp-2 mb-3 leading-tight">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="bg-[#FEC80B] hover:bg-yellow-500 transition-colors px-3 py-1.5 font-fira-sans text-xs font-medium rounded-sm">
                            Подробнее
                          </span>
                          <button
                            type="button"
                            className="text-gray-400 hover:text-red-400 transition-colors"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
}
