# DESIGN TOKENS — I Am Hungry In Philadelphia

Extracted: 2026-08-21
Source: http://localhost:3000
Screenshot: C:\Users\info\AppData\Local\Temp\chrome-devtools-mcp-U7RPkI\screenshot.png

## Color Palette

### Primary Colors
- Accent (Gold): #E8A317 (usage: buttons, links, key word highlights, section tags, CTAs)
- Accent Light: #F4B942 (usage: hover states on buttons)
- Accent Dark: #D4880C (usage: active states)

### Background Colors
- Base Dark: #0E0F11 (body, hero, main backgrounds)
- Gray Dark: #18191B (card backgrounds, section backgrounds)
- Card Dark: #1A1B1D (dark cards, team cards)
- Border Dark: #313131 (borders, dividers)
- Header BG: transparent (nav)
- Footer BG: #0E0F11 (same as base dark)

### Text Colors
- Heading: #1A1A1A (appears as white #FFFFFF on dark backgrounds)
- Body Text: #9E9FA0 (rgb(158, 159, 160) — muted text)
- Muted Text: #9E9FA0 (same as body)
- Link Text: #9E9FA0 (muted, transitions to accent on hover)
- Button Text: #FFFFFF (white on accent buttons)
- Accent Text: #E8A317 (highlighted words in headings)

### Border Colors
- Default Border: #313131 (border-dark)
- Input Border: #313131
- Card Border: rgba(255, 255, 255, 0.1)
- Team Card Border: rgba(255, 255, 255, 0.1)

## Typography

### Font Families
- Display: Source Sans 3 (variable, weights 300/400/600/700) — headings, hero, display text
- Sans: Roboto (variable, weights 300/400/500/700) — body, UI, buttons, nav
- Mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

### Font Scale
- H1: 88px / 700 / 92.4px (line-height 1.05) — Source Sans 3
- H2: 48px / 700 / 60px (line-height 1.25) — Source Sans 3
- H3: 18px / 600 / 28px (line-height 1.56) — Source Sans 3
- H4: 14px / 600 / 20px (line-height 1.43, letter-spacing 0.7px) — Source Sans 3
- Body: 20px / 400 / 28px (line-height 1.4) — Roboto
- Base: 16px / 400 / 30px (line-height 1.875) — Roboto
- Small: 14px / 400 / ~22px — Roboto
- Nav/Links: 16px / 400 / 30px — Roboto
- Pill Tags: 14px / 600 / 1 — Source Sans 3 (text-transform: capitalize)
- Marquee: 120px / 700 / 1 — Source Sans 3 (opacity 0.1)
- Team Member Number: 1.7rem / 700 / 1 — Source Sans 3

### Letter Spacing
- Headings: normal (0)
- Body: normal
- Labels/Caps (h4, pill tags): 0.7px / 0.13em (text-transform: uppercase on role badges)

## Spacing

### Base Unit: 4px (derived from common values: 4, 8, 12, 16, 24, 32, 48, 64, 80, 100, 128, 192px)

### Spacing Scale (sorted unique values from computed styles)
4px, 6px, 8px, 12px, 12.8px, 14.4px, 16px, 18.4px, 19.2px, 20px, 21.6px, 24px, 24.8px, 25.6px, 26.4px, 27.2px, 28.8px, 32px, 35.2px, 40px, 48px, 64px, 80px, 100px, 100.8px, 120px, 128px, 192px, 366px

### Section Padding
- Desktop: 100px top/bottom (.section-padding)
- Mobile (≤767px): 60px top/bottom

### Container
- .container-wide: max-width 1314px (1200px at 1200-1450px viewport), padding 1.5rem L/R

## Border Radius
- Pill/Buttons: 999px (30px in CSS classes) — fully rounded
- Cards: 10px (.dark-card), 1.4rem (22.4px) (.team-card)
- Team Portrait: 1rem (16px)
- Section elements: 12px, 16px, 22.4px
- Focus rings: not explicitly defined (gap to audit)

## Box Shadows
- Hero/Nav transition: rgba(0,0,0,0.5) 0px 25px 50px -12px (on scrolled nav)
- Card hover: 0 24px 70px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.3)
- Team card hover: 0 30px 80px rgba(0,0,0,0.36), 0 0 34px rgba(232,163,23,0.06)
- Team section glow: 0 0 90px rgba(232,163,23,0.05)
- Border beam (Stats): conic-gradient border animation (G6: remove)
- Accent inset: rgba(232,163,23,0.07) 0px 0px 50px 0px inset

