import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { categoryArticlesData } from "../data/categoryArticlesData";

export default function CategoryArticle({ category }) {
  const { lang, currentLang } = useLanguage();
  const activeLang = currentLang || lang || "ru";

  const data = categoryArticlesData[category] || categoryArticlesData["shtornye"];
  const content = data[activeLang] || data["ru"];

  if (!content) return null;

  const defaultBrandsLabel = activeLang === "uz" ? "Brendlar:" : activeLang === "en" ? "Brands:" : "Марки:";

  return (
    <div className="mt-12 text-gray-800 font-fira-sans leading-relaxed">
      {/* Intro Paragraph */}
      {content.intro && (
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          {content.intro}
        </p>
      )}

      {/* Assortment Section */}
      {content.assortmentTitle && (
        <h2 className="text-xl sm:text-2xl font-medium mt-6 mb-3 text-black">
          {content.assortmentTitle}
        </h2>
      )}
      {content.assortmentText && (
        <p className="text-base sm:text-lg mb-4 leading-relaxed">
          {content.assortmentText}
        </p>
      )}

      {/* Brands List */}
      {content.brands && content.brands.length > 0 && (
        <div className="mb-6">
          <p className="text-base sm:text-lg font-medium mb-3">
            {content.brandsLabel || defaultBrandsLabel}
          </p>
          <ul className="space-y-2.5">
            {content.brands.map((brand, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="romb inline-block shrink-0"></span>
                <span className="text-base sm:text-lg">{brand}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Features Section */}
      {content.featuresTitle && (
        <h2 className="text-xl sm:text-2xl font-medium mt-8 mb-4 text-black">
          {content.featuresTitle}
        </h2>
      )}
      {content.features && content.features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {content.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="romb inline-block mt-2 shrink-0"></span>
              <p className="text-base sm:text-lg leading-relaxed">{feat}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Applications Section */}
      {content.applicationsTitle && (
        <h2 className="text-xl sm:text-2xl font-medium mt-8 mb-3 text-black">
          {content.applicationsTitle}
        </h2>
      )}
      {content.applicationsText && (
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          {content.applicationsText}
        </p>
      )}

      {/* Advantages Section */}
      {content.advantagesTitle && (
        <h2 className="text-xl sm:text-2xl font-medium mt-8 mb-4 text-black">
          {content.advantagesTitle}
        </h2>
      )}
      {content.advantages && content.advantages.length > 0 && (
        <ul className="space-y-3 mb-6">
          {content.advantages.map((adv, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="romb inline-block mt-2 shrink-0"></span>
              <p className="text-base sm:text-lg leading-relaxed">{adv}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Conclusion Section */}
      {content.conclusionTitle && (
        <h2 className="text-xl sm:text-2xl font-medium mt-8 mb-3 text-black">
          {content.conclusionTitle}
        </h2>
      )}
      {content.conclusionText && (
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          {content.conclusionText}
        </p>
      )}
    </div>
  );
}
