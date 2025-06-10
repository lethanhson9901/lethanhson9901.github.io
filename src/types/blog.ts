export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  readingTime: string
  featured?: boolean
  category: string
  tags: string[]
  author: Author
  seo?: SEOData
}

export interface Author {
  name: string
  bio?: string
  avatar?: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
    email?: string
  }
}

export interface Category {
  name: string
  slug: string
  description?: string
  count: number
}

export interface Tag {
  name: string
  slug: string
  count: number
}

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export interface PaginationData {
  currentPage: number
  totalPages: number
  totalPosts: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface BlogListProps {
  posts: BlogPost[]
  pagination?: PaginationData
  category?: string
  tag?: string
}

export interface SearchResult {
  posts: BlogPost[]
  query: string
  totalResults: number
} 