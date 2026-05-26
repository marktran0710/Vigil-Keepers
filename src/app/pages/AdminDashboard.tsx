import React from "react";
import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Home,
  LogOut,
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

const operations = [
  {
    label: { en: "Active elders", "zh-TW": "服務中長者" },
    value: "128",
    detail: { en: "6 require follow-up today", "zh-TW": "今日 6 位需要追蹤" },
    icon: HeartPulse,
    tone: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    label: { en: "Care workers", "zh-TW": "照護人員" },
    value: "24",
    detail: { en: "18 currently assigned", "zh-TW": "18 位已指派" },
    icon: Users,
    tone: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    label: { en: "Open requests", "zh-TW": "待處理請求" },
    value: "17",
    detail: { en: "4 high priority", "zh-TW": "4 件高優先" },
    icon: ClipboardList,
    tone: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

const queue = [
  [{ en: "High", "zh-TW": "高" }, { en: "Medication missed", "zh-TW": "未完成用藥" }, { en: "Mrs. Chen", "zh-TW": "陳女士" }, { en: "Assign nurse callback", "zh-TW": "指派護理師回電" }],
  [{ en: "Medium", "zh-TW": "中" }, { en: "Family requested visit change", "zh-TW": "家屬申請變更訪視" }, { en: "Mr. Lin", "zh-TW": "林先生" }, { en: "Confirm new schedule", "zh-TW": "確認新時段" }],
  [{ en: "Low", "zh-TW": "低" }, { en: "Device sync delayed", "zh-TW": "設備同步延遲" }, { en: "Mr. Huang", "zh-TW": "黃先生" }, { en: "Send setup guide", "zh-TW": "傳送設定指南" }],
];

const schedule = [
  ["09:30", { en: "Home visit", "zh-TW": "居家訪視" }, { en: "Da'an District", "zh-TW": "大安區" }, { en: "Assigned", "zh-TW": "已指派" }],
  ["11:00", { en: "Wellness review", "zh-TW": "健康狀態檢視" }, { en: "Remote", "zh-TW": "遠端" }, { en: "Pending notes", "zh-TW": "待補紀錄" }],
  ["14:30", { en: "Care plan update", "zh-TW": "照護計畫更新" }, { en: "Zhongshan District", "zh-TW": "中山區" }, { en: "Confirmed", "zh-TW": "已確認" }],
];

export function AdminDashboard() {
  const { logout } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login/admin", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 ring-1 ring-slate-200">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold leading-tight">
                {language === "zh-TW" ? "管理者控制台" : "Administrator console"}
              </h1>
              <p className="text-sm text-slate-500">
                {language === "zh-TW" ? "服務營運、照護請求與團隊協調" : "Service operations, care requests, and team coordination"}
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
        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                {language === "zh-TW" ? "管理者模式" : "Admin mode"}
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                {language === "zh-TW" ? "用清楚優先順序協調照護服務。" : "Coordinate care services with clear priorities."}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                {language === "zh-TW"
                  ? "管理者可以監控服務需求、檢視異常案件、指派照護人員，並從同一個控制台同步通知家屬。"
                  : "Administrators can monitor service demand, review exceptions, assign care workers, and keep families informed from one console."}
              </p>
            </div>
            <Button className="h-12 bg-slate-950 px-5 text-base hover:bg-slate-800">
              <CalendarClock className="size-5" />
              {language === "zh-TW" ? "查看排程" : "Review schedule"}
            </Button>
          </div>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          {operations.map((item) => (
            <Card key={text(item.label, language)} className={`border shadow-sm ${item.tone}`}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium opacity-80">{text(item.label, language)}</p>
                    <p className="mt-2 text-4xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm opacity-80">{text(item.detail, language)}</p>
                  </div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-white/80">
                    <item.icon className="size-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="size-5 text-amber-600" />
                {language === "zh-TW" ? "照護請求佇列" : "Care request queue"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {queue.map(([priority, issue, elder, action]) => (
                <div
                  key={`${text(issue, language)}-${text(elder, language)}`}
                  className="grid gap-3 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[90px_1fr_auto]"
                >
                  <Badge
                    className={
                      text(priority, "en") === "High"
                        ? "w-fit bg-rose-100 text-rose-700 hover:bg-rose-100"
                        : text(priority, "en") === "Medium"
                          ? "w-fit bg-amber-100 text-amber-700 hover:bg-amber-100"
                          : "w-fit bg-slate-100 text-slate-700 hover:bg-slate-100"
                    }
                  >
                    {text(priority, language)}
                  </Badge>
                  <div>
                    <p className="font-medium text-slate-950">{text(issue, language)}</p>
                    <p className="text-sm text-slate-500">{text(elder, language)}</p>
                  </div>
                  <Button variant="outline" className="bg-white">
                    {text(action, language)}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-emerald-600" />
                {language === "zh-TW" ? "今日照護排程" : "Today's care schedule"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schedule.map(([time, task, location, status]) => (
                <div key={`${time}-${text(task, language)}`} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-950">{time}</p>
                    <Badge className="bg-white text-slate-600 hover:bg-white">
                      {text(status, language)}
                    </Badge>
                  </div>
                  <p className="mt-2 font-medium">{text(task, language)}</p>
                  <p className="text-sm text-slate-500">{text(location, language)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
