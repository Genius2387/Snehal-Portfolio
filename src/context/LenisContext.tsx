import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from '@/utils/animations'
import { LenisContext } from '@/hooks/useLenis'

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Instantiate Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    import('gsap').then(({ gsap }) => {
      gsap.ticker.add(updateTicker)
      gsap.ticker.lagSmoothing(0)
    })

    return () => {
      lenis.destroy()
      import('gsap').then(({ gsap }) => {
        gsap.ticker.remove(updateTicker)
      })
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}
