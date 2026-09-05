import { ChevronDown } from 'lucide-react';
import React, { useRef, useState } from 'react';
const Footer = () => {
  const [footerTime, setFooterTime] = useState(false)
  const [mediaTime, setMediaTime] = useState(false)

  function openMediaDropdown() {
    setMediaTime(!mediaTime)
  }



  function openFooterDropdown() {
    setFooterTime(!footerTime)
  }


  return (
    <>
      <footer className='bg-black'>
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center grid-cols-1">
            <div className="flex flex-col">
              <p className='text-amber-50 font-fira-sans font-medium text-base pt-15'>Тел/факс:
                <a href="tel:88312250055">
                  8 (831) 225-00-55
                </a>
              </p>

              <p className='text-amber-50 font-fira-sans font-medium text-base mt-1'>
                Email: <a href="#">info@rtrf.ru</a>
              </p>

              <p className='text-amber-50 font-fira-sans font-medium text-base mt-1'>

                г. Нижний Новгород ул. Торфяная, 35

              </p>

              <div>
                <button className='bg-[#FEC80B] mt-2 px-8 py-3 rounded-xl cursor-pointer hover:bg-[#ffd43a] transition duration-300'>
                  <p className='font-normal font-fira-sans text-base'>Заказать звонок</p>
                </button>
              </div>
              <img src="/footer-uchun.svg" alt="" className='w-45 mt-10' />
            </div>

            <div className='flex gap-5 items-center sm:flex-row sm:items-start mt-5'>
              <div className="double-wrap-1 relative">
                <button onClick={openFooterDropdown} className='flex items-center gap-2 cursor-pointer'>
                  <p className='text-amber-50 font-fira-sans font-medium text-base mt-1 mb-2 lg:hidden'>
                    О нас
                  </p>
                  <ChevronDown className={`text-[#ffffff] mb-2  ${footerTime ? "rotate-180" : ""} lg:hidden`} />
                </button>

                <ul className={!footerTime ? "flex gap-20  lg:static overflow-hidden  transition-all duration-500 ease-in h-0 flex-col lg:flex-row" : "flex gap-2  lg:static h-133 flex-col lg:flex-row transition-all ease-in duration-500 lg:overflow-visible"}>
                  <div className="flex flex-col gap-3 mr-20 text-light-gray">

                    <li className='text-white font-fira-sans'>
                      <a href="#">О компании ООО «Рустрак»</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Новости</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Наши партнёры</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Производство</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Поставщикам и партнёрам</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Отзывы</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Сертификаты</a>
                    </li>
                  </div>

                  <div className="flex flex-col gap-3 mr-20 ">
                    <li className='text-white font-fira-sans'>
                      <a href="#">Вакансии</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Кредит и лизинг</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Сервис</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Ремонт</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Контакты</a>
                    </li>
                    <li className='text-white font-fira-sans'>
                      <a href="#">Полезные статьи</a>
                    </li>
                  </div>
                </ul>





              </div>

              

              <div>
                <button onClick={openMediaDropdown} className='flex gap-2 cursor-pointer'>
                  <p className='text-amber-50 font-fira-sans font-medium text-base mt-1 mb-5 lg:hidden'>
                    Медиа

                  </p>
                  <ChevronDown className={`text-white ${mediaTime ? "rotate-180" : ""} lg:hidden`} />
                </button>

                <ul className={!mediaTime ? "overflow-hidden transition-all duration-700 ease-in h-0" : "overflow-hidden transition-all duration-500 ease-in-out h-133 lg:h-0 "}>
                  <li className='text-amber-50 font-fira-sans font-medium text-base mt-1'>
                    <a href="#">Фотогалерея</a>
                  </li>
                  <li className='text-amber-50 font-fira-sans font-medium text-base mt-1'>
                    <a href="#">Видео</a>
                  </li>
                  <li className='text-amber-50 font-fira-sans font-medium text-base mt-1'>
                    <a href="#">Рекламные материалы</a>
                  </li>
                </ul>
              </div>

            <div className="flex">
              <div>
              <button>
                <p>

                  О нас
                </p>
              </button>
              <ul className='flex flex-col text-white font-fira-sans text-xl font-normal'>
                <li>
                  <a href="#">О компании ООО «Рустрак»</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Наши партнёры</a>
                </li>
                <li>
                  <a href="#">Производство</a>
                </li>
                <li>
                  <a href="#">Поставщикам и партнёрам</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
                <li>
                  <a href="#">Сертификаты</a>
                </li>
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <li>
                  <a href="#">Кредит и лизинг</a>
                </li>
                <li>
                  <a href="#">Сервис</a>
                </li>
                <li>
                  <a href="#">Ремонт</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Полезные статьи</a>
                </li>
              </ul>
            </div>
            </div>

            </div>
          </div>


          <div className="grid grid-cols-2 mt-10 sm:grid-cols-1 gap-5  items-center">


            <div>
              <ul className='flex gap-3 items-center'>
                <li>
                  <a href="#">
                    <img src="/max.svg" alt="max" className='w-7' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/telegram.svg" alt="telegram" className='w-7' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/vk.svg" alt="vk" className='w-7' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/rutube.png" alt="rutube" className='w-7' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/youtube.png" alt="youtube" className='w-7' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/yandex.png" alt="yandex" className='w-7' />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-fira-sans text-[#ffffff]'>
                2009 - 2026 © Rus - Trucks
              </p>
              <p className='font-fira-sans text-[#ffffff] mt-2'>

                Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.

              </p>
            </div>

          </div>


          
        </div>
      </footer>
    </>
  )
}

export default Footer;