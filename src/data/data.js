export const categories = [
  {
    id: 1,
    slug: "shtornie-gruzoviki",
    title: {
      uz: "Tentli yuk mashinalar",
      ru: "Шторные автомобили",
      en: "Шторные автомобили",
    },
    img: "/categories/cat-1.webp",
  },
  {
    id: 2,
    slug: "avtoevakuatory",
    title: {
      uz: "Avto evakuatori",
      ru: "Автоэвакуаторы",
      en: "Автоэвакуаторы",
    },
    img: "/categories/cat-2.webp",
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
  },
];
