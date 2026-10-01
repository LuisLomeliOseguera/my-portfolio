export type Credit = { role: string; name: string }

export type Category = 'music' | 'commercial' | 'narrative'

export type Project = {
  slug: string
  title: string
  category: Category
  thumbnail: string
  gumletVideoId: string
  screengrabs: string[]
  credits: Credit[]
}

function creditSet(): Credit[] {
  return [
    { role: 'Director', name: 'TBD' },
    { role: 'DP', name: 'Luis Lomeli' },
    { role: 'Colorist', name: 'TBD' },
    { role: 'Editor', name: 'TBD' },
  ]
}

export const projects: Project[] = [
  // --- Music ---
  {
    slug: 'music-1',
    title: 'Music One',
    category: 'music',
    thumbnail: '/music1.jpg',
    gumletVideoId: '6abda1f0160613e7d9be952e',
    screengrabs: ['/music1-grab1.jpg', '/music1-grab2.jpg', '/music1-grab3.jpg'],
    credits: creditSet(),
  },
  { slug: 'music-2', title: 'Music Two', category: 'music', thumbnail: '/music2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/music2-grab1.jpg', '/music2-grab2.jpg', '/music2-grab3.jpg'], credits: creditSet() },
  { slug: 'music-3', title: 'Music Three', category: 'music', thumbnail: '/music3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/music3-grab1.jpg', '/music3-grab2.jpg', '/music3-grab3.jpg'], credits: creditSet() },
  { slug: 'music-4', title: 'Music Four', category: 'music', thumbnail: '/music4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/music4-grab1.jpg', '/music4-grab2.jpg', '/music4-grab3.jpg'], credits: creditSet() },
  { slug: 'music-5', title: 'Music Five', category: 'music', thumbnail: '/music5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/music5-grab1.jpg', '/music5-grab2.jpg', '/music5-grab3.jpg'], credits: creditSet() },

  // --- Commercial ---
  { slug: 'commercial-1', title: 'Commercial One', category: 'commercial', thumbnail: '/commercial1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/commercial1-grab1.jpg', '/commercial1-grab2.jpg', '/commercial1-grab3.jpg'], credits: creditSet() },
  { slug: 'commercial-2', title: 'Commercial Two', category: 'commercial', thumbnail: '/commercial2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/commercial2-grab1.jpg', '/commercial2-grab2.jpg', '/commercial2-grab3.jpg'], credits: creditSet() },
  { slug: 'commercial-3', title: 'Commercial Three', category: 'commercial', thumbnail: '/commercial3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/commercial3-grab1.jpg', '/commercial3-grab2.jpg', '/commercial3-grab3.jpg'], credits: creditSet() },
  { slug: 'commercial-4', title: 'Commercial Four', category: 'commercial', thumbnail: '/commercial4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/commercial4-grab1.jpg', '/commercial4-grab2.jpg', '/commercial4-grab3.jpg'], credits: creditSet() },
  { slug: 'commercial-5', title: 'Commercial Five', category: 'commercial', thumbnail: '/commercial5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/commercial5-grab1.jpg', '/commercial5-grab2.jpg', '/commercial5-grab3.jpg'], credits: creditSet() },

  // --- Narrative ---
  { slug: 'narrative-1', title: 'Narrative One', category: 'narrative', thumbnail: '/narrative1.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/narrative1-grab1.jpg', '/narrative1-grab2.jpg', '/narrative1-grab3.jpg'], credits: creditSet() },
  { slug: 'narrative-2', title: 'Narrative Two', category: 'narrative', thumbnail: '/narrative2.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/narrative2-grab1.jpg', '/narrative2-grab2.jpg', '/narrative2-grab3.jpg'], credits: creditSet() },
  { slug: 'narrative-3', title: 'Narrative Three', category: 'narrative', thumbnail: '/narrative3.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/narrative3-grab1.jpg', '/narrative3-grab2.jpg', '/narrative3-grab3.jpg'], credits: creditSet() },
  { slug: 'narrative-4', title: 'Narrative Four', category: 'narrative', thumbnail: '/narrative4.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/narrative4-grab1.jpg', '/narrative4-grab2.jpg', '/narrative4-grab3.jpg'], credits: creditSet() },
  { slug: 'narrative-5', title: 'Narrative Five', category: 'narrative', thumbnail: '/narrative5.jpg', gumletVideoId: 'REPLACE_ME', screengrabs: ['/narrative5-grab1.jpg', '/narrative5-grab2.jpg', '/narrative5-grab3.jpg'], credits: creditSet() },
]
