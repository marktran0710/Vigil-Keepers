import React from "react";
import { Home, Heart, MessageCircle, Play } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { NavItem } from "../components/NavItem";
import { ActionCard } from "../components/ActionCard";
import { ThreeBackground } from "../components/ThreeBackground";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const IMAGE_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EImage not available%3C/text%3E%3C/svg%3E";

export function ElderHome() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleWatchVideo = () => {
    console.log("Play video action");
  };

  const handleHealthDetails = () => {
    navigate("/health");
  };

  const handleMessagesDetails = () => {
    navigate("/messages");
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-orange-50 to-green-50">
      <ThreeBackground />

      <nav className="relative z-10 border-b-4 border-orange-200 bg-white px-4 py-4 shadow-sm sm:px-6 md:px-8 md:py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:flex lg:gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavItem
              icon={Home}
              label={t("home")}
              to="/elder"
              iconColor="text-orange-500"
              hoverColor="hover:bg-orange-100"
            />
            <NavItem
              icon={Heart}
              label={t("health")}
              to="/health"
              iconColor="text-green-500"
              hoverColor="hover:bg-green-100"
            />
            <NavItem
              icon={MessageCircle}
              label={t("message")}
              to="/messages"
              iconColor="text-blue-500"
              hoverColor="hover:bg-blue-100"
            />
          </div>
          <div className="flex justify-center lg:scale-125 lg:justify-end">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
        <div className="mb-8 text-center sm:mb-10 md:mb-12 md:text-left">
          <h1 className="mb-3 text-4xl font-medium leading-tight text-gray-800 sm:mb-5 sm:text-5xl md:mb-6 md:text-6xl">
            {t("welcomeBack")}
          </h1>
          <p className="text-xl text-gray-600 sm:text-2xl md:text-3xl">
            {t("todayFeeling")}
          </p>
        </div>

        <Card className="mb-8 overflow-hidden border-2 border-orange-200 shadow-xl sm:mb-10 sm:border-4 md:mb-12">
          <div className="relative">
            <img
              src={HERO_IMAGE}
              alt="Elder care video"
              className="h-56 w-full object-cover sm:h-72 md:h-96"
              onError={(e) => {
                e.currentTarget.src = IMAGE_FALLBACK;
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                size="lg"
                className="h-14 px-6 text-lg bg-orange-500 hover:bg-orange-600 shadow-2xl sm:h-16 sm:px-8 sm:text-xl md:h-24 md:px-12 md:text-3xl"
                onClick={handleWatchVideo}
                aria-label="Play video about elder care"
              >
                <Play className="size-5 fill-current sm:size-6 md:size-8" />
                {t("watchVideo")}
              </Button>
            </div>
          </div>
          <div className="bg-linear-to-r from-orange-100 to-green-100 p-5 sm:p-6 md:p-8">
            <p className="text-lg text-gray-700 sm:text-xl md:text-2xl">
              {t("todayFeeling")}
            </p>
          </div>
        </Card>

        <div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8"
          role="region"
          aria-label="Action cards"
        >
          <ActionCard
            icon={Heart}
            title={t("health")}
            description={t("checkHealth")}
            buttonLabel={t("viewDetails")}
            borderColor="border-green-200"
            buttonColor="bg-green-500"
            hoverButtonColor="hover:bg-green-600"
            gradientFrom="bg-linear-to-br from-green-50"
            iconColor="text-green-500"
            onAction={handleHealthDetails}
          />

          <ActionCard
            icon={MessageCircle}
            title={t("message")}
            description={t("newMessages")}
            buttonLabel={t("viewDetails")}
            borderColor="border-blue-200"
            buttonColor="bg-blue-500"
            hoverButtonColor="hover:bg-blue-600"
            gradientFrom="bg-linear-to-br from-blue-50"
            iconColor="text-blue-500"
            onAction={handleMessagesDetails}
          />
        </div>
      </main>
    </div>
  );
}
