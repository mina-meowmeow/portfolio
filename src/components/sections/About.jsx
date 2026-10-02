import { about } from '@/data/profile'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

// Uses `rotate` rather than a raw transform so motion can combine it with its entrance animation.
const NOTE_STYLES = [
  { rotate: -3, background: 'var(--butter)' },
  { rotate: 2, background: 'var(--sand)' },
  { rotate: -2, background: 'var(--sky-pale)' },
  { rotate: 3, background: 'var(--butter)' },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--paper-warm)', position: 'relative', overflow: 'hidden' }}>
      <span className="tape" style={{ top: 10, left: '8%', transform: 'rotate(-5deg)' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal as="div">
          <div className="section-head" style={{ position: 'relative' }}>
            <h2>A little about me</h2>
            <p className="caption">私について — quelques mots — đôi lời</p>
          </div>
          <p>{about.paragraphs[0]}</p>
          <p>{about.paragraphs[1]}</p>
        </Reveal>
        <Reveal as="div" delay={0.15}>
          <figure className="hanko">
            <img className="hanko-img" src={about.hanko.src} alt="Hanko stamp reading 范明河" />
            <svg className="hanko-caption-arrow" viewBox="0 0 30 26" aria-hidden="true">
              <path d="M15 2c-3 6-3 12 0 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M9 16l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <figcaption className="hanko-caption">{about.hanko.caption}</figcaption>
          </figure>
          <p className="quote">
            {about.quote}
            <span className="fr">{about.quoteAttribution}</span>
          </p>
          <RevealGroup as="div" className="notes-grid" stagger={0.1}>
            {about.notes.map((note, i) => (
              <RevealItem
                as="div"
                key={note}
                className="sticky-note"
                style={NOTE_STYLES[i % NOTE_STYLES.length]}
              >
                {note}
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  )
}
