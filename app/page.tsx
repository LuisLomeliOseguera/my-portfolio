import FeaturedReel from '../components/FeaturedReel'
import ProjectGrid from '../components/ProjectGrid'
import { projects } from '../data/projects'

export default function Home() {
  const featured = [
    projects.find((p) => p.category === 'music')!,
    projects.find((p) => p.category === 'commercial')!,
    projects.find((p) => p.category === 'narrative')!,
  ]

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <FeaturedReel projects={featured} />
      <ProjectGrid projects={projects} />
    </main>
  )
}
