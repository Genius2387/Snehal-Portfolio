import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Briefcase, Search, Shield, TrendingUp } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Container } from '@/components/layout/Container'
import { PROJECTS } from '@/data/mockData'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

const ImpactoCaseStudy: React.FC = () => {
  const [activePersona, setActivePersona] = React.useState<1 | 2>(1)
  const [activeSection, setActiveSection] = React.useState<string>('overview')

  React.useEffect(() => {
    const sections = [
      'overview',
      'problem-space',
      'research',
      'personas-&-insights',
      'user-journey',
      'information-architecture',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PageWrapper>
      <div
        className="pt-[1px] pb-24 text-neutral-bright"
        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      >
        {/* Hero Image */}
        <div className="w-full mb-16 overflow-hidden">
          <img
            src="/projects/projectno-2.png"
            alt="Impacto Case Study Hero"
            className="w-full h-auto block"
          />
        </div>

        <Container>

          {/* Grid Layout: Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start border-t border-border-custom dark:border-white/10 pt-12">
            {/* Left Column: holds everything except the Table of Contents */}
            <div className="lg:col-span-10 space-y-24">

              {/* Overview & Meta Info sub-grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <section id="overview" className="md:col-span-2 space-y-6">
                  <h3 className="font-extrabold text-neutral-bright tracking-tight" style={{ fontFamily: '"PT Serif", serif', fontSize: '32px' }}>
                    Overview
                  </h3>
                  <p className="text-[18px] leading-relaxed text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Impacto is a mobile app designed to make volunteering simple, accessible, and rewarding for everyone. It helps users discover nearby volunteering opportunities, join events, track their hours, earn certificates, and connect with community groups all through one seamless platform.
                  </p>
                  <p className="text-[18px] leading-relaxed text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Research revealed a major gap between people <strong>who want to volunteer</strong> and the <strong>lack of simple, trustworthy ways to get started</strong>. Impacto bridges this gap by offering a smooth, transparent, and motivating volunteer experience.
                  </p>
                  <p className="text-[18px] leading-relaxed text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    This project focuses on simplifying the journey from interest &rarr; <em>participation</em> &rarr; <em>impact tracking</em> for new-age volunteers.
                  </p>
                </section>

                {/* Column 2: Meta Info */}
                <aside className="md:col-span-1 space-y-8">
                  <div>
                    <h4 className="font-bold text-neutral-bright mb-2" style={{ fontFamily: '"PT Serif", serif', fontSize: '32px' }}>
                      Duration
                    </h4>
                    <p className="text-sm text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      2 weeks
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-bright mb-2" style={{ fontFamily: '"PT Serif", serif', fontSize: '32px' }}>
                      Industries
                    </h4>
                    <p className="text-sm text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      3 months
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-bright mb-2" style={{ fontFamily: '"PT Serif", serif', fontSize: '32px' }}>
                      My role
                    </h4>
                    <p className="text-sm text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      UX Research, Interviews, Experience Design, UI Design
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-bright mb-2" style={{ fontFamily: '"PT Serif", serif', fontSize: '32px' }}>
                      My team
                    </h4>
                    <p className="text-sm text-neutral-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Just me designing for impact, empathy and better communities
                    </p>
                  </div>
                </aside>
              </div>

              {/* Problem Space Section */}
              <section id="problem-space" className="mt-24 pt-16 border-t border-border-custom dark:border-white/10 space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="text-[20px] font-bold text-[#f33266]">
                  Problem Space
                </span>

                <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-neutral-bright leading-[1.35] max-w-4xl tracking-tight">
                  "Why does volunteering feel so <span className="text-[#f33266]">confusing</span>, <span className="text-[#f33266]">scattered</span>, and <span className="text-[#f33266]">hard</span> to begin even for those who genuinely want to help?"
                </h3>

                <div className="space-y-4 max-w-3xl mt-8">
                  <p className="text-[18px] leading-relaxed text-neutral-light">
                    Most of us have experienced this <span className="text-[#f33266] font-semibold">feeling</span>
                  </p>

                  <div className="text-[18px] leading-normal text-neutral-light">
                    You decide you want to volunteer.<br />
                    You want to contribute to something meaningful.<br />
                    You even start searching for opportunities.You even start searching for opportunities.
                  </div>

                  <p className="text-[18px] leading-normal text-neutral-light pt-4">
                    But somewhere between the intention and the action, the process<br />
                    becomes unclear.<br />
                    Something still feels incomplete whether it's the lack of a reliable<br />
                    platform, unclear event details, or constantly jumping between random posts<br />
                    and outdated websites.
                  </p>
                </div>
              </section>

              {/* Core Question & Research Section */}
              <section id="research" className="mt-24 pt-16 border-t border-border-custom dark:border-white/10 space-y-8 max-w-[1050px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="space-y-4">
                  <p className="text-[18px] text-neutral-light leading-normal">
                    This brought me to the core question...
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-neutral-bright leading-[1.35] max-w-4xl tracking-tight">
                    Why do people who genuinely want to volunteer still struggle to find clear, accessible, and trustworthy opportunities?
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[20px] font-bold text-[#f33266] block">
                      Research
                    </span>
                    <p className="text-[17px] leading-relaxed text-neutral-light">
                      To uncover this, I conducted <strong>8 user interviews + 32 survey responses</strong> with students and young professionals who have tried (or wanted to try) volunteering.
                    </p>
                  </div>

                  {/* Research Images Grid */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Survey Card */}
                    <div className="bg-white/5 border border-border-custom dark:border-white/10 rounded-2xl p-4 flex items-center justify-center overflow-hidden w-full md:w-[500px] h-[380px] shrink-0">
                      <img
                        src="/projects/research-survey.jpg"
                        alt="Survey using Google Forms"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Demographics Card */}
                    <div className="bg-white/5 border border-border-custom dark:border-white/10 rounded-2xl p-4 flex items-center justify-center overflow-hidden w-full md:w-[500px] h-[380px] shrink-0">
                      <img
                        src="/projects/research-demographics.jpg"
                        alt="User Demographics"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Key Insights Header */}
                <div className="space-y-4 pt-12">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-neutral-bright tracking-tight">
                    Key Insights from Users
                  </h3>
                  <p className="text-[18px] leading-relaxed text-neutral-light">
                    The research revealed five strong patterns that consistently appeared across both interviews and surveys.
                  </p>
                </div>

                {/* Key Insights 4 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 max-w-full">
                  <div className="space-y-2 border-l-[3px] border-[#f33266] pl-3">
                    <h4 className="font-bold text-neutral-bright text-[15px] xl:text-[16px] tracking-tight whitespace-nowrap">
                      Information is scattered
                    </h4>
                    <p className="text-[13.5px] leading-relaxed text-neutral-light/95">
                      Users jump between Instagram, WhatsApp groups & random site &rarr; feels unreliable.
                    </p>
                  </div>

                  <div className="space-y-2 border-l-[3px] border-[#f33266] pl-3">
                    <h4 className="font-bold text-neutral-bright text-[15px] xl:text-[16px] tracking-tight whitespace-nowrap">
                      Events feel untrustworthy
                    </h4>
                    <p className="text-[13.5px] leading-relaxed text-neutral-light/95">
                      People are unsure which volunteering opportunities are real, safe, or verified.
                    </p>
                  </div>

                  <div className="space-y-2 border-l-[3px] border-[#f33266] pl-3">
                    <h4 className="font-bold text-neutral-bright text-[15px] xl:text-[16px] tracking-tight whitespace-nowrap">
                      Users discover events too late
                    </h4>
                    <p className="text-[13.5px] leading-relaxed text-neutral-light/95">
                      Many participants said they <em>missed</em> events because they found out about them last minute.
                    </p>
                  </div>

                  <div className="space-y-2 border-l-[3px] border-[#f33266] pl-3">
                    <h4 className="font-bold text-neutral-bright text-[15px] xl:text-[16px] tracking-tight whitespace-nowrap">
                      No single platform exists
                    </h4>
                    <p className="text-[13.5px] leading-relaxed text-neutral-light/95">
                      Users want <em>one organised space</em> to view all volunteering events clearly and quickly.
                    </p>
                  </div>
                </div>

                {/* Understanding the Core Problem */}
                <div className="pt-16 space-y-6">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-neutral-bright tracking-tight">
                    Understanding the Core Problem
                  </h3>
                  <p className="text-[18px] leading-relaxed text-neutral-light">
                    After analysing survey responses and user interviews, it became clear that the challenge isn't a lack of interest in volunteering people genuinely want to help.
                  </p>

                  <div className="pt-4 space-y-2">
                    <p className="text-[16px] text-neutral-light/60">
                      This led me to identify the core problem
                    </p>
                    <p className="text-[18px] font-bold text-neutral-bright leading-relaxed max-w-4xl">
                      People want to volunteer, but the journey to discover and engage with meaningful opportunities is still scattered, uncertain, and overwhelming.
                    </p>
                  </div>
                </div>
              </section>

              {/* Personas & Insights Section */}
              <section
                id="personas-&-insights"
                className="mt-24 pt-16 border-t border-border-custom dark:border-white/10 space-y-6 max-w-[850px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="space-y-6">
                  <p className="text-[16px] italic text-neutral-light/70">
                    The insights revealed not just what users struggle with, but who these users really are.
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-neutral-bright tracking-tight leading-snug max-w-4xl">
                    The insights revealed not just what users struggle with, but who these users really are
                  </h3>

                  <div className="pt-8 space-y-2">
                    <span className="text-[20px] font-bold text-[#f33266] block">
                      Personas & Insights
                    </span>
                    <p className="text-[18px] text-neutral-light leading-relaxed">
                      This led me to create <span className="text-[#f33266] font-semibold">2 primary personas</span> that represent the core user groups for Impacto
                    </p>
                  </div>
                </div>

                {/* Persona Toggle & Display Section */}
                <div className="pt-12 space-y-4 max-w-[850px]">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setActivePersona(1)}
                      className={`px-4 py-1 rounded-full font-medium transition-all duration-300 text-[13px] ${activePersona === 1
                        ? 'bg-[#f33266] text-white border border-[#f33266]'
                        : 'bg-transparent text-neutral-light border border-neutral-light/30 hover:border-neutral-light'
                        }`}
                    >
                      Persona 1
                    </button>
                    <button
                      onClick={() => setActivePersona(2)}
                      className={`px-4 py-1 rounded-full font-medium transition-all duration-300 text-[13px] ${activePersona === 2
                        ? 'bg-[#f33266] text-white border border-[#f33266]'
                        : 'bg-transparent text-neutral-light border border-neutral-light/30 hover:border-neutral-light'
                        }`}
                    >
                      Persona 2
                    </button>
                  </div>

                  {/* Persona Image Container */}
                  <div className="w-full overflow-hidden border border-border-custom dark:border-white/10 rounded-2xl bg-white/5">
                    <img
                      src={activePersona === 1 ? '/projects/persona-1.png' : '/projects/persona-2.jpg'}
                      alt={`Persona ${activePersona}`}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </section>

              {/* User Journey Section */}
              <section
                id="user-journey"
                className="mt-24 pt-16 border-t border-border-custom dark:border-white/10 space-y-8 max-w-[1050px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-[#f33266] tracking-tight">
                    User Journey
                  </h3>
                  <p className="text-[16px] text-neutral-light leading-relaxed max-w-3xl italic">
                    Understanding how users currently discover, evaluate and join volunteering opportunities and where the experience breaks.
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-3 md:gap-4 max-w-[1050px]">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-4 w-[195px]">
                    <div className="bg-[#1c0d26] text-white w-[195px] h-[50px] flex items-center justify-center rounded-xl text-center font-bold text-[14px] px-2 leading-snug">
                      Wants to Volunteer
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start overflow-hidden">
                      <ul className="list-disc pl-4 space-y-1 font-medium leading-normal">
                        <li>Do something meaningful</li>
                        <li>Gain experience / certificate</li>
                        <li>Join local events without hassle</li>
                      </ul>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start italic font-medium leading-normal space-y-1 overflow-hidden">
                      <p>&ldquo;Where do I even find real events?&rdquo;</p>
                      <p>&ldquo;I hope there&rsquo;s something nearby.&rdquo;</p>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] py-3 px-2 rounded-xl text-[12.5px] w-[195px] flex items-center justify-center gap-1.5 font-bold">
                      <span>😐</span> Curious
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-4 w-[195px]">
                    <div className="bg-[#1c0d26] text-white w-[195px] h-[50px] flex items-center justify-center rounded-xl text-center font-bold text-[14px] px-2 leading-snug">
                      Search & Discovery
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start overflow-hidden">
                      <ul className="list-disc pl-4 space-y-1 font-medium leading-normal">
                        <li>Find events that feel safe</li>
                        <li>Filter by interests, skills, and time</li>
                      </ul>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start italic font-medium leading-normal space-y-1 overflow-hidden">
                      <p>&ldquo;Are these events even genuine?&rdquo;</p>
                      <p>&ldquo;Why is everything scattered?&rdquo;</p>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] py-3 px-2 rounded-xl text-[12.5px] w-[195px] flex items-center justify-center gap-1.5 font-bold">
                      <span>😒</span> Annoyed
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col gap-4 w-[195px]">
                    <div className="bg-[#1c0d26] text-white w-[195px] h-[50px] flex items-center justify-center rounded-xl text-center font-bold text-[14px] px-2 leading-snug">
                      Evaluation
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start overflow-hidden">
                      <ul className="list-disc pl-4 space-y-1 font-medium leading-normal">
                        <li>Understand what will happen at the event</li>
                        <li>Know the exact role, time, and location</li>
                      </ul>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start italic font-medium leading-normal space-y-1 overflow-hidden">
                      <p>&ldquo;I don&rsquo;t understand what I&rsquo;m supposed to do.&rdquo;</p>
                      <p>&ldquo;What if this is fake?&rdquo;</p>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] py-3 px-2 rounded-xl text-[12.5px] w-[195px] flex items-center justify-center gap-1.5 font-bold">
                      <span>😩</span> Frustrated
                    </div>
                  </div>

                  {/* Column 4 */}
                  <div className="flex flex-col gap-4 w-[195px]">
                    <div className="bg-[#1c0d26] text-white w-[195px] h-[50px] flex items-center justify-center rounded-xl text-center font-bold text-[14px] px-2 leading-snug">
                      Decision
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start overflow-hidden">
                      <ul className="list-disc pl-4 space-y-1 font-medium leading-normal">
                        <li>Decide quickly</li>
                        <li>Feel confident about attending</li>
                      </ul>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start italic font-medium leading-normal space-y-1 overflow-hidden">
                      <p>&ldquo;Should I actually go?&rdquo;</p>
                      <p>&ldquo;I don&rsquo;t want to go alone.&rdquo;</p>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] py-3 px-2 rounded-xl text-[12.5px] w-[195px] flex items-center justify-center gap-1.5 font-bold whitespace-nowrap">
                      <span>😐</span> Neutral &rarr; Slightly hopeful
                    </div>
                  </div>

                  {/* Column 5 */}
                  <div className="flex flex-col gap-4 w-[195px]">
                    <div className="bg-[#1c0d26] text-white w-[195px] h-[50px] flex items-center justify-center rounded-xl text-center font-bold text-[14px] px-2 leading-snug">
                      Join & Aftermath
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start overflow-hidden">
                      <ul className="list-disc pl-4 space-y-1 font-medium leading-normal">
                        <li>Attend smoothly</li>
                        <li>Track achievements</li>
                        <li>Feel motivated to do more</li>
                      </ul>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] p-3 rounded-xl text-[11.5px] w-[195px] h-[132px] flex flex-col justify-start italic font-medium leading-normal space-y-1 overflow-hidden">
                      <p>&ldquo;It was good... but how do I track it?&rdquo;</p>
                      <p>&ldquo;Will this help me in future?&rdquo;</p>
                    </div>
                    <div className="bg-[#ff6480]/16 text-[#2d2329] py-3 px-2 rounded-xl text-[12.5px] w-[195px] flex items-center justify-center gap-1.5 font-bold">
                      <span>😊</span> Happy but incomplete
                    </div>
                  </div>
                </div>
              </section>

              {/* Where the Experience Breaks Section */}
              <section
                id="experience-breaks"
                className="mt-24 pt-16 border-t border-border-custom dark:border-white/10 space-y-12 max-w-[850px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-neutral-bright tracking-tight leading-snug">
                    Where the experience breaks
                  </h3>
                  <p className="text-[16px] text-neutral-light leading-relaxed max-w-3xl italic">
                    Key moments where users hesitate, drop off, or lose motivation.
                  </p>
                </div>

                {/* Grid of 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                  {/* Column 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 border-t-2 border-dotted border-[#f33266]/40 mb-6 mx-auto"></div>
                    <div className="w-16 h-16 rounded-full bg-[#ff6480]/12 text-black flex items-center justify-center shrink-0">
                      <Search size={28} className="text-black" />
                    </div>
                    <h4 className="font-bold text-neutral-bright text-[18px] mt-4 text-center">
                      Search & Discovery
                    </h4>
                    <p className="text-[14px] text-neutral-light mt-2 text-center leading-relaxed">
                      Too many platforms, unclear or outdated event information.
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 border-t-2 border-dotted border-[#f33266]/40 mb-6 mx-auto"></div>
                    <div className="w-16 h-16 rounded-full bg-[#ff6480]/12 text-black flex items-center justify-center shrink-0">
                      <Shield size={28} className="text-black" />
                    </div>
                    <h4 className="font-bold text-neutral-bright text-[18px] mt-4 text-center">
                      Evaluation
                    </h4>
                    <p className="text-[14px] text-neutral-light mt-2 text-center leading-relaxed">
                      Not enough details to build trust. Unclear roles and impact.
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 border-t-2 border-dotted border-[#f33266]/40 mb-6 mx-auto"></div>
                    <div className="w-16 h-16 rounded-full bg-[#ff6480]/12 text-black flex items-center justify-center shrink-0">
                      <span className="text-[32px] font-bold text-black leading-none font-sans select-none">?</span>
                    </div>
                    <h4 className="font-bold text-neutral-bright text-[18px] mt-4 text-center">
                      Decision
                    </h4>
                    <p className="text-[14px] text-neutral-light mt-2 text-center leading-relaxed">
                      Uncertainty and lack of confidence cause hesitation.
                    </p>
                  </div>

                  {/* Column 4 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 border-t-2 border-dotted border-[#f33266]/40 mb-6 mx-auto"></div>
                    <div className="w-16 h-16 rounded-full bg-[#ff6480]/12 text-black flex items-center justify-center shrink-0">
                      <TrendingUp size={28} className="text-black" />
                    </div>
                    <h4 className="font-bold text-neutral-bright text-[18px] mt-4 text-center">
                      Join & Aftermath
                    </h4>
                    <p className="text-[14px] text-neutral-light mt-2 text-center leading-relaxed">
                      No way to track contributions or celebrate impact.
                    </p>
                  </div>
                </div>

                {/* Journey Insight Callout Card */}
                <div className="relative overflow-hidden bg-[#fff0f2] border border-[#fde2e6] rounded-[28px] p-6 sm:p-10 pb-36 sm:pb-44 md:p-12 flex flex-col md:flex-row items-center gap-6 mt-12 w-full md:w-[1023px] md:max-w-[1023px] md:h-[287px] md:min-h-[287px] md:relative md:left-1/2 md:-translate-x-1/2 select-none box-border ml-18">
                  {/* Left Side: Icon and Text */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 z-10 max-w-full md:max-w-[580px]">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
                      <img
                        src="/projects/journey-insight-left.png"
                        alt="Journey Insight Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="space-y-3 text-left">
                      <span className="text-[14px] font-bold text-[#e23b68] block tracking-wide">
                        Journey Insight
                      </span>
                      <h4 className="text-[22px] sm:text-[26px] font-extrabold text-[#11051c] leading-snug tracking-tight">
                        Users don&rsquo;t lose motivation because they don&rsquo;t want to volunteer.
                      </h4>
                      <p className="text-[14px] sm:text-[15px] text-[#4f4656] leading-relaxed font-medium">
                        They lose motivation because discovering trustworthy opportunities, understanding expectations, and tracking their impact requires too much effort.
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Bottom-right aligned illustration */}
                  <img
                    src="/projects/journey-insight-right.png"
                    alt="Journey Insight Illustration"
                    className="absolute bottom-0 right-0 h-[140px] sm:h-[180px] md:h-[295px] md:-bottom-6 md:-right-8 w-auto object-contain object-bottom pointer-events-none z-0 select-none"
                  />
                </div>

                {/* Bottom Journey Image */}
                
              </section>

              {/* Information Architecture Section */}
              <section
                id="information-architecture"
                className="mt-24 pt-16 border-t border-border-custom dark:border-white/10 space-y-12 max-w-[850px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {/* Top row transition callout */}
                <div className="flex items-center gap-4 bg-white/5 border border-border-custom dark:border-white/10 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-[#fdf0f2] flex items-center justify-center shrink-0">
                    <ArrowRight size={18} className="text-[#f33266]" />
                  </div>
                  <p className="text-[15px] text-neutral-light leading-relaxed">
                    To solve these friction points, I restructured the platform's{' '}
                    <span className="text-[#f33266] font-semibold">Information architecture</span> to make the experience seamless and trustworthy.
                  </p>
                </div>

                {/* Title / Header Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative pb-12 md:pb-0">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[20px] font-bold text-[#f33266] block">
                      Information Architecture
                    </span>
                    <p className="text-neutral-light leading-none" style={{ fontFamily: 'Caveat, cursive', fontSize: '16px' }}>
                      Organising the experience
                    </p>
                    <p className="text-[15px] text-neutral-light leading-relaxed max-w-xl font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Organizing volunteering into a journey that feels simple, predictable and trustworthy.
                    </p>
                  </div>

                  {/* Sticky Note Mockup */}
                  <div className="md:col-span-5 flex justify-end md:absolute md:-top-20 md:-right-[190px] z-10 rotate-[2deg] hover:rotate-0 transition-transform duration-300 transform">
                    <img 
                      src="/projects/sticky-note.png" 
                      alt="Sticky Note" 
                      className="w-full md:w-[450px] md:h-[350px] object-contain select-none pointer-events-none"
                    />
                  </div>
                </div>

                {/* Sitemap Tree Diagram */}
                <div className="pt-8">
                  {/* Root Node: IMPACTO */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-[#fdf0f2] text-[#f33266] border border-[#fcebee] px-8 py-3 rounded-xl font-bold tracking-wider text-[15px] shadow-sm">
                      IMPACTO
                    </div>
                  </div>

                  {/* Connecting lines & Columns */}
                  <div className="relative">
                    {/* Horizontal line connecting columns */}
                    <div className="absolute top-[-32px] left-[10%] right-[10%] h-0.5 bg-[#f33266]/30"></div>
                    {/* Center vertical connector to horizontal line */}
                    <div className="absolute top-[-32px] left-1/2 w-0.5 h-8 bg-[#f33266]/30 -translate-x-1/2"></div>

                    <div className="grid grid-cols-5 gap-4 items-start">
                      {/* Column 1: Home */}
                      <div className="flex flex-col items-center">
                        {/* Vertical connector line segment to horizontal line */}
                        <div className="w-0.5 h-8 bg-[#f33266]/30 mb-2"></div>
                        <div className="bg-[#fdf0f2] text-[#f33266] py-2 px-3 rounded-lg font-bold text-[13.5px] text-center w-full shadow-sm mb-4">
                          Home
                        </div>
                        {/* Child items vertical trunk */}
                        <div className="relative w-full flex flex-col pl-4">
                          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#f33266]/20"></div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Featured
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Categories
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Nearby
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Explore */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-[#f33266]/30 mb-2"></div>
                        <div className="bg-[#fdf0f2] text-[#f33266] py-2 px-3 rounded-lg font-bold text-[13.5px] text-center w-full shadow-sm mb-4">
                          Explore
                        </div>
                        <div className="relative w-full flex flex-col pl-4">
                          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#f33266]/20"></div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Search
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Filters
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              All Events
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Interests
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Event */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-[#f33266]/30 mb-2"></div>
                        <div className="bg-[#fdf0f2] text-[#f33266] py-2 px-3 rounded-lg font-bold text-[13.5px] text-center w-full shadow-sm mb-4">
                          Event
                        </div>
                        <div className="relative w-full flex flex-col pl-4">
                          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#f33266]/20"></div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Event Details
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Apply
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Organizer
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Reviews
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Join
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 4: My Impact */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-[#f33266]/30 mb-2"></div>
                        <div className="bg-[#fdf0f2] text-[#f33266] py-2 px-3 rounded-lg font-bold text-[13.5px] text-center w-full shadow-sm mb-4">
                          My Impact
                        </div>
                        <div className="relative w-full flex flex-col pl-4">
                          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#f33266]/20"></div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Hours Tracked
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Certificates
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Impact Overview
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 5: Profile */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-[#f33266]/30 mb-2"></div>
                        <div className="bg-[#fdf0f2] text-[#f33266] py-2 px-3 rounded-lg font-bold text-[13.5px] text-center w-full shadow-sm mb-4">
                          Profile
                        </div>
                        <div className="relative w-full flex flex-col pl-4">
                          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#f33266]/20"></div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Saved Events
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              My Profile
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Interests
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Settings
                            </div>
                          </div>

                          <div className="relative py-2 w-full">
                            <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f33266]"></div>
                            <div className="bg-white border border-[#fcebee] text-[#1c0d26] py-2 px-2.5 rounded-lg text-center text-[12px] font-bold shadow-sm w-full">
                              Help & Support
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div> {/* End of Left Column */}

            {/* Right Column: Table of Contents */}
            <nav className="lg:col-span-2 sticky top-32 self-start hidden lg:block">
              <ul className="space-y-3 border-l border-border-custom dark:border-white/10 pl-6 ml-8">
                {[
                  'Overview',
                  'Problem Space',
                  'Research',
                  'Personas & Insights',
                  'User Journey',
                  'Information Architecture',
                  'Wireframes',
                  'Visual Design',
                  'High-Fidelity Screens',
                  'Usability Test',
                  'Final Solution',
                ].map((item, idx) => {
                  const slug = item.toLowerCase().replace(/\s+/g, '-')
                  const isActive = activeSection === slug
                  return (
                    <li key={idx}>
                      <a
                        href={`#${slug}`}
                        className={`text-[14px] font-medium transition-all duration-200 block whitespace-nowrap ${isActive
                          ? 'text-[#f33266] pl-2 border-l-2 border-[#f33266]'
                          : 'text-neutral-light hover:text-[#f33266] hover:pl-2 dark:text-neutral-light/60 dark:hover:text-[#f33266] border-l-2 border-transparent'
                          }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div> {/* End of Grid Layout */}
        </Container>
      </div>
    </PageWrapper>
  )
}

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  const project = useMemo(() => {
    if (slug === 'project-2') return PROJECTS[0]
    return PROJECTS.find((p) => p.slug === slug)
  }, [slug])

  if (slug === 'project-2') {
    return <ImpactoCaseStudy />
  }

  if (!project) {
    return (
      <PageWrapper>
        <div className="flex h-[70vh] flex-col items-center justify-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-white">Project Not Found</h2>
          <p className="text-neutral-light">The project case study you are looking for does not exist.</p>
          <Link to="/projects">
            <Button variant="primary">Back to Projects</Button>
          </Link>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      {/* Back link & Header */}
      <section className="pt-32 pb-16 relative">
        <Container>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-light hover:text-white transition-colors mb-8"
            data-hover
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="space-y-6 max-w-4xl">
            <Badge variant="primary">{project.category}</Badge>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-300 font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 gap-6 border-y border-white/5 py-8 mt-12 md:grid-cols-4">
            <div className="space-y-1">
              <span className="text-xxs font-bold uppercase tracking-widest text-neutral-light/50 flex items-center gap-1.5">
                <User size={12} /> Client
              </span>
              <p className="text-sm font-semibold text-white">{project.client || 'N/A'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xxs font-bold uppercase tracking-widest text-neutral-light/50 flex items-center gap-1.5">
                <Briefcase size={12} /> Role
              </span>
              <p className="text-sm font-semibold text-white">{project.role || 'Designer'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xxs font-bold uppercase tracking-widest text-neutral-light/50 flex items-center gap-1.5">
                <Calendar size={12} /> Year
              </span>
              <p className="text-sm font-semibold text-white">{project.year || '2024'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xxs font-bold uppercase tracking-widest text-neutral-light/50">
                Live Prototype
              </span>
              <div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    data-hover
                  >
                    Launch <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-white/40">Figma Prototype</span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Cover Image */}
      <section className="relative w-full aspect-[21/9] bg-[#121217] overflow-hidden border-y border-white/5">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Overview & Problem */}
      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Executive Summary */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white">Project Overview</h2>
            <p className="text-sm leading-relaxed text-neutral-light">{project.summary}</p>
            <p className="text-sm leading-relaxed text-neutral-light">{project.description}</p>
          </div>

          {/* Problem Statement */}
          <div className="lg:col-span-5">
            <Card hoverable={false} className="border-red-500/20 bg-red-950/5 h-full space-y-4">
              <h3 className="font-display text-lg font-bold text-red-400">The Problem</h3>
              <p className="text-xs leading-relaxed text-neutral-light/95">
                {project.problemStatement}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Research & UX Strategy */}
      <section className="py-20 bg-[#08080a] border-y border-white/5">
        <Container className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white">01. Research & Discovery</h2>
            <p className="mt-4 text-sm text-neutral-light leading-relaxed">
              We started by mapping competitor layouts and conducting standard user surveys to identify where friction points occur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {project.research.map((finding, idx) => (
              <Card key={idx} hoverable={false} className="space-y-2">
                <span className="font-mono text-xs text-indigo-400 font-bold">Key Insight {idx + 1}</span>
                <p className="text-xs text-neutral-light/95 leading-relaxed">{finding}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Wireframes & Flows */}
      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-white">02. Wireframing & IA</h2>
            <p className="text-sm text-neutral-light leading-relaxed">
              {project.wireframesDescription}
            </p>
            <p className="text-sm text-neutral-light leading-relaxed">
              Our low-fidelity layouts prioritized spatial cards, reducing click requirements and placing secondary options into swipe drawers.
            </p>
          </div>

          {/* Graphic placeholder */}
          <Card hoverable={false} className="aspect-[4/3] flex items-center justify-center bg-neutral-darkest">
            <div className="text-center space-y-2">
              <p className="text-xs font-mono text-white/30 uppercase">Flow Wireframe Diagram</p>
              <div className="flex gap-2 justify-center">
                <span className="h-8 w-12 rounded border border-white/10" />
                <span className="h-8 w-12 rounded border border-white/10" />
                <span className="h-8 w-12 rounded border border-white/10" />
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-[#08080a] border-y border-white/5">
        <Container className="space-y-12">
          <h2 className="font-display text-3xl font-bold text-white text-center">03. Design Iterations</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {project.designProcess.map((step) => (
              <Card key={step.step} hoverable={false} className="space-y-4">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  {step.step}
                </span>
                <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs text-neutral-light leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Screens */}
      <section className="py-20">
        <Container className="space-y-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">04. High-Fidelity Interface</h2>
            <p className="mt-4 text-sm text-neutral-light max-w-2xl leading-relaxed">
              The finalized interfaces incorporate vibrant hues, precise spacing, and visual cues.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.finalScreens.map((screen, idx) => (
              <div key={idx} className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-[#121217]">
                  <img
                    src={screen.imageUrl}
                    alt={screen.title}
                    className="h-full w-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">{screen.title}</h4>
                  <p className="text-xs text-neutral-light leading-relaxed">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results & Outcomes */}
      <section className="py-20 bg-indigo-950/20 border-t border-white/5">
        <Container className="max-w-4xl text-center space-y-8">
          <h2 className="font-display text-3xl font-bold text-indigo-300">05. Results & Metrics</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {project.results.map((result, idx) => (
              <Card key={idx} hoverable={false} className="border-indigo-500/20 bg-indigo-950/10 p-6 flex flex-col justify-center">
                <p className="text-xs text-neutral-bright/95 leading-relaxed">{result}</p>
              </Card>
            ))}
          </div>

          <div className="pt-6">
            <Link to="/projects">
              <Button variant="outline">Browse More Projects</Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
export default ProjectDetails
