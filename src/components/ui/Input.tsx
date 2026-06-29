import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="relative w-full mb-6">
        <input
          ref={ref}
          className={`peer w-full border-b-2 border-white/10 bg-transparent py-3 text-sm text-white placeholder-transparent transition-all outline-none focus:border-indigo-500 ${
            error ? 'border-red-500 focus:border-red-500' : ''
          } ${className}`}
          placeholder={label}
          {...props}
        />
        <label
          className="pointer-events-none absolute left-0 top-3 origin-[0_0] -translate-y-6 scale-75 text-xs text-neutral-light transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-400"
        >
          {label}
        </label>
        {error && <span className="absolute -bottom-5 left-0 text-xxs text-red-500">{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="relative w-full mb-6">
        <textarea
          ref={ref}
          className={`peer w-full min-h-[120px] border-b-2 border-white/10 bg-transparent py-3 text-sm text-white placeholder-transparent transition-all outline-none focus:border-indigo-500 resize-y ${
            error ? 'border-red-500 focus:border-red-500' : ''
          } ${className}`}
          placeholder={label}
          {...props}
        />
        <label
          className="pointer-events-none absolute left-0 top-3 origin-[0_0] -translate-y-6 scale-75 text-xs text-neutral-light transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-400"
        >
          {label}
        </label>
        {error && <span className="absolute -bottom-5 left-0 text-xxs text-red-500">{error}</span>}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
