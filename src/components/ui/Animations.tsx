import React from 'react'
import { useRevealAnimation } from '@/hooks/useRevealAnimation'
import { useParallax } from '@/hooks/useParallax'

interface AnimProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

// Reveal Animation Wrapper
export const Reveal: React.FC<AnimProps & { type?: 'fade-up' | 'scale' | 'fade' }> = ({
  children,
  className = '',
  type = 'fade-up',
  delay = 0,
  duration = 1.0,
}) => {
  const ref = useRevealAnimation<HTMLDivElement>({ type, delay, duration })
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Parallax Animation Wrapper
export const Parallax: React.FC<AnimProps & { speed?: number; direction?: 'vertical' | 'horizontal' }> = ({
  children,
  className = '',
  speed = 80,
  direction = 'vertical',
}) => {
  const ref = useParallax<HTMLDivElement>({ speed, direction })
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// FadeUp Animation Wrapper
export const FadeUp: React.FC<AnimProps> = ({ children, className = '', delay = 0, duration = 0.8 }) => {
  const ref = useRevealAnimation<HTMLDivElement>({ type: 'fade-up', delay, duration })
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Stagger Container Wrapper
export const StaggerContainer: React.FC<AnimProps & { stagger?: number }> = ({
  children,
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = 0.8,
}) => {
  const ref = useRevealAnimation<HTMLDivElement>({
    type: 'fade-up',
    delay,
    stagger,
    duration,
  })
  return (
    <div ref={ref} className={className} data-stagger-children="true">
      {children}
    </div>
  )
}
