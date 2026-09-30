<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# My Project Development Rules

## Developer Profile
- **Level:** Junior Developer learning through practical execution.
- **Approach:** Prioritize didactic, clear, and comprehensive step-by-step code explanations.

## Tech Stack
- **Framework:** Next.js (App Router) using pure JavaScript (DO NOT use TypeScript).
- **Styling:** Native Tailwind CSS utilities applied directly within components.
- **Database:** Supabase (PostgreSQL) for state and data persistence.
- **AI Integration:** Vercel AI SDK powered by the Google Gemini API.

## Repository & Module Structure (Monorepo)
This repository acts as a unified hub hosting the portfolio and three core applications:
1. **CRM:** Customer and lead management dashboard.
2. **POS:** Point of Sale (Punto de Venta) system including inventory logs.
3. **Airbnb Automation:** Vacation rental management powered by AI Agents.

## Instructions for AI Assistants
- Ensure all generated code is fully compatible with modern React and standard JavaScript.
- Avoid experimental features or over-engineered logic that complicates data flow tracking.
- Deliver clean, modular, and well-commented components.
- Always check the corresponding markdown file in `docs/context/` or `docs/skills/` for domain-specific context before writing module code.
