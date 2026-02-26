'use client'

import Image from 'next/image'
import GradientBar from '@/components/GradientBar'
import BackArrow from '@/components/BackArrow'
import FadeInObserver from '@/components/FadeInObserver'
import { ENDORSEMENTS } from '@/lib/projectData'

export default function EndorsementsPage() {
  return (
    <main
      style={{
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <BackArrow href="/" />

      <div
        className="endorsements-container"
        style={{
          width: '100%',
          paddingTop: '70px',
          paddingBottom: '120px',
          paddingLeft: '80px',
          paddingRight: '80px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Endorsement entries */}
        <div style={{ width: '100%' }}>
          {ENDORSEMENTS.map((endorsement, i) => (
            <div
              key={`${endorsement.name}-${i}`}
              className="fade-in-section endorsement-entry"
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                marginBottom: i < ENDORSEMENTS.length - 1 ? '120px' : '0',
              }}
            >
              {/* Header: Photo + Name/Role + Year */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '28px',
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    flexShrink: 0,
                    marginRight: '20px',
                    position: 'relative',
                  }}
                >
                  {endorsement.photo ? (
                    <Image
                      src={`/images/${endorsement.photo}`}
                      alt={endorsement.name}
                      width={60}
                      height={60}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#1e2a33',
                      }}
                    />
                  )}
                </div>

                {/* Name and Role */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '22px',
                      fontWeight: 300,
                      color: '#fff',
                      lineHeight: '1.3',
                      marginBottom: '0',
                    }}
                  >
                    {endorsement.name} - {endorsement.role}
                  </p>
                </div>

                {/* Year */}
                <div
                  style={{
                    flexShrink: 0,
                    marginLeft: '20px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '22px',
                      fontWeight: 300,
                      color: '#3B4752',
                      lineHeight: '1.3',
                    }}
                  >
                    {endorsement.year}
                  </p>
                </div>
              </div>

              {/* Divider line */}
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#2a2a2a',
                  marginBottom: '10px',
                }}
              />

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '28px',
                  fontWeight: 300,
                  lineHeight: '1.6',
                  color: '#fff',
                }}
                dangerouslySetInnerHTML={{
                  __html: endorsement.quote.replace(/\n/g, '<br/>')
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .endorsements-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>

      <GradientBar
        label="Andreu Osika"
        action="email"
        href="mailto:ao@andreuosika.com?subject=Hello%20Andreu!"
      />
      <FadeInObserver />
    </main>
  )
}
