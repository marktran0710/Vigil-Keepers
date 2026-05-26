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
  Gift,
  HeartPulse,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  PlaySquare,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Watch,
  Wifi,
} from "lucide-react";
import { Link } from "react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { BrandLogo } from "../components/BrandLogo";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ThreeBackground } from "../components/ThreeBackground";
import { Language, useLanguage } from "../context/LanguageContext";

type LocalizedText = {
  en: string;
  "zh-TW": string;
};

const text = (value: LocalizedText, language: Language) => value[language] || value.en;

const serviceCards = [
  {
    icon: HeartPulse,
    title: {
      en: "Safer aging at home",
      "zh-TW": "降低高齡居家風險",
    },
    copy: {
      en: "Monitor health, movement, and unusual events so families can respond earlier.",
      "zh-TW": "透過健康、行動與異常事件監測，讓家屬能更早掌握狀況並回應。",
    },
    tone: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: Coins,
    title: {
      en: "Blood donation points",
      "zh-TW": "捐血點數回饋",
    },
    copy: {
      en: "Convert verified blood donation records into points for device discounts.",
      "zh-TW": "將經查詢驗證的捐血次數轉換為點數，用於我方醫療照護設備折扣。",
    },
    tone: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: PlaySquare,
    title: {
      en: "Entertainment and digital legacy",
      "zh-TW": "娛樂陪伴與數位遺產",
    },
    copy: {
      en: "Play family media for elders and preserve memories as a future digital legacy.",
      "zh-TW": "家屬可上傳影音素材自動播放給長輩，也為未來保留珍貴回憶。",
    },
    tone: "text-blue-600 bg-blue-50 border-blue-100",
  },
];

const trustStats = [
  [{ en: "1 device", "zh-TW": "一台設備" }, { en: "monitoring, media, and recording", "zh-TW": "整合監測、播放與紀錄" }],
  [{ en: "Blood points", "zh-TW": "捐血點數" }, { en: "for care-device discounts", "zh-TW": "折抵照護設備費用" }],
  [{ en: "Private by design", "zh-TW": "隱私隔離" }, { en: "family consent required", "zh-TW": "未經同意不得查看內容" }],
  [{ en: "Online + offline", "zh-TW": "線上線下" }, { en: "e-commerce, care sites, installation", "zh-TW": "電商、機構與實體安裝" }],
];

const partnerCards = [
  {
    icon: Scale,
    title: {
      en: "Legal and notarization advisors",
      "zh-TW": "法律與公證顧問",
    },
    detail: {
      en: "Support compliance, consent records, contract review, and privacy boundaries.",
      "zh-TW": "協助法遵、同意紀錄、合約審查與隱私權限邊界。",
    },
  },
  {
    icon: HeartPulse,
    title: {
      en: "Blood centers and Taiwan Blood Services Foundation",
      "zh-TW": "捐血中心與台灣血液基金會",
    },
    detail: {
      en: "Help users verify donation counts and apply for points through our platform.",
      "zh-TW": "協助民眾查詢捐血次數，並結合平台申請轉換點數。",
    },
  },
  {
    icon: Cpu,
    title: {
      en: "NCU mechanical, electrical, and computer science teams",
      "zh-TW": "中大機械、電機、資工團隊",
    },
    detail: {
      en: "Develop the integrated device, platform software, and industry-academic collaboration.",
      "zh-TW": "委託相關科系研發設備與平台，促進產學合作。",
    },
  },
  {
    icon: Cloud,
    title: {
      en: "Google and Amazon cloud support",
      "zh-TW": "Google / Amazon 雲端支援",
    },
    detail: {
      en: "Provide storage, compute, backup, and scalable infrastructure where needed.",
      "zh-TW": "作為雲端儲存、算力、備援與擴充基礎設施支援。",
    },
  },
  {
    icon: ShoppingBag,
    title: {
      en: "E-commerce channels",
      "zh-TW": "電商通路",
    },
    detail: {
      en: "Sell or rent services through platforms such as Shopee, MOMO, and PChome.",
      "zh-TW": "透過蝦皮、MOMO、PChome 等平台銷售或租賃服務。",
    },
  },
];

