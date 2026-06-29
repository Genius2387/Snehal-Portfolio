import React from 'react'
import { useTextReveal } from '@/hooks/useTextReveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = 'left',
  className = '',
}) => {
  const headingRef = useTextReveal<HTMLHeadingElement>()

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  }

  return (
    <div className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="mb-4 text-xs font-bold uppercase tracking-widest text-indigo-400">
          {badge}
        </span>
      )}
      <h2
        ref={headingRef}
        className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-neutral-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
export default SectionHeading
