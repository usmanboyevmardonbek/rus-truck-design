import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Download, Heart, Menu, MoveRight } from "lucide-react";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { catData } from './objects';
import { recomendData } from './objects';
import { novostData } from './objects';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Pagination } from 'swiper/modules';



export function Home() {
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className='z-50'>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            loop={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='relative'>
                                    <div className='z-90'>
                                        <img src="/banner-1.jpg" alt="banner-1" className='w-full object-cover rounded-4xl' />
                                    </div>
                                    <div className='absolute z-100 top-1/5 left-8'>
                                        <h1 className='font-fira-sans font-extrabold text-white text-[28px]'>
                                            АТЗ Рустрак включены в реестр <br />
                                            российской промышленной <br /> продукции
                                        </h1>
                                        <p className='text-lg font-fira-sans font-normal text-white'>
                                            Теперь доступны для приобретения по 44 ФЗ
                                        </p>

                                        <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 max-w-50 flex justify-center rounded-xl hover:bg-[#ffd43a] hover:text-black transition duration-300'>
                                            <button className='font-fira-sans text-white font-normal text-base cursor-pointer hover:bg-[#ffd43a] hover:text-black transition duration-300'>
                                                Заказать звонок
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative'>
                                    <div className='z-90'>
                                        <img src="/banner-2.jpg" alt="banner-2" className='w-full object-cover rounded-4xl' />
                                    </div>
                                    <div className='absolute z-100 top-0  bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5875)_54.17%,rgba(0,0,0,0.327131)_80.73%,rgba(0,0,0,0)_100%)] w-1/2 h-1/1 rounded-4xl'>
                                        <div className='px-10 py-20'>
                                            <h1 className='font-fira-sans font-extrabold text-white text-[28px]'>
                                                В наличии шторные фургоны <br /> КАМАЗ 4308
                                            </h1>
                                            <p className='text-lg font-fira-sans font-normal text-white'>
                                                Размеры надстройки 6200х2550х2850 мм. <br />
                                                Цена 5 500 000 руб.
                                            </p>

                                            <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 max-w-50 flex justify-center rounded-xl group-hover:bg-[#ffd43a] group-hover:text-black transition duration-300'>
                                                <button className='font-fira-sans text-white font-normal text-base cursor-pointer hover:bg-[#ffd43a] transition duration-300'>
                                                    Заказать звонок
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative'>
                                    <div className='z-90'>
                                        <img src="/banner-3.webp" alt="banner-3" className='w-full object-cover rounded-4xl' />
                                    </div>
                                    <div className='absolute z-100 top-0  bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5875)_54.17%,rgba(0,0,0,0.327131)_80.73%,rgba(0,0,0,0)_100%)] w-1/2 h-1/1 rounded-4xl'>
                                        <div className='px-10 py-20'>
                                            <h1 className='font-fira-sans font-extrabold text-white text-[28px]'>
                                                Бортовые платформы со шторным механизмом
                                            </h1>
                                            <p className='text-lg font-fira-sans font-normal text-white'>
                                                Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами, сдвижной крышей.
                                            </p>

                                            <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 max-w-50 flex justify-center rounded-xl  bg-yellow-300 hover:bg-[#ffd43a] transition duration-300'>
                                                <button className='font-fira-sans text-black font-normal text-base cursor-pointer hover:bg-[#ffd43a] transition duration-300'>
                                                    Подробнее
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative'>
                                    <div className='z-90'>
                                        <img src="/banner-4.jpg" alt="banner-4" className='w-full object-cover rounded-4xl' />
                                    </div>
                                    <div className='absolute z-100 top-0  bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5875)_54.17%,rgba(0,0,0,0.327131)_80.73%,rgba(0,0,0,0)_100%)] w-1/2 h-1/1 rounded-4xl'>
                                        <div className='px-10 py-20'>
                                            <h1 className='font-fira-sans font-extrabold text-white text-[28px]'>
                                                ООО «РусТрак»
                                            </h1>
                                            <p className='text-lg font-fira-sans font-normal text-white'>
                                                Производство и поставка специализированной техники и спецтранспорта
                                            </p>

                                            <div className="flex gap-5">
                                                <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 w-1/3   flex justify-center rounded-xl  bg-yellow-300 hover:bg-[#ffd43a] transition duration-300'>
                                                    <a href="#">Открыть каталог</a>
                                                </div>

                                                <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 w-1/3 flex justify-center rounded-xl   hover:bg-[#ffd43a] transition duration-300'>
                                                    <button className='font-fira-sans text-white font-normal text-base cursor-pointer hover:text-black transition duration-300'>
                                                        Заказать звонок
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative'>
                                    <div className='z-90'>
                                        <img src="/banner-5.jpg" alt="banner-5" className='w-full object-cover rounded-4xl' />
                                    </div>
                                    <div className='absolute z-100 top-0  bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5875)_54.17%,rgba(0,0,0,0.327131)_80.73%,rgba(0,0,0,0)_100%)] w-1/2 h-1/1 rounded-4xl'>
                                        <div className='px-10 py-20'>
                                            <h1 className='font-fira-sans font-extrabold text-white text-[28px]'>
                                                Краны манипуляторы на базе MCV/HCV грузовиков
                                            </h1>
                                            <p className='text-lg font-fira-sans font-normal text-white'>
                                                Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин, установка блока распределителя управления задними опорами, открытый профиль HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет крана.
                                            </p>

                                            <div className="flex gap-5">
                                                <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 w-1/3   flex justify-center rounded-xl  bg-yellow-300 hover:bg-[#ffd43a] transition duration-300'>
                                                    <a href="#">Подробнее</a>
                                                </div>

                                                <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 w-1/3 flex justify-center rounded-xl   hover:bg-[#ffd43a] transition duration-300'>
                                                    <button className='font-fira-sans text-white font-normal text-base cursor-pointer hover:text-black transition duration-300'>
                                                        Заказать звонок
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative'>
                                    <div className='z-90'>
                                        <img src="/banner-5.jpg" alt="banner-5" className='w-full object-cover rounded-4xl' />
                                    </div>
                                    <div className='absolute z-100 top-0  bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5875)_54.17%,rgba(0,0,0,0.327131)_80.73%,rgba(0,0,0,0)_100%)] w-1/2 h-1/1 rounded-4xl'>
                                        <div className='px-10 py-20'>
                                            <h1 className='font-fira-sans font-extrabold text-white text-[28px]'>
                                                Краны манипуляторы на базе MCV/HCV грузовиков
                                            </h1>
                                            <p className='text-lg font-fira-sans font-normal text-white'>
                                                Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин, установка блока распределителя управления задними опорами, открытый профиль HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет крана.
                                            </p>

                                            <div className="flex gap-5">
                                                <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 w-1/3   flex justify-center rounded-xl  bg-yellow-300 hover:bg-[#ffd43a] transition duration-300'>
                                                    <a href="#">Подробнее</a>
                                                </div>

                                                <div className='border-2 border-[#fec80b] mt-6 py-2 px-2 w-1/3 flex justify-center rounded-xl   hover:bg-[#ffd43a] transition duration-300'>
                                                    <button className='font-fira-sans text-white font-normal text-base cursor-pointer hover:text-black transition duration-300'>
                                                        Заказать звонок
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='category'>
                <div className="container">
                    <div className="flex mt-15 justify-between">
                        <h2 className='font-fira-sans font-medium text-[42px]'>
                            Категории
                        </h2>
                        <div className='flex items-center gap-2'>
                            <button className='category-swiper-button-prev border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer'>
                                <ChevronLeft />
                            </button>
                            <button className='category-swiper-button-next border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer'>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={{
                            prevEl: ".category-swiper-button-prev",
                            nextEl: ".category-swiper-button-next"
                        }}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper category-swiper px-4!"
                    >



                        {catData.map((cats) =>

                            <SwiperSlide key={cats.id}>
                                <div className='mt-10 border border-[#EBEBEB] rounded-sm w-1/1 h-1/1 pb-10 hover:shadow-[0_0_18px_#FEC80B]   transition duration-300 hover:scale-3d'>
                                    <a href="#" className='flex flex-col'>
                                        <div className='px-3 py-3'>
                                            <p className='font-fira-sans font-normal text-xl'>{cats.catTitle}</p>
                                            <p className='font-fira-sans text-[#A1A1A1] font-normal text-base'>{cats.catDesc}</p>
                                        </div>
                                        <div className='ml-10  mt-10 w-36 flex self'>
                                            <img src={cats.catImage} alt="" className='w-full' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>

                        )}


                    </Swiper>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='flex items-center justify-center mt-30 gap-8'>
                        <div className='max-w-160'>
                            <h2 className='font-fira-sans font-medium text-[42px]'>
                                О компании <span className='text-[#fec80b]'>Рустрак</span>
                            </h2>

                            <p className='mb-10 font-fira-sans font-normal text-lg'>
                                Наша компания занимает лидирующие позиции на рынке спецтехники: каждый день мы вносим свой вклад в развитие отечественного автопрома и укрепление российской экономики.
                            </p>

                            <p className='font-fira-sans font-normal text-lg'>
                                «РусТрак» является ведущим производителем коммерческого транспорта и специализированной техники. Наша работа признана и высоко оценена крупнейшими отечественными корпорациями и государственными структурами: мы поставляем спецтехнику для таких корпораций, как Газпром, Росатом, Россети, РСК «МИГ» и других.
                            </p>

                            <div className='border-2 border-[#fec80b] mt-10 py-2 px-2 max-w-50 flex justify-center rounded-sm  bg-yellow-300 hover:bg-[#ffd43a] transition duration-300'>
                                <button className='font-fira-sans text-black font-normal text-base cursor-pointer hover:bg-[#FEC80B] transition duration-300 flex gap-2 items-center'>
                                    Подробнее
                                    <span>
                                        <ArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <img src="/about-truck32.png" alt="white-trucks" />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-[#FEC80B] mt-20 pb-20'>
                <div className="container">
                    <div className="grid grid-cols-3">
                        <div className='pt-20'>
                            <p className='font-fira-sans font-medium text-8xl'>17</p>
                            <p className='font-fira-sans font-medium text-3xl'>субъектов</p>
                            <p className='font-normal text-lg font-fira-sans pt-7'>
                                За 17 лет деятельности ООО <br /> «РусТрак» превратилось в крупное предприятие по производству и <br /> продаже специальной техники
                            </p>
                        </div>

                        <div className='pt-20'>
                            <p className='font-fira-sans font-medium text-8xl'>85</p>
                            <p className='font-fira-sans font-medium text-3xl'>субъектов</p>
                            <p className='font-normal text-lg font-fira-sans pt-7'>
                                Мы обеспечили 85 субъектов РФ <br /> надёжной техникой коммерческого и <br /> специализированного <br /> предназначения
                            </p>
                        </div>

                        <div className='pt-20'>
                            <p className='font-fira-sans font-medium text-8xl'>11</p>
                            <p className='font-fira-sans font-medium text-3xl'>концернов</p>
                            <p className='font-normal text-lg font-fira-sans pt-7'>
                                ООО «РусТрак» дорожит доверием <br /> автопрома, которое подтверждено <br /> полномочиями от 11 <br /> автопроизводителей
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="scroll-section bg-gray-400 mt-10 mb-20">
                <div className="container">

                </div>
            </section>

            <section className='recommend-section bg-gray-300'>
                <div className="container">
                    <div className="flex mt-15 justify-between">
                        <h2 className='font-fira-sans font-medium text-[42px]'>
                            Рекомендуемая продукция
                        </h2>
                        <div className='flex items-center gap-2'>
                            <button className='recomend-swiper-button-prev border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer'>
                                <ChevronLeft />
                            </button>
                            <button className='recomend-swiper-button-next border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer'>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>

                    <Swiper

                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={{
                            prevEl: ".recomend-swiper-button-prev",
                            nextEl: ".recomend-swiper-button-next"
                        }}
                        modules={[Navigation]}
                        className="mySwiper recomend-swiper"
                    >
                        {recomendData.map((recomendProduct) =>


                            <SwiperSlide key={recomendProduct.id} className='w-400 h-400'>
                                <div className="wrapper-slider bg-white">
                                    <div className="relative">
                                        <a href="#">
                                            <img src={recomendProduct.recImage} alt="" className='object-cover w-full! h-full! max-w-full' />
                                        </a>

                                        <Heart className='absolute top-1 right-2' />
                                    </div>

                                    <div>
                                        <a href="#">
                                            <p className='font-fira-sans font-normal text-lg px-3 py-3'>{recomendProduct.recText}</p>
                                        </a>
                                    </div>
                                    <p className='font-fira-sans text-2xl font-medium mt-2 px-3'>
                                        {recomendProduct.product}
                                    </p>

                                    <div className="flex gap-5 items-center px-3 py-3">
                                        <button className='font-fira-sans text-black font-normal text-base cursor-pointer bg-[#FEC80B] transition duration-300 flex gap-2 items-center justify-center w-30 h-10 rounded-sm'>
                                            Подробнее
                                        </button>

                                        <button className='flex cursor-pointer text-[#A1A1A1]'>
                                            <p className='font-fira-sans text-base font-normalt'>Получить КП</p>

                                            <span>
                                                <Download />
                                            </span>
                                        </button>
                                    </div>
                                </div>



                            </SwiperSlide>




                        )

                        }
                    </Swiper>
                </div>
            </section>

            <section className="novosti-section">
                <div className="container">
                    <div className="flex justify-between items-center mt-10">
                        <h2 className='font-fira-sans font-medium text-4xl'>
                            Новости
                        </h2>

                        <div className="btn-wrap flex gap-2">
                            <button className='novosti-swiper-button-prev border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer'>
                                <ChevronLeft />
                            </button>
                            <button className='novosti-swiper-button-next border p-1 rounded-xs hover:bg-[#FEC80B] transition duration-300 cursor-pointer'>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>


                    <Swiper modules={[Navigation]} className="mySwiper novosti-swiper"
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            prevEl: ".novosti-swiper-button-prev",
                            nextEl: ".novosti-swiper-button-next"
                        }}

                    >
                        {novostData.map((novostItem) =>
                            <SwiperSlide key={novostItem.id}>
                                <div className='mt-5'>
                                    <a href="#">
                                        <img src={novostItem.novostImage} alt="" />
                                    </a>
                                </div>

                                <p className='font-fira-sans font-normal text-base mt-3'>{novostItem.novostDate}</p>
                                <h5 className='font-fira-sans font-medium text-lg'>{novostItem.novostDesc}</h5>

                                <button className='flex items-center gap-3'>
                                    <p className='text-[#A1A1A1] font-fira-sans font-normal text-lg'>
                                        Подробнее
                                    </p>

                                    <MoveRight className='text-[#A1A1A1]' />
                                </button>


                            </SwiperSlide>


                        )}
                    </Swiper>

                </div>
            </section>

            <section className='feedback-section bg-[#F2F2F2] relative overflow-hidden px-10'>
                <div className="container">
                    <div className="flex gap-20  pt-10">
                        <div className="fed-1">
                            <h2 className="font-fira-sans font-medium text-[42px]">ОСТАЛИСЬ ВОПРОСЫ?</h2>
                            <p className='font-fira-sans font-normal text-lg'>Оставьте свои контактные данные, и мы перезвоним Вам в ближайшее время</p>

                            <div className="form-wrap mt-5">
                                <form action="">
                                    <div className="flex">
                                        <div>
                                            <label htmlFor="feedback-name" className='font-fira-sans font-medium text-sm'>Ваше имя *</label>
                                            <input type="text" placeholder='Иван' id='feedback-name' className='border border-black w-11/12 px-3 py-3 rounded-xs font-fira-sans text-lg bg-transparent' />
                                        </div>
                                        <div>
                                            <label htmlFor="feedback-name" className='font-fira-sans font-medium text-sm'>Телефон *</label>
                                            <input type="text" placeholder='+7' id='feedback-name' className='border border-black w-11/12 px-3 py-3 rounded-xs font-fira-sans text-lg bg-transparent' />
                                        </div>
                                        <div className='flex items-center mt-3'>
                                            <button className='bg-[#FEC80B] mt-2 px-8 py-3 rounded-xl cursor-pointer hover:bg-[#ffd43a] transition duration-300'>
                                                <p className='font-normal font-fira-sans text-base'>Отправить</p>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <p className='mt-5 font-fira-sans font-normal text-sm text-gray-400'>
                                    Нажимая на кнопку отправить <a href="#">Вы соглашаетесь на обработку персональных данных </a>
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="/feedback-truck.webp" alt="" className='absolute  max-w-none w-1/2 top-0 '/>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                
            </footer>

        </>
    )
}