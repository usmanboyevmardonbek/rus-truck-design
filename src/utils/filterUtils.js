// Helper to detect brand from product
export const getProductBrand = (p) => {
  if (!p) return "";
  const spec = p.specs?.find(s => s.label === "Марка")?.value;
  if (spec) return spec;
  const t = (p.title || "").toUpperCase();
  const slug = (p.slug || "").toLowerCase();
  
  if (t.includes("КАМАЗ") || slug.includes("kamaz")) return "КАМАЗ";
  if (t.includes("КОМПАС") || slug.includes("kompas")) return "КОМПАС";
  if (t.includes("МАЗ") || slug.includes("maz")) return "МАЗ";
  if (t.includes("JAC") || slug.includes("jac")) return "JAC";
  if (t.includes("DAEWOO") || slug.includes("daewoo")) return "DAEWOO";
  if (t.includes("FOTON") || slug.includes("foton")) return "FOTON";
  if (t.includes("DONG FENG") || t.includes("DONGFENG") || slug.includes("dong-feng")) return "DONG FENG";
  if (t.includes("ВАЛДАЙ") || slug.includes("valday") || slug.includes("valdaj")) return "Валдай";
  if (t.includes("ГАЗ") || t.includes("САДКО") || slug.includes("gaz") || slug.includes("sadko")) return "ГАЗ";
  if (t.includes("SOLLERS") || slug.includes("sollers")) return "SOLLERS";
  if (t.includes("YANSHI") || t.includes("YANGAI") || slug.includes("yanshi")) return "YANSHI";
  if (t.includes("ISUZU") || slug.includes("isuzu")) return "ISUZU";
  if (t.includes("HYUNDAI") || t.includes("HD-78") || slug.includes("hd-78") || slug.includes("hyundai")) return "Hyundai";
  if (t.includes("SHACMAN") || slug.includes("shacman")) return "SHACMAN";
  if (t.includes("HINO") || slug.includes("hino")) return "HINO";
  if (t.includes("УРАЛ") || slug.includes("ural")) return "УРАЛ";
  if (t.includes("FAW") || slug.includes("faw")) return "FAW";
  return "";
};

// Check if product matches selected brands
export const matchesBrand = (p, selectedBrands) => {
  if (!selectedBrands || selectedBrands.length === 0) return true;
  const pBrand = getProductBrand(p).toUpperCase();
  const title = (p.title || "").toUpperCase();
  const slug = (p.slug || "").toLowerCase();
  
  return selectedBrands.some(brand => {
    const b = brand.toUpperCase();
    if (pBrand === b) return true;
    if (title.includes(b)) return true;
    
    // Synonyms & Aliases
    if (b === "КАМАЗ" && (title.includes("КОМПАС") || slug.includes("kompas"))) return true;
    if (b === "КОМПАС" && (title.includes("КОМПАС") || slug.includes("kompas"))) return true;
    if (b === "ГАЗ" && (title.includes("САДКО") || title.includes("ГАЗОН") || title.includes("ВАЛДАЙ"))) return true;
    if (b === "ВАЛДАЙ" && (title.includes("ВАЛДАЙ") || slug.includes("valda"))) return true;
    if ((b === "YANSHI" || b === "YANGAI") && (title.includes("YANSHI") || title.includes("YANGAI") || slug.includes("yanshi"))) return true;
    if (b === "HYUNDAI" && (title.includes("HYUNDAI") || title.includes("HD-78"))) return true;
    if ((b === "DONG FENG" || b === "DONGFENG") && (title.includes("DONG FENG") || title.includes("DONGFENG"))) return true;
    return false;
  });
};

// Check if product matches formula (e.g. 4x2, 6x4)
export const matchesFormula = (p, selectedFormulas) => {
  if (!selectedFormulas || selectedFormulas.length === 0) return true;
  const specFormula = p.specs?.find(s => s.label === "Колесная формула")?.value;
  const title = (p.title || "").toLowerCase();
  const slug = (p.slug || "").toLowerCase();
  
  return selectedFormulas.some(formula => {
    const f = formula.toLowerCase();
    if (specFormula && specFormula.toLowerCase().includes(f)) return true;
    if (title.includes(f)) return true;
    
    // Known models formula mapping
    if (f === "6x4") {
      if (title.includes("65115") || title.includes("6520") || title.includes("giga") || slug.includes("65115") || slug.includes("6520") || slug.includes("giga")) return true;
    }
    if (f === "4x2") {
      if (title.includes("c41r") || title.includes("компас 9") || title.includes("n90") || title.includes("elf") || title.includes("forward") || title.includes("4308") || title.includes("p180t") || title.includes("hd-78") || title.includes("nmr")) return true;
    }
    return false;
  });
};

// Check if product matches type (e.g. Пищевая, Вакуумная, Прямого типа)
export const matchesType = (p, selectedTypes) => {
  if (!selectedTypes || selectedTypes.length === 0) return true;
  const title = (p.title || "").toLowerCase();
  return selectedTypes.some(type => {
    const t = type.toLowerCase();
    if (t.includes("пищев") && title.includes("пищев")) return true;
    if (t.includes("вакуумн") && (title.includes("вакуумн") || title.includes("ко-523"))) return true;
    if (t.includes("прямог") && (title.includes("эвакуатор") || title.includes("платформ"))) return true;
    return title.includes(t);
  });
};

// Check if product matches length
export const matchesLength = (p, selectedLengths) => {
  if (!selectedLengths || selectedLengths.length === 0) return true;
  const title = (p.title || "").toLowerCase();
  const slug = (p.slug || "").toLowerCase();
  return selectedLengths.some(len => {
    if (len.includes("6200") && (title.includes("43082") || title.includes("43089") || title.includes("n120") || title.includes("n90"))) return true;
    if ((len.includes("6700") || len.includes("7400") || len.includes("7500")) && (title.includes("631228") || title.includes("компас"))) return true;
    if (len === "4800" && (slug.includes("4308") || slug.includes("isuzu"))) return true;
    return title.includes(len);
  });
};
