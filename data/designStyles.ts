export interface DesignStyle {
  id: number
  slug: string
  name: string
  tagline: string
  description: string
  bestFor: string
  icon: string
  demo: 'glassmorphism' | 'neumorphism' | 'cyber-neon' | 'bento-grid' | 'neo-brutalism' | 'swiss-minimalism' | 'claymorphism' | 'retro-futurism' | 'editorial' | 'illustration-led'
}

export const designStyles: DesignStyle[] = [
  {
    id: 1,
    slug: 'glassmorphism',
    name: 'Glassmorphism',
    tagline: 'Frosted Glass, Multi-Layered Depth & Translucent Elegance',
    description:
      'Uses multi-plane backdrop-filter blurs, subtle glowing border highlights, and semi-transparent layers over vibrant gradients to establish clean visual depth and modern sophistication.',
    bestFor: 'Fintech apps, luxury SaaS platforms, crypto dashboards, and high-tech product suites.',
    icon: 'fa-layer-group',
    demo: 'glassmorphism',
  },
  {
    id: 2,
    slug: 'neumorphism',
    name: 'Neumorphism (Soft UI)',
    tagline: 'Soft Tactile Shadows, Extruded Surfaces & Organic Interfaces',
    description:
      'Mimics real-world physical buttons through delicate dual-directional shadows on monochromatic surfaces, making interface components appear seamlessly extruded from or pressed into the canvas.',
    bestFor: 'Smart home controllers, audio software, IoT hardware portals, and minimalist utilities.',
    icon: 'fa-circle-dot',
    demo: 'neumorphism',
  },
  {
    id: 3,
    slug: 'cyber-dark-neon',
    name: 'Cyber Dark / Neon',
    tagline: 'Deep Space Palettes, High-Voltage Accents & Futuristic Energy',
    description:
      'Combines deep space midnight backgrounds with high-voltage cyan, electric blue, and purple neon glow borders, ambient light blooms, and luminous typography to create an unforgettable tech atmosphere.',
    bestFor: 'AI tools, developer platforms, Web3 ecosystems, gaming portals, and cutting-edge digital agencies.',
    icon: 'fa-bolt-lightning',
    demo: 'cyber-neon',
  },
  {
    id: 4,
    slug: 'bento-grid',
    name: 'Bento Grid',
    tagline: 'Modular Compartmentalization, Visual Hierarchy & Scannability',
    description:
      'Organizes diverse features, live metrics, and media into asymmetric, harmoniously proportioned rounded tiles inspired by Japanese bento boxes for effortless scanning and dense information delivery.',
    bestFor: 'SaaS feature showcases, product landing pages, modern portfolios, and executive dashboards.',
    icon: 'fa-table-cells-large',
    demo: 'bento-grid',
  },
  {
    id: 5,
    slug: 'neo-brutalism',
    name: 'Neo-Brutalism',
    tagline: 'Unapologetic High-Contrast Outlines, Vivid Colors & Raw Personality',
    description:
      'Subverts sanitized corporate aesthetics with heavy solid black borders, hard unblurred offset drop shadows, high-saturation color blocks, and bold, confident sans-serif typography.',
    bestFor: 'Creator economy platforms, challenger fintech brands, streetwear e-commerce, and viral consumer apps.',
    icon: 'fa-shapes',
    demo: 'neo-brutalism',
  },
  {
    id: 6,
    slug: 'swiss-minimalism',
    name: 'Swiss Minimalism',
    tagline: 'Strict Grid Architecture, Expressive Whitespace & Typographic Clarity',
    description:
      'Rooted in the International Typographic Style: disciplined negative space, structured mathematical column alignments, crisp grotesque typography, and deliberate single-color focal points.',
    bestFor: 'Architecture studios, high-end design consultancies, law firms, and editorial publications.',
    icon: 'fa-compass-drafting',
    demo: 'swiss-minimalism',
  },
  {
    id: 7,
    slug: 'claymorphism',
    name: 'Claymorphism',
    tagline: 'Playful 3D Puffy Shapes, Inset Highlights & Tactile Warmth',
    description:
      'An evolution of soft UI featuring rounded pillowy forms, friendly pastel tones, and dual inset/outset lighting that crafts an inviting, toy-like 3D clay feeling that invites user interaction.',
    bestFor: 'EdTech platforms, family & kid apps, gamified productivity tools, and modern onboarding flows.',
    icon: 'fa-cloud',
    demo: 'claymorphism',
  },
  {
    id: 8,
    slug: 'retro-futurism',
    name: 'Retro-Futurism / Synthwave',
    tagline: '80s Cyber-Sunset Gradients, 3D Horizon Grids & Chrome Vibes',
    description:
      'Blends 1980s nostalgia with futuristic visions using glowing sunset color gradients, perspective horizon wireframe grids, illuminated chrome headings, and arcade-inspired vibes.',
    bestFor: 'Gaming studios, music & audio platforms, creative production houses, and nostalgic lifestyle brands.',
    icon: 'fa-sun',
    demo: 'retro-futurism',
  },
  {
    id: 9,
    slug: 'editorial-typography',
    name: 'Editorial / Typography-Led',
    tagline: 'Refined Serif Type, Magazine Layouts & Cultivated Elegance',
    description:
      'Prioritizes graceful editorial layouts with prominent serif headings, oversized decorative drop-caps, delicate hairline rules, balanced multi-column proportions, and literary prestige.',
    bestFor: 'Luxury fashion houses, digital literary magazines, venture capital firms, and boutique consultancies.',
    icon: 'fa-feather-pointed',
    demo: 'editorial',
  },
  {
    id: 10,
    slug: 'illustration-led',
    name: 'Illustration-Led',
    tagline: 'Organic Fluid Shapes, Vibrant Vector Art & Human-Centric Storytelling',
    description:
      'Centers user experience around warm, friendly, custom-drawn organic shapes, floating playful elements, and visual storytelling that builds instant emotional rapport.',
    bestFor: 'B2B SaaS onboarding, lifestyle apps, healthcare platforms, and customer-first service businesses.',
    icon: 'fa-palette',
    demo: 'illustration-led',
  },
]
