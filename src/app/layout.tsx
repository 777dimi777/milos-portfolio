import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Miloš Dimitrijević | Full-Stack Developer",
    template: "%s | Miloš Dimitrijević",
  },
  description:
    "Portfolio of Miloš Dimitrijević, a full-stack developer from Serbia building modern, responsive and thoughtful web products.",
  keywords: [
    "Miloš Dimitrijević",
    "full-stack developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "Next.js developer",
    "React developer",
    "NestJS developer",
    "TypeScript developer",
    "Serbia web developer",
  ],
  authors: [
    {
      name: "Miloš Dimitrijević",
    },
  ],
  creator: "Miloš Dimitrijević",
  publisher: "Miloš Dimitrijević",
  category: "technology",
  applicationName: "Miloš Dimitrijević Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Miloš Dimitrijević | Full-Stack Developer",
    description:
      "Full-stack developer building useful, thoughtful and memorable digital products.",
    siteName: "Miloš Dimitrijević Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miloš Dimitrijević | Full-Stack Developer",
    description:
      "Full-stack developer building useful, thoughtful and memorable digital products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070806",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />

        <main className="min-h-screen pt-16 lg:pl-28 lg:pt-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}