export const SITE_NAME = 'Orsi Design';

// Defina NEXT_PUBLIC_SITE_URL com o domínio final (ex.: https://orsidesign.com.br).
// Sem ela, usa a URL de produção da Vercel e, em desenvolvimento, localhost.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const SOCIAL_LINKS = [
  'https://www.instagram.com/oalisonorsi/',
  'https://www.linkedin.com/in/oalisonalmeida/',
];
