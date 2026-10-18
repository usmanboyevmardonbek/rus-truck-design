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
    ru: /Пищевая цистерна/gi,
    uz: "Oziq-ovqat tsisternasi",
    en: "Food grade tanker",
  },
  {
    ru: /с пищевой цистерной/gi,
    uz: "oziq-ovqat tsisternasi bilan",
    en: "with food grade tanker",
  },
  {
    ru: /Вакуумная автоцистерна/gi,
    uz: "Vakuumli avtotsisterna",
    en: "Vacuum tanker truck",
  },
  {
    ru: /Вакуумная цистерна/gi,
    uz: "Vakuumli tsisterna",
    en: "Vacuum tanker",
  },
  {
    ru: /Вакуумное оборудование/gi,
    uz: "Vakuum uskunalari",
    en: "Vacuum equipment",
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
    ru: /Эвакуатор/gi,
    uz: "Evakuator",
    en: "Tow truck",
  },
  {
    ru: /Эвакуаторы/gi,
    uz: "Evakuatorlar",
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
    ru: /Самосвал-зерновоз/gi,
    uz: "G'alla tashuvchi samosval",
    en: "Grain dump truck",
  },
  {
    ru: /зерновоз/gi,
    uz: "g'alla tashuvchi",
    en: "grain carrier",
  },
  {
    ru: /Самосвал/gi,
    uz: "Samosval",
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
    en: "with articulated platform",
  },
  {
    ru: /с частичной погрузкой/gi,
    uz: "qisman yuklash bilan",
    en: "with partial loading",
  },
  {
    ru: /с двухрядной кабиной/gi,
    uz: "ikki qatorli kabina bilan",
    en: "with double cab",
  },
  {
    ru: /с прямой стрелой/gi,
    uz: "to'g'ri strela bilan",
    en: "with straight boom",
  },
  {
    ru: /с Z-образной стрелой/gi,
    uz: "Z-simon strela bilan",
    en: "with Z-type boom",
  },
  {
    ru: /высокий борт/gi,
    uz: "baland bort",
    en: "high side",
  },
  {
    ru: /двухсекционная/gi,
    uz: "ikki seksiyali",
    en: "two-compartment",
  },
  {
    ru: /трехсекционная|трёхсекционная/gi,
    uz: "uch seksiyali",
    en: "three-compartment",
  },
  {
    ru: /боковина/gi,
    uz: "yon panel",
    en: "side panel",
  },
  {
    ru: /м\.куб|м\. куб|куба/gi,
    uz: "m³",
    en: "m³",
  },
  {
    ru: /с АТЗ/gi,
    uz: "ATZ bilan",
    en: "with ATZ tanker",
  },
  {
    ru: /м3/gi,
    uz: "m³",
    en: "m³",
  },
  {
    ru: /PALFINGER РК/gi,
    uz: "PALFINGER PK",
    en: "PALFINGER PK",
  },
  {
    ru: /ИНМАН ИМ/gi,
    uz: "INMAN IM",
    en: "INMAN IM",
  },
  {
    ru: /ИНМАН/gi,
    uz: "INMAN",
    en: "INMAN",
  },
  {
    ru: /категория EXII|категория EX II|категория EX-II/gi,
    uz: "EXII toifasi",
    en: "Category EXII",
  },
  {
    ru: /ДОПОГ ЕХII|ДОПОГ EXII/gi,
    uz: "DOPOG EXII",
    en: "ADR EXII",
  },
  {
    ru: /категория/gi,
    uz: "toifasi",
    en: "category",
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

export function translateTitle(title, lang) {
  if (!title || typeof title !== "string" || lang === "ru") {
    return title;
  }

  let translated = title;
  for (const item of titlePrefixTranslations) {
    item.ru.lastIndex = 0;
    translated = translated.replace(item.ru, item[lang] || item.en);
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
  "Объем цистерны, л": {
    uz: "Tsisterna hajmi, l",
    en: "Tank volume, l",
  },
  "Полная масса, т": {
    uz: "To'liq massasi, t",
    en: "Gross vehicle weight, t",
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
  "Вместимость, чел.": {
    uz: "Sig'imi, kishi",
    en: "Capacity, pers.",
  },
  "Грузоподъемность люльки, кг": {
    uz: "Lyulka yuk ko'tarishi, kg",
    en: "Basket payload, kg",
  },
  "Тип привода": {
    uz: "Yuritma turi",
    en: "Drive type",
  },
  "Материал цистерны": {
    uz: "Tsisterna materiali",
    en: "Tank material",
  },
  "Количество секций": {
    uz: "Bo'limlar soni",
    en: "Number of compartments",
  },
  "Базовое шасси": {
    uz: "Asosiy shassi",
    en: "Base chassis",
  },
  "КМУ": {
    uz: "KMU (Kran manipulyator)",
    en: "CMU",
  },
  "Модель КМУ": {
    uz: "KMU modeli",
    en: "CMU model",
  },
  "Грузовой момент, т*м": {
    uz: "Yuk momenti, t*m",
    en: "Load moment, t*m",
  },
  "Грузоподъемность на мин. вылете, кг": {
    uz: "Minimal yetishdagi yuk ko'tarishi, kg",
    en: "Capacity at min outreach, kg",
  },
  "Макс. вылет стрелы, м": {
    uz: "Maksimal strela yetishi, m",
    en: "Max boom outreach, m",
  },
  "Максимальная грузоподъемность, кг": {
    uz: "Maksimal yuk ko'tarish qobiliyati, kg",
    en: "Max payload, kg",
  },
  "Максимальный вылет, м": {
    uz: "Maksimal yetish, m",
    en: "Max outreach, m",
  },
  "Длина бортовой платформы, мм": {
    uz: "Bort platformasi uzunligi, mm",
    en: "Flatbed length, mm",
  },
  "Тип платформы": {
    uz: "Platforma turi",
    en: "Platform type",
  },
  "Материал платформы": {
    uz: "Platforma materiali",
    en: "Platform material",
  },
  "Тип стрелы": {
    uz: "Strela turi",
    en: "Boom type",
  },
  "Количество секций стрелы": {
    uz: "Strela seksiyalari soni",
    en: "Boom sections count",
  },
  "Борт": {
    uz: "Bort o'lchamlari",
    en: "Side dimensions",
  },
  "Бортовая платформа": {
    uz: "Bort platformasi",
    en: "Flatbed platform",
  },
};

export function translateSpecLabel(label, lang) {
  if (!label || typeof label !== "string" || lang === "ru") {
    return label;
  }
  const clean = label.trim();
  if (specLabels[clean] && specLabels[clean][lang]) {
    return specLabels[clean][lang];
  }
  // Case-insensitive fallback
  const found = Object.keys(specLabels).find(
    (k) => k.toLowerCase() === clean.toLowerCase()
  );
  if (found && specLabels[found][lang]) {
    return specLabels[found][lang];
  }
  return label;
}

const specValues = {
  "свыше 12": {
    uz: "12 dan yuqori",
    en: "over 12",
  },
  "Прямого типа": {
    uz: "To'g'ri turdagi",
    en: "Direct type",
  },
  "Телескопическая": {
    uz: "Teleskopik",
    en: "Telescopic",
  },
  "Коленчатая": {
    uz: "Tirsakli",
    en: "Articulated",
  },
  "Рычажно-телескопическая": {
    uz: "Richagli-teleskopik",
    en: "Articulated telescopic",
  },
  "Шторный": {
    uz: "Pardali",
    en: "Curtainside",
  },
  "Бортовой": {
    uz: "Bortli",
    en: "Flatbed",
  },
  "Изотермический": {
    uz: "Izotermik",
    en: "Insulated",
  },
  "Промтоварный": {
    uz: "Sanoat mollari uchun",
    en: "Manufactured goods",
  },
  "Самосвал": {
    uz: "Samosval",
    en: "Dump truck",
  },
  "Сталь": {
    uz: "Po'lat",
    en: "Steel",
  },
  "Алюминий": {
    uz: "Alyuminiy",
    en: "Aluminum",
  },
  "Нержавеющая сталь": {
    uz: "Zanglamaydigan po'lat",
    en: "Stainless steel",
  },
  "Механическая": {
    uz: "Mexanik",
    en: "Manual",
  },
  "Автоматическая": {
    uz: "Avtomat",
    en: "Automatic",
  },
  "Дизельный": {
    uz: "Dizel",
    en: "Diesel",
  },
  "Дизельный, 149 л.с.": {
    uz: "Dizel, 149 o.k.",
    en: "Diesel, 149 hp",
  },
  "Механическая, 6-ступенчатая": {
    uz: "Mexanik, 6 bosqichli",
    en: "Manual, 6-speed",
  },
  "Телескопическая 4-секционная": {
    uz: "Teleskopik 4 seksiyali",
    en: "Telescopic 4-section",
  },
  "Стальной профиль Hossen, откидные борта": {
    uz: "Hossen po'lat profili, ochiluvchi bortlar",
    en: "Hossen steel profile, drop sides",
  },
  "Стальная усиленная, 6800x2550x600 мм": {
    uz: "Mustahkamlangan po'lat, 6800x2550x600 mm",
    en: "Reinforced steel, 6800x2550x600 mm",
  },
  "4 секции": {
    uz: "4 seksiya",
    en: "4 sections",
  },
  "Выходной": {
    uz: "Dam olish kuni",
    en: "Day off",
  },
  "В наличии": {
    uz: "Mavjud",
    en: "In stock",
  },
  "Под заказ": {
    uz: "Buyurtma asosida",
    en: "On order",
  },
};

export function translateSpecValue(value, lang) {
  if (!value || typeof value !== "string" || lang === "ru") {
    return value;
  }
  const clean = value.trim();
  if (specValues[clean] && specValues[clean][lang]) {
    return specValues[clean][lang];
  }
  const found = Object.keys(specValues).find(
    (k) => k.toLowerCase() === clean.toLowerCase()
  );
  if (found && specValues[found][lang]) {
    return specValues[found][lang];
  }
  return value;
}

export function translatePrice(price, lang) {
  if (!price || typeof price !== "string") {
    if (lang === "uz") return "Narxi so'rov bo'yicha";
    if (lang === "en") return "Price on request";
    return "Цена по запросу";
  }

  const clean = price.trim();
  if (clean.toLowerCase().includes("цена по запросу")) {
    if (lang === "uz") return "Narxi so'rov bo'yicha";
    if (lang === "en") return "Price on request";
    return "Цена по запросу";
  }

  if (/^от\s+/i.test(clean)) {
    const numPart = clean.replace(/^от\s+/i, "");
    if (lang === "uz") return `${numPart} dan`;
    if (lang === "en") return `from ${numPart}`;
    return `от ${numPart}`;
  }

  return clean;
}
