import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/data/mockData'
import { Container } from './Container'
import { BrandIcon } from '@/components/common/BrandIcon'

export const Footer: React.FC = () => {
  const getIcon = (platform: string) => {
    return <BrandIcon name={platform} size={18} />
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-[#070709] py-16 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />

      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Logo & Pitch */}
          <div className="md:col-span-2 space-y-6">
            <Link
              to="/home"
              className="font-display text-2xl font-bold tracking-tight text-white"
              data-hover
            >
              ALEX<span className="text-indigo-400">.</span>RIVERS
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-light">
              Crafting premium digital platforms with fluid motion design, sound UI/UX systems, and clean front-end architectures. Let's build something extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Navigation</h4>
            <div className="flex flex-col gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-neutral-light hover:text-white transition-colors w-fit"
                  data-hover
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-light hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all duration-300"
                  data-hover
                  title={link.platform}
                >
                  {getIcon(link.platform)}
                </a>
              ))}
            </div>
            <a
              href="mailto:alex.rivers@design.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors pt-2"
              data-hover
            >
              alex.rivers@design.com
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-[1px] w-full bg-white/5" />

        {/* Sub-footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-light/60">
          <p>© {new Date().getFullYear()} Alex Rivers. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={handleScrollToTop}
              className="hover:text-white transition-colors"
              data-hover
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
