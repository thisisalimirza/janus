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

// Client Logo Interface
export interface ClientLogo {
  id: string
  name: string
  logo: string
  website?: string
  industry: string
  stage: string
  order: number
  published: boolean
}

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!process.env.NOTION_BLOG_DATABASE_ID) {
    return []
  }

  try {
    let allResults: any[] = []
    let hasMore = true
    let nextCursor: string | undefined = undefined

    while (hasMore) {
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
        page_size: 100,
        start_cursor: nextCursor,
      })

      allResults = allResults.concat(response.results)
      hasMore = response.has_more
      nextCursor = response.next_cursor || undefined
    }

    return allResults.map(mapNotionPageToBlogPost)
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
    
    // Get page content with pagination and child blocks
    const allBlocks = await getBlocksWithChildren(post.id)
    post.content = allBlocks

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
    let allResults: any[] = []
    let hasMore = true
    let nextCursor: string | undefined = undefined

    while (hasMore) {
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
        page_size: 100,
        start_cursor: nextCursor,
      })

      allResults = allResults.concat(response.results)
      hasMore = response.has_more
      nextCursor = response.next_cursor || undefined
    }

    return allResults.map(mapNotionPageToCaseStudy)
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
    
    // Get page content with pagination and child blocks
    const allBlocks = await getBlocksWithChildren(caseStudy.id)
    caseStudy.content = allBlocks

    return caseStudy
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

// Get all client logos
export async function getClientLogos(): Promise<ClientLogo[]> {
  if (!process.env.NOTION_CLIENTS_DATABASE_ID) {
    return []
  }

  try {
    let allResults: any[] = []
    let hasMore = true
    let nextCursor: string | undefined = undefined

    while (hasMore) {
      const response = await notion.databases.query({
        database_id: process.env.NOTION_CLIENTS_DATABASE_ID!,
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
        page_size: 100,
        start_cursor: nextCursor,
      })

      allResults = allResults.concat(response.results)
      hasMore = response.has_more
      nextCursor = response.next_cursor || undefined
    }

    return allResults.map(mapNotionPageToClientLogo)
  } catch (error) {
    console.error('Error fetching client logos:', error)
    return []
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

// Helper function to map Notion page to ClientLogo
function mapNotionPageToClientLogo(page: any): ClientLogo {
  const properties = page.properties
  
  // Handle both URL property and File property for Logo
  let logoUrl = ''
  if (properties.Logo?.url) {
    // URL property type
    logoUrl = properties.Logo.url
  } else if (properties.Logo?.files?.[0]) {
    // File property type - handle both uploaded files and external links
    const logoFile = properties.Logo.files[0]
    logoUrl = logoFile.file?.url || logoFile.external?.url || ''
  }

  return {
    id: page.id,
    name: getPlainText(properties.Name?.title || []),
    logo: logoUrl,
    website: properties.Website?.url || undefined,
    industry: properties.Industry?.select?.name || 'SaaS',
    stage: properties.Stage?.select?.name || 'Startup',
    order: properties.Order?.number || 0,
    published: properties.Published?.checkbox || false,
  }
}

// Helper function to recursively fetch blocks with their children
async function getBlocksWithChildren(blockId: string): Promise<any[]> {
  let allBlocks: any[] = []
  let hasMore = true
  let nextCursor: string | undefined = undefined

  while (hasMore) {
    try {
      const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 100,
        start_cursor: nextCursor,
      })
      
      const blocks = response.results
      
      // For each block, check if it has children and fetch them
      for (const block of blocks) {
        if ('has_children' in block && block.has_children) {
          try {
            const children = await getBlocksWithChildren(block.id)
            ;(block as any).children = children
          } catch (error) {
            console.warn(`Failed to fetch children for block ${block.id}:`, error)
            ;(block as any).children = []
          }
        }
      }
      
      allBlocks = allBlocks.concat(blocks)
      hasMore = response.has_more
      nextCursor = response.next_cursor || undefined
    } catch (error) {
      console.error(`Error fetching blocks for ${blockId}:`, error)
      break
    }
  }

  return allBlocks
}

// Helper function to extract plain text from Notion rich text
function getPlainText(richText: any[]): string {
  return richText.map((text) => text.plain_text).join('')
}

