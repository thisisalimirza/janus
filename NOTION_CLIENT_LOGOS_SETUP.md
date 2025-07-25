# Notion Client Logos Database Setup

This guide explains how to set up the Notion database for managing client logos in the "Trusted by Founders" section.

## Database Schema

Create a new Notion database with the following properties:

### Required Properties

1. **Name** (Title)
   - Type: Title
   - Description: The client company name

2. **Logo** (Files & Media)
   - Type: Files & Media
   - Description: Upload the client's logo image
   - Recommended: PNG or SVG format, transparent background preferred

3. **Published** (Checkbox)
   - Type: Checkbox
   - Description: Controls whether the logo appears on the website
   - Default: Unchecked

4. **Order** (Number)
   - Type: Number
   - Description: Display order (lower numbers appear first)
   - Example: 1, 2, 3, 4...

### Optional Properties

5. **Website** (URL)
   - Type: URL
   - Description: Client's website URL (makes logo clickable)

6. **Industry** (Select)
   - Type: Select
   - Options: SaaS, Fintech, Healthcare, E-commerce, etc.
   - Description: Client's industry category

7. **Stage** (Select)
   - Type: Select
   - Options: Startup, Scale-up, Enterprise, etc.
   - Description: Company stage/size

## Environment Variable

Add the database ID to your `.env.local` file:

```env
NOTION_CLIENTS_DATABASE_ID=your_database_id_here
```

To find your database ID:
1. Open your Notion database
2. Copy the URL
3. Extract the ID from the URL (the long string of characters before any query parameters)

## How to Add Client Logos

1. **Create a New Entry**
   - Add a new row to your Notion database
   - Fill in the client name in the "Name" field

2. **Upload Logo**
   - Click the "Logo" field
   - Upload the client's logo image
   - Recommended dimensions: 200x100px or similar aspect ratio
   - Use PNG or SVG format for best quality

3. **Set Display Order**
   - Enter a number in the "Order" field
   - Lower numbers appear first (1, 2, 3, 4...)

4. **Add Website (Optional)**
   - If you want the logo to be clickable, add the client's website URL

5. **Publish**
   - Check the "Published" checkbox to make it appear on the website

## Logo Display Features

- **Responsive Grid**: Automatically adjusts from 2 columns on mobile to 4 on desktop
- **Grayscale Effect**: Logos appear in grayscale and become colored on hover
- **Clickable**: If website URL is provided, logos become clickable links
- **Fallback**: If no logo image is provided, displays company name with placeholder
- **Graceful Degradation**: Shows placeholder logos if Notion database is unavailable

## Best Practices

### Logo Guidelines
- **Format**: PNG with transparent background preferred
- **Size**: Optimize images to be under 100KB for fast loading
- **Dimensions**: Maximum 200x100px recommended
- **Contrast**: Ensure logos are visible in grayscale

### Content Management
- **Ordering**: Use increments of 10 (10, 20, 30, 40) to allow easy reordering
- **Testing**: Use "Published" checkbox to test changes before going live
- **Backup**: Keep original logo files in case you need to re-upload

### Performance
- **Image Optimization**: Next.js automatically optimizes images
- **Caching**: Logo data is cached for 10 minutes (ISR revalidation)
- **Fallbacks**: Always provide fallback content for better UX

## Troubleshooting

### Database Not Loading
- Check that `NOTION_CLIENTS_DATABASE_ID` is set correctly
- Verify the Notion integration has access to the database
- Ensure at least one entry has "Published" checked

### Images Not Displaying
- Verify image files are properly uploaded to Notion
- Check image file size (should be under 32MB)
- Ensure proper file permissions in Notion

### Order Issues
- Check that "Order" values are numbers, not text
- Use unique order values to avoid sorting conflicts
- Remember: lower numbers appear first

## Database Template

You can duplicate this Notion template to get started quickly:

**Database Structure:**
```
| Name (Title) | Logo (Files) | Published (Checkbox) | Order (Number) | Website (URL) | Industry (Select) | Stage (Select) |
|--------------|--------------|---------------------|----------------|---------------|------------------|----------------|
| TechFlow     | [logo.png]  | ✓                   | 10             | techflow.com   | SaaS            | Startup        |
| DataVault    | [logo.png]  | ✓                   | 20             | datavault.io   | Fintech         | Scale-up       |
```

The integration will automatically pull published logos and display them in the specified order on your homepage.