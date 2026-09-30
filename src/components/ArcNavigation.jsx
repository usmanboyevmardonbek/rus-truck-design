import { useState, useEffect, useRef } from "react";
import { UserCog, FileCog, Clock, ShieldCheck, Wrench } from "lucide-react";

const MENU_DATA = [
  {
    id: "kb",
    title: "Конструкторское бюро",
    text: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиента.",
    icon: <UserCog size={52} strokeWidth={1.4} className="text-neutral-900" />,
    coords: { top: "7.7%", left: "70.6%" },
  },
  {
    id: "dev",
    title: "Разработка",
    text: "Все проекты разработаны согласно мануал кузовостроителей.",
    icon: <FileCog size={52} strokeWidth={1.4} className="text-neutral-900" />,
    coords: { top: "28%", left: "93.6%" },
  },
  {
    id: "prod",
    title: "Производственная база",
    text: "Собственная производственная база позволяет максимально снизить себестоимость продукции, повышая её конкурентоспособность.",
    icon: <Clock size={52} strokeWidth={1.4} className="text-neutral-900" />,
    coords: { top: "50%", left: "99.5%" },
  },
  {
    id: "warranty",
    title: "Гарантия",
    text: "Предоставляем официальную гарантию на всю производимую технику.",
    icon: <ShieldCheck size={52} strokeWidth={1.4} className="text-neutral-900" />,
    coords: { top: "81%", left: "89.2%" },
  },
  {
    id: "service",
    title: "Сервис",
    text: "Круглосуточная сервисная поддержка и оперативная поставка запчастей.",
    icon: <Wrench size={52} strokeWidth={1.4} className="text-neutral-900" />,
    coords: { top: "92.5%", left: "76.6%" },
  },
];

export default function ArcNavigation() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Desktop pinned scroll uchun
  const [scrollProgress, setScrollProgress] = useState(0); // Progress bar o'sishi uchun
  const [activeMobileId, setActiveMobileId] = useState("kb"); // Mobile intersection observer uchun

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerTop = rect.top + scrollTop;
    const windowHeight = window.innerHeight;
    const maxScroll = containerRef.current.offsetHeight - windowHeight;
    if (maxScroll > 0) {
      const targetProgress = (index + 0.15) / MENU_DATA.length;
      const targetScroll = containerTop + targetProgress * maxScroll;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Desktop Scroll Pinning Logic
  useEffect(() => {
    const handleScroll = () => {
      // Faqat desktop uchun ishlaydi
      if (window.innerWidth < 768 || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const { top, height } = rect;
      const windowHeight = window.innerHeight;

      const maxScroll = height - windowHeight;
      if (maxScroll <= 0) return;

      const scrollDistance = -top;
      let progress = scrollDistance / maxScroll;

      // Progress 0 dan 1 gacha chegaralanadi
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const numItems = MENU_DATA.length;
      let newIndex = Math.floor(progress * numItems);
      if (newIndex >= numItems) newIndex = numItems - 1;

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Mobile Intersection Observer Logic
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("mobile-content-", "");
          setActiveMobileId(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    MENU_DATA.forEach((item) => {
      const el = document.getElementById(`mobile-content-${item.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative hidden md:block font-fira-sans bg-white"
        style={{ height: `${MENU_DATA.length * 100 + 20}vh` }}
      >
        <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden w-full">
          <div className="mx-auto max-w-6xl w-full px-6 flex items-center justify-between">
            {/* Left side: Circular truck illustration with arc navigation */}
            <div className="relative aspect-square w-[520px] max-w-full flex items-center justify-center shrink-0">
              <img
                src="/logo/benefits.png"
                alt="Truck Illustration"
                className="w-full h-full object-contain pointer-events-none select-none z-10"
                draggable={false}
              />

              <nav className="absolute inset-0 z-20 pointer-events-none">
                {MENU_DATA.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className="absolute flex items-center -translate-y-1/2 -translate-x-[10px] bg-none border-none p-0 whitespace-nowrap group text-left cursor-pointer pointer-events-auto transition-transform duration-200"
                      style={{ top: item.coords.top, left: item.coords.left }}
                      onClick={() => handleDotClick(index)}
                    >
                      <span
                        className={`w-5 h-5 rounded-full border-2 border-[#ffd000] mr-3 shrink-0 transition-colors duration-300 ${
                          isActive ? "bg-[#ffd000]" : "bg-white"
                        }`}
                      />
                      <span
                        className={`text-[15px] font-fira-sans transition-colors duration-300 ${
                          isActive
                            ? "text-neutral-900 font-semibold"
                            : "text-neutral-400 group-hover:text-neutral-600 font-normal"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Right side: Vertical progress bar + Icon & Description text */}
            <div className="relative w-[380px] h-[440px] flex items-center pl-10 lg:pl-14 shrink-0">
              {/* Vertical scroll progress bar */}
              <div
                className="absolute left-0 top-0 w-[3px] bg-[#ffd000] transition-all duration-150 rounded-full"
                style={{
                  height: `${Math.max(16, scrollProgress * 100)}%`,
                }}
              />

              <div className="relative w-full h-full">
                {MENU_DATA.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={item.id}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-full transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <div className="mb-6">{item.icon}</div>
                      <p className="text-[17px] font-fira-sans font-medium text-neutral-900 leading-[1.65] max-w-[340px]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobil versiyasi */}
      <div className="flex flex-col gap-6 md:hidden my-10 font-fira-sans px-4">
        <div className="top-0 bg-white/90 backdrop-blur-sm z-40 py-4 border-b border-neutral-100 flex justify-center">
          <img
            src="/logo/benefits.png"
            alt="Truck"
            className="w-full max-w-[260px] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-5 py-6">
          {MENU_DATA.map((item) => {
            const isActive = activeMobileId === item.id;
            return (
              <div
                key={item.id}
                id={`mobile-content-${item.id}`}
                className={`p-6 border-l-4 transition-all duration-300 rounded-r-xl scroll-mt-24 ${
                  isActive
                    ? "border-[#ffd000] bg-yellow-50/50 shadow-sm"
                    : "border-neutral-200 bg-neutral-50/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-neutral-800">{item.icon}</span>
                  <h4 className="font-bold text-neutral-800 text-lg">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
