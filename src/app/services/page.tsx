import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the web development services offered by Miloš Dimitrijević.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}