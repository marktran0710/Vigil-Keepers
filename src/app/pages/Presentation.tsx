import React from 'react';
import { ArrowRight, Droplet, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Link } from 'react-router';

export function Presentation() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="size-8 text-red-500" />
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CareBridge
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/elder">
              <Button variant="outline" size="sm">Elder View</Button>
            </Link>
            <Link to="/family">
              <Button variant="outline" size="sm">Family View</Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 mb-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              {t('socialInnovation')}
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Innovation Award 2026
            </Badge>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('elderlyCare')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transforming blood donation into elderly care subsidies through innovative technology and social impact
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {t('learnMore')}
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('businessModel')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A sustainable ecosystem connecting blood donors, families, and elderly care services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <Card className="relative overflow-hidden border-2 hover:shadow-2xl transition-shadow group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-red-500 to-pink-500 opacity-10 rounded-bl-full"></div>
            <CardHeader>
              <div className="size-16 bg-linear-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Droplet className="size-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{t('step1')}</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwbWVkaWNhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc5MTczNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blood donation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 leading-relaxed">{t('step1Desc')}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-red-600 font-medium">
                <Award className="size-4" />
                <span>+500 points per donation</span>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="relative overflow-hidden border-2 hover:shadow-2xl transition-shadow group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
            <CardHeader>
              <div className="size-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="size-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{t('step2')}</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGZ1dHVyZXxlbnwxfHx8fDE3NzkwOTk4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technology"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 leading-relaxed">{t('step2Desc')}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-600 font-medium">
                <Heart className="size-4" />
                <span>Flexible conversion rates</span>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="relative overflow-hidden border-2 hover:shadow-2xl transition-shadow group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-500 to-pink-500 opacity-10 rounded-bl-full"></div>
            <CardHeader>
              <div className="size-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="size-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{t('step3')}</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpbmclMjBoYW5kcyUyMHN1cHBvcnQlMjBoZWxwfGVufDF8fHx8MTc3OTE3OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Care"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 leading-relaxed">{t('step3Desc')}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-purple-600 font-medium">
                <Heart className="size-4" />
                <span>24/7 care support</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">12,500</div>
              <div className="text-blue-100">Blood Donations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">3,200</div>
              <div className="text-blue-100">Families Helped</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Heart className="size-6 text-orange-600" />
                </div>
                Elder-Friendly Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Large typography, high contrast design, and simple navigation optimized for seniors with limited vision</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="size-6 text-blue-600" />
                </div>
                Real-Time Health Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Family dashboard with health data visualization, device management, and instant alerts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="size-6 text-purple-600" />
                </div>
                Memory Sharing Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Upload and share photos and videos to keep families connected and create lasting memories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Droplet className="size-6 text-red-600" />
                </div>
                Rewards System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Transparent point tracking and conversion system that turns generosity into tangible care benefits</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Together, we can create a sustainable ecosystem of care and compassion
          </p>
          <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
            Get Started Today
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="size-6 text-red-500" />
            <span className="text-xl font-bold">CareBridge</span>
          </div>
          <p className="text-gray-400">
            Innovation Award 2026 · Social Enterprise · Elderly Care Solution
          </p>
        </div>
      </footer>
    </div>
  );
}
