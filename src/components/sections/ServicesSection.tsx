const services = [
  {
    number: "01",
    symbol: "</>",
    title: "Frontend Development",
    description:
      "Responsive and interactive interfaces built with modern frontend technologies and attention to every visual detail.",
    deliverables: [
      "Responsive layouts",
      "Reusable components",
      "Interactive interfaces",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    symbol: "{ }",
    title: "Full-stack Applications",
    description:
      "Complete web products that connect polished user interfaces with reliable backend systems and databases.",
    deliverables: [
      "Frontend and backend",
      "Authentication systems",
      "Business logic",
      "Database integration",
    ],
  },
  {
    number: "03",
    symbol: "API",
    title: "Backend & API",
    description:
      "Structured server-side applications and APIs designed to keep data secure, organized and easy to expand.",
    deliverables: [
      "REST API development",
      "Database architecture",
      "User authentication",
      "Data validation",
    ],
  },
  {
    number: "04",
    symbol: "UI",
    title: "UI Implementation",
    description:
      "Accurate transformation of a design or initial idea into a functional, consistent and responsive website.",
    deliverables: [
      "Design implementation",
      "Mobile responsiveness",
      "Animations and feedback",
      "Accessible structure",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/10 bg-[#070806] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-10 bottom-0 text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.015]">
        Services
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d7ff38]">
              04 / Services
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              From initial idea
              <span className="block text-[#d7ff38]">
                to digital product.
              </span>
            </h2>

            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              <p className="max-w-xl text-base leading-7 text-zinc-400">
                I create modern websites and web applications by combining
                interface development, backend logic and database architecture.
              </p>

              <p className="max-w-xl text-base leading-7 text-zinc-500">
                Each product is built to be responsive, understandable,
                maintainable and ready for further development.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex min-h-[480px] flex-col border-b border-r border-white/10 bg-[#0b0c0a] p-6 transition duration-500 hover:bg-[#0f110c]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#d7ff38]">
                  {service.number}
                </span>

                <span className="font-mono text-sm text-zinc-600 transition group-hover:text-[#d7ff38]">
                  {service.symbol}
                </span>
              </div>

              <div className="mt-16">
                <div className="mb-7 flex h-16 w-16 items-center justify-center border border-white/10 bg-white/[0.02] font-mono text-sm font-bold text-[#d7ff38] transition duration-500 group-hover:border-[#d7ff38]/50 group-hover:bg-[#d7ff38] group-hover:text-black">
                  {service.symbol}
                </div>

                <h3 className="text-2xl font-bold uppercase leading-tight tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto border-t border-white/10 pt-5">
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Includes
                </p>

                <ul className="space-y-3">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-center gap-3 text-xs text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 bg-[#d7ff38]" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d7ff38] transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 border border-white/10 bg-[#0b0c0a] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d7ff38]">
              Have a project in mind?
            </p>

            <p className="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Let&apos;s discuss your idea and find the right technical
              solution.
            </p>
          </div>

          <a
            href="mailto:milosdimitrijevicc2005@gmail.com"
            className="inline-flex items-center justify-center gap-4 bg-[#d7ff38] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-white"
          >
            Start a conversation
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}