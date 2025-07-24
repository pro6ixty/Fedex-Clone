"use client"

import { Truck, Shield, Clock, Globe, Package, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Zap,
      title: "Express Overnight",
      description: "Next business day delivery by 10:30 AM",
      price: "From $25.99",
      features: ["Money-back guarantee", "Real-time tracking", "Signature required"],
    },
    {
      icon: Truck,
      title: "Ground Shipping",
      description: "Reliable delivery within 1-5 business days",
      price: "From $9.99",
      features: ["Cost-effective", "Tracking included", "Residential delivery"],
    },
    {
      icon: Globe,
      title: "International",
      description: "Worldwide delivery to over 220 countries",
      price: "From $39.99",
      features: ["Customs clearance", "Door-to-door service", "International tracking"],
    },
    {
      icon: Shield,
      title: "Priority Mail",
      description: "Fast, reliable service with insurance",
      price: "From $15.99",
      features: ["2-3 day delivery", "Up to $100 insurance", "Free tracking"],
    },
    {
      icon: Package,
      title: "Same Day",
      description: "Delivery within hours for urgent shipments",
      price: "From $49.99",
      features: ["Same-day delivery", "Direct route", "Real-time updates"],
    },
    {
      icon: Clock,
      title: "Scheduled Delivery",
      description: "Choose your preferred delivery time",
      price: "From $19.99",
      features: ["Time slot selection", "SMS notifications", "Flexible rescheduling"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Shipping Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of shipping solutions designed to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Select Service</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Insured</h3>
              <p className="text-gray-600">All packages are fully insured and handled with care</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">99.5% on-time delivery rate with money-back guarantee</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Worldwide delivery network covering 220+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
