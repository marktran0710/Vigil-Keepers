import React from "react";
import {
  ArrowRight,
  Bell,
  Building2,
  Camera,
  CheckCircle2,
  Cloud,
  Coins,
  Cpu,
  Database,
  FileCheck2,
  HeartPulse,
  HandHeart,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Scale,
  ShieldCheck,
  Smartphone,
  Watch,
  Wifi,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ThreeBackground } from "../components/ThreeBackground";
import { BrandLogo } from "../components/BrandLogo";
import { Language, useLanguage } from "../context/LanguageContext";

type LocalizedText = {
  en: string;
  "zh-TW": string;
  vi?: string;
};

const text = (value: LocalizedText, language: Language) =>
  value[language] || value.en;

const serviceCards = [
  {
    icon: ShieldCheck,
    title: {
      en: "Final dignity planning",
      "zh-TW": "善終尊嚴規劃",
    },
    copy: {
      en: "Register religious preferences, funeral wishes, burial choices, and support needs before a crisis happens.",
      "zh-TW": "在危機發生前，預先登記宗教信仰、告別方式、葬法選擇與支援需求。",
    },
    tone: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: Database,
    title: {
      en: "Case tracking and reporting",
      "zh-TW": "案件追蹤與通報",
    },
    copy: {
      en: "Connect registrations, case progress, government notifications, and care records in one traceable workflow.",
      "zh-TW": "整合登記、案件進度、政府通報與照護紀錄，形成可追蹤的處理流程。",
    },
    tone: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: Coins,
    title: {
      en: "Social contribution points",
      "zh-TW": "社會貢獻點數",
    },
    copy: {
      en: "Reward blood donation, organ donation intent, and volunteering with points for healthcare or funeral support.",
      "zh-TW": "透過捐血、器官捐贈意願與志工服務累積點數，用於醫療或身後事支援。",
    },
    tone: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];

const trustStats = [
  [{ en: "1 plan", "zh-TW": "一份規劃" }, { en: "for final wishes", "zh-TW": "承載人生最後意願" }],
  [{ en: "4 sectors", "zh-TW": "四方協作" }, { en: "government, medical, legal, funeral", "zh-TW": "政府、醫療、法律、禮儀" }],
  [{ en: "100%", "zh-TW": "全流程" }, { en: "traceable case progress", "zh-TW": "案件進度可追蹤" }],
  [{ en: "1 place", "zh-TW": "一個平台" }, { en: "for memorial and records", "zh-TW": "保存紀錄與數位紀念" }],
];

const visualStories = [
  {
    icon: Building2,
    eyebrow: { en: "Service network", "zh-TW": "服務網絡" },
    title: {
      en: "One coordinated path across public and care partners",
      "zh-TW": "串連公部門與照護夥伴的一條協作路徑",
    },
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "Government, hospital, legal, funeral, and community partners work from the same case record.",
      "zh-TW": "政府、醫院、法律、禮儀與社區夥伴共用同一份案件紀錄。",
    },
    chips: [
      { en: "Government", "zh-TW": "政府" },
      { en: "Hospital", "zh-TW": "醫院" },
      { en: "Legal", "zh-TW": "法律" },
      { en: "Funeral", "zh-TW": "禮儀" },
      { en: "Community", "zh-TW": "社區" },
    ],
  },
  {
    icon: FileCheck2,
    eyebrow: { en: "Digital tools", "zh-TW": "數位工具" },
    title: {
      en: "Final wishes become a clear, traceable care record",
      "zh-TW": "將最後意願轉化為清楚可追蹤的照護紀錄",
    },
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "Registration, LINE reminders, case progress, and digital memorials stay connected.",
      "zh-TW": "登記資料、LINE 提醒、案件進度與數位墓碑彼此串接。",
    },
    chips: [
      { en: "Register", "zh-TW": "登記" },
      { en: "Notify", "zh-TW": "通知" },
      { en: "Track", "zh-TW": "追蹤" },
      { en: "Remember", "zh-TW": "紀念" },
    ],
  },
  {
    icon: HandHeart,
    eyebrow: { en: "Human value", "zh-TW": "人的價值" },
    title: {
      en: "Less fear, more dignity, and fewer people left unseen",
      "zh-TW": "減少孤獨死恐懼，讓每個人被看見並保有尊嚴",
    },
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "The service supports people without reliable family care and families under financial pressure.",
      "zh-TW": "服務支持缺乏家屬照顧者，也協助經濟壓力較大的家庭。",
    },
    chips: [
      { en: "Dignity", "zh-TW": "尊嚴" },
      { en: "Belonging", "zh-TW": "陪伴" },
      { en: "Support", "zh-TW": "支援" },
      { en: "Relief", "zh-TW": "安心" },
    ],
  },
  {
    icon: HeartPulse,
    eyebrow: { en: "Contribution points", "zh-TW": "貢獻點數" },
    title: {
      en: "Donation and volunteering become practical future support",
      "zh-TW": "讓捐血與志願服務成為未來實際支援",
    },
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "Blood donation, organ donation intent, and volunteering can translate into care or funeral support.",
      "zh-TW": "捐血、器官捐贈意願與志工服務，可轉化為照護或身後事支援。",
    },
    chips: [
      { en: "Donate", "zh-TW": "捐血" },
      { en: "Volunteer", "zh-TW": "志工" },
      { en: "Earn", "zh-TW": "累積" },
      { en: "Use", "zh-TW": "使用" },
    ],
  },
  {
    icon: Scale,
    eyebrow: { en: "Trust layer", "zh-TW": "信任機制" },
    title: {
      en: "Consent, pricing, and progress stay visible",
      "zh-TW": "同意、價格與進度全程透明",
    },
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "Legal records, transparent quotes, partner verification, and audit trails protect every case.",
      "zh-TW": "法律紀錄、透明報價、合作夥伴驗證與稽核軌跡守護每一個案件。",
    },
    chips: [
      { en: "Consent", "zh-TW": "同意" },
      { en: "Pricing", "zh-TW": "報價" },
      { en: "Audit", "zh-TW": "稽核" },
      { en: "Verification", "zh-TW": "驗證" },
    ],
  },
  {
    icon: Megaphone,
    eyebrow: { en: "Community access", "zh-TW": "社區接觸" },
    title: {
      en: "Meet elders where planning conversations already happen",
      "zh-TW": "在長者熟悉的生活場域開始未雨綢繆的對話",
    },
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "Healthcare sites, markets, community centers, LINE, and social channels make the concept approachable.",
      "zh-TW": "透過醫療院所、市場、社區中心、LINE 與社群平台，讓觀念更容易被理解。",
    },
    chips: [
      { en: "LINE", "zh-TW": "LINE" },
      { en: "Clinics", "zh-TW": "診所" },
      { en: "Markets", "zh-TW": "市場" },
      { en: "Community", "zh-TW": "社區" },
    ],
  },
  {
    icon: Landmark,
    eyebrow: { en: "Sustainability", "zh-TW": "永續支持" },
    title: {
      en: "Shared payment paths keep service costs realistic",
      "zh-TW": "以多方分擔讓服務成本更可負擔",
    },
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: {
      en: "Personal contribution, public subsidy, partner discounts, and institutional payments can work together.",
      "zh-TW": "本人負擔、政府補助、合作折扣與機構支付可共同支撐服務運作。",
    },
    chips: [
      { en: "Subsidy", "zh-TW": "補助" },
      { en: "Partner", "zh-TW": "合作" },
      { en: "Family", "zh-TW": "家庭" },
      { en: "Public", "zh-TW": "公部門" },
    ],
  },
];

