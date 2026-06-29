import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 sm:p-8 ${
        hoverable ? 'glass-panel-hover cursor-pointer' : ''
      } ${className}`}
      data-hover={hoverable ? 'true' : undefined}
    >
      {children}
    </div>
  )
}
export default Card
