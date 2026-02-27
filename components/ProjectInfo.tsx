// ============================================================
// PROJECT INFO
// Container: 1240px | Deliverables: 496px | Details: 744px
// At 991px: stacks vertically
// At 767px: 20px side margins
// Type size never changes
// ============================================================

interface ProjectInfoProps {
  deliverables: string[]
  description: string
  darkText?: boolean
}

export default function ProjectInfo({
  deliverables,
  description,
  darkText = false,
}: ProjectInfoProps) {
  const labelColor = darkText ? '#a4b0ba' : '#72808b'
  const textColor = darkText ? '#34424b' : '#fff'

  // Parse description for subheaders (marked with ##) and paragraphs
  const contentBlocks = description
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith('## ')) {
        return { type: 'subheader', content: block.replace('## ', '') }
      }
      return { type: 'paragraph', content: block }
    })

  return (
    <>
      <div className="fade-in-section project-info-wrap">
        <div className="project-info-inner">

          {/* ── Deliverables ── */}
          {deliverables.length > 0 && (
            <div className="project-deliverables">
              <p style={{ color: labelColor }} className="project-info-label">
                Deliverables
              </p>
              {deliverables.map((d) => (
                <div key={d} style={{ color: textColor }} className="project-info-text">
                  {d}
                </div>
              ))}
            </div>
          )}

          {/* ── Details ── */}
          <div className="project-details">
            <p style={{ color: labelColor }} className="project-info-label">
              Details
            </p>
            {contentBlocks.map((block, i) => {
              if (block.type === 'subheader') {
                return (
                  <h3 key={i} className="project-info-subheader">
                    {block.content}
                  </h3>
                )
              }
              return (
                <div 
                  key={i} 
                  style={{ color: textColor }} 
                  className="project-info-text project-info-para"
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              )
            })}
          </div>

        </div>
      </div>

      <style>{`
   .project-info-wrap {
  width: 100%;
  margin-bottom: 80px;
}

.project-info-inner {
  width: calc(100% - 160px);
  max-width: 1240px;
  margin: 280px auto 0;
  display: flex;
  flex-direction: row;
}

.project-deliverables {
  width: 40%;
  flex-shrink: 1;
  padding-right: 80px;
}

.project-details {
  width: 60%;
  flex-shrink: 1;
}

        .project-info-label {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .project-info-text {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 28px;
          font-weight: 200;
          line-height: 50px;
        }

        .project-info-para {
          margin-bottom: 32px;
        }

        .project-info-para strong {
          font-weight: 600;
        }

        .project-info-para ul {
          list-style-type: disc;
          list-style-position: outside;
          margin-top: 16px;
          margin-bottom: 16px;
          margin-left: 0;
          padding-left: 18px;
        }

        .project-info-para li {
          padding-left: 8px;
          margin-bottom: 12px;
          line-height: 40px;
          font-size: 27px;
        }

        .project-info-para li::marker {
          font-size: 20px;
        }

        .project-info-subheader {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 20px;
          font-weight: 600;
          font-style: italic;
          color: #9977ea;
          margin-top: 48px;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .project-info-subheader:first-of-type {
          margin-top: 0;
        }

  @media (max-width: 1104px) {
  .project-info-inner {
    flex-direction: column;
    gap: 48px;
    margin-top: 80px;
  }
  .project-deliverables {
    width: 100%;
    padding-right: 0;
  }
  .project-details {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .project-info-inner {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* ── 767px: 20px side margins ── */
@media (max-width: 767px) {
  .project-info-inner {
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* ── 500px: reduce font size to 24px (except labels) ── */
@media (max-width: 500px) {
  .project-info-text {
    font-size: 24px !important;
    line-height: 1.5 !important;
  }
  
  .project-info-para li {
    font-size: 24px !important;
    line-height: 1.5 !important;
  }
}
      `}</style>
    </>
  )
}
