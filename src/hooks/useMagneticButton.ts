import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/animations'

interface MagneticOptions {
  strength?: number // 0 to 1
  radius?: number
}

export const useMagneticButton = <T extends HTMLElement>(options: MagneticOptions = {}) => {
  const elementRef = useRef<T>(null)
  const { strength = 0.35, radius = 80 } = options

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      // Center coordinates
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      
      // Distance from cursor
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)

      if (dist < radius) {
        // Move element slightly towards cursor
        gsap.to(el, {
          x: dx * strength,
          y: dy * strength,
          duration: 0.3,
          ease: 'power2.out',
        })
      } else {
        // Reset position
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, radius])

  return elementRef
}
