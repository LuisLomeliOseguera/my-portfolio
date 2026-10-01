'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../data/projects'

export default function FeaturedStrip({ projects }: { projects: Project[] }) {
  return (
    <div
      className="featured-strip"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${projects.length}, 1fr)`,
        gap: 16,
        width: '100%',
      }}
    >
      {projects.map((project) => (
        <Link
          key={project.slug}
          className="featured-strip-item"
          href={`/project/${project.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1',
              overflow: 'hidden',
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes={`${Math.round(100 / projects.length)}vw`}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {project.title}
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.5 }}>
            {project.category}
          </div>
        </Link>
      ))}
    </div>
  )
}
