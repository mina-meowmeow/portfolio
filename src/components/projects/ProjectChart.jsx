import { useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceLine,
  LabelList,
  Cell,
} from 'recharts'

const SEAL = '#B33A33'
const INK_SOFT = '#5B5E66'
const GREY = 'rgba(32,35,44,0.22)'
const GRID = 'rgba(32,35,44,0.08)'
const AXIS = { fontSize: 11, fill: INK_SOFT }

const TOOLTIP_STYLE = {
  borderRadius: 10,
  border: '1px solid rgba(32,35,44,0.12)',
  fontSize: 12,
}

const fmt = (v, chart) => {
  if (typeof v !== 'number') return v
  const num = v.toLocaleString('en-US', { maximumFractionDigits: chart.decimals ?? 1 })
  return `${chart.prefix ?? ''}${num}${chart.unit ?? ''}`
}

// A project has a list of charts, switched with tabs. Each has a short note on what it shows.
export default function ProjectChart({ charts }) {
  const [active, setActive] = useState(0)
  if (!charts || charts.length === 0) return null
  const chart = charts[Math.min(active, charts.length - 1)]

  return (
    <div>
      {charts.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Charts">
          {charts.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className="tag-toggle"
              data-state={i === active ? 'on' : 'off'}
              onClick={() => setActive(i)}
            >
              {c.tab}
            </button>
          ))}
        </div>
      )}

      <h4 className="chart-title">{chart.title}</h4>
      <ChartBody chart={chart} key={chart.id} />
      {chart.source && <p className="chart-source">{chart.source}</p>}
      {chart.why && (
        <p className="chart-why">
          <span>Why it matters.</span> {chart.why}
        </p>
      )}
    </div>
  )
}

function ChartBody({ chart }) {
  switch (chart.type) {
    case 'bar':
      return <SingleBar chart={chart} />
    case 'grouped-bar':
      return <GroupedBar chart={chart} />
    case 'combo':
      return <Combo chart={chart} />
    case 'line':
      return <LineSeries chart={chart} />
    default:
      return null
  }
}

function refLineProps(chart, layoutVertical) {
  if (!chart.refLine) return null
  const common = {
    stroke: SEAL,
    strokeDasharray: '4 4',
    label: { value: chart.refLine.label, fill: SEAL, fontSize: 11, position: 'insideTopRight' },
  }
  return layoutVertical ? { x: chart.refLine.value, ...common } : { y: chart.refLine.value, ...common }
}

function SingleBar({ chart }) {
  const sideways = chart.layout === 'sideways'
  const highlight = chart.highlight ?? [chart.data.length - 1]
  const height = sideways ? Math.max(180, chart.data.length * 38 + 30) : 240
  const ref = refLineProps(chart, sideways)

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chart.data}
          layout={sideways ? 'vertical' : 'horizontal'}
          margin={{ top: 16, right: sideways ? 44 : 12, left: sideways ? 8 : -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={sideways} horizontal={!sideways} />
          {sideways ? (
            <>
              <XAxis type="number" domain={chart.domain} tick={AXIS} axisLine={false} tickLine={false} tickFormatter={(v) => fmt(v, chart)} />
              <YAxis type="category" dataKey="label" width={chart.labelWidth ?? 110} tick={AXIS} axisLine={false} tickLine={false} />
            </>
          ) : (
            <>
              <XAxis dataKey="label" tick={AXIS} axisLine={false} tickLine={false} interval={0} />
              <YAxis domain={chart.domain} tick={AXIS} axisLine={false} tickLine={false} tickFormatter={(v) => fmt(v, chart)} />
            </>
          )}
          <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v) => fmt(v, chart)} cursor={{ fill: 'rgba(32,35,44,0.04)' }} />
          {ref && <ReferenceLine {...ref} />}
          <Bar dataKey="value" name={chart.valueLabel ?? 'Value'} radius={sideways ? [0, 6, 6, 0] : [6, 6, 0, 0]}>
            {chart.data.map((_, i) => (
              <Cell key={i} fill={highlight.includes(i) ? SEAL : GREY} />
            ))}
            <LabelList
              dataKey="value"
              position={sideways ? 'right' : 'top'}
              formatter={(v) => fmt(v, chart)}
              style={{ fontSize: 11, fill: INK_SOFT }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function GroupedBar({ chart }) {
  const colors = [GREY, SEAL]
  const ref = refLineProps(chart, false)
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chart.data} margin={{ top: 16, right: 12, left: -10, bottom: 0 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
          <XAxis dataKey="label" tick={AXIS} axisLine={false} tickLine={false} interval={0} />
          <YAxis domain={chart.domain} tick={AXIS} axisLine={false} tickLine={false} tickFormatter={(v) => fmt(v, chart)} />
          <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v) => fmt(v, chart)} cursor={{ fill: 'rgba(32,35,44,0.04)' }} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: INK_SOFT }} />
          {ref && <ReferenceLine {...ref} />}
          {chart.series.map((s, i) => (
            <Bar key={s.key} dataKey={s.key} name={s.label} fill={colors[i % colors.length]} radius={[5, 5, 0, 0]}>
              <LabelList dataKey={s.key} position="top" formatter={(v) => fmt(v, chart)} style={{ fontSize: 10, fill: INK_SOFT }} />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Bars on the left axis and a line on the right, for two measures on different scales.
function Combo({ chart }) {
  const barFmt = (v) => fmt(v, chart)
  const lineFmt = (v) => fmt(v, { unit: chart.lineUnit, prefix: chart.linePrefix, decimals: chart.lineDecimals ?? chart.decimals })
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chart.data} margin={{ top: 16, right: 4, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
          <XAxis dataKey="label" tick={AXIS} axisLine={false} tickLine={false} interval={0} />
          <YAxis yAxisId="left" domain={chart.domain} tick={AXIS} axisLine={false} tickLine={false} tickFormatter={barFmt} />
          <YAxis yAxisId="right" orientation="right" domain={chart.lineDomain} tick={{ ...AXIS, fill: SEAL }} axisLine={false} tickLine={false} tickFormatter={lineFmt} />
          <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: 'rgba(32,35,44,0.04)' }} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: INK_SOFT }} />
          <Bar yAxisId="left" dataKey="value" name={chart.valueLabel} fill={GREY} radius={[5, 5, 0, 0]}>
            <LabelList dataKey="value" position="top" formatter={barFmt} style={{ fontSize: 10, fill: INK_SOFT }} />
          </Bar>
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="line"
            name={chart.lineLabel}
            stroke={SEAL}
            strokeWidth={2.5}
            dot={{ r: 4, fill: SEAL }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

function LineSeries({ chart }) {
  return (
    <div className="w-full h-60">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chart.data} margin={{ top: 16, right: 16, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="label" tick={AXIS} axisLine={false} tickLine={false} interval={0} />
          <YAxis domain={chart.domain} tick={AXIS} axisLine={false} tickLine={false} tickFormatter={(v) => fmt(v, chart)} />
          <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v) => fmt(v, chart)} />
          {chart.refLine && (
            <ReferenceLine y={chart.refLine.value} stroke={SEAL} strokeDasharray="4 4" label={{ value: chart.refLine.label, fill: SEAL, fontSize: 11, position: 'insideTopRight' }} />
          )}
          <Line
            type="monotone"
            dataKey="value"
            name={chart.valueLabel ?? 'Value'}
            stroke={SEAL}
            strokeWidth={2.5}
            dot={{ r: 4, fill: SEAL }}
            activeDot={{ r: 6 }}
          >
            <LabelList dataKey="value" position="top" formatter={(v) => fmt(v, chart)} style={{ fontSize: 10, fill: INK_SOFT }} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
