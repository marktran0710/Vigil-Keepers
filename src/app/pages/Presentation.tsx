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
import { BrandLogo } from "../components/BrandLogo";

const serviceCards = [
  {
    icon: HeartPulse,
    title: "居家安全監測",
    copy: "整合式設備提供健康監測、行動偵測與緊急警報，讓家屬即時掌握長輩的居家安全狀況。",
    tone: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: Coins,
    title: "捐血點數兌換",
    copy: "每次捐血累積點數，可折抵醫療照護設備租賃費用，讓善行直接轉化為自身或家人的長照保障。",
    tone: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Database,
    title: "數位遺產保存",
    copy: "為長輩錄製影像、聲音與回憶，自動播放家屬上傳的素材，留存珍貴的生命紀念。",
    tone: "text-blue-600 bg-blue-50 border-blue-100",
  },
];

const trustStats = [
  ["桃竹苗", "捐血服務區域"],
  ["3 大場景", "租賃、買斷、點數折抵"],
  ["100%", "家屬同意才開放查看"],
  ["1 台設備", "監測、娛樂、紀錄全整合"],
];

const visualStories = [
  {
    icon: Building2,
    eyebrow: "關鍵合作夥伴",
    title: "串聯捐血中心、中央大學與雲端平台",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "法律顧問、新竹捐血中心（桃竹苗）、中央大學機電資工系、Google/Amazon 雲端，以及蝦皮、MOMO、PChome 等電商通路共同支持。",
    chips: ["新竹捐血中心", "中央大學", "Google/Amazon", "蝦皮/MOMO", "法律顧問"],
  },
  {
    icon: HeartPulse,
    eyebrow: "一體式居家設備",
    title: "整合健康偵測、放映、錄音錄影的智慧設備",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "由中央大學機電資工系研發，整合健康監測、行動偵測、媒體放映、錄音與錄影，兼容其他設備，讓長輩安心居家。",
    chips: ["健康監測", "行動偵測", "媒體播放", "錄影錄音", "設備兼容"],
  },
  {
    icon: HandHeart,
    eyebrow: "捐血點數制度",
    title: "捐血次數轉換點數，折抵長照設備費用",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "與新竹捐血中心合作，捐血次數轉為點數，可折抵醫療設備租賃費；善心人士亦可將點數捐贈給有需要的家庭。",
    chips: ["捐血動機", "點數累積", "設備折扣", "善意捐贈", "社區互助"],
  },
  {
    icon: Database,
    eyebrow: "數位遺產",
    title: "為家屬保存長輩的聲音、影像與生命故事",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "設備自動播放家屬上傳的照片與影片，減少長輩被遺忘的感受；家屬也可委託影片分類與後製，留存珍貴數位遺產。",
    chips: ["影像紀錄", "自動播放", "後製剪輯", "Line Bot 上傳", "永久保存"],
  },
  {
    icon: Scale,
    eyebrow: "顧客關係",
    title: "價格透明、高隱私性，易操作，增進家屬互動",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "標準定價避免資訊不對稱；未獲家屬同意，我方無權查看內容；設備操作簡易，適合長輩使用，家屬可隨時上傳互動素材。",
    chips: ["價格透明", "高隱私性", "易操作", "家屬互動", "離線雲端"],
  },
  {
    icon: Megaphone,
    eyebrow: "推廣通路",
    title: "社群媒體、長照機構、電商與實體安裝",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "透過 FB、IG、Google 等社群媒體傳播；結合桃園捐血、醫療、長照機構；提供實體交付安裝；並於蝦皮、MOMO、PChome 上架銷售。",
    chips: ["LINE Bot", "FB/IG", "長照機構", "電商平台", "實體安裝"],
  },
  {
    icon: Landmark,
    eyebrow: "收益模式",
    title: "設備收入、數位遺產後製與娛樂廠商分潤",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "三大收益來源：設備租賃或買斷、數位遺產影片分類與後製等客製化服務，以及娛樂廠商合作分潤。",
    chips: ["設備租賃", "買斷方案", "數位遺產後製", "娛樂分潤"],
  },
];

const journeySteps = [
  {
    icon: HandHeart,
    label: "捐血",
  },
  {
    icon: Coins,
    label: "累積點數",
  },
  {
    icon: ShieldCheck,
    label: "租用設備",
  },
  {
    icon: HeartPulse,
    label: "居家監護",
  },
  {
    icon: Database,
    label: "數位遺產",
  },
];

const machineFlow = [
  {
    icon: Watch,
    label: "健康監測",
    detail: "心率、血壓、跌倒偵測",
  },
  {
    icon: Camera,
    label: "影像錄製",
    detail: "1080P 攝影機、麥克風",
  },
  {
    icon: Cpu,
    label: "邊緣運算",
    detail: "本地 AI 分析，離線雲端",
  },
  {
    icon: Cloud,
    label: "雲端平台",
    detail: "Google/Amazon 安全儲存",
  },
  {
    icon: Bell,
    label: "家屬通知",
    detail: "LINE Bot、SMS、App 推播",
  },
];

const additionalValues = [
  "價格透明化",
  "高隱私性",
  "易操作設備",
  "LINE Bot 即時通知",
  "離線雲端架構",
  "增進家屬互動",
];

