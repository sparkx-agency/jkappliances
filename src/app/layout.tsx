import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JK Appliance Repair | Professional Appliance Repair Services in GTA",
  description: "JK Appliance Repair provides professional repair and installation services for all major appliance brands in Toronto and the Greater Toronto Area.",
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon.webp', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: ["appliance repair", "Toronto", "GTA", "refrigerator repair", "washer repair", "dryer repair", "stove repair", "oven repair"],
  authors: [{ name: "JK Appliance Repair" }],
  openGraph: {
    title: "JK Appliance Repair | Professional Appliance Repair Services in GTA",
    description: "Professional repair and installation services for all major appliance brands in Toronto and the Greater Toronto Area.",
    url: "https://jkappliancerepair.ca",
    siteName: "JK Appliance Repair",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: 'https://jkappliancerepair.ca',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "JK Appliance Repair",
              "image": "https://jkappliancerepair.ca/images/logo.webp",
              "url": "https://jkappliancerepair.ca",
              "telephone": "+1-647-560-8966",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8 Lorraine Crescent",
                "addressLocality": "Brampton",
                "addressRegion": "ON",
                "postalCode": "L6S 2R7",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.6532,
                "longitude": -79.3832
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "$$",
              "servesCuisine": "Appliance Repair Services",
              "sameAs": [
                "https://www.facebook.com/jkappliancerepair",
                "https://www.instagram.com/jkappliancerepair"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
