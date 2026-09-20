import ProjectPage from '@/components/ProjectPage';
import { projectMetadata } from '@/lib/seo';

export const metadata = projectMetadata('en', 'profitor');

export default function Page() {
  return <ProjectPage locale="en" slug="profitor" />;
}
