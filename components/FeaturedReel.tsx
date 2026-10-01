'use client'

import { useState } from 'react'
import type { Project } from '../data/projects'

export default function FeaturedReel({ projects }: { projects: Project[] }) {
  // Start on the first project with a real Gumlet video, not just index 0 —
  // display/category order shouldn't be dictated by which project happens
  // to have a working video yet. Falls back to index 0 if none are ready.
  const initialIndex = Math.max(
    0,
    projects.findIndex((p) => p.gumletVideoId && p.gumletVideoId !== 'REPLACE_ME')
  )
  const [index, setIndex] = useState(initialIndex)
  const project = projects[index]

  const go = (dir: number) => {
    setIndex((i) => (i + dir + projects.length) % projects.length)
  }

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
      <iframe
        key={project.slug}
        loading="lazy"
        title={`${project.title} featured video`}
        src={`https://play.gumlet.io/embed/${project.gumletVideoId}?background=true&autoplay=true&loop=true&disable_player_controls=true`}
        style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
      />

      <button
        onClick={() => go(-1)}
        aria-label="Previous featured project"
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: 32,
          cursor: 'pointer',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
        }}
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next featured project"
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: 32,
          cursor: 'pointer',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
        }}
      >
        ›
      </button>
    </div>
  )
}
