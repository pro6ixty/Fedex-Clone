"use client"

import { useEffect, useState } from "react"
import { X, Package, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NotificationService } from "@/lib/notifications"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  timestamp: Date
}

export function NotificationManager() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [lastNotificationTime, setLastNotificationTime] = useState<number>(0)
  const [isDelivered, setIsDelivered] = useState(false)

  useEffect(() => {
    // Check initial permission
    if ("Notification" in window) {
      setPermission(Notification.permission)
    }

    // Load last notification time from localStorage
    const savedTime = localStorage.getItem("fedex-last-notification")
    if (savedTime) {
      setLastNotificationTime(Number.parseInt(savedTime))
    }

    // Check delivery status
    const deliveryStatus = localStorage.getItem("fedex-delivery-status")
    setIsDelivered(deliveryStatus === "delivered")

    // Set up 2-hour interval notifications until delivery is completed
    const interval = setInterval(() => {
      const now = Date.now()
      const twoHours = 2 * 60 * 60 * 1000 // 2 hours in milliseconds

      // Only send notifications if not delivered and 2 hours have passed
      if (!isDelivered && now - lastNotificationTime >= twoHours) {
        const packageUpdates = [
          {
            message: "Your package FX123456789PE is in transit through Lima Distribution Center",
            location: "Lima, Peru",
          },
          {
            message: "Your package FX123456789PE has cleared customs and is proceeding to final destination",
            location: "Trujillo Customs",
          },
          {
            message: "Your package FX123456789PE is out for delivery and will arrive today",
            location: "Trujillo Distribution Center",
          },
          {
            message: "Your package FX123456789PE is on the delivery vehicle",
            location: "Local Delivery Route",
          },
        ]

        const randomUpdate = packageUpdates[Math.floor(Math.random() * packageUpdates.length)]

        addNotification({
          id: Date.now().toString(),
          title: "Package Update",
          message: randomUpdate.message,
          type: "info",
          timestamp: new Date(),
        })

        setLastNotificationTime(now)
        localStorage.setItem("fedex-last-notification", now.toString())
      }
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [lastNotificationTime, isDelivered])

  const requestNotificationPermission = async () => {
    const service = NotificationService.getInstance()
    const granted = await service.requestPermission()
    setPermission(granted ? "granted" : "denied")
  }

  const addNotification = (notification: Notification) => {
    setNotifications((prev) => [notification, ...prev.slice(0, 4)]) // Keep only 5 notifications

    // Send browser notification if permission granted
    if (permission === "granted") {
      const service = NotificationService.getInstance()
      service.sendNotification(notification.title, {
        body: notification.message,
        icon: "/placeholder.svg?height=64&width=64",
      })
    }
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const markAsDelivered = () => {
    setIsDelivered(true)
    localStorage.setItem("fedex-delivery-status", "delivered")
    addNotification({
      id: Date.now().toString(),
      title: "Package Delivered!",
      message: "Your package FX123456789PE has been successfully delivered to Ivan Humberto",
      type: "success",
      timestamp: new Date(),
    })
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <Package className="h-5 w-5 text-yellow-500" />
      case "error":
        return <X className="h-5 w-5 text-red-500" />
      default:
        return <Truck className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <>
      {/* Permission Request */}
      {permission === "default" && (
        <div className="fixed top-4 right-4 z-50">
          <Card className="glass-effect-dark text-white border-purple-500/30">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-purple-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Enable Notifications</p>
                  <p className="text-xs text-gray-300">Get updates every 2 hours until delivery</p>
                </div>
                <Button size="sm" onClick={requestNotificationPermission} className="bg-purple-600 hover:bg-purple-700">
                  Enable
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Test Delivery Button (for demo purposes) */}
      {!isDelivered && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button onClick={markAsDelivered} className="bg-green-600 hover:bg-green-700 text-white" size="sm">
            Mark as Delivered (Demo)
          </Button>
        </div>
      )}

      {/* Notifications List */}
      <div className="fixed top-4 right-4 z-40 space-y-2 max-w-sm">
        {notifications.map((notification, index) => (
          <Card
            key={notification.id}
            className={`glass-effect-dark text-white border-purple-500/30 animate-slide-in-right hover-lift`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                {getIcon(notification.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{notification.title}</p>
                  <p className="text-xs text-gray-300 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-2">{notification.timestamp.toLocaleTimeString()}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeNotification(notification.id)}
                  className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
