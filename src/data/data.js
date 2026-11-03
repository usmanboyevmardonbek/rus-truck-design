export const categories = [
  {
    id: 1,
    slug: "shtornye-avtomobili",
    title: {
      uz: "Tentli yuk mashinalar",
      ru: "Шторные автомобили",
      en: "Curtainsider trucks",
    },
    img: "/categories/cat-1.webp",
  },
  {
    id: 2,
    slug: "krany-manipulyatory",
    title: {
      uz: "Kran-manipulyatorlar",
      ru: "Краны-манипуляторы",
      en: "Crane manipulators",
    },
    img: "/categories/cat-2.webp",
  },
  {
    id: 3,
    slug: "avtotoplivozapravshchiki",
    title: {
      uz: "Avtoyoqilg‘i quyish mashinalari",
      ru: "Автотопливозаправщики",
      en: "Fuel tankers",
    },
    img: "/categories/cat-3.webp",
  },
  {
    id: 4,
    slug: "avtogidropodyomniki",
    title: {
      uz: "Avtogidropodyomniklar",
      ru: "Автогидроподъёмники",
      en: "Aerial work platforms",
    },
    img: "/categories/cat-4.webp",
  },
  {
    id: 5,
    slug: "avtotsisterny",
    title: {
      uz: "Avtotsisternalar",
      ru: "Автоцистерны",
      en: "Tank trucks",
    },
    img: "/categories/cat-5.webp",
  },
  {
    id: 6,
    slug: "avtoevakuatory",
    title: {
      uz: "Avtoevakuatorlar",
      ru: "Автоэвакуаторы",
      en: "Tow trucks",
    },
    img: "/categories/cat-6.webp",
  },
  {
    id: 7,
    slug: "bortovye-avtomobili",
    title: {
      uz: "Bortli yuk mashinalar",
      ru: "Бортовые автомобили",
      en: "Flatbed trucks",
    },
    img: "/categories/cat-7.webp",
  },
  {
    id: 8,
    slug: "izotermicheskie-furgony",
    title: {
      uz: "Izotermik furgonlar",
      ru: "Изотермические фургоны",
      en: "Isothermal vans",
    },
    img: "/categories/cat-8.webp",
  },
  {
    id: 9,
    slug: "konteynerovozy",
    title: {
      uz: "Konteyner tashuvchilar",
      ru: "Контейнеровозы",
      en: "Container trucks",
    },
    img: "/categories/cat-9.webp",
  },
  {
    id: 10,
    slug: "kryukovye-pogruzchiki",
    title: {
      uz: "Ilmoqli yuklagichlar",
      ru: "Крюковые погрузчики",
      en: "Hook loaders",
    },
    img: "/categories/cat-10.webp",
  },
  {
    id: 11,
    slug: "samosvaly",
    title: {
      uz: "Samosvallar",
      ru: "Самосвалы",
      en: "Dump trucks",
    },
    img: "/categories/cat-11.webp",
  },
  {
    id: 12,
    slug: "avtomobili-dopog-exii",
    title: {
      uz: "DOPOG EXII toifadagi avtomobillar",
      ru: "Автомобили ДОПОГ категория EXII",
      en: "ADR EXII category vehicles",
    },
    img: "/categories/cat-12.webp",
  },
];

export const brands = [];

export const products = [
  {
    id: 1,
    categoryId: 1,
    slug: "shtornyy-gruzovik-maz-438121",
    title: "Шторный грузовик МАЗ 438121 (модель 5389D5)",
    img: "/gruz-1.jpg",
    specs: [
      { label: "Марка", value: "МАЗ" },
      { label: "Габариты ТС", value: "5300 x 2000 x 2000 мм" },
      { label: "Грузоподъемность, кг", value: "4300" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 2,
    categoryId: 1,
    slug: "shtornyy-gruzovik-maz-631228",
    title: "Шторный грузовик МАЗ 631228-524-010 (модель 4389M2)",
    img: "/gruz-2.jpg",
    specs: [
      { label: "Марка", value: "МАЗ" },
      { label: "Габариты ТС", value: "6500 x 2200 x 2400 мм" },
      { label: "Грузоподъемность, кг", value: "6800" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 3,
    categoryId: 1,
    slug: "shtornyy-gruzovik-kamaz-4308",
    title: "Шторный грузовик КАМАЗ 4308",
    img: "/gruz-3.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "6000 x 2100 x 2300 мм" },
      { label: "Грузоподъемность, кг", value: "5500" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 4,
    categoryId: 1,
    slug: "shtornyy-gruzovik-kamaz-65657",
    title: "Шторный грузовик КАМАЗ 65657",
    img: "/gruz-4.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "7200 x 2400 x 2500 мм" },
      { label: "Грузоподъемность, кг", value: "10500" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 5,
    categoryId: 1,
    slug: "shtornyy-gruzovik-kompas-5",
    title: "Шторный грузовик КОМПАС 5",
    img: "/gruz-5.jpg",
    specs: [
      { label: "Марка", value: "КОМПАС" },
      { label: "Габариты ТС", value: "4800 x 1900 x 2000 мм" },
      { label: "Грузоподъемность, кг", value: "3200" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 6,
    categoryId: 1,
    slug: "shtornyy-gruzovik-kamaz-65117",
    title: "Шторный грузовик КАМАЗ 65117 (модель 4388F3)",
    img: "/gruz-6.jpg",
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Габариты ТС", value: "8100 x 2500 x 2600 мм" },
      { label: "Грузоподъемность, кг", value: "14000" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 7,
    categoryId: 2,
    slug: "evakuator-kamaz-4308-palfinger-pk-13500t",
    img: "/evakuator-1.jpg",
    title: "Эвакуатор на шасси КАМАЗ 4308 с КМУ PALFINGER PK 13500T",
    price: "Цена по запросу",
    outOfStock: false,
    specs: [
      { label: "Марка", value: "КАМАЗ" },
      { label: "Тип платформы", value: "Прямого типа" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Длина платформы", value: "4800 мм" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
  {
    id: 8,
    categoryId: 2,
    slug: "evakuator-isuzu-fsr-34ul-palfinger",
    img: "/evakuator-2.jpg",
    title: "Эвакуатор на шасси ISUZU FSR-34UL-NCUN с КМУ PALFINGER PK 13500T",
    price: "Цена по запросу",
    outOfStock: true,
    specs: [
      { label: "Марка", value: "ISUZU" },
      { label: "Тип платформы", value: "Прямого типа" },
      { label: "Колесная формула", value: "4x2" },
      { label: "Длина платформы", value: "4800 мм" },
    ],
    price: 657000,
    suffix: {
      uz: "rub",
      en: "RUR",
      ru: "руб",
    },
  },
];
