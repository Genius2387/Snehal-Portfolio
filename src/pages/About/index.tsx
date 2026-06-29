import React from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { SKILLS, EXPERIENCES } from '@/data/mockData'
import { StaggerContainer } from '@/components/ui/Animations'
import { Briefcase } from 'lucide-react'

export const About: React.FC = () => {
  const designSkills = SKILLS.filter((s) => s.category === 'Design')
  const technicalSkills = SKILLS.filter((s) => s.category === 'Technical')
  const toolsSkills = SKILLS.filter((s) => s.category === 'Tools')
  const processSkills = SKILLS.filter((s) => s.category === 'Process')

  const designProcessSteps = [
    { step: '01', title: 'Discovery & Definition', description: 'Investigating product metrics, carrying out user surveys, and drafting concise problem statements.' },
    { step: '02', title: 'Wireframes & Flows', description: 'Mapping visual page elements, user loops, and validating interaction mechanics via low-fi layouts.' },
    { step: '03', title: 'High-Fidelity Design', description: 'Designing state-of-the-art interactive layouts, standardizing colors, typography, and building Design Systems.' },
    { step: '04', title: 'Code Integration', description: 'Translating Figma prototypes into scalable, lightweight, GSAP-infused React modules.' },
  ]

  return (
    <PageWrapper>
      {/* Intro */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                Alex Rivers — Designer & Architect
              </span>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
                Crafting interfaces that feel natural, built on sound technical engineering.
              </h1>
              <p className="text-base text-neutral-light leading-relaxed">
                I believe that modern UI/UX design shouldn't just look perfect in Figma; it must come alive in the browser with fluid motion design, sound information hierarchy, and bulletproof responsive architectures.
              </p>
              <p className="text-base text-neutral-light leading-relaxed">
                With a dual background in graphic design and frontend software engineering, I bridge the gap between design mockups and actual production applications, ensuring that motion logic, states, and assets translate seamlessly.
              </p>
            </div>

            {/* Profile image placeholder */}
            <div className="lg:col-span-5 relative aspect-square w-full overflow-hidden rounded-2xl border border-white/5 bg-[#121217]">
              <img
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800"
                alt="Alex Rivers Portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-[#08080a] border-y border-white/5">
        <Container>
          <SectionHeading
            badge="Professional Path"
            title="Work Experience"
            subtitle="My journey through agencies, SaaS setups, and client projects."
          />

          <StaggerContainer className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <Card key={exp.id} className="relative overflow-hidden group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-neutral-light">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-neutral-light/50 bg-white/5 px-4 py-1.5 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 list-disc list-inside text-sm text-neutral-light/90">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Skills Inventory */}
      <section className="py-20">
        <Container>
          <SectionHeading
            badge="Core Inventory"
            title="Skills & Technologies"
            subtitle="A detailed breakdown of my capabilities across the designer-developer lifecycle."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Design */}
            <Card hoverable={false} className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white border-b border-white/5 pb-2">Design</h3>
              <div className="flex flex-col gap-3">
                {designSkills.map((s) => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-neutral-bright">{s.name}</span>
                    <span className="text-indigo-400 font-mono">Lvl {s.level}/5</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Technical */}
            <Card hoverable={false} className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white border-b border-white/5 pb-2">Technical</h3>
              <div className="flex flex-col gap-3">
                {technicalSkills.map((s) => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-neutral-bright">{s.name}</span>
                    <span className="text-indigo-400 font-mono">Lvl {s.level}/5</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools */}
            <Card hoverable={false} className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white border-b border-white/5 pb-2">Tools</h3>
              <div className="flex flex-col gap-3">
                {toolsSkills.map((s) => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-neutral-bright">{s.name}</span>
                    <span className="text-indigo-400 font-mono">Lvl {s.level}/5</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Process */}
            <Card hoverable={false} className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white border-b border-white/5 pb-2">Process</h3>
              <div className="flex flex-col gap-3">
                {processSkills.map((s) => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-neutral-bright">{s.name}</span>
                    <span className="text-indigo-400 font-mono">Lvl {s.level}/5</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-[#08080a] border-t border-white/5">
        <Container>
          <SectionHeading
            badge="Methodology"
            title="My Design Process"
            subtitle="How I move from an abstract concept to a polished interactive digital layout."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {designProcessSteps.map((step) => (
              <Card key={step.step} className="space-y-4 relative overflow-hidden group">
                <span className="font-display text-6xl font-extrabold text-white/5 absolute -right-4 -top-4 select-none group-hover:text-indigo-500/10 transition-colors">
                  {step.step}
                </span>
                <h3 className="font-display text-lg font-bold text-white pt-2">{step.title}</h3>
                <p className="text-sm text-neutral-light leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
export default About
