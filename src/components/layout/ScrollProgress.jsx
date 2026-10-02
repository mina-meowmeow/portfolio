import { motion, useScroll, useSpring } from 'motion/react'

// Thin bar at the top of the page showing scroll progress.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div className="scroll-progress-fill" style={{ scaleX }} />
    </div>
  )
}