const visualStories = [
  {
    icon: Gift,
    eyebrow: { en: "Donation incentive", "zh-TW": "捐血誘因" },
    title: {
      en: "Give donors practical care value in return",
      "zh-TW": "讓捐血回饋成為可使用的照護價值",
    },
    image: "/blood-donation-care.png",
    caption: {
      en: "Verified blood donation records can become points for elder-care device discounts.",
      "zh-TW": "經驗證的捐血紀錄可轉換為點數，用於高齡照護設備折扣。",
    },
    chips: [
      { en: "Donate", "zh-TW": "捐血" },
      { en: "Verify", "zh-TW": "查詢" },
      { en: "Apply", "zh-TW": "申請" },
      { en: "Discount", "zh-TW": "折扣" },
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: { en: "Home safety", "zh-TW": "居家安全" },
    title: {
      en: "Reduce home risk for elders living independently",
      "zh-TW": "降低高齡者在家生活的安全風險",
    },
    image: "/elder-home-safety.svg",
    caption: {
      en: "The device records health, activity, audio, video, and emergency signals for family awareness.",
      "zh-TW": "設備整合健康、行動、錄音、錄影與緊急訊號，協助家屬掌握安全狀態。",
    },
    chips: [
      { en: "Health", "zh-TW": "健康" },
      { en: "Movement", "zh-TW": "行動" },
      { en: "Camera", "zh-TW": "影像" },
      { en: "SOS", "zh-TW": "求救" },
    ],
  },
  {
    icon: PlaySquare,
    eyebrow: { en: "Elder entertainment", "zh-TW": "長者娛樂" },
    title: {
      en: "Family media plays automatically for companionship",
      "zh-TW": "家屬上傳素材，自動播放陪伴長輩",
    },
    image: "/elder-entertainment.jpg",
    caption: {
      en: "Videos and memories can be played through an easy-to-use device to reduce loneliness.",
      "zh-TW": "透過易操作設備播放影片與回憶素材，降低長輩被遺忘的感受。",
    },
    chips: [
      { en: "Video", "zh-TW": "影片" },
      { en: "Audio", "zh-TW": "聲音" },
      { en: "Family", "zh-TW": "家人" },
      { en: "Playback", "zh-TW": "播放" },
    ],
  },
  {
    icon: Database,
    eyebrow: { en: "Digital legacy", "zh-TW": "數位遺產" },
    title: {
      en: "Preserve elder memories for future family members",
      "zh-TW": "為家屬保存長輩的回憶與故事",
    },
    image: "/digital-legacy.jpg",
    caption: {
      en: "Media classification, editing, and memory archives can become a paid customization service.",
      "zh-TW": "影片分類、後製與回憶整理可成為客製化數位遺產服務。",
    },
    chips: [
      { en: "Archive", "zh-TW": "保存" },
      { en: "Edit", "zh-TW": "後製" },
      { en: "Classify", "zh-TW": "分類" },
      { en: "Remember", "zh-TW": "紀念" },
    ],
  },
  {
    icon: Scale,
    eyebrow: { en: "Privacy promise", "zh-TW": "隱私承諾" },
    title: {
      en: "Family consent controls access to personal content",
      "zh-TW": "未經家屬同意，平台無權查看內容",
    },
    image: "/privacy-records.jpg",
    caption: {
      en: "Offline-capable systems and access separation protect sensitive media and health data.",
      "zh-TW": "離線雲端架構與權限隔離，保護影像、聲音與健康資料。",
    },
    chips: [
      { en: "Consent", "zh-TW": "同意" },
      { en: "Isolation", "zh-TW": "隔離" },
      { en: "Access", "zh-TW": "權限" },
      { en: "Security", "zh-TW": "資安" },
    ],
  },
  {
    icon: Megaphone,
    eyebrow: { en: "Channels", "zh-TW": "通路" },
    title: {
      en: "Reach families through care sites, online media, and delivery",
      "zh-TW": "透過機構、網路與實體安裝觸及家庭",
    },
    image: "/community-channels.jpg",
    caption: {
      en: "Social media, blood centers, medical and long-term care institutions, e-commerce, and installation teams become the route to market.",
      "zh-TW": "社群、捐血中心、醫療長照機構、電商與實體交付安裝，構成主要推廣通路。",
    },
    chips: [
      { en: "FB / IG", "zh-TW": "社群" },
      { en: "Care sites", "zh-TW": "照護機構" },
      { en: "E-commerce", "zh-TW": "電商" },
      { en: "Install", "zh-TW": "安裝" },
    ],
  },
];

const journeySteps = [
  { icon: HeartPulse, label: { en: "Donate", "zh-TW": "捐血" } },
  { icon: FileCheck2, label: { en: "Verify", "zh-TW": "查詢" } },
  { icon: Coins, label: { en: "Apply points", "zh-TW": "申請點數" } },
  { icon: ShoppingBag, label: { en: "Rent or buy", "zh-TW": "租賃或買斷" } },
  { icon: ShieldCheck, label: { en: "Protect home", "zh-TW": "居家守護" } },
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
    detail: { en: "Health, movement, projector, recording", "zh-TW": "健康、行動、放映、錄音錄影" },
  },
  {
    icon: Cpu,
    label: { en: "Local software", "zh-TW": "專屬軟體系統" },
    detail: { en: "Device OS and compatibility layer", "zh-TW": "硬體專屬系統與設備相容" },
  },
  {
    icon: Cloud,
    label: { en: "Offline-capable cloud", "zh-TW": "離線雲端系統" },
    detail: { en: "Runs locally with privacy separation", "zh-TW": "可在終端獨立運行並保護隱私" },
  },
  {
    icon: Bell,
    label: { en: "Family updates", "zh-TW": "家屬同步" },
    detail: { en: "LINE Bot, app, alerts, media upload", "zh-TW": "LINE Bot、App、警示與素材上傳" },
  },
];

