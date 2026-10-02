import { Reveal } from '@/components/ui/reveal'

export default function CTA() {
  return (
    <section id="cta" className="cta-frame">
      <span className="tape" style={{ top: 18, left: '10%', transform: 'rotate(-6deg)', zIndex: 3 }} aria-hidden="true" />
      <span className="tape" style={{ top: 18, right: '10%', transform: 'rotate(5deg)', zIndex: 3 }} aria-hidden="true" />
      <div className="cta-border" aria-hidden="true" />
      <Reveal as="div" className="wrap cta-inner">
        <h2 className="cta-line">
          Let's create something <span className="accent">special</span>
        </h2>
        <svg className="cta-arrow" viewBox="0 0 90 60" aria-hidden="true">
          <path d="M4 6c20 2 40 18 46 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 42l10 4-2-11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="caption" style={{ marginTop: '1rem' }}>
          お気軽にご連絡ください — n'hésitez pas à m'écrire — liên hệ với mình nhé
        </p>
      </Reveal>
      <div className="cta-border" aria-hidden="true" />
    </section>
  )
}
