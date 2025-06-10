import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lethanhson9901.github.io'),
  title: {
    default: 'TSonStack - Technology & Life Stories',
    template: '%s | TSonStack'
  },
  description: 'Personal blog sharing insights about technology, programming, and life experiences. Join me on my journey through code and beyond.',
  keywords: ['technology', 'programming', 'blog', 'personal', 'software development', 'life stories', 'TSonStack'],
  authors: [{ name: 'TSonStack' }],
  creator: 'TSonStack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lethanhson9901.github.io',
    title: 'TSonStack - Technology & Life Stories',
    description: 'Personal blog sharing insights about technology, programming, and life experiences.',
    siteName: 'TSonStack',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TSonStack Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSonStack - Technology & Life Stories',
    description: 'Personal blog sharing insights about technology, programming, and life experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://lethanhson9901.github.io',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'TSonStack RSS Feed' }],
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        jetbrainsMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 