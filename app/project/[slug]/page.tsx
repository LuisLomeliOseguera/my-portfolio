import { notFound } from 'next/navigation'
import { projects } from '../../../data/projects'
import ProjectDetail from '../../../components/ProjectDetail'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) {
    notFound()
  }
  return <ProjectDetail project={project!} />
}
