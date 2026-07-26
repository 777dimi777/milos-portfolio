const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We define the main goal, target users, required functionality and the problem the product needs to solve.",
    output: "Goals and requirements",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I organize the application structure, pages, data, technical stack and the most important user flows.",
    output: "Project structure",
  },
  {
    number: "03",
    title: "Design",
    description:
      "The interface direction is defined through layout, typography, colors, components and responsive behavior.",
    output: "Visual direction",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "The product is implemented in clear stages, with regular testing and visible progress throughout development.",
    output: "Functional product",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "The final product is tested, optimized, documented and prepared for deployment and future improvements.",
    output: "Launch-ready solution",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-b border-white/10 bg-[#0a0b09] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d7ff38]">
              05 / Work process
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Clear process.
              <span className="block text-[#d7ff38]">
                Better outcome.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400">
              Every project is divided into understandable stages so that the
              direction, progress and next step remain clear.
            </p>
          </div>
        </div>

        <div className="mt-10 border-l border-t border-white/10">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="group grid border-b border-r border-white/10 transition hover:bg-[#d7ff38]/[0.025] lg:grid-cols-[0.12fr_0.25fr_0.43fr_0.2fr]"
            >
              <div className="flex items-center border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
                <span className="font-mono text-sm text-[#d7ff38]">
                  {step.number}
                </span>
              </div>

              <div className="flex items-center border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-7">
                <h3 className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                  {step.title}
                </h3>
              </div>

              <div className="flex items-center border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-7">
                <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </div>

              <div className="flex items-center justify-between p-5 lg:p-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Output
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">
                    {step.output}
                  </p>
                </div>

                <span className="text-zinc-700 transition duration-300 group-hover:translate-x-1 group-hover:text-[#d7ff38]">
                  →
                </span>
              </div>

              {index < processSteps.length - 1 && (
                <div className="pointer-events-none absolute" />
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-5 border border-[#d7ff38]/25 bg-[#d7ff38]/[0.035] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d7ff38]/40 text-[#d7ff38]">
              ✓
            </span>

            <div>
              <p className="font-semibold text-white">
                Transparent development from start to finish
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Clear stages, regular progress and no unnecessary complexity.
              </p>
            </div>
          </div>

          <a
            href="mailto:milosdimitrijevicc2005@gmail.com"
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ff38] transition hover:text-white"
          >
            Discuss a project ↗
          </a>
        </div>
      </div>
    </section>
  );
}