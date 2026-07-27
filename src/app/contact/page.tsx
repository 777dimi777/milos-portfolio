import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Miloš Dimitrijević regarding development opportunities, freelance projects and collaborations.",
};

export default function ContactPage() {
  return <ContactSection />;
}