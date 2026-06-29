import type { Project, Skill, Experience, Testimonial, SocialLink, NavigationItem } from '../types'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', path: '/home' },
  { name: 'Work', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'Dribbble' },
  { platform: 'Behance', url: 'https://behance.net', icon: 'Behance' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
]

export const SKILLS: Skill[] = [
  // Design
  { name: 'User Interface (UI) Design', category: 'Design', level: 5 },
  { name: 'User Experience (UX) Research', category: 'Design', level: 5 },
  { name: 'Interaction Design', category: 'Design', level: 5 },
  { name: 'Design Systems', category: 'Design', level: 5 },
  { name: 'Wireframing & Prototyping', category: 'Design', level: 5 },
  { name: '3D Visual Design', category: 'Design', level: 4 },
  
  // Tools
  { name: 'Figma', category: 'Tools', level: 5 },
  { name: 'Adobe Creative Suite', category: 'Tools', level: 4 },
  { name: 'Framer / Webflow', category: 'Tools', level: 4 },
  { name: 'Spline 3D', category: 'Tools', level: 4 },
  { name: 'Cinema 4D', category: 'Tools', level: 3 },
  
  // Technical
  { name: 'React.js / Next.js', category: 'Technical', level: 4 },
  { name: 'TypeScript', category: 'Technical', level: 4 },
  { name: 'Tailwind CSS', category: 'Technical', level: 5 },
  { name: 'GSAP Animations', category: 'Technical', level: 5 },
  { name: 'CSS / SCSS / Styled-Components', category: 'Technical', level: 5 },
  
  // Process
  { name: 'Design Thinking', category: 'Process', level: 5 },
  { name: 'Agile/Scrum', category: 'Process', level: 4 },
  { name: 'Usability Testing', category: 'Process', level: 5 },
  { name: 'A/B Testing & Analytics', category: 'Process', level: 4 },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Product Designer',
    company: 'Vortex Agency',
    period: '2023 - Present',
    description: [
      'Lead a team of 4 designers working on decentralized finance applications and SaaS tools.',
      'Designed a unified Design System used across 5 sub-brands, improving design-to-development velocity by 40%.',
      'Collaborated closely with VP of Product and Tech Leads to define the 2-year product roadmap.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Senior UI/UX Designer',
    company: 'Aura Financial',
    period: '2021 - 2023',
    description: [
      'Spearheaded the complete redesign of the Aura Mobile Wallet app (iOS/Android), increasing 30-day user retention by 22%.',
      'Designed conversational interfaces, micro-interactions, and visual layouts for AI-guided budgeting features.',
      'Conducted 50+ user interviews and usability tests to validate product design directions.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Interaction Designer & Frontend Engineer',
    company: 'Pulse Digital',
    period: '2019 - 2021',
    description: [
      'Created high-fidelity interactive web and mobile prototypes using Figma, Framer, and custom React code.',
      'Coded responsive layouts and complex GSAP animation pipelines for award-winning marketing campaigns.',
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Aura Financial',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    text: 'Alex possesses a rare combination of exceptional visual craft and deep engineering empathy. The designs delivered were stunning, but the clean React integration and attention to motion detail truly set them apart.',
  },
  {
    id: 't-2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Orbit Travel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    text: 'Working with Alex was a game-changer for our launch. The design thinking and user flow optimization solved critical drop-offs in our checkout flow. Highly recommended!',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'p-1',
    title: 'Lumina Fintech',
    slug: 'lumina-fintech',
    category: 'Mobile App',
    tagline: 'Sleek dark-mode digital wallet for global digital assets.',
    summary: 'A futuristic personal finance ecosystem designed for seamless transactions, micro-investing, and multi-currency management.',
    description: 'Lumina Fintech reimagines mobile banking for digital natives. By combining high-contrast neon visual design with a hyper-minimalist dashboard structure, the app reduces cognitive overload and helps users manage fiat and digital tokens concurrently in a unified portfolio.',
    problemStatement: 'Modern banking apps are often cluttered, using outdated interface conventions that fail to support hybrid asset holdings (fiat & crypto). Users struggle to gain a holistic view of their financial health, resulting in fragmented workflows across multiple platforms.',
    research: [
      'Conducted 30 user surveys showing that 72% of respondents own both crypto assets and standard bank accounts.',
      'Identified main user pain points: high friction in exchanging assets, confusing gas fee representations, and generic banking aesthetics.',
      'Built user personas targeting Millennial and Gen Z investors looking for simplified micro-investing.',
    ],
    wireframesDescription: 'Using low-fidelity drafts, we mapped a 3-tab layout: Wallet, Markets, and Discover. We simplified standard transactional workflows into a single-swipe gesture.',
    designProcess: [
      {
        step: '01. Discovery',
        title: 'User Interviews & Market Alignment',
        description: 'Analyzing current investment ecosystems and conducting competitive benchmarks against legacy apps and crypto-native wallets.',
      },
      {
        step: '02. Information Architecture',
        title: 'Reducing Cognitive Load',
        description: 'Mapping out navigation flows and consolidating multi-currency transactions into clean, modular cards with contextual quick actions.',
      },
      {
        step: '03. Motion Design',
        title: 'Micro-interactions & Animations',
        description: 'Using GSAP and Framer prototype scripts to test custom tab changes, magnetic action buttons, and transition state loading loops.',
      },
    ],
    finalScreens: [
      {
        title: 'Unified Portfolio Dashboard',
        description: 'A dynamic radial card displaying total net worth across fiat, stock, and digital assets with micro-animations.',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
      },
      {
        title: 'Swift Transfer Interface',
        description: 'A one-swipe card interaction mimicking physical card swipes to instantly swap tokens or send cash.',
        imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800',
      },
    ],
    results: [
      '42% increase in wallet creation conversions during the beta launch.',
      'Average transaction completion time reduced from 45 seconds to 12 seconds.',
      'Awarded "Best Mobile UX" by DesignHub Awards.',
    ],
    tags: ['UI/UX', 'Product Design', 'Fintech', 'Mobile'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
    client: 'Lumina Labs',
    role: 'Lead UI/UX Designer',
    year: '2023',
  },
  {
    id: 'p-2',
    title: 'Orbit Travel',
    slug: 'orbit-travel',
    category: 'Web Platform',
    tagline: 'Autonomous AI travel curator and booking engine.',
    summary: 'A Web3 travel ecosystem that plans, packages, and books global trips automatically based on personalized aesthetic preferences.',
    description: 'Orbit is a concept travel platform designed to take user inputs (desired weather, environment, pacing) and use predictive AI to structure full itineraries, flights, and accommodations in a single beautifully structured web view.',
    problemStatement: 'Travel planning requires browsing dozens of blogs, maps, and flight aggregators. This causes decision fatigue. Users need an interface that consolidates travel planning into an immersive, aesthetic journey builder.',
    research: [
      'Analyzed user flows showing travelers open an average of 14 tabs during planning.',
      'Identified a demand for visual-first booking interfaces rather than text-heavy filter tables.',
    ],
    wireframesDescription: 'We focused on a canvas-based layout where destinations appear as interactive spatial nodes that can be connected or rearranged on a map timeline.',
    designProcess: [
      {
        step: '01. Ideation',
        title: 'Moodboarding & Spatial UI',
        description: 'Exploring layouts where visual media dictates the itinerary. Moving away from standard date-pickers to timeline sliders.',
      },
      {
        step: '02. Prototyping',
        title: 'GSAP Timeline Animations',
        description: 'Building high-fidelity interactive map widgets where hovering on routes reveals location previews.',
      },
    ],
    finalScreens: [
      {
        title: 'Trip Canvas Planner',
        description: 'An interactive vertical canvas with sticky maps and dynamic cards representing days in the itinerary.',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
    results: [
      'Itinerary build duration dropped by 65%.',
      'Net Promoter Score (NPS) reached 78 during private beta tests.',
    ],
    tags: ['Web Design', 'Interaction Design', 'Travel', 'AI System'],
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
    client: 'Orbit Ventures',
    role: 'Interaction Designer',
    year: '2022',
  },
  {
    id: 'p-3',
    title: 'Vertex Art',
    slug: 'vertex-art',
    category: 'Web3 / Desktop',
    tagline: 'Immersive exhibition portal for digital artists.',
    summary: 'A virtual 3D-assisted gallery platform allowing creators to showcase digital artifacts and art collections in custom interactive spaces.',
    description: 'Vertex is a desktop-optimized web portal utilizing WebGL and CSS 3D transforms to create responsive, interactive gallery layouts. Built for modern creators who require gallery-style storytelling for digital tokens.',
    problemStatement: 'Current marketplace layouts are uniform grids that reduce art pieces to identical thumbnails. Artists lose the gallery atmosphere that provides emotional context to physical artworks.',
    research: [
      'Interviewed 15 top digital creators who noted grid portfolios diminish the narrative value of their collections.',
      'Identified desktop usability preferences: mouse drag, horizontal scroll, and keyboard navigation.',
    ],
    wireframesDescription: 'We built a horizontal timeline grid using GSAP ScrollTrigger to simulate walking through a long hallway gallery.',
    designProcess: [
      {
        step: '01. Conceptualization',
        title: '3D Spatial Mapping',
        description: 'Defining camera depths, hover parallax values, and clean backdrop glows matching each piece of art.',
      },
    ],
    finalScreens: [
      {
        title: 'Horizontal Exhibition Wall',
        description: 'A horizontal scroll flow showcasing art frames with custom shadows and depth offsets.',
        imageUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?w=800',
      },
    ],
    results: [
      'Average user session duration increased to 5.4 minutes.',
      'Creator satisfaction rating of 94% on layout flexibility.',
    ],
    tags: ['3D Web', 'GSAP Motion', 'Exhibition Design'],
    thumbnail: 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?w=600',
    client: 'Vertex DAO',
    role: 'Creative Developer',
    year: '2024',
  },
]
