import JsonLd from './JsonLd';
import { HREFLANG, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localePath } from '@/lib/i18n/routes';
import { getProject } from '@/lib/projects';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export default function ProjectJsonLd({ slug, locale }: { slug: string; locale: Locale }) {
  const project = getProject(slug);
  const t = getDictionary(locale).seo;
  const url = `${SITE_URL}${localePath(locale, `/projects/${slug}`)}`;
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CreativeWork',
            '@id': `${url}#project`,
            name: `${project.name} — ${t.projectTitleSuffix}`,
            description: project.description[locale],
            url,
            image: `${SITE_URL}/og/${locale}/${slug}`,
            inLanguage: HREFLANG[locale],
            genre: 'Branding',
            creator: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${SITE_URL}${localePath(locale, '/')}` },
              { '@type': 'ListItem', position: 2, name: t.breadcrumbProjects, item: `${SITE_URL}${localePath(locale, '/projetos')}` },
              { '@type': 'ListItem', position: 3, name: project.name, item: url },
            ],
          },
        ],
      }}
    />
  );
}
