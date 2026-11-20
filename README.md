# ClosetMatch

ClosetMatch is a digital wardrobe application that helps users organize the clothes they own, create and save outfits, plan what to wear, and track what they wear. Built for MINS 350 - Business Systems Analysis.

> **Status:** project scaffold. Folder structure, placeholder screens, placeholder API routes, a draft database schema, and documentation are in place. No features are implemented yet.

## Tech stack

| Layer | Technology |
|-------|------------|
| Client | React 18 + Vite + React Router |
| API | Node.js + Express |
| Database / storage / auth | Supabase |

## Project structure

```
closetmatch/
├── client/        React app (placeholder pages for every site map screen)
├── api/           Express API (/api/health + placeholder routes returning 501)
├── supabase/      Draft schema migration and setup notes
└── docs/
    ├── PRD.md                 Product requirements (10 approved stories, exclusions)
    ├── TASKS.md               Development tasks with acceptance criteria
    ├── WORKSPACE_RULES.md     Rules for contributors and AI assistants
    ├── CONFLICTS.md           Conflicts between source documents and open questions
    ├── SITE_MAP.md            Hierarchical site map
    └── source-documents/      Baseline Plan, Level 1 Specification, User Stories
```

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install                          # installs client and api workspaces
cp api/.env.example api/.env         # fill in Supabase values
cp client/.env.example client/.env   # fill in Supabase values

npm run dev:api      # http://localhost:4000/api/health
npm run dev:client   # http://localhost:5173
```

Supabase setup steps are in [`supabase/README.md`](supabase/README.md).

## Approved user stories (v1)

US-01 Add Clothing, US-04 Organize Clothing, US-07 Edit Clothing, US-09 Create Outfit, US-11 Swap Clothing, US-13 Save Outfit, US-17 Find Matches, US-20 Plan Outfit, US-23 Track Clothing Usage, US-26 View Rarely Worn Clothing.

Excluded features are listed in [`docs/PRD.md`](docs/PRD.md#8-out-of-scope-v1).
