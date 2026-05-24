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

const serviceCards = [
  {
    icon: ShieldCheck,
    title: "Final dignity planning",
    copy: "Register religious preferences, funeral wishes, burial choices, and support needs before a crisis happens.",
    tone: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: Database,
    title: "Case tracking and reporting",
    copy: "Connect registrations, case progress, government notifications, and care records in one traceable workflow.",
    tone: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: Coins,
    title: "Social contribution points",
    copy: "Reward blood donation, organ donation intent, and volunteering with points for healthcare or funeral support.",
    tone: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];

const trustStats = [
  ["1 plan", "for final wishes"],
  ["4 sectors", "government, medical, legal, funeral"],
  ["100%", "traceable case progress"],
  ["1 place", "for memorial and records"],
];

const visualStories = [
  {
    icon: Building2,
    eyebrow: "Service network",
    title: "One coordinated path across public and care partners",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "Government, hospital, legal, funeral, and community partners work from the same case record.",
    chips: ["Government", "Hospital", "Legal", "Funeral", "Community"],
  },
  {
    icon: FileCheck2,
    eyebrow: "Digital tools",
    title: "Final wishes become a clear, traceable care record",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "Registration, LINE reminders, case progress, and digital memorials stay connected.",
    chips: ["Register", "Notify", "Track", "Remember"],
  },
  {
    icon: HandHeart,
    eyebrow: "Human value",
    title: "Less fear, more dignity, and fewer people left unseen",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "The service supports people without reliable family care and families under financial pressure.",
    chips: ["Dignity", "Belonging", "Support", "Relief"],
  },
  {
    icon: HeartPulse,
    eyebrow: "Contribution points",
    title: "Donation and volunteering become practical future support",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "Blood donation, organ donation intent, and volunteering can translate into care or funeral support.",
    chips: ["Donate", "Volunteer", "Earn", "Use"],
  },
  {
    icon: Scale,
    eyebrow: "Trust layer",
    title: "Consent, pricing, and progress stay visible",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "Legal records, transparent quotes, partner verification, and audit trails protect every case.",
    chips: ["Consent", "Pricing", "Audit", "Verification"],
  },
  {
    icon: Megaphone,
    eyebrow: "Community access",
    title: "Meet elders where planning conversations already happen",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "Healthcare sites, markets, community centers, LINE, and social channels make the concept approachable.",
    chips: ["LINE", "Clinics", "Markets", "Community"],
  },
  {
    icon: Landmark,
    eyebrow: "Sustainability",
    title: "Shared payment paths keep service costs realistic",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    caption: "Personal contribution, public subsidy, partner discounts, and institutional payments can work together.",
    chips: ["Subsidy", "Partner", "Family", "Public"],
  },
];

const journeySteps = [
  {
    icon: FileCheck2,
    label: "Plan",
  },
  {
    icon: Database,
    label: "Record",
  },
  {
    icon: Building2,
    label: "Coordinate",
  },
  {
    icon: Coins,
    label: "Support",
  },
  {
    icon: ShieldCheck,
    label: "Remember",
  },
];

const machineFlow = [
  {
    icon: Watch,
    label: "Wearables",
    detail: "Vitals, sleep, SOS",
  },
  {
    icon: Wifi,
    label: "Home unit",
    detail: "BLE, Wi-Fi, edge gateway",
  },
  {
    icon: Cpu,
    label: "AI analysis",
    detail: "Fall and anomaly detection",
  },
  {
    icon: Cloud,
    label: "Cloud platform",
    detail: "Secure data and rules",
  },
  {
    icon: Bell,
    label: "Family alerts",
    detail: "LINE, SMS, app, call",
  },
];

const additionalValues = [
  "Consent-first",
  "Audit trails",
  "Grief support",
  "Natural burial",
  "Verified partners",
  "Accessible by LINE",
];

const socialContacts = [
  ["FB", "CareBridge Elder Support"],
  ["IG", "@carebridge.support"],
  ["LINE", "@carebridge"],
];

export function Presentation() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7faf8] text-slate-950">
      <ThreeBackground />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <BrandLogo compact />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login/elder">
              <Button variant="outline" size="sm" className="bg-white">
                Elder View
              </Button>
            </Link>
            <Link to="/login/admin" className="hidden md:block">
              <Button variant="outline" size="sm" className="bg-white">
                Admin
              </Button>
            </Link>
            <Link to="/login/family" className="hidden sm:block">
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
                Social innovation for final dignity
              </Badge>
              <Badge className="border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-50">
                Government, medical, legal, and funeral coordination
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              A trusted platform for dignified end-of-life planning.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              CareBridge helps people plan final wishes, coordinate public and
              medical reporting, arrange funeral services, and create a digital
              memorial so no one is left without dignity or remembrance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/login/elder">
                <Button
                  size="lg"
                  className="h-12 bg-emerald-700 px-6 text-base hover:bg-emerald-800"
                >
                  Start planning
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link to="/login/family">
                <Button size="lg" variant="outline" className="h-12 bg-white px-6 text-base">
                  View family coordination
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
                <div className="mt-1 text-2xl font-semibold">Registered</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="text-sm text-blue-700">Case status</div>
                <div className="mt-1 text-2xl font-semibold">Tracked</div>
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
                Elder machine system
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                A home unit that watches quietly and alerts family when it matters.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The device combines a projector, camera, speaker, microphone,
                local AI, encrypted storage, and cloud alerts so elders can stay
                at home with stronger safety coverage.
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
                    Vision
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Cpu className="mx-auto mb-2 size-5 text-emerald-700" />
                    Edge AI
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-slate-600">
                    <Bell className="mx-auto mb-2 size-5 text-rose-700" />
                    Alerts
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f7faf8] p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    Monitoring flow
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Wearable data, local AI, cloud records, and family alerts.
                  </p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  Secure path
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
                {["Fall", "SOS", "No activity", "Heart anomaly", "Low battery"].map((alert) => (
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
                What CareBridge provides
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The platform combines end-of-life preference registration,
                public-sector case coordination, digital memorials, and a
                contribution-points model connected to care and funeral support.
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
                How it works
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                A visual path from planning to remembrance.
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
                Visual service map
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                The model shown through people, places, and actions.
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
                Additional values to add
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Trust is the product, not only a feature.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Because this service handles death, family anxiety, public
                systems, money, and memory, the website should emphasize consent,
                legality, transparency, and emotional support.
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
                A trusted coordination platform for end-of-life planning,
                government reporting, funeral services, digital memorials, and
                contribution-based care support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  Contact us
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
                  Social channels
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
