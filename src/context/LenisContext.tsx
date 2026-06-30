import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from '@/utils/animations'
import { LenisContext } from '@/hooks/useLenis'

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Instantiate Lenis
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    })

    setLenis(instance)

    // Sync Lenis scroll with ScrollTrigger
    instance.on('scroll', ScrollTrigger.update)

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const updateTicker = (time: number) => {
      instance.raf(time * 1000)
    }

    import('gsap').then(({ gsap }) => {
      gsap.ticker.add(updateTicker)
      gsap.ticker.lagSmoothing(0)
    })

    return () => {
      instance.destroy()
      import('gsap').then(({ gsap }) => {
        gsap.ticker.remove(updateTicker)
      })
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}
