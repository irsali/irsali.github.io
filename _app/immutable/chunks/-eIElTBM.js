const e=`---\r
title: "Building My New Website with AI: An Experiment in Creative Automation"\r
date: "2025-08-10"\r
description: "A hands-on exploration of AI-assisted development — from migrating a Jekyll site to SvelteKit, to orchestrating GitHub Copilot, Cursor, and human creativity into a complete website."\r
categories: ["Web Development", "AI", "Case Study"]\r
tags: ["ai", "web-development", "svelte", "automation", "coding-assistant", "frontend", "productivity"]\r
icon: "robot"\r
---\r
\r
# Modernizing My Website: From Jekyll to Svelte — Powered by AI\r
\r
For years, my personal profile and blog website stayed on my to-rewrite list. Like most side projects, time was the main blocker. But with the rapid evolution of AI tools, I finally decided to take the plunge and rebuild it — this time letting AI be my co-developer.\r
\r
## Why Migrate?\r
\r
My old site was built with **Jekyll**, hosted on GitHub Pages. It was fast and simple, but I wanted:\r
- ⚡ Better performance\r
- 💬 More interactivity\r
- 🔧 Easier maintainability\r
- 🎯 A modern development stack\r
\r
After weighing options like React and Angular, I picked **Svelte** — specifically SvelteKit — for its refreshingly minimal approach:\r
- **No virtual DOM**  \r
- **Tiny bundle sizes**  \r
- **Closer to native HTML, CSS, and JS**  \r
\r
As Svelte says: *“Disappears at compile time.”*\r
\r
## The Setup\r
\r
I started by:\r
1. Generating a new SvelteKit project via CLI.\r
2. Keeping both the **Jekyll** and **SvelteKit** projects in a single workspace so GitHub Copilot could reference both for the migration.\r
3. Creating a \`.github/copilot-instructions.md\` file to guide Copilot on my goals, preferences, and migration strategy.\r
\r
The old site had no backend — just static HTML, CSS, and JS — and the new one would follow the same principle. Blog search on the Jekyll site was powered by \`search.js\` and metadata generated at build time. My new site now has a **Svelte-friendly, client-side search** that works similarly.\r
\r
## AI in the Driver’s Seat\r
\r
I leaned heavily on **GitHub Copilot**:\r
- Copilot generated my blog website **completely** without me writing a single line of code manually.\r
- Svelte 5 being relatively new caused a few configuration issues — which meant I had to learn a bit of Svelte to tweak and fix things.\r
- For the personal profile section, I switched to **Cursor**, and it delivered exactly what I needed.\r
\r
## Human Collaboration\r
\r
For one final touch, I wanted a link to my old website on the new one — but with some artistic flair. I delegated this to **[Nasre Alam](https://www.linkedin.com/in/nasrealam1/)**, and he nailed it beautifully.\r
\r
## The Result\r
\r
Now, my modernized **SvelteKit-powered website** is live — faster, more interactive, and future-friendly, with the all of the features of my original blog still intact.  \r
This wasn’t just a migration — it was an experiment in **AI-assisted development**, and the results have been nothing short of inspiring.\r
\r
---\r
\r
💡 *Takeaway:* With the right mix of AI tools and human creativity, side projects don’t have to stay on the back burner.\r
\`\`\`\r
`;export{e as default};
