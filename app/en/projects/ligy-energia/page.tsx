import ProjectPage from '@/components/ProjectPage';
import { projectMetadata } from '@/lib/seo';

export const metadata = projectMetadata('en', 'ligy-energia');

export default function Page() {
  return <ProjectPage locale="en" slug="ligy-energia" />;
}
