import FeaturedReel from '../components/FeaturedReel'
import FeaturedStrip from '../components/FeaturedStrip'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <FeaturedReel projects={featured} />
      <FeaturedStrip projects={featured} />
    </main>
  )
}
