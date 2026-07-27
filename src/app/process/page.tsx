import type { Metadata } from "next";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Explore the clear project process Miloš Dimitrijević uses to turn ideas into polished web products.",
};

export default function ProcessPage() {
  return <ProcessSection />;
}