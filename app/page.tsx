import FeaturedReel from '../components/FeaturedReel'
import ProjectGrid from '../components/ProjectGrid'
import { projects, type Project } from '../data/projects'

function interleaveByCategory(items: Project[]): Project[] {
  const groups: Record<string, Project[]> = {}
  for (const p of items) {
    groups[p.category] = groups[p.category] || []
    groups[p.category].push(p)
  }
  const categories = Object.keys(groups)
  const result: Project[] = []
  let i = 0
  while (result.length < items.length) {
    for (const cat of categories) {
      if (groups[cat][i]) result.push(groups[cat][i])
    }
    i += 1
  }
  return result
}

export default function Home() {
  const featured = [
    projects.find((p) => p.category === 'music')!,
    projects.find((p) => p.category === 'commercial')!,
    projects.find((p) => p.category === 'narrative')!,
  ]

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <FeaturedReel projects={featured} />
      <ProjectGrid projects={interleaveByCategory(projects)} />
    </main>
  )
}
