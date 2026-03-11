import { InsightItem } from "@/app/page";
import HomeOurInsightsClient from "@/components/Client/HomeOurInsightsClient";
import { getPosts } from "@/lib/blog-api";
import { transformWpPostToBlogItem } from "@/lib/utils";


export default async function HomeOurInsights({ 
  variant = "default" 
}: { 
  variant?: "default" | "saifz" | "ADGM-Foundations" | "holding" | "home" 
}) {
   const posts = await getPosts({ perPage: 4, _embed: true });
  
  const transformedInsights = await Promise.all(
    posts.map((post) => {
      const mediaFetcher = (mediaUrl: string) => {
        const embedded = post._embedded?.["wp:featuredmedia"]?.[0];
        if (embedded) return Promise.resolve(embedded);
        return fetch(mediaUrl).then((r) => r.json());
      };

      const categoryFetcher = (id: number) => {
        const terms = post._embedded?.["wp:term"];
        if (terms) {
          for (const group of terms) {
            for (const term of group) {
              if (term.id === id) return Promise.resolve(term.name);
            }
          }
        }
        return Promise.resolve("");
      };

      return transformWpPostToBlogItem(post, mediaFetcher, categoryFetcher);
    })
  );

  const insightsData = {
    title: "Our Insights",
    items: transformedInsights as InsightItem[],
  };
  

  return (
     <HomeOurInsightsClient data={insightsData} variant={variant} />
  );
}

