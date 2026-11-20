# ClosetMatch - Product Requirements Document (PRD)

**Course:** MINS 350 - Business Systems Analysis
**Version:** 0.1 (scaffolding draft)
**Sources:** Baseline Plan (Oct 11, 2026), Level 1 Specification, User Stories (`docs/source-documents/`)

## 1. Summary

ClosetMatch is a digital wardrobe application. It gives users one place to see the clothes they own, combine them into outfits, save and plan outfits, and track what they wear, so they make better use of clothing they already have. Version 1 focuses on organizing clothing and creating outfits. It is **not** a shopping application.

## 2. Problem

People have trouble deciding what to wear, forget clothing they own, and repeat the same outfits.

## 3. Users

- College students, working adults, and others who choose outfits for school, work, events, or everyday activities.
- Some are fashion-interested and want to try combinations; others just want to save time.
- Users have varying wardrobe sizes and experience with wardrobe apps, so data entry per item must stay minimal (picture, name, color, category).

## 4. Usage context

- Primarily used on mobile devices (taking pictures of clothes), also laptop or tablet.
- Mostly used at home while getting ready or organizing, or while planning for school, work, an event, or a vacation.
- An internet connection is assumed for main features.
- Common actions (add clothing, create outfit, mark as worn) must be quick and simple.

## 5. Scope: the 10 approved user stories

| PRD ID | Spec # | Story | Statement | Folded-in rejected stories |
|--------|--------|-------|-----------|----------------------------|
| US-01 | 1 | Add Clothing | As a user, I want to add clothes to my digital closet so that I can keep track of what I own. | US-02 Upload Picture, US-03 Add Clothing Information |
| US-04 | 2 | Organize Clothing | As a user, I want to organize clothes by category so that I can easily find my clothing. | US-05 View Shirts, US-06 View Shoes |
| US-07 | 3 | Edit Clothing | As a user, I want to edit a clothing item so that I can correct any mistakes. | - |
| US-09 | 4 | Create Outfit | As a user, I want to combine clothing items so that I can create an outfit. | US-10 Start With One Item |
| US-11 | 5 | Swap Clothing | As a user, I want to swap an item in an outfit so that I can try different combinations. | US-15 Edit Saved Outfit |
| US-13 | 6 | Save Outfit | As a user, I want to save an outfit so that I can use it again later. | US-12 Name Outfit, US-14 View Saved Outfits, US-16 Delete Outfit (see C3) |
| US-17 | 7 | Find Matches | As a user, I want to see clothing that matches an item so that I can find new outfit combinations. | US-18 Match by Color |
| US-20 | 8 | Plan Outfit | As a user, I want to plan an outfit ahead of time so that I know what I am going to wear. | US-21 Plan Vacation, US-22 Plan Work |
| US-23 | 9 | Track Clothing Usage | As a user, I want to record when I wear something so that I can track how often I wear my clothes. | US-24 Times Worn, US-25 Last Worn, US-27 Frequently Worn |
| US-26 | 10 | View Rarely Worn Clothing | As a user, I want to see clothes I rarely wear so that I can make better use of my wardrobe. | - |

Detailed acceptance criteria are in [`TASKS.md`](TASKS.md).

## 6. Functional requirements

| ID | Requirement | Story |
|----|-------------|-------|
| FR-1 | User can add a clothing item with a picture, name, color, and category. | US-01 |
| FR-2 | Categories: shirts, pants, shoes, jackets, accessories (see Q5). | US-04 |
| FR-3 | User can view the closet and filter it by category. | US-04 |
| FR-4 | User can edit an item's picture, name, color, and category. | US-07 |
| FR-5 | User can select items from the closet and view them together as an outfit. | US-09 |
| FR-6 | User can replace one item in an outfit without starting over. | US-11 |
| FR-7 | User can name and save an outfit, view saved outfits, and reuse them. | US-13 |
| FR-8 | User can select an item and see other closet items that match it (rule: Q1). | US-17 |
| FR-9 | User can assign an outfit to a future date with an occasion (work, school, event, vacation, other). | US-20 |
| FR-10 | User can mark clothing as worn on a date; the app shows times worn and last worn. | US-23 |
| FR-11 | User can see a list of items not worn recently or never worn (threshold: Q4). | US-26 |

## 7. Non-functional requirements

- **Simplicity:** adding an item takes only the four fields above.
- **Mobile-first:** responsive layout usable on phone screens; works on laptop/tablet.
- **Privacy:** a user can only see their own wardrobe data (Supabase Row Level Security).
- **Connectivity:** online-only; no offline mode required.

## 8. Out of scope (v1)

From the Baseline Plan exclusions list and rejected stories:

1. Purchasing clothing through the app (US-29 rejected).
2. Online clothing stores and payment processing.
3. Automatic purchases or shopping recommendations.
4. VR / AR fitting rooms.
5. Clothing resale or rental.
6. Laundry pickup or delivery.
7. Advanced AI that generates new clothing designs.
8. Integration with physical wardrobe devices or smart closets.
9. Sharing outfits with friends (US-28 rejected; see C1).
10. Clothing brand field (US-08 rejected).
11. Automatically generated outfits (US-19 rejected).

## 9. Proposed technology

| Layer | Technology | Folder |
|-------|------------|--------|
| Client | React (Vite) | `client/` |
| API | Node.js + Express | `api/` |
| Database, file storage, auth | Supabase (Postgres, Storage, Auth) | `supabase/` |

## 10. Assumptions and open questions

See [`CONFLICTS.md`](CONFLICTS.md). These must be resolved before implementing the affected stories.

## 11. Success criteria

From the Baseline Plan: the project is successful when users can add and organize clothing, create and save outfits, plan what to wear, and track wardrobe usage through an easy-to-use application.
