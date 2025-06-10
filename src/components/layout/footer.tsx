import { Github, Linkedin, Mail, Rss, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/lethanhson9901',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tsonstack',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tsonstack',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:contact@tsonstack.com',
    icon: Mail,
  },
  {
    name: 'RSS Feed',
    href: '/feed.xml',
    icon: Rss,
  },
]

const footerLinks = [
  {
    title: 'Blog',
    links: [
      { name: 'Latest Posts', href: '/blog' },
      { name: 'Categories', href: '/categories' },
      { name: 'Archive', href: '/archive' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About Me', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Uses', href: '/uses' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'RSS Feed', href: '/feed.xml' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TS</span>
              </div>
              <span className="font-bold text-xl gradient-text">TSonStack</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Sharing insights about technology, programming, and life experiences. 
              Join me on my journey through code and beyond.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label={link.name}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TSonStack. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with{' '}
              <Link href="https://nextjs.org" className="hover:text-primary transition-colors">
                Next.js
              </Link>{' '}
              and{' '}
              <Link href="https://tailwindcss.com" className="hover:text-primary transition-colors">
                Tailwind CSS
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 