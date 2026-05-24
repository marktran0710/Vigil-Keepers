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

const operations = [
  {
    label: "Active elders",
    value: "128",
    detail: "6 require follow-up today",
    icon: HeartPulse,
    tone: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    label: "Care workers",
    value: "24",
    detail: "18 currently assigned",
    icon: Users,
    tone: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    label: "Open requests",
    value: "17",
    detail: "4 high priority",
    icon: ClipboardList,
    tone: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

const queue = [
  ["High", "Medication missed", "Mrs. Chen", "Assign nurse callback"],
  ["Medium", "Family requested visit change", "Mr. Lin", "Confirm new schedule"],
  ["Low", "Device sync delayed", "Mr. Huang", "Send setup guide"],
];

const schedule = [
  ["09:30", "Home visit", "Da'an District", "Assigned"],
  ["11:00", "Wellness review", "Remote", "Pending notes"],
  ["14:30", "Care plan update", "Zhongshan District", "Confirmed"],
];

export function AdminDashboard() {
  const { logout } = useAuth();
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
                Administrator console
              </h1>
              <p className="text-sm text-slate-500">
                Service operations, care requests, and team coordination
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm" className="bg-white">
                <Home className="size-4" />
                Home
              </Button>
            </Link>
            <LanguageSwitcher />
            <Button variant="outline" size="sm" className="bg-white" onClick={handleLogout}>
              <LogOut className="size-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                Admin mode
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Coordinate care services with clear priorities.
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Administrators can monitor service demand, review exceptions,
                assign care workers, and keep families informed from one console.
              </p>
            </div>
            <Button className="h-12 bg-slate-950 px-5 text-base hover:bg-slate-800">
              <CalendarClock className="size-5" />
              Review schedule
            </Button>
          </div>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          {operations.map((item) => (
            <Card key={item.label} className={`border shadow-sm ${item.tone}`}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium opacity-80">{item.label}</p>
                    <p className="mt-2 text-4xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm opacity-80">{item.detail}</p>
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
                Care request queue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {queue.map(([priority, issue, elder, action]) => (
                <div
                  key={`${issue}-${elder}`}
                  className="grid gap-3 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[90px_1fr_auto]"
                >
                  <Badge
                    className={
                      priority === "High"
                        ? "w-fit bg-rose-100 text-rose-700 hover:bg-rose-100"
                        : priority === "Medium"
                          ? "w-fit bg-amber-100 text-amber-700 hover:bg-amber-100"
                          : "w-fit bg-slate-100 text-slate-700 hover:bg-slate-100"
                    }
                  >
                    {priority}
                  </Badge>
                  <div>
                    <p className="font-medium text-slate-950">{issue}</p>
                    <p className="text-sm text-slate-500">{elder}</p>
                  </div>
                  <Button variant="outline" className="bg-white">
                    {action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-emerald-600" />
                Today&apos;s care schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schedule.map(([time, task, location, status]) => (
                <div key={`${time}-${task}`} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-950">{time}</p>
                    <Badge className="bg-white text-slate-600 hover:bg-white">
                      {status}
                    </Badge>
                  </div>
                  <p className="mt-2 font-medium">{task}</p>
                  <p className="text-sm text-slate-500">{location}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
