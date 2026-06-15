import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Language = "zh-TW" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  "zh-TW": {
    // nav
    elderPortal: "長輩介面",
    familyPortal: "家屬介面",
    admin: "管理員",
    // hero
    heroTag: "桃竹苗地區長照社會創新 NPO",
    heroTitle: "用捐血守護長輩，讓善行成為長照保障",
    heroDesc: "Vigil Keepers 結合捐血點數與居家照護設備，讓您的每一次捐血轉化為家中長輩的安全守護與溫暖陪伴。",
    elderEntry: "長輩入口",
    familyDashboard: "家屬管理介面",
    // stats
    statsAreaValue: "桃竹苗",
    statsAreaLabel: "服務區域",
    statsDeviceValue: "1 台",
    statsDeviceLabel: "整合式照護設備",
    statsPrivacyValue: "100%",
    statsPrivacyLabel: "家屬同意才開放查看",
    statsDiscountValue: "0 元",
    statsDiscountLabel: "捐血達標即享折扣",
    // services
    servicesTitle: "我們提供什麼",
    servicesSubtitle: "三項核心服務，讓長照更有溫度、更有保障。",
    s1Title: "居家安全監測",
    s1Desc: "整合健康監測、行動偵測與緊急警報，讓家屬即時掌握長輩的居家狀況，有事立即通知。",
    s2Title: "捐血點數兌換",
    s2Desc: "每次捐血可累積點數，用於折抵照護設備租賃費用。善心捐血直接轉化為自身或家人的長照保障。",
    s3Title: "數位遺產保存",
    s3Desc: "設備自動播放家屬上傳的影片與照片，減少長輩被遺忘感。家屬也可委託後製，留存珍貴回憶。",
    // steps
    stepsTitle: "服務流程",
    stepsSubtitle: "從捐血到守護長輩，四個簡單步驟。",
    step1Title: "前往捐血",
    step1Desc: "至新竹捐血中心（桃竹苗地區）完成捐血。",
    step2Title: "累積點數",
    step2Desc: "捐血次數由我方轉換為照護點數。",
    step3Title: "申請設備",
    step3Desc: "以點數折抵設備租賃或買斷費用。",
    step4Title: "居家守護",
    step4Desc: "設備安裝到位，長輩安全即時回報家屬。",
    // partners
    partnersTitle: "關鍵合作夥伴",
    partnersSubtitle: "與專業機構協力，共同實現長照社會創新。",
    p1Name: "新竹捐血中心",
    p1Note: "台灣血液基金會 · 桃竹苗地區",
    p2Name: "國立中央大學",
    p2Note: "機械／電機／資工系 · 設備研發",
    p3Name: "法律與公證顧問",
    p3Note: "契約保障 · 資料合規",
    p4Name: "Google／Amazon",
    p4Note: "雲端算力與安全儲存支援",
    // commitments
    commitTitle: "我們對您的承諾",
    commitDesc: "這項服務涉及長輩的隱私與家屬的安心，我們以透明與尊重為首要原則。",
    c1: "價格透明，無隱藏費用",
    c2: "高隱私性，家屬同意才開放查看",
    c3: "設備操作簡易，適合長輩使用",
    c4: "家屬可自行上傳內容，增進互動",
    // footer
    footerDesc: "桃竹苗長照社會創新 NPO，結合捐血點數、居家照護設備與數位遺產服務，讓善行成為家人最好的長照保障。",
    footerCopy: "© 2025 Vigil Keepers · 守護者計畫 · 非營利組織",
    address: "桃園市中壢區中大路 300 號",
    // pages
    home: "首頁",
    health: "健康",
    message: "訊息",
    healthReports: "健康報告",
    deviceManagement: "設備管理",
    mediaUpload: "回憶上傳",
    welcomeBack: "歡迎回來",
    watchVideo: "觀看導覽",
    todayFeeling: "今天感覺如何？",
    checkHealth: "查看今日健康狀況",
    newMessages: "閱讀家人動態",
    dashboard: "家屬儀表板",
    dailyHealthStatus: "每日健康狀況",
    pointBalance: "照護點數餘額",
    heartRate: "心率",
    bloodPressure: "血壓",
    steps: "步數",
    uploadPhoto: "上傳照片",
    uploadVideo: "上傳影片",
    recentMedia: "近期回憶",
    socialInnovation: "長輩照護服務",
    elderlyCare: "為長輩與家屬提供實際的照護支援",
    businessModel: "讓日常照護更輕鬆的協調服務",
    step1: "每日健康回報",
    step1Old: "簡單的日常流程幫助長輩回報狀況，讓家屬隨時掌握。",
    step2: "家屬協調",
    step2Old: "照護更新、提醒與訊息讓所有人保持同步。",
    step3: "照護服務支援",
    step3Old: "連結家屬與實際照護服務及補助申請流程。",
    learnMore: "探索服務",
    viewDetails: "查看詳情",
    upload: "上傳",
    manage: "管理",
  },
  en: {
    // nav
    elderPortal: "Elder View",
    familyPortal: "Family View",
    admin: "Admin",
    // hero
    heroTag: "NPO for Elder Care Innovation · Taoyuan Region",
    heroTitle: "Donate Blood to Protect Elders, Turn Kindness into Care",
    heroDesc: "Vigil Keepers links blood donation points with home care devices, turning every donation into safety monitoring and warm companionship for your loved ones.",
    elderEntry: "Elder Portal",
    familyDashboard: "Family Dashboard",
    // stats
    statsAreaValue: "Taoyuan",
    statsAreaLabel: "Service Region",
    statsDeviceValue: "1 Unit",
    statsDeviceLabel: "Integrated Care Device",
    statsPrivacyValue: "100%",
    statsPrivacyLabel: "Consent required to view",
    statsDiscountValue: "Free",
    statsDiscountLabel: "Device discount via blood donation",
    // services
    servicesTitle: "What We Offer",
    servicesSubtitle: "Three core services to make elder care warmer and more secure.",
    s1Title: "Home Safety Monitoring",
    s1Desc: "Integrated health monitoring, motion detection and emergency alerts so family members can track elders' safety at home in real time.",
    s2Title: "Blood Donation Points",
    s2Desc: "Earn points with every blood donation and redeem them against device rental fees — turning altruism directly into long-term care support.",
    s3Title: "Digital Legacy",
    s3Desc: "The device auto-plays photos and videos uploaded by family, reducing elders' sense of isolation. Custom editing also available.",
    // steps
    stepsTitle: "How It Works",
    stepsSubtitle: "Four simple steps from blood donation to elder care.",
    step1Title: "Donate Blood",
    step1Desc: "Visit the Hsinchu Blood Donation Center serving the Taoyuan region.",
    step2Title: "Earn Points",
    step2Desc: "We convert your donation count into care points.",
    step3Title: "Apply for Device",
    step3Desc: "Use points to offset device rental or purchase costs.",
    step4Title: "Home Protection",
    step4Desc: "Device installed — elder safety reported to family in real time.",
    // partners
    partnersTitle: "Key Partners",
    partnersSubtitle: "Collaborating with trusted institutions to drive elder care innovation.",
    p1Name: "Hsinchu Blood Center",
    p1Note: "Taiwan Blood Services Foundation · Taoyuan Region",
    p2Name: "National Central University",
    p2Note: "ME / EE / CS Departments · Device R&D",
    p3Name: "Legal & Notary Advisors",
    p3Note: "Contract protection · Data compliance",
    p4Name: "Google / Amazon",
    p4Note: "Cloud computing and secure storage",
    // commitments
    commitTitle: "Our Commitments to You",
    commitDesc: "This service handles elders' privacy and family peace of mind — transparency and respect are our foundation.",
    c1: "Transparent pricing, no hidden fees",
    c2: "High privacy: family consent required to view content",
    c3: "Easy-to-use device suitable for elderly users",
    c4: "Family can upload content anytime to enhance interaction",
    // footer
    footerDesc: "NPO for elder care innovation in the Taoyuan region, combining blood donation points, home care devices, and digital legacy services.",
    footerCopy: "© 2025 Vigil Keepers · Guardian Program · Non-Profit Organization",
    address: "No. 300, Zhongda Rd., Zhongli District, Taoyuan City",
    // pages
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
    step1Old: "Simple routines help elders report how they feel and stay visible to family.",
    step2: "Family coordination",
    step2Old: "Care updates, reminders, and messages keep everyone aligned.",
    step3: "Care service support",
    step3Old: "Connect families with practical care services and subsidy workflows.",
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
