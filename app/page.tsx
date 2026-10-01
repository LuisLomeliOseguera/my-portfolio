import FeaturedReel from '../components/FeaturedReel'
import ProjectGrid from '../components/ProjectGrid'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <FeaturedReel projects={featured} />
      <ProjectGrid projects={featured} />
    </main>
  )
}
