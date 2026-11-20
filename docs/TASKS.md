# ClosetMatch - Development Task List

Tasks are grouped by phase. Each user-story task lists acceptance criteria (Given / When / Then). Items marked *(Q#)* depend on an open question in [`CONFLICTS.md`](CONFLICTS.md).

Status: `[x]` done in scaffolding, `[ ]` not started.

## Phase 0 - Foundation

| ID | Task | Status |
|----|------|--------|
| T-00.1 | Create repo structure: `client/`, `api/`, `supabase/`, `docs/` | [x] |
| T-00.2 | Scaffold React (Vite) client with placeholder routes from the site map | [x] |
| T-00.3 | Scaffold Express API with `/api/health` and placeholder routes returning 501 | [x] |
| T-00.4 | Draft Supabase schema migration and setup notes | [x] |
| T-00.5 | Write PRD, task list, workspace rules, README, `.gitignore` | [x] |
| T-00.6 | Resolve open questions C1-C5 and Q1-Q9 with team / client | [ ] |
| T-00.7 | Create Supabase project, fill `.env` files, apply migration, create `clothing-images` bucket | [ ] |
| T-00.8 | Add authentication (sign up / log in) if confirmed *(Q2)* | [ ] |

**T-00.7 acceptance criteria**
- Given the `.env` files are filled in, when `npm run dev:api` runs, then `GET /api/health` returns `{"status":"ok"}`.
- Given the migration is applied, when the Supabase table editor is opened, then `clothing_items`, `outfits`, `outfit_items`, `outfit_plans`, and `wear_logs` exist with RLS enabled.

## Phase 1 - Manage Clothing

### T-01 US-01 Add Clothing
- Given I am on Add Clothing, when I upload a picture and enter a name, color, and category and tap Save, then the item is stored and appears in My Closet.
- Given a required field is empty, when I tap Save, then the item is not saved and the missing field is highlighted. *(Q6: is the picture required?)*
- Given I am on a phone, when I choose to add a picture, then I can take a photo with the camera or pick one from the gallery.
- The form has no other required fields (brand is out of scope).

### T-02 US-04 Organize Clothing
- Given I have items saved, when I open My Closet, then I see all my items with picture, name, and category.
- Given I pick a category (shirts, pants, shoes, jackets, accessories), when the filter is applied, then only items in that category are shown. *(Q5)*
- Given a category has no items, when I select it, then an empty-state message is shown.

### T-03 US-07 Edit Clothing
- Given I open an item, when I tap Edit, then the form shows the current picture, name, color, and category.
- Given I change one or more fields, when I tap Save, then the changes are stored and shown everywhere the item appears (closet, outfits).
- Given I tap Cancel, then no changes are stored.

## Phase 2 - Outfits

### T-04 US-09 Create Outfit
- Given I open the Outfit Builder, when I select items from my closet, then the selected items are shown together on one screen.
- Given I start from one item (e.g. from its detail page), when I open the builder, then that item is already selected.
- Given fewer than 2 items are selected, then I cannot continue to save. *(Q8: required categories?)*

### T-05 US-11 Swap Clothing
- Given an outfit in the builder, when I tap an item and choose a replacement from my closet, then only that item changes and the rest of the outfit stays.
- Given a saved outfit, when I swap an item and save, then the saved outfit is updated. *(C4)*

### T-06 US-13 Save Outfit
- Given an outfit in the builder, when I enter a name and tap Save, then the outfit is stored.
- Given the name is empty, when I tap Save, then I am asked to enter a name.
- Given I have saved outfits, when I open Saved Outfits, then I see each outfit's name and item pictures.
- Given I open a saved outfit, when I tap Reuse/Edit, then it opens in the builder.
- Delete outfit behavior pending *(C3)*.

## Phase 3 - Matching and Planning

### T-07 US-17 Find Matches
- Given I select an item, when I tap Find Matches, then I see other items from my own closet that match it.
- Matches use a simple, explainable rule (e.g. color and complementary category). *(Q1)* No AI-generated designs, no shopping suggestions.
- Given no items match, then an empty-state message is shown.
- Given I see a match, when I tap it, then I can start an outfit with both items.

### T-08 US-20 Plan Outfit
- Given a saved outfit, when I pick a future date and occasion (work, school, event, vacation, other) and tap Plan, then it appears in the Planner on that date. *(Q9)*
- Given I open the Planner, then I see upcoming planned outfits in date order.
- Given I plan multiple days (e.g. a vacation), then each day can have its own outfit.

## Phase 4 - Usage Tracking

### T-09 US-23 Track Clothing Usage
- Given an item or outfit, when I tap Mark as Worn, then a wear record is saved for today (or a date I choose). *(Q7)*
- Given an item has wear records, when I open it, then I see how many times it was worn and when it was last worn.

### T-10 US-26 View Rarely Worn Clothing
- Given I open Wardrobe Usage, then I see items not worn within the agreed time period, plus items never worn. *(Q4)*
- The list is sorted with the longest-unworn items first.
- Given I tap an item in the list, then I can open it or start an outfit with it.

## Phase 5 - Quality and Delivery

| ID | Task | Status |
|----|------|--------|
| T-11 | Verify mobile layout on a phone-sized screen for every page | [ ] |
| T-12 | Verify each user can only see their own data (RLS) | [ ] |
| T-13 | Walk through all 10 stories against acceptance criteria | [ ] |
| T-14 | Confirm no excluded features were added (PRD section 8) | [ ] |
