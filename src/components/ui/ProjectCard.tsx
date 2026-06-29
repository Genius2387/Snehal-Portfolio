import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { Badge } from './Badge'

interface ProjectCardProps {
  project: Project
  className?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block overflow-hidden rounded-2xl border border-white/5 bg-[#121217] transition-all duration-500 hover:border-indigo-500/30 ${className}`}
      data-hover
    >
      {/* Thumbnail with overlay & zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-darkest">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent opacity-60 z-10" />
        
        {/* Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Arrow */}
        <div className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 z-20">
          <Badge variant="primary">{project.category}</Badge>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-semibold text-neutral-light/50">{project.year}</span>
        </div>
        <p className="text-sm text-neutral-light line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xxs text-neutral-light/40 font-mono">
              #{tag.toLowerCase().replace(/\s+/g, '')}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
export default ProjectCard
