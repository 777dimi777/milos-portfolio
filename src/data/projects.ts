import { Project } from "@/types/project";
export const projects: Project[] = [
  {
    number: "01",
    slug: "green-nest",
    title: "Green Nest",
    category: "Full-stack plant marketplace",
    description:
      "A modern e-commerce platform for discovering and purchasing decorative plants, supported by a scalable API and carefully designed shopping experience.",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
    status: "In development",
    accent: "#d7ff38",
  },
  {
    number: "02",
    slug: "eduflow",
    title: "EduFlow",
    category: "Student productivity platform",
    description:
      "A human-centered productivity application that helps students organize subjects, exams, daily tasks, schedules and academic goals.",
    technologies: ["React", "Vite", "JavaScript", "Bootstrap", "HCI"],
    status: "Completed",
    accent: "#8b7cff",
  },
  {
    number: "03",
    slug: "game-arena",
    title: "Game Arena",
    category: "Esports tournament platform",
    description:
      "A competitive gaming platform for creating tournaments, managing teams, joining competitions and following live leaderboard results.",
    technologies: [
      "Angular",
      "NestJS",
      "TypeScript",
      "RxJS",
      "PostgreSQL",
    ],
    status: "Completed",
    accent: "#ff435f",
  },
];