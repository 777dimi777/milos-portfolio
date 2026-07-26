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
      <div className="flex items-start justify-between border-b border-white/10 p-5">
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
          className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.12em]"
          style={{
            borderColor: `${project.accent}55`,
            color: project.accent,
          }}
        >
          {project.status}
        </span>
      </div>

      <div className="p-4">
        <div
          className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#080908]"
          style={{
            background: `radial-gradient(circle at 75% 20%, ${project.accent}30, transparent 35%), #080908`,
          }}
        >
          <div className="flex h-8 items-center justify-between border-b border-white/10 px-3">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
              Project preview
            </span>
          </div>

          <div className="grid h-[calc(100%-2rem)] grid-cols-[22%_78%]">
            <div className="border-r border-white/10 p-3">
              <div
                className="mb-5 h-4 w-4 rounded-full"
                style={{ backgroundColor: project.accent }}
              />

              <div className="space-y-3">
                <div className="h-1.5 w-full rounded-full bg-white/15" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="relative p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="font-mono text-[8px] uppercase tracking-[0.2em]"
                    style={{ color: project.accent }}
                  >
                    Digital product
                  </p>

                  <p className="mt-2 text-base font-black uppercase tracking-[-0.04em] text-white sm:text-xl">
                    {project.title}
                  </p>
                </div>

                <div className="h-6 w-14 border border-white/15" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-12 border border-white/10 bg-white/[0.03] p-2">
                  <div
                    className="h-1 w-1/2"
                    style={{ backgroundColor: project.accent }}
                  />
                  <div className="mt-3 h-1 w-full bg-white/10" />
                </div>

                <div className="h-12 border border-white/10 bg-white/[0.03] p-2">
                  <div
                    className="h-1 w-1/3"
                    style={{ backgroundColor: project.accent }}
                  />
                  <div className="mt-3 h-1 w-4/5 bg-white/10" />
                </div>

                <div className="h-12 border border-white/10 bg-white/[0.03] p-2">
                  <div
                    className="h-1 w-2/3"
                    style={{ backgroundColor: project.accent }}
                  />
                  <div className="mt-3 h-1 w-full bg-white/10" />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-[1.4fr_0.6fr] gap-2">
                <div className="relative h-16 overflow-hidden border border-white/10 bg-white/[0.03] p-3">
                  <div className="absolute bottom-0 left-3 right-3 flex h-10 items-end gap-1">
                    {[35, 60, 45, 80, 55, 90, 65].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="flex-1 opacity-60"
                        style={{
                          height: `${height}%`,
                          backgroundColor: project.accent,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="flex h-16 items-center justify-center border text-2xl font-black"
                  style={{
                    borderColor: `${project.accent}55`,
                    color: project.accent,
                  }}
                >
                  {project.number}
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-700 group-hover:w-full"
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

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.15em] text-zinc-500">
            Case study coming soon
          </span>

          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 group-hover:rotate-45"
            style={{
              borderColor: `${project.accent}66`,
              color: project.accent,
            }}
          >
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}