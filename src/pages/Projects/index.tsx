import React, { useState, useMemo } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/data/mockData'
import { Search } from 'lucide-react'

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = useMemo(() => {
    const cats = PROJECTS.map((p) => p.category)
    return ['All', ...Array.from(new Set(cats))]
  }, [])

  // Filter projects based on query and category
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-24">
        <Container>
          <SectionHeading
            badge="My Portfolio"
            title="Works & Case Studies"
            subtitle="Explore high-fidelity designs, interaction layouts, and technical integrations."
          />

          {/* Filtering and Search Controls */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
            {/* Category Filter Badges */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-[0_4px_20px_-4px_rgba(99,102,241,0.4)]'
                        : 'border border-white/10 text-neutral-light hover:border-white/30 hover:text-white'
                    }`}
                    data-hover
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-6 text-sm text-white placeholder-neutral-light/50 outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-light/50" />
            </div>
          </div>

          {/* Grid list */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <p className="text-lg text-neutral-light">No projects match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </PageWrapper>
  )
}
export default Projects
