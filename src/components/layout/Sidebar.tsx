"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";

const socialLinks = [
  {
    label: "GH",
    href: "https://github.com/777dimi777",
    ariaLabel: "Open GitHub profile",
  },
  {
    label: "IN",
    href: "https://www.linkedin.com/in/miloš-dimitrijević-874b8423b",
    ariaLabel: "Open LinkedIn profile",
  },
  {
    label: "@",
    href: "mailto:milosdimitrijevicc2005@gmail.com",
    ariaLabel: "Send an email",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function isActive(href: string) {
    const pathWithoutHash = href.split("#")[0];

    if (href.includes("#")) {
      return false;
    }

    if (pathWithoutHash === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(pathWithoutHash);
  }

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-28 flex-col border-r border-white/10 bg-[#070806] lg:flex">
        <div className="flex h-24 items-center justify-center border-b border-white/10">
          <Link
            href="/"
            aria-label="Miloš Dimitrijević home"
            className="text-2xl font-black tracking-[-0.12em]"
          >
            M<span className="text-[#d7ff38]">D</span>
          </Link>
        </div>

        <nav className="flex flex-1 flex-col">
          {navigationItems.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative flex flex-1 flex-col items-center justify-center gap-2 border-b border-white/10 px-2 text-center transition ${
                  active
                    ? "bg-[#d7ff38]/[0.06] text-[#d7ff38]"
                    : "text-zinc-600 hover:bg-white/[0.025] hover:text-white"
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-[#d7ff38] transition-all duration-300 ${
                    active ? "h-10" : "group-hover:h-6"
                  }`}
                />

                <span className="font-mono text-[9px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.12em]">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10">
          <div className="flex items-center justify-center gap-1.5 border-b border-white/10 py-4">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d7ff38]" />
            <span className="text-[8px] uppercase tracking-[0.14em] text-zinc-500">
              Available
            </span>
          </div>

          <div className="grid grid-cols-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                aria-label={social.ariaLabel}
                className="flex h-11 items-center justify-center border-r border-white/10 text-[9px] font-bold text-zinc-600 transition last:border-r-0 hover:bg-[#d7ff38] hover:text-black"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#070806]/95 px-5 backdrop-blur-xl lg:hidden">
        <Link
          href="/"
          aria-label="Miloš Dimitrijević home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-black tracking-[-0.12em]"
        >
          M<span className="text-[#d7ff38]">D</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d7ff38]" />
            <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-500">
              Available for work
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/15 transition hover:border-[#d7ff38]"
          >
            <span
              className={`h-px w-5 bg-white transition duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px bg-[#d7ff38] transition duration-300 ${
                menuOpen ? "w-5 -translate-y-[3.5px] -rotate-45" : "w-3"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-[#070806] transition duration-500 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <nav className="flex-1">
            {navigationItems.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/10 px-6 py-5 transition ${
                    active
                      ? "bg-[#d7ff38]/[0.06] text-[#d7ff38]"
                      : "text-white hover:bg-white/[0.025]"
                  }`}
                >
                  <span className="font-mono text-xs text-[#d7ff38]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-2xl font-black uppercase tracking-[-0.04em]">
                    {item.label}
                  </span>

                  <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-[#d7ff38]">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Let&apos;s create something together
            </p>

            <a
              href="mailto:milosdimitrijevicc2005@gmail.com"
              className="mt-3 block break-all text-sm text-[#d7ff38]"
            >
              milosdimitrijevicc2005@gmail.com
            </a>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  aria-label={social.ariaLabel}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 text-[10px] font-bold text-zinc-500 transition hover:border-[#d7ff38] hover:bg-[#d7ff38] hover:text-black"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}