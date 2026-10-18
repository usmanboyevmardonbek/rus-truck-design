// Dynamic translation utility for vehicle titles, specs, and attributes across RU, UZ, and EN

const titlePrefixTranslations = [
  // Compound expressions first
  {
    ru: /Автомобили ДОПОГ категория EXII/gi,
    uz: "DOPOG EXII toifasidagi avtomobillar",
    en: "ADR Category EXII vehicles",
  },
  {
    ru: /Автомобиль ДОПОГ категория EXII/gi,
    uz: "DOPOG EXII toifasidagi avtomobil",
    en: "ADR Category EXII vehicle",
  },
  {
    ru: /Автомобиль ДОПОГ EXII/gi,
    uz: "DOPOG EXII avtomobili",
    en: "ADR EXII vehicle",
  },
  {
    ru: /Автомобили ДОПОГ/gi,
    uz: "DOPOG avtomobillari",
    en: "ADR vehicles",
  },
  {
    ru: /Шторный грузовик/gi,
    uz: "Pardali yuk mashinasi",
    en: "Curtainside truck",
  },
  {
    ru: /Шторный автомобиль/gi,
    uz: "Pardali avtomobil",
    en: "Curtainside truck",
  },
  {
    ru: /Шторные автомобили/gi,
    uz: "Pardali avtomobillar",
    en: "Curtainside trucks",
  },
  {
    ru: /Кран-манипулятор/gi,
    uz: "Kran-manipulyator",
    en: "Crane manipulator",
  },
  {
    ru: /Краны-манипуляторы/gi,
    uz: "Kran-manipulyatorlar",
    en: "Crane manipulators",
  },
  {
    ru: /Автотопливозаправщик/gi,
    uz: "Yoqilg'i quyuvchi mashina",
    en: "Fuel tanker truck",
  },
  {
    ru: /Автотопливозаправщики/gi,
    uz: "Yoqilg'i quyuvchi mashinalar",
    en: "Fuel tanker trucks",
  },
  {
    ru: /Топливозаправщик/gi,
    uz: "Yoqilg'i quyuvchi",
    en: "Fuel tanker",
  },
  {
    ru: /Автоцистерна/gi,
    uz: "Avtotsisterna",
    en: "Tanker truck",
  },
  {
    ru: /Автоцистерны/gi,
    uz: "Avtotsisternalar",
    en: "Tanker trucks",
  },
  {
    ru: /Автоэвакуатор/gi,
    uz: "Avtoevakuator",
    en: "Tow truck",
  },
  {
    ru: /Автоэвакуаторы/gi,
    uz: "Avtoevakuatorlar",
    en: "Tow trucks",
  },
  {
    ru: /Бортовой автомобиль/gi,
    uz: "Bortli avtomobil",
    en: "Flatbed truck",
  },
  {
    ru: /Бортовые автомобили/gi,
    uz: "Bortli avtomobillar",
    en: "Flatbed trucks",
  },
  {
    ru: /Бортовой грузовик/gi,
    uz: "Bortli yuk mashinasi",
    en: "Flatbed truck",
  },
  {
    ru: /Изотермический фургон/gi,
    uz: "Izotermik furgon",
    en: "Insulated van",
  },
  {
    ru: /Изотермические фургоны/gi,
    uz: "Izotermik furgonlar",
    en: "Insulated vans",
  },
  {
    ru: /Контейнеровоз/gi,
    uz: "Konteyner tashuvchi",
    en: "Container carrier",
  },
  {
    ru: /Контейнеровозы/gi,
    uz: "Konteyner tashuvchilar",
    en: "Container carriers",
  },
  {
    ru: /Крюковой погрузчик/gi,
    uz: "Ilmoqli yuklagich",
    en: "Hook loader",
  },
  {
    ru: /Крюковые погрузчики/gi,
    uz: "Ilmoqli yuklagichlar",
    en: "Hook loaders",
  },
  {
    ru: /Самосвал/gi,
    uz: "Samosval (Ag'darma yuk mashinasi)",
    en: "Dump truck",
  },
  {
    ru: /Самосвалы/gi,
    uz: "Samosvallar",
    en: "Dump trucks",
  },
  {
    ru: /Автогидроподъемник/gi,
    uz: "Avtogidroko'targich",
    en: "Aerial work platform",
  },
  {
    ru: /Автогидроподъёмник/gi,
    uz: "Avtogidroko'targich",
    en: "Aerial work platform",
  },
  {
    ru: /Автогидроподъемники/gi,
    uz: "Avtogidroko'targichlar",
    en: "Aerial work platforms",
  },
  {
    ru: /Автогидроподъёмники/gi,
    uz: "Avtogidroko'targichlar",
    en: "Aerial work platforms",
  },

  // Attributes & modifications
  {
    ru: /со сдвижной платформой/gi,
    uz: "suriluvchi platformali",
    en: "with sliding platform",
  },
  {
    ru: /с ломаной платформой/gi,
    uz: "siniq platformali",
    en: "with broken platform",
  },
  {
    ru: /с частичной погрузкой/gi,
    uz: "qisman yuklash bilan",
    en: "with partial loading",
  },
  {
    ru: /с двухрядной кабиной/gi,
    uz: "ikki qatorli kabinali",
    en: "with double cab",
  },
  {
    ru: /с КМУ/gi,
    uz: "KMU bilan",
    en: "with CMU",
  },
  {
    ru: /модель/gi,
    uz: "modeli",
    en: "model",
  },
  {
    ru: /на шасси/gi,
    uz: "shassisida",
    en: "on chassis",
  },
  {
    ru: /промтоварный/gi,
    uz: "sanoat mollari uchun",
    en: "manufactured goods",
  },
  {
    ru: /европлатформа/gi,
    uz: "yevroplatforma",
    en: "euro platform",
  },
];

