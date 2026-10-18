import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguageObject, setLanguage, languages } = useLanguage();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLanguage = (langId) => {
    setLanguage(langId);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2.5 bg-white border border-gray-300 hover:border-[#FEC80B] rounded-sm px-3 py-2 cursor-pointer transition-colors shadow-xs select-none min-w-[96px] h-10"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <img
            src={currentLanguageObject.flag}
            alt={currentLanguageObject.code}
            className="w-5 h-3.5 object-cover rounded-[1px] border border-gray-200 shrink-0"
          />
          <span className="font-fira-sans font-bold text-sm text-black uppercase tracking-wide">
            {currentLanguageObject.code}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 stroke-[2.5]" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+4px)] z-50 w-full min-w-[100px] bg-white border border-gray-300 rounded-sm shadow-lg overflow-hidden py-1">
          {languages.map((lang, index) => {
            const isSelected = currentLanguageObject.id === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => handleSelectLanguage(lang.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-left cursor-pointer transition-colors border-b border-gray-200 ${
                  isSelected ? "bg-amber-50/80" : "hover:bg-gray-50"
                }`}
              >
                <img
                  src={lang.flag}
                  alt={lang.code}
                  className="w-5 h-3.5 object-cover rounded-[1px] border border-gray-200 shrink-0"
                />
                <span
                  className={`font-fira-sans text-sm tracking-wide ${
                    isSelected
                      ? "text-black font-extrabold"
                      : "text-gray-800 font-semibold"
                  }`}
                >
                  {lang.code}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