const additionalValues = [
  { en: "Transparent pricing", "zh-TW": "價格透明化" },
  { en: "Privacy isolation", "zh-TW": "隱私絕對隔離" },
  { en: "Easy elder operation", "zh-TW": "長者易操作" },
  { en: "Family interaction", "zh-TW": "增進家屬互動" },
  { en: "Device rental or purchase", "zh-TW": "設備租賃或買斷" },
  { en: "Vendor partnerships", "zh-TW": "廠商合作分潤" },
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
                {language === "zh-TW" ? "捐血點數 × 高齡照護設備" : "Blood donation points x elder-care devices"}
              </Badge>
              <Badge className="border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-50">
                {language === "zh-TW" ? "居家安全、娛樂陪伴與數位遺產" : "Home safety, entertainment, and digital legacy"}
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              {language === "zh-TW"
                ? "用捐血回饋降低長照設備負擔，讓長輩在家更安全。"
                : "Turn blood donation into care-device support for safer aging at home."}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {language === "zh-TW"
                ? "樂齡家結合捐血點數、居家智慧設備、媒體陪伴與數位遺產服務，讓家屬更安心，也讓長輩獲得更容易使用的照護與娛樂體驗。"
                : "CareBridge connects blood donation points, an integrated elder machine, media companionship, and digital legacy services so families feel safer and elders receive easier daily support."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/login/elder">
                <Button
                  size="lg"
                  className="h-12 bg-emerald-700 px-6 text-base hover:bg-emerald-800"
                >
                  {language === "zh-TW" ? "開始使用" : "Start using"}
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
                <div className="text-sm text-emerald-700">
                  {language === "zh-TW" ? "點數來源" : "Point source"}
                </div>
                <div className="mt-1 text-2xl font-semibold">
                  {language === "zh-TW" ? "捐血紀錄" : "Donation records"}
                </div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="text-sm text-blue-700">
                  {language === "zh-TW" ? "使用方式" : "Use case"}
                </div>
                <div className="mt-1 text-2xl font-semibold">
                  {language === "zh-TW" ? "設備折扣" : "Device discount"}
                </div>
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
                {language === "zh-TW" ? "一體式高齡照護設備" : "Integrated elder-care machine"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW"
                  ? "健康監測、行動偵測、放映、錄音與錄影集中在同一台設備。"
                  : "Health sensing, activity detection, projection, audio, and video in one home unit."}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {language === "zh-TW"
                  ? "設備搭配專屬軟體與離線雲端系統，能在終端獨立運行，減少資料直接上傳第三方雲端，強化隱私保護。"
                  : "The device pairs dedicated software with an offline-capable cloud system, allowing local operation while reducing direct upload of sensitive content to third-party cloud services."}
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
                    {language === "zh-TW" ? "影像紀錄" : "Video record"}
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Cpu className="mx-auto mb-2 size-5 text-emerald-700" />
                    {language === "zh-TW" ? "專屬系統" : "Device OS"}
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Bell className="mx-auto mb-2 size-5 text-rose-700" />
                    {language === "zh-TW" ? "安全通知" : "Alerts"}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f7faf8] p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {language === "zh-TW" ? "設備與平台流程" : "Device and platform flow"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {language === "zh-TW"
                      ? "從穿戴裝置、居家主機、專屬軟體到家屬同步。"
                      : "From wearable devices and the home unit to dedicated software and family updates."}
                  </p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  {language === "zh-TW" ? "隱私保護" : "Privacy first"}
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
                {(language === "zh-TW"
                  ? ["跌倒", "SOS", "行動異常", "健康異常", "設備異常"]
                  : ["Fall", "SOS", "Activity anomaly", "Health anomaly", "Device issue"]
                ).map((alert) => (
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
                  ? "我們把捐血回饋、硬體設備、軟體系統、媒體陪伴與數位遺產整合成一套可租賃、可買斷、也可客製化的高齡照護服務。"
                  : "We combine donation rewards, hardware, software, media companionship, and digital legacy services into a rental, purchase, and customization model for elder care."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {serviceCards.map((service) => (
                <Card key={text(service.title, language)} className="border-slate-200 bg-white shadow-sm">
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
                {language === "zh-TW" ? "點數使用流程" : "Point journey"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW"
                  ? "從捐血紀錄到照護設備折扣。"
                  : "From blood donation records to care-device discounts."}
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
                {language === "zh-TW"
                  ? "用場景呈現新的服務模式。"
                  : "The updated model shown through service scenarios."}
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

        <section className="bg-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                {language === "zh-TW" ? "關鍵合作夥伴" : "Key partners"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {language === "zh-TW"
                  ? "讓設備、點數、雲端與銷售通路一起運作。"
                  : "Partners connect devices, points, cloud infrastructure, and sales channels."}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {partnerCards.map((partner) => (
                <Card key={text(partner.title, language)} className="border-slate-200 bg-slate-50 shadow-sm">
                  <CardContent className="p-5">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-white text-emerald-700">
                      <partner.icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {text(partner.title, language)}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {text(partner.detail, language)}
                    </p>
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
                {language === "zh-TW" ? "顧客關係與收益" : "Customer trust and revenue"}
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                {language === "zh-TW"
                  ? "透明價格、隱私隔離與易操作設備是核心信任。"
                  : "Transparent pricing, privacy isolation, and easy operation build trust."}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                {language === "zh-TW"
                  ? "收益來自設備租賃或買斷、數位遺產客製化、影片分類後製，以及廠商合作與分潤。"
                  : "Revenue comes from device rental or purchase, digital legacy customization, media classification and editing, and partner revenue sharing."}
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
                  ? "結合捐血回饋、硬體研發、居家照護、媒體陪伴與數位遺產的高齡科技服務。"
                  : "An elder-tech service combining blood donation rewards, hardware development, home care, media companionship, and digital legacy."}
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