## Layout
- Max Width: 1314px (container-wide), 1200px (1200-1450px breakpoint)
- Grid: CSS Grid used in Stats (2-col), Team (3-col), Hero (flex centered)
- Section Rhythm: Alternating dark backgrounds with accent highlights
- Hero: min-h-[100svh], flex centered
- Stats: min-h-screen
- Team section: radial gradient accents at 8%/16% and 92%/74%

## Visual Notes (from screenshot analysis)

### Overall Feel
Cinematic, emotionally serious documentary landing page. Dark moody atmosphere with warm gold accent providing hope/action energy. Single-page vertical scroll with dramatic section breaks.

### Notable Effects/Patterns
1. **River Light Sequence** (Hero + Stats): Full-screen Philly skyline photo with slow zoom (20s), gradient overlays, animated light rays (13 rays with varying colors/durations), reflections with screen blend mode, dot pattern at bottom — creates immersive cinematic backdrop
2. **Border Beam** (Stats section): Animated conic-gradient border on stat cards — G6 VIOLATION (Damon: "never want to use it again")
3. **Pill Tags**: Rounded badges (.sub-title, .theme-btn, section tags) with accent border/fill
4. **Animated Underlines**: .read-more links with expanding underline on hover
5. **Card Hover Lift**: .dark-card and .team-card translateY(-4px/-6px) with shadow deepening
6. **Marquee Text**: Infinite horizontal scroll of large low-opacity text (120px Source Sans 3)
7. **Slow Zoom**: Background images animate scale(1) → scale(1.08) over 20s
8. **Scroll Hint**: Animated down arrow in hero
9. **Floating Elements**: floatY animation (3s ease-in-out) on decorative elements
10. **Film Strip Pattern**: Background in video section
11. **Grid Pattern**: Subtle crosshatch in Team section (42px grid, 7% opacity)
12. **Team Section Glow**: Rotated oval with accent border and box-shadow
13. **River Light Rays**: 13 animated rays with blur, shimmer, ripple animations
14. **Reduced Motion**: All animations disabled via prefers-reduced-motion

### Typography Patterns
- Hero: "I Am Hungry" (white) + "In Philadelphia" (accent) on separate lines
- Strategic word highlighting: key words in headings colored accent + underlined (except, $50,000, film, streets, socially aware documentary)
- Section labels: Small pill tags (.sub-title pattern) — "The Proposal", "Casting Ideas", "The Team", "Behind The Scenes"
- Footer watermark: Massive "Food Insecurity • I Am" at opacity 0.07-0.1

## CSS Custom Properties (from :root / @theme)

```css
@theme {
  --color-base-dark: #0E0F11;
  --color-gray-dark: #18191B;
  --color-card-dark: #1A1B1D;
  --color-border-dark: #313131;
  --color-heading: #1A1A1A;
  --color-text-muted: #9E9FA0;
  --color-accent: #E8A317;
  --color-accent-light: #F4B942;
  --color-accent-dark: #D4880C;
  --color-white: #ffffff;

  --font-sans: var(--font-roboto), sans-serif;
  --font-display: var(--font-source-sans), sans-serif;

  --animate-fade-in: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  --animate-fade-in-up: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  --animate-fade-in-down: fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  --animate-slow-zoom: slowZoom 20s ease-in-out infinite alternate;
  --animate-scroll-hint: scrollHint 2s ease-in-out infinite;
  --animate-float-y: floatY 3s ease-in-out infinite;
  --animate-marquee: marquee 25s linear infinite;
}
```

## Media Assets

