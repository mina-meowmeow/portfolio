import { site } from '@/data/site'
import { education } from '@/data/leadership'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <span className="side-text" aria-hidden="true">Telling a story · Raconter · 物語る · Kể chuyện</span>

      <div className="wrap">
        <div className="hero-top">
          <div style={{ position: 'relative' }}>
            <p className="hero-jp">はじめまして、ミン・ハーです</p>
            <h1 className="display">
              Hi, I'm
              <br />
              {site.name}.
            </h1>
            <p className="hero-role">
              I turn <strong>numbers into <span className="marker">narratives</span></strong> and
              ideas into interfaces. I'm a {site.role} based in {site.location}, graduating in
              August 2026 and open to internship and full-time roles.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn solid">
                See my work
              </a>
              <a href="#contact" className="btn ghost">
                Get in touch
              </a>
            </div>
          </div>

          <div className="avatar-wrap">
            <div className="avatar-blob" aria-hidden="true" />
            <span className="tape t1" aria-hidden="true" />
            <span className="tape t2" aria-hidden="true" />

            <svg className="badge" viewBox="0 0 140 140" aria-hidden="true">
              <path id="badgePath" fill="none" d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
              <text fontFamily="'Zen Kaku Gothic New', sans-serif" fontSize="10.5" letterSpacing="1.5" fill="var(--ink)">
                <textPath href="#badgePath" startOffset="0%">
                  DATA ・ DESIGN ・ 物語る ・ REPEAT ・{' '}
                </textPath>
              </text>
              <circle cx="70" cy="70" r="5" fill="var(--seal)" />
            </svg>

            <p className="bubble">
              currently reading
              <br />
              Norwegian Wood 🌲
            </p>

            <img className="avatar-img" src="/avatar.png" alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="hero-tagline">
          <span className="hand-label">Portfolio</span>
          <span className="hand-label">
            {education.school} — {education.degree}
          </span>
        </div>
      </div>
    </section>
  )
}
