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
        `}</style>

        <Navbar />

        <div style={{ padding: '140px 60px 0 60px' }}>
          {children}
        </div>

        <footer
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