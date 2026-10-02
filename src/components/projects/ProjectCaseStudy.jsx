import { ExternalLink, Database } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import ProjectChart from '@/components/projects/ProjectChart'

// A field can be a string or an array of strings (shown as a list). Missing fields are skipped.
const FIELDS = [
  ['summary', 'Summary'],
  ['context', 'Context & my role'],
  ['problem', 'Problem'],
  ['data', 'Data'],
  ['approach', 'Approach'],
  ['findings', 'What the data showed'],
  ['decision', 'What I would do with it'],
  ['limits', 'Limits & honest caveats'],
]

function FieldBody({ value }) {
  if (Array.isArray(value)) {
    return (
      <ul className="case-list">
        {value.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }
  return <>{value}</>
}

export default function ProjectCaseStudy({ project, open, onOpenChange }) {
  if (!project) return null
  const { caseStudy, links } = project
  const hasLinks = links && (links.github || links.live || links.dataset)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent style={{ background: 'var(--paper)' }}>
        <DialogHeader>
          <p className="caption" style={{ marginBottom: '0.2rem' }}>{project.kicker}</p>
          <DialogTitle style={{ fontFamily: 'var(--sans)', fontWeight: 600 }}>{project.title}</DialogTitle>
          <DialogDescription style={{ color: 'var(--seal)', fontWeight: 600 }}>
            {project.impact}
          </DialogDescription>
          <div className="tags" style={{ paddingTop: '0.25rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 flex flex-col gap-5">
          {hasLinks && (
            <div className="flex flex-wrap gap-4 text-sm">
              {links.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-soft)' }} className="inline-flex items-center gap-1.5">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              )}
              {links.live && (
                <a href={links.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-soft)' }} className="inline-flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" /> Live dashboard
                </a>
              )}
              {links.dataset && (
                <a href={links.dataset} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-soft)' }} className="inline-flex items-center gap-1.5">
                  <Database className="h-4 w-4" /> Dataset
                </a>
              )}
            </div>
          )}

          {project.charts && (
            <div className="case-chart-frame">
              <ProjectChart charts={project.charts} />
            </div>
          )}

          <hr className="rule" />

          <dl className="grid gap-5">
            {FIELDS.filter(([key]) => caseStudy[key]).map(([key, label]) => (
              <div className="case-field" key={key}>
                <dt>{label}</dt>
                <dd>
                  <FieldBody value={caseStudy[key]} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </DialogContent>
    </Dialog>
  )
}
