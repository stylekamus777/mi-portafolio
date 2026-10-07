# Context & Specifications: CRM Module (Customer Relationship Management)

## 1. Overview
The CRM module is a centralized customer and interaction management system designed for small businesses and freelancers. Its primary purpose is to organize the sales pipeline (leads), track communications, and store key contact information.

## 2. Tech Stack & Guidelines
* **Framework:** Next.js (App Router)
* **Language:** Pure JavaScript (ES6+) — NO TypeScript (`.js`, `.jsx`).
* **Styling:** Tailwind CSS (responsive layout, dark mode by default).
* **Database & Auth:** Supabase (PostgreSQL + RLS + Client/Server SDK).
* **AI Integration:** Gemini API (for summarizing notes and lead insights).
* **App Route:** `src/app/crm/`

## 3. Database Schema (Supabase)
### Table: `contacts`
* `id`: uuid (PK, default: `gen_random_uuid()`)
* `user_id`: uuid (FK to `auth.users`)
* `name`: text (not null)
* `email`: text
* `phone`: text
* `company`: text
* `status`: text (enum: `'lead'`, `'contacted'`, `'proposal'`, `'won'`, `'lost'`)
* `value`: numeric (estimated deal size)
* `created_at`: timestamp with time zone (default: `now()`)

### Table: `interactions`
* `id`: uuid (PK, default: `gen_random_uuid()`)
* `contact_id`: uuid (FK to `contacts.id`, on delete cascade)
* `type`: text (enum: `'call'`, `'email'`, `'meeting'`, `'note'`)
* `content`: text (not null)
* `created_at`: timestamp with time zone (default: `now()`)

## 4. Functional Requirements
1. **Sales Pipeline (Kanban / Table View):**
   * Visual layout categorized by `status` (`Lead`, `Contacted`, `Proposal`, `Won`, `Lost`).
   * Quick status updates for contacts.
2. **Contact Management (CRUD):**
   * Create, read, update, and delete contacts.
   * Search and filter by name, company, or status.
3. **Interaction Log:**
   * Add notes, call summaries, or email logs per contact detail view.
4. **AI Insights (Gemini API):**
   * Automatically generate interaction summaries.
   * Recommend "Next Best Action" based on contact notes.

## 5. UI / UX Standards
* **Theme:** Dark Mode using Zinc/Slate palette (`bg-zinc-900`, `border-zinc-800`).
* **UI Elements:** Clean, modern, crisp borders, color badges for lead status (green for `Won`, red for `Lost`, blue/amber for in-progress).
* **Navigation:** Header back button pointing to the main project selector (`/`).