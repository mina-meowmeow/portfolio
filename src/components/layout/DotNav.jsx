import useActiveSection from '@/hooks/useActiveSection'

const LINKS = [
  { href: '#top', id: 'top', label: 'Top' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#profile', id: 'profile', label: 'Profile' },
  { href: '#projects', id: 'projects', label: 'Work' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#leadership', id: 'leadership', label: 'Leadership' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

// The CTA section has no dot of its own, so it counts as "contact".
const IDS = [...LINKS.map((l) => l.id), 'cta']

export default function DotNav() {
  const rawActiveId = useActiveSection(IDS)
  const activeId = rawActiveId === 'cta' ? 'contact' : rawActiveId

  return (
    <nav className="dot-nav" aria-label="Page sections">
      {LINKS.map((l) => (
        <a key={l.id} href={l.href} data-label={l.label} className={activeId === l.id ? 'active' : ''} aria-label={l.label} />
      ))}
    </nav>
  )
}
