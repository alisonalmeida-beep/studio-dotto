import ProjectPage from '@/components/ProjectPage';
import { projectMetadata } from '@/lib/seo';

export const metadata = projectMetadata('pt', 'ligy-energia');

export default function Page() {
  return <ProjectPage locale="pt" slug="ligy-energia" />;
}
