import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Download, Trash2, Heart, CheckCircle2 } from "lucide-react";
import { PhoneModal } from "../components/PhoneModal";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Cart() {
  const { t } = useLanguage();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    toggleFavorite,
    isInFavorites,
  } = useCart();
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(
        t(
          "fillRequiredFields",
          "Пожалуйста, заполните обязательные поля (Имя и Телефон)",
        ),
      );
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", agree: true });
    }, 4000);
  };

  return (
    <>
      <main className="bg-white min-h-[60vh] pb-12">
        <div className="container mx-auto px-4 pt-6">
          {/* Breadcrumbs */}
          <ul className="flex items-center gap-2 mb-6">
            <li className="font-fira-sans text-gray-400 text-sm hover:text-black cursor-pointer">
              <NavLink to="/">{t("home", "Главная")}</NavLink>
            </li>
            <li className="text-gray-400 text-sm">/</li>
            <li className="font-fira-sans text-gray-400 text-sm">
              {t("cart", "Корзина")}
            </li>
          </ul>

          {cartItems.length === 0 ? (
            /* Empty State */
            <div className="pb-16 pt-2">
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black mb-6">
                {t("cart", "Корзина")}
              </h1>
              <div className="space-y-1 mb-8">
                <p className="font-fira-sans text-base text-black">
                  {t("cartEmptyTitle", "Ваша корзина пуста.")}
                </p>
                <p className="font-fira-sans text-base text-black">
                  {t(
                    "cartEmptyDesc",
                    "Воспользуйтесь каталогом или поиском, чтобы найти подходящий товар.",
                  )}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <NavLink
                  to="/"
                  className="border border-[#e2e2e2] hover:border-black font-fira-sans text-sm font-medium px-6 py-2.5 rounded-sm transition-colors text-black"
                >
                  {t("toHome", "На главную")}
                </NavLink>
                <NavLink
                  to="/catalog"
                  className="bg-[#FEC80B] hover:bg-[#ffd43a] font-fira-sans text-sm font-medium px-6 py-2.5 rounded-sm transition-colors text-black"
                >
                  {t("openCatalog", "Открыть каталог")}
                </NavLink>
              </div>
            </div>
          ) : (
            /* Populated Cart */
            <div>
              <h1 className="font-fira-sans font-bold text-3xl md:text-4xl text-black mb-8">
                {t("cart", "Корзина")}
              </h1>

              {/* Items Table / List */}
              <div className="border-t border-gray-200 divide-y divide-gray-200 mb-14">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.page}`}
                    className="py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                  >
                    {/* Left: Image & Specs */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                      {/* Image Thumbnail */}
                      <div className="relative w-full sm:w-44 h-32 bg-gray-100 rounded-sm overflow-hidden shrink-0">
                        <img
                          src={
                            item.img
                              ? item.img.startsWith("/")
                                ? item.img
                                : `/${item.img}`
                              : "/furgon-1.jpg"
                          }
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/furgon-1.jpg";
                          }}
                        />
                        <button
                          onClick={() => toggleFavorite(item)}
                          className={`absolute top-2 right-2 transition-colors cursor-pointer p-1 rounded-full ${
                            isInFavorites(item.id, item.page)
                              ? "text-red-500 bg-white/80"
                              : "text-gray-400 hover:text-black bg-white/80"
                          }`}
                          title={
                            isInFavorites(item.id, item.page)
                              ? t("removeFromFavorites", "Убрать из избранного")
                              : t("addToFavorites", "В избранное")
                          }
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isInFavorites(item.id, item.page)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Title & Specs */}
                      <div className="flex-1 w-full max-w-xl">
                        <h3 className="font-fira-sans font-medium text-base text-black mb-3">
                          {item.title}
                        </h3>

                        {/* Specs with Dotted Leaders */}
                        <div className="space-y-1.5 text-xs font-fira-sans text-gray-500">
                          <div className="flex items-baseline">
                            <span className="shrink-0">
                              {t("vehicleDimensions", "Габариты ТС")}
                            </span>
                            <span className="flex-1 mx-2 border-b border-dotted border-gray-400"></span>
                            <span className="shrink-0 text-gray-800">
                              {item.dimensions || "10405 х 2550 х 3080 мм"}
                            </span>
                          </div>
                          <div className="flex items-baseline">
                            <span className="shrink-0">
                              {t("capacity", "Грузоподъёмность")}
                            </span>
                            <span className="flex-1 mx-2 border-b border-dotted border-gray-400"></span>
                            <span className="shrink-0 text-gray-800">
                              {item.capacity || "21600 кг"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Quantity Counter */}
                    <div className="flex items-center border border-gray-300 rounded-xs overflow-hidden bg-white shrink-0 self-start sm:self-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.page, item.quantity - 1)
                        }
                        className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-sm font-semibold select-none"
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 text-sm font-fira-sans text-center min-w-9 border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.page, item.quantity + 1)
                        }
                        className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-sm font-semibold select-none"
                      >
                        +
                      </button>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col items-center sm:items-end gap-3 shrink-0 w-full sm:w-auto">
                      <button className="w-full sm:w-48 bg-[#FEC80B] hover:bg-[#ffd43a] text-black font-fira-sans text-sm font-medium py-2.5 px-6 rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors">
                        <span>{t("getKp", "Получить КП")}</span>
                        <Download className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id, item.page)}
                        className="flex items-center gap-1.5 text-gray-400 hover:text-black font-fira-sans text-xs transition-colors cursor-pointer"
                      >
                        <span>{t("delete", "Удалить")}</span>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Checkout & Questions Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pt-6 pb-16">
                {/* Left: Order Form */}
                <div>
                  <h2 className="font-fira-sans font-bold text-2xl md:text-3xl text-black mb-6">
                    {t("checkoutOrder", "Оформить заказ")}
                  </h2>

                  {isSubmitted ? (
                    <div className="bg-yellow-50 border border-[#FEC80B] p-6 rounded-sm text-center">
                      <CheckCircle2 className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                      <h3 className="font-fira-sans font-bold text-lg mb-1">
                        {t("orderSuccessTitle", "Спасибо! Ваш заказ принят.")}
                      </h3>
                      <p className="font-fira-sans text-sm text-gray-600">
                        {t(
                          "orderSuccessDesc",
                          "Наш менеджер свяжется с вами в ближайшее время.",
                        )}
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmitOrder}
                      className="space-y-4 max-w-md"
                    >
                      <div>
                        <label className="block font-fira-sans text-sm font-medium mb-1">
                          {t("modalName", "Ваше имя *")}
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Иван"
                          className="w-full border border-gray-300 rounded-xs p-3 text-sm font-fira-sans outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-fira-sans text-sm font-medium mb-1">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@mail.com"
                          className="w-full border border-gray-300 rounded-xs p-3 text-sm font-fira-sans outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-fira-sans text-sm font-medium mb-1">
                          {t("modalPhone", "Телефон *")}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 / +998"
                          className="w-full border border-gray-300 rounded-xs p-3 text-sm font-fira-sans outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div className="pt-1">
                        <label className="flex items-center gap-2 text-xs text-gray-600 font-fira-sans cursor-pointer">
                          <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                            className="accent-[#FEC80B] w-4 h-4 rounded cursor-pointer"
                          />
                          <span>
                            {t(
                              "modalAgree",
                              "Даю согласие на обработку персональных данных",
                            )}
                          </span>
                        </label>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="bg-[#FEC80B] hover:bg-[#ffd43a] text-black font-fira-sans text-sm font-semibold py-3 px-10 rounded-xs transition-colors cursor-pointer w-full sm:w-auto"
                        >
                          {t("checkoutOrder", "Оформить заказ")}
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Right: Remaining Questions */}
                <div>
                  <h3 className="font-fira-sans font-bold text-2xl text-black mb-2">
                    {t("haveQuestions", "Остались вопросы?")}
                  </h3>
                  <p className="font-fira-sans text-sm text-gray-500 mb-6 max-w-sm">
                    {t(
                      "haveQuestionsDesc",
                      "Свяжитесь с нашим менеджером или оставьте заявку на обратный звонок",
                    )}
                  </p>

                  <div className="space-y-1.5 mb-6 text-sm font-fira-sans text-gray-600">
                    <p>
                      {t("forRegions", "Для регионов:")}{" "}
                      <a
                        href="tel:88007777210"
                        className="text-black font-medium hover:underline"
                      >
                        8 (800) 77-77-210
                      </a>
                    </p>
                    <p>
                      {t("nizhnyNovgorod", "Нижний Новгород:")}{" "}
                      <a
                        href="tel:88312250055"
                        className="text-black font-medium hover:underline"
                      >
                        8 (831) 225-00-55
                      </a>
                    </p>
                  </div>

                  <button
                    onClick={() => setIsPhoneModalOpen(true)}
                    className="border border-black hover:bg-black hover:text-white transition-colors text-black font-fira-sans text-sm font-medium py-2.5 px-8 rounded-xs cursor-pointer"
                  >
                    {t("orderCall", "Заказать звонок")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
      />
    </>
  );
}
