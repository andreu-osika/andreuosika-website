import type { Metadata } from 'next'
import Link from 'next/link'
import GradientBar from '@/components/GradientBar'
import FadeInObserver from '@/components/FadeInObserver'
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
      <nav className="fade-in-section menu-nav menu-wrap flex flex-col items-start" style={{ paddingTop: '50px' }}>
        {navItems.map(({ slug, label }, i) => {
          const isLast = i === navItems.length - 1
          const isFirst = i === 0
          const isSecond = i === 1
          
          return (
            <div key={slug}>
              {isFirst && (
                <p
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '20px',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    color: '#9977ea',
                    marginBottom: '0px',
                    letterSpacing: '0em',
                  }}
                >
                  Case Study
                </p>
              )}
              {isSecond && (
                <p
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '20px',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    color: '#9977ea',
                    marginBottom: '0px',
                    letterSpacing: '0em',
                    marginTop: '20px',
                  }}
                >
                  Portfolio Archive
                </p>
              )}
              <Link
                href={`/${slug}`}
                className="menu-item-link"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '80px',
                  fontStyle: 'italic',
                  fontWeight: 100,
                  lineHeight: '1.375',
                  marginBottom: isLast ? '0' : '18px',
                  whiteSpace: 'nowrap',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            </div>
          )
        })}
      </nav>

      <GradientBar label="Andreu Osika" action="email" href="mailto:ao@andreuosika.com?subject=Hello%20Andreu!" labelHref="/" />
      <FadeInObserver />
    </main>
  )
}
