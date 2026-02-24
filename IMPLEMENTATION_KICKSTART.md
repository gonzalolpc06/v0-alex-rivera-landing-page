# IMPLEMENTATION KICKSTART
## Alex Rivera - 90-Day Executive Rebuild Landing Page

---

## 1. PROJECT OVERVIEW

**Project Type:** Single-page high-conversion landing page + Contact page  
**Client Persona:** Alex Rivera, Hybrid Performance Coach  
**Product:** The 90-Day Executive Rebuild  
**Target Audience:** C-Suite executives, founders, high-performing professionals  
**Design Philosophy:** Premium, minimalist, dark-mode, high-energy  
**Prototype Status:** Yes - placeholder content, editable later

---

## 2. TECH STACK

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.1.6 | App Router, SSR, routing |
| React | 19.2.4 | UI framework |
| Tailwind CSS | 4.2.0 | Utility-first styling |
| Framer Motion | ^11.x (to install) | Scroll animations, transitions, modal |
| Lucide React | 0.564.0 | Icons |
| Geist (font) | via next/font/google | Sans + Mono typography |
| shadcn/ui | Accordion, Card, Dialog | Pre-built components |

**New dependency required:** `framer-motion`

---

## 3. DESIGN TOKEN SYSTEM

### 3.1 Color Palette (5 colors max)

| Token | Hex | Usage |
|-------|-----|-------|
| **Navy (Background)** | `#0F172A` | Page background, cards, sections |
| **Electric Lime (Accent)** | `#D9F99D` | CTAs, highlights, accent icons, data points |
| **Slate 200 (Primary Text)** | `#E2E8F0` | Headings, primary body text |
| **Slate 400 (Muted Text)** | `#94A3B8` | Secondary text, descriptions, captions |
| **Slate 800 (Card/Surface)** | `#1E293B` | Card backgrounds, glass surfaces, borders |

### 3.2 Design Token Mapping (globals.css)

```
--background:        #0F172A  (Midnight Navy)
--foreground:        #E2E8F0  (Slate 200 - primary text)
--card:              #1E293B  (Slate 800 - card surface)
--card-foreground:   #E2E8F0  (Slate 200)
--primary:           #D9F99D  (Electric Lime)
--primary-foreground:#0F172A  (Navy - text on lime buttons)
--secondary:         #1E293B  (Slate 800)
--secondary-foreground:#E2E8F0
--muted:             #1E293B  (Slate 800)
--muted-foreground:  #94A3B8  (Slate 400)
--accent:            #D9F99D  (Electric Lime)
--accent-foreground: #0F172A  (Navy)
--border:            #334155  (Slate 700 - subtle borders)
--input:             #334155
--ring:              #D9F99D  (Lime focus ring)
```

### 3.3 Glass Effect Specification

```css
/* Glass card effect */
background: rgba(30, 41, 59, 0.6);      /* Slate 800 at 60% */
backdrop-filter: blur(12px);
border: 1px solid rgba(148, 163, 184, 0.1); /* Slate 400 at 10% */
```

### 3.4 Typography

| Element | Font | Weight | Size (desktop) | Size (mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Hero) | Geist Sans | 800 | 4.5rem / 72px | 2.5rem / 40px |
| H2 (Section) | Geist Sans | 700 | 3rem / 48px | 2rem / 32px |
| H3 (Card title) | Geist Sans | 600 | 1.25rem / 20px | 1.125rem / 18px |
| Body | Geist Sans | 400 | 1.125rem / 18px | 1rem / 16px |
| Small/Caption | Geist Sans | 400 | 0.875rem / 14px | 0.875rem / 14px |
| CTA Button | Geist Sans | 700 | 1.125rem / 18px | 1rem / 16px |

---

## 4. PAGE ARCHITECTURE

### 4.1 Full-Width Layout (no max-width container on outer elements)

