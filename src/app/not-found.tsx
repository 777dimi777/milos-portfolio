import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#070806] px-6 py-20 sm:px-10 lg:min-h-screen lg:px-14">
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[40vw] font-black leading-none tracking-[-0.12em] text-white/[0.018]">
        404
      </div>

      <div className="relative mx-auto w-full max-w-[1600px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d7ff38]">
          Error 404 / Page not found
        </p>

        <h1 className="mt-8 max-w-5xl text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
          Lost in the
          <span className="block text-[#d7ff38]">
            digital space.
          </span>
        </h1>

        <div className="mt-10 grid gap-7 border-t border-white/10 pt-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
          <p className="max-w-xl text-base leading-7 text-zinc-400">
            The page you are looking for does not exist, may have been moved or
            the address may have been entered incorrectly.
          </p>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/"
              className="inline-flex items-center gap-4 bg-[#d7ff38] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white"
            >
              Return home
              <span>→</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-4 border border-white/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-[#d7ff38] hover:text-[#d7ff38]"
            >
              View projects
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}