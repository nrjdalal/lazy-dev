import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LazyDev from '@/components/lazy-dev/lazy-dev'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LazyDev - Next.js/React Dev Tool',
  description:
    'LazyDev is a development tool crafted for use within Next.js or React frameworks, streamlining navigation and bookmarking across pages.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LazyDev />
      </body>
    </html>
  )
}
