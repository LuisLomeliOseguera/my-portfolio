'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--bg)',
        opacity: scrolled ? 0.65 : 1,
        transition: 'opacity 0.4s ease',
        zIndex: 1000,
      }}
    >
      <div style={{ padding: '18px 60px 12px 60px' }}>

        {/* NAME BLOCK */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}
        >
          <div style={{ textAlign: 'right', lineHeight: 1.15 }}>

            <div
              style={{
                fontSize: 14,
                letterSpacing: '0.15em',
              }}
            >
              Luis Lomeli Oseguera
            </div>

            <div
              style={{
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                opacity: 0.7,
              }}
            >
              Cinematographer
            </div>

          </div>
        </div>

        {/* NAV ROW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ justifySelf: 'start' }}>
            <Link href="/" style={navLink}>Featured</Link>
          </div>

          <div style={{ display: 'flex', gap: 28, justifySelf: 'center' }}>
            <Link href="/narrative" style={navLink}>Narrative</Link>
            <Link href="/music" style={navLink}>Music</Link>
            <Link href="/commercial" style={navLink}>Commercial</Link>
            <Link href="/documentary" style={navLink}>Documentary</Link>
          </div>

          <div style={{ justifySelf: 'end' }}>
            <Link href="/contact" style={navLink}>Contact</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

const navLink: React.CSSProperties = {
  textDecoration: 'none',
  color: 'var(--fg)',
}