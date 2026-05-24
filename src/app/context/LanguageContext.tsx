import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh-TW' | 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  'zh-TW': {
    // Navigation
    home: '首頁',
    health: '健康',
    message: '訊息',
    healthReports: '健康報告',
    deviceManagement: '裝置管理',
    mediaUpload: '記憶/媒體上傳',
    
    // Elder Page
    welcomeBack: '歡迎回來',
    watchVideo: '觀看影片',
    todayFeeling: '今天感覺如何？',
    checkHealth: '查看健康狀態',
    newMessages: '新訊息',
    
    // Family Dashboard
    dashboard: '監測儀表板',
    dailyHealthStatus: '每日健康狀態',
    pointBalance: '點數餘額',
    heartRate: '心率',
    bloodPressure: '血壓',
    steps: '步數',
    uploadPhoto: '上傳照片',
    uploadVideo: '上傳影片',
    recentMedia: '最近的媒體',
    
    // Presentation
    socialInnovation: '社會創新企業',
    elderlyCare: '長者照護解決方案',
    businessModel: '商業模式：捐血換照護補助',
    step1: '步驟 1：民眾捐血',
    step1Desc: '透過捐血獲得愛心點數',
    step2: '步驟 2：點數轉換',
    step2Desc: '將點數轉換為照護服務',
    step3: '步驟 3：長者受惠',
    step3Desc: '提供優質照護服務',
    learnMore: '了解更多',
    
    // Common
    viewDetails: '查看詳情',
    upload: '上傳',
    manage: '管理',
  },
  'en': {
    // Navigation
    home: 'Home',
    health: 'Health',
    message: 'Message',
    healthReports: 'Health Reports',
    deviceManagement: 'Device Management',
    mediaUpload: 'Memory/Media Upload',
    
    // Elder Page
    welcomeBack: 'Welcome Back',
    watchVideo: 'Watch Video',
    todayFeeling: 'How are you feeling today?',
    checkHealth: 'Check Health Status',
    newMessages: 'New Messages',
    
    // Family Dashboard
    dashboard: 'Dashboard',
    dailyHealthStatus: 'Daily Health Status',
    pointBalance: 'Point Balance',
    heartRate: 'Heart Rate',
    bloodPressure: 'Blood Pressure',
    steps: 'Steps',
    uploadPhoto: 'Upload Photo',
    uploadVideo: 'Upload Video',
    recentMedia: 'Recent Media',
    
    // Presentation
    socialInnovation: 'Social Innovation',
    elderlyCare: 'Elderly Care Solution',
    businessModel: 'Business Model: Blood Donation to Care Subsidy',
    step1: 'Step 1: Blood Donation',
    step1Desc: 'Earn care points through blood donation',
    step2: 'Step 2: Points Conversion',
    step2Desc: 'Convert points to care services',
    step3: 'Step 3: Elder Benefits',
    step3Desc: 'Receive quality care services',
    learnMore: 'Learn More',
    
    // Common
    viewDetails: 'View Details',
    upload: 'Upload',
    manage: 'Manage',
  },
  'vi': {
    // Navigation
    home: 'Trang chủ',
    health: 'Sức khỏe',
    message: 'Tin nhắn',
    healthReports: 'Báo cáo sức khỏe',
    deviceManagement: 'Quản lý thiết bị',
    mediaUpload: 'Tải lên ký ức/phương tiện',
    
    // Elder Page
    welcomeBack: 'Chào mừng trở lại',
    watchVideo: 'Xem video',
    todayFeeling: 'Hôm nay bạn cảm thấy thế nào?',
    checkHealth: 'Kiểm tra tình trạng sức khỏe',
    newMessages: 'Tin nhắn mới',
    
    // Family Dashboard
    dashboard: 'Bảng điều khiển',
    dailyHealthStatus: 'Tình trạng sức khỏe hàng ngày',
    pointBalance: 'Số dư điểm',
    heartRate: 'Nhịp tim',
    bloodPressure: 'Huyết áp',
    steps: 'Bước chân',
    uploadPhoto: 'Tải lên ảnh',
    uploadVideo: 'Tải lên video',
    recentMedia: 'Phương tiện gần đây',
    
    // Presentation
    socialInnovation: 'Đổi mới xã hội',
    elderlyCare: 'Giải pháp chăm sóc người cao tuổi',
    businessModel: 'Mô hình kinh doanh: Hiến máu để nhận trợ cấp chăm sóc',
    step1: 'Bước 1: Hiến máu',
    step1Desc: 'Kiếm điểm chăm sóc thông qua hiến máu',
    step2: 'Bước 2: Chuyển đổi điểm',
    step2Desc: 'Chuyển đổi điểm thành dịch vụ chăm sóc',
    step3: 'Bước 3: Lợi ích cho người cao tuổi',
    step3Desc: 'Nhận dịch vụ chăm sóc chất lượng',
    learnMore: 'Tìm hiểu thêm',
    
    // Common
    viewDetails: 'Xem chi tiết',
    upload: 'Tải lên',
    manage: 'Quản lý',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

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
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
