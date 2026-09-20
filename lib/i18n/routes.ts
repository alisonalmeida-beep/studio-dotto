import { defaultLocale, type Locale } from './config';

// Os caminhos "canônicos" são os do português (sem prefixo). O inglês vive em /en:
//   /            <-> /en
//   /projetos    <-> /en/projects
//   /projects/x  <-> /en/projects/x
const EN_PREFIX = '/en';

function splitSuffix(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)];
}

export function localeFromPath(pathname: string): Locale {
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`) ? 'en' : defaultLocale;
}

// Qualquer caminho (PT ou EN) -> caminho canônico em português.
export function toPtPath(pathname: string): string {
  const [path, suffix] = splitSuffix(pathname);
  let pt = path;
  if (localeFromPath(path) === 'en') {
    pt = path.slice(EN_PREFIX.length) || '/';
    if (pt === '/projects') pt = '/projetos';
  }
  return pt + suffix;
}

// Caminho canônico em português -> caminho no idioma pedido.
export function localePath(locale: Locale, ptPath: string): string {
  const [path, suffix] = splitSuffix(ptPath);
  if (locale === 'pt') return path + suffix;
  if (path === '/') return EN_PREFIX + suffix;
  if (path === '/projetos') return `${EN_PREFIX}/projects${suffix}`;
  return `${EN_PREFIX}${path}${suffix}`;
}

// Página equivalente da atual em outro idioma (usada pelo toggle e pelo hreflang).
export function alternatePath(pathname: string, target: Locale): string {
  return localePath(target, toPtPath(pathname));
}
