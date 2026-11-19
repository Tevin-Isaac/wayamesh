import type { MetadataRoute } from 'next';

const BASE = 'https://wayamesh.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/privacy', '/terms', '/app'].map(p => ({ url: `${BASE}${p === '/' ? '' : p}`, changeFrequency: 'monthly' as const }));
}
