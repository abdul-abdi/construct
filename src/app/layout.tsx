import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlueprintAnimations from "@/components/layout/BlueprintAnimations";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.silverpackgroup.com'),
  title: "Silver Pack Group | Luxury Real Estate Development in Nairobi, Kenya",
  description: "Silver Pack Group specializes in premium real estate, offering elegant living spaces in Kileleshwa, Kilimani & Lavington. Exceptional service with modern design for luxury and comfort.",
  keywords: ["luxury real estate Kenya", "Nairobi premium apartments", "Kileleshwa apartments", "Kilimani properties", "Lavington residences", "luxury living spaces", "modern apartments Nairobi", "premium real estate Kenya", "Silver Pack Group", "SPG Estates"],
  authors: [{ name: "Silver Pack Group" }],
  generator: "Next.js",
  applicationName: "Silver Pack Group",
  referrer: "origin-when-cross-origin",
  creator: "Silver Pack Group",
  publisher: "Silver Pack Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.silverpackgroup.com',
  },
  openGraph: {
    title: "Silver Pack Group | Luxury Real Estate Development in Kenya",
    description: "Where luxury meets comfort - elegant and modern living spaces in Nairobi's prime locations with exceptional service and innovative design.",
    url: "https://www.silverpackgroup.com",
    siteName: "Silver Pack Group",
    images: [
      {
        url: 'https://www.silverpackgroup.com/silverpack.png',
        width: 1200,
        height: 630,
        alt: 'Silver Pack Group Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Silver Pack Group | Premium Real Estate in Nairobi",
    description: "Elegant and modern living spaces in Kileleshwa, Kilimani & Lavington with exceptional service and innovative design.",
    images: ['https://www.silverpackgroup.com/silverpack.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://www.silverpackgroup.com" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="silverpack-theme">
          <BlueprintAnimations />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
