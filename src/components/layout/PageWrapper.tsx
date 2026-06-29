import React, { useEffect, useRef } from 'react'
import { gsap } from '@/utils/animations'

interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const overlay = overlayRef.current
    if (!container || !overlay) return

    // Page Intro Animation Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } })

    // Reset styles
    gsap.set(container, { opacity: 0, y: 15 })
    gsap.set(overlay, { scaleY: 1 })

    tl.to(overlay, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.0,
      ease: 'power4.inOut',
    })
      .to(
        container,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full">
      {/* Premium Transition Overlay Curtain */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[999] origin-top bg-gradient-to-br from-indigo-900 to-black"
        style={{ transform: 'scaleY(1)' }}
      />
      {/* Page Content Container */}
      <div ref={containerRef} className="w-full">
        {children}
      </div>
    </div>
  )
}
export default PageWrapper
