import React, { useEffect, useRef } from 'react'
import { gsap } from '@/utils/animations'

import { useLenis } from '@/hooks/useLenis'

interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    // Scroll to top immediately when this page component mounts (after lazy load resolves)
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      }
    }

    resetScroll()
    const t1 = setTimeout(resetScroll, 50)
    const t2 = setTimeout(resetScroll, 150)
    const t3 = setTimeout(resetScroll, 300)

    const container = containerRef.current
    if (!container) return

    // Premium entrance animation: fade in and slide up
    gsap.fromTo(container,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'y',
      }
    )

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [lenis])

  return (
    <div className="relative min-h-screen w-full">
      {/* Page Content Container */}
      <div ref={containerRef} className="w-full">
        {children}
      </div>
    </div>
  )
}
export default PageWrapper
