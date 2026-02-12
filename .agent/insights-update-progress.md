# Insights Section Update Progress

## Objective
Replace all hardcoded insights data with actual blog data from `blogData.ts` and ensure proper navigation to `/blog/[slug]` detail pages.

## Pattern Used
```tsx
import { blogData } from "@/data/blogData";

// In localData:
insights: {
  title: "Our Insights" | "Related Blogs",
  items: blogData.slice(0, N).map((blog) => ({
    id: blog.id,
    media: blog.media,
    title: blog.title,
    description: blog.description,
    date: blog.date,
    readTime: blog.readTime,
    slug: `/blog/${blog.slug}`,
  })),
},
```

## Completed Updates
✅ src/app/page.tsx - Home page (4 items)
✅ src/app/dmcc-freezone-business-setup-uae/page.tsx - DMCC page (4 items)
✅ src/app/risk-overview/page.tsx - Risk Overview page (7 items)
✅ src/app/meydan-freezone-business-setup-uae/page.tsx - Meydan page (4 items)
✅ src/app/advisory-services-uae/page.tsx - Advisory Services page (4 items)
✅ src/app/ifza/page.tsx - IFZA page (3 items, uses BlogRelated component)

## Remaining Pages to Update
- src/app/dwtc-freezone/page.tsx
- src/app/company-setup-hamriyah-free-zone/page.tsx
- src/app/company-formation-dubai-silicon-oasis/page.tsx
- src/app/business-setup-sharjah-airport-international-free-zone/page.tsx
- src/app/business-setup-dubai-airport-free-zone/page.tsx

## Notes
- Some pages use `HomeOurInsights` component
- Some pages use `BlogRelated` component
- Both components accept the same data structure
- Number of items varies by page (3, 4, or 7 items)
