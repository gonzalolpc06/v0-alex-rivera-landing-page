import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Rivera | 90-Day Executive Rebuild - Hybrid Performance Coaching',
  description:
    'Data-driven hybrid performance coaching for executives. Build strength, mobility, and energy in just 3 hours per week. Join the 90-Day Executive Rebuild.',
  generator: 'v0.app',
  keywords: [
    'executive coaching',
    'hybrid performance',
    'fitness coaching',
    '90-day program',
    'biometric training',
    'executive fitness',
  ],
  openGraph: {
    title: 'Build the Body That Fuels Your Career | Alex Rivera',
    description:
      'The 90-Day Executive Rebuild: strength, mobility, and nutrition coaching designed for high-performing professionals.',
    type: 'website',
    url: 'https://alexrivera.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rivera | 90-Day Executive Rebuild',
    description:
      'Data-driven hybrid performance coaching for executives.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
