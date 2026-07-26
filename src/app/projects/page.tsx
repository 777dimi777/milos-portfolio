import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected full-stack and frontend projects built by Miloš Dimitrijević.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}