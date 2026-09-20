import ProjetosPage from '@/components/ProjetosPage';
import { projetosMetadata } from '@/lib/seo';

export const metadata = projetosMetadata('pt');

export default function Page() {
  return <ProjetosPage locale="pt" />;
}
