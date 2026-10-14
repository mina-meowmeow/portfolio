import { Reveal } from '@/components/ui/reveal'

function SleepingCat() {
  return (
    <svg
      className="sleeping-cat"
      viewBox="0 0 240 150"
      width="240"
      height="150"
      role="img"
      aria-label="A cat curled up asleep"
    >
      <ellipse cx="120" cy="132" rx="90" ry="8" fill="currentColor" opacity="0.08" />
      {/* body */}
      <path
        d="M30 120 C20 80 60 50 110 52 C170 54 210 80 205 118 C204 128 190 132 170 132 L60 132 C42 132 32 128 30 120 Z"
        fill="var(--ink)"
      />
      {/* tail */}
      <path
        d="M200 122 C228 120 232 96 214 90"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* head */}
      <circle cx="62" cy="98" r="30" fill="var(--ink)" />
      <path d="M38 80 L40 56 L58 70 Z" fill="var(--ink)" />
      <path d="M86 80 L84 56 L66 70 Z" fill="var(--ink)" />
      <path d="M42 74 L43 63 L52 70 Z" fill="var(--seal)" opacity="0.6" />
      <path d="M82 74 L81 63 L72 70 Z" fill="var(--seal)" opacity="0.6" />
      {/* closed eyes */}
      <path d="M48 98 Q54 103 60 98" fill="none" stroke="var(--paper)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M66 98 Q72 103 78 98" fill="none" stroke="var(--paper)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M59 108 L63 108 L61 111 Z" fill="var(--seal)" />
      {/* paws */}
      <ellipse cx="58" cy="126" rx="14" ry="7" fill="var(--ink)" />
      <ellipse cx="84" cy="126" rx="14" ry="7" fill="var(--ink)" />
      {/* zzz */}
      <g fill="var(--ink-soft)" fontFamily="serif" fontWeight="700">
        <text className="zzz z1" x="96" y="60" fontSize="18">z</text>
        <text className="zzz z2" x="108" y="42" fontSize="24">z</text>
        <text className="zzz z3" x="124" y="20" fontSize="30">Z</text>
      </g>
    </svg>
  )
}

export default function Blog() {
  return (
    <section id="blog" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Reveal as="div" className="section-head">
          <h2>Blog</h2>
          <p className="caption">日記 — notes, in public</p>
        </Reveal>

        <Reveal as="div">
          <SleepingCat />
          <h3 style={{ marginTop: '1.5rem' }}>Under construction</h3>
          <p className="caption">Shh… the cat is sleeping. Posts are coming soon.</p>
        </Reveal>
      </div>
    </section>
  )
}
