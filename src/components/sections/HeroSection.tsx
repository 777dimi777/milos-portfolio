import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Angular",
  "NestJS",
  "PostgreSQL",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[7%] top-[18%] h-px w-[86%] bg-white/10" />
        <div className="absolute bottom-[18%] left-[7%] h-px w-[86%] bg-white/10" />
        <div className="absolute right-[8%] top-[8%] h-72 w-72 rounded-full border border-[#d7ff38]/20" />
        <div className="absolute right-[3%] top-[13%] h-96 w-96 rounded-full border border-white/5" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 pb-10 pt-16 sm:px-10 lg:px-14 lg:pb-8 lg:pt-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Full-stack developer
          </p>

          <div className="flex items-center gap-2 rounded-full border border-[#d7ff38]/30 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#d7ff38]" />
            <span className="text-xs uppercase tracking-[0.15em] text-zinc-300">
              Available for work
            </span>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-8">
          <div className="relative z-10">
            <p className="mb-5 flex items-center gap-3 text-sm text-zinc-400">
              <span className="text-[#d7ff38]">✦</span>
              Hi, I&apos;m Miloš Dimitrijević
            </p>

            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.07em]">
              <span className="block">Miloš</span>
              <span className="block text-[#d7ff38]">Dimitrijević</span>
            </h1>

            <div className="mt-8 max-w-2xl border-l border-[#d7ff38] pl-5">
              <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
                I build digital experiences that turn ideas into fast,
                thoughtful and memorable web products.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-4 bg-[#d7ff38] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#070806] transition hover:bg-white hover:text-[#070806]"
              >
                Explore my work
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition hover:border-[#d7ff38] hover:text-[#d7ff38]"
              >
                Let&apos;s talk
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-400">
              <a
                href="https://github.com/777dimi777"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#d7ff38]"
              >
                GitHub ↗
              </a>

              <span className="h-4 w-px bg-white/20" />

              <a
                href="https://www.linkedin.com/in/miloš-dimitrijević-874b8423b"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#d7ff38]"
              >
                LinkedIn ↗
              </a>

              <span className="h-4 w-px bg-white/20" />

              <a
                href="mailto:milosdimitrijevicc2005@gmail.com"
                className="transition hover:text-[#d7ff38]"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff38]" />

            <div className="absolute left-[10%] top-[12%] z-20 hidden border border-white/15 bg-black/70 px-5 py-4 backdrop-blur-md sm:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#d7ff38]">
                Based in
              </p>
              <p className="mt-1 text-sm text-white">Serbia</p>
            </div>

            <div className="absolute bottom-[14%] right-[2%] z-20 hidden max-w-52 border border-white/15 bg-black/75 p-5 backdrop-blur-md sm:block">
              <p className="font-mono text-xs text-[#d7ff38]">
                {"<developer>"}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Clean code.
                <br />
                Thoughtful design.
                <br />
                Real solutions.
              </p>
            </div>

            <div className="relative z-10 mx-auto aspect-[4/5] w-[78%] overflow-hidden">
              <Image
                src="/images/milos.jpg"
                alt="Miloš Dimitrijević, full-stack web developer"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover  scale-[1.5] object-[center_72%] object-top grayscale-[20%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070806] via-transparent to-transparent" />
            </div>

            <p className="absolute bottom-2 left-0 z-20 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Design · Development · Digital experiences
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
            Technologies I work with
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {technologies.map((technology, index) => (
              <div key={technology} className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#d7ff38]">
                  0{index + 1}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  {technology}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}