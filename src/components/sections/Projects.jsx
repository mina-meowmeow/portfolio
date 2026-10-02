import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projects, allTags } from '@/data/projects'
import ProjectFilter from '@/components/projects/ProjectFilter'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectCaseStudy from '@/components/projects/ProjectCaseStudy'

export default function Projects() {
  const [activeTags, setActiveTags] = useState([])
  const [openProject, setOpenProject] = useState(null)

  const filtered = useMemo(() => {
    if (activeTags.length === 0) return projects
    // OR filter: a project matches if it has at least one of the selected tags.
    return projects.filter((p) => p.tags.some((t) => activeTags.includes(t)))
  }, [activeTags])

  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
      <span className="tape" style={{ top: 8, left: '9%', transform: 'rotate(5deg)' }} aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <p className="caption">作品 — filter by tool, click a card for the full case study</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.4rem' }}>
          <ProjectFilter tags={allTags} active={activeTags} onChange={setActiveTags} />
          {activeTags.length > 0 && (
            <button type="button" className="hand-label" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setActiveTags([])}>
              clear filters
            </button>
          )}
        </div>

        <motion.div
          layout
          style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--ink-faint)', padding: '4rem 0' }}>
            No projects match those tags. Try clearing a filter.
          </p>
        )}
      </div>

      <ProjectCaseStudy
        project={openProject}
        open={!!openProject}
        onOpenChange={(open) => !open && setOpenProject(null)}
      />
    </section>
  )
}
