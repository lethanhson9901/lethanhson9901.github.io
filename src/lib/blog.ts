import { readingTime } from '@/lib/utils'
import { BlogPost, Category, Tag } from '@/types/blog'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          content,
          publishedAt: data.publishedAt || data.date || '',
          updatedAt: data.updatedAt,
          readingTime: readingTime(content),
          featured: data.featured || false,
          category: data.category || 'Uncategorized',
          tags: data.tags || [],
          author: data.author || {
            name: 'TSonStack',
            avatar: '/images/avatar.jpg'
          },
          seo: data.seo,
        } as BlogPost
      })

    return allPostsData.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const altPath = path.join(postsDirectory, `${slug}.mdx`)
    
    let fileContents: string
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } catch {
      try {
        fileContents = fs.readFileSync(altPath, 'utf8')
      } catch {
        return null
      }
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      publishedAt: data.publishedAt || data.date || '',
      updatedAt: data.updatedAt,
      readingTime: readingTime(content),
      featured: data.featured || false,
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      author: data.author || {
        name: 'TSonStack',
        avatar: '/images/avatar.jpg'
      },
      seo: data.seo,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.featured)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export async function getAllCategories(): Promise<Category[]> {
  const allPosts = await getAllPosts()
  const categoryMap = new Map<string, number>()

  allPosts.forEach(post => {
    const category = post.category
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
  })

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  }))
}

export async function getAllTags(): Promise<Tag[]> {
  const allPosts = await getAllPosts()
  const tagMap = new Map<string, number>()

  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })

  return Array.from(tagMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  }))
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  const searchTerm = query.toLowerCase()

  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  )
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[]): BlogPost[] {
  const related = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      let score = 0
      
      // Same category
      if (post.category === currentPost.category) score += 3
      
      // Shared tags
      const sharedTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      ).length
      score += sharedTags * 2

      return { post, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ post }) => post)

  return related
} 