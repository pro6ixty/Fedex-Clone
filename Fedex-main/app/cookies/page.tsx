"use client"

import { Cookie, Settings, Shield, BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function CookiesPage() {
  const { t } = useLanguage()

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      examples: ["Authentication", "Security", "Load balancing", "Form submission"],
      required: true,
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced features and personalization",
      examples: ["Language preferences", "Region settings", "Accessibility options", "User preferences"],
      required: false,
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Page views", "User behavior", "Performance metrics", "Error tracking"],
      required: false,
    },
    {
      icon: Cookie,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaigns",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration", "Remarketing"],
      required: false,
    },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-purple-200">
            Learn about how we use cookies to improve your experience on our website.
          </p>
          <p className="text-sm text-purple-300 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="mb-8 glass-effect-dark border-purple-500/30 animate-slide-in-up">
          <CardHeader>
            <CardTitle className="text-white">What Are Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-200">
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and enabling certain features.
            </p>
            <p>
              We use both session cookies (which expire when you close your browser) and persistent cookies (which
              remain on your device for a set period or until you delete them).
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6 mb-12">
          {cookieTypes.map((type, index) => (
            <Card
              key={index}
              className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      <type.icon className="h-5 w-5" />
                    </div>
                    <span>{type.title}</span>
                  </div>
                  {type.required && (
                    <span className="text-xs bg-red-600/20 text-red-300 px-2 py-1 rounded">Required</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200 mb-4">{type.description}</p>
                <div>
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-purple-200 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8 glass-effect-dark border-purple-500/30 animate-slide-in-up">
          <CardHeader>
            <CardTitle className="text-white">Managing Your Cookie Preferences</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-200">
            <p className="mb-4">You can control and manage cookies in several ways:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Use our cookie preference center to enable or disable specific cookie categories</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Configure your browser settings to block or delete cookies</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Use browser extensions or privacy tools to manage tracking</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Settings className="mr-2 h-4 w-4" />
                Cookie Preferences
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 text-white hover:bg-purple-600/20 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect-dark border-purple-500/30 animate-slide-in-up">
          <CardHeader>
            <CardTitle className="text-white">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-200">
            <p className="mb-4">If you have questions about our use of cookies, please contact us:</p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> privacy@fedex.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-GO-FEDEX (1-800-463-3339)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
