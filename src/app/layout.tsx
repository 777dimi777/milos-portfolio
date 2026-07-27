import type { Metadata } from "next";
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
    default: "Miloš Dimitrijević — Full-Stack Developer",
    template: "%s | Miloš Dimitrijević",
  },
  description:
    "Personal portfolio of Miloš Dimitrijević, a full-stack developer creating modern websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#070908] text-[#f4f5ef] antialiased`}
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
