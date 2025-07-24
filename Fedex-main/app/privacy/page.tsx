"use client"

import { Shield, Eye, Lock, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account or using our services",
        "Shipping and delivery information including addresses and contact details",
        "Payment information processed securely through encrypted channels",
        "Device and usage information when you visit our website or use our mobile apps",
        "Location data when you use location-based services with your consent",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide shipping, tracking, and delivery services",
        "To process payments and manage your account",
        "To communicate with you about your shipments and account",
        "To improve our services and develop new features",
        "To comply with legal obligations and protect against fraud",
      ],
    },
    {
      icon: Shield,
      title: "How We Protect Your Information",
      content: [
        "Industry-standard encryption for data transmission and storage",
        "Regular security audits and vulnerability assessments",
        "Access controls limiting employee access to personal information",
        "Secure data centers with physical and digital security measures",
        "Incident response procedures for potential security breaches",
      ],
    },
    {
      icon: FileText,
      title: "Your Rights and Choices",
      content: [
        "Access and review your personal information",
        "Correct or update inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Request data portability where applicable",
      ],
    },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-purple-200">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-purple-300 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
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

        <Card className="mt-12 glass-effect-dark border-purple-500/30 animate-slide-in-up">
          <CardHeader>
            <CardTitle className="text-white">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-200">
            <p className="mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> privacy@fedex.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-GO-FEDEX (1-800-463-3339)
              </p>
              <p>
                <strong>Mail:</strong> FedEx Privacy Office, 942 South Shady Grove Road, Memphis, TN 38120
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
