import { ImageResponse } from 'next/og';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { fmt } from '@/lib/i18n/format';
import { PROJECTS, getProject } from '@/lib/projects';
import { SITE_NAME } from '@/lib/site';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.flatMap(locale => ['home', ...PROJECTS.map(p => p.slug)].map(slug => ({ locale, slug })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const t = getDictionary(locale as Locale).seo;
  const isHome = slug === 'home';
  const title = isHome ? SITE_NAME : getProject(slug).name;
  const subtitle = isHome ? t.ogHomeSubtitle : fmt(t.ogProjectSubtitle, { site: SITE_NAME });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          padding: 80,
        }}
      >
        <svg width="110" height="80" viewBox="0 0 732 529" fill="none">
          <rect x="562" y="153" width="376" height="95" rx="47.5" transform="rotate(90 562 153)" fill="#FF7B00" />
          <rect x="265" y="153" width="376" height="95" rx="47.5" transform="rotate(90 265 153)" fill="#FF7B00" />
          <rect x="548" width="184" height="95" rx="47.5" fill="#FF7B00" />
          <rect x="257" y="2" width="218" height="95" rx="47.5" fill="#FF7B00" />
          <rect width="184" height="95" rx="47.5" fill="#FF7B00" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, color: '#1A1814', letterSpacing: -2, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ fontSize: 36, color: '#6B665D', marginTop: 20 }}>{subtitle}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
