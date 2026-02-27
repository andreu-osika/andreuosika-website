'use client'

import Link from 'next/link'

interface NavItem {
  slug: string
  label: string
}

interface ProjectsNavProps {
  navItems: NavItem[]
}

export default function ProjectsNav({ navItems }: ProjectsNavProps) {
  return (
    <>
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

      <style jsx>{`
        @media (max-width: 500px) {
          .menu-item-link {
            font-size: 24px !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </>
  )
}
