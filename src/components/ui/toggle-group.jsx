import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cn } from '@/lib/utils'

const ToggleGroup = React.forwardRef(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex flex-wrap gap-2', className)}
    {...props}
  />
))
ToggleGroup.displayName = 'ToggleGroup'

const ToggleGroupItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item ref={ref} className={cn('tag-toggle', className)} {...props}>
    {children}
  </ToggleGroupPrimitive.Item>
))
ToggleGroupItem.displayName = 'ToggleGroupItem'

export { ToggleGroup, ToggleGroupItem }
