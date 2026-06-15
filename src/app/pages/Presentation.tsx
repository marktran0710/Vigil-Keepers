import React from "react";
import {
  ArrowRight,
  Bell,
  Building2,
  Coins,
  Database,
  HandHeart,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { BrandLogo } from "../components/BrandLogo";

const stats = [
  { value: "桃竹苗", label: "服務區域" },
  { value: "1 台", label: "整合式照護設備" },
  { value: "100%", label: "家屬同意才開放查看" },
  { value: "0 元", label: "捐血達標即享折扣" },
];

const services = [
  {
    icon: HeartPulse,
    title: "居家安全監測",
    description:
      "整合健康監測、行動偵測與緊急警報，讓家屬即時掌握長輩的居家狀況，有事立即通知。",
  },
  {
    icon: Coins,
    title: "捐血點數兌換",
    description:
      "每次捐血可累積點數，用於折抵照護設備租賃費用。善心捐血直接轉化為自身或家人的長照保障。",
  },
  {
    icon: Database,
    title: "數位遺產保存",
    description:
      "設備自動播放家屬上傳的影片與照片，減少長輩被遺忘感。家屬也可委託後製，留存珍貴回憶。",
  },
];

const steps = [
  { step: "01", icon: HandHeart, title: "前往捐血", desc: "至新竹捐血中心（桃竹苗地區）完成捐血。" },
  { step: "02", icon: Coins, title: "累積點數", desc: "捐血次數由我方轉換為照護點數。" },
  { step: "03", icon: ShieldCheck, title: "申請設備", desc: "以點數折抵設備租賃或買斷費用。" },
  { step: "04", icon: HeartPulse, title: "居家守護", desc: "設備安裝到位，長輩安全即時回報家屬。" },
];

const partners = [
  { icon: Building2, name: "新竹捐血中心", note: "台灣血液基金會 · 桃竹苗地區" },
  { icon: Users, name: "國立中央大學", note: "機械／電機／資工系 · 設備研發" },
  { icon: ShieldCheck, name: "法律與公證顧問", note: "契約保障 · 資料合規" },
  { icon: Bell, name: "Google／Amazon", note: "雲端算力與安全儲存支援" },
];

const commitments = [
  "價格透明，無隱藏費用",
  "高隱私性，家屬同意才開放查看",
  "設備操作簡易，適合長輩使用",
  "家屬可自行上傳內容，增進互動",
];

export function Presentation() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <BrandLogo compact />
          <div className="flex items-center gap-2">
            <Link to="/login/elder">
              <Button variant="ghost" size="sm">長輩介面</Button>
            </Link>
            <Link to="/login/family">
              <Button variant="ghost" size="sm">家屬介面</Button>
            </Link>
            <Link to="/login/admin" className="hidden md:block">
              <Button variant="ghost" size="sm">管理員</Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
                桃竹苗地區長照社會創新 NPO
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                用捐血守護長輩，
                <br />
                讓善行成為長照保障
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Vigil Keepers 結合捐血點數與居家照護設備，
                讓您的每一次捐血轉化為家中長輩的安全守護與溫暖陪伴。
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Link to="/login/elder">
                  <Button className="bg-emerald-700 hover:bg-emerald-800 px-6">
                    長輩入口
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link to="/login/family">
                  <Button variant="outline" className="px-6">家屬管理介面</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">{value}</div>
                  <div className="mt-1 text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-b border-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">我們提供什麼</h2>
              <p className="mt-3 text-slate-500">三項核心服務，讓長照更有溫度、更有保障。</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-slate-100 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">服務流程</h2>
              <p className="mt-3 text-slate-500">從捐血到守護長輩，四個簡單步驟。</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.step} className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="text-3xl font-bold text-slate-200">{s.step}</div>
                  <div className="mt-3 flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="border-b border-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">關鍵合作夥伴</h2>
              <p className="mt-3 text-slate-500">與專業機構協力，共同實現長照社會創新。</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((p) => (
                <div key={p.name} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{p.name}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{p.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="border-b border-slate-100 bg-emerald-700 py-14 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">我們對您的承諾</h2>
                <p className="mt-3 text-emerald-100">
                  這項服務涉及長輩的隱私與家屬的安心，我們以透明與尊重為首要原則。
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {commitments.map((c) => (
                  <div key={c} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
                    <ShieldCheck className="size-4 shrink-0 text-emerald-200" />
                    <span className="text-sm text-white">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <BrandLogo />
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                  桃竹苗長照社會創新 NPO，結合捐血點數、居家照護設備與數位遺產服務，
                  讓善行成為家人最好的長照保障。
                </p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-emerald-700" />
                  <span>+886 3 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-emerald-700" />
                  <span>hello@vigilkeepers.tw</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0 text-emerald-700" />
                  <span>桃園市中壢區中大路 300 號</span>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
              © 2025 Vigil Keepers. 守護者計畫 · 非營利組織
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
