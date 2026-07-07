# Ashesi Research Club

A WIRED-style, statically-generated editorial magazine for student research at Ashesi University. Black-on-white, square-cornered, calm reading experience — built from a Claude Design comp.

---

## Stack

- **[Astro](https://astro.build) 5.18** — static output, zero JS shipped except tiny inline `<script>` islands.
- **[Bun](https://bun.sh)** — runtime and package manager.
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** — article bodies are MDX so they can embed editorial block components.
- No React, no CSS framework, no other runtime dependencies.

### Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `bun install`   | Install dependencies                        |
| `bun dev`       | Dev server at `localhost:4321`              |
| `bun build`     | Build static site to `./dist/`              |
| `bun preview`   | Preview the production build locally         |

---

## Project structure

```text
src/
├── content/
│   ├── articles/            # one .mdx per article — filename is the URL slug
│   │   ├── did-dr-nyantakyi-just-replace-gps.mdx
│   │   └── from-curiosity-to-impact.mdx
│   ├── researchers.json     # the profiled research subjects
│   └── team.json            # the editorial roster
├── content.config.ts        # collection schemas (articles / researchers / team)
├── layouts/
│   └── Base.astro           # <head>, fonts, Masthead, Footer
├── components/              # Byline, PullQuote, Callout, CodeBlock, Checkpoint,
│                            #   StoryRow, Photo, Avatar, CategoryEyebrow, Field…
├── lib/
│   ├── articles.ts          # publishedArticles(), formatDate(), minutes()
│   └── categories.ts        # category labels + readTime() word-count helper
├── pages/
│   ├── index.astro                  # /            Home (sparse-state magazine grid)
│   ├── articles/index.astro         # /articles    Archive (instant search + filter)
│   ├── articles/[slug].astro        # /articles/:slug   Article reading page
│   ├── category/[category].astro    # /category/:cat    per-category story stack
│   ├── researchers/index.astro      # /researchers      researcher list
│   ├── researchers/[slug].astro     # /researchers/:slug  profile + their articles
│   ├── team.astro                   # /team
│   ├── apply.astro                  # /apply       sectioned application form
│   └── about.astro                  # /about
└── styles/
    └── global.css           # design tokens + all component base styles

design/
├── claude-design-brief.md   # the original design brief
├── sample-content.md        # the two real articles as source content
└── extracted/               # design source recovered from the Claude Design export
```

`design/extracted/` is the **source of truth for the visual language** — it holds the tokens CSS and the original component JSX the site was ported from. Consult it before changing any styling.

---

## What this build covers

Concrete decisions made, and why:

- **Static Astro + Bun, no React.** The design comps were React, but the site ships as static HTML with small vanilla `<script>` islands only. A content magazine wants fast pages and good SEO, not a client-side app.
- **Design system ported verbatim** from `design/extracted/` into `src/styles/global.css`: strict `#000` ink on `#fff` canvas, **square corners everywhere** (only avatars/icon-buttons are round), **no drop-shadows** (hierarchy is carried by 1px `#e0e0e0` hairlines), fonts Playfair Display / Lora / Inter / JetBrains Mono via Google Fonts. The link-blue `#057dbc` appears **only** inside article body text; category colors appear **only** as a tiny dot on eyebrows — never as fills.
- **Writer vs. researcher split.** Following the note in `sample-content.md`, each article has both `writtenBy` (a plain string byline — sometimes "Ashesi Research Club" itself) and `researcher` (a reference to the profiled subject that drives the `/researchers/[slug]` page). They are not the same person.
- **Reading time is derived, not stored** — computed from the body word count in `src/lib/categories.ts` (`readTime()`), surfaced via `minutes()` in `src/lib/articles.ts`.
- **"Cheap" feature slots are real, the rest are placeholders.** Working now: scroll-progress bar, computed reading time, and an applause/clap button (persisted per-device in `localStorage`). Designed-but-inert placeholders: audio player, reader settings, EN/FR/Twi language switcher, glossary popover — see below.
- **Full page inventory shipped** — Home (with a graceful 2-article sparse state), Article, Archive with instant client-side search + category filtering, all 7 Category pages (with empty states), Researchers index + profiles, Team, Apply (with validation + success/error states), and About. 17 routes total.
- **Design source recovered locally.** The remote Claude Design connection isn't usable in this environment, so the entire design source was extracted from the bundled `design/Ashesi Research Club.html` export into `design/extracted/`.

---

## What was NOT done (and how to finish it)

Everything below is intentionally deferred. Each has a clear completion path.

| Item | Current state | How to complete |
| :--- | :--- | :--- |
| **Apply form submission** | Client-side validation + success screen only; nothing is sent. `src/pages/apply.astro` | Point the `<form>` at a form service (Formspree, Web3Forms, Basin) **or** add an Astro server endpoint (`src/pages/api/apply.ts`) with an SSR adapter (`output: 'server'`). |
| **Newsletter signup** | `src/components/Footer.astro` input has `onsubmit="return false"`. | Same as above — wire to a mailing provider (Buttondown, Mailchimp) or a form service. |
| **Applause counts** | Per-device only, stored in `localStorage` in `src/pages/articles/[slug].astro`. | Add a tiny counter endpoint backed by an edge KV store (Cloudflare KV, Upstash, Vercel KV) and fetch/increment on load/click. |
| **View counts** | Not shown (deliberately not faked). | Add analytics (Plausible, Umami) or a counter endpoint like applause. |
| **Reader settings** (font size / serif↔sans / white-warm-dark tint) | Panel renders; controls are disabled placeholders in `src/pages/articles/[slug].astro`. | Wire each control to a CSS custom property on the reading column + persist choice in `localStorage`. The tint tokens already exist (`--tint-warm`, `--dark-bg`, etc. in `global.css`). |
| **Audio "Listen" player** | Collapsed/playing UI mocked, no audio. | Provide a real audio asset per article (e.g. `audioUrl` frontmatter) and drive an `<audio>` element. |
| **Language switcher EN/FR/Twi** | Static affordance in the article header. | Adopt [Astro i18n routing](https://docs.astro.build/en/guides/internationalization/) + localized content collections; the layout is already made to hold it. |
| **Real imagery** | `Photo.astro` renders a branded placeholder when no image is given. | Add `featuredImage` to article frontmatter and `avatar` to researcher/team records; drop files in `public/` or use Astro assets. |
| **Team roster** | Only member #1 (Sinam) is real; members 2–4 in `team.json` are sample placeholders. | Replace with the actual editorial team. |
| **Glossary term** | A native `title` tooltip (hover) on a dotted-underline span. | Upgrade to a click-triggered popover component if a richer definition UX is wanted. |

---

## How to publish an article

Articles are files in the repo — Git is the CMS. There is no admin UI.

### 1. Make sure the researcher exists

Every article references a **profiled researcher** by `id`. Open `src/content/researchers.json` and confirm one exists, or add a new record:

```json
{
  "id": "ada-lovelace",
  "firstName": "Ada",
  "lastName": "Lovelace",
  "name": "Ada Lovelace",
  "program": "Computer Science",
  "yearOfStudy": "Year 4",
  "bio": "One or two sentences on who they are and what they work on.",
  "interests": ["Algorithms", "Analytical engines"],
  "status": "active"
}
```

The `id` is the researcher's URL slug (`/researchers/ada-lovelace/`) and is what the article's `researcher` field must match.

### 2. Create the article file

Add `src/content/articles/<slug>.mdx`. **The filename becomes the URL** — `my-story.mdx` → `/articles/my-story/`. Use lowercase-hyphenated slugs.

### 3. Fill in the frontmatter

Every field in the `articles` schema (`src/content.config.ts`):

```mdx
---
title: "Your Headline Here"
category: computer-science          # one of the 7 (see below)
writtenBy: Sinam Afi Serwa Ametewee # the byline (a person, or "Ashesi Research Club")
researcher: ada-lovelace            # MUST match an id in researchers.json
publishedDate: 2026-07-07           # YYYY-MM-DD
featured: false                     # true = becomes the home cover
excerpt: "The standfirst — one or two sentences shown under the headline and in listings."
tags: [Machine Learning, Ethics]    # freeform topic labels
# --- optional ---
# featuredImage: /images/my-story.jpg
# collaborators: Dr. Someone · Some Lab
# fundingSource: University grant
# status: draft                     # omit to publish; "draft" hides it everywhere
---
```

**The seven categories:** `computer-science`, `engineering`, `business`, `social-sciences`, `humanities`, `interdisciplinary`, `other`.

### 4. Write the body

Below the frontmatter, write in Markdown. For the editorial blocks, import the components you need and use them inline:

```mdx
import PullQuote from '../../components/PullQuote.astro';
import Callout from '../../components/Callout.astro';
import CodeBlock from '../../components/CodeBlock.astro';
import Checkpoint from '../../components/Checkpoint.astro';

A normal paragraph. Use `##` and `###` for section and sub-headings.

> A plain Markdown blockquote stays in body serif.

<PullQuote cite="Dr. Lovelace">A lifted quotation in large display serif.</PullQuote>

<Callout title="TL;DR" variant="tldr">
  <ul><li>Quick hits as a list.</li></ul>
</Callout>

<Callout variant="aside">An editorial prompt to the reader.</Callout>

<CodeBlock lang="python">{`def hello():
    print("has a copy button")`}</CodeBlock>

<Checkpoint
  question="A comprehension question?"
  options={['Wrong', 'Right', 'Also wrong']}
  correct={1}
/>

A glossary term: <span class="arc-glossary" title="The definition shown on hover.">jargon</span>.
```

`Callout` variants: `note` (hairline box, good for Q&A `<dl>`), `tldr` (bold-bordered summary), `aside` (italic editorial prompt), `checkpoint`. See the two existing articles in `src/content/articles/` for full working examples.

### 5. What happens automatically

- **Reading time** is computed from the word count — don't set it.
- The article appears on **Home**, the **Archive** (searchable by title/excerpt/tags/body), its **Category** page, and its **researcher's** profile — sorted by `publishedDate`, newest first.
- `featured: true` promotes it to the **home cover** (the newest featured article wins).

### 6. Preview and ship

```sh
bun dev      # check it at localhost:4321
bun build    # confirm the static build succeeds
```

Set `status: draft` to keep an in-progress article out of the build.
