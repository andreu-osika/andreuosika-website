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
    title: 'Andreu Osika - Product Design for Health Innovation',
    images: ['/images/apple_screen.jpg'], // Verify this is 1200x630px
    description:
      'Digital product designer specializing in health innovation, AI productization, and design systems. 29-month partnership with MARS Inc productizing AI-powered pet health diagnostics.',
    url: 'https://www.andreuosika.com',
    siteName: 'Andreu Osika',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andreu Osika — Product Design for Health Innovation',
    description: 'Helping healthcare and pet health companies accelerate 0-to-1 product development.',
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
