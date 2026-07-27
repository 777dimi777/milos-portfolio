import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectStyle = {
    "--project-accent": project.accent,
  } as CSSProperties;

  return (
    <article
      style={projectStyle}
      className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0b0c0a] transition duration-500 hover:-translate-y-2 hover:border-[var(--project-accent)]"
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
        <div className="flex gap-4">
          <span className="font-mono text-xs text-[var(--project-accent)]">
            {project.number}
          </span>

          <div>
            <h3 className="text-2xl font-bold tracking-[-0.04em]">
              {project.title}
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-500">
              {project.category}
            </p>
          </div>
        </div>

        <span
          className="shrink-0 rounded-full border px-3 py-1 text-[9px] uppercase tracking-[0.12em]"
          style={{
            borderColor: `${project.accent}55`,
            color: project.accent,
          }}
        >
          {project.status}
        </span>
      </div>

      <div className="p-4">
        <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#080908]">
          <div className="absolute inset-x-0 top-0 z-20 flex h-8 items-center justify-between border-b border-white/10 bg-black/75 px-3 backdrop-blur-md">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-500">
              {project.slug}
            </span>
          </div>

          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 1280px) 100vw, 33vw"
              className="object-cover object-top pt-8 transition duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="flex h-full flex-col items-center justify-center px-6 pt-8 text-center"
              style={{
                background: `radial-gradient(circle at 50% 45%, ${project.accent}25, transparent 40%), #080908`,
              }}
            >
              <p
                className="text-[clamp(4rem,8vw,8rem)] font-black leading-none tracking-[-0.1em]"
                style={{ color: project.accent }}
              >
                GN
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                Green Nest
              </p>

              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Currently in development
              </p>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div
            className="absolute bottom-0 left-0 z-20 h-0.5 w-0 transition-all duration-700 group-hover:w-full"
            style={{ backgroundColor: project.accent }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <p className="text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-600">
            Case study coming next
          </span>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--project-accent)] transition hover:text-white"
          >
            GitHub
            <span className="transition-transform group-hover/link:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}