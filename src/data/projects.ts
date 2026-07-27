import type { Project } from "@/types/project";

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
    githubUrl: "https://github.com/777dimi777/green-nest",
    gallery: [],
  },
  {
    number: "02",
    slug: "eduflow",
    title: "EduFlow",
    category: "Student productivity platform",
    description:
      "A human-centered productivity application that helps students organize subjects, exams, daily tasks, schedules and academic goals.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Bootstrap",
      "PDF.js",
      "HCI",
    ],
    status: "Completed",
    accent: "#45e884",
    githubUrl: "https://github.com/777dimi777/hci-eduflow",
    coverImage: "/projects/eduflow-dashboard.png",
    gallery: [
      "/projects/eduflow-dashboard.png",
      "/projects/eduflow-calendar.png",
      "/projects/eduflow-grade-goal.png",
      "/projects/eduflow-pdf-import.png",
    ],
  },
  {
    number: "03",
    slug: "game-arena",
    title: "Game Arena",
    category: "Esports tournament platform",
    description:
      "A competitive gaming platform for creating tournaments, managing teams, joining competitions and following match results.",
    technologies: [
      "Angular",
      "NestJS",
      "TypeScript",
      "RxJS",
      "TypeORM",
      "PostgreSQL",
    ],
    status: "Completed",
    accent: "#35b8ff",
    githubUrl: "https://github.com/777dimi777/game-arena",
    coverImage: "/projects/game-arena-home.png",
    gallery: [
      "/projects/game-arena-home.png",
      "/projects/game-arena-tournaments.png",
      "/projects/game-arena-teams.png",
      "/projects/game-arena-leaderboard.png",
    ],
  },
];