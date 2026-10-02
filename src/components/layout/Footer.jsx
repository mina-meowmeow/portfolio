import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '@/data/site'
import { Reveal } from '@/components/ui/reveal'

// Sticky footer: pinned just off-screen and revealed at the bottom of the page.
export default function Footer() {
  const [copied, setCopied] = useState(false)
  const isHome = useLocation().pathname === '/'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      /* clipboard not available — still show feedback */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <footer id="contact" style={{ position: 'sticky', top: '100vh' }}>
      <div className="perforation" aria-hidden="true" />

      <Reveal as="div" className="wrap foot-inner" y={14}>
        <div className="foot-grid">
          <div className="foot-brand">
            {isHome ? (
              <a href="#top" className="mark">
                <img className="stamp" src="/cat-logo.png" alt="" aria-hidden="true" />
                {site.name}
              </a>
            ) : (
              <Link to="/" className="mark">
                <img className="stamp" src="/cat-logo.png" alt="" aria-hidden="true" />
                {site.name}
              </Link>
            )}
            <p className="foot-jp">{site.aboutJp}</p>
            <p className="tagline">{site.tagline} — open to internship and full-time roles.</p>
          </div>

          <div>
            <p className="foot-heading">
              Get in touch <span className="jp">連絡先</span>
            </p>
            <div className="foot-contact-list">
              <div className="foot-contact-row">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 5.5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="copy-row">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <button className="copy-btn" type="button" onClick={copyEmail} aria-label="Copy email address">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 13V5a2 2 0 0 1 2-2h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <span className={`copy-toast${copied ? ' show' : ''}`}>Copied!</span>
                </span>
              </div>
              <div className="foot-contact-row">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 3h3l2 4-2 1.5a10 10 0 0 0 4.5 4.5L13 11l4 2v3a2 2 0 0 1-2 2C8.5 18 2 11.5 2 5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>{site.phone}</a>
              </div>
              <div className="foot-contact-row">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="6.3" cy="6.3" r="1.1" fill="currentColor" />
                  <path d="M6.3 9v6M10 15v-3.3c0-1.6 3-1.6 3 0V15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M10 9v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </div>
              <div className="foot-contact-row">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85.004 1.71.114 2.51.336 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                    fill="currentColor"
                  />
                </svg>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
              <div className="foot-contact-row">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 2h7l3 3v13H5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M7.5 10h5M7.5 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Résumé / CV ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="colophon">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="sign-off">ありがとう ・ merci ・ cảm ơn ・ thank you for visiting</span>
        </div>
      </Reveal>
    </footer>
  )
}
