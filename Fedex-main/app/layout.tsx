import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/contexts/auth-context"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NotificationManager } from "@/components/notification-manager"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FedEx - Fast and Reliable Delivery Worldwide",
  description:
    "Ship your packages safely and on time with FedEx. Track packages, schedule pickups, and manage your deliveries online.",
  keywords: "FedEx, shipping, delivery, tracking, packages, logistics, worldwide, express",
  authors: [{ name: "FedEx" }],
  creator: "FedEx",
  publisher: "FedEx",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "FedEx - Fast and Reliable Delivery Worldwide",
    description:
      "Ship your packages safely and on time with FedEx. Track packages, schedule pickups, and manage your deliveries online.",
    url: "https://fedex.com",
    siteName: "FedEx",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "FedEx Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FedEx - Fast and Reliable Delivery Worldwide",
    description:
      "Ship your packages safely and on time with FedEx. Track packages, schedule pickups, and manage your deliveries online.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Smartsupp Live Chat Script */}
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = 'e41d4d781a530f18b87fc43bfae77556907d2297';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <NotificationManager />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
