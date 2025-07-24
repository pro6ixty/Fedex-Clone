"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Express Shipping", href: "/services/express" },
        { name: "Ground Shipping", href: "/services/ground" },
        { name: "International", href: "/services/international" },
        { name: "Same Day Delivery", href: "/services/same-day" },
        { name: "Freight Services", href: "/services/freight" },
        { name: "Supply Chain", href: "/services/supply-chain" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Track Package", href: "/tracking" },
        { name: "Customer Service", href: "/support" },
        { name: "Shipping Guide", href: "/support/shipping-guide" },
        { name: "Returns", href: "/support/returns" },
        { name: "Claims", href: "/support/claims" },
        { name: "FAQ", href: "/support/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About FedEx", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Newsroom", href: "/newsroom" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "FedEx Locations", href: "/locations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Developer APIs", href: "/developers" },
        { name: "Mobile Apps", href: "/mobile" },
        { name: "Business Solutions", href: "/business" },
        { name: "Small Business", href: "/small-business" },
        { name: "Industry Solutions", href: "/industries" },
        { name: "Partner Program", href: "/partners" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/fedex" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/fedex" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/fedex" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/fedex" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/fedex" },
  ]

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/fedex-logo.png"
                alt="FedEx Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-purple-200 text-sm leading-relaxed">
                The world's largest express transportation company, delivering packages and freight to more than 220
                countries and territories around the globe.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-purple-200">1-800-GO-FEDEX (1-800-463-3339)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-purple-200">support@fedex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-purple-200">942 South Shady Grove Road, Memphis, TN 38120</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Menu Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-purple-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-purple-200">© {currentYear} FedEx Corporation. All rights reserved.</p>
              <div className="flex flex-wrap items-center space-x-4 text-xs text-purple-300">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="text-xs text-purple-300">
              <p>FedEx® and the FedEx logo are trademarks of FedEx Corporation.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
