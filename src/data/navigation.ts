export type NavigationItem = {
  label: string;
  href: string;
  icon: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: "⌂",
  },
  {
    label: "About",
    href: "/about",
    icon: "◎",
  },
  {
    label: "Services",
    href: "/services",
    icon: "◇",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "▣",
  },
  {
    label: "Process",
    href: "/services#process",
    icon: "✦",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "✉",
  },
];