```
Landing Page (app/page.tsx)
|
+-- Navbar (sticky, transparent -> solid on scroll)
|   +-- Logo/Brand
|   +-- Desktop: Back to Top button
|   +-- Mobile: Burger menu (sheet/drawer)
|
+-- Hero Section
|   +-- Headline + Subheadline
|   +-- CTA #1: "Join the Rebuild" -> Modal
|   +-- Floating trust badges
|
+-- Program Features Section
|   +-- Section header
|   +-- 3-column card grid (glass cards)
|   +-- CTA #2: "Join the Rebuild" -> Modal
|
+-- Results / Social Proof Section
|   +-- 3-column bento grid
|   +-- Metric cards + testimonials
|
+-- Pricing Section
|   +-- 3-tier pricing table
|   +-- "Most Popular" badge on Executive tier
|   +-- CTA #3: "Join the Rebuild" -> Modal
|
+-- About Alex Section
|   +-- Professional photo + bio text
|   +-- Credentials
|
+-- FAQ Section (Accordion)
|   +-- 4 strategic objection-handling questions
|
+-- Final CTA Section
|   +-- "Stop managing your fitness. Start leading it."
|   +-- CTA #4: "Join the 90-Day Rebuild" -> Modal
|
+-- Footer
|   +-- Minimalist hybrid (logo left, CTA center, social+legal right)
|   +-- CTA #5 in footer
|   +-- Contact Alex link -> /contact
|
+-- CTA Modal (Dialog)
    +-- "Start My Transformation" form placeholder
    +-- Name, email, tier selection (placeholder)

Contact Page (app/contact/page.tsx)
|
+-- Navbar (same component, reused)
+-- Contact form
+-- Footer (same component, reused)
```

### 4.2 Responsive Breakpoints

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (< 768px) | Single column, burger menu, stacked cards, smaller typography |
| Tablet (768px - 1023px) | 2-column grids, adjusted spacing |
| Desktop (>= 1024px) | Full 3-column grids, full typography scale |

---

## 5. COMPONENT FILE STRUCTURE

All files kept under ~600 lines. Reusable components separated for future updates.

```
app/
  layout.tsx              -- Root layout (Geist fonts, metadata, dark class)
  page.tsx                -- Landing page (assembles all sections)
  globals.css             -- Design tokens + global styles
  contact/
    page.tsx              -- Contact Alex page

components/
  navbar.tsx              -- Sticky navbar with burger menu
  hero-section.tsx        -- Hero with headline, sub, CTA
  features-section.tsx    -- Program grid (3 glass cards)
  feature-card.tsx        -- Individual glass card component
  social-proof-section.tsx -- Bento grid testimonials
  testimonial-card.tsx    -- Individual testimonial card
  metric-card.tsx         -- Biometric comparison card
  pricing-section.tsx     -- 3-tier pricing
  pricing-card.tsx        -- Individual pricing tier card
  about-section.tsx       -- About Alex bio
  faq-section.tsx         -- FAQ accordion
  final-cta-section.tsx   -- Final conversion strip
  footer.tsx              -- Minimalist hybrid footer
  cta-button.tsx          -- Reusable CTA button (opens modal)
  cta-modal.tsx           -- Dialog/modal for CTA
  section-wrapper.tsx     -- Reusable section with animations
  mobile-menu.tsx         -- Mobile burger menu (sheet)
  back-to-top.tsx         -- Smooth scroll back to top
  contact-form.tsx        -- Contact page form

  ui/                     -- shadcn/ui components (generated as needed)
    accordion.tsx
    card.tsx
    dialog.tsx
    button.tsx
    sheet.tsx
    input.tsx
    textarea.tsx
    label.tsx
    separator.tsx
    badge.tsx

lib/
  utils.ts                -- cn() utility (exists)

public/
  images/
    alex-rivera.jpg       -- Generated: professional coach headshot
    hero-bg.jpg           -- Generated: dark premium fitness background
    testimonial-1.jpg     -- Generated: Marcus T. headshot
    testimonial-2.jpg     -- Generated: Sarah L. headshot
    testimonial-3.jpg     -- Generated: David K. headshot
```

---

## 6. SECTION-BY-SECTION SPECIFICATION

