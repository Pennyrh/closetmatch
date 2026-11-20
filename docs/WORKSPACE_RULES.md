# Workspace Rules

Rules for everyone (people and AI assistants) working in this repository.

## Scope
1. Build only the 10 approved user stories listed in `docs/PRD.md`: US-01, US-04, US-07, US-09, US-11, US-13, US-17, US-20, US-23, US-26.
2. Do not add excluded features (PRD section 8): shopping or purchasing, payments, shopping recommendations, AR/VR fitting rooms, resale/rental, laundry services, AI-generated designs, smart-closet integrations, outfit sharing, brand field, automatic outfit generation.
3. If the source documents disagree or something is undefined, log it in `docs/CONFLICTS.md` and ask. Do not guess.
4. Every feature change must reference its story ID (e.g. `US-09`) in the task, branch, or commit message.

## Technology
5. Client: React (Vite) in `client/`. API: Express in `api/`. Data, storage, auth: Supabase, with migrations in `supabase/migrations/`.
6. Do not add new frameworks or major libraries without team agreement.
7. Database changes go in a new numbered migration file; never edit an applied migration.

## Security
8. Never commit `.env` files, API keys, or Supabase service-role keys. Only `.env.example` files are committed.
9. The service-role key is used only in `api/`. The client uses the anon key only.
10. Keep Row Level Security enabled on every user-data table.

## Git
11. Do not commit directly to `main` once the scaffold is in place; use a branch and a pull request.
12. Branch names: `feature/US-xx-short-name`, `fix/short-name`, `docs/short-name`.
13. Ask the project owner before committing or pushing on their behalf.
14. Keep commits small and focused; do not commit `node_modules/` or build output.

## Design
15. Mobile-first: every screen must work on a phone-sized display.
16. Keep data entry minimal (picture, name, color, category for clothing).
17. Update `docs/TASKS.md` status and acceptance criteria when work is completed or scope changes.