### Images (20 total)
| # | Section | Dimensions | Source | Alt Text | Status |
|---|---------|-----------|--------|----------|--------|
| 1 | Hero (river-light-photo) | 1440x900 | /images/philly-skyline.jpg | (no alt text) | keep |
| 2 | Stats | 688x510 | /images/hungry-child.png | A child holding a cardboard sign reading HunGRY — food insecurity in Philadelphia | keep |
| 3 | Proposal | 839x645 | /images/title.png | I Am Hungry In Philadelphia — documentary poster collage | keep |
| 4 | DocumentaryComparisons | 113x148 | /images/doc-ref-1.png | Dive! The Film | keep |
| 5 | DocumentaryComparisons | 113x148 | /images/doc-ref-2.png | A Place At The Table | keep |
| 6 | DocumentaryComparisons | 114x148 | /images/doc-ref-3.png | Hunger In America | keep |
| 7 | DocumentaryComparisons | 121x148 | /images/doc-ref-4.png | Hungry To Learn | keep |
| 8 | Casting | 183x252 | /images/cast-1.png | Will Smith | keep |
| 9 | Casting | 964x1632 | /images/cast-2-enhanced.png | DJ Jazzy Jeff | keep |
| 10 | Casting | 183x252 | /images/cast-3.png | Black Thought | keep |
| 11 | Casting | 185x252 | /images/cast-4.png | James Poser | keep |
| 12 | Team | 1254x1254 | /images/director-kaloni-v2.png | Kaloni Davis | keep |
| 13 | Team | 1254x1254 | /images/writer-greenberg-v2.png | David J. Greenberg | keep |
| 14 | Team | 1254x1254 | /images/producer-hayman-v2.png | Harry Hayman | keep |
| 15 | Gallery | 331x447 | /images/gallery-1-new.png | Behind the scenes — production shoot | keep |
| 16 | Gallery | 225x300 | /images/gallery-1.jpg | Broad Street Ministry — radical hospitality | keep |
| 17 | Gallery | 225x300 | /images/gallery-2.jpg | Behind the scenes 2 | keep |
| 18 | Gallery | 225x300 | /images/gallery-4.jpg | Behind the scenes 4 | keep |
| 19 | Gallery | 225x300 | /images/gallery-5.jpg | Behind the scenes 5 | keep |
| 20 | Gallery | 263x300 | /images/gallery-6.jpg | Behind the scenes 6 | keep |

### Videos (1 total)
| # | Section | Source | Poster | Status |
|---|---------|--------|--------|--------|
| 1 | DocumentaryComparisons | /videos/film-synopsis.mov | (no poster) | keep |

### Background Images (2 total)
| # | Section | Source | Status |
|---|---------|--------|--------|
| 1 | Proposal | /images/food-service.jpg | keep |
| 2 | DocumentaryComparisons | /images/film-strip-bg.jpg | keep |

### SVGs (6 total - all inline icons)
| # | Section | ViewBox | Class | Status |
|---|---------|---------|-------|--------|
| 1 | Nav CTA | 0 0 14 14 | icon | keep |
| 2 | Hero CTA | 0 0 14 14 | icon | keep |
| 3 | Stats check list | 0 0 24 24 | check-icon | keep |
| 4 | Stats check list | 0 0 24 24 | check-icon | keep |
| 5 | Stats check list | 0 0 24 24 | check-icon | keep |
| 6 | Footer back-to-top | 0 0 14 14 | icon | keep |

### Notes
- All images are documentary-specific (Philly skyline, cast, team, behind-the-scenes) — keep as-is
- Video is film synopsis — keep
- Background images are contextual (food service, film strip) — keep
- SVGs are generic UI icons (arrow, checkmarks) — keep
- No placeholder images found
- Logo is text-based (typography) — no separate logo file needed

## Visual Problem Findings

### Critical
1. **Border Beam in Stats Section** — Uses `border-beam` package (G6 violation). Damon explicitly: "I have that effect and never want to use again." Must replace with custom animation.

### High
2. **Opacity-based Text Colors** — Body text uses `oklab(0.999994 0.0000455677 0.0000200868 / 0.8)` (white at 80% opacity). WCAG contrast depends on parent background. Must audit all instances.
3. **Framer Motion Initial Opacity:0** — Page elements may have `opacity:0` until hydration. Contrast audit must run after animations complete.

### Medium
4. **Missing Focus Rings** — No visible focus styles on buttons, links, nav items. Accessibility audit needed.
5. **Footer Watermark Contrast** — "Food Insecurity • I Am" at ~7-10% opacity on dark background — decorative only, but verify not mistaken for content.
6. **Image Alt Text** — Hero skyline image has no alt text. All other images have descriptive alt text.

### Low
7. **Marquee Text Accessibility** — 120px low-opacity scrolling text may be distracting. Ensure `prefers-reduced-motion` stops it (already implemented).
8. **River Light Rays** — 13 animated rays with complex animations. Verify `prefers-reduced-motion` disables (implemented).

## Machine-Readable Outputs (per Council #103/#106)

