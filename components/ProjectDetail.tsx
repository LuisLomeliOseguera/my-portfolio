'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../data/projects'
import { bodyFont } from '../lib/fonts'

// Deterministic per-project pick between a wrapped "blocks" layout and a
// full-width vertical "stack" layout, so each project is consistent across
// rebuilds/reloads but varies project to project.
function screengrabLayout(slug: string): 'blocks' | 'stack' | 'masonry' {
  let h = 0
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0
  }
  const options: ('blocks' | 'stack' | 'masonry')[] = ['blocks', 'stack', 'masonry']
  return options[(h >>> 0) % options.length]
}

export default function ProjectDetail({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? null : (i + 1) % project.screengrabs.length))
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? null : (i - 1 + project.screengrabs.length) % project.screengrabs.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, project.screengrabs.length])

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
        <div
          style={{
            position: 'relative',
            flex: 1,
            minWidth: 0,
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
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            flexShrink: 0,
            maxWidth: 220,
          }}
        >
          {project.credits.map((credit) => (
            <div
              key={credit.role}
              style={{
                fontSize: 12,
                letterSpacing: '0.04em',
                color: 'var(--fg)',
              }}
            >
              <span style={{ opacity: 0.7 }}>{credit.role}: </span>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{credit.name}</span>
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

      <div style={{ borderTop: '1px solid var(--divider)' }} />

      {(() => {
        const layout = screengrabLayout(project.slug)
        if (layout === 'blocks') {
          return (
        // Uniform edge-to-edge grid, like a contact sheet — every tile the
        // same landscape aspect ratio, no gaps, columns based on count.
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(3, project.screengrabs.length)}, 1fr)`,
            gap: 0,
          }}
        >
          {project.screengrabs.map((grab, i) => (
            <div
              key={grab.src}
              onClick={() => setLightboxIndex(i)}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                cursor: 'pointer',
              }}
            >
              <Image
                src={grab.src}
                alt={`${project.title} screengrab ${i + 1}`}
                fill
                sizes="33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
          )
        }

        if (layout === 'stack') {
          // Full vertical run, one image after another, each at its own
          // (randomized) width and aspect ratio for size variety.
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
              {project.screengrabs.map((grab, i) => (
                <div
                  key={grab.src}
                  onClick={() => setLightboxIndex(i)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: grab.width,
                    aspectRatio: grab.aspect ?? '16/9',
                    cursor: 'pointer',
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
          )
        }

        // 'masonry' — staggered Pinterest-style columns, images keep their
        // own aspect ratio and settle into whichever column is shortest.
        return (
          <div style={{ columnCount: project.screengrabs.length > 2 ? 3 : 2, columnGap: 12 }}>
            {project.screengrabs.map((grab, i) => (
              <div
                key={grab.src}
                onClick={() => setLightboxIndex(i)}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: grab.aspect ?? '16/9',
                  breakInside: 'avoid',
                  marginBottom: 12,
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={grab.src}
                  alt={`${project.title} screengrab ${i + 1}`}
                  fill
                  sizes="33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )
      })()}

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

      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: 28,
              cursor: 'pointer',
            }}
          >
            ✕
          </button>

          {project.screengrabs.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((i) => (i === null ? null : (i - 1 + project.screengrabs.length) % project.screengrabs.length))
                }}
                aria-label="Previous screengrab"
                style={{
                  position: 'absolute',
                  left: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: 36,
                  cursor: 'pointer',
                }}
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((i) => (i === null ? null : (i + 1) % project.screengrabs.length))
                }}
                aria-label="Next screengrab"
                style={{
                  position: 'absolute',
                  right: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: 36,
                  cursor: 'pointer',
                }}
              >
                ›
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90vw',
              height: '90vh',
            }}
          >
            <Image
              src={project.screengrabs[lightboxIndex].src}
              alt={`${project.title} screengrab ${lightboxIndex + 1} enlarged`}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </main>
  )
}
