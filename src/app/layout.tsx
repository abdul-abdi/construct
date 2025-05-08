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
  title: "Silverpack Group | Premium Construction & Development Services",
  description: "Silverpack Group is your trusted partner for innovative construction, urban development, and property management.",
  keywords: ["architecture", "construction", "building", "design", "modern homes", "sustainable design", "urban planning", "kenya construction", "nairobi construction"],
  openGraph: {
    title: "Silverpack Group | Premium Construction & Development Services",
    description: "Silverpack Group is your trusted partner for innovative construction, urban development, and property management.",
    url: "https://www.silverpackgroup.com",
    siteName: "Silverpack Group",
    images: [
    ],
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