const journeySteps = [
  {
    icon: FileCheck2,
    label: { en: "Plan", "zh-TW": "規劃" },
  },
  {
    icon: Database,
    label: { en: "Record", "zh-TW": "建檔" },
  },
  {
    icon: Building2,
    label: { en: "Coordinate", "zh-TW": "協調" },
  },
  {
    icon: Coins,
    label: { en: "Support", "zh-TW": "支援" },
  },
  {
    icon: ShieldCheck,
    label: { en: "Remember", "zh-TW": "紀念" },
  },
];

const machineFlow = [
  {
    icon: Watch,
    label: { en: "Wearables", "zh-TW": "穿戴裝置" },
    detail: { en: "Vitals, sleep, SOS", "zh-TW": "生命徵象、睡眠、SOS" },
  },
  {
    icon: Wifi,
    label: { en: "Home unit", "zh-TW": "居家主機" },
    detail: { en: "BLE, Wi-Fi, edge gateway", "zh-TW": "藍牙、Wi-Fi、邊緣閘道" },
  },
  {
    icon: Cpu,
    label: { en: "AI analysis", "zh-TW": "AI 分析" },
    detail: { en: "Fall and anomaly detection", "zh-TW": "跌倒與異常偵測" },
  },
  {
    icon: Cloud,
    label: { en: "Cloud platform", "zh-TW": "雲端平台" },
    detail: { en: "Secure data and rules", "zh-TW": "安全資料與規則引擎" },
  },
  {
    icon: Bell,
    label: { en: "Family alerts", "zh-TW": "家屬通知" },
    detail: { en: "LINE, SMS, app, call", "zh-TW": "LINE、簡訊、App、電話" },
  },
];

