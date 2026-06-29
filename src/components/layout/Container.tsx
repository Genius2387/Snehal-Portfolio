import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  clean?: boolean
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', clean = false }) => {
  return (
    <div
      className={`mx-auto w-full ${
        clean ? '' : 'px-[20px] sm:px-[24px] md:px-[40px] lg:px-[60px] max-w-[1600px]'
      } ${className}`}
    >
      {children}
    </div>
  )
}
export default Container
