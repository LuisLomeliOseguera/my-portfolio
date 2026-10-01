export type Credit = { role: string; name: string }

export type Category = 'music' | 'commercial' | 'narrative' | 'documentary' | 'color'

export type Screengrab = { src: string; width: number; aspect?: string }

export type Project = {
  slug: string
  title: string
  category: Category
  thumbnail: string
  gumletVideoId: string
  screengrabs: Screengrab[]
  credits: Credit[]
  notes?: string[]
  featured?: boolean
}

function creditSet(): Credit[] {
  return [
    { role: 'Director', name: 'TBD' },
    { role: 'DP', name: 'Luis Lomeli' },
    { role: 'Colorist', name: 'TBD' },
    { role: 'Editor', name: 'TBD' },
  ]
}

// Deterministic PRNG seeded from a string, so sizing is randomized per
// project but stable across rebuilds (not reshuffling every dev restart).
function seededRandom(seed: string): () => number {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
  }
  return () => {
    h = (Math.imul(h, 1664525) + 1013904223) | 0
    return ((h >>> 0) % 10000) / 10000
  }
}

const WIDTH_POOL = [220, 260, 300, 340, 380, 420, 460, 500]
const ASPECT_POOL = ['16/9'] // screengrabs are frames from horizontal video, so aspect stays fixed; only size varies

function grabSet(prefix: string): Screengrab[] {
  const rand = seededRandom(prefix)
  const count = 3 + Math.floor(rand() * 2) // 3 or 4 screengrabs per project
  return Array.from({ length: count }, (_, i) => ({
    src: `${prefix}-grab${i + 1}.jpg`,
    width: WIDTH_POOL[Math.floor(rand() * WIDTH_POOL.length)],
    aspect: ASPECT_POOL[Math.floor(rand() * ASPECT_POOL.length)],
  }))
}

export const projects: Project[] = [
  // --- Music ---
  // music-2 is declared first so it lands at index 0 of the featured
  // array — it's the only project with a real Gumlet video right now,
  // and the homepage hero reel autoplays whatever is at index 0.
  {
    slug: 'music-2',
    title: 'GT- Blow That Money',
    category: 'music',
    thumbnail: '/music2.jpg',
    gumletVideoId: '6abda1f0160613e7d9be952e',
    screengrabs: grabSet('/music2'),
    credits: [
      { role: 'Director', name: 'Tremaine Edwards' },
      { role: 'DP', name: 'Luis Lomeli Oseguera' },
      { role: 'Colorist', name: 'TBD' },
    ],
    featured: true,
  },
  {
    slug: 'music-1',
    title: 'Music One',
    category: 'music',
    thumbnail: '/music1.jpg',
    gumletVideoId: 'REPLACE_ME',
    screengrabs: grabSet('/music1'),
    credits: creditSet(),
    featured: true,
  },
  { slug: 'music-3', title: 'Music Three', category: 'music', thumbnail: '/music3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music3'), credits: creditSet() },
  { slug: 'music-4', title: 'Music Four', category: 'music', thumbnail: '/music4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music4'), credits: creditSet() },
  { slug: 'music-5', title: 'Music Five', category: 'music', thumbnail: '/music5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music5'), credits: creditSet() },

  // --- Commercial ---
  { slug: 'commercial-1', title: 'Commercial One', category: 'commercial', thumbnail: '/commercial1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial1'), credits: creditSet(), featured: true },
  { slug: 'commercial-2', title: 'Commercial Two', category: 'commercial', thumbnail: '/commercial2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial2'), credits: creditSet() },
  { slug: 'commercial-3', title: 'Commercial Three', category: 'commercial', thumbnail: '/commercial3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial3'), credits: creditSet() },
  { slug: 'commercial-4', title: 'Commercial Four', category: 'commercial', thumbnail: '/commercial4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial4'), credits: creditSet() },
  { slug: 'commercial-5', title: 'Commercial Five', category: 'commercial', thumbnail: '/commercial5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial5'), credits: creditSet() },

  // --- Narrative ---
  { slug: 'narrative-1', title: 'Narrative One', category: 'narrative', thumbnail: '/narrative1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative1'), credits: creditSet(), featured: true },
  { slug: 'narrative-2', title: 'Narrative Two', category: 'narrative', thumbnail: '/narrative2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative2'), credits: creditSet(), featured: true },
  { slug: 'narrative-3', title: 'Narrative Three', category: 'narrative', thumbnail: '/narrative3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative3'), credits: creditSet() },
  { slug: 'narrative-4', title: 'Narrative Four', category: 'narrative', thumbnail: '/narrative4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative4'), credits: creditSet() },
  { slug: 'narrative-5', title: 'Narrative Five', category: 'narrative', thumbnail: '/narrative5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative5'), credits: creditSet() },

  // --- Documentary ---
  { slug: 'documentary-1', title: 'Documentary One', category: 'documentary', thumbnail: '/documentary1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/documentary1'), credits: creditSet() },
  { slug: 'documentary-2', title: 'Documentary Two', category: 'documentary', thumbnail: '/documentary2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/documentary2'), credits: creditSet() },
  { slug: 'documentary-3', title: 'Documentary Three', category: 'documentary', thumbnail: '/documentary3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/documentary3'), credits: creditSet() },

  // --- Color ---
  { slug: 'color-1', title: 'Color One', category: 'color', thumbnail: '/color1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/color1'), credits: creditSet() },
]