function translateTitle(title, lang) {
  if (!title || typeof title !== "string" || lang === "ru") {
    return title;
  }

  let translated = title;
  for (const item of titlePrefixTranslations) {
    if (item.ru.test(translated)) {
      translated = translated.replace(item.ru, item[lang] || item.en);
    }
  }

  return translated;
}

const specLabels = {
  "Марка": {
    uz: "Brend / Marka",
    en: "Brand",
  },
  "Габариты ТС": {
    uz: "O'lchamlari",
    en: "Dimensions",
  },
  "Грузоподъемность, кг": {
    uz: "Yuk ko'tarish qobiliyati, kg",
    en: "Payload, kg",
  },
  "Грузоподъемность": {
    uz: "Yuk ko'tarish qobiliyati",
    en: "Payload",
  },
  "Длина платформы": {
    uz: "Platforma uzunligi",
    en: "Platform length",
  },
  "Длина платформы, мм": {
    uz: "Platforma uzunligi, mm",
    en: "Platform length, mm",
  },
  "Объем цистерны, м³": {
    uz: "Tsisterna hajmi, m³",
    en: "Tank volume, m³",
  },
  "Объем цистерны": {
    uz: "Tsisterna hajmi",
    en: "Tank volume",
  },
  "Высота подъема, м": {
    uz: "Ko'tarish balandligi, m",
    en: "Lifting height, m",
  },
  "Высота подъема": {
    uz: "Ko'tarish balandligi",
    en: "Lifting height",
  },
  "Вылет стрелы, м": {
    uz: "Strelaning yetishi, m",
    en: "Boom outreach, m",
  },
  "Вылет стрелы": {
    uz: "Strelaning yetishi",
    en: "Boom outreach",
  },
  "Колесная формула": {
    uz: "G'ildirak formulasi",
    en: "Wheel formula",
  },
  "Двигатель": {
    uz: "Dvigatel",
    en: "Engine",
  },
  "Мощность, л.с.": {
    uz: "Quvvati, o.k.",
    en: "Power, hp",
  },
  "Мощность": {
    uz: "Quvvati",
    en: "Power",
  },
  "КПП": {
    uz: "Uzatish qutisi (КПП)",
    en: "Gearbox",
  },
  "Вместимость": {
    uz: "Sig'imi",
    en: "Capacity",
  },
  "Материал цистерны": {
    uz: "Tsisterna materiali",
    en: "Tank material",
  },
  "Количество секций": {
    uz: "Bo'limlar soni",
    en: "Number of sections",
  },
  "Базовое шасси": {
    uz: "Baza shassi",
    en: "Base chassis",
  },
  "Тип платформы": {
    uz: "Platforma turi",
    en: "Platform type",
  },
  "Тип фургона": {
    uz: "Furgon turi",
    en: "Van type",
  },
  "Толщина стенок": {
    uz: "Devorlar qalinligi",
    en: "Wall thickness",
  },
  "Объем кузова": {
    uz: "Kuzov hajmi",
    en: "Body volume",
  },
  "Грузовой момент": {
    uz: "Yuk momenti",
    en: "Load moment",
  },
};

function translateSpecLabel(label, lang) {
  if (!label || lang === "ru") return label;
  const match = specLabels[label.trim()];
  if (match && match[lang]) {
    return match[lang];
  }
  return label;
}

function translateSpecValue(value, lang) {
  if (!value || typeof value !== "string" || lang === "ru") return value;
  if (value === "Цена по запросу") {
    return lang === "uz" ? "Narxi so'rov bo'yicha" : "Price on request";
  }
  return value;
}

module.exports = { translateTitle, translateSpecLabel, translateSpecValue };