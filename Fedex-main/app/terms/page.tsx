"use client"

import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function TermsPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: FileText,
      title: "Service Agreement",
      content: [
        "By using FedEx services, you agree to these terms and conditions",
        "Services are subject to availability and operational constraints",
        "Rates and service options may vary by location and package characteristics",
        "Special handling requirements may apply to certain items",
        "Service guarantees are subject to specific terms and conditions",
      ],
    },
    {
      icon: Scale,
      title: "Liability and Insurance",
      content: [
        "FedEx liability is limited as specified in our service guide",
        "Declared value coverage is available for additional protection",
        "Claims must be filed within specified time limits",
        "Certain items are excluded from coverage",
        "Insurance options vary by service type and destination",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Items",
      content: [
        "Hazardous materials require special handling and documentation",
        "Certain items are prohibited from shipment",
        "Restricted items may require additional permits or documentation",
        "Perishable items have specific packaging and service requirements",
        "International shipments are subject to customs regulations",
      ],
    },
    {
      icon: CheckCircle,
      title: "Customer Responsibilities",
      content: [
        "Provide accurate shipping information and addresses",
        "Properly package items according to FedEx guidelines",
        "Comply with all applicable laws and regulations",
        "Pay all applicable charges and fees",
        "Maintain accurate account information",
      ],
    },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-purple-200">These terms govern your use of FedEx services and our website.</p>
          <p className="text-sm text-purple-300 mt-4">Effective date: {new Date().toLocaleDateString()}</p>
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
            <CardTitle className="text-white">Agreement Updates</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-200">
            <p className="mb-4">
              FedEx reserves the right to modify these terms at any time. Changes will be effective immediately upon
              posting. Continued use of our services constitutes acceptance of modified terms.
            </p>
            <p>
              For questions about these terms, please contact our customer service team at 1-800-GO-FEDEX or visit your
              local FedEx location.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
