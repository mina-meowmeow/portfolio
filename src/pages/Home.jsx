import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Profile from '@/components/sections/Profile'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Leadership from '@/components/sections/Leadership'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Profile />
      <Projects />
      <Skills />
      <Experience />
      <Leadership />
      <CTA />
    </>
  )
}
