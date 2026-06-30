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
      window.scrollTo(0, 0)
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      }
    }

    resetScroll()
    const timer = setTimeout(resetScroll, 50)

    const container = containerRef.current
    if (!container) return

    // Reset styles and simple fade-in
    gsap.set(container, { opacity: 0 })
    gsap.to(container, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    })

    return () => clearTimeout(timer)
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
