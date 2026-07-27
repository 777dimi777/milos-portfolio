export type ProjectStatus = "In development" | "Completed";

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  accent: string;
  githubUrl: string;
  liveUrl?: string;
  coverImage?: string;
  gallery: string[];
  year: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
};