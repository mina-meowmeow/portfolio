import { ResponsiveContainer, LineChart, Line, BarChart, Bar, Cell } from 'recharts'

const SEAL = '#B33A33'
const GREY = 'rgba(32,35,44,0.18)'

// Small chart on the project card: the first series of the lead chart, no axes.
export default function ProjectMiniChart({ chart }) {
  if (!chart) return null

  const key = chart.type === 'grouped-bar' ? chart.series[chart.series.length - 1].key : 'value'

  if (chart.type === 'line') {
    return (
      <div className="project-mini-chart" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart.data} margin={{ top: 4, right: 2, left: 2, bottom: 0 }}>
            <Line type="monotone" dataKey={key} stroke={SEAL} strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  const highlight = chart.highlight ?? [chart.data.length - 1]
  return (
    <div className="project-mini-chart" aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chart.data} margin={{ top: 4, right: 2, left: 2, bottom: 0 }}>
          <Bar dataKey={key} radius={[4, 4, 0, 0]} isAnimationActive={false}>
            {chart.data.map((_, i) => (
              <Cell key={i} fill={chart.type === 'grouped-bar' || highlight.includes(i) ? SEAL : GREY} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
