# Miloš Dimitrijević — Developer Portfolio

![Portfolio preview](https://milos-portfolio-eight.vercel.app/opengraph-image)

A modern personal portfolio website showcasing my full-stack projects, technical skills, development services and contact information.

## Live Website

[Visit the live portfolio](https://milos-portfolio-eight.vercel.app)

## About the Project

This portfolio was designed and developed to present my work through detailed project case studies rather than simple project cards.

It includes information about my development approach, technology stack, services, work process and selected full-stack and frontend applications.

## Featured Projects

### Green Nest

A full-stack e-commerce platform for discovering and purchasing decorative plants.

- Next.js
- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Status: In development

### EduFlow

A human-centered student productivity platform for organizing subjects, exams, tasks, schedules and academic goals.

- React
- Vite
- JavaScript
- Bootstrap
- PDF.js
- Human-Computer Interaction

### Game Arena

A full-stack esports platform for managing teams, tournaments, matches and competitive results.

- Angular
- NestJS
- TypeScript
- RxJS
- TypeORM
- PostgreSQL

## Portfolio Features

- Responsive desktop and mobile design
- Fixed desktop navigation
- Full-screen mobile navigation
- Active navigation states
- Dynamic project case-study pages
- Real project screenshots
- GitHub repository integration
- Contact inquiry form
- Custom loading and 404 screens
- Dynamic Open Graph image
- SEO metadata
- Sitemap and robots configuration
- Vercel deployment
- Automatic deployments from GitHub

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Next.js Image Optimization
- Vercel

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   └── [slug]/
│   ├── services/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
└── types/

public/
├── images/
└── projects/
```

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/777dimi777/milos-portfolio.git
```

Enter the project directory:

```bash
cd milos-portfolio
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The production URL is automatically resolved using Vercel system environment variables.

## Deployment

The portfolio is deployed with Vercel and connected to the `main` GitHub branch.

Every push to `main` automatically creates a new production deployment.

## Contact

- Email: [milosdimitrijevicc2005@gmail.com](mailto:milosdimitrijevicc2005@gmail.com)
- GitHub: [777dimi777](https://github.com/777dimi777)
- LinkedIn: [Miloš Dimitrijević](https://www.linkedin.com/in/miloš-dimitrijević-874b8423b)

---

Designed and developed by Miloš Dimitrijević.