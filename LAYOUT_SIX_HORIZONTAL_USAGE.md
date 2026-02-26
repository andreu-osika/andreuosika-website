# Layout Six Horizontal Usage Guide

## Overview
The **six-horizontal** layout is a new portfolio grid layout option that displays 6 items in a single horizontal row. It features tight spacing, a black background, and fully responsive behavior.

## Features
- **Grid Structure**: 1 row × 6 columns = 6 items total
- **CSS Grid**: `grid-template-columns: repeat(6, 1fr)`
- **Gap**: 35px (consistent with other layouts)
- **Background**: Black (#000000)
- **Container Padding**: 14px
- **Border Support**: Optional borders via `showBorder` property on individual images
- **Max Width**: 1400px

## Responsive Behavior
- **Desktop (default)**: 6 columns in 1 row
- **Large tablet (≤1280px)**: 3 columns in 2 rows
- **Small tablet (≤768px)**: 2 columns in 3 rows
- **Mobile (≤640px)**: 1 column in 6 rows

## Basic Usage

### Simple String Array
```typescript
{
  layout: 'six-horizontal',
  images: [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
  ]
}
```

### With Optional Title
```typescript
{
  layout: 'six-horizontal',
  title: 'My Gallery',
  images: [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
  ]
}
```

### With Border Support (ImageData Objects)
```typescript
{
  layout: 'six-horizontal',
  title: 'Product Showcase',
  images: [
    { filename: 'product1.png', showBorder: true },
    { filename: 'product2.png', showBorder: true },
    { filename: 'product3.png', showBorder: false },
    { filename: 'product4.png', showBorder: true },
    { filename: 'product5.png', showBorder: false },
    { filename: 'product6.png', showBorder: true }
  ]
}
```

### Mixed String and ImageData Format
```typescript
{
  layout: 'six-horizontal',
  images: [
    'hero-shot.jpg',
    { filename: 'detail1.png', showBorder: true },
    { filename: 'detail2.png', showBorder: true },
    'context-shot.jpg',
    { filename: 'closeup1.png', showBorder: true },
    'final-shot.jpg'
  ]
}
```

## Real-World Example in projectData.ts

```typescript
{
  slug: 'my-project',
  title: 'My Portfolio Project',
  bgTheme: 'black',
  nextSlug: 'next-project',
  deliverables: ['UI Design', 'Brand Identity'],
  description: `Project description here...`,
  sections: [
    { layout: 'hero', images: ['hero.jpg'] },
    
    // Six horizontal layout with title
    { 
      layout: 'six-horizontal',
      title: 'Design Variations',
      images: [
        'variation1.jpg',
        'variation2.jpg',
        'variation3.jpg',
        'variation4.jpg',
        'variation5.jpg',
        'variation6.jpg'
      ]
    },
    
    // Six horizontal layout with borders
    { 
      layout: 'six-horizontal',
      title: 'Mobile Screens',
      images: [
        { filename: 'screen1.png', showBorder: true },
        { filename: 'screen2.png', showBorder: true },
        { filename: 'screen3.png', showBorder: true },
        { filename: 'screen4.png', showBorder: true },
        { filename: 'screen5.png', showBorder: true },
        { filename: 'screen6.png', showBorder: true }
      ]
    },
    
    { layout: 'full', images: ['final-result.jpg'] },
  ],
}
```

## Styling Details

### Black Background Container
The layout wraps all images in a black container with minimal padding, creating a gallery-like presentation:
- Background color: `#000000`
- Padding: `14px`
- Gap between images: `35px`

### Image Borders
When using `showBorder: true`:
- Border: `1px solid #eaebf1` (light grey)
- Useful for white/light images against the black background

### Max Width
- Container max-width: `1400px`
- Centered on the page

## When to Use This Layout

**Best for:**
- Horizontal product variations or color schemes
- Progressive detail shots (wide to close-up)
- Timeline or step-by-step sequences
- Icon sets or logo variations
- Before/after series
- Mobile UI screen flows

**Consider alternatives for:**
- Images with different aspect ratios (use `six` or `four` instead)
- Fewer than 6 images (use `triple-big` or `quad`)
- More than 6 images (split into multiple sections)

## Comparison with Other Layouts

| Layout | Grid | Gap | Background | Responsive |
|--------|------|-----|------------|------------|
| **six-horizontal** | 1×6 | 35px | Black | 6→3→2→1 |
| six | 2×3 | 35px | Black | 3→2→1 |
| six-tall | 3×2 | 35px | None | 2→1 |
| four | 2×2 | 35px | None | 2→1 |
| quad | 1×4 | 35px | None | 4 cols |
| eight | 2×4 | 35px | None | 4 cols |

## TypeScript Types

The layout is fully typed in the codebase:

```typescript
export type LayoutType = 'hero' | 'full' | 'double' | 'triple-big' | 'quad' | 'six' | 'contained' | 'eight' | 'four' | 'six-tall' | 'six-horizontal'

export interface ImageData {
  filename: string
  showBorder?: boolean
}

export interface ArtSection {
  layout: LayoutType
  images: (string | ImageData)[]
  title?: string 
}
```

## Tips & Best Practices

1. **Image Quality**: Use high-resolution images as they'll be displayed in a relatively narrow format
2. **Aspect Ratios**: Works best with consistent aspect ratios across all 6 images
3. **Borders**: Use `showBorder: true` for light-colored images to create separation from black background
4. **Mobile Preview**: Always test on mobile to ensure the responsive behavior works with your content
5. **Loading Performance**: Next.js Image component automatically optimizes all images
6. **File Paths**: All images should be in `/public/images/` directory

## Troubleshooting

**Images not showing?**
- Verify images exist in `/public/images/` directory
- Check filename spelling and extensions
- Ensure proper file permissions

**Layout looks wrong?**
- Confirm exactly 6 images are provided
- Check browser console for errors
- Verify TypeScript types are correct

**Borders not appearing?**
- Use object format with `showBorder: true`
- Ensure border color contrasts with image content

---

Created: February 2026
Last Updated: February 2026
