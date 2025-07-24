"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Package, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrackingMap } from "@/components/tracking-map"
import { useLanguage } from "@/contexts/language-context"

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingData, setTrackingData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { t } = useLanguage()
  const searchParams = useSearchParams()

  useEffect(() => {
    const number = searchParams.get("number")
    if (number) {
      setTrackingNumber(number)
      handleTrack(number)
    }
  }, [searchParams])

  const handleTrack = async (number: string = trackingNumber) => {
    if (!number.trim()) return

    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (number === "FX123456789PE" || number.includes("FX")) {
        setTrackingData({
          trackingNumber: number,
          status: "inTransit",
          from: "Westchester, New York City, USA",
          to: "Av larco 740 vista alegre - victor larco, Trujillo Peru",
          receiver: "Ivan Humberto",
          estimatedDelivery: "2-5 August 2024",
          timeline: [
            {
              date: "22 July 2024",
              time: "10:30 AM",
              status: "Package Left Origin",
              location: "Westchester, NY",
              completed: true,
            },
            {
              date: "23 July 2024",
              time: "2:15 PM",
              status: "Shipped",
              location: "JFK International Airport, NY",
              completed: true,
            },
            {
              date: "25 July 2024",
              time: "8:45 AM",
              status: "In Transit",
              location: "Lima, Peru Distribution Center",
              completed: true,
            },
            {
              date: "26 July 2024",
              time: "Expected 11:00 AM",
              status: "Out for Delivery",
              location: "Trujillo Distribution Center",
              completed: false,
            },
            {
              date: "2-5 August 2024",
              time: "By End of Day",
              status: "Delivered",
              location: "Av larco 740 vista alegre",
              completed: false,
            },
          ],
        })
      } else {
        setError("Tracking number not found. Please check and try again.")
        setTrackingData(null)
      }
      setIsLoading(false)
    }, 1500)
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

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">{t("trackPackage")}</h1>
          <p className="text-purple-200 mt-2">Enter your tracking number to see real-time updates</p>
        </div>

        {/* Search Form */}
        <Card
          className="mb-8 glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder={t("trackingPlaceholder")}
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder-white/60"
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                />
              </div>
              <Button
                onClick={() => handleTrack()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 px-8 animate-pulse-glow"
                disabled={isLoading || !trackingNumber.trim()}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Tracking...</span>
                  </div>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    {t("trackButton")}
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Error Message */}
        {error && (
          <Alert variant="destructive" className="mb-8 glass-effect-dark border-red-500/30 animate-slide-in-up">
            <AlertDescription className="text-red-300">{error}</AlertDescription>
          </Alert>
        )}

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-8">
            {/* Package Summary */}
            <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5" />
                  {t("packageDetails")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("trackingNumber")}</p>
                    <p className="text-lg font-mono font-bold">{trackingData.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("status")}</p>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30 mt-1">
                      {t(trackingData.status as any)}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("from")}</p>
                    <p className="text-sm">{trackingData.from}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("to")}</p>
                    <p className="text-sm">{trackingData.to}</p>
                    <p className="text-xs text-pink-300 mt-1">Receiver: {trackingData.receiver}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-purple-500/30">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium text-green-300">
                      {t("estimatedDelivery")}: {trackingData.estimatedDelivery}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Map */}
            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  Live Package Location
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Real-time tracking of your package journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TrackingMap {...mapData} />
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  {t("trackingDetails")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.timeline.map((event: any, index: number) => (
                    <div key={index} className="relative flex items-start space-x-4">
                      {/* Timeline line */}
                      {index < trackingData.timeline.length - 1 && (
                        <div className="absolute left-2 top-6 w-0.5 h-16 bg-purple-500/30"></div>
                      )}

                      {/* Status indicator */}
                      <div className="flex-shrink-0 relative">
                        <div
                          className={`h-4 w-4 rounded-full border-2 ${
                            event.completed
                              ? "bg-green-500 border-green-500 animate-pulse-glow"
                              : index === trackingData.timeline.findIndex((e: any) => !e.completed)
                                ? "bg-blue-500 border-blue-500 animate-pulse"
                                : "bg-white/20 border-purple-300"
                          }`}
                        />
                      </div>

                      {/* Event details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${event.completed ? "text-white" : "text-purple-300"}`}>
                            {event.status}
                          </p>
                          <div className="text-right">
                            <p className="text-xs text-purple-200">{event.date}</p>
                            <p className="text-xs text-purple-300">{event.time}</p>
                          </div>
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
        )}
      </div>
    </div>
  )
}
