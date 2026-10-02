import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export default function ProjectFilter({ tags, active, onChange }) {
  return (
    <ToggleGroup
      type="multiple"
      value={active}
      onValueChange={onChange}
      aria-label="Filter projects by tool"
    >
      {tags.map((tag) => (
        <ToggleGroupItem key={tag} value={tag}>
          {tag}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
