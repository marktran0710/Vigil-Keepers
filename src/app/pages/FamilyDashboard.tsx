import React from "react";
import {
  Activity,
  Bell,
  CalendarCheck,
  Heart,
  Home,
  LogOut,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useAuth } from "../context/AuthContext";
import { Language, useLanguage } from "../context/LanguageContext";

type LocalizedText = {
  en: string;
  "zh-TW": string;
};

const text = (value: LocalizedText, language: Language) => value[language] || value.en;

const overviewCards = [
  {
    icon: ShieldCheck,
    label: { en: "Care status", "zh-TW": "照護狀態" },
    value: { en: "Stable", "zh-TW": "穩定" },
    detail: { en: "Last wellness check at 8:45 AM", "zh-TW": "上次健康確認：上午 8:45" },
    tone: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    icon: Heart,
    label: { en: "Heart rate", "zh-TW": "心率" },
    value: { en: "72 bpm", "zh-TW": "72 bpm" },
    detail: { en: "Within usual range", "zh-TW": "位於平常範圍" },
    tone: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    icon: CalendarCheck,
    label: { en: "Next visit", "zh-TW": "下次訪視" },
    value: { en: "Tomorrow", "zh-TW": "明天" },
    detail: { en: "Care assistant at 10:00 AM", "zh-TW": "照護助理上午 10:00 到訪" },
    tone: "bg-blue-50 text-blue-700 border-blue-100",
  },
];

const updates = [
  ["8:45 AM", { en: "Wellness check completed", "zh-TW": "健康確認已完成" }, { en: "Mood and appetite reported normal.", "zh-TW": "情緒與食慾回報正常。" }],
  ["12:30 PM", { en: "Medication reminder", "zh-TW": "用藥提醒" }, { en: "Lunch medication reminder is scheduled.", "zh-TW": "午餐用藥提醒已排程。" }],
  ["2:30 PM", { en: "Family note", "zh-TW": "家屬備註" }, { en: "Daughter confirmed weekend visit.", "zh-TW": "女兒已確認週末探訪。" }],
];

const responsibilities = [
  [{ en: "Medication refill", "zh-TW": "藥物補充" }, { en: "Due Friday", "zh-TW": "週五前完成" }, { en: "Assigned to Mei", "zh-TW": "指派給 Mei" }],
  [{ en: "Doctor appointment", "zh-TW": "醫師門診" }, { en: "May 28, 10:30 AM", "zh-TW": "5 月 28 日上午 10:30" }, { en: "Assigned to David", "zh-TW": "指派給 David" }],
  [{ en: "Grocery support", "zh-TW": "採買支援" }, { en: "Weekly", "zh-TW": "每週" }, { en: "Assigned to Anna", "zh-TW": "指派給 Anna" }],
];

export function FamilyDashboard() {
  const { logout } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login/family", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-950">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
              <Users className="size-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold leading-tight">
                {language === "zh-TW" ? "家屬儀表板" : "Family dashboard"}
              </h1>
              <p className="text-sm text-slate-500">
                {language === "zh-TW" ? "家屬共享的照護資訊中心" : "Shared care visibility for family members"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm" className="bg-white">
                <Home className="size-4" />
                {language === "zh-TW" ? "首頁" : "Home"}
              </Button>
            </Link>
            <LanguageSwitcher />
            <Button variant="outline" size="sm" className="bg-white" onClick={handleLogout}>
              <LogOut className="size-4" />
              {language === "zh-TW" ? "登出" : "Logout"}
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-6 grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">
            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50">
              {language === "zh-TW" ? "家屬模式" : "Family mode"}
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              {language === "zh-TW" ? "讓家人同步掌握每日照護狀態。" : "Keep everyone aligned around daily care."}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {language === "zh-TW"
                ? "家屬可以查看健康更新、協調任務、聯繫長者，並了解照護團隊已完成的事項。"
                : "Family members can review health updates, coordinate tasks, message the elder, and see what the care team has already handled."}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 bg-blue-700 px-5 text-base hover:bg-blue-800">
                <MessageCircle className="size-5" />
                {language === "zh-TW" ? "傳訊給長者" : "Message elder"}
              </Button>
              <Button variant="outline" className="h-12 bg-white px-5 text-base">
                <Phone className="size-5" />
                {language === "zh-TW" ? "聯絡照護團隊" : "Call care team"}
              </Button>
            </div>
          </div>

          <Card className="border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-5 text-amber-600" />
                {language === "zh-TW" ? "優先提醒" : "Priority notice"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-slate-950">
                {language === "zh-TW" ? "需要補充藥物" : "Medication refill needed"}
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                {language === "zh-TW"
                  ? "目前處方藥預估將於本週五不足，請指派一位家屬確認領藥。"
                  : "The current prescription supply is estimated to run low this Friday. Assign one family member to confirm refill pickup."}
              </p>
              <Button variant="outline" className="mt-5 bg-white">
                {language === "zh-TW" ? "指派任務" : "Assign task"}
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          {overviewCards.map((item) => (
            <Card key={text(item.label, language)} className={`border p-5 shadow-sm ${item.tone}`}>
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/80">
                  <item.icon className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-medium opacity-80">{text(item.label, language)}</p>
                  <p className="mt-1 text-2xl font-semibold leading-tight">{text(item.value, language)}</p>
                  <p className="mt-2 text-sm opacity-80">{text(item.detail, language)}</p>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="size-5 text-emerald-600" />
                {language === "zh-TW" ? "今日照護時間軸" : "Today&apos;s care timeline"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {updates.map(([time, title, detail]) => (
                <div key={`${time}-${title}`} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-medium text-blue-700">{time}</p>
                  <p className="mt-1 font-semibold text-slate-950">{text(title, language)}</p>
                  <p className="mt-1 text-sm text-slate-500">{text(detail, language)}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck className="size-5 text-blue-600" />
                {language === "zh-TW" ? "家屬分工" : "Shared responsibilities"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {responsibilities.map(([task, due, owner]) => (
                <div key={text(task, language)} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-950">{text(task, language)}</p>
                      <p className="text-sm text-slate-500">{text(due, language)}</p>
                    </div>
                    <Badge className="bg-white text-slate-600 hover:bg-white">
                      {text(owner, language)}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
