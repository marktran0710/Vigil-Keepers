import React, { useState } from 'react';
import { Activity, Droplet, Heart, Image, Video, Upload, FileText, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router';

// Mock data for health charts
const healthData = [
  { day: 'Mon', heartRate: 72, bloodPressure: 120, steps: 5200 },
  { day: 'Tue', heartRate: 75, bloodPressure: 118, steps: 6800 },
  { day: 'Wed', heartRate: 70, bloodPressure: 122, steps: 4500 },
  { day: 'Thu', heartRate: 73, bloodPressure: 119, steps: 7200 },
  { day: 'Fri', heartRate: 71, bloodPressure: 121, steps: 5900 },
  { day: 'Sat', heartRate: 74, bloodPressure: 117, steps: 8100 },
  { day: 'Sun', heartRate: 72, bloodPressure: 120, steps: 6300 },
];

const mediaItems = [
  {
    id: 1,
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1528569937393-ee892b976859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBlbGRlcmx5JTIwcGhvdG8lMjBtZW1vcmllc3xlbnwxfHx8fDE3NzkxNzkyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Family Gathering',
    date: '2026-05-15',
  },
  {
    id: 2,
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1586498024141-1940debde48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwZ3JhbmRwYXJlbnQlMjBncmFuZGNoaWxkJTIwaGFwcHl8ZW58MXx8fHwxNzc5MTc5MjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Grandparent Time',
    date: '2026-05-12',
  },
  {
    id: 3,
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1658314755561-389d5660ee54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3ZWxsbmVzcyUyMGFjdGl2aXR5JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzc5MTc5MjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Morning Exercise',
    date: '2026-05-10',
  },
];

export function FamilyDashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('health');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Heart className="size-8 text-blue-600" />
            <h1 className="text-2xl font-semibold text-gray-800">{t('dashboard')}</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/elder">
              <Button variant="outline" size="sm">
                {t('home')}
              </Button>
            </Link>
            <Link to="/presentation">
              <Button variant="outline" size="sm">
                Presentation
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-[calc(100vh-73px)] p-6">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('health')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'health' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="size-5" />
              {t('healthReports')}
            </button>
            <button
              onClick={() => setActiveTab('devices')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'devices' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Smartphone className="size-5" />
              {t('deviceManagement')}
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'media' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Image className="size-5" />
              {t('mediaUpload')}
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'health' && (
            <div className="space-y-6">
              {/* Points Balance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplet className="size-5 text-red-500" />
                    {t('pointBalance')}
                  </CardTitle>
                  <CardDescription>Blood donation reward points</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-blue-600">2,450</span>
                    <span className="text-gray-500">points</span>
                  </div>
                  <Progress value={65} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2">65% of monthly goal (3,750 points)</p>
                </CardContent>
              </Card>

              {/* Health Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Heart className="size-4 text-red-500" />
                      {t('heartRate')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">72 <span className="text-base font-normal text-gray-500">bpm</span></div>
                    <p className="text-sm text-green-600 mt-1">Normal range</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Activity className="size-4 text-blue-500" />
                      {t('bloodPressure')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">120<span className="text-base font-normal text-gray-500">/80</span></div>
                    <p className="text-sm text-green-600 mt-1">Optimal</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Activity className="size-4 text-orange-500" />
                      {t('steps')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">6,300</div>
                    <p className="text-sm text-gray-500 mt-1">Daily average</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <Tabs defaultValue="heartRate" className="w-full">
                <TabsList>
                  <TabsTrigger value="heartRate">{t('heartRate')}</TabsTrigger>
                  <TabsTrigger value="bloodPressure">{t('bloodPressure')}</TabsTrigger>
                  <TabsTrigger value="steps">{t('steps')}</TabsTrigger>
                </TabsList>
                <TabsContent value="heartRate">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('dailyHealthStatus')} - {t('heartRate')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={healthData}>
                          <CartesianGrid strokeDasharray="3 3" key="grid-hr" />
                          <XAxis dataKey="day" key="xaxis-hr" />
                          <YAxis domain={[60, 80]} key="yaxis-hr" />
                          <Tooltip key="tooltip-hr" />
                          <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} key="line-hr" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="bloodPressure">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('dailyHealthStatus')} - {t('bloodPressure')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={healthData}>
                          <CartesianGrid strokeDasharray="3 3" key="grid-bp" />
                          <XAxis dataKey="day" key="xaxis-bp" />
                          <YAxis domain={[110, 130]} key="yaxis-bp" />
                          <Tooltip key="tooltip-bp" />
                          <Line type="monotone" dataKey="bloodPressure" stroke="#3b82f6" strokeWidth={2} key="line-bp" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="steps">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('dailyHealthStatus')} - {t('steps')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={healthData}>
                          <CartesianGrid strokeDasharray="3 3" key="grid-steps" />
                          <XAxis dataKey="day" key="xaxis-steps" />
                          <YAxis key="yaxis-steps" />
                          <Tooltip key="tooltip-steps" />
                          <Bar dataKey="steps" fill="#f97316" key="bar-steps" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === 'devices' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('deviceManagement')}</CardTitle>
                  <CardDescription>Manage connected health devices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Heart className="size-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Smart Watch</h3>
                          <p className="text-sm text-gray-500">Last synced: 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="size-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-green-600">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-100 rounded-lg">
                          <Activity className="size-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Blood Pressure Monitor</h3>
                          <p className="text-sm text-gray-500">Last synced: 5 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="size-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-green-600">Connected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-6">
              {/* Upload Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="size-5" />
                      {t('uploadPhoto')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="size-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload photos</p>
                      <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="size-5" />
                      {t('uploadVideo')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="size-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload videos</p>
                      <p className="text-sm text-gray-400">MP4, MOV up to 100MB</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Media Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('recentMedia')}</CardTitle>
                  <CardDescription>Shared memories and moments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {mediaItems.map((item) => (
                      <div key={item.id} className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-shadow cursor-pointer">
                        <img src={item.url} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-3 bg-white">
                          <h3 className="font-medium text-sm">{item.title}</h3>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
