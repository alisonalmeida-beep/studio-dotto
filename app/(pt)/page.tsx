import HomePage from '@/components/HomePage';
import { homeMetadata } from '@/lib/seo';

export const metadata = homeMetadata('pt');

export default function Page() {
  return <HomePage locale="pt" />;
}
