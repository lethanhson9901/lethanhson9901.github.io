import { formatDate } from '@/lib/utils'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

// Mock data - in a real app, this would come from your content management system
const featuredPost = {
  slug: 'getting-started-with-nextjs-15',
  title: 'Getting Started with Next.js 15: A Complete Guide',
  excerpt: 'Explore the latest features in Next.js 15 including React 19 support, enhanced App Router, and improved performance optimizations.',
  publishedAt: '2024-01-15',
  readingTime: '8 min read',
  category: 'Technology',
  tags: ['Next.js', 'React', 'Web Development'],
  author: {
    name: 'TSonStack',
    avatar: '/images/avatar.jpg'
  }
}

const latestPosts = [
  {
    slug: 'mastering-typescript-advanced-patterns',
    title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
    excerpt: 'Deep dive into advanced TypeScript patterns that will make your code more robust and maintainable.',
    publishedAt: '2024-01-12',
    readingTime: '6 min read',
    category: 'Technology',
  },
  {
    slug: 'work-life-balance-in-tech',
    title: 'Finding Work-Life Balance in the Tech Industry',
    excerpt: 'Practical strategies for maintaining mental health and productivity while working in fast-paced tech environments.',
    publishedAt: '2024-01-10',
    readingTime: '4 min read',
    category: 'Life',
  },
  {
    slug: 'building-scalable-react-applications',
    title: 'Building Scalable React Applications with Modern Tools',
    excerpt: 'Learn how to structure and build React applications that can grow with your team and requirements.',
    publishedAt: '2024-01-08',
    readingTime: '10 min read',
    category: 'Technology',
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            Welcome to TSonStack
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A personal blog sharing insights about technology, programming, and life experiences. 
            Join me on my journey through code and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Read Latest Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold">Featured Post</h2>
        </div>
        <article className="relative overflow-hidden rounded-2xl border bg-card p-8 lg:p-12 hover:bg-muted/50 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {featuredPost.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(featuredPost.publishedAt)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readingTime}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {featuredPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Read full post
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View all posts
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="group border rounded-xl p-6 bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(post.publishedAt)}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readingTime}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:underline font-medium text-sm"
                >
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
} 