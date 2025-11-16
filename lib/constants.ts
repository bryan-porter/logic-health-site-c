import { NavItem, Program } from "./types";

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

export const PROGRAM_TILES: Program[] = [
  {
    key: "awv",
    title: "Annual Wellness Visit (AWV)",
    description:
      "Personalized prevention plans, HRA logic, and Z‑code capture aligned with CMS.",
    href: "/contact?program=AWV",
    icon: "🛡️",
  },
  {
    key: "prevention",
    title: "Prevention and Wellness Visit",
    description:
      "Evidence‑based screenings, immunizations, and lifestyle interventions aligned with CMS and USPSTF guidelines.",
    href: "/contact?program=Prevention",
    icon: "🩺",
  },
  {
    key: "ccm",
    title: "Chronic Care Management (CCM)",
    description:
      "Streamlined documentation, supervision logic, and Z‑code overlays.",
    href: "/solutions/ccm",
    icon: "📘",
  },
  {
    key: "bhi",
    title: "Behavioral Health Integration (BHI)",
    description: "Embedded PROMs and risk stratification.",
    href: "/contact?program=BHI",
    icon: "🧠",
  },
  {
    key: "pcm",
    title: "Principal Care Management (PCM)",
    description: "Tailored for high‑risk patients and specialty alignment.",
    href: "/contact?program=PCM",
    icon: "🎯",
  },
  {
    key: "rpm",
    title: "Remote Patient Monitoring (RPM)",
    description:
      "Device integration, alert routing, and compliance dashboards.",
    href: "/solutions/rpm",
    icon: "📡",
  },
  {
    key: "rtm",
    title: "Remote Therapeutic Monitoring (RTM)",
    description:
      "Track non‑physiological data (therapy adherence, pain, engagement) between visits.",
    href: "/contact?program=RTM",
    icon: "📋",
  },
  {
    key: "tcm",
    title: "Transitional Care Management (TCM)",
    description: "Discharge coordination, care management, and equity mapping.",
    href: "/contact?program=TCM",
    icon: "🔁",
  },
  {
    key: "chi-pin",
    title: "CHI & PIN",
    description:
      "Community Health Integration & Principal Illness Navigation with SDoH‑driven workflows.",
    href: "/contact?program=CHI%20%26%20PIN",
    icon: "📍",
  },
  {
    key: "teams",
    title: "TEAMs",
    description:
      "Hospital‑based models for scalable inpatient and outpatient care.",
    href: "/contact?program=TEAMs",
    icon: "🏥",
  },
];
