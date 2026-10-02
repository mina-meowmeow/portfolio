import { leadership } from '@/data/leadership'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

export default function Leadership() {
  return (
    <section id="leadership" style={{ background: 'var(--paper-warm)', position: 'relative', overflow: 'hidden' }}>
      <span className="tape" style={{ top: 8, left: '8%', transform: 'rotate(-5deg)' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Leadership</h2>
          <p className="caption">リーダーシップ — engagement associatif</p>
        </Reveal>

        <RevealGroup as="ol" className="timeline" style={{ listStyle: 'none', margin: 0, padding: '0 0 0 2.2rem' }} stagger={0.15}>
          {leadership.map((role) => (
            <RevealItem as="li" className="tl-item lead" key={role.id}>
              <span className="tl-node" aria-hidden="true" />
              <div className="tl-card">
                <div className="tl-head">
                  <p className="tl-role">{role.role}</p>
                  <span className="tl-date">{role.dateLabel}</span>
                </div>
                <p className="tl-org">{role.org}</p>
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
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
