import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'HOME', path: '/home' },
    { name: 'WORK', path: '/home#work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'RESUME', path: '/resume' },
  ]

  const isActive = (path: string) => {
    if (path === '/home') {
      return location.pathname === '/home' && !location.hash
    }
    if (path.startsWith('/home#')) {
      return location.pathname === '/home' && location.hash === path.substring(5)
    }
    return location.pathname === path
  }

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === '/home#work') {
      if (location.pathname === '/home') {
        e.preventDefault()
        const el = document.getElementById('work')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-[90] w-full bg-background/85 backdrop-blur-md border-b border-border-custom py-8">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/home"
          className="text-xs font-mono tracking-[0.25em] font-light text-text-primary hover:text-[#f33266] transition-colors duration-300"
          id="nav-logo"
        >
          SV
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleWorkClick(e, item.path)}
                className={`text-[11px] font-mono tracking-[0.25em] font-light uppercase transition-colors duration-300 ${
                  active ? 'text-[#f33266]' : 'text-text-primary hover:text-[#f33266]'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-text-primary hover:text-[#f33266] transition-colors duration-300"
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[78px] h-screen bg-background md:hidden z-50 border-t border-border-custom px-[20px] py-12">
          <div className="flex flex-col items-start gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleWorkClick(e, item.path)}
                  className={`text-[12px] font-mono tracking-[0.25em] font-light uppercase transition-colors duration-300 ${
                    active ? 'text-[#f33266]' : 'text-text-primary hover:text-[#f33266]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
