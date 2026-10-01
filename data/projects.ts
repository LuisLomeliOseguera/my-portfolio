export type Credit = { role: string; name: string }

export type Category = 'music' | 'commercial' | 'narrative'

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
}

function creditSet(): Credit[] {
  return [
    { role: 'Director', name: 'TBD' },
    { role: 'DP', name: 'Luis Lomeli' },
    { role: 'Colorist', name: 'TBD' },
    { role: 'Editor', name: 'TBD' },
  ]
}

function grabSet(prefix: string): Screengrab[] {
  return [
    { src: `${prefix}-grab1.jpg`, width: 420, aspect: '16/9' },
    { src: `${prefix}-grab2.jpg`, width: 220, aspect: '3/4' },
    { src: `${prefix}-grab3.jpg`, width: 320, aspect: '1/1' },
  ]
}

export const projects: Project[] = [
  // --- Music ---
  {
    slug: 'music-1',
    title: 'Music One',
    category: 'music',
    thumbnail: '/music1.jpg',
    gumletVideoId: 'REPLACE_ME',
    screengrabs: grabSet('/music1'),
    credits: creditSet(),
  },
  { slug: 'music-2', title: 'Music Two', category: 'music', thumbnail: '/music2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music2'), credits: creditSet() },
  { slug: 'music-3', title: 'Music Three', category: 'music', thumbnail: '/music3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music3'), credits: creditSet() },
  { slug: 'music-4', title: 'Music Four', category: 'music', thumbnail: '/music4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music4'), credits: creditSet() },
  { slug: 'music-5', title: 'Music Five', category: 'music', thumbnail: '/music5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/music5'), credits: creditSet() },

  // --- Commercial ---
  { slug: 'commercial-1', title: 'Commercial One', category: 'commercial', thumbnail: '/commercial1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial1'), credits: creditSet() },
  { slug: 'commercial-2', title: 'Commercial Two', category: 'commercial', thumbnail: '/commercial2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial2'), credits: creditSet() },
  { slug: 'commercial-3', title: 'Commercial Three', category: 'commercial', thumbnail: '/commercial3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial3'), credits: creditSet() },
  { slug: 'commercial-4', title: 'Commercial Four', category: 'commercial', thumbnail: '/commercial4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial4'), credits: creditSet() },
  { slug: 'commercial-5', title: 'Commercial Five', category: 'commercial', thumbnail: '/commercial5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/commercial5'), credits: creditSet() },

  // --- Narrative ---
  { slug: 'narrative-1', title: 'Narrative One', category: 'narrative', thumbnail: '/narrative1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative1'), credits: creditSet() },
  { slug: 'narrative-2', title: 'Narrative Two', category: 'narrative', thumbnail: '/narrative2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative2'), credits: creditSet() },
  { slug: 'narrative-3', title: 'Narrative Three', category: 'narrative', thumbnail: '/narrative3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative3'), credits: creditSet() },
  { slug: 'narrative-4', title: 'Narrative Four', category: 'narrative', thumbnail: '/narrative4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative4'), credits: creditSet() },
  { slug: 'narrative-5', title: 'Narrative Five', category: 'narrative', thumbnail: '/narrative5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: grabSet('/narrative5'), credits: creditSet() },
]
