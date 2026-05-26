import React from "react";
import { ArrowRight, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { UserRole, useAuth } from "../context/AuthContext";
import { Language, useLanguage } from "../context/LanguageContext";

type LocalizedText = {
  en: string;
  "zh-TW": string;
};

const text = (value: LocalizedText, language: Language) => value[language] || value.en;

const loginModes: Record<
  UserRole,
  {
    title: LocalizedText;
    eyebrow: LocalizedText;
    description: LocalizedText;
    destination: string;
    icon: typeof ShieldCheck;
    accent: string;
    button: LocalizedText;
  }
> = {
  admin: {
    title: { en: "Administrator login", "zh-TW": "管理者登入" },
    eyebrow: { en: "Admin mode", "zh-TW": "管理者模式" },
    description: {
      en: "For service operators managing elders, care teams, schedules, and requests.",
      "zh-TW": "提供服務營運人員管理長者資料、照護團隊、排程與服務請求。",
    },
    destination: "/admin",
    icon: ShieldCheck,
    accent: "bg-slate-100 text-slate-800 border-slate-200",
    button: { en: "Enter admin console", "zh-TW": "進入管理控制台" },
  },
  elder: {
    title: { en: "Elder user login", "zh-TW": "長者登入" },
    eyebrow: { en: "Elder mode", "zh-TW": "長者模式" },
    description: {
      en: "For elders using wellness check-ins, reminders, messages, and family contact.",
      "zh-TW": "提供長者進行健康確認、提醒、訊息與家屬聯絡。",
    },
    destination: "/elder",
    icon: HeartPulse,
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
    button: { en: "Enter elder view", "zh-TW": "進入長者介面" },
  },
  family: {
    title: { en: "Family login", "zh-TW": "家屬登入" },
    eyebrow: { en: "Family mode", "zh-TW": "家屬模式" },
    description: {
      en: "For family members reviewing updates, tasks, visits, and care communication.",
      "zh-TW": "提供家屬查看照護更新、任務、訪視與照護溝通。",
    },
    destination: "/family",
    icon: Users,
    accent: "bg-blue-50 text-blue-700 border-blue-100",
    button: { en: "Enter family dashboard", "zh-TW": "進入家屬儀表板" },
  },
};

function isUserRole(value: string | undefined): value is UserRole {
  return value === "admin" || value === "elder" || value === "family";
}

export function LoginPage() {
  const { role: roleParam } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { login, role: activeRole } = useAuth();
  const { language } = useLanguage();

  if (!isUserRole(roleParam)) {
    return <Navigate to="/" replace />;
  }

  const mode = loginModes[roleParam];
  const Icon = mode.icon;
  const from = typeof location.state === "object" && location.state !== null && "from" in location.state
    ? String(location.state.from)
    : mode.destination;

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(roleParam);
    navigate(from.startsWith(mode.destination) ? from : mode.destination, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
              {language === "zh-TW" ? "返回首頁" : "Back to workspace selection"}
            </Link>
            <Badge className={`mt-8 border ${mode.accent}`}>
              {text(mode.eyebrow, language)}
            </Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              {text(mode.title, language)}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              {text(mode.description, language)}
            </p>
            {activeRole && activeRole !== roleParam ? (
              <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                {language === "zh-TW"
                  ? `目前瀏覽器已登入其他模式，繼續操作會切換到${text(mode.eyebrow, language)}。`
                  : `You are currently signed into another mode. Continuing here will switch this browser session to ${text(mode.eyebrow, language).toLowerCase()}.`}
              </p>
            ) : null}
          </div>

          <Card className="border-slate-200 bg-white shadow-2xl shadow-slate-900/8">
            <CardContent className="p-6 sm:p-8">
              <div className={`mb-6 flex size-14 items-center justify-center rounded-2xl border ${mode.accent}`}>
                <Icon className="size-7" />
              </div>

              <form className="space-y-5" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="user-id">{language === "zh-TW" ? "使用者 ID" : "User ID"}</Label>
                  <Input
                    id="user-id"
                    placeholder={`${roleParam}.demo`}
                    autoComplete="username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{language === "zh-TW" ? "密碼" : "Password"}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={language === "zh-TW" ? "原型密碼" : "Prototype password"}
                    autoComplete="current-password"
                  />
                </div>

                <Button className="h-12 w-full bg-emerald-700 text-base hover:bg-emerald-800">
                  {text(mode.button, language)}
                  <ArrowRight className="size-5" />
                </Button>
              </form>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {language === "zh-TW"
                  ? "原型說明：每次登入只會啟用目前選擇的模式。"
                  : "Prototype note: each login activates only this selected mode in the browser session."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
