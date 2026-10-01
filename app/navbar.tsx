'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

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
      <div className="navbar-inner" style={{ padding: '18px 60px 12px 60px' }}>

        {/* TOP ROW: Featured anchored top-left, name/title top-right, hamburger on mobile */}
        <div
          className="navbar-top-row"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 10,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <Link href="/" style={navLink} onClick={closeMenu}>Featured</Link>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
            <div style={{ textAlign: 'right', lineHeight: 1.15 }}>

              <div
                className="navbar-name"
                style={{
                  fontSize: 14,
                  letterSpacing: '0.15em',
                }}
              >
                Luis Lomeli Oseguera
              </div>

              <div
                className="navbar-title"
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

            {/* Mobile-only hamburger toggle — hidden on desktop via CSS */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--fg)',
                fontSize: 20,
                lineHeight: 1,
                padding: 0,
                cursor: 'pointer',
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* NAV ROW — a single centered line on desktop; a hamburger-toggled
            dropdown on mobile, since six links were never going to fit on
            one line on a phone screen */}
        <div
          className={`nav-row${menuOpen ? ' nav-row-open' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 28,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <Link href="/narrative" style={navLink} onClick={closeMenu}>Narrative</Link>
          <Link href="/music" style={navLink} onClick={closeMenu}>Music</Link>
          <Link href="/commercial" style={navLink} onClick={closeMenu}>Commercial</Link>
          <Link href="/documentary" style={navLink} onClick={closeMenu}>Documentary</Link>
          <Link href="/color" style={navLink} onClick={closeMenu}>Color</Link>
          <Link href="/contact" style={navLink} onClick={closeMenu}>Contact</Link>
        </div>

      </div>
    </div>
  )
}

const navLink: React.CSSProperties = {
  textDecoration: 'none',
  color: 'var(--fg)',
}