"use client"

import { Mail, Phone, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"

export default function SupportPage() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      value: "+1 (800) 463-3339",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions via email",
      value: "support@fedex.com",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Available 24/7",
      action: "Start Chat",
    },
  ]

  const faqItems = [
    {
      question: "How can I track my package?",
      answer:
        "You can track your package using the tracking number provided at the time of shipping. Enter it on our tracking page or use our mobile app.",
    },
    {
      question: "What are your delivery times?",
      answer:
        "Delivery times vary by service type. Express overnight delivers next business day, while ground shipping takes 1-5 business days.",
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "You can schedule a pickup through our website, mobile app, or by calling our customer service line. Pickups are available Monday through Friday.",
    },
    {
      question: "What items cannot be shipped?",
      answer:
        "Hazardous materials, perishable items, and prohibited items cannot be shipped. Check our shipping guidelines for a complete list.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "Claims can be filed online through your account dashboard or by contacting customer service within 60 days of shipment.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your shipping needs. Get in touch with our support team.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-lg">{method.value}</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">{method.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us how we can help you" className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our services</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              Support Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold">Phone Support</h4>
                <p className="text-sm text-gray-600">Monday - Friday: 8AM - 8PM</p>
                <p className="text-sm text-gray-600">Saturday: 9AM - 5PM</p>
                <p className="text-sm text-gray-600">Sunday: Closed</p>
              </div>
              <div>
                <h4 className="font-semibold">Live Chat</h4>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              <div>
                <h4 className="font-semibold">Email Support</h4>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </div>
              <div>
                <h4 className="font-semibold">Emergency</h4>
                <p className="text-sm text-gray-600">24/7 for urgent issues</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
