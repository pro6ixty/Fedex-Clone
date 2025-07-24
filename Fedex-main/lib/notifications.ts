export class NotificationService {
  private static instance: NotificationService
  private permission: NotificationPermission = "default"

  private constructor() {
    this.checkPermission()
  }

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService()
    }
    return NotificationService.instance
  }

  private checkPermission() {
    if ("Notification" in window) {
      this.permission = Notification.permission
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications")
      return false
    }

    if (this.permission === "granted") {
      return true
    }

    const permission = await Notification.requestPermission()
    this.permission = permission
    return permission === "granted"
  }

  async sendNotification(title: string, options?: NotificationOptions) {
    if (this.permission !== "granted") {
      const granted = await this.requestPermission()
      if (!granted) return
    }

    const notification = new Notification(title, {
      icon: "/favicon.ico",
      badge: "/favicon.ico",
      ...options,
    })

    // Auto close after 5 seconds
    setTimeout(() => notification.close(), 5000)

    return notification
  }

  sendPackageUpdate(status: string, location: string) {
    this.sendNotification("Package Update", {
      body: `Your package is now ${status} at ${location}`,
      icon: "/favicon.ico",
      tag: "package-update",
    })
  }

  sendDeliveryAlert(estimatedTime: string) {
    this.sendNotification("Delivery Alert", {
      body: `Your package will be delivered ${estimatedTime}`,
      icon: "/favicon.ico",
      tag: "delivery-alert",
    })
  }
}
