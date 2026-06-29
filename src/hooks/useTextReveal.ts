import { useEffect, useRef } from 'react'
import { gsap, splitTextIntoSpans } from '@/utils/animations'

interface TextRevealOptions {
  duration?: number
  stagger?: number
  delay?: number
  triggerHook?: string
}

export const useTextReveal = <T extends HTMLElement>(options: TextRevealOptions = {}) => {
  const elementRef = useRef<T>(null)
  const { duration = 0.8, stagger = 0.02, delay = 0, triggerHook = 'top 85%' } = options

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    // Apply span wrapping
    splitTextIntoSpans(el)

    const chars = el.querySelectorAll('.text-reveal-char')
    if (chars.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: triggerHook,
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [duration, stagger, delay, triggerHook])

  return elementRef
}
