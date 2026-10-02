import { motion } from 'motion/react'
import ProjectMiniChart from '@/components/projects/ProjectMiniChart'

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <motion.div
        className="project-card"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <p className="kicker">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p className="summary">{project.summary}</p>
        <ProjectMiniChart chart={project.charts?.[project.cardChart ?? 0]} />
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="impact">{project.impact}</p>
      </motion.div>
    </motion.div>
  )
}