const additionalValues = [
  { en: "Consent-first", "zh-TW": "同意優先" },
  { en: "Audit trails", "zh-TW": "稽核軌跡" },
  { en: "Grief support", "zh-TW": "悲傷支持" },
  { en: "Natural burial", "zh-TW": "環保自然葬" },
  { en: "Verified partners", "zh-TW": "認證合作夥伴" },
  { en: "Accessible by LINE", "zh-TW": "LINE 友善使用" },
];

const socialContacts = [
  ["FB", "CareBridge Elder Support"],
  ["IG", "@carebridge.support"],
  ["LINE", "@carebridge"],
];

export function Presentation() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7faf8] text-slate-950">
      <ThreeBackground />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <BrandLogo compact />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login/elder">
              <Button variant="outline" size="sm" className="bg-white">
                {language === "zh-TW" ? "長者入口" : "Elder View"}
              </Button>
            </Link>
            <Link to="/login/admin" className="hidden md:block">
              <Button variant="outline" size="sm" className="bg-white">
                {language === "zh-TW" ? "管理端" : "Admin"}
              </Button>
            </Link>
            <Link to="/login/family" className="hidden sm:block">
              <Button variant="outline" size="sm" className="bg-white">
                {language === "zh-TW" ? "家屬入口" : "Family View"}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge className="border border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                {language === "zh-TW" ? "以善終尊嚴為核心的社會創新" : "Social innovation for final dignity"}
              </Badge>
              <Badge className="border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-50">
                {language === "zh-TW" ? "政府、醫療、法律與禮儀協作" : "Government, medical, legal, and funeral coordination"}
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              {language === "zh-TW" ? "值得信任的善終與身後事規劃平台。" : "A trusted platform for dignified end-of-life planning."}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {language === "zh-TW"
                ? "樂齡家協助民眾預先規劃最後意願，串接公部門與醫療通報，安排禮儀服務，並建立數位紀念空間，讓每個人都能被尊重與記得。"
                : "CareBridge helps people plan final wishes, coordinate public and medical reporting, arrange funeral services, and create a digital memorial so no one is left without dignity or remembrance."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/login/elder">
                <Button
                  size="lg"
                  className="h-12 bg-emerald-700 px-6 text-base hover:bg-emerald-800"
                >
                  {language === "zh-TW" ? "開始規劃" : "Start planning"}
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link to="/login/family">
                <Button size="lg" variant="outline" className="h-12 bg-white px-6 text-base">
                  {language === "zh-TW" ? "查看家屬協作" : "View family coordination"}
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-emerald-900/10">
            <img
              src="/blood-donation-care.png"
              alt="Nurse helping a patient during blood donation"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="text-sm text-emerald-700">{language === "zh-TW" ? "今日" : "Today"}</div>
                <div className="mt-1 text-2xl font-semibold">{language === "zh-TW" ? "已登記" : "Registered"}</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="text-sm text-blue-700">{language === "zh-TW" ? "案件狀態" : "Case status"}</div>
                <div className="mt-1 text-2xl font-semibold">{language === "zh-TW" ? "可追蹤" : "Tracked"}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
            {trustStats.map(([value, label]) => (
              <div key={text(label, language)} className="text-center">
                <div className="text-3xl font-semibold text-slate-950">{text(value, language)}</div>
                <div className="mt-1 text-sm text-slate-500">{text(label, language)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1fr] lg:px-8">
            <div>
              <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                {language === "zh-TW" ? "高齡智慧照護主機" : "Elder machine system"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW" ? "安靜守護居家安全，必要時即時通知家人。" : "A home unit that watches quietly and alerts family when it matters."}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {language === "zh-TW"
                  ? "設備整合投影、攝影機、喇叭、麥克風、本地 AI、加密儲存與雲端通知，讓長者在家也能獲得更完整的安全照護。"
                  : "The device combines a projector, camera, speaker, microphone, local AI, encrypted storage, and cloud alerts so elders can stay at home with stronger safety coverage."}
              </p>

              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <div className="mx-auto flex max-w-sm justify-center">
                  <div className="relative h-[420px] w-[300px]">
                    <div className="absolute inset-x-8 bottom-0 h-8 rounded-[50%] bg-slate-900/20 blur-md" />
                    <div className="absolute inset-x-6 bottom-5 h-[360px] overflow-hidden rounded-[3rem] border border-slate-300 bg-linear-to-b from-stone-100 via-stone-200 to-stone-300 shadow-2xl">
                      <div className="h-12 rounded-b-[50%] border-b border-white/80 bg-white/45" />
                      <div className="mx-8 mt-14 flex h-20 items-center rounded-full bg-slate-950 px-6 shadow-inner">
                        <div className="relative size-14 rounded-full bg-slate-900 ring-4 ring-slate-800">
                          <div className="absolute inset-3 rounded-full bg-blue-500/70 blur-[2px]" />
                          <div className="absolute left-4 top-3 size-4 rounded-full bg-white/80" />
                        </div>
                        <div className="ml-5 text-xs font-medium text-white/70">
                          1080P | AF
                        </div>
                      </div>
                      <div className="mt-20 h-16 bg-slate-950 px-16 py-4">
                        <div className="mx-auto size-10 rounded-full bg-slate-900 ring-4 ring-slate-800">
                          <div className="mx-auto size-4 rounded-full bg-purple-400/80 blur-[1px]" />
                        </div>
                      </div>
                      <div className="absolute right-8 top-32 grid grid-cols-6 gap-1">
                        {Array.from({ length: 48 }).map((_, index) => (
                          <span key={index} className="size-1.5 rounded-full bg-slate-700/55" />
                        ))}
                      </div>
                      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                        <span className="size-1.5 rounded-full bg-slate-400" />
                        <span className="size-1.5 rounded-full bg-slate-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Camera className="mx-auto mb-2 size-5 text-blue-700" />
                    {language === "zh-TW" ? "影像" : "Vision"}
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Cpu className="mx-auto mb-2 size-5 text-emerald-700" />
                    {language === "zh-TW" ? "邊緣 AI" : "Edge AI"}
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Bell className="mx-auto mb-2 size-5 text-rose-700" />
                    {language === "zh-TW" ? "警示" : "Alerts"}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f7faf8] p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {language === "zh-TW" ? "監測流程" : "Monitoring flow"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {language === "zh-TW" ? "穿戴資料、本地 AI、雲端紀錄與家屬通知。" : "Wearable data, local AI, cloud records, and family alerts."}
                  </p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  {language === "zh-TW" ? "安全路徑" : "Secure path"}
                </Badge>
              </div>

              <div className="grid gap-4">
                {machineFlow.map((step, index) => (
                  <div key={text(step.label, language)} className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <step.icon className="size-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-950">{text(step.label, language)}</div>
                        <div className="text-sm text-slate-500">{text(step.detail, language)}</div>
                      </div>
                    </div>
                    {index < machineFlow.length - 1 ? (
                      <div className="hidden h-px w-10 bg-blue-300 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 sm:grid-cols-5">
                {(language === "zh-TW" ? ["跌倒", "SOS", "長時間無活動", "心率異常", "低電量"] : ["Fall", "SOS", "No activity", "Heart anomaly", "Low battery"]).map((alert) => (
                  <div key={alert} className="rounded-xl bg-white px-3 py-2 text-center text-xs font-medium text-rose-700">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/90 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW" ? "樂齡家提供什麼" : "What CareBridge provides"}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {language === "zh-TW"
                  ? "平台結合善終意願登記、公部門案件協作、數位紀念與社會貢獻點數，連結照護與身後事支援。"
                  : "The platform combines end-of-life preference registration, public-sector case coordination, digital memorials, and a contribution-points model connected to care and funeral support."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {serviceCards.map((service) => (
                <Card key={service.title} className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className={`mb-5 flex size-12 items-center justify-center rounded-2xl border ${service.tone}`}>
                      <service.icon className="size-6" />
                    </div>
                  <h3 className="text-xl font-semibold text-slate-950">{text(service.title, language)}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text(service.copy, language)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7faf8] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                {language === "zh-TW" ? "運作流程" : "How it works"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW" ? "從規劃到紀念的視覺化路徑。" : "A visual path from planning to remembrance."}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-5">
              {journeySteps.map((step, index) => (
                <div
                  key={text(step.label, language)}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <step.icon className="size-6" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-slate-950">
                    {text(step.label, language)}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {language === "zh-TW" ? `第 ${index + 1} 步` : `Step ${index + 1}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                {language === "zh-TW" ? "視覺化服務地圖" : "Visual service map"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW" ? "用人物、場域與行動呈現服務模式。" : "The model shown through people, places, and actions."}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visualStories.map((story) => (
                <Card key={text(story.title, language)} className="overflow-hidden border-slate-200 bg-white shadow-sm">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={text(story.title, language)}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-white/92 text-emerald-700 shadow-lg">
                      <story.icon className="size-6" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/80 to-transparent p-4">
                      <Badge className="bg-white/15 text-white hover:bg-white/15">
                        {text(story.eyebrow, language)}
                      </Badge>
                      <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
                        {text(story.title, language)}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="leading-7 text-slate-600">{text(story.caption, language)}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {story.chips.map((chip) => (
                        <span
                          key={text(chip, language)}
                          className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                          {text(chip, language)}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
            <div>
              <Badge className="bg-white/10 text-white hover:bg-white/10">
                {language === "zh-TW" ? "額外信任價值" : "Additional values to add"}
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                {language === "zh-TW" ? "信任不是功能，而是服務本身。" : "Trust is the product, not only a feature."}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                {language === "zh-TW"
                  ? "因為服務涉及死亡、家屬焦慮、公部門流程、金錢與記憶，網站需要強調同意、合法性、透明度與情感支持。"
                  : "Because this service handles death, family anxiety, public systems, money, and memory, the website should emphasize consent, legality, transparency, and emotional support."}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {additionalValues.map((label) => (
                <div key={text(label, language)} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <CheckCircle2 className="size-5 text-emerald-300" />
                  <span className="text-slate-100">{text(label, language)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1fr_1.2fr] lg:px-8">
            <div>
              <BrandLogo />
              <p className="mt-5 max-w-md leading-7 text-slate-600">
                {language === "zh-TW"
                  ? "一個協助善終規劃、政府通報、禮儀服務、數位紀念與貢獻點數照護支援的可信任平台。"
                  : "A trusted coordination platform for end-of-life planning, government reporting, funeral services, digital memorials, and contribution-based care support."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  {language === "zh-TW" ? "聯絡我們" : "Contact us"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                    <span>+886 2 2345 6789</span>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                    <span>hello@carebridge.example</span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                    <span>12F, No. 88 Renai Road, Taipei City, Taiwan</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  {language === "zh-TW" ? "社群管道" : "Social channels"}
                </h2>
                <div className="mt-4 grid gap-3">
                  {socialContacts.map(([channel, label]) => (
                    <a
                      key={channel}
                      href="#"
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-emerald-200 hover:bg-emerald-50"
                    >
                      <span className="font-semibold text-emerald-700">
                        {channel}
                      </span>
                      <span className="text-slate-600">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
