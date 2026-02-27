import type { Metadata } from 'next'
import GradientBar from '@/components/GradientBar'
import FadeInObserver from '@/components/FadeInObserver'
import ProjectsNav from '@/components/ProjectsNav'
import { PROJECT_ORDER, PROJECTS } from '@/lib/projectData'

export const metadata: Metadata = {
  title: 'Projects — Andreu Osika',
  description:
    'Portfolio of Andreu Osika — digital product designer based in San Francisco specializing in branding, experience design, and design systems.',
}

const navItems = PROJECT_ORDER.map((slug) => {
  const p = PROJECTS.find((x) => x.slug === slug)
  return { slug, label: p?.title ?? slug }
})

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <ProjectsNav navItems={navItems} />
      <GradientBar label="Andreu Osika" action="email" href="mailto:ao@andreuosika.com?subject=Hello%20Andreu!" labelHref="/" />
      <FadeInObserver />
    </main>
  )
}
