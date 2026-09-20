import LocaleRootLayout from '@/components/LocaleRootLayout';
import { layoutMetadata } from '@/lib/seo';

export const metadata = layoutMetadata('pt');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LocaleRootLayout locale="pt">{children}</LocaleRootLayout>;
}
