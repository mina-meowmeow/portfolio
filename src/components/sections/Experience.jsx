import { experience } from '@/data/experience'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

// Most recent first, with date labels instead of numbered steps.
export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
      <span className="tape" style={{ top: 8, right: '9%', transform: 'rotate(6deg)' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Work Experience</h2>
          <p className="caption">職務経歴 — expérience professionnelle</p>
        </Reveal>

        <RevealGroup as="ol" className="timeline" style={{ listStyle: 'none', margin: 0, padding: '0 0 0 2.2rem' }} stagger={0.08}>
          {experience.map((role) => (
            <RevealItem as="li" className="tl-item" key={role.id}>
              <span className="tl-node" aria-hidden="true" />
              <div className="tl-card">
                <div className="tl-head">
                  <p className="tl-role">{role.role}</p>
                  <span className="tl-date">{role.dateLabel}</span>
                </div>
                <p className="tl-org">{role.company}</p>
                <ul className="tl-bullets">
                  {role.bullets.map((b, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="tags" style={{ marginTop: '0.9rem' }}>
                  {role.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
