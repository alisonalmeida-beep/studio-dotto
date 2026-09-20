import type { Locale } from '@/lib/i18n/config';

export type ProjectMeta = {
  slug: string;
  name: string;
  description: Record<Locale, string>;
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'escritorio-inteligente',
    name: 'Escritório Inteligente',
    description: {
      pt: 'Renovação da identidade visual e verbal do Escritório Inteligente, metodologia que dá protagonismo à profissão contábil: logotipo, sistema visual e motion.',
      en: 'Renewal of the visual and verbal identity of Escritório Inteligente, a methodology that puts accounting professionals in the spotlight: logo, visual system and motion.',
    },
  },
  {
    slug: 'trinkery',
    name: 'Trinkery',
    description: {
      pt: 'Identidade visual da Trinkery, e-commerce de produtos exclusivos feitos em impressão 3D com matérias-primas sustentáveis: logotipo, sistema visual e aplicações.',
      en: 'Visual identity for Trinkery, an e-commerce of exclusive 3D-printed products made from sustainable raw materials: logo, visual system and applications.',
    },
  },
  {
    slug: 'dcvmn',
    name: 'DCVMN',
    description: {
      pt: 'Identidade visual da DCVMN, aliança de 42 fabricantes de vacinas de 15 países em desenvolvimento: logotipo, sistema visual e motion.',
      en: 'Visual identity for DCVMN, an alliance of 42 vaccine manufacturers from 15 developing countries: logo, visual system and motion.',
    },
  },
  {
    slug: 'ligy-energia',
    name: 'Ligy Energia',
    description: {
      pt: 'Branding da Ligy, empresa disruptiva de energia renovável que dá liberdade de escolha ao consumidor: logotipo, sistema visual e aplicações da marca.',
      en: 'Branding for Ligy, a disruptive renewable energy company that gives consumers freedom of choice: logo, visual system and brand applications.',
    },
  },
  {
    slug: 'profitor',
    name: 'Profitor',
    description: {
      pt: 'Identidade visual da Profitor, empresa brasileira de investimentos e criptoativos baseada em segurança, transparência e excelência.',
      en: 'Visual identity for Profitor, a Brazilian investment and crypto-asset company built on security, transparency and excellence.',
    },
  },
  {
    slug: 'lunes',
    name: 'Lunes',
    description: {
      pt: 'Identidade visual da Lunes, empresa brasileira de tecnologia blockchain com serviços financeiros e de autenticidade: logotipo, cores, ícones e aplicações.',
      en: 'Visual identity for Lunes, a Brazilian blockchain technology company offering financial and authenticity services: logo, colors, icons and applications.',
    },
  },
  {
    slug: 'colin',
    name: 'Colin',
    description: {
      pt: 'Branding da Colin, marca de roupas sociais premium para quem busca confiança e estilo: logotipo, sistema visual e aplicações.',
      en: 'Branding for Colin, a premium formalwear brand for those who seek confidence and style: logo, visual system and applications.',
    },
  },
  {
    slug: 'clave',
    name: 'Clave',
    description: {
      pt: 'Identidade visual da Clave, produtora de cafés especiais e música: logotipo de letras altas e grossas, sistema visual e aplicações da marca.',
      en: 'Visual identity for Clave, a specialty coffee and music producer: a tall, bold logotype, visual system and brand applications.',
    },
  },
  {
    slug: 'unikos',
    name: 'Unikos',
    description: {
      pt: 'Identidade visual da Unikos, estúdio de design estratégico com foco na área da saúde: logotipo, sistema visual e aplicações da marca.',
      en: 'Visual identity for Unikos, a strategic design studio focused on healthcare: logo, visual system and brand applications.',
    },
  },
];

export function getProject(slug: string): ProjectMeta {
  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) throw new Error(`Projeto desconhecido: ${slug}`);
  return project;
}
