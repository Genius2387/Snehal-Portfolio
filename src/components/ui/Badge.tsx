import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'cyan' | 'glass'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'glass', className = '' }) => {
  const variantClasses = {
    primary: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    secondary: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    glass: 'bg-white/5 text-neutral-bright border-white/10',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-medium tracking-wide uppercase transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
export default Badge
