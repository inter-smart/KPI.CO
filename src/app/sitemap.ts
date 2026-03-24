import type { MetadataRoute } from "next";

// const BASE_URL = "https://kpi.co";
const BASE_URL = "https://development.kpi.co";
const WP_API_URL = "https://blogadmin.kpi.co/wp-json/wp/v2";

/**
 * Fetches all published blog post slugs from WordPress (paginated).
 */
async function getAllBlogSlugs(): Promise<{ slug: string; modified: string }[]> {
  const perPage = 100;
  let page = 1;
  let allSlugs: { slug: string; modified: string }[] = [];
  let hasMore = true;

  while (hasMore) {
    try {
      const res = await fetch(
        `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified&status=publish`,
        { next: { revalidate: 3600 } }
      );

      if (!res.ok) {
        break;
      }

      const posts: { slug: string; modified: string }[] = await res.json();

      if (posts.length === 0) {
        break;
      }

      allSlugs = [...allSlugs, ...posts];

      // Check if there are more pages
      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      hasMore = page < totalPages;
      page++;
    } catch {
      break;
    }
  }

  return allSlugs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Static Pages ──────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Advisory & Corporate Services
    {
      url: `${BASE_URL}/advisory`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/advisory-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/advisory/tax-advisory/e-Invoicing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/corporate-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/corporate-tax-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Audit & Risk Services
    {
      url: `${BASE_URL}/audit-assurance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-assurance/adgm-regulated-audit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-assurance/agreed-upon-procedures-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-assurance/audit-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-assurance/difc-dfsa-regulated-audit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-assurance/financial-statement-audit-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-services-uae-old`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/internal-audit-firm-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/risk-assurance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/risk-assurance/enterprise-risk-management-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/risk-assurance/risk-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Tax Services
    {
      url: `${BASE_URL}/tax-advisory-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vat-advisory-services-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Regulatory & Compliance
    {
      url: `${BASE_URL}/regulatory-compliance-advisory-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/standard-operating-procedures-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Free Zone Business Setup
    {
      url: `${BASE_URL}/free-zone-business-setup-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/business-setup-difc-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/business-setup-dubai-airport-free-zone`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/business-setup-sharjah-airport-international-free-zone`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dmcc-freezone-business-setup-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dwtc-freezone-business-setup-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/jafza-free-zone-business-setup-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/meydan-freezone-business-setup-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/rak-icc-business-setup-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Company Formation
    {
      url: `${BASE_URL}/company-formation-adgm`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/company-formation-dubai-silicon-oasis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/company-formation-jafza-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/company-formation-rakez-free-zone`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/company-setup-hamriyah-free-zone`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/company-setup-ifza-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/mainland-company-formation-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/offshore-company-formation-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // ADGM SPV Services
    {
      url: `${BASE_URL}/adgm-spv-formation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/adgm-spv-foundation-setup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/adgm-spv-foundations-holding-companies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Technology & Other
    {
      url: `${BASE_URL}/technology-overview`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // ─── Dynamic Blog Detail Pages ─────────────────────────────────────────────
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const blogSlugs = await getAllBlogSlugs();
    blogRoutes = blogSlugs.map(({ slug, modified }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(modified),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Failed to fetch blog slugs for sitemap:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
