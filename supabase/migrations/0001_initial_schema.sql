-- ClosetMatch initial schema (DRAFT - review open questions in docs/CONFLICTS.md before applying)
-- Assumes Supabase Auth (auth.users) for per-user closets (open question C5).

create type clothing_category as enum ('shirts', 'pants', 'shoes', 'jackets', 'accessories');
create type plan_occasion as enum ('work', 'school', 'event', 'vacation', 'other');

-- US-01 Add Clothing, US-04 Organize Clothing, US-07 Edit Clothing
create table clothing_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  color text not null,
  category clothing_category not null,
  image_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index clothing_items_user_category_idx on clothing_items (user_id, category);

-- US-09 Create Outfit, US-11 Swap Clothing, US-13 Save Outfit
create table outfits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table outfit_items (
  outfit_id uuid not null references outfits (id) on delete cascade,
  clothing_item_id uuid not null references clothing_items (id) on delete cascade,
  primary key (outfit_id, clothing_item_id)
);

-- US-20 Plan Outfit
create table outfit_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  outfit_id uuid not null references outfits (id) on delete cascade,
  planned_date date not null,
  occasion plan_occasion not null default 'other',
  note text,
  created_at timestamptz not null default now()
);

-- US-23 Track Clothing Usage, US-26 View Rarely Worn Clothing
create table wear_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  clothing_item_id uuid not null references clothing_items (id) on delete cascade,
  worn_on date not null default current_date,
  created_at timestamptz not null default now()
);
create index wear_logs_item_idx on wear_logs (clothing_item_id, worn_on desc);

-- Row Level Security: each user can only access their own rows.
alter table clothing_items enable row level security;
alter table outfits enable row level security;
alter table outfit_items enable row level security;
alter table outfit_plans enable row level security;
alter table wear_logs enable row level security;

create policy "own clothing" on clothing_items for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own outfits" on outfits for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own outfit items" on outfit_items for all
  using (exists (select 1 from outfits o where o.id = outfit_id and o.user_id = auth.uid()))
  with check (exists (select 1 from outfits o where o.id = outfit_id and o.user_id = auth.uid()));
create policy "own plans" on outfit_plans for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own wear logs" on wear_logs for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
