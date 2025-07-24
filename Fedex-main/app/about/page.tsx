"use client"

import { Truck, Globe, Users, Award, Target, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide customers and businesses worldwide with a broad portfolio of transportation, e-commerce and business services.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Safety above all, highest ethical and professional standards, caring for our people and fostering their development.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      description: "To make commerce possible around the world by connecting people and possibilities.",
    },
  ]

  const stats = [
    { number: "220+", label: "Countries & Territories", icon: Globe },
    { number: "530,000+", label: "Team Members", icon: Users },
    { number: "15M+", label: "Packages Daily", icon: Truck },
    { number: "50+", label: "Years of Excellence", icon: Award },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h1 className="text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FedEx</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              For more than 50 years, FedEx has been connecting people and possibilities around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  Founded in 1971, FedEx pioneered overnight delivery and has grown to become the world's largest
                  express transportation company. We connect more than 220 countries and territories, moving the global
                  economy forward by delivering what matters most.
                </p>
                <p>
                  From our humble beginnings with 14 small aircraft to today's global network of planes, trucks, and
                  technology, we've never stopped innovating to serve our customers better.
                </p>
                <p>
                  Today, FedEx operates one of the world's largest all-cargo air fleets and continues to invest in
                  technology, sustainability, and our people to deliver solutions that improve the way the world works.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/fedex-office-view.jpg"
                  alt="FedEx office and operations"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center animate-slide-in-up hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect-dark p-6 rounded-xl border border-purple-500/30">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up text-center`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Meet the team driving innovation and excellence at FedEx
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card
                key={index}
                className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Leadership Team</h3>
                  <p className="text-purple-200 text-sm">
                    Experienced leaders driving innovation and growth across all aspects of our global operations.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/logistics-network.jpg"
                  alt="Sustainable logistics operations"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover-lift"
                />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">
                Committed to{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sustainability
                </span>
              </h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  We're committed to achieving carbon-neutral operations globally by 2040. This ambitious goal drives
                  innovation across our entire network.
                </p>
                <p>
                  From electric vehicles and sustainable aviation fuel to renewable energy and efficient facilities,
                  we're investing in solutions that reduce our environmental impact.
                </p>
                <p>
                  Our sustainability efforts extend beyond operations to include packaging innovations, supply chain
                  optimization, and partnerships that create positive environmental change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
