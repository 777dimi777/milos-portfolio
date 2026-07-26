import Image from "next/image";

const technologies = [
  "Next.js",
  "React",
  "Angular",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Tailwind CSS",
];

const principles = [
  {
    number: "01",
    title: "Useful before flashy",
    description:
      "Every interface should first solve a real problem and make the user's next action clear.",
  },
  {
    number: "02",
    title: "Clean and scalable",
    description:
      "I build structured applications that are easier to understand, maintain and extend.",
  },
  {
    number: "03",
    title: "Details create quality",
    description:
      "Typography, spacing, responsiveness and feedback are what make a product feel complete.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-[#090a08] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 text-[22vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.015]">
        About
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d7ff38]">
              03 / About me
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Developer with a
              <span className="block text-[#d7ff38]">
                product mindset.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[560px] overflow-hidden border border-white/10 bg-[#11120f]">
            <Image
              src="/images/milos.jpg"
              alt="Miloš Dimitrijević"
              fill
              sizes="(max-width: 1280px) 100vw, 40vw"
              className="object-cover object-top grayscale-[15%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute left-5 top-5 border border-[#d7ff38]/40 bg-black/70 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#d7ff38]">
                Current role
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Full-stack developer
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-white/15 bg-black/75 backdrop-blur-md">
              <div className="border-r border-white/15 p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Based in
                </p>
                <p className="mt-2 font-semibold">Serbia</p>
              </div>

              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Main focus
                </p>
                <p className="mt-2 font-semibold">Web products</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-white/10 bg-[#0c0d0b]">
            <div className="grid gap-8 border-b border-white/10 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#d7ff38]">
                  Who I am
                </p>

                <p className="mt-5 text-2xl font-semibold leading-snug tracking-[-0.03em] text-white sm:text-3xl">
                  I&apos;m Miloš, a developer focused on building complete and
                  carefully designed web experiences.
                </p>
              </div>

              <div className="space-y-5 text-sm leading-7 text-zinc-400">
                <p>
                  I study Computing and Informatics at the Faculty of
                  Electronic Engineering in Niš, while continuously developing
                  practical full-stack applications.
                </p>

                <p>
                  My work combines frontend development, backend architecture,
                  databases and interface design. I enjoy transforming an
                  initial idea into a functional product that people can
                  understand and use easily.
                </p>
              </div>
            </div>

            <div className="grid border-b border-white/10 sm:grid-cols-3">
              <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-4xl font-black text-[#d7ff38]">03</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  Selected projects
                </p>
              </div>

              <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-2xl font-black uppercase text-white">
                  Full-stack
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  Development focus
                </p>
              </div>

              <div className="p-6">
                <p className="text-2xl font-black uppercase text-white">
                  Always
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  Learning and improving
                </p>
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d7ff38]">
                  Technologies and tools
                </p>

                <span className="font-mono text-[10px] text-zinc-600">
                  STACK / 2026
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <div
                    key={technology}
                    className="group flex items-center gap-3 border border-white/10 px-4 py-3 transition hover:border-[#d7ff38]/60 hover:bg-[#d7ff38]/[0.04]"
                  >
                    <span className="font-mono text-[10px] text-[#d7ff38]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300 group-hover:text-white">
                      {technology}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid border border-white/10 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group border-b border-white/10 p-6 transition hover:bg-[#d7ff38]/[0.03] lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#d7ff38]">
                  {principle.number}
                </span>

                <span className="text-zinc-700 transition group-hover:rotate-45 group-hover:text-[#d7ff38]">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-xl font-bold uppercase tracking-[-0.03em]">
                {principle.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}