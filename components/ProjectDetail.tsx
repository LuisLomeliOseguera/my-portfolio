'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../data/projects'
import { bodyFont } from '../lib/fonts'

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
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

        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            pointerEvents: 'none',
          }}
        >
          {project.credits.map((credit) => (
            <div
              key={credit.role}
              style={{
                fontSize: 12,
                letterSpacing: '0.04em',
                color: '#ffffff',
                textShadow: '0 1px 6px rgba(0,0,0,0.85)',
              }}
            >
              {credit.role}: {credit.name}
            </div>
          ))}
        </div>
      </div>

      <h1
        className={bodyFont.className}
        style={{
          fontSize: 40,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        {project.title}
      </h1>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)' }} />

      <div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            scrollSnapType: 'x proximity',
          }}
        >
          {project.screengrabs.map((grab, i) => (
            <div
              key={grab.src}
              style={{
                position: 'relative',
                flex: '0 0 auto',
                width: grab.width,
                aspectRatio: grab.aspect ?? '16/9',
                scrollSnapAlign: 'start',
              }}
            >
              <Image
                src={grab.src}
                alt={`${project.title} screengrab ${i + 1}`}
                fill
                sizes={`${grab.width}px`}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {project.notes && project.notes.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {project.notes.map((note, i) => (
            <div key={i} style={{ fontSize: 14 }}>
              {note}
            </div>
          ))}
        </div>
      )}

      <Link
        href={`/${project.category}`}
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          background: '#555555',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '12px 20px',
        }}
      >
        Back to {project.category}
      </Link>
    </main>
  )
}
