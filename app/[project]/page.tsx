import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import GradientBar from '@/components/GradientBar'
import BackArrow from '@/components/BackArrow'
import ArtSection from '@/components/ArtSection'
import ProjectInfo from '@/components/ProjectInfo'
import FadeInObserver from '@/components/FadeInObserver'
import { getProject, getNextProject, getAllSlugs } from '@/lib/projectData'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ project: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>
}): Promise<Metadata> {
  const { project: slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Andreu Osika`,
    description: project.description.slice(0, 160).replace(/\n/g, ' '),
  }
}

const BG_COLORS: Record<string, string> = {
  black: '#000000',
  lightGrey: '#fafcff',
  white: '#ffffff',
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>
}) {
  const { project: slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const nextProject = getNextProject(slug)
  const bgColor = BG_COLORS[project.bgTheme]
  const isDarkBg = project.bgTheme === 'black'

  return (
    <main style={{ backgroundColor: bgColor, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <BackArrow href="/projects" theme={isDarkBg ? 'dark' : 'light'} />
      <div
        className="w-full flex flex-col items-center" style={{
          maxWidth: '1400px',
          paddingLeft: '0px',
          paddingRight: '0px',
          paddingTop: '30px',
          paddingBottom: '0px',
  }}
>
        {project.sections.map((section, i) => (
          <ArtSection key={i} section={section} index={i} isLast={i === project.sections.length - 1} />
        ))}
        {(project.deliverables.length > 0 || project.description) && (
          <ProjectInfo deliverables={project.deliverables} description={project.description} darkText={!isDarkBg} />
        )}
      </div>
      <GradientBar
        label={project.title}
        action="arrow"
        href={nextProject ? `/${nextProject.slug}` : '/projects'}
      />
      <FadeInObserver />
    </main>
  )
}