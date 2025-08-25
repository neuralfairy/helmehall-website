import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Helmehall Solutions - Global Cloud Telephony | iGCT Voice Solutions",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "iGCT by Helmehall helps you connect with customers worldwide through reliable, cloud-powered telephony. Global voice solutions that scale with your business.",
  keywords: "cloud telephony, global calling, voice solutions, iGCT, B2B sales tools, VoIP, cloud PBX",
  authors: [{ name: "Helmehall Solutions" }],
  openGraph: {
    title: "Helmehall Solutions - Global Cloud Telephony",
    description: "Global voice solutions that scale with your business",
    url: "https://helmehall.com",
    siteName: "Helmehall Solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Helmehall Solutions",
              description: "Global cloud telephony provider offering scalable voice and calling solutions",
              url: "https://helmehall.com",
              logo: "https://helmehall.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Henderson",
                addressRegion: "NV",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-HELMEHALL",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
