import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Language = "zh-TW" | "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  "zh-TW": {
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
  vi: {
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
  const [language, setLanguage] = useState<Language>("en");

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
