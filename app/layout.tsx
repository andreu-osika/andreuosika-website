import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.andreuosika.com'),
  title: {
    default: 'Andreu Osika — Experience Design',
    template: '%s — Andreu Osika',
  },
  description:
    'Andreu Osika is a digital product designer based in San Francisco specializing in AI augmented UXUI design, and design systems.',
  openGraph: {
    title: 'Andreu Osika Branding + Experience Design',
    images: ['/images/apple_screen.jpg'], 
    description:
      'Digital product designer based in San Francisco specializing in AI augmented UXUI design, and design systems.',
    url: 'https://www.andreuosika.com',
    siteName: 'Andreu Osika',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andreu Osika Experience Design',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Neue Montreal', sans-serif", margin: 0, backgroundColor: '#000000' }}>
        {children}
      </body>
    </html>
  )
}
