'use client'

import Image from 'next/image'
import type { ArtSection as ArtSectionType, ImageData } from '@/lib/projectData'

interface ArtSectionProps {
  section: ArtSectionType
  index?: number
  isLast?: boolean
}

export default function ArtSection({ section, index = 0, isLast = false }: ArtSectionProps) {
  const { layout, images } = section
  const delay = Math.min(index * 0.08, 0.5)

  const wrapperClass = `fade-in-section w-full flex justify-center`
  const wrapperStyle = { 
    transitionDelay: `${delay}s`, 
    marginBottom: isLast ? '0' : '18%' 
  }

  // Helper to get filename from string or ImageData
  const getFilename = (item: string | ImageData): string => {
    return typeof item === 'string' ? item : item.filename
  }

  // Helper to check if border should be shown
  const shouldShowBorder = (item: string | ImageData): boolean => {
    return typeof item === 'object' && item.showBorder === true
  }

  // Helper to get unique key
  const getKey = (item: string | ImageData, index: number): string => {
    return typeof item === 'string' ? item : `${item.filename}-${index}`
  }

  const img = (item: string | ImageData, showBorder?: boolean) => {
    const filename = getFilename(item)
    const hasBorder = showBorder ?? shouldShowBorder(item)
    
    return (
      <Image
        src={`/images/${filename}`}
        alt={filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')}
        width={1400}
        height={900}
        style={{ 
          width: '100%', 
          height: 'auto', 
          display: 'block',
          ...(hasBorder ? { border: '1px solid #eaebf1' } : {})
        }}
      />
    )
  }

  // ← declare titleEl here, once
  const titleEl = section.title ? (
  <p
    style={{
      fontFamily: "'Neue Montreal', sans-serif",
      fontSize: '45px',
      fontWeight: 200,
      color: '#72808b',
      textAlign: 'center',
      marginBottom: '15px',
      letterSpacing: '0em',
      /* - textTransform: 'uppercase', - */
      width: '100%',
    }}
  >
    {section.title}
  </p>
) : null

  // ── HERO ──
  if (layout === 'hero') {
    return (
      <div className={wrapperClass} style={{ ...wrapperStyle, marginBottom: '20%' }}>
        {titleEl}
      <div className="w-full max-w-[1400px]">{img(images[0])}</div>
      </div>
    )
  }

  // ── FULL ──
if (layout === 'full') {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="w-full max-w-[1400px]">
        {titleEl}
        <div>{img(images[0])}</div>
      </div>
    </div>
  )
}

  // ── CONTAINED ──
  if (layout === 'contained') {
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        {titleEl}
        <div className="w-full max-w-[1024px]">{img(images[0])}</div>
      </div>
    )
  }

  // ── DOUBLE ──
if (layout === 'double') {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      {titleEl}
      <div
        className="w-full max-w-[1400px]"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '35px' }}
      >
        {images.map((item, idx) => (
          <div key={getKey(item, idx)}>{img(item)}</div>
        ))}
      </div>
    </div>
  )
}

  

  // ── TRIPLE-BIG: 3-column grid ──
 if (layout === 'triple-big') {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="w-full max-w-[1400px]">
        {titleEl}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '35px',
          }}
        >
          {images.map((item, idx) => (
            <div key={getKey(item, idx)}
            style={{
            borderRadius: '0px',
            overflow: 'hidden',
            }}
            >{img(item)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── QUAD: 4-column grid ──
if (layout === 'quad') {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="w-full max-w-[1400px]">
        {titleEl}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '35px',
          }}
        >
          {images.map((item, idx) => (
            <div
              key={getKey(item, idx)}
              style={{
                borderRadius: '0px',
                overflow: 'hidden',
              }}
            >
              {img(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

  // ── SIX: 2×3 grid ──
  if (layout === 'six') {
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className="w-full max-w-[1400px]">
          {titleEl}
          <div 
            style={{ 
              backgroundColor: '#000000',
              padding: '14px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '35px',
              }}
              className="portfolio-six-grid"
            >
              {images.map((item, idx) => (
                <div key={getKey(item, idx)}>
                  {img(item)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .portfolio-six-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .portfolio-six-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
      </div>
    )
  }

// ── EIGHT: 4x2 grid ──
if (layout === 'eight') {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="w-full max-w-[1400px]">
        {titleEl}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '35px',
          }}
        >
          {images.map((item, idx) => (
            <div key={getKey(item, idx)}
            style={{
            borderRadius: '0px',
            overflow: 'hidden',
            }}
            
            >{img(item)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

  // ── FOUR: 2×2 grid ──
  if (layout === 'four') {
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className="w-full max-w-[1400px]">
          {titleEl}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '35px',
            }}
            className="portfolio-four-grid"
          >
            {images.map((item, idx) => (
              <div
                key={getKey(item, idx)}
                style={{
                  borderRadius: '0px',
                  overflow: 'hidden',
                }}
              >
                {img(item)}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            .portfolio-four-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
      </div>
    )
  }

  // ── SIX-TALL: 3×2 grid (vertical orientation) ──
  if (layout === 'six-tall') {
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className="w-full max-w-[1024px]">
          {titleEl}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '35px',
            }}
            className="portfolio-six-tall-grid"
          >
            {images.map((item, idx) => (
              <div
                key={getKey(item, idx)}
                style={{
                  borderRadius: '0px',
                  overflow: 'hidden',
                }}
              >
                {img(item)}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            .portfolio-six-tall-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
      </div>
    )
  }

  // ── SIX-HORIZONTAL: 1×6 grid (horizontal orientation) ──
  if (layout === 'six-horizontal') {
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className="w-full max-w-[1400px]">
          {titleEl}
          <div 
            style={{ 
              backgroundColor: '#000000',
              padding: '14px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '35px',
              }}
              className="portfolio-six-horizontal-grid"
            >
              {images.map((item, idx) => (
                <div
                  key={getKey(item, idx)}
                  style={{
                    position: 'relative',
                    borderRadius: '0px',
                    overflow: 'hidden',
                  }}
                >
                  {img(item)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1280px) {
            .portfolio-six-horizontal-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            .portfolio-six-horizontal-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .portfolio-six-horizontal-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
      </div>
    )
  }

  // ── FALLBACK ──
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      {titleEl}
      <div className="w-full max-w-[1400px]">{img(images[0] ?? 'image')}</div>
    </div>
  )
}