const socialContacts = [
  ["FB", "Vigil Keepers 守護者"],
  ["IG", "@vigilkeepers.tw"],
  ["LINE", "@vigilkeepers"],
];

export function Presentation() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7faf8] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <BrandLogo compact />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login/elder">
              <Button variant="outline" size="sm" className="bg-white">
                長輩介面
              </Button>
            </Link>
            <Link to="/login/admin" className="hidden md:block">
              <Button variant="outline" size="sm" className="bg-white">
                管理員
              </Button>
            </Link>
            <Link to="/login/family" className="hidden sm:block">
              <Button variant="outline" size="sm" className="bg-white">
                家屬介面
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
                捐血點數 × 長照設備 × 數位遺產
              </Badge>
              <Badge className="border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-50">
                桃竹苗地區長照社會創新平台
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              用捐血守護長輩，讓愛成為最好的長照保障。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Vigil Keepers 結合捐血點數制度與居家照護設備，讓您的善心捐血轉化為長照折扣，
              同時為家中長輩提供安全監測、娛樂陪伴與數位遺產保存服務。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/login/elder">
                <Button
                  size="lg"
                  className="h-12 bg-emerald-700 px-6 text-base hover:bg-emerald-800"
                >
                  長輩入口
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link to="/login/family">
                <Button size="lg" variant="outline" className="h-12 bg-white px-6 text-base">
                  家屬管理介面
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-emerald-900/10">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Elder person at home with family"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="text-sm text-emerald-700">本月捐血點數</div>
                <div className="mt-1 text-2xl font-semibold">+250 點</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="text-sm text-blue-700">長輩居家狀態</div>
                <div className="mt-1 text-2xl font-semibold">安全</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
            {trustStats.map(([value, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-semibold text-slate-950">{value}</div>
                <div className="mt-1 text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1fr] lg:px-8">
            <div>
              <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                一體式居家照護設備
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                一台設備靜靜守護，有事立即通知家屬。
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                整合投影、攝影機、麥克風、邊緣 AI 與加密儲存，讓長輩安心待在家中，
                家屬隨時透過 LINE Bot 掌握最新狀況。
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
                    攝影鏡頭
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Cpu className="mx-auto mb-2 size-5 text-emerald-700" />
                    邊緣 AI
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Bell className="mx-auto mb-2 size-5 text-rose-700" />
                    即時通知
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f7faf8] p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    監護流程
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    本地 AI 分析、離線雲端儲存、即時家屬通知。
                  </p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  安全路徑
                </Badge>
              </div>

              <div className="grid gap-4">
                {machineFlow.map((step, index) => (
                  <div key={step.label} className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <step.icon className="size-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-950">{step.label}</div>
                        <div className="text-sm text-slate-500">{step.detail}</div>
                      </div>
                    </div>
                    {index < machineFlow.length - 1 ? (
                      <div className="hidden h-px w-10 bg-blue-300 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 sm:grid-cols-5">
                {["跌倒偵測", "SOS 緊急", "無活動異常", "心率異常", "電量不足"].map((alert) => (
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
                Vigil Keepers 提供什麼
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                平台結合居家安全監測設備、捐血點數折扣制度與數位遺產保存服務，
                讓桃園市民以善行換取長照保障，讓長輩獲得妥善照顧。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {serviceCards.map((service) => (
                <Card key={service.title} className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className={`mb-5 flex size-12 items-center justify-center rounded-2xl border ${service.tone}`}>
                      <service.icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.copy}</p>
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
                服務流程
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                從捐血到守護長輩的完整路徑。
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-5">
              {journeySteps.map((step, index) => (
                <div
                  key={step.label}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <step.icon className="size-6" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-slate-950">
                    {step.label}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Step {index + 1}
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
                商業模式全覽
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                透過合作夥伴、服務設計與通路，實現長照社會創新。
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visualStories.map((story) => (
                <Card key={story.title} className="overflow-hidden border-slate-200 bg-white shadow-sm">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-white/92 text-emerald-700 shadow-lg">
                      <story.icon className="size-6" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/80 to-transparent p-4">
                      <Badge className="bg-white/15 text-white hover:bg-white/15">
                        {story.eyebrow}
                      </Badge>
                      <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="leading-7 text-slate-600">{story.caption}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {story.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                          {chip}
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
                我們的核心承諾
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                信任不是功能，而是我們的產品本身。
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                因為這項服務涉及長輩的隱私、家屬的安全感與珍貴的生命紀念，
                我們以透明、同意優先與隱私保護為核心設計原則。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {additionalValues.map((label) => (
                <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <CheckCircle2 className="size-5 text-emerald-300" />
                  <span className="text-slate-100">{label as string}</span>
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
                桃竹苗長照社會創新平台，結合捐血點數制度、居家照護設備與數位遺產服務，
                讓善行成為家人最好的長照保障。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  聯絡我們
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                    <span>+886 3 1234 5678</span>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                    <span>hello@vigilkeepers.tw</span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                    <span>桃園市中壢區中大路 300 號（近國立中央大學）</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  社群媒體
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
