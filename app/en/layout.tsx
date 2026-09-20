import LocaleRootLayout from '@/components/LocaleRootLayout';
import { layoutMetadata } from '@/lib/seo';

export const metadata = layoutMetadata('en');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LocaleRootLayout locale="en">{children}</LocaleRootLayout>;
}