### 6.1 Navbar
- **Behavior:** Sticky top, transparent initially, glass effect on scroll
- **Desktop:** "ALEX RIVERA" brand left, "Back to Top" button right
- **Mobile:** "ALEX RIVERA" brand left, burger icon right
- **Mobile menu:** Sheet/drawer sliding from right with section anchors
- **Scroll links:** Hero, Program, Results, Pricing, FAQ, Contact (smooth scroll)
- **Animation:** Background opacity transition on scroll (0 -> glass effect)

### 6.2 Hero Section
- **Layout:** Full viewport height, centered content
- **Headline:** "Build the body that fuels your career." (text-balance)
- **Subheadline:** "Data-driven hybrid performance for the modern executive. No fluff, just results."
- **CTA:** Electric Lime button "Join the Rebuild" -> opens modal
- **Trust badges:** Small row below CTA: "NASM Certified" | "500+ Executives Trained" | "Biometric Integration"
- **Animation:** Fade-in-up on load with staggered children

### 6.3 Program Features Section
- **Header:** "The 90-Day Executive Rebuild"
- **Subheader:** "A precision-engineered system for the professional who refuses to compromise."
- **Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Cards (glass effect):**
  1. **Wearable-Sync Technology** - Icon: Activity - "Workouts that listen to your body." + details
  2. **30-Min High-Density Workouts** - Icon: Timer - "Maximum output in 30 minutes." + details
  3. **Concierge Nutrition** - Icon: UtensilsCrossed - "Decision-free fueling." + details
- **Additional card row (optional, 2 cards):**
  4. **Executive Mobility Flows** - Icon: Stretch/Move - "Reverse the effects of the desk."
- **CTA after grid:** "Join the Rebuild"
- **Animation:** Cards stagger fade-in on scroll

### 6.4 Social Proof Section
- **Header:** "Performance Results"
- **Layout:** 3-column bento grid (desktop), stacked (mobile)
- **Card 1 - Metric Card (Marcus T.):**
  - Headshot image
  - Quote: "My afternoon energy crashes vanished..."
  - Badge: "Productivity +40%"
  - 5-star rating
  - Role: CEO
- **Card 2 - Biometric Comparison:**
  - "Week 1 vs Week 12" comparison
  - Progress bars or ring visuals (CSS-based, not images)
  - HRV improvement, resting heart rate
  - Icons: TrendingUp, Activity
- **Card 3 - Quote Card (Sarah L.):**
  - Headshot image
  - Quote: "I dropped 12lbs of fat while gaining 4lbs of muscle..."
  - Highlight: "3 hours per week"
  - Role: Tech Founder
- **Animation:** Slide-in from sides on scroll

### 6.5 Pricing Section
- **Header:** "Choose Your Path"
- **Layout:** 3 cards side by side (desktop), stacked (mobile)
- **Tier 1 - Self-Guided ($199/mo):**
  - Target: "The DIY Pro"
  - Features list (4-5 bullet points)
  - CTA: "Get Started" (secondary style)
- **Tier 2 - Executive ($499/mo) [HIGHLIGHTED]:**
  - Badge: "Most Popular"
  - Target: "The Busy Hero"
  - Features list (6-7 bullet points)
  - CTA: "Join the Rebuild" (primary Electric Lime)
  - Visual: Slightly larger, lime border glow, scale-105
- **Tier 3 - VIP Performance ($1,200/mo):**
  - Target: "The C-Suite"
  - Features list (7-8 bullet points)
  - CTA: "Apply Now" (secondary style)
- **Animation:** Cards scale-in on scroll

### 6.6 About Alex Section
- **Layout:** 2-column (image left, bio right) desktop; stacked mobile
- **Image:** Professional headshot (generated)
- **Bio text:** Full authority-building paragraph from plan
- **Credentials:** Small badges/text: "NASM Certified | Precision Nutrition | 10+ Years"
- **Animation:** Fade-in on scroll

### 6.7 FAQ Section
- **Header:** "Frequently Asked Performance Questions"
- **Component:** shadcn/ui Accordion
- **Questions (4):**
  1. "I have a packed schedule. How much time is required?"
  2. "What if I am traveling for work?"
  3. "Do I need to be in peak shape to start?"
  4. "How does the wearable integration work?"
