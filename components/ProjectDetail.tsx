'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Project } from '../data/projects'

export default function ProjectDetail({ project }: { project: Project }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: 14,
          overflow: 'hidden',
        }}
      >
        <iframe
          loading="lazy"
          title={`${project.title} video player`}
          src={`https://play.gumlet.io/embed/${project.gumletVideoId}?background=false&autoplay=false&loop=false&disable_player_controls=false`}
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
          referrerPolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
          allowFullScreen
        />
      </div>

      <h1 style={{ fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {project.title}
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 40,
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            flex: 2,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 16,
            width: '100%',
          }}
        >
          {project.screengrabs.map((src, i) => (
            <div
              key={src}
              style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 10, overflow: 'hidden' }}
            >
              <Image
                src={src}
                alt={`${project.title} screengrab ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <aside
          style={{
            flex: 1,
            minWidth: 220,
            position: isMobile ? 'static' : 'sticky',
            top: 40,
            width: '100%',
          }}
        >
          <dl style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 0 }}>
            {project.credits.map((credit) => (
              <div
                key={credit.role}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 13,
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  paddingBottom: 6,
                }}
              >
                <dt style={{ textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6 }}>
                  {credit.role}
                </dt>
                <dd style={{ margin: 0 }}>{credit.name}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </main>
  )
}
