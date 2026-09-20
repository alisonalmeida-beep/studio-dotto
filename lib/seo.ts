import type { Metadata } from 'next';
import { HREFLANG, OG_LOCALE, locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localePath } from '@/lib/i18n/routes';
import { getProject } from '@/lib/projects';
import { SITE_NAME, SITE_URL } from '@/lib/site';

// Metadata do layout raiz de cada idioma (o <html lang> muda por idioma).
export function layoutMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).seo;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.siteTitle, template: `%s | ${SITE_NAME}` },
    description: t.siteDescription,
    keywords: t.keywords,
    applicationName: SITE_NAME,
    authors: [{ name: 'Alison Almeida', url: SITE_URL }],
    creator: 'Alison Almeida',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [
        { url: `/assets/logotype/favicon.svg`, type: 'image/svg+xml' },
        { url: `/assets/logotype/favicon.png`, type: 'image/png' },
      ],
    },
  };
}

type PageSeo = {
  locale: Locale;
  // Caminho canônico em português da página (ex.: '/', '/projetos', '/projects/clave').
  ptPath: string;
  // Sem `title`, a página usa o título padrão do site (home).
  title?: string;
  description: string;
  // Slug da imagem em /og/[locale]/[slug].
  ogSlug: string;
};

export function pageMetadata({ locale, ptPath, title, description, ogSlug }: PageSeo): Metadata {
  const t = getDictionary(locale).seo;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : t.siteTitle;
  const path = localePath(locale, ptPath);
  const image = `/og/${locale}/${ogSlug}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map(l => [HREFLANG[l], localePath(l, ptPath)])),
        'x-default': localePath('pt', ptPath),
      },
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter(l => l !== locale).map(l => OG_LOCALE[l]),
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  return pageMetadata({ locale, ptPath: '/', description: getDictionary(locale).seo.siteDescription, ogSlug: 'home' });
}

export function projetosMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).seo;
  return pageMetadata({ locale, ptPath: '/projetos', title: t.projectsTitle, description: t.projectsDescription, ogSlug: 'home' });
}

export function projectMetadata(locale: Locale, slug: string): Metadata {
  const project = getProject(slug);
  return pageMetadata({
    locale,
    ptPath: `/projects/${slug}`,
    title: `${project.name} — ${getDictionary(locale).seo.projectTitleSuffix}`,
    description: project.description[locale],
    ogSlug: slug,
  });
}
