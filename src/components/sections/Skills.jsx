import { skillGroups } from '@/data/skills'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--paper-warm)', position: 'relative', overflow: 'hidden' }}>
      <span className="tape" style={{ top: 8, left: '10%', transform: 'rotate(-4deg)' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Skills</h2>
          <p className="caption">スキル — proficiency, at a glance</p>
        </Reveal>

        <RevealGroup as="div" className="skills-grid" stagger={0.1}>
          {skillGroups.map((group) => (
            <RevealItem as="div" className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
