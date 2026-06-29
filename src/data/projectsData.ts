export interface ProjectItem {
  id: number
  title: string
  image: string
  description: string
  tags: string[]
  slug: string
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "A healthcare monitoring experience",
    image: "/projects/project-1.png",
    description: "Designed a holistic healthcare application focused on symptom tracking, activity monitoring, and seamless device connectivity for better health management.",
    tags: ["HEALTHCARE", "MOBILE APP", "UX/UI DESIGN"],
    slug: "lumina-fintech"
  },
  {
    id: 2,
    title: "A collection of interactive experiments",
    image: "/projects/project-2.png",
    description: "Built Personal Interactive Experiments Exploring AI, Creative Coding, And Interaction Patterns With SwiftUI & P5.Js",
    tags: ["CREATIVE CODING", "WEBGL", "EXPERIMENTS"],
    slug: "project-2"
  },
  {
    id: 3,
    title: "A collection of interactive experiments",
    image: "/projects/project-1.png",
    description: "Built Personal Interactive Experiments exploring AI, Creative Coding, and Interaction Patterns with Three.js & GSAP.",
    tags: ["CREATIVE CODING", "WEBGL", "EXPERIMENTS"],
    slug: "orbit-travel"
  },
  {
    id: 4,
    title: "A collection of interactive experiments",
    image: "/projects/project-1.png",
    description: "Built Personal Interactive Experiments exploring AI, Creative Coding, and Interaction Patterns with Three.js & GSAP.",
    tags: ["CREATIVE CODING", "WEBGL", "EXPERIMENTS"],
    slug: "vertex-art"
  }
]
