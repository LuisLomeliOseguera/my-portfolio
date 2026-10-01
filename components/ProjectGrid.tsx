'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../data/projects'
import { displayFont } from '../lib/fonts'

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {projects.map((project) => {
        const isHovered = hovered === project.slug
        return (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => setHovered(project.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.3)',
                  opacity: isHovered ? 1 : 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.4s ease',
                }}
              >
                <span
                  className={displayFont.className}
                  style={{
                    color: '#ffffff',
                    fontSize: 28,
                    fontStyle: 'italic',
                    letterSpacing: '0.01em',
                  }}
                >
                  {project.title}
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </main>
  )
}
