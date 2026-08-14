import type { Metadata } from 'next'
import Link from 'next/link'
import GradientBar from '@/components/GradientBar'

export const metadata: Metadata = {
  title: 'Andreu Osika — Digital Product Designer',
  description:
    'Digital product designer helping innovation teams at healthcare and pet health companies accelerate 0-to-1 product development with 20+ years of design expertise and AI-augmented execution.',
}

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh', position: 'relative' }}>
      <div className="homepage-inner">
        {/* Left column - Name */}
        <div>
          <Link href="/projects" className="name-with-arrow">
            <h1
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '32px',
                fontWeight: 200,
                fontStyle: 'italic',
                color: '#fff',
                lineHeight: '1.2',
              }}
            >
              Andreu Osika
            </h1>
            <svg
              className="home-arrow"
              width="60"
              height="44"
              viewBox="0 0 60 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56.2345 22.9672L35.7673 43.5H38.5974L60 22.0974L38.4974 0.482758H35.6743L56.1185 21.032H0V22.9672H56.2345Z"
              />
            </svg>
          </Link>
        </div>

        {/* Right column - Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          {/* Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <p
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '28px',
                fontWeight: 200,
                lineHeight: '1.5',
                color: '#fff',
                margin: 0,
              }}
            >
              I run a one-person design studio in San Francisco. Brand identity, digital products,
              and websites, delivered by the person you hire. Twenty plus years of design experience combined 
              with AI-augmented execution means enterprise quality work on accelerated timelines: concept
              to finished product in weeks rather than months.
            </p>

            <p
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '28px',
                fontWeight: 200,
                lineHeight: '1.5',
                color: '#fff',
                margin: 0,
              }}
            >
              My background includes an MFA in Industrial Design from RISD, a BFA in Graphic Design from Illinois, 
              and published work in Communication Arts, ID Magazine, and Graphis. Two decades of senior design work 
              at Nokia, Yahoo, design system leadership at Achieve and Mursion, and currently a wonderful partnership
              with MARS Pet Health productizing AI diagnostics across eight tools, four divisions, 
              ten brands, and twenty-seven markets. The hard part here is not the scale. It's making model output 
              into something a pet-parent or veterinarian can actually use and trust.
            </p>

            <p
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '28px',
                fontWeight: 200,
                lineHeight: '1.5',
                color: '#fff',
                margin: 0,
              }}
            >
              Whether you need a brand identity built from a unique perspective and fesh positioning, 
              a website designed and shipped, an on-brand design system your product teams can efficiently implement, 
              or an ongoing design partner, I bring the speed of AI-augmented tools with the judgment and craft of an experienced designer.
            </p>

            <p
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '28px',
                fontWeight: 200,
                lineHeight: '1.5',
                color: '#fff',
                margin: 0,
              }}
            >
              I've been fortunate to collaborate with remarkable teams and leaders throughout my career.<br/>
              <br/>
              Read their endorsements{' '}
              <Link href="/endorsements" className="endorsements-link">
                here
              </Link>
              .
              <br/>
              <br/>
              <br/>
            </p>
          </div>
        </div>
      </div>

      <GradientBar label="Andreu Osika" action="email" hideSpacer />

      <style>{`
        .homepage-inner {
          width: calc(100% - 160px);
          max-width: 1240px;
          margin: 0 auto 160px;
          padding-top: 60px;
          display: flex;
          flex-direction: row;
        }

        .homepage-inner > div:first-child {
          width: 40%;
          flex-shrink: 0;
          padding-right: 80px;
        }

        .homepage-inner > div:last-child {
          width: 60%;
          flex-shrink: 1;
          margin-top: 4px;
        }

        .name-with-arrow {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          width: fit-content;
        }

        .name-with-arrow h1 {
          margin: 0;
        }

        .home-arrow {
          margin-top: 4px;
        }

        .home-arrow path {
          fill: #9977ea;
          transition: fill 0.3s ease;
        }

        .name-with-arrow:hover .home-arrow path {
          fill: #ffffff;
        }

        .endorsements-link {
          font-style: italic;
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .endorsements-link:hover {
          color: #9977ea;
        }

        @media (max-width: 1142px) {
          .homepage-inner {
            flex-direction: column;
            gap: 48px;
          }
          
          .homepage-inner > div:first-child {
            width: 100%;
            padding-right: 0;
          }
          
          .homepage-inner > div:last-child {
            width: 100%;
          }
        }

        @media (max-width: 767px) {
          .homepage-inner {
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 500px) {
          .homepage-inner > div:last-child p {
            font-size: 24px !important;
            line-height: 1.5 !important;
            padding-bottom: 20px !important;
          }
          
          .homepage-inner > div:last-child p:last-child {
            padding-bottom: 0px !important;
          }
        }
      `}</style>
    </main>
  )
}
