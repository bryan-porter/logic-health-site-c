// Blog post types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  image?: string;
  content: string;
  readingTime?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Common component types
export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  practice: string;
  image?: string;
}

// Programs / tiles used on How It Works
export interface Program {
  key: string;
  title: string;
  description: string;
  href?: string;   // optional deep link
  icon?: string;   // simple emoji for now; can be swapped for SVG later
}
