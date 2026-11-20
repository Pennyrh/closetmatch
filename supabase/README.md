# Supabase

ClosetMatch uses Supabase for the Postgres database, image storage (clothing pictures), and (pending confirmation, see `docs/CONFLICTS.md`) user authentication.

## Setup

1. Create a project at https://supabase.com.
2. Copy the project URL and keys into `api/.env` and `client/.env` (see the `.env.example` files).
3. Install the Supabase CLI (https://supabase.com/docs/guides/cli), then from the repo root:
   ```bash
   supabase init        # creates supabase/config.toml (only needed once)
   supabase link --project-ref <your-project-ref>
   supabase db push     # applies supabase/migrations
   ```
4. Create a Storage bucket named `clothing-images` for clothing pictures.

## Migrations

`migrations/0001_initial_schema.sql` is a **draft** data model derived from the 10 approved user stories. Review it against the open questions in `docs/CONFLICTS.md` before applying it to a shared project.
