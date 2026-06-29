import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/animations'

interface ScrollTriggerAnimationOptions {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  scrollTriggerVars?: Omit<gsap.plugins.ScrollTriggerStaticVars, 'trigger'>
}

export const useScrollTriggerAnimation = <T extends HTMLElement>(
  options: ScrollTriggerAnimationOptions
) => {
  const elementRef = useRef<T>(null)
  const { from = {}, to = {}, scrollTriggerVars = {} } = options

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          ...scrollTriggerVars,
        },
      })
    })

    return () => ctx.revert()
  }, [from, to, scrollTriggerVars])

  return elementRef
}
