import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: 'Branding e design de produto para startups.',
    lang: 'pt-BR',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FF7B00',
    icons: [
      { src: '/assets/logotype/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/logotype/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
