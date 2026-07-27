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
    year: "2026",
    role: "Full-stack development",
    overview:
      "Green Nest is a full-stack e-commerce platform being developed for a decorative plant business. The goal is to create a complete digital storefront that connects product discovery, customer accounts, orders and business management.",
    challenge:
      "The project needs to organize a growing plant catalog, provide a clear shopping experience and support reliable management of users, products and orders without creating a backend that becomes difficult to expand.",
    solution:
      "The application is structured as a monorepo with a Next.js frontend and a modular NestJS API. PostgreSQL and Prisma provide a strongly structured data layer, while validation and authentication create a reliable foundation for future features.",
    features: [
      "Next.js and NestJS monorepo architecture",
      "User registration and JWT authentication",
      "Plant catalog and product management",
      "PostgreSQL database modeled with Prisma",
      "Order workflow and backend validation",
      "Responsive storefront currently in development",
    ],
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
    year: "2026",
    role: "Frontend development & UX design",
    overview:
      "EduFlow is a student productivity platform created as a Human-Computer Interaction project. It brings subjects, exams, tasks, academic progress and planning tools together in one consistent interface.",
    challenge:
      "Students often manage academic information across calendars, notes, PDF schedules and separate task applications. This makes deadlines harder to follow and gives students no clear overview of their progress.",
    solution:
      "EduFlow combines the most important academic workflows inside a single React application. Consistent subject colors, immediate feedback, clear navigation and focused dashboards reduce the amount of effort needed to organize university responsibilities.",
    features: [
      "Interactive monthly calendar with daily tasks",
      "Subject and assignment management",
      "Passed exams and overall grade calculation",
      "Target grade and yearly average planner",
      "PDF exam schedule extraction and filtering",
      "Focus timer and study-session history",
      "Statistics and progress visualization",
      "Persistent data using Context and localStorage",
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
    year: "2026",
    role: "Full-stack development",
    overview:
      "Game Arena is a full-stack esports platform where users can explore games, create teams, join tournaments and follow competitive match results.",
    challenge:
      "Tournament platforms need to coordinate users, teams, registrations, matches, winners and leaderboard information while keeping the experience understandable for different types of users.",
    solution:
      "The platform uses Angular for the reactive user interface and NestJS for modular backend logic. PostgreSQL stores tournament data, while RxJS connects route changes, API requests and live interface updates.",
    features: [
      "User registration and JWT authentication",
      "Tournament browsing and registration",
      "Team creation and management",
      "Game and tournament organization",
      "Match schedules and result tracking",
      "Winner calculation and leaderboard display",
      "Angular reactive data flows with RxJS",
      "NestJS API with PostgreSQL persistence",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}