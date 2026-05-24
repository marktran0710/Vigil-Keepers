import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      {(["zh-TW", "en", "vi"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-4 py-2 rounded font-medium transition ${
            language === lang
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {lang === "zh-TW" ? "中文" : lang === "en" ? "English" : "Tiếng Việt"}
        </button>
      ))}
    </div>
  );
}
