import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative grid min-h-[680px] overflow-hidden border-b border-white/10 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 xl:px-20">
      <div className="relative z-10 flex flex-col justify-center">
        <p className="mb-7 flex items-center gap-3 text-sm text-zinc-400">
          <span className="text-[#d7ff38]">✦</span>
          Full-Stack Developer · Digital Creator
        </p>

        <h1 className="max-w-4xl text-[clamp(4rem,7vw,8rem)] font-black leading-[0.82] tracking-[-0.085em]">
          MILOŠ
          <br />
          <span className="text-[#d7ff38]">DIMITRIJEVIĆ</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
          I build digital experiences that grow ideas into fast, thoughtful and
          memorable web products.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="flex min-w-48 items-center justify-between rounded-xl border border-[#d7ff38] bg-[#d7ff38] px-5 py-4 text-sm font-semibold text-[#0b0e09] transition hover:-translate-y-1"
          >
            Explore my work
            <span>↗</span>
          </Link>

          <Link
            href="/contact"
            className="flex min-w-48 items-center justify-between rounded-xl border border-white/15 bg-white/[0.02] px-5 py-4 text-sm transition hover:-translate-y-1 hover:border-[#d7ff38]/40 hover:bg-[#d7ff38]/5"
          >
            Let&apos;s talk
            <span>↗</span>
          </Link>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-zinc-500">
          <a
            href="https://github.com/777dimi777"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#d7ff38]"
          >
            GitHub
          </a>

          <span>/</span>

          <a
            href="https://www.linkedin.com/in/miloš-dimitrijević-874b8423b"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#d7ff38]"
          >
            LinkedIn
          </a>

          <span>/</span>

          <a
            href="mailto:milosdimitrijevicc2005@gmail.com"
            className="transition hover:text-[#d7ff38]"
          >
            Email
          </a>
        </div>
      </div>

      <div className="relative min-h-[540px]">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,56,0.7),rgba(81,98,24,0.3)_48%,transparent_70%)]" />

        <div className="absolute bottom-0 left-1/2 h-[560px] w-[430px] -translate-x-1/2 overflow-hidden rounded-t-[48%] rounded-b-2xl shadow-2xl">
          <Image
            src="/images/milos.jpg"
            alt="Miloš Dimitrijević, Full-Stack Developer"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="object-cover object-[center_42%] brightness-[0.72] contrast-110 saturate-75"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070908]" />
        </div>

        <div className="absolute right-0 top-1/4 z-20 w-52 rounded-2xl border border-white/15 bg-[#0d120f]/75 p-6 shadow-2xl backdrop-blur-xl">
          <span className="font-mono text-[#d7ff38]">&lt;/&gt;</span>

          <p className="mt-5 text-sm leading-6 text-zinc-300">
            Turning ideas into complete digital experiences.
          </p>
        </div>

        <div className="absolute bottom-8 right-0 z-20 text-xs text-zinc-400">
          <span className="mr-2 text-[#d7ff38]">●</span>
          Serbia · Open to remote work
        </div>
      </div>
    </section>
  );
}