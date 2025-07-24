"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Package, Calendar, MapPin, Clock, Download, Printer, History, Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrackingMap } from "@/components/tracking-map"
import { PackageHistory } from "@/components/package-history"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import { PrintService } from "@/lib/print-service"
import { NotificationService } from "@/lib/notifications"

export default function DashboardPage() {
  const { isAuthenticated, user } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    // Request notification permission on dashboard load
    const requestNotifications = async () => {
      const service = NotificationService.getInstance()
      await service.requestPermission()
    }
    requestNotifications()
  }, [])

  if (!isAuthenticated) {
    return null
  }

  const packageData = {
    trackingNumber: "FX123456789PE",
    status: "inTransit",
    from: "Westchester, New York City, USA",
    to: "Av larco 740 vista alegre - victor larco, Trujillo Peru",
    receiver: "Ivan Humberto",
    senderName: user?.fullName || "Sonia Ben Martinez",
    senderAddress: user?.address || "123 Westchester Ave, White Plains, NY 10601, USA",
    senderPhone: user?.phoneNumber || "+1 (555) 123-4567",
    receiverAddress: "Av larco 740 vista alegre - victor larco, Trujillo Peru",
    estimatedDelivery: "2-5 August 2024",
    service: "Express International",
    weight: "2.5 kg",
    dimensions: "30x20x15 cm",
    timeline: [
      {
        date: "22 July 2024",
        status: "Package Left Origin",
        location: "Westchester, NY",
        completed: true,
      },
      {
        date: "23 July 2024",
        status: "Shipped",
        location: "JFK International Airport, NY",
        completed: true,
      },
      {
        date: "25 July 2024",
        status: "In Transit",
        location: "Lima, Peru Distribution Center",
        completed: true,
      },
      {
        date: "26 July 2024",
        status: "Out for Delivery",
        location: "Trujillo Distribution Center",
        completed: false,
      },
      {
        date: "2-5 August 2024",
        status: "Delivered",
        location: "Av larco 740 vista alegre",
        completed: false,
      },
    ],
  }

  const mapData = {
    origin: {
      lat: 40.9584,
      lng: -73.7781,
      name: "Westchester, NY",
    },
    destination: {
      lat: -8.1116,
      lng: -79.029,
      name: "Trujillo, Peru",
    },
    currentLocation: {
      lat: -12.0464,
      lng: -77.0428,
      name: "Lima Distribution Center",
    },
  }

  const handlePrintLabel = () => {
    PrintService.printShippingLabel(packageData)
  }

  const handlePrintReceipt = () => {
    PrintService.printReceipt(packageData)
  }

  const sendTestNotification = () => {
    const service = NotificationService.getInstance()
    service.sendPackageUpdate("in transit", "Lima Distribution Center")
  }

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white mb-2">{t("dashboard")}</h1>
          <p className="text-purple-200">Welcome back, {user?.fullName}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="glass-effect-dark border-purple-500/30">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-purple-600">
              <Package className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="history" className="text-white data-[state=active]:bg-purple-600">
              <History className="h-4 w-4 mr-2" />
              Package History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Package Details */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-left">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      {t("packageDetails")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-200">{t("trackingNumber")}</p>
                        <p className="text-lg font-mono font-bold">{packageData.trackingNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-purple-200">{t("status")}</p>
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30 mt-1">
                          {t(packageData.status as any)}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-purple-200">{t("from")}</p>
                        <p className="text-sm">{packageData.from}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-purple-200">{t("to")}</p>
                        <p className="text-sm">{packageData.to}</p>
                        <p className="text-sm font-medium mt-1 text-pink-300">Receiver: {packageData.receiver}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-purple-500/30">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-medium text-green-300">
                          {t("estimatedDelivery")}: {packageData.estimatedDelivery}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracking Timeline */}
                <Card
                  className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      {t("trackingDetails")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {packageData.timeline.map((event, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div
                              className={`h-4 w-4 rounded-full border-2 ${
                                event.completed
                                  ? "bg-green-500 border-green-500 animate-pulse-glow"
                                  : "bg-white/20 border-purple-300"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p
                                className={`text-sm font-medium ${event.completed ? "text-white" : "text-purple-300"}`}
                              >
                                {event.status}
                              </p>
                              <p className="text-xs text-purple-200">{event.date}</p>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="h-3 w-3 text-purple-400" />
                              <p className="text-xs text-purple-200">{event.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-right">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={handlePrintLabel}
                    >
                      <Printer className="h-4 w-4 mr-2" />
                      Print Shipping Label
                    </Button>
                    <Button
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                      variant="outline"
                      onClick={handlePrintReceipt}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Print Receipt
                    </Button>
                    <Button
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                      variant="outline"
                      onClick={sendTestNotification}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Test Notification
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-right"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardHeader>
                    <CardTitle>Delivery Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-200">Please deliver to the front door. Ring bell upon arrival.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tracking Map */}
            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  Live Package Tracking
                </CardTitle>
                <CardDescription className="text-purple-200">Real-time location of your package</CardDescription>
              </CardHeader>
              <CardContent>
                <TrackingMap {...mapData} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <PackageHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
