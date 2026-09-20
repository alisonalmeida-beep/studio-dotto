import type { MetadataRoute } from 'next';
import { HREFLANG, locales } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routes';
import { PROJECTS } from '@/lib/projects';
import { SITE_URL } from '@/lib/site';

// Cada página existe nos dois idiomas e declara o par via hreflang.
function entry(ptPath: string, changeFrequency: 'monthly' | 'yearly', priority: number, lastModified: Date) {
  const languages = {
    ...Object.fromEntries(locales.map(l => [HREFLANG[l], `${SITE_URL}${localePath(l, ptPath)}`])),
    'x-default': `${SITE_URL}${localePath('pt', ptPath)}`,
  };
  return locales.map(l => ({
    url: `${SITE_URL}${localePath(l, ptPath)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...entry('/', 'monthly', 1, lastModified),
    ...entry('/projetos', 'monthly', 0.8, lastModified),
    ...PROJECTS.flatMap(p => entry(`/projects/${p.slug}`, 'yearly', 0.7, lastModified)),
  ];
}
