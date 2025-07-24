"use client"

import { Users, Briefcase, Heart, TrendingUp, Globe, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function CareersPage() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage plus wellness programs",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development opportunities and tuition assistance programs",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work across our worldwide network with international assignment possibilities",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs for outstanding contributions",
    },
  ]

  const jobCategories = [
    {
      title: "Operations",
      count: "1,200+ openings",
      description: "Package handling, sorting, and logistics operations",
    },
    { title: "Delivery", count: "800+ openings", description: "Courier and delivery driver positions worldwide" },
    {
      title: "Technology",
      count: "300+ openings",
      description: "Software development, IT, and digital innovation roles",
    },
    { title: "Corporate", count: "150+ openings", description: "Finance, HR, marketing, and administrative positions" },
    { title: "Aviation", count: "100+ openings", description: "Pilots, mechanics, and aviation support roles" },
    { title: "Customer Service", count: "500+ openings", description: "Customer support and service excellence roles" },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Build your career with a global leader in logistics and transportation. Discover opportunities that move
              you forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose FedEx?</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  At FedEx, we believe our people are our greatest asset. We're committed to creating an inclusive
                  workplace where everyone can thrive and contribute to our mission of connecting the world.
                </p>
                <p>
                  With operations in more than 220 countries and territories, we offer diverse career paths, competitive
                  benefits, and the opportunity to make a real impact on global commerce.
                </p>
                <p>
                  Join our team of over 530,000 professionals who are passionate about delivering excellence every day.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Open Positions
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/business-owner.jpg"
                  alt="FedEx team members at work"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Employee Benefits</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits and growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up text-center`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore career opportunities across our global network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <Card
                key={index}
                className={`glass-effect-dark border-purple-500/30 hover-lift animate-slide-in-up cursor-pointer group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </CardTitle>
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-purple-400 font-semibold">{category.count}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200">{category.description}</p>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-purple-500/30 text-white hover:bg-purple-600/20 bg-transparent"
                  >
                    View Jobs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/warehouse-service.png"
                  alt="FedEx workplace culture"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover-lift"
                />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Culture
                </span>
              </h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  At FedEx, we foster a culture of innovation, collaboration, and excellence. Our diverse team works
                  together to solve complex logistics challenges and deliver exceptional service to customers worldwide.
                </p>
                <p>
                  We believe in empowering our employees to take ownership, make decisions, and drive positive change.
                  Our inclusive environment celebrates different perspectives and encourages continuous learning.
                </p>
                <p>
                  From entry-level positions to executive roles, we provide the support, resources, and opportunities
                  you need to build a rewarding career with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-effect p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
              Explore our current openings and take the first step toward an exciting career with FedEx
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
              >
                <Users className="mr-2 h-5 w-5" />
                Apply Now
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
