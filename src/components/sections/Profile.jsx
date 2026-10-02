import { profile } from '@/data/profile'
import { site } from '@/data/site'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

function CheckIcon({ done }) {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      {done && (
        <path d="M5 10l3.2 3.2L15 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

export default function Profile() {
  return (
    <section id="profile" style={{ position: 'relative', overflow: 'hidden', background: 'var(--white)' }}>
      <span className="tape" style={{ top: 10, right: '8%', transform: 'rotate(7deg)' }} aria-hidden="true" />
      <div className="wrap">
        <RevealGroup as="div" className="profile-grid" stagger={0.12}>
          <div>
            <RevealItem as="div" className="profile-item">
              <span className="pill-label">Concept</span>
              <p className="quote">
                {profile.concept.en}
                <span className="marker">{profile.concept.marker}</span>
                {profile.concept.end}
                <span className="fr">{profile.concept.fr}</span>
              </p>
            </RevealItem>
            <RevealItem as="div" className="profile-item">
              <span className="pill-label">Approach</span>
              <p>{profile.approach}</p>
            </RevealItem>
            <RevealItem as="div" className="profile-item" style={{ position: 'relative' }}>
              <span className="pill-label">Mood</span>
              <div className="check-list">
                {profile.mood.map((m) => (
                  <span key={m.text} className={`check-item${m.done ? ' done' : ''}`}>
                    <CheckIcon done={m.done} />
                    {m.text}
                  </span>
                ))}
              </div>
            </RevealItem>
          </div>

          <div>
            <RevealItem as="div" className="profile-item">
              <span className="pill-label">Focus</span>
              <p>{profile.focus}</p>
            </RevealItem>
            <RevealItem as="div" className="profile-item" style={{ position: 'relative' }}>
              <span className="pill-label">Languages</span>
              <div className="lang-row">
                {[...site.languagesSpoken, ...site.languagesCode].map((lang) => (
                  <div className="lang-line" key={lang.code}>
                    <span className="name">{lang.label}</span>
                    {lang.greet && <span className={`greet${lang.isCode ? ' code' : ''}`}>{lang.greet}</span>}
                  </div>
                ))}
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