### design_tokens.json
```json
{
  "schemaVersion": "1.0",
  "source": "http://localhost:3000",
  "capturedAt": "2026-08-21T21:30:00Z",
  "colors": {
    "accent": "#E8A317",
    "accentLight": "#F4B942",
    "accentDark": "#D4880C",
    "baseDark": "#0E0F11",
    "grayDark": "#18191B",
    "cardDark": "#1A1B1D",
    "borderDark": "#313131",
    "heading": "#FFFFFF",
    "bodyText": "#9E9FA0",
    "mutedText": "#9E9FA0"
  },
  "typography": {
    "display": "Source Sans 3",
    "sans": "Roboto",
    "mono": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    "scale": {
      "h1": { "size": "88px", "weight": "700", "lineHeight": "92.4px", "family": "Source Sans 3" },
      "h2": { "size": "48px", "weight": "700", "lineHeight": "60px", "family": "Source Sans 3" },
      "h3": { "size": "18px", "weight": "600", "lineHeight": "28px", "family": "Source Sans 3" },
      "h4": { "size": "14px", "weight": "600", "lineHeight": "20px", "letterSpacing": "0.7px", "family": "Source Sans 3" },
      "body": { "size": "20px", "weight": "400", "lineHeight": "28px", "family": "Roboto" },
      "base": { "size": "16px", "weight": "400", "lineHeight": "30px", "family": "Roboto" }
    }
  },
  "spacing": {
    "baseUnit": "4px",
    "scale": [4,6,8,12,12.8,14.4,16,18.4,19.2,20,21.6,24,24.8,25.6,26.4,27.2,28.8,32,35.2,40,48,64,80,100,100.8,120,128,192,366],
    "sectionPadding": { "desktop": "100px", "mobile": "60px" }
  },
  "borderRadius": {
    "pill": "999px",
    "card": "10px",
    "teamCard": "22.4px",
    "portrait": "16px"
  },
  "shadows": {
    "navScrolled": "rgba(0,0,0,0.5) 0px 25px 50px -12px",
    "card": "0 24px 70px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.3)",
    "teamCardHover": "0 30px 80px rgba(0,0,0,0.36), 0 0 34px rgba(232,163,23,0.06)",
    "teamGlow": "0 0 90px rgba(232,163,23,0.05)",
    "accentInset": "rgba(232,163,23,0.07) 0px 0px 50px 0px inset"
  },
  "layout": {
    "maxWidth": "1314px",
    "containerBreakpoint": "1200px"
  }
}
```

### tokens.css
```css
:root {
  --color-accent: #E8A317;
  --color-accent-light: #F4B942;
  --color-accent-dark: #D4880C;
  --color-base-dark: #0E0F11;
  --color-gray-dark: #18191B;
  --color-card-dark: #1A1B1D;
  --color-border-dark: #313131;
  --color-heading: #FFFFFF;
  --color-text-muted: #9E9FA0;
  --color-body-text: #9E9FA0;

  --font-display: "Source Sans 3", sans-serif;
  --font-sans: "Roboto", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  --spacing-unit: 4px;
  --section-padding-desktop: 100px;
  --section-padding-mobile: 60px;
  --container-max: 1314px;
  --container-breakpoint: 1200px;

  --radius-pill: 999px;
  --radius-card: 10px;
  --radius-team-card: 22.4px;
  --radius-portrait: 16px;

  --shadow-nav: rgba(0,0,0,0.5) 0px 25px 50px -12px;
  --shadow-card: 0 24px 70px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.3);
  --shadow-team-card-hover: 0 30px 80px rgba(0,0,0,0.36), 0 0 34px rgba(232,163,23,0.06);
  --shadow-team-glow: 0 0 90px rgba(232,163,23,0.05);
  --shadow-accent-inset: rgba(232,163,23,0.07) 0px 0px 50px 0px inset;

  --animate-fade-in: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  --animate-fade-in-up: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  --animate-slow-zoom: slowZoom 20s ease-in-out infinite alternate;
  --animate-marquee: marquee 25s linear infinite;
}
```

### tokens.json (raw extracted values before normalization)
See individual extraction outputs above for raw computed values.

---

## Next Steps (Design Pipeline)

1. **ui-ux-pro-max** — Generate design system (styles, palettes, fonts, UX guidelines, chart types) based on product type (documentary film), industry (nonprofit/advocacy), style keywords (cinematic, moody, serious, gold accent)
2. **apple-design** — Kinetic/motion review (springs, gestures, materials, typography, reduced-motion) — audit all animations against G161 (smooth animations always), G165 (human-like timing)

## IP Guardrail Notice
These tokens are abstract design patterns extracted for inspiration. Do not use to create pixel-level clones of the reference site. The token set is a creative interpretation, not a forensic replication.