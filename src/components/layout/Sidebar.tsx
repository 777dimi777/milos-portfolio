import Link from "next/link";
import { navigationItems } from "@/data/navigation";

export function Sidebar() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-28 flex-col border-r border-white/10 bg-[#050706]/95 px-4 py-7 backdrop-blur-xl lg:flex">
        <Link
          href="/"
          className="mx-auto text-2xl font-black tracking-[-0.12em]"
          aria-label="Miloš Dimitrijević home"
        >
          M<span className="text-[#d7ff38]">D</span>
        </Link>

        <nav
          className="my-auto flex flex-col gap-2"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center gap-1 rounded-xl border border-transparent px-2 py-3 text-[10px] text-zinc-500 transition hover:border-[#d7ff38]/25 hover:bg-[#d7ff38]/5 hover:text-[#d7ff38]"
            >
              <span className="text-base text-zinc-200 transition group-hover:text-[#d7ff38]">
                {item.icon}
              </span>

              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-4">
          <div className="rounded-xl border border-[#d7ff38]/20 px-2 py-3 text-center text-[9px] leading-4 text-zinc-400">
            <span className="mx-auto mb-2 block h-1.5 w-1.5 rounded-full bg-[#d7ff38] shadow-[0_0_12px_#d7ff38]" />
            Available for work
          </div>

          <div className="flex justify-center gap-3 text-[9px] text-zinc-500">
            <a
              href="https://github.com/777dimi777"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d7ff38]"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/miloš-dimitrijević-874b8423b"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d7ff38]"
            >
              IN
            </a>

            <a
              href="mailto:milosdimitrijevicc2005@gmail.com"
              className="transition hover:text-[#d7ff38]"
            >
              @
            </a>
          </div>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#050706]/95 px-5 backdrop-blur-xl lg:hidden">
        <Link
          href="/"
          className="text-xl font-black tracking-[-0.12em]"
          aria-label="Miloš Dimitrijević home"
        >
          M<span className="text-[#d7ff38]">D</span>
        </Link>

        <div className="flex gap-4 text-xs text-zinc-300">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </header>
    </>
  );
}