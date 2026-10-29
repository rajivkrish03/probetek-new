const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hzyg8msu';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-19';

export type ArticleBlock = {
  _type?: string;
  style?: string;
  listItem?: string;
  level?: number;
  children?: Array<{ _type?: string; text?: string }>;
};

export type NewsArticle = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  externalUrl?: string;
  imageUrl?: string;
  body?: ArticleBlock[];
};

function groqUrl(query: string) {
  const params = new URLSearchParams({ query });
  return `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?${params.toString()}`;
}

/**
 * This runs during Next.js static generation. Keep the dataset publicly readable;
 * never expose a Sanity write token in a public website build.
 */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  const query = `*[_type == "newsArticle" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    "title": title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    externalUrl,
    "imageUrl": mainImage.asset->url
  }`;
  try {
    const response = await fetch(groqUrl(query), { next: { revalidate: false } });
    if (!response.ok) {
      console.error(`Sanity query failed (${response.status}). Confirm the production dataset is publicly readable.`);
      return [];
    }
    const payload = (await response.json()) as { result?: NewsArticle[] };
    return Array.isArray(payload.result) ? payload.result : [];
  } catch (error) {
    console.error('Unable to load News & Events from Sanity during static build.', error);
    return [];
  }
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  const query = `*[_type == "newsArticle" && slug.current == ${JSON.stringify(slug)}][0] {
    _id,
    "title": title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    externalUrl,
    "imageUrl": mainImage.asset->url,
    body
  }`;
  try {
    const response = await fetch(groqUrl(query), { next: { revalidate: false } });
    if (!response.ok) {
      console.error(`Sanity article query failed (${response.status}).`);
      return null;
    }
    const payload = (await response.json()) as { result?: NewsArticle | null };
    return payload.result ?? null;
  } catch (error) {
    console.error('Unable to load article from Sanity during static build.', error);
    return null;
  }
}
