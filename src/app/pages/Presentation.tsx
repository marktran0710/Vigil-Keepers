import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Home,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ThreeBackground } from "../components/ThreeBackground";

const serviceCards = [
  {
    icon: HeartPulse,
    title: "Wellness monitoring",
    copy: "Daily check-ins, vital trends, and gentle alerts help families notice changes early.",
    tone: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: MessageCircle,
    title: "Family updates",
    copy: "Clear messages, reminders, and shared notes keep everyone involved without noise.",
    tone: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: Home,
    title: "Care service support",
    copy: "Organize practical services such as home visits, medication reminders, and care subsidies.",
    tone: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];

const trustStats = [
  ["24/7", "family visibility"],
  ["3 min", "daily check-in"],
  ["98%", "care satisfaction"],
  ["1 place", "for care updates"],
];

export function Presentation() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7faf8] text-slate-950">
      <ThreeBackground />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <span className="block text-lg font-semibold leading-none text-slate-950">
                CareBridge
              </span>
              <span className="hidden text-xs text-slate-500 sm:block">
                Elder support services
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/elder">
              <Button variant="outline" size="sm" className="bg-white">
                Elder View
              </Button>
            </Link>
            <Link to="/family" className="hidden sm:block">
              <Button variant="outline" size="sm" className="bg-white">
                Family View
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
                {t("socialInnovation")}
              </Badge>
              <Badge className="border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-50">
                Family-first care coordination
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              {t("elderlyCare")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              CareBridge helps elders stay supported at home while giving families
              a calm, reliable way to coordinate health updates, reminders,
              messages, and care services.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/elder">
                <Button
                  size="lg"
                  className="h-12 bg-emerald-700 px-6 text-base hover:bg-emerald-800"
                >
                  Open elder support
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link to="/family">
                <Button size="lg" variant="outline" className="h-12 bg-white px-6 text-base">
                  View family dashboard
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-emerald-900/10">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Caregiver helping an elder at home"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="text-sm text-emerald-700">Today</div>
                <div className="mt-1 text-2xl font-semibold">Stable</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="text-sm text-blue-700">Next visit</div>
                <div className="mt-1 text-2xl font-semibold">2:30 PM</div>
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

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              {t("businessModel")}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The product is designed around the routines families actually
              manage: health awareness, communication, service coordination,
              and confidence that an elder is not alone.
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
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
            <div>
              <Badge className="bg-white/10 text-white hover:bg-white/10">
                Professional care workflow
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Built for elders, families, and care teams.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                The interface keeps elder tasks simple while giving families
                enough context to act quickly and respectfully.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Medication and visit reminders",
                "Wellness alerts and family notices",
                "Shared family responsibilities",
                "Health trends and device summaries",
              ].map((label) => (
                <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <CheckCircle2 className="size-5 text-emerald-300" />
                  <span className="text-slate-100">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
