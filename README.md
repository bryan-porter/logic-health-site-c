# LogicHM Marketing Website

A Next.js-based marketing website for Logic Health Management, providing turnkey Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) services for physician practices.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (via next/font/google)
- **Blog**: MDX with gray-matter

## Project Structure

```
logic-health-site-c/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   ├── why-outsource/page.tsx
│   ├── how-it-works/page.tsx
│   ├── solutions/
│   │   ├── ccm/page.tsx          # Chronic Care Management
│   │   └── rpm/page.tsx          # Remote Patient Monitoring
│   ├── results/page.tsx
│   ├── pricing/page.tsx
│   ├── compliance/page.tsx
│   ├── resources/page.tsx
│   ├── blog/
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/page.tsx       # Individual blog posts
│   ├── about/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Site header with navigation
│   │   └── Footer.tsx            # Site footer
│   ├── sections/                 # Reusable page sections (TBD)
│   ├── blog/
│   │   └── PostCard.tsx          # Blog post preview card
│   └── ui/
│       ├── Button.tsx            # Button component (primary/secondary/ghost)
│       └── Container.tsx         # Max-width container wrapper
│
├── lib/
│   ├── blog.ts                   # Blog post utilities (getAllPosts, getPostBySlug)
│   ├── constants.ts              # Navigation items, footer links
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # cn() helper for className merging
│
├── content/
│   └── blog/                     # MDX blog posts (to be added)
│
└── public/
    └── images/
        └── blog/                 # Blog post images
```

## Design System

### Colors

- **Primary (Medical Blue)**: `primary-{50-900}` — Trust, clinical authority
- **Accent (Teal/Green)**: `accent-{50-900}` — Health, vitality
- **Neutrals**: `neutral-{50-900}` — Text, backgrounds, borders

### Typography

- **Font**: Inter (system fallback)
- **Sizes**: 5xl (48px) → sm (14px)
- **Line height**: 1.5-1.6 for body text (clinical clarity)

### Components

- **Button variants**: `primary` | `secondary` | `ghost`
- **Sections**: Alternating `bg-white` / `bg-neutral-50`
- **Cards**: Subtle borders, hover shadows

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Sitemap

- `/` — Home
- `/why-outsource` — Why Outsource CCM/RPM
- `/how-it-works` — Implementation Process
- `/solutions/ccm` — Chronic Care Management
- `/solutions/rpm` — Remote Patient Monitoring
- `/results` — Case Studies & Outcomes
- `/pricing` — Pricing Information
- `/compliance` — HIPAA, SOC2, Security
- `/resources` — Resources Hub
- `/blog` — Blog Index
- `/blog/[slug]` — Individual Blog Posts
- `/about` — About LogicHM
- `/contact` — Contact Form

## Target Audience

- Physician owners/partners (3-30 provider practices)
- Medical Directors / Clinical Directors
- Practice administrators
- Revenue Cycle & Compliance leaders

## Key Messaging

**Positioning**: "Scale proactive chronic care without hiring. LogicHM delivers CCM & RPM end-to-end — enrollment, devices, monitoring, documentation, and billing — fully integrated with your EHR and built for compliance."

**Proof themes**:
- Clinical: Earlier intervention, improved BP/A1c, lower readmits
- Operational: Minimal staff burden, RN/MA care team, EHR integration
- Financial: Recurring MRR, clean billing, RHC/FQHC friendly
- Compliance: HIPAA, SOC2/HITRUST, audit-ready

## Next Steps

1. Build reusable section components (Hero, Stats, Features, Testimonial, CTA, FAQ)
2. Implement Home page with actual content
3. Build out Solutions pages (CCM, RPM)
4. Add blog posts to `content/blog/`
5. Create contact form
6. Implement responsive navigation with mobile menu
7. Add SEO metadata for all pages
8. Performance optimization (images, code splitting)

## License

Private — Logic Health Management
