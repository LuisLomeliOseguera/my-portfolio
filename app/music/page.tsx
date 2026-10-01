import ProjectGrid from '../../components/ProjectGrid'
import { projects } from '../../data/projects'

export default function Music() {
  return <ProjectGrid projects={projects.filter((p) => p.category === 'music')} />
}
