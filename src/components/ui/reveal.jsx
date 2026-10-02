import { motion, useReducedMotion } from 'motion/react'

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.9, 0.35, 1] } },
}

// Fades and lifts an element once, the first time it scrolls into view.
export function Reveal({ as = 'div', delay = 0, y = 20, className, children, ...props }) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...props}>
        {children}
      </Plain>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.9, 0.35, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Staggers the entrance of its RevealItem children.
export function RevealGroup({ as = 'div', className, stagger = 0.08, children, ...props }) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...props}>
        {children}
      </Plain>
    )
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Child of RevealGroup. Takes its animation state from the parent.
export function RevealItem({ as = 'div', className, children, ...props }) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...props}>
        {children}
      </Plain>
    )
  }

  return (
    <Component className={className} variants={itemVariants} {...props}>
      {children}
    </Component>
  )
}
