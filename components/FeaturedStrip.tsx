'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../data/projects'

export default function FeaturedStrip({ projects }: { projects: Project[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/project/${project.slug}`}
          style={{ textDecoration: 'none', color: 'inherit', width: 160 }}
        >
          <div
            style={{
              position: 'relative',
              width: 160,
              aspectRatio: '1/1',
              overflow: 'hidden',
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="160px"
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
