# The Oregon Trail Journal

Val & Keith's journey along the historic Oregon Trail — St. Louis to Oregon, 2026.

Built with [Astro](https://astro.build) · Hosted on Netlify or Vercel · No database needed.

---

## Adding a New Day (your regular workflow)

### 1. Save the photos

When Val's email arrives, save the image attachments into:

```
public/images/day-NN/
```

Use the original filenames from the email (`IMG_XXXX.jpeg`). If any filename has a **space** in it (e.g. `IMG_2505 2.jpeg`), rename it to use a dash instead (`IMG_2505-2.jpeg`).

### 2. Create the markdown file

Create a new file:

```
src/content/days/day-NN.mdx
```

Use an existing day as a template. The frontmatter at the top must include:

```yaml
---
title: "Day title from the email subject or first line"
day: NN              # the day number
date: YYYY-MM-DD     # the date of travel
location: "Where they were"          # optional
summary: "One or two sentence recap" # shows on the home page card
coverImage: "/images/day-NN/IMG_XXXX.jpeg"  # first/best photo for the card
---
```

### 3. Add content

Paste Val's email text below the frontmatter `---`. Then:

- Replace bare `IMG_XXXX.jpeg` references with either:
  - A single inline image: `![caption](/images/day-NN/IMG_XXXX.jpeg)`
  - A photo grid (for groups of 2–6 photos):

```mdx
import PhotoGrid from "../../components/PhotoGrid.astro";

<PhotoGrid
  images={[
    { src: "/images/day-NN/IMG_XXXX.jpeg", alt: "describe the photo" },
    { src: "/images/day-NN/IMG_YYYY.jpeg", alt: "describe the photo" },
  ]}
  caption="Optional caption below the grid"
/>
```

- Wrap quotes (like Rich Ridgeway's quote on Day 20) in `> blockquote` syntax
- Use `---` for horizontal rules between sections

See [`src/content/days/day-20.mdx`](src/content/days/day-20.mdx) as a complete example.

### 4. Preview locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to check how it looks.

### 5. Deploy

```bash
git add .
git commit -m "Add Day NN: <title>"
git push
```

Netlify/Vercel picks up the push and rebuilds automatically — usually live in under a minute.

---

## First-time setup

```bash
npm install
npm run dev
```

## Deploy settings (Netlify or Vercel)

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20 |

---

## Project structure

```
oregon-trail-journal/
├── src/
│   ├── content/
│   │   ├── config.ts           ← schema definition (don't edit often)
│   │   └── days/
│   │       └── day-20.mdx      ← one file per travel day
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← site header/footer/lightbox
│   │   └── DayLayout.astro     ← individual day page wrapper
│   ├── components/
│   │   ├── DayCard.astro       ← card shown on home page
│   │   └── PhotoGrid.astro     ← responsive photo grid
│   ├── pages/
│   │   ├── index.astro         ← home page (all days)
│   │   └── days/[...slug].astro← dynamic day routes
│   └── styles/
│       └── global.css          ← all styling
└── public/
    └── images/
        └── day-20/             ← Val's photos, one folder per day
```
