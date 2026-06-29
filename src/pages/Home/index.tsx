import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '@/utils/animations'
import { PROJECTS_DATA } from '@/data/projectsData'
import { Container } from '@/components/layout/Container'
import { useTheme } from '@/hooks/useTheme'

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const toggleContainerRef = useRef<HTMLDivElement>(null)
  const toggleKnobRef = useRef<HTMLSpanElement>(null)
  const isInitialMount = useRef(true)
  const [scrollPercent, setScrollPercent] = useState(1)
  const [activeDot, setActiveDot] = useState(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      setScrollPercent(Math.max(1, Math.min(100, Math.round(scrolled))))

      // Map scroll percentage to one of the 6 indicator dots
      const activeIdx = Math.min(5, Math.floor(scrolled / (100 / 6)))
      setActiveDot(activeIdx)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animations for the sticky sidebar and header
      gsap.fromTo(
        '.reveal-load',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      )

      // Staggered scroll animation for project cards
      const cards = gsap.utils.toArray('.project-card')
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!toggleContainerRef.current || !toggleKnobRef.current) return

    const isDark = theme === 'dark'

    if (isInitialMount.current) {
      gsap.set(toggleContainerRef.current, {
        backgroundColor: isDark ? '#CFCFCF' : '#E5E5E5'
      })
      gsap.set(toggleKnobRef.current, {
        x: isDark ? 22 : 0
      })
      isInitialMount.current = false
    } else {
      gsap.to(toggleContainerRef.current, {
        backgroundColor: isDark ? '#CFCFCF' : '#E5E5E5',
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.timeline()
        .to(toggleKnobRef.current, {
          x: isDark ? 22 : 0,
          duration: 0.3,
          ease: 'power2.out'
        }, 0)
        .to(toggleKnobRef.current, {
          scale: 1.2,
          duration: 0.15,
          ease: 'power1.out'
        }, 0)
        .to(toggleKnobRef.current, {
          scale: 1.0,
          duration: 0.15,
          ease: 'power1.in'
        }, 0.15)
    }
  }, [theme])

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-text-primary pb-24">
      <Container className="pt-12 lg:pt-20">
        <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32 items-start">
          {/* Vertical center divider */}
          <div
            className="hidden lg:block absolute top-4 bottom-4 left-[568px] xl:left-[600px] w-[1px] pointer-events-none z-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, var(--border) 0px, var(--border) 1.5px, transparent 1.5px, transparent 5px)'
            }}
          />

          {/* LEFT SECTION (Sticky Sidebar) */}
          <aside className="w-full lg:w-[520px] shrink-0 lg:sticky lg:top-[120px] h-fit reveal-load">
            {/* Header + Toggle switch */}
            <div className="flex items-center justify-between lg:justify-start lg:gap-4 mb-12">
              <div className="flex gap-4 items-start relative">
                <span className="text-transparent font-mono text-sm select-none mt-1" aria-hidden="true">+</span>
                <h1 className="font-serif text-[42px] sm:text-[48px] lg:text-[56px] font-normal text-[#f33266] leading-none tracking-tight whitespace-nowrap">
                  designer.artist.human
                </h1>
              </div>
              {/* Custom horizontal toggle button */}
              <div
                ref={toggleContainerRef}
                onClick={toggleTheme}
                className="relative w-[42px] h-[20px] rounded-full cursor-pointer shrink-0 mt-2.5 ml-8 bg-[#E5E5E5]"
              >
                <span
                  ref={toggleKnobRef}
                  className="absolute top-[2px] left-[2px] w-[16px] h-[16px] rounded-full bg-white"
                />
              </div>
            </div>

            {/* Paragraph Blocks */}
            <div className="space-y-[32px] w-full max-w-[480px]">
              {/* Paragraph 1 */}
              <div className="flex gap-4 items-start relative pr-16">
                <span className="text-text-secondary/40 font-mono text-sm select-none mt-1">+</span>
                <div className="flex-1">
                  <p className="font-ibm-plex-mono text-[18px] lg:text-[18px] text-text-primary leading-[24.8px] font-semibold tracking-normal">
                    i'm Snehal Vashishtha, a Product Designer who enjoys turning ideas into experiences that feel simple, <span className="whitespace-nowrap">thoughtful, and easy to connect with.</span>
                  </p>
                </div>
                <span className="absolute right-0 top-1 text-[11px] font-mono text-[#f33266] font-bold">
                  (1)
                </span>
              </div>

              {/* Paragraph 2 */}
              <div className="flex gap-4 items-start relative pr-16">
                <span className="text-text-secondary/40 font-mono text-sm select-none mt-1">+</span>
                <div className="flex-1">
                  <p className="font-ibm-plex-mono text-[14px] lg:text-[14px] text-text-primary leading-[22.8px] font-light tracking-normal">
                    <span className="whitespace-nowrap"><span className="text-[#f33266] font-bold">[··]</span> <span className="text-text-secondary">currently seeking full-time opportunities</span></span>
                    <br />
                    i'm a product designer who gets unreasonably excited about good typography and bad UX. Started with graphic design, slipped into UI/UX, and never found my way back out.
                  </p>
                </div>
                <span className="absolute right-0 top-1 text-[11px] font-mono text-[#f33266] font-bold">
                  (2)
                </span>
              </div>

              {/* Paragraph 3 */}
              <div className="flex gap-4 items-start relative pr-16">
                <span className="text-text-secondary/40 font-mono text-sm select-none mt-1">+</span>
                <div className="flex-grow">
                  <p className="font-ibm-plex-mono text-[14px] lg:text-[14px] text-text-primary leading-[1.7] font-light">
                    when i'm not in figma, i'm probably making a kadak adrak wali chai, clicking random photos, or humming songs nobody asked for and a full-time overthinker.
                  </p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex gap-4 items-start pt-4">
                <span className="text-text-secondary/40 font-mono text-sm select-none mt-0.5">+</span>
                <div className="flex-1">
                  <h4 className="font-ibm-plex-mono text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-4 font-bold">
                    REACH OUT TO ME AT,
                  </h4>
                  <div className="flex gap-6">
                    <a
                      href="mailto:vashishthasnehal217@gmail.com"
                      className="font-mono text-sm text-[#f33266] underline decoration-[#f33266] underline-offset-4"
                    >
                      mail
                    </a>
                    <a
                      href="https://www.linkedin.com/in/snehal-vashishtha-1578b9230/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-[#f33266] underline decoration-[#f33266] underline-offset-4"
                    >
                      linkedin
                    </a>
                    {/* <a
                      href="https://www.behance.net/snehalvash66a4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-[#f33266] underline decoration-[#f33266] underline-offset-4"
                    >
                      behance
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT SECTION (Scrolling projects) */}
          <section id="work" className="flex-1 w-full lg:ml-4 xl:ml-8">
            {/* Section Header */}
            <div className="sticky top-[80px] z-40 flex items-center justify-between py-4 mb-6 lg:mb-8 bg-background/80 backdrop-blur-md reveal-load">
              <div className="flex items-baseline select-none">
                <span className="font-serif text-[24px] tracking-[0.05em] text-text-primary uppercase font-bold leading-none ml-8">
                  SELECTED
                </span>
                <span className="font-fell -rotate-15 text-[30px] font-normal italic text-[#f33266] lowercase leading-none -ml-[8px] relative top-[1px]">
                  work
                </span>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3 font-mono text-[11px] select-none">
                <span className="text-[#f33266] font-bold">
                  ( {scrollPercent}% )
                </span>
                <div className="flex gap-1.5 items-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === activeDot ? 'bg-[#f33266]' : 'bg-border-custom'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Project List Container */}
            <div className="relative">

              {/* List */}
              <div className="space-y-[140px]">
                {PROJECTS_DATA.map((project) => (
                  <article key={project.id} className="project-card group max-w-[900px] w-full mx-auto ">

                    {/* Project Card Wrapper with p-6 md:p-10 padding */}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="relative block overflow-visible w-full max-w-[690px] md:max-w-[722px] mx-auto group/card p-6 md:p-10 cursor-pointer text-current no-underline hover:text-current"
                    >
                      {/* Border Left - Animates bottom -> top, with 20px crosshair extensions */}
                      <div className="absolute left-0 top-[-20px] bottom-[-20px] w-[1px] bg-[#f33266] pointer-events-none z-20 transition-transform duration-300 ease-in-out origin-bottom scale-y-0 group-hover/card:scale-y-100 delay-[360ms] group-hover/card:delay-[0ms]" />

                      {/* Border Top - Animates left -> right, with 20px crosshair extensions */}
                      <div className="absolute top-0 left-[-20px] right-[-20px] h-[1px] bg-[#f33266] pointer-events-none z-20 transition-transform duration-300 ease-in-out origin-left scale-x-0 group-hover/card:scale-x-100 delay-[240ms] group-hover/card:delay-[120ms]" />

                      {/* Border Right - Animates top -> bottom, with 20px crosshair extensions */}
                      <div className="absolute right-0 top-[-20px] bottom-[-20px] w-[1px] bg-[#f33266] pointer-events-none z-20 transition-transform duration-300 ease-in-out origin-top scale-y-0 group-hover/card:scale-y-100 delay-[120ms] group-hover/card:delay-[240ms]" />

                      {/* Border Bottom - Animates right -> left, with 20px crosshair extensions */}
                      <div className="absolute bottom-[1px] left-[-20px] right-[-20px] h-[1px] bg-[#f33266] pointer-events-none z-20 transition-transform duration-300 ease-in-out origin-right scale-x-0 group-hover/card:scale-x-100 delay-[0ms] group-hover/card:delay-[360ms]" />

                      {/* Image Container */}
                      <div className="relative overflow-hidden w-full aspect-[642/361] transition-all duration-300 mx-auto">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                        />

                        {/* Red Project Label (overlay bottom left) - Only for projects other than project 1 */}
                        {/* {project.id !== 1 && (
                          <div className="absolute bottom-6 left-6 bg-[#ff4d4d] text-white px-5 py-3 text-xs font-mono tracking-wide z-10 select-none rounded-[2px]">
                            {project.title}
                          </div>
                        )} */}
                      </div>

                      {/* Description below image */}
                      <p className="mt-6 font-mono text-[13px] text-text-secondary leading-[1.6] w-full mx-auto">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2 justify-start w-full mx-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-tag-bg text-tag-text font-mono text-[10px] tracking-wider py-1 px-3 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                  </article>
                ))}
              </div>
            </div>
          </section>

        </div>
      </Container>
    </div>
  )
}

export default Home
