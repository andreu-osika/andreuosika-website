# andreuosika.com — Next.js Rebuild

> Portfolio site for Andreu Osika — Branding + Experience Design  
> Back-engineered from Webflow export → rebuilt in Next.js 14 + Tailwind CSS

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **PP Neue Montreal** | Custom local font |
| **Vercel** | Hosting + deployments |
| **GitHub** | Version control |

---

## Project Structure

```
andreuosika-nextjs/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── globals.css             # Font faces + base CSS + Tailwind
│   ├── page.tsx                # Homepage (project menu list)
│   ├── not-found.tsx           # 404 page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── endorsements/
│   │   └── page.tsx            # Endorsements page
│   └── [project]/
│       └── page.tsx            # Dynamic project pages (23 routes)
├── components/
│   ├── GradientBar.tsx         # Animated bottom nav bar (all pages)
│   ├── BackArrow.tsx           # Fixed top-left back arrow (project pages)
│   ├── ArtSection.tsx          # Image layout handler (hero/full/double/triple/etc)
│   ├── ProjectInfo.tsx         # Deliverables + description block
│   ├── PlaceholderImage.tsx    # Grey box placeholder (swap for real images)
│   └── FadeInObserver.tsx      # Scroll-triggered fade-in animations
├── lib/
│   └── projectData.ts          # ALL project data, descriptions, endorsements
├── public/
│   ├── fonts/                  # PP Neue Montreal .otf files (14 weights)
│   └── images/                 # ← ADD YOUR PROJECT IMAGES HERE
│       ├── apple_screen.jpg
│       ├── apple_01.png
│       └── ... (all filenames are in projectData.ts)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/andreuosika-nextjs.git
cd andreuosika-nextjs

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open http://localhost:3000
```

---

## Adding Real Images

All project images belong in `/public/images/`. The filenames are **already mapped** in `lib/projectData.ts`.

**Steps:**
1. Export your images from the original Webflow site (or use the original assets)
2. Place them in `/public/images/`
3. In `components/ArtSection.tsx`, replace `PlaceholderImage` with `next/image`:

```tsx
// Before (placeholder):
<PlaceholderImage filename={images[0]} aspectRatio="16/9" />

// After (real image):
import Image from 'next/image'
<Image
  src={`/images/${images[0]}`}
  alt=""
  width={1400}
  height={788}
  className="w-full h-auto"
  priority={index === 0}
/>
```

---

## Design System Reference

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--brand-purple` | `#9977ea` | Hover accents, bullets |
| `--brand-pink` | `#e70aac` | Back arrow hover |
| `--light-grey` | `#fafcff` | Light background pages |
| `--grey-3` | `#5d6973` | Label text |

### Background Themes
| Theme | Color | Projects |
|---|---|---|
| `black` | `#000000` | Apple, Achieve DS, Haspit, Baltik, etc. |
| `lightGrey` | `#fafcff` | Driftroom, Muni, Uber, Mursion, etc. |
| `white` | `#ffffff` | Nokia, Candeloo, Logos, Icons |

### Typography — PP Neue Montreal
- **Menu items:** 80px / italic / weight 100
- **Project body:** 28px / weight 100 / line-height 50px
- **Labels:** 14px / weight 600 / uppercase / tracking wide
- **Bar label:** 16px / weight 600

### Gradient Bar Animation
```css
background: linear-gradient(270deg, #2f3376, #280d4e, #2e0152, #9977ea);
background-size: 600% 600%;
animation: gradientShift 15s ease infinite;
```

---

## Deployment (Vercel + GitHub)

Same workflow as pontduhawk.com:

```bash
# 1. Create GitHub repo and push
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/andreuosika-nextjs.git
git push -u origin main

# 2. Connect to Vercel
# → Go to vercel.com
# → Import GitHub repo
# → Framework: Next.js (auto-detected)
# → Deploy

# 3. Add custom domain
# → In Vercel project → Settings → Domains
# → Add andreuosika.com
# → Update DNS records at your registrar
```

---

## Page Routes

| URL | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — project list |
| `/about` | `app/about/page.tsx` | About + capabilities + endorsement preview |
| `/endorsements` | `app/endorsements/page.tsx` | Full endorsements list |
| `/apple` | `app/[project]/page.tsx` | Dynamic — rendered from projectData.ts |
| `/3mf-branding` | `app/[project]/page.tsx` | " |
| `/driftroom` | `app/[project]/page.tsx` | " |
| ... (all 23 projects) | `app/[project]/page.tsx` | " |

---

## Adding / Editing Projects

All project content lives in `lib/projectData.ts`. To edit a project:

```ts
{
  slug: 'apple',          // URL slug — must match folder name
  title: 'Apple',         // Displayed in nav bar + page title
  bgTheme: 'black',       // 'black' | 'lightGrey' | 'white'
  nextSlug: '3mf-branding', // Next project in sequence (or null)
  deliverables: ['Workflows', 'Icon Design', 'App UXUI'],
  description: `...`,     // Multi-paragraph text (use \n\n for breaks)
  sections: [
    { layout: 'hero', images: ['apple_screen.jpg'] },
    { layout: 'full', images: ['apple_01.png'] },
    // ...
  ],
}
```

### Layout types available:
- `hero` — Full-width opening image
- `full` — Full-width standard image
- `contained` — Max 1024px centered
- `double` — ~50% width
- `triple` — ~33% width
- `triple-big` — 3-column grid of images
- `quad` — 4-column grid
- `six` — 6-column small tiles (used in Baltik)
