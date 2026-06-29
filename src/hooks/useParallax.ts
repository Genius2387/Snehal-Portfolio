import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/animations'

interface ParallaxOptions {
  speed?: number // positive or negative
  direction?: 'vertical' | 'horizontal'
}

export const useParallax = <T extends HTMLElement>(options: ParallaxOptions = {}) => {
  const elementRef = useRef<T>(null)
  const { speed = 100, direction = 'vertical' } = options

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const transformVar = direction === 'vertical' ? 'y' : 'x'
      
      gsap.fromTo(
        el,
        {
          [transformVar]: -speed,
        },
        {
          [transformVar]: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [speed, direction])

  return elementRef
}
