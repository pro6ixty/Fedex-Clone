"use client"

import { useState, useEffect } from "react"
import { Search, Truck, Shield, Clock, Globe, ArrowRight, Star, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function HomePage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      router.push(`/tracking?number=${encodeURIComponent(trackingNumber)}`)
    }
  }

  const features = [
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Fast and reliable shipping worldwide",
      delay: "0s",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Your packages are safe with us",
      delay: "0.1s",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your package every step of the way",
      delay: "0.2s",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide delivery network",
      delay: "0.3s",
    },
  ]

  const stats = [
    { number: "220+", label: "Countries", icon: Globe },
    { number: "99.5%", label: "On-time Rate", icon: Clock },
    { number: "24/7", label: "Support", icon: Shield },
    { number: "5M+", label: "Packages Daily", icon: Truck },
  ]

  const testimonials = [
    {
      name: "Small Business Owner",
      role: "Craft Supplies Store",
      image: "/images/business-owner.jpg",
      quote:
        "FedEx has been instrumental in growing my business. Their reliable service helps me reach customers worldwide.",
    },
    {
      name: "Remote Worker",
      role: "Freelance Designer",
      image: "/images/work-from-home.png",
      quote: "Working from home means I need reliable shipping for my client deliveries. FedEx never lets me down.",
    },
    {
      name: "E-commerce Entrepreneur",
      role: "Online Retailer",
      image: "/images/shipping-preparation.jpg",
      quote: "The efficiency and tracking capabilities make FedEx my go-to choice for all my shipping needs.",
    },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-6">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Trusted by millions worldwide</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t("welcomeTitle")}
                </span>
              </h1>

              <p className="mt-6 text-xl text-purple-100 leading-relaxed">{t("welcomeSubtitle")}</p>

              {/* Tracking Form */}
              <div className="mt-12">
                <div className="glass-effect p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-4">{t("trackPackage")}</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        type="text"
                        placeholder={t("trackingPlaceholder")}
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        className="bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border-white/30 h-12"
                        onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                      />
                    </div>
                    <Button
                      onClick={handleTrack}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 px-6 font-semibold animate-pulse-glow"
                      disabled={!trackingNumber.trim()}
                    >
                      <Search className="mr-2 h-4 w-4" />
                      {t("trackButton")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/fedex-office-view.jpg"
                  alt="Professional working with FedEx delivery view"
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
      <section className="py-20 relative">
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

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FedEx?</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Trusted by millions worldwide for reliable delivery services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up group`}
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Network Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">
                Global{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Logistics Network
                </span>
              </h2>
              <p className="text-xl text-purple-200 mb-8">
                Our extensive network ensures your packages reach their destination efficiently, no matter where in the
                world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-effect-dark p-4 rounded-lg border border-purple-500/30">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-8 w-8 text-purple-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">220+</div>
                      <div className="text-sm text-purple-200">Countries</div>
                    </div>
                  </div>
                </div>
                <div className="glass-effect-dark p-4 rounded-lg border border-purple-500/30">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-8 w-8 text-yellow-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-sm text-purple-200">Operations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/logistics-network.jpg"
                  alt="Aerial view of logistics network and transportation infrastructure"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-purple-200">Real stories from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-purple-200">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-purple-100 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/warehouse-service.png"
                  alt="Professional warehouse service with FedEx staff helping customers"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover-lift"
                />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">
                Professional{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Service Excellence
                </span>
              </h2>
              <p className="text-xl text-purple-200 mb-8">
                Our trained professionals are dedicated to providing exceptional service at every step of your shipping
                journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Expert customer service team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Industry-leading reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Secure handling guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-effect p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Ship Your Package?</h2>
            <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
              Create an account and start shipping with confidence today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 animate-pulse-glow"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
