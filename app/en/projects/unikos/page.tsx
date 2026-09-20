import ProjectPage from '@/components/ProjectPage';
import { projectMetadata } from '@/lib/seo';

export const metadata = projectMetadata('en', 'unikos');

export default function Page() {
  return <ProjectPage locale="en" slug="unikos" />;
}