- **Styling:** Lime accent on accordion triggers, navy background
- **Animation:** Fade-in on scroll

### 6.8 Final CTA Section
- **Copy:** "Stop managing your fitness. Start leading it."
- **Button:** "Join the 90-Day Rebuild" (large Electric Lime)
- **Scarcity text:** "Next cohort starting Monday. Only 5 spots remaining." (hardcoded)
- **Animation:** Scale-in on scroll

### 6.9 Footer
- **Layout:** 3-column (logo left, CTA center, links right)
- **Left:** "ALEX RIVERA" brand + copyright
- **Center:** CTA button "Join the Rebuild"
- **Right:** Social icons (Instagram, LinkedIn) + "Contact Alex" link + Privacy Policy + Terms
- **Background:** Slightly darker than page (#0B1120 or similar)

### 6.10 CTA Modal
- **Trigger:** All "Join the Rebuild" buttons across the page
- **Component:** shadcn/ui Dialog
- **Content:** Placeholder form (Name, Email, Select Tier dropdown, Submit button)
- **Note:** Non-functional prototype - placeholder only

### 6.11 Contact Page (/contact)
- **Navbar:** Same component (reused)
- **Form fields:** Name, Email, Phone (optional), Message, Submit
- **Layout:** Centered card on navy background
- **Footer:** Same component (reused)

---

## 7. ANIMATION SPECIFICATION

| Element | Animation | Trigger | Duration |
|---------|----------|---------|----------|
| Navbar bg | Opacity 0 -> glass | Scroll > 50px | 300ms |
| Hero content | Fade-in + slide-up | Page load | 800ms staggered |
| Feature cards | Fade-in + slide-up | Scroll into view | 600ms staggered |
| Testimonial cards | Fade-in + slide-in | Scroll into view | 600ms staggered |
| Pricing cards | Fade-in + scale | Scroll into view | 600ms staggered |
| About section | Fade-in | Scroll into view | 600ms |
| FAQ items | Fade-in | Scroll into view | 400ms |
| Final CTA | Scale-in | Scroll into view | 600ms |
| CTA buttons | Hover scale 1.05 | Hover | 200ms |
| Back to top | Fade-in | Scroll > 500px | 300ms |
| Mobile menu | Slide from right | Burger click | 300ms |
| Modal | Fade + scale | CTA click | 200ms |
| Smooth scroll | Ease-in-out | Nav link click | scroll-behavior: smooth |

**Framer Motion Reusable Wrapper:**
```tsx
// section-wrapper.tsx - wraps sections with scroll-triggered animations
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

---

## 8. SEO STRATEGY

### 8.1 Metadata (layout.tsx)
```tsx
title: "Alex Rivera | 90-Day Executive Rebuild - Hybrid Performance Coaching"
description: "Data-driven hybrid performance coaching for executives. Build strength, mobility, and energy in just 3 hours per week. Join the 90-Day Executive Rebuild."
```

### 8.2 Open Graph Tags
```tsx
openGraph: {
  title: "Build the Body That Fuels Your Career | Alex Rivera",
  description: "The 90-Day Executive Rebuild: strength, mobility, and nutrition coaching designed for high-performing professionals.",
  type: "website",
  url: "https://alexrivera.com",
  images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }]
}
```

### 8.3 Semantic HTML
- `<header>` for navbar
- `<main>` for page content
- `<section>` with `id` attributes for each section (enables anchor links)
- `<footer>` for footer
- `<article>` for testimonial cards
- Proper heading hierarchy: H1 (hero only) -> H2 (sections) -> H3 (cards)
- Alt text on all generated images
- `aria-label` on interactive elements

### 8.4 Viewport
```tsx
viewport: {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
}
```

---

## 9. IMAGE GENERATION PLAN

| Image | File Path | Prompt Description |
|-------|-----------|-------------------|
| Hero BG | `/public/images/hero-bg.jpg` | Dark moody gym/fitness environment, dramatic lighting, navy tones, professional quality, no people |
| Alex Rivera | `/public/images/alex-rivera.jpg` | Professional male fitness coach headshot, athletic build, confident expression, dark background, professional lighting |
| Marcus T. | `/public/images/testimonial-1.jpg` | Professional male CEO headshot, business attire, confident, warm lighting, neutral background |
| Sarah L. | `/public/images/testimonial-2.jpg` | Professional female tech founder headshot, modern business style, confident, warm lighting |
| David K. | `/public/images/testimonial-3.jpg` | Professional male private equity executive headshot, business attire, distinguished, neutral background |

---

## 10. IMPLEMENTATION ORDER (Task Breakdown)

### Task 1: Foundation Setup
- Update `globals.css` with custom dark theme design tokens
- Update `layout.tsx` with Geist fonts, metadata, SEO, dark class
- Install `framer-motion`
- Create reusable utilities: `section-wrapper.tsx`, `cta-button.tsx`, `cta-modal.tsx`
- Generate all 5 images

### Task 2: Navbar + Hero Section
- Build `navbar.tsx` (sticky, transparent-to-glass, responsive)
- Build `mobile-menu.tsx` (sheet with section links)
- Build `back-to-top.tsx`
- Build `hero-section.tsx` (full viewport, headline, CTA, trust badges)

### Task 3: Features + Social Proof
- Build `feature-card.tsx` (glass card component)
- Build `features-section.tsx` (3-4 card grid + CTA)
- Build `testimonial-card.tsx` and `metric-card.tsx`
- Build `social-proof-section.tsx` (bento grid)

### Task 4: Pricing + About + FAQ
- Build `pricing-card.tsx` (individual tier card)
- Build `pricing-section.tsx` (3-tier layout + CTA)
- Build `about-section.tsx` (photo + bio)
- Build `faq-section.tsx` (accordion + styling)

### Task 5: Final CTA + Footer + Contact Page
- Build `final-cta-section.tsx` (conversion strip + scarcity)
- Build `footer.tsx` (minimalist hybrid)
- Build `contact-form.tsx`
- Build `app/contact/page.tsx`
- Assemble `app/page.tsx` (import all sections)

---

## 11. DEPENDENCIES TO INSTALL

```bash
pnpm add framer-motion
```

shadcn/ui components to generate:
- `accordion`
- `card`
- `dialog`
- `button`
- `sheet`
- `input`
- `textarea`
- `label`
- `separator`
- `badge`

---

## 12. CONSTRAINTS & NOTES

- **No backend/database** - All content is hardcoded / placeholder
- **No state management** - No Redux, Context, etc.
- **No email capture** - CTA modal is placeholder only
- **No analytics** - Vercel Analytics already included
- **Max ~600 lines per file** - Split components aggressively
- **Full-width layout** - No max-width container on outer wrapper
- **Glass effects on cards** - Frosted glass with backdrop-blur
- **Electric Lime = accent only** - Not for backgrounds or large surfaces
- **Dark theme only** - No light mode toggle
- **Prototype content** - All text, FAQs, testimonials are editable placeholders
- **Legal pages** - Privacy Policy and Terms links are placeholder (href="#")
- **Social links** - Instagram and LinkedIn are placeholder (href="#")

---

## 13. QUALITY CHECKLIST

- [ ] All 5 CTAs present and opening modal
- [ ] Fully responsive: mobile, tablet, desktop
- [ ] Burger menu works on mobile with smooth sheet animation
- [ ] All scroll animations trigger correctly (once only)
- [ ] Back to top button appears and scrolls smoothly
- [ ] Glass effects render on all card components
- [ ] Pricing "Most Popular" tier visually highlighted
- [ ] FAQ accordion opens/closes with lime accents
- [ ] Contact page form renders with proper layout
- [ ] SEO metadata complete (title, description, OG tags)
- [ ] All images generated and displayed
- [ ] Semantic HTML with proper heading hierarchy
- [ ] ARIA labels on interactive elements
- [ ] Color contrast passes for primary and muted text on navy
- [ ] No horizontal scroll on any breakpoint
- [ ] Smooth scroll behavior on all anchor links
trigger deploy
