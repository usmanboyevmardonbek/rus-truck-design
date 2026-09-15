import React from 'react'

const Feedback = () => {
  return (
    <>
    <section className="feedback-section bg-[#F2F2F2] relative overflow-hidden px-10 pb-8">
        <div className="container">
          <div className="flex gap-20  pt-10">
            <div className="fed-1">
              <h2 className="font-fira-sans font-medium lg:text-[42px] text-2xl lg:text-left text-center">
                ОСТАЛИСЬ ВОПРОСЫ?
              </h2>
              <p className="font-fira-sans font-normal lg:text-lg text-base lg:text-left text-center">
                Оставьте свои контактные данные, и мы перезвоним Вам в <br />{" "}
                ближайшее время
              </p>

              <div className="form-wrap mt-5">
                <form action="">
                  <div className="flex lg:flex-row flex-col gap-2">
                    <div>
                      <label
                        htmlFor="feedback-name"
                        className="font-fira-sans font-medium text-sm"
                      >
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        placeholder="Иван"
                        id="feedback-name"
                        className="border border-black lg:w-11/12 px-3 py-3 rounded-xs font-fira-sans text-lg bg-transparent w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="feedback-name"
                        className="font-fira-sans font-medium text-sm"
                      >
                        Телефон *
                      </label>
                      <input
                        type="text"
                        placeholder="+7"
                        id="feedback-name"
                        className="border border-black lg:w-11/12 px-3 py-3 rounded-xs font-fira-sans text-lg bg-transparent w-full "
                      />
                    </div>
                    <div className="flex items-center mt-3">
                      <button className="bg-[#FEC80B] mt-2 px-8 py-3 rounded-xl cursor-pointer hover:bg-[#ffd43a] transition duration-300 w-full">
                        <p className="font-normal font-fira-sans text-base">
                          Отправить
                        </p>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-5 font-fira-sans font-normal text-sm text-gray-400 sm:text-center">
                  Нажимая на кнопку отправить{" "}
                  <a href="#">
                    Вы соглашаетесь на обработку персональных данных{" "}
                  </a>
                </p>
              </div>
            </div>

            <div className="md:hidden lg:block hidden">
              <img
                src="/feedback-truck.webp"
                alt=""
                className="absolute  max-w-none w-1/2 top-0 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feedback