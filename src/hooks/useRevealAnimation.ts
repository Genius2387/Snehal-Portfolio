import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/animations'

interface RevealOptions {
  type?: 'fade-up' | 'scale' | 'fade'
  duration?: number
  delay?: number
  stagger?: number
  triggerHook?: string // e.g. "top 85%"
}

export const useRevealAnimation = <T extends HTMLElement>(options: RevealOptions = {}) => {
  const elementRef = useRef<T>(null)
  
  const {
    type = 'fade-up',
    duration = 1.0,
    delay = 0,
    stagger = 0.05,
    triggerHook = 'top 85%',
  } = options

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    let fromVars: gsap.TweenVars = { opacity: 0 }
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerHook,
        toggleActions: 'play none none none',
      },
    }

    if (type === 'fade-up') {
      fromVars.y = 50
      toVars.y = 0
    } else if (type === 'scale') {
      fromVars.scale = 0.9
      toVars.scale = 1
    }

    // Check if target has children to stagger
    const targets = el.dataset.staggerChildren ? el.children : el
    if (el.dataset.staggerChildren) {
      toVars.stagger = stagger
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, toVars)
    })

    return () => ctx.revert()
  }, [type, duration, delay, stagger, triggerHook])

  return elementRef
}
