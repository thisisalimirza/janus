# JANUS Notion CMS Setup Guide

This guide will help you connect your JANUS website to Notion for content management.

## 🚀 Quick Start

### 1. Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "JANUS Website"
4. Select your workspace
5. Click "Submit"
6. Copy the "Internal Integration Token" - you'll need this

### 2. Set Up Environment Variables

In your `.env.local` file, replace the placeholder values with your actual tokens:

```env
NOTION_TOKEN=secret_your_actual_integration_token_here
NOTION_BLOG_DATABASE_ID=your_blog_database_id_here
NOTION_PORTFOLIO_DATABASE_ID=your_portfolio_database_id_here
```

### 3. Create Your Notion Databases

## 📚 Blog Posts Database

Create a new database in Notion with these exact properties:

| Property Name | Property Type | Description |
|---------------|---------------|-------------|
| `Title` | Title | The blog post title |
| `Slug` | Rich Text | URL slug (e.g., "saas-landing-page-conversion") |
| `Excerpt` | Rich Text | Short description for previews |
| `Date` | Date | Publication date |
| `Read Time` | Rich Text | Reading time (e.g., "5 min read") |
| `Category` | Select | Options: Strategy, Case Study, Conversion, Messaging, Growth |
| `Image` | Files & Media | Featured image for the post |
| `Published` | Checkbox | Whether the post is live |

### Sample Blog Post Entry:
- **Title**: "Why Most SaaS Landing Pages Convert at 2%"
- **Slug**: "saas-landing-page-conversion"
- **Excerpt**: "The messaging mistakes that are costing you customers..."
- **Date**: January 15, 2025
- **Read Time**: "8 min read"
- **Category**: Conversion
- **Image**: Upload your featured image
- **Published**: ✓

## 💼 Portfolio Database

Create another database with these properties:

| Property Name | Property Type | Description |
|---------------|---------------|-------------|
| `Title` | Title | Company name |
| `Slug` | Rich Text | URL slug (e.g., "techflow-workflow-automation") |
| `Subtitle` | Rich Text | Company description |
| `Description` | Rich Text | Brief case study description |
| `Results` | Rich Text | Key results (one per line) |
| `Industry` | Select | Options: B2B SaaS, Cybersecurity, Productivity, etc. |
| `Stage` | Select | Options: Seed, Series A, Series B, etc. |
| `Image` | Files & Media | Case study image |
| `Challenge` | Rich Text | The problem they faced |
| `Solution` | Rich Text | How JANUS solved it |
| `Testimonial` | Rich Text | Client quote |
| `Testimonial Author` | Rich Text | Who said it |
| `Order` | Number | Display order (1, 2, 3...) |
| `Published` | Checkbox | Whether it's live |

### Sample Case Study Entry:
- **Title**: "TechFlow"
- **Slug**: "techflow-workflow-automation"
- **Subtitle**: "B2B Workflow Automation"
- **Description**: "Transformed a complex automation platform..."
- **Results**: 
  ```
  340% increase in demo bookings
  67% improvement in trial-to-paid conversion
  2.3x higher user activation rate
  ```
- **Industry**: B2B SaaS
- **Stage**: Series A
- **Challenge**: "TechFlow had powerful automation features..."
- **Solution**: "We created a 60-second clarity video..."
- **Testimonial**: "JANUS helped us go from a vague pitch..."
- **Testimonial Author**: "Alex S., CEO"
- **Order**: 1
- **Published**: ✓

## 🔗 Connect Your Databases

### 4. Share Databases with Integration

1. Open your Blog Posts database in Notion
2. Click "Share" in the top right
3. Click "Invite" and search for your integration name ("JANUS Website")
4. Give it "Can edit" permissions
5. Repeat for your Portfolio database

### 5. Get Database IDs

1. Open your Blog Posts database
2. Copy the URL - it looks like: `https://notion.so/yourworkspace/abc123def456...`
3. The database ID is the long string after the last slash (before any `?` parameters)
4. Add this to your `.env.local` as `NOTION_BLOG_DATABASE_ID`
5. Repeat for Portfolio database

## 🎨 Content Creation Tips

### Blog Posts
- Write your content directly in the Notion page below the properties
- Use standard Notion blocks: headings, paragraphs, lists, quotes
- Images and embeds work automatically
- Set `Published` to true when ready to go live

### Case Studies
- Add detailed content in the page body for the full case study view
- Use headings to structure sections like "Background", "Process", "Results"
- Include screenshots, metrics, and visuals
- The main properties will show on the portfolio overview page

## 🚀 Going Live

1. Add your content to the databases
2. Set `Published` to true
3. Deploy your website
4. Your content will automatically appear!

## 🔧 Troubleshooting

### "No posts/case studies showing"
- Check that `NOTION_TOKEN` is correct
- Verify database IDs are accurate
- Ensure databases are shared with your integration
- Make sure `Published` is checked on your content

### "Images not loading"
- Upload images directly to Notion (don't use external links)
- Notion will handle the image hosting automatically

### "Content not updating"
- Changes in Notion may take a few minutes to appear
- Clear your browser cache if needed

## 📝 Content Workflow

1. **Draft**: Create new entries with `Published` unchecked
2. **Review**: Write and refine your content
3. **Publish**: Check the `Published` box
4. **Update**: Edit anytime - changes appear automatically

## 🎯 Pro Tips

- Use consistent slug naming (lowercase, hyphens)
- Keep excerpts under 200 characters
- Add relevant categories for better organization
- Use high-quality images (1200x630 recommended)
- Test with `Published` unchecked first

Your JANUS website now has a powerful, easy-to-use CMS! 🎉