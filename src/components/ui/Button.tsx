import React, { forwardRef } from 'react'
import { useMagneticButton } from '@/hooks/useMagneticButton'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  magneticStrength?: number
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', magnetic = false, magneticStrength = 0.35, children, className = '', ...props }, ref) => {
    const magneticRef = useMagneticButton<HTMLButtonElement>({
      strength: magneticStrength,
      radius: 100,
    })

    // Determine variant classes
    const variantClasses = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.4)]',
      secondary: 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_4px_20px_-4px_rgba(168,85,247,0.4)]',
      outline: 'border border-white/20 text-white hover:bg-white hover:text-black hover:border-white',
      glass: 'glass-panel text-white hover:bg-white/10 hover:border-white/20',
    }

    // Determine size classes
    const sizeClasses = {
      sm: 'px-4 py-2 text-xs font-semibold',
      md: 'px-6 py-3 text-sm font-semibold',
      lg: 'px-8 py-4 text-base font-semibold',
    }

    const appliedRef = magnetic ? magneticRef : ref

    return (
      <button
        ref={appliedRef as React.RefObject<HTMLButtonElement>}
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans tracking-wide transition-all duration-300 active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        data-hover
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
