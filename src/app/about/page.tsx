import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Miloš Dimitrijević, his development approach, education and technology stack.",
};

export default function AboutPage() {
  return <AboutSection />;
}