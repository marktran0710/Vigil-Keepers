import { Home, Heart, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { Link } from "react-router";

export function ElderHome() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b-4 border-orange-200 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex gap-8">
            <Link to="/elder">
              <Button
                variant="ghost"
                size="lg"
                className="flex flex-col items-center gap-3 h-auto py-4 px-8 hover:bg-orange-100"
              >
                <Home className="w-12 h-12 text-orange-500" strokeWidth={2.5} />
                <span className="text-2xl font-medium">{t("home")}</span>
              </Button>
            </Link>
            <Link to="/elder">
              <Button
                variant="ghost"
                size="lg"
                className="flex flex-col items-center gap-3 h-auto py-4 px-8 hover:bg-green-100"
              >
                <Heart className="w-12 h-12 text-green-500" strokeWidth={2.5} />
                <span className="text-2xl font-medium">{t("health")}</span>
              </Button>
            </Link>
            <Link to="/elder">
              <Button
                variant="ghost"
                size="lg"
                className="flex flex-col items-center gap-3 h-auto py-4 px-8 hover:bg-blue-100"
              >
                <MessageCircle
                  className="w-12 h-12 text-blue-500"
                  strokeWidth={2.5}
                />
                <span className="text-2xl font-medium">{t("message")}</span>
              </Button>
            </Link>
          </div>
          <div className="scale-125">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-6xl font-medium text-gray-800 mb-6">
            {t("welcomeBack")}
          </h1>
          <p className="text-3xl text-gray-600">{t("todayFeeling")}</p>
        </div>

        {/* Video Section */}
        <Card className="mb-12 overflow-hidden border-4 border-orange-200 shadow-xl">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Elder care video"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button
                size="lg"
                className="h-24 px-12 text-3xl bg-orange-500 hover:bg-orange-600 shadow-2xl"
              >
                ▶ {t("watchVideo")}
              </Button>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-r from-orange-100 to-green-100">
            <p className="text-2xl text-gray-700">{t("todayFeeling")}</p>
          </div>
        </Card>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-12 border-4 border-green-200 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer bg-gradient-to-br from-green-50 to-white">
            <div className="flex items-center gap-6 mb-6">
              <Heart className="w-16 h-16 text-green-500" strokeWidth={2.5} />
              <h2 className="text-4xl font-medium text-gray-800">
                {t("health")}
              </h2>
            </div>
            <p className="text-2xl text-gray-600 mb-8">{t("checkHealth")}</p>
            <Button
              size="lg"
              className="w-full h-16 text-2xl bg-green-500 hover:bg-green-600"
            >
              {t("viewDetails")}
            </Button>
          </Card>

          <Card className="p-12 border-4 border-blue-200 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-6 mb-6">
              <MessageCircle
                className="w-16 h-16 text-blue-500"
                strokeWidth={2.5}
              />
              <h2 className="text-4xl font-medium text-gray-800">
                {t("message")}
              </h2>
            </div>
            <p className="text-2xl text-gray-600 mb-8">{t("newMessages")}</p>
            <Button
              size="lg"
              className="w-full h-16 text-2xl bg-blue-500 hover:bg-blue-600"
            >
              {t("viewDetails")}
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
