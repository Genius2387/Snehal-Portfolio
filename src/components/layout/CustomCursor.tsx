import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '@/utils/animations'

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Track mouse position
    const mouse = { x: 0, y: 0 }
    
    // Quick setters for efficiency
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' })
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' })
    
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' })
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' })

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      setDotX(mouse.x)
      setDotY(mouse.y)
      
      setRingX(mouse.x)
      setRingY(mouse.y)

      if (!isVisible) {
        setIsVisible(true)
        gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
      }
    }

    const handleMouseLeaveWindow = () => {
      setIsVisible(false)
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 })
    }

    // Hover states for links & interactive items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[data-hover]') ||
        target.hasAttribute('data-hover')

      if (isHoverable) {
        gsap.to(ring, {
          scale: 2.2,
          backgroundColor: 'rgba(99, 102, 241, 0.15)', // Indigo glow
          borderColor: 'rgba(99, 102, 241, 0.4)',
          duration: 0.3,
        })
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: '#a855f7', // Purple accent
          duration: 0.3,
        })
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          duration: 0.3,
        })
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#ffffff',
          duration: 0.3,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    window.addEventListener('mouseover', handleMouseOver)

    // Hide default cursor in CSS
    document.documentElement.classList.add('custom-cursor-hidden')

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.classList.remove('custom-cursor-hidden')
    }
  }, [isVisible])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 mix-blend-difference"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 opacity-0 transition-colors duration-150 ease-out"
      />
    </>
  )
}
export default CustomCursor
