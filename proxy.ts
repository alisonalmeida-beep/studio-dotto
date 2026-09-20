import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE } from '@/lib/i18n/config';
import { alternatePath, localeFromPath } from '@/lib/i18n/routes';

// Países onde o português é a língua esperada: ficam na versão PT.
const PT_COUNTRIES = new Set(['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL']);

// Robôs de busca e de pré-visualização nunca são redirecionados: o Googlebot rastreia
// principalmente dos EUA e precisa enxergar as duas versões (senão o PT sairia do índice).
const BOT_UA =
  /bot|crawl|spider|slurp|google-inspectiontool|lighthouse|facebookexternalhit|whatsapp|telegram|slack|discord|linkedin|embedly|pinterest|skypeuripreview|preview|headlesschrome/i;

// Detecção por país só como conveniência para humanos: a escolha do toggle (cookie) sempre vence,
// e URLs /en nunca são redirecionadas automaticamente.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (localeFromPath(pathname) === 'en') return NextResponse.next();
  if (BOT_UA.test(request.headers.get('user-agent') ?? '')) return NextResponse.next();

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  let wantsEnglish: boolean;
  if (saved === 'en' || saved === 'pt') {
    wantsEnglish = saved === 'en';
  } else {
    // Header preenchido pela Vercel; fora dela (ou em dev) não há redirecionamento automático.
    const country = request.headers.get('x-vercel-ip-country');
    wantsEnglish = !!country && !PT_COUNTRIES.has(country.toUpperCase());
  }
  if (!wantsEnglish) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = alternatePath(pathname, 'en');
  const response = NextResponse.redirect(url, 307);
  response.headers.set('Cache-Control', 'private, no-store');
  response.headers.set('Vary', 'Cookie, User-Agent');
  return response;
}

export const config = {
  // Só rotas de página: fora _next, imagens OG, assets e qualquer caminho com extensão (sitemap.xml, imagens, vídeos…).
  matcher: ['/((?!_next/|og/|assets/|.*\\..*).*)'],
};
