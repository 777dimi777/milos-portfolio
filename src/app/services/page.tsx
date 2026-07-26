import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore web development services and the project process used by Miloš Dimitrijević.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <ProcessSection />
    </>
  );
}