import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative border-b border-white/10 bg-[#070806] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d7ff38]">
              02 / Selected projects
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Projects built with
              <span className="block text-[#d7ff38]">purpose.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
              A selection of full-stack and frontend products focused on useful
              functionality, clean interfaces and thoughtful user experiences.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-500">
            More detailed case studies and live demonstrations are coming soon.
          </p>

          <a
            href="https://github.com/777dimi777"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ff38] transition hover:text-white"
          >
            View GitHub profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}