import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// Blog Post Interface
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any[]
  date: string
  readTime: string
  category: string
  image: string
  published: boolean
}

// Case Study Interface
export interface CaseStudy {
  id: string
  title: string
  slug: string
  subtitle: string
  description: string
  content: any[]
  results: string[]
  industry: string
  stage: string
  image: string
  challenge: string
  solution: string
  testimonial: string
  testimonialAuthor: string
  published: boolean
}

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!process.env.NOTION_BLOG_DATABASE_ID) {
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    })

    return response.results.map(mapNotionPageToBlogPost)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Get single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!process.env.NOTION_BLOG_DATABASE_ID) {
    return null
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID!,
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const post = mapNotionPageToBlogPost(response.results[0])
    
    // Get page content
    const pageContent = await notion.blocks.children.list({
      block_id: post.id,
    })
    
    post.content = pageContent.results

    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Get all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!process.env.NOTION_PORTFOLIO_DATABASE_ID) {
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PORTFOLIO_DATABASE_ID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Order',
          direction: 'ascending',
        },
      ],
    })

    return response.results.map(mapNotionPageToCaseStudy)
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

// Get single case study by slug
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  if (!process.env.NOTION_PORTFOLIO_DATABASE_ID) {
    return null
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PORTFOLIO_DATABASE_ID!,
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const caseStudy = mapNotionPageToCaseStudy(response.results[0])
    
    // Get page content
    const pageContent = await notion.blocks.children.list({
      block_id: caseStudy.id,
    })
    
    caseStudy.content = pageContent.results

    return caseStudy
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

// Helper function to map Notion page to BlogPost
function mapNotionPageToBlogPost(page: any): BlogPost {
  const properties = page.properties

  return {
    id: page.id,
    title: getPlainText(properties.Title?.title || []),
    slug: getPlainText(properties.Slug?.rich_text || []),
    excerpt: getPlainText(properties.Excerpt?.rich_text || []),
    content: [],
    date: properties.Date?.date?.start || new Date().toISOString(),
    readTime: getPlainText(properties['Read Time']?.rich_text || []) || '5 min read',
    category: properties.Category?.select?.name || 'General',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '/JANUS-GDrive-theme.png',
    published: properties.Published?.checkbox || false,
  }
}

// Helper function to map Notion page to CaseStudy
function mapNotionPageToCaseStudy(page: any): CaseStudy {
  const properties = page.properties

  return {
    id: page.id,
    title: getPlainText(properties.Title?.title || []),
    slug: getPlainText(properties.Slug?.rich_text || []),
    subtitle: getPlainText(properties.Subtitle?.rich_text || []),
    description: getPlainText(properties.Description?.rich_text || []),
    content: [],
    results: getPlainText(properties.Results?.rich_text || []).split('\n').filter(Boolean),
    industry: properties.Industry?.select?.name || 'SaaS',
    stage: properties.Stage?.select?.name || 'Startup',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '/JANUS-GDrive-theme.png',
    challenge: getPlainText(properties.Challenge?.rich_text || []),
    solution: getPlainText(properties.Solution?.rich_text || []),
    testimonial: getPlainText(properties.Testimonial?.rich_text || []),
    testimonialAuthor: getPlainText(properties['Testimonial Author']?.rich_text || []),
    published: properties.Published?.checkbox || false,
  }
}

// Helper function to extract plain text from Notion rich text
function getPlainText(richText: any[]): string {
  return richText.map((text) => text.plain_text).join('')
}

