import HomePage from '@/components/HomePage';
import { homeMetadata } from '@/lib/seo';

export const metadata = homeMetadata('en');

export default function Page() {
  return <HomePage locale="en" />;
}
