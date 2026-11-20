# ClosetMatch - Site Map

Hierarchical outline for drawing by hand. Story IDs are in brackets. Each top-level item is also in the bottom navigation bar.

```
ClosetMatch
├── 1. Home (Dashboard)
│   ├── Quick action: Add Clothing
│   ├── Quick action: Create Outfit
│   └── Today's planned outfit
│
├── 2. My Closet [US-04]
│   ├── Category filter: Shirts | Pants | Shoes | Jackets | Accessories
│   ├── 2.1 Add Clothing [US-01]  (picture, name, color, category)
│   └── 2.2 Clothing Item Details
│       ├── Times worn / last worn [US-23]
│       ├── Mark as Worn [US-23]
│       ├── 2.2.1 Edit Clothing [US-07]
│       ├── 2.2.2 Find Matches [US-17]
│       └── Start Outfit with this item -> 3.1
│
├── 3. Outfits
│   ├── 3.1 Outfit Builder [US-09]
│   │   ├── Select items from closet
│   │   ├── View items together
│   │   ├── Swap an item [US-11]
│   │   └── Name & Save [US-13]
│   ├── 3.2 Saved Outfits [US-13]
│   └── 3.3 Outfit Details
│       ├── Reuse / Swap items [US-11]
│       ├── Plan this outfit -> 4
│       └── Mark outfit as worn [US-23]
│
├── 4. Outfit Planner [US-20]
│   ├── Upcoming plans (by date)
│   └── Plan an outfit (date + occasion: work / school / event / vacation / other)
│
└── 5. Wardrobe Usage
    ├── Usage summary (times worn per item) [US-23]
    └── Rarely Worn Clothing [US-26]
```

## Client routes

| Page | Route |
|------|-------|
| Home | `/` |
| My Closet | `/closet` |
| Add Clothing | `/closet/add` |
| Clothing Item Details | `/closet/:id` |
| Edit Clothing | `/closet/:id/edit` |
| Find Matches | `/closet/:id/matches` |
| Saved Outfits | `/outfits` |
| Outfit Builder | `/outfits/new` |
| Outfit Details | `/outfits/:id` |
| Outfit Planner | `/planner` |
| Wardrobe Usage | `/usage` |

Not on the site map (excluded): Share Outfits, Shop/Buy, Login *(pending Q2 in CONFLICTS.md)*.
