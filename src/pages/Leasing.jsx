import { motion } from "motion/react";
import { fadeUp } from "../utils/animation";
import { Header } from "../components/Header";
import Footer from "../components/footer";
import Feedback from "../components/Feedback";

const Leasing = () => {
  return (
    <>
      <Header />
      <div>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
          <ul className="flex items-center gap-2">
            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Главная</a>
            </li>
            <li className="text-gray-500">
              <span>/</span>
            </li>

            <li className="font-fira-sans text-gray-500 text-sm">
              <a href="/">Кредит и лизинг</a>
            </li>
          </ul>

          <div className="title-1">
            <h1 className="text-3xl mb-6 font-fira-sans font-medium mt-3">
              Кредит и лизинг на автоспецтехнику компании РусТрак
            </h1>
            <p className="font-fira-sans text-lg max-w-200">
              Компания Рустрак предоставляет возможность покупки автоспецтехники
              в кредит и в лизинг. Мы работаем со всеми банками и лизинговыми
              компаниями. Помните, Вы можете выбрать любую лизинговую компанию,
              которая Вас устроит.
            </p>
          </div>

          <div className="title-2 mt-10">
            <h3 className="text-2xl mb-6 font-fira-sans font-medium mt-3">
              Основные условия лизинга
            </h3>
            <p className="font-fira-sans text-lg max-w-200">
              Сумма аванса 5-30% от стоимости техники. Удорожание объекта
              лизинга в год на 8-9% Срок выплаты лизинговых платежей от 6-ти
              месяцев до 5-ти лет. После полного расчёта по лизингу техника
              переходит в собственность Вашей фирмы.
            </p>
          </div>

          <div className="title-2 mt-10">
            <h3 className="text-2xl mb-6 font-fira-sans font-medium mt-3">
              Преимущества лизинговых схем:
            </h3>
            <p className="font-fira-sans text-lg max-w-200">
              Максимальная отсрочка платежа. Ускоренная амортизация: участники
              лизинговой сделки имеют право применять механизм ускоренной
              амортизации предмета лизинга с коэффициентом ускорения до 3, что
              позволяет быстрее окупить технику, варьировать длительность
              лизингового договора. Налоговая оптимизация: все платежи,
              производимые по договору лизинга, относятся на себестоимость
              продукции, тем самым, уменьшая налогооблагаемую базу по налогу на
              прибыль. Экономия средств лизингополучателя в результате
              отсутствия необходимости уплаты налога на имущество, т.к. предмет
              лизинга в большинстве случаев находится на балансе лизинговой
              компании. Возможность приобрести и использовать имущество, не
              отвлекая при этом собственные средства предприятия единовременно и
              в полном объёме. Возможность приобретения в собственность предмета
              лизинга, полностью освобожденного от налоговой нагрузки, по
              истечению срока договора лизинга. Самостоятельный выбор предмета
              лизинга и его продавца лизингополучателем.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-6 font-fira-sans font-medium mt-10">
              Три основных вида лизинга:
            </h3>

            <ul className="pl-9">
              <li className="flex gap-5">
                <span className="font-fira-sans bg-[#FEC80B] font-medium w-10 h-10 text-2xl flex justify-center items-center rounded-full">
                  1
                </span>
                <p className="font-fira-sans text-lg max-w-200">
                  <span className="font-medium">Финансовый лизинг</span> <br />{" "}
                  Лизингодатель (лизинговая компания) приобретает в
                  собственность указанное лизингополучателем имущество у
                  определённого продавца и передаёт лизингополучателю это
                  имущество в качестве предмета лизинга на определённых условиях
                  во временное владение и пользование. Имущество (предмет
                  лизинга) переходит в собственность лизингополучателя при
                  условии выплаты лизингополучателем всех лизинговых платежей.
                </p>
              </li>

              <li className="flex gap-5 mt-10">
                <span className="font-fira-sans bg-[#FEC80B] font-medium w-10 h-10 text-2xl flex justify-center items-center rounded-full">
                  2
                </span>
                <p className="font-fira-sans text-lg max-w-200">
                  <span className="font-medium">Оперативный лизинг</span> <br />{" "}
                  Имущество не выкупается лизингополучателем, а остаётся в
                  собственности лизинговой компании и после окончания срока
                  действия договора лизинга ещё раз передаётся в лизинг или
                  аренду.
                </p>
              </li>

              <li className="flex gap-5 mt-10 mb-10">
                <span className="font-fira-sans bg-[#FEC80B] font-medium w-10 h-10 text-2xl flex justify-center items-center rounded-full">
                  3
                </span>
                <p className="font-fira-sans text-lg max-w-200">
                  <span className="font-medium">Возвратный лизинг</span> <br />{" "}
                  Предприятие покупает имущество на собственные средства, а
                  затем обращается в лизинговую компанию. Это один из способов
                  достаточно быстро вернуть оборотные средства. Лизинговая
                  компания рассматривает имущество как предмет лизинга и
                  приобретает его по договору купли-продажи у предприятия. Это
                  же имущество передается в лизинг этому же предприятию.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-fira-sans font-medium mb-8">Информация о партнёре - компания "CARCADE"</h3>
            <p className="font-fira-sans text-lg">
              Компания CARCADE – это универсальный лизинговый партнёр. CARCADE
              финансирует покупку как легковых автомобилей, так и коммерческого
              транспорта. Оформить коммерческие автомобили или спецтехнику в
              лизинг можно без предоставления финансовой отчётности по 2
              документам. Условия оформления сделки: аванс от 4% до 50%, срок
              лизинга от 12 до 60 месяцев, последний платёж от 1% до 15%.
              Дополнительная выгода клиентов CARCADE: каско в рассрочку,
              бесплатная цессия, электронный документооборот.
            </p>
            <p className="font-fira-sans text-lg">
              За получением более подробной информации по спецтехники и
              приобретению в лизинг обращайтесь по телефону:{" "}
              <a href="8 (831) 225-00-55">8 (831) 225-00-55</a>
            </p>
          </div>
        </motion.div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Leasing;
