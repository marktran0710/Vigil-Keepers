import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Language = "zh-TW" | "en";

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
    healthReports: "健康報告",
    deviceManagement: "設備管理",
    mediaUpload: "回憶上傳",
    welcomeBack: "歡迎回來",
    watchVideo: "觀看指南",
    todayFeeling: "今天感覺如何？",
    checkHealth: "查看今日健康狀態",
    newMessages: "閱讀家人更新",
    dashboard: "家屬儀表板",
    dailyHealthStatus: "每日健康狀態",
    pointBalance: "照護點數餘額",
    heartRate: "心率",
    bloodPressure: "血壓",
    steps: "步數",
    uploadPhoto: "上傳照片",
    uploadVideo: "上傳影片",
    recentMedia: "近期回憶",
    socialInnovation: "高齡照護服務",
    elderlyCare: "為長者與家庭提供實用照護支援",
    businessModel: "讓日常照護更容易協調的服務",
    step1: "每日健康確認",
    step1Desc: "簡單流程協助長者回報狀態，讓家人安心掌握。",
    step2: "家屬協調",
    step2Desc: "照護更新、提醒與訊息讓家庭成員保持一致。",
    step3: "照護服務支援",
    step3Desc: "連結實際照護服務與補助流程。",
    learnMore: "了解服務",
    viewDetails: "查看詳情",
    upload: "上傳",
    manage: "管理",
  },
  en: {
    home: "Home",
    health: "Health",
    message: "Message",
    healthReports: "Health Reports",
    deviceManagement: "Device Management",
    mediaUpload: "Memory Upload",
    welcomeBack: "Welcome back",
    watchVideo: "Watch guide",
    todayFeeling: "How are you feeling today?",
    checkHealth: "Check today's wellness status",
    newMessages: "Read family updates",
    dashboard: "Family dashboard",
    dailyHealthStatus: "Daily health status",
    pointBalance: "Care credit balance",
    heartRate: "Heart rate",
    bloodPressure: "Blood pressure",
    steps: "Steps",
    uploadPhoto: "Upload photo",
    uploadVideo: "Upload video",
    recentMedia: "Recent memories",
    socialInnovation: "Elder support services",
    elderlyCare: "Practical care support for elders and families",
    businessModel: "Coordinated services that make daily care easier",
    step1: "Daily wellness check-ins",
    step1Desc: "Simple routines help elders report how they feel and stay visible to family.",
    step2: "Family coordination",
    step2Desc: "Care updates, reminders, and messages keep everyone aligned.",
    step3: "Care service support",
    step3Desc: "Connect families with practical care services and subsidy workflows.",
    learnMore: "Explore services",
    viewDetails: "View details",
    upload: "Upload",
    manage: "Manage",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh-TW");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => translations[language][key] || key,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
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
