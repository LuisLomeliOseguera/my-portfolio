import { Instrument_Serif, Archivo } from 'next/font/google'

// Display font: editorial serif, used for titles and the name mark
export const displayFont = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Body font: used for everything else (nav, labels, credits, running text)
export const bodyFont = Archivo({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
