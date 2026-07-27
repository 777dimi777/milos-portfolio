import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/types/project";

type ProjectCaseStudyProps = {
  project: Project;
  nextProject: Project;
};

export function ProjectCaseStudy({
  project,
  nextProject,
}: ProjectCaseStudyProps) {
  const projectStyle = {
    "--project-accent": project.accent,
  } as CSSProperties;

  const additionalImages = project.gallery.filter(
    (image) => image !== project.coverImage,
  );

  return (
    <article
      style={projectStyle}
      className="bg-[#070806] text-white"
    >
      <header className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-12 sm:px-10 lg:px-14 lg:pb-24 lg:pt-20">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ backgroundColor: project.accent }}
        />

        <div className="relative mx-auto max-w-[1600px]">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-[var(--project-accent)]"
            >
              ← Back to projects
            </Link>

            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: project.accent }}
              />

              <span
                className="text-xs uppercase tracking-[0.16em]"
                style={{ color: project.accent }}
              >
                {project.status}
              </span>
            </div>
          </div>

          <div className="grid gap-10 py-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-end lg:py-20">
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.25em]"
                style={{ color: project.accent }}
              >
                Project {project.number} / {project.category}
              </p>

              <h1 className="mt-6 text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.75] tracking-[-0.08em]">
                {project.title}
              </h1>
            </div>

            <div>
              <p className="text-lg leading-8 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white"
                  style={{ backgroundColor: project.accent }}
                >
                  View repository ↗
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-[var(--project-accent)] hover:text-[var(--project-accent)]"
                  >
                    Live project ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-r border-white/10 p-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Year
              </p>
              <p className="mt-2 text-sm font-semibold">{project.year}</p>
            </div>

            <div className="border-b border-r border-white/10 p-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Role
              </p>
              <p className="mt-2 text-sm font-semibold">{project.role}</p>
            </div>

            <div className="border-b border-r border-white/10 p-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Status
              </p>
              <p className="mt-2 text-sm font-semibold">{project.status}</p>
            </div>

            <div className="border-b border-r border-white/10 p-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Technology
              </p>
              <p className="mt-2 text-sm font-semibold">
                {project.technologies.length} tools
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          {project.coverImage ? (
            <div className="relative aspect-[16/7] overflow-hidden border border-white/10 bg-[#0b0c0a]">
              <Image
                src={project.coverImage}
                alt={`${project.title} main interface`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div
              className="flex min-h-[520px] flex-col items-center justify-center border border-white/10 text-center"
              style={{
                background: `radial-gradient(circle at 50% 45%, ${project.accent}25, transparent 35%), #0b0c0a`,
              }}
            >
              <p
                className="text-[clamp(7rem,20vw,18rem)] font-black leading-none tracking-[-0.12em]"
                style={{ color: project.accent }}
              >
                GN
              </p>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em]">
                Visual documentation coming after development
              </p>

              <p className="mt-3 text-sm text-zinc-600">
                The platform is currently in active development.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--project-accent)]">
              01 / Overview
            </p>

            <p className="max-w-5xl text-2xl font-semibold leading-snug tracking-[-0.03em] text-zinc-200 sm:text-4xl">
              {project.overview}
            </p>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 lg:grid-cols-2">
            <div className="border-b border-r border-white/10 p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--project-accent)]">
                The challenge
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                {project.challenge}
              </p>
            </div>

            <div className="border-b border-r border-white/10 p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--project-accent)]">
                The solution
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a0b09] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--project-accent)]">
                02 / Key features
              </p>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="group border-b border-r border-white/10 p-6 transition hover:bg-white/[0.025]"
                >
                  <span className="font-mono text-[10px] text-[var(--project-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-8 text-lg font-semibold leading-7">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Technology stack
            </p>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {additionalImages.length > 0 && (
        <section className="border-b border-white/10 px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex items-end justify-between gap-5 border-b border-white/10 pb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--project-accent)]">
                  03 / Interface gallery
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
                  Product views
                </h2>
              </div>

              <span className="font-mono text-xs text-zinc-600">
                {String(additionalImages.length).padStart(2, "0")} screens
              </span>
            </div>

            <div className="space-y-6">
              {additionalImages.map((image, index) => (
                <figure
                  key={image}
                  className="border border-white/10 bg-[#0b0c0a] p-2"
                >
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} interface screen ${index + 2}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 90vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <figcaption className="flex items-center justify-between border-t border-white/10 px-3 py-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                      {project.title} interface
                    </span>

                    <span className="font-mono text-[9px] text-[var(--project-accent)]">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group grid gap-8 border border-white/10 bg-[#0a0b09] p-6 transition hover:border-[var(--project-accent)] sm:p-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-end"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Next project
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                Continue exploring my work
              </p>
            </div>

            <div className="flex items-end justify-between gap-6">
              <p className="text-4xl font-black uppercase tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                {nextProject.title}
              </p>

              <span className="mb-2 text-3xl text-[var(--project-accent)] transition group-hover:translate-x-2">
                →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}