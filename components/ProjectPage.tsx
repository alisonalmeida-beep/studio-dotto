import ProjectJsonLd from '@/components/ProjectJsonLd';
import type { Locale } from '@/lib/i18n/config';
import { getProjectContent } from '@/lib/content/projects';
import Clave from '@/components/projects/clave';
import Colin from '@/components/projects/colin';
import Dcvmn from '@/components/projects/dcvmn';
import EscritorioInteligente from '@/components/projects/escritorio-inteligente';
import LigyEnergia from '@/components/projects/ligy-energia';
import Lunes from '@/components/projects/lunes';
import Profitor from '@/components/projects/profitor';
import Trinkery from '@/components/projects/trinkery';
import Unikos from '@/components/projects/unikos';

const CONTENT: Record<string, React.ComponentType<{ c: string[] }>> = {
  clave: Clave,
  colin: Colin,
  dcvmn: Dcvmn,
  'escritorio-inteligente': EscritorioInteligente,
  'ligy-energia': LigyEnergia,
  lunes: Lunes,
  profitor: Profitor,
  trinkery: Trinkery,
  unikos: Unikos,
};

export default function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const Content = CONTENT[slug];
  return (
    <>
      <ProjectJsonLd slug={slug} locale={locale} />
      <Content c={getProjectContent(slug, locale)} />
    </>
  );
}
