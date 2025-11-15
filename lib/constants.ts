import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Why Outsource",
    href: "/why-outsource",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Chronic Care Management", href: "/solutions/ccm" },
      { label: "Remote Patient Monitoring", href: "/solutions/rpm" },
    ],
  },
  {
    label: "Results",
    href: "/results",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
];

export const FOOTER_LINKS = {
  solutions: [
    { label: "Chronic Care Management", href: "/solutions/ccm" },
    { label: "Remote Patient Monitoring", href: "/solutions/rpm" },
    { label: "Why Outsource", href: "/why-outsource" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Results", href: "/results" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Compliance", href: "/compliance" },
  ],
};
