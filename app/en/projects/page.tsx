import ProjetosPage from '@/components/ProjetosPage';
import { projetosMetadata } from '@/lib/seo';

export const metadata = projetosMetadata('en');

export default function Page() {
  return <ProjetosPage locale="en" />;
}
