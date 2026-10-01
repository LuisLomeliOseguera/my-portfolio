'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '../data/projects'
import { displayFont } from '../lib/fonts'

export default function FeaturedReel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0)
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

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <Link
          href={`/project/${project.slug}`}
          style={{ pointerEvents: 'auto', textDecoration: 'none', color: '#ffffff', textAlign: 'center' }}
        >
          <div
            className={displayFont.className}
            style={{
              fontSize: 40,
              textTransform: 'uppercase',
              textShadow: '0 2px 16px rgba(0,0,0,0.6)',
            }}
          >
            {project.title}
          </div>
        </Link>
      </div>

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
