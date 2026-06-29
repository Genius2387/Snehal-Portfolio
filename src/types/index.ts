export interface Project {
  id: string
  title: string
  slug: string
  category: string
  tagline: string
  summary: string
  description: string
  problemStatement: string
  research: string[]
  wireframesDescription: string
  designProcess: {
    step: string
    title: string
    description: string
  }[]
  finalScreens: {
    title: string
    description: string
    imageUrl: string
  }[]
  results: string[]
  tags: string[]
  thumbnail: string
  link?: string
  client?: string
  role?: string
  year?: string
}

export interface Skill {
  name: string
  category: 'Design' | 'Technical' | 'Process' | 'Tools'
  level: number // 1 to 5
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  text: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface NavigationItem {
  name: string
  path: string
}
