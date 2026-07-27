import { ContactForm } from "@/components/ui/ContactForm";

const contactLinks = [
  {
    label: "Email",
    value: "milosdimitrijevicc2005@gmail.com",
    href: "mailto:milosdimitrijevicc2005@gmail.com",
  },
  {
    label: "GitHub",
    value: "@777dimi777",
    href: "https://github.com/777dimi777",
  },
  {
    label: "LinkedIn",
    value: "Miloš Dimitrijević",
    href: "https://www.linkedin.com/in/miloš-dimitrijević-874b8423b",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/10 bg-[#070806] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 text-[19vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.015]">
        Contact
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d7ff38]">
              06 / Contact
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Have an idea?
              <span className="block text-[#d7ff38]">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400">
              I&apos;m open to junior development opportunities, freelance
              projects and collaborations on meaningful digital products.
            </p>
          </div>
        </div>

        <div className="mt-10 grid border border-white/10 bg-[#0a0b09] xl:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col border-b border-white/10 xl:border-b-0 xl:border-r">
            <div className="border-b border-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#d7ff38]" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7ff38]">
                  Available for opportunities
                </p>
              </div>

              <p className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.03em] sm:text-3xl">
                Let&apos;s create something useful, memorable and built to
                last.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
                Send me a short description of your idea, the type of product
                you need and the main goal you would like to achieve.
              </p>
            </div>

            <div className="flex-1">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="group grid gap-2 border-b border-white/10 p-6 transition hover:bg-[#d7ff38]/[0.035] sm:grid-cols-[0.3fr_0.7fr] sm:items-center"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    {contact.label}
                  </span>

                  <span className="flex items-center justify-between gap-4 text-sm text-zinc-300 transition group-hover:text-[#d7ff38]">
                    <span className="break-all">{contact.value}</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2">
              <div className="border-r border-white/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold">Serbia</p>
              </div>

              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Time zone
                </p>
                <p className="mt-2 text-sm font-semibold">CET / CEST</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Project inquiry
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Complete the fields below
                </p>
              </div>

              <span className="font-mono text-xl text-[#d7ff38]">
                ↗
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}