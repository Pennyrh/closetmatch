# Conflicts and Open Questions

Found while comparing the Baseline Plan (Oct 11, 2026), the Level 1 Specification, and the User Stories list. Nothing here has been resolved by guessing. Where scaffolding needed a working assumption, it is marked **Scaffold assumption** and should be confirmed by the team or client.

## Conflicts between source documents

| ID | Topic | Baseline Plan | Level 1 Spec | User Stories | Status |
|----|-------|---------------|--------------|--------------|--------|
| C1 | Share Outfits | Main feature #6; "Users may share outfits with friends"; in decomposition diagram | Included in the Scope diagram ("Share outfits > Text/Social") but **not** among the 10 user stories | US-28 **rejected** ("less important than the main features") | Excluded from v1 (follows approved stories). Spec Scope diagram and Baseline Plan should be updated. |
| C2 | Remove/delete clothing items | Diagram: "Edit or remove clothing items" | Scope diagram shows "Edit item" only | No story for deleting clothing | Open. Not scaffolded. |
| C3 | Delete outfit | Not mentioned | Not mentioned | US-16 rejected as "basic behavior of managing saved outfits" (implies it may exist inside US-13) | Open. Is delete part of US-13 or out of scope? |
| C4 | Edit saved outfit | Not mentioned | Not mentioned | US-15 rejected as overlapping US-11 Swap | **Scaffold assumption:** swapping (US-11) also works on saved outfits. |
| C5 | Frequently worn / outfit history | Diagram: "View frequently worn items", "View outfit history" | Scope diagram: "Times worn" under Track usage | US-24, US-25, US-27 rejected as already part of US-23 | **Scaffold assumption:** times worn and last worn are shown inside US-23; no separate screens. |
| C6 | Story numbering | n/a | Stories numbered 1-10 | Stories numbered US-01 to US-29 | Docs use US-xx IDs with a mapping table in the PRD. |

## Open questions (not defined in any document)

| ID | Question | Why it matters |
|----|----------|----------------|
| Q1 | How does **Find Matches** (US-17) decide what "matches"? Baseline says it "will be clarified with the client"; US-18 says color is part of it. Baseline excludes advanced AI and shopping recommendations. | Determines the US-17 algorithm. Simple rules (color + complementary category) fit the exclusions. |
| Q2 | Do users need **accounts / login**? No document mentions it, but "my closet" implies per-user data. | Draft schema assumes Supabase Auth. |
| Q3 | Platform: Spec says "primarily mobile devices". Proposed tech is React (web). | **Scaffold assumption:** mobile-first responsive web app, not a native app. |
| Q4 | What counts as **"rarely worn"** (US-26)? e.g. not worn in 30/60/90 days, or never worn. | Needed for US-26 acceptance criteria. |
| Q5 | Is the category list fixed (shirts, pants, shoes, jackets, accessories) or can users add categories? | Draft schema uses a fixed enum. |
| Q6 | Is a picture **required** when adding clothing? Spec: "uploading a picture and entering basic information". | US-01 validation rules. |
| Q7 | How is usage recorded (US-23)? Baseline says "to be confirmed during the first interview". Mark single items as worn, or a whole outfit at once? | Draft schema logs per item; marking an outfit would log each of its items. |
| Q8 | Must an outfit contain certain categories (e.g. top + bottom + shoes), or any 2+ items? | US-09 validation rules. |
| Q9 | Can a planned outfit (US-20) be a new unsaved combination, or only a saved outfit? | Draft schema links plans to saved outfits. |
