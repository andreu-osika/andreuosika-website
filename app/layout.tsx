import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.andreuosika.com'),
  title: {
    default: 'Andreu Osika - AI Augmented Product Design for Health Innovation',
    template: '%s — Andreu Osika',
  },
  description:
    'Digital product designer helping innovation teams at healthcare and pet health companies accelerate 0-to-1 product development through AI-augmented execution and human-centered design.',
  openGraph: {
    title: 'Andreu Osika — Brand, Product & Web Design Studio',
    images: ['/images/apple_screen.jpg'], // Verify this is 1200x630px
    description:
      'A one-person design studio in San Francisco working across brand identity, digital product, and websites. 20+ years, including work for Apple, Yahoo, Nokia, and Comcast.',
    url: 'https://www.andreuosika.com',
    siteName: 'Andreu Osika',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andreu Osika — Brand, Product & Web Design Studio',
    description: 'A one-person design studio in San Francisco working across brand identity, digital product, and websites.',
    images: ['/images/apple_screen.jpg'],
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
