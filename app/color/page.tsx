import ProjectGrid from '../../components/ProjectGrid'
import { projects } from '../../data/projects'

export default function Color() {
  return <ProjectGrid projects={projects.filter((p) => p.category === 'color')} />
}
