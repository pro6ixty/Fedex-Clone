"use client"

import { Eye, Ear, Hand, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function AccessibilityPage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      items: [
        "High contrast color schemes for better visibility",
        "Scalable text and interface elements",
        "Screen reader compatibility",
        "Alternative text for all images",
        "Keyboard navigation support",
      ],
    },
    {
      icon: Ear,
      title: "Audio Accessibility",
      items: [
        "Visual indicators for audio alerts",
        "Closed captions for video content",
        "Text alternatives for audio information",
        "Adjustable audio settings",
        "Silent mode options",
      ],
    },
    {
      icon: Hand,
      title: "Motor Accessibility",
      items: [
        "Full keyboard navigation",
        "Large clickable areas",
        "Adjustable interaction timeouts",
        "Voice control compatibility",
        "Switch device support",
      ],
    },
    {
      icon: Brain,
      title: "Cognitive Accessibility",
      items: [
        "Clear and simple language",
        "Consistent navigation patterns",
        "Error prevention and correction",
        "Progress indicators",
        "Help and documentation",
      ],
    },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white mb-4">Accessibility</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            FedEx is committed to ensuring our digital services are accessible to everyone, regardless of ability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect-dark border-purple-500/30 animate-slide-in-up">
          <CardHeader>
            <CardTitle className="text-white">Contact Our Accessibility Team</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-200">
            <p className="mb-4">
              We continuously work to improve the accessibility of our services. If you encounter any barriers or have
              suggestions for improvement, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> accessibility@fedex.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-GO-FEDEX (1-800-463-3339)
              </p>
              <p>
                <strong>TTY:</strong> 1-800-123-4567
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
