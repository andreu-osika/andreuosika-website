'use client'

import { useEffect, useRef } from 'react'

// ============================================================
// FADE IN OBSERVER
// Attaches an IntersectionObserver to all .fade-in-section
// elements, adding .is-visible when they enter the viewport.
// This replaces Webflow's opacity:0 + JS animation trigger.
// ============================================================

export default function FadeInObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Unobserve after triggering (animate once)
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-in-section')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return null // Pure behavior, no UI
}
