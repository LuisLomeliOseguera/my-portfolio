import Navbar from './navbar'
import { bodyFont } from '../lib/fonts'

export const metadata = {
  title: 'Luis Lomeli Oseguera – Cinematographer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        className={bodyFont.className}
        style={{
          margin: 0,
          background: 'var(--bg)',
          color: 'var(--fg)',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <style>{`
          :root {
            --bg: #ffffff;
            --fg: #000000;
            --divider: rgba(0, 0, 0, 0.15);
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #000000;
              --fg: #ffffff;
              --divider: rgba(255, 255, 255, 0.15);
            }
          }

          /* Mobile layout overrides — inline styles need !important to be beaten */
          @media (max-width: 640px) {
            .page-shell {
              padding: 110px 20px 0 20px !important;
            }
            .site-footer {
              padding: 24px 20px !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 10px !important;
            }
            .navbar-inner {
              padding: 14px 20px 10px 20px !important;
            }
            .navbar-name {
              font-size: 11px !important;
              letter-spacing: 0.1em !important;
            }
            .navbar-title {
              font-size: 10px !important;
              letter-spacing: 0.16em !important;
            }
            .nav-row {
              display: flex !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 10px 16px !important;
            }
            .nav-center-links {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 10px 16px !important;
            }
            .featured-strip {
              display: flex !important;
              overflow-x: auto !important;
              gap: 12px !important;
            }
            .featured-strip-item {
              flex: 0 0 140px !important;
              width: 140px !important;
            }
            .project-header-row {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 16px !important;
            }
            .project-credits {
              max-width: 100% !important;
            }
          }
        `}</style>

        <Navbar />

        <div className="page-shell" style={{ padding: '140px 60px 0 60px' }}>
          {children}
        </div>

        <footer
          className="site-footer"
          style={{
            marginTop: 120,
            padding: '30px 60px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 12,
            opacity: 0.7,
          }}
        >
          <div>
            © {new Date().getFullYear()} Luis Lomeli Oseguera
          </div>

          <div style={{ display: 'flex', gap: 18 }}>
            <a href="#" style={navLink}>Instagram</a>
            <a href="#" style={navLink}>Vimeo</a>
            <a href="#" style={navLink}>Email</a>
          </div>
        </footer>
      </body>
    </html>
  )
}

const navLink: React.CSSProperties = {
  textDecoration: 'none',
  color: 'var(--fg)',
}