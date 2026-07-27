import Link from "next/link";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#050604] px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.6fr_0.4fr]">
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-black uppercase tracking-[-0.08em]"
            >
              M<span className="text-[#d7ff38]">D</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
              Full-stack developer building useful, thoughtful and memorable
              digital products.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {footerNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-[#d7ff38]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-6 text-[10px] uppercase tracking-[0.18em] text-zinc-700 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Miloš Dimitrijević. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/777dimi777"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d7ff38]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/miloš-dimitrijević-874b8423b"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d7ff38]"
            >
              LinkedIn
            </a>

            <Link
              href="/#home"
              className="transition hover:text-[#d7ff38]"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}