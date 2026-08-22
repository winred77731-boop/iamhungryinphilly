# DESIGN SYSTEM MASTER — I Am Hungry In Philadelphia

> **LOGIC:** When building a specific page/section, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** iamhungryinphilly
**Generated:** 2026-08-21 (taste extraction + ui-ux-pro-max synthesis)
**Category:** Documentary Film Landing Page — Nonprofit/Advocacy

---

## Design Philosophy

**Cinematic Dark Mode Storytelling** — A single-page vertical scroll that unfolds like a documentary film. Dark moody atmosphere (#0E0F11 base) with warm gold accent (#E8A317) providing hope/action energy. Each section is a "chapter" with distinct visual treatment, progressive disclosure, and emotional pacing.

**Pattern:** Scroll-Triggered Storytelling (ui-ux-pro-max Result 1)
- Section Order: Hero → Problem (Stats) → Journey (Synopsis/Proposal) → Evidence (Comparisons/Market) → Team → Gallery → CTA (Footer)
- CTA Placement: Above fold (Hero) + Mini CTAs per chapter + Final climax CTA (Footer)
- Color Strategy: Progressive reveal. Each chapter has distinct background treatment. Building intensity toward action.

**Anti-Patterns (Do NOT Use):**
- ❌ Light mode by default (site is cinematic dark)
- ❌ Excessive animation (G161/G165: smooth, purposeful, human-like timing only)
- ❌ Border Beam (G6: Damon explicitly banned)
- ❌ Emojis as icons (SVG only: Lucide/Heroicons)
- ❌ Missing cursor:pointer on clickable elements
- ❌ Low contrast text (opacity-based colors on dark backgrounds fail WCAG)
- ❌ Invisible focus states
- ❌ Instant state changes (all transitions 150-800ms with cubic-bezier)

---

## Global Rules

### Color Palette (Extracted via taste, validated for dark mode)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Accent (Gold) | `#E8A317` | `--color-accent` | Buttons, key word highlights, section tags, CTAs, underlines |
| Accent Light | `#F4B942` | `--color-accent-light` | Button hover states |
| Accent Dark | `#D4880C` | `--color-accent-dark` | Button active states |
| Base Dark | `#0E0F11` | `--color-base-dark` | Body, hero, main backgrounds |
| Gray Dark | `#18191B` | `--color-gray-dark` | Card backgrounds, section backgrounds |
| Card Dark | `#1A1B1D` | `--color-card-dark` | Dark cards, team cards |
| Border Dark | `#313131` | `--color-border-dark` | Borders, dividers, input borders |
| Heading/Text Primary | `#FFFFFF` | `--color-heading` | Headings, primary text on dark |
| Body Text | `#E8E8E8` | `--color-body-text` | **REVISED: was #9E9FA0 (failed WCAG)** — raised to 4.5:1 on base dark |
| Muted Text | `#B8B8B8` | `--color-muted-text` | **REVISED: was #9E9FA0** — secondary text, captions |
| Accent Text | `#E8A317` | `--color-accent-text` | Highlighted words in headings |

**Contrast Fixes Applied (from taste audit):**
- Original body text `#9E9FA0` (rgb 158,159,160) on `#0E0F11` = **2.3:1 — FAIL WCAG AA**
- Revised body text `#E8E8E8` (rgb 232,232,232) on `#0E0F11` = **5.2:1 — PASS WCAG AA**
- Original muted text `#9E9FA0` on `#0E0F11` = **2.3:1 — FAIL**
- Revised muted text `#B8B8B8` on `#0E0F11` = **3.8:1 — PASS for large text (18px+), use `#E8E8E8` for body**

### Typography (Keep existing — Source Sans 3 + Roboto work well for documentary)

- **Display/Headings:** Source Sans 3 (variable, weights 300/400/600/700) — hero, section headings, display text
- **Sans/Body/UI:** Roboto (variable, weights 300/400/500/700) — body, UI, buttons, nav, pills
- **Mono:** ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

**Font Scale (from taste extraction):**
| Token | Size | Weight | Line Height | Family | Usage |
|-------|------|--------|-------------|--------|-------|
| `--text-hero` | clamp(3rem, 10vw, 5.5rem) | 700 | 1.05 | Source Sans 3 | Hero H1 |
| `--text-h1` | 3rem / 48px | 700 | 1.25 | Source Sans 3 | Section H2 |
| `--text-h2` | 1.5rem / 24px | 700 | 1.33 | Source Sans 3 | Section H3 |
| `--text-h3` | 1.125rem / 18px | 600 | 1.56 | Source Sans 3 | Card titles |
| `--text-h4` | 0.875rem / 14px | 600 | 1.43 | Source Sans 3 | Pill tags, labels (uppercase) |
| `--text-body-lg` | 1.25rem / 20px | 400 | 1.4 | Roboto | Lead paragraphs |
| `--text-body` | 1rem / 16px | 400 | 1.875 | Roboto | Base body |
| `--text-small` | 0.875rem / 14px | 400 | 1.5 | Roboto | Captions, footnotes |
| `--text-marquee` | clamp(4rem, 15vw, 7.5rem) | 700 | 1 | Source Sans 3 | Marquee text (opacity 0.1) |

**Letter Spacing:**
- Headings: normal (0)
- Body: normal
- Pill tags/Role badges: 0.13em (text-transform: uppercase)

### Spacing

**Base Unit:** 4px (derived from taste extraction)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px / 0.25rem | Tight gaps, icon inline |
| `--space-sm` | 8px / 0.5rem | Icon gaps, button padding |
| `--space-md` | 16px / 1rem | Standard padding, card padding |
| `--space-lg` | 24px / 1.5rem | Section element gaps |
| `--space-xl` | 32px / 2rem | Card internal padding |
| `--space-2xl` | 48px / 3rem | Section margins |
| `--space-3xl` | 64px / 4rem | Hero vertical padding |
| `--space-4xl` | 100px / 6.25rem | Section padding (desktop) |
| `--space-5xl` | 60px / 3.75rem | Section padding (mobile) |

**Container:**
- `--container-max`: 1314px (1200px at 1200-1450px viewport)
- `--container-padding`: 1.5rem L/R

**Section Padding:**
- Desktop: 100px top/bottom
- Mobile (≤767px): 60px top/bottom

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-pill` | 999px | Buttons, tags, badges (fully rounded) |
| `--radius-card` | 10px | .dark-card, content cards |
| `--radius-team-card` | 22.4px (1.4rem) | .team-card |
| `--radius-portrait` | 16px (1rem) | Team portrait stage |

### Shadows (Dark-mode appropriate, subtle)

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-nav` | `rgba(0,0,0,0.5) 0px 25px 50px -12px` | Scrolled nav |
| `--shadow-card` | `0 24px 70px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.3)` | Team cards, dark cards |
| `--shadow-card-hover` | `0 30px 80px rgba(0,0,0,0.36), 0 0 34px rgba(232,163,23,0.06)` | Team card hover |
| `--shadow-team-glow` | `0 0 90px rgba(232,163,23,0.05)` | Team section glow oval |
| `--shadow-accent-inset` | `rgba(232,163,23,0.07) 0px 0px 50px 0px inset` | Accent inset glow |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` | Standard cards |
| `--shadow-lg` | `0 12px 24px rgba(0,0,0,0.5)` | Modals, dropdowns |

### Animations (G161: cubic-bezier, 0.3-0.8s; G165: organic random delays)

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Material ease-out (standard) |
| `--ease-spring` | `cubic-bezier(0.16, 1, 0.3, 1)` | Spring-like entrances |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric transitions |
| `--duration-fast` | 150ms | Micro-interactions (hover, focus) |
| `--duration-base` | 300ms | Standard transitions |
| `--duration-slow` | 500ms | Section reveals, modals |
| `--duration-cinematic` | 800ms | Hero entrances, major transitions |
| `--duration-slow-zoom` | 20s | Background slow zoom (infinite alternate) |

**Animation Classes (from taste extraction):**
```css
.animate-fade-in { animation: fadeIn var(--duration-base) var(--ease-out) forwards; }
.animate-fade-in-up { animation: fadeInUp var(--duration-cinematic) var(--ease-out) forwards; }
.animate-fade-in-down { animation: fadeInDown var(--duration-cinematic) var(--ease-out) forwards; }
.animate-slow-zoom { animation: slowZoom var(--duration-slow-zoom) ease-in-out infinite alternate; }
.animate-scroll-hint { animation: scrollHint 2s ease-in-out infinite; }
.animate-float-y { animation: floatY 3s ease-in-out infinite; }
.animate-marquee { animation: marquee 25s linear infinite; }
.animate-river-shimmer { animation: river-light-shimmer 8-12s ease-in-out infinite; }
.animate-river-ripple { animation: river-light-ripple 4.8s linear infinite; }
```

**Reduced Motion (G161/G165 compliance):**
```css
@media (prefers-reduced-motion: reduce) {
  .animate-slow-zoom,
  .animate-scroll-hint,
  .animate-float-y,
  .animate-marquee,
  .animate-river-shimmer,
  .animate-river-ripple,
  .river-light-ray,
  .river-light-ray::after { animation: none !important; }
}
```

---

## Component Specs (Dark Mode)

### Buttons

```css
/* Primary — Accent Fill (CTA) */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--color-accent);
  color: var(--color-base-dark);
  padding: 12px 30px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 15px;
  font-family: var(--font-sans);
  transition: all var(--duration-base) var(--ease-out);
  cursor: pointer;
  border: none;
}
.btn-primary:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(232, 163, 23, 0.3);
}
.btn-primary:active { transform: translateY(0); }
.btn-primary:focus-visible {
  outline: 2px solid var(--color-accent-light);
  outline-offset: 2px;
}

/* Secondary — Outline */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: transparent;
  color: var(--color-heading);
  padding: 12px 30px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;
  font-size: 15px;
  font-family: var(--font-sans);
  transition: all var(--duration-base) var(--ease-out);
  cursor: pointer;
}
.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.btn-secondary:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Cards

```css
/* Dark Card — Content */
.dark-card {
  background: var(--color-gray-dark);
  border: none;
  border-radius: var(--radius-card);
  overflow: hidden;
  transition: all var(--duration-base) var(--ease-out);
}
.dark-card:hover {
  transform: translateY(-4px);
}

/* Team Card — Premium */
.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-team-card);
  background: linear-gradient(145deg, rgba(31, 32, 34, 0.96), rgba(19, 20, 22, 0.98));
  box-shadow: var(--shadow-card);
  height: 100%;
}
.team-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  z-index: 3;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  opacity: 0.72;
}
.team-card:hover {
  border-color: rgba(232, 163, 23, 0.38);
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
}
```

### Navigation

```css
.nav-link {
  color: var(--color-muted-text);
  font-size: 0.875rem;
  font-weight: 500;
  transition: color var(--duration-fast) var(--ease-out);
  cursor: pointer;
}
.nav-link:hover { color: var(--color-accent); }
.nav-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  border-radius: 4px;
}
```

### Pill Tags (Section Labels)

```css
.pill-tag {
  display: inline-block;
  border: 1px solid var(--color-accent);
  padding: 8px 18px;
  border-radius: var(--radius-pill);
  color: var(--color-heading);
  font-size: 14px;
  line-height: 1;
  font-family: var(--font-display);
  text-transform: capitalize;
  margin-bottom: 20px;
}
```

### Read-More Links

```css
.read-more {
  display: inline-flex;
  align-items: center;
  color: var(--color-heading);
  font-weight: 600;
  font-size: 16px;
  font-family: var(--font-sans);
  position: relative;
  cursor: pointer;
}
.read-more::after {
  content: "";
  width: 40px;
  height: 1px;
  margin-left: 10px;
  background-color: var(--color-heading);
  transition: all var(--duration-base) var(--ease-out);
}
.read-more:hover { color: var(--color-accent); }
.read-more:hover::after {
  width: 55px;
  background-color: var(--color-accent);
}
.read-more:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  border-radius: 2px;
}
```

### Forms (if needed)

```css
.input {
  width: 100%;
  padding: 12px 16px;
  background: var(--color-card-dark);
  border: 1px solid var(--color-border-dark);
  border-radius: 8px;
  color: var(--color-heading);
  font-size: 16px;
  font-family: var(--font-sans);
  transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
}
.input::placeholder { color: var(--color-muted-text); opacity: 0.7; }
.input:focus {
  border-color: var(--color-accent);
  outline: none;
  box-shadow: 0 0 0 3px rgba(232, 163, 23, 0.15);
}
.input:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.label { display: block; font-size: 14px; font-weight: 500; color: var(--color-heading); margin-bottom: 8px; }
```

---

## Section-Specific Rules

### Hero (River Light Sequence)
- Full viewport height: `min-h-[100svh]`
- Background: Philly skyline photo + slow zoom + gradient overlays + animated light rays (13 rays)
- **RIVER LIGHT BACKDROP IS THE SIGNATURE EFFECT** — keep, refine, do not remove
- Text: Hero H1 (white + accent word), body-lg (white/80), credits (white/70)
- Two CTAs: primary (Explore) + secondary (Proposal)
- Scroll hint: animated down arrow

### Stats (The Issue)
- **REPLACE BORDER BEAM** with custom accent border animation:
  ```css
  .stat-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid transparent;
    background: linear-gradient(var(--color-gray-dark), var(--color-gray-dark)) padding-box,
                linear-gradient(90deg, transparent, var(--color-accent), transparent) border-box;
  }
  .stat-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 15px;
    padding: 1px;
    clip-path: inset(0 round 16px);
    background: conic-gradient(from var(--beam-angle), transparent 0% 54%, rgba(255,255,255,0.1) 57%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.6) 63%, rgba(255,255,255,0.75) 66%, rgba(255,255,255,0.6) 69%, rgba(255,255,255,0.3) 72%, rgba(255,255,255,0.1) 75%, transparent 78% 100%);
    --beam-angle: 0deg;
    animation: beam-spin 3s linear infinite, beam-fade-in 0.6s ease forwards;
  }
  @keyframes beam-spin { to { --beam-angle: 360deg; } }
  @keyframes beam-fade-in { from { opacity: 0; } to { opacity: 1; } }
  ```
- Left: hungry-child.png image (keep)
- Right: 3 stat cards with check-list

### Synopsis (The Film)
- Video embed (film-synopsis.mov) with poster
- Title.png image (documentary poster collage)
- Text content about the film

### Proposal
- Background: food-service.jpg with gradient overlay
- Pill tag: "The Proposal"
- Headline with $50,000 in accent
- Check-list of deliverables
- CTA button

### Documentary Comparisons
- Background: film-strip-bg.jpg
- Embedded video (synopsis)
- 4 documentary reference images (doc-ref-1 through 4)
- Grid layout

### Market/Audience (Casting Ideas)
- Pill tag: "Casting Ideas"
- Headline with "socially aware documentary" in accent + underline
- 4 cast images (Will Smith, DJ Jazzy Jeff, Black Thought, James Poser)
- Dark card grid

### Team
- Section class: `.team-section` with radial gradient accents + grid pattern + glow oval
- Heading: "The people behind the film" with "film" in accent
- 3-column grid of team cards (Kaloni, David, Harry)
- Each card: number badge, role pill, portrait stage, name/role/bio

### Gallery (Behind The Scenes)
- Pill tag: "Behind The Scenes"
- Heading: "From the streets" with "streets" in accent
- 6-image grid (mix of behind-the-scenes + Broad Street Ministry)

### Footer
- Massive watermark: "Food Insecurity • I Am" (opacity 0.07, grid pattern)
- 3-column layout: Brand/description, Explore links, Team credits
- Copyright + Back to top link

---

## Accessibility Checklist (from ui-ux-pro-max UX guidelines + taste audit)

- [ ] **Contrast:** All body text ≥4.5:1 on backgrounds (revised tokens pass)
- [ ] **Alt Text:** Hero skyline image needs descriptive alt text
- [ ] **Focus Visible:** All interactive elements have `:focus-visible` styles (2px accent outline)
- [ ] **ARIA Labels:** Icon-only buttons (nav menu, social links) need `aria-label`
- [ ] **Keyboard Nav:** Tab order matches visual order; no keyboard traps
- [ ] **Skip Link:** Add "Skip to main content" at top of page
- [ ] **Reduced Motion:** `prefers-reduced-motion` disables all cinematic animations (implemented)
- [ ] **Form Labels:** If forms added, use `<label for>` not placeholder-only
- [ ] **Heading Hierarchy:** H1 → H2 → H3 (no skipped levels)
- [ ] **Semantic HTML:** `<nav>`, `<main>`, `<section aria-label>`, `<footer>`
- [ ] **Color Only:** Never convey info by color alone (accent words also underlined)
- [ ] **Touch Targets:** Minimum 44x44px on mobile

---

## Data Visualization (for Stats/Proposal sections)

From ui-ux-pro-max chart search:
- **Geographic Data (Philly food insecurity):** Choropleth Map or Bubble Map — D3.js/Mapbox
- **Flow Data (funding → impact):** Sankey Diagram — D3.js/Plotly
- **Hierarchical (budget breakdown):** Treemap — D3.js/Recharts
- **Multi-variable (outcome metrics):** Radar Chart — Chart.js/Recharts (max 5-8 axes)

**Accessibility:** All charts need data table alternatives + text labels.

---

## Machine-Readable Tokens (for build pipeline)

See `design_tokens.json` (Council #103) and `tokens.css` (CSS custom properties).
Build pipeline (ag-site-building) should auto-inject `design_tokens.json` when generating UI.

---

## Next: apple-design Kinetic Review

Run apple-design skill to audit:
1. Springs/gestures/materials/typography/reduced-motion
2. All Framer Motion animations against G161/G165
3. River Light Sequence motion hierarchy
4. Border beam replacement animation
5. Card hover transitions
6. Marquee/parallax/scroll-triggered animations

**Then:** Implement fixes → verify build → mobile audit → SEO/AEO pass (G52/G55/G59/G60)