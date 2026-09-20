import JsonLd from '@/components/JsonLd';
import ProjetosContent from '@/components/ProjetosContent';
import { HREFLANG, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { fmt } from '@/lib/i18n/format';
import { localePath } from '@/lib/i18n/routes';
import { PROJECTS } from '@/lib/projects';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export default function ProjetosPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).seo;
  const url = `${SITE_URL}${localePath(locale, '/projetos')}`;
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: fmt(t.projectsCollectionName, { site: SITE_NAME }),
              description: t.projectsDescription,
              url,
              inLanguage: HREFLANG[locale],
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: PROJECTS.map((p, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: p.name,
                  url: `${SITE_URL}${localePath(locale, `/projects/${p.slug}`)}`,
                })),
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${SITE_URL}${localePath(locale, '/')}` },
                { '@type': 'ListItem', position: 2, name: t.breadcrumbProjects, item: url },
              ],
            },
          ],
        }}
      />
      <ProjetosContent />
    </>
  );
}
