import { ChevronDown, Heart, Menu, Phone, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
    const [workingTime, setWorkingTime] = useState(false)
    const [catalog, setCatalog] = useState(false)
    const[parse, setParse] = useState(false)
    const [specSourse, setSpecSource] = useState(false)

    function openWorkingTimeDropdown() {
        setWorkingTime(!workingTime)
    }

    function openCatalog() {
        setCatalog(!catalog)
    }

    function openParse(){
        setParse(!parse)
    }

    function Openspec(){
        setSpecSource(!specSourse)
    }


    return (
        <header className="relative z-100">
            <div className="flex justify-around items-center border-b border-b-yellow-400">
                <div className="container">
                    <div className="flex justify-between mt-3!">
                        <a href="/" className="flex items-center gap-2.5">
                            <img src="/header-logo.svg" alt="header-logo" />
                            <span className="font-fira-sans text-black font-normal text-sm relative before:content-[''] before:absolute before:top-3 before:left-0 before:z-10 before:w-0.5 before:h-5 before:bg-yellow-400 pl-5!">
                                производство и продажа <br />
                                автоспецтехники
                            </span>

                        </a>
                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <div className="flex cursor-pointer w-max relative z-0">
                                    <button onClick={openWorkingTimeDropdown} className="flex cursor-pointer">
                                        <p className="text-black font-normal font-fira-sans text-base">Время работы</p>
                                        <ChevronDown className={`text-yellow-300 cursor-pointer transition-all duration-500 ${workingTime ? "rotate-180" : ""}`} />
                                    </button>
                                    {workingTime && (
                                        <div className="absolute left-1/2 -translate-x-1/3 top-[calc(100%+6px)] shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] w-max bg-white p-4">
                                            <p className="text-black font-normal font-fira-sans text-base">Пн-пт: с 8:00 до 18:00</p>
                                            <p className="text-black font-normal font-fira-sans text-base">Сб-вс: Выходной</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-[#A1A1A1] font-fira-sans text-base font-normal">
                                    г. Нижний Новгород ул. Торфяная, 35
                                </p>



                            </div>
                            <div className="flex items-center gap-2.5">
                                <div>
                                    <p className="text-[#A1A1A1] font-fira-sans text-base font-normal">
                                        Для регионов: <a href="tel:88005110525">8 (800)-511-05-25</a>
                                    </p>
                                    <p className="text-[#A1A1A1] font-fira-sans text-base font-normal">
                                        Нижний Новгород: <a href="tel:88312250055">8 (831) 225-00-55</a>
                                    </p>
                                </div>

                                <button>
                                    <Phone className="bg-[#FEC80B] rounded-full w-10 h-10 cursor-pointer p-2!" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section className="py-4 relative z-0">
                <div className="container">
                    <div className="flex items-center gap-0.5 justify-between">
                        <div className="flex items-center gap-8">
                            <div>
                                <button onClick={Openspec}  className="cursor-pointer flex items-center bg-amber-400 gap-2 p-2 rounded-md">
                                
                                {specSourse ? <X /> :  <Menu className={`w-[18px] h-[18px] [stroke-width:1.75]` }/>}
                                <p className="font-fira-sans font-normal text-lg">
                                Каталог
                                </p>
                            </button>

                            {
                                specSourse && (
                                    <div className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6 z-60">
                                                    <div className="grid grid-cols-4">
                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                Категории
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Шторные автомобили</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Краны-манипуляторы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автотопливозаправщики</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоцистерны</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоэвакуаторы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Бортовые автомобили</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Изотермические фургоны</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контейнеровозы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Крюковые погрузчики</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автомобили ДОПОГ категория EXII</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автогидроподъёмники</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                О нас
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>О компании ООО «Рустрак»</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Наши партнёры</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Производство</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Поставщикам и партнёрам</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Отзывы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сертификаты</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Вакансии</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Кредит и лизинг</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                Медиа
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Фотогалерея</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Видео</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Рекламные материалы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Информационные материалы</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сервис</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Ремонт</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контакты</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                )
                            }
                            </div>
                            <div>
                                <nav>
                                    <ul className="flex gap-8 ">
                                        <li>
                                            <div>
                                                <button onClick={openParse} className="flex cursor-pointer">
                                                <p className="text-black font-normal font-fira-sans text-base">
                                                    О нас

                                                </p>
                                                <ChevronDown className={`text-yellow-300 cursor-pointer transition-all duration-500 ${parse ? "rotate-180" : ""}`}/>
                                            </button>

                                            {
                                                parse && (
                                                    <div className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6">
                                                    <div className="grid grid-cols-4">
                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                Категории
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Шторные автомобили</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Краны-манипуляторы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автотопливозаправщики</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоцистерны</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоэвакуаторы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Бортовые автомобили</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Изотермические фургоны</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контейнеровозы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Крюковые погрузчики</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автомобили ДОПОГ категория EXII</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автогидроподъёмники</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                О нас
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>О компании ООО «Рустрак»</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Наши партнёры</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Производство</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Поставщикам и партнёрам</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Отзывы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сертификаты</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Вакансии</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Кредит и лизинг</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                Медиа
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Фотогалерея</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Видео</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Рекламные материалы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Информационные материалы</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сервис</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Ремонт</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контакты</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            }
                                            </div>

                                        </li>

                                        <li>
                                            <div>
                                                <button onClick={openCatalog} className="flex cursor-pointer">
                                                    <p className="text-black font-normal font-fira-sans text-base">
                                                        Медиа
                                                    </p>
                                                    <ChevronDown className={`text-yellow-300 cursor-pointer transition-all duration-500 ${catalog ? "rotate-180" : ""}`} />
                                                </button>

                                               {
                                                catalog && (
                                                     <div className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6">
                                                    <div className="grid grid-cols-4">
                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                Категории
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Шторные автомобили</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Краны-манипуляторы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автотопливозаправщики</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоцистерны</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоэвакуаторы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Бортовые автомобили</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Изотермические фургоны</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контейнеровозы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Крюковые погрузчики</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автомобили ДОПОГ категория EXII</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автогидроподъёмники</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                О нас
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>О компании ООО «Рустрак»</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Наши партнёры</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Производство</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Поставщикам и партнёрам</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Отзывы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сертификаты</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Вакансии</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Кредит и лизинг</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                                                Медиа
                                                            </p>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Фотогалерея</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Видео</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Рекламные материалы</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-base font-normal">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Информационные материалы</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сервис</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Ремонт</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                                                </li>
                                                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контакты</NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                )
                                               }

                                            </div>

                                        </li>

                                        <li className="text-black font-normal font-fira-sans text-base cursor-pointer">
                                            <a href="#">Сервис</a>
                                        </li>

                                        <li className="text-black font-normal font-fira-sans text-base cursor-pointer">
                                            <a href="#">Ремонт</a>
                                        </li>

                                        <li className="text-black font-normal font-fira-sans text-base cursor-pointer">
                                            <a href="#">Контакты</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>


                        <div>
                            <div className="flex gap-5">
                                <form action="#">
                                    <div className="flex relative">
                                        <label htmlFor="name"></label>
                                        <input type="text" id="name" className="border border-[#FEC80B] outline-0 rounded-full font-fira-sans w-78 h-9 pt-3 pr-10 pb-3 pl-4 text-base shadow-[0_0_10px_#FEC80B]" />
                                        <button className="cursor-pointer absolute top-1 right-[15px] z-1">
                                            <Search />
                                        </button>
                                    </div>
                                </form>

                                <button>
                                    <ShoppingCart />
                                </button>

                                <button>
                                    <Heart />
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
                {/* <div className="wrapper absolute top-full left-1/2 -translate-x-1/2 max-w-300 w-full bg-gray-200 p-6">
                    <div className="grid grid-cols-4">
                        <div>
                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                Категории
                            </p>
                            <ul>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Шторные автомобили</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Краны-манипуляторы</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автотопливозаправщики</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоцистерны</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автоэвакуаторы</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Бортовые автомобили</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Изотермические фургоны</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контейнеровозы</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Крюковые погрузчики</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автомобили ДОПОГ категория EXII</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Автогидроподъёмники</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                О нас
                            </p>
                            <ul>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>О компании ООО «Рустрак»</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Наши партнёры</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Производство</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Поставщикам и партнёрам</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Отзывы</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сертификаты</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Вакансии</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Кредит и лизинг</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Самосвалы</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-fira-sans font-extrabold text-lg mb-4">
                                Медиа
                            </p>
                            <ul>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Фотогалерея</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Видео</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Рекламные материалы</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-base font-normal">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Информационные материалы</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Сервис</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Ремонт</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Новости</NavLink>
                                </li>
                                <li className="mb-4 font-fira-sans text-[2.2rem] font-bold">
                                    <NavLink to={"/"} className={"hover:text-[#FEC80B] transition duration-300"}>Контакты</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </section>
        </header>
    )
}

