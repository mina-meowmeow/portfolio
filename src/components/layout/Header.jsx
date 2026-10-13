import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '@/data/site'
import useActiveSection from '@/hooks/useActiveSection'

const SECTION_LINKS = [
  { href: '#profile', id: 'profile', label: 'Profile' },
  { href: '#projects', id: 'projects', label: 'Work' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

// The CTA section has no link of its own, so it keeps "Contact" underlined.
const IDS = [...SECTION_LINKS.map((l) => l.id), 'cta']

export default function Header() {
  const [open, setOpen] = useState(false)
  const rawActiveId = useActiveSection(IDS)
  const activeId = rawActiveId === 'cta' ? 'contact' : rawActiveId
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isBlog = pathname.startsWith('/blog')

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header>
      <div className="wrap headbar">
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

        <nav aria-label="Section">
          {isHome ? (
            <>
              {SECTION_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={activeId === l.id ? 'active' : ''}>
                  {l.label}
                </a>
              ))}
              <Link to="/blog" className={isBlog ? 'active' : ''}>
                Blog
              </Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/blog" className={isBlog ? 'active' : ''}>
                Blog
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center" style={{ gap: '0.9rem', flex: 'none' }}>
          <a
            href={site.resumeUrl}
            download="Minh-Ha-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost inline-flex"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
          >
            <span className="hidden min-[420px]:inline">Adopt my resume</span>
            <span className="inline min-[420px]:hidden">Resume</span>
          </a>

          <button
            type="button"
            className="hidden max-[900px]:inline-flex items-center justify-center h-9 w-9 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/10"
            style={{ background: 'var(--paper)' }}
          >
            <div className="wrap flex flex-col py-3">
              {isHome ? (
                <>
                  {SECTION_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="py-2.5 text-sm"
                      style={{ color: 'var(--ink-soft)' }}
                    >
                      {l.label}
                    </a>
                  ))}
                  <Link
                    to="/blog"
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    Blog
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    Blog
                  </Link>
                </>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
