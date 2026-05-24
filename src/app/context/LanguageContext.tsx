import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "zh-TW" | "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  "zh-TW": {
    home: "首頁",
    health: "健康",
    message: "訊息",
    welcomeBack: "歡迎回來",
    watchVideo: "觀看影片",
    todayFeeling: "今天感覺如何？",
    checkHealth: "查看健康狀態",
    newMessages: "新訊息",
    viewDetails: "查看詳情",
  },
  en: {
    home: "Home",
    health: "Health",
    message: "Message",
    welcomeBack: "Welcome Back",
    watchVideo: "Watch Video",
    todayFeeling: "How are you feeling today?",
    checkHealth: "Check Health Status",
    newMessages: "New Messages",
    viewDetails: "View Details",
  },
  vi: {
    home: "Trang chủ",
    health: "Sức khỏe",
    message: "Tin nhắn",
    welcomeBack: "Chào mừng trở lại",
    watchVideo: "Xem video",
    todayFeeling: "Hôm nay bạn cảm thấy thế nào?",
    checkHealth: "Kiểm tra tình trạng sức khỏe",
    newMessages: "Tin nhắn mới",
    viewDetails: "Xem chi tiết",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh-TW");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
