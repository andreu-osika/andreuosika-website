'use client'

import { useState } from 'react'
import Link from 'next/link'

type ActionType = 'plus' | 'arrow' | 'email'

interface GradientBarProps {
  label: string
  action?: ActionType
  href?: string
  labelHref?: string
  hideSpacer?: boolean
}

export default function GradientBar({
  label,
  action = 'arrow',
  href = '/',
  labelHref,
  hideSpacer = false,
}: GradientBarProps) {
  const [showCopied, setShowCopied] = useState(false)

  const handleEmailClick = async () => {
    const email = 'ao@andreuosika.com'
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
      } else {
        // Fallback for older browsers
        alert(`Email address: ${email}`)
      }
    } catch (err) {
      // Fallback if clipboard API fails
      alert(`Email address: ${email}`)
    }
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════
          GRADIENT BAR
          - Desktop (>768px): 80px left + right margins
          - Mobile (≤768px):  edge to edge, no margin
          - Always:           40px bottom margin
      ══════════════════════════════════════════════════ */}
      <div className="gradient-bar-outer">
        {/* Animated gradient background */}
        <div className="gradient-bar-bg" />

        {/* Content row */}
        <div className="gradient-bar-inner">
          {/* Left — label */}
          {labelHref ? (
            <Link href={labelHref} className="gradient-bar-label gradient-bar-label-link">
              {label}
            </Link>
          ) : (
            <span className="gradient-bar-label">{label}</span>
          )}

          {/* Right — icon */}
          {action === 'plus' && href && (
            <Link href={href} className="bar-icon-btn" aria-label="About">
              <PlusIcon />
            </Link>
          )}
          {action === 'arrow' && href && (
            <Link href={href} className="bar-icon-btn" aria-label="Next project">
              <NextArrowIcon />
            </Link>
          )}
          {action === 'email' && (
            <div style={{ position: 'relative' }}>
              <button
                onClick={handleEmailClick}
                className="bar-icon-btn bar-icon-btn-email"
                aria-label="Copy email address"
              >
                <EmailIcon />
              </button>
              {showCopied && (
                <div className="email-copied-toast">
                  Email copied!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Spacer so page content doesn't hide behind the fixed bar */}
      {!hideSpacer && <div style={{ height: '120px', flexShrink: 0 }} />}

      <style>{`
        /* ── Outer shell — position + size ── */
        .gradient-bar-outer {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 160px);
  max-width: 1520px;
  height: 60px;
  z-index: 9998;
  overflow: visible;
}

@media (max-width: 768px) {
  .gradient-bar-outer {
    left: 0;
    transform: none;
    width: 100%;
    max-width: 100%;
  }
}


        /* ── At 768px and below: edge to edge ── */
        @media (max-width: 768px) {
          .gradient-bar-outer {
            left: 0;
            right: 0;
          }
        }

        /* ── Animated gradient fill ── */
        .gradient-bar-bg {
          position: absolute;
          inset: 0;
          opacity: 0.85;
          background: linear-gradient(270deg, #2f3376, #280d4e, #2e0152, #9977ea);
          background-size: 600% 600%;
          animation: gradientShift 15s ease infinite;
          pointer-events: none;
        }

        /* ── Inner content row ── */
        .gradient-bar-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding-left: 24px;
        }

        /* ── Label text ── */
        .gradient-bar-label {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
        }

        .gradient-bar-label-link {
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .gradient-bar-label-link:hover {
          color: #9977ea;
        }

        /* ── Icon buttons ── */
        .bar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          color: #fff;
          flex-shrink: 0;
          text-decoration: none;
          transition: color 0.3s, background-color 0.3s;
        }
        .bar-icon-btn:hover {
          color: #9977ea;
          background-color: rgba(255, 255, 255, 0.07);
        }

        /* ── Email button specific resets ── */
        .bar-icon-btn-email {
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          margin: 0;
        }

        /* ── Email copied confirmation toast ── */
        .email-copied-toast {
          position: absolute;
          bottom: 70px;
          right: 0;
          background-color: rgba(0, 0, 0, 0.85);
          color: #fff;
          padding: 8px 16px;
          border-radius: 6px;
          font-family: 'Neue Montreal', sans-serif;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          pointer-events: none;
          animation: fadeInOut 2s ease-in-out;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  )
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13 0H11V11H0V13H11V24H13V13H24V11H13V0Z" fill="currentColor" />
    </svg>
  )
}

function NextArrowIcon() {
  return (
    <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.0493164 10V8H20.3828L12.3828 0H15.0493L24.0493 9L15.0493 18H12.3828L20.3828 10H0.0493164Z" fill="currentColor" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26 18V0H0V18H26ZM24 2H2V16H24V2ZM20 4.5L13 9.75L6 4.5V7L13 12.25L20 7V4.5Z" fill="currentColor" />
    </svg>
  )
}
