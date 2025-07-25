# JANUS Design Language & Branding Guide

This document outlines the design principles, visual identity, and implementation standards for the JANUS brand to ensure consistency across all touchpoints.

## Brand Philosophy

JANUS is built for founders who refuse to settle. Our design language reflects **premium quality**, **sophisticated simplicity**, and **professional excellence**. Every design decision should feel intentional, refined, and worthy of ambitious SaaS founders.

## Color Palette

### Primary Colors
- **JANUS Blue**: `#2563eb` (--janus-blue)
  - Primary brand color for CTAs, links, and key accents
  - Use for interactive elements and emphasis
  - CSS classes: `.text-janus-blue`, `.bg-janus-blue`, `.border-janus-blue`

### Neutral Colors
- **Pure Black**: `#000000` (--foreground)
  - Primary text color for headings and body content
  - Use for maximum contrast and readability
  
- **Pure White**: `#ffffff` (--background)
  - Primary background color
  - Clean, premium feel

- **Gray 50**: `#f8fafc` (--janus-gray)
  - Subtle background sections (pricing cards, ROI calculator results)
  - Alternative to pure white for visual hierarchy

- **Gray 100**: `#f3f4f6`
  - Card borders and subtle dividers

- **Gray 600**: `#4b5563`
  - Secondary text content

- **Gray 700**: `#374151`
  - Body text with good contrast

## Typography

### Font Families
- **Display Font**: 'Playfair Display' (serif)
  - Use for: Headlines, hero text, section titles
  - CSS class: `.font-display`
  - Conveys sophistication and premium positioning

- **Body Font**: 'Inter' (sans-serif)
  - Use for: Body text, UI elements, navigation
  - Default font with optimized letter spacing and smoothing

### Typography Scale
- **Hero Text**: 3rem mobile / 4-6rem desktop
- **Display Text**: 2.5rem mobile / 3-4rem desktop  
- **Section Headers**: 2-3rem
- **Body Text**: 1rem (16px) base with 1.4 line-height
- **Small Text**: 0.875rem (14px) for captions and fine print

### Typography Principles
- Use `font-display` class for all major headings
- Maintain proper hierarchy with size and weight
- Ensure excellent readability with adequate contrast
- Use `text-balance` for better line breaks in headlines

## Layout & Spacing

### Container Widths
- **Max Width**: `max-w-7xl` (1280px) for most sections
- **Narrow Content**: `max-w-4xl` (896px) for long-form text
- **Very Narrow**: `max-w-2xl` (672px) for testimonials

### Spacing System
- **Section Padding**: `py-16` (64px) standard, `py-24` (96px) for hero sections
- **Container Padding**: `px-4 lg:px-8` for responsive horizontal spacing
- **Element Gaps**: Use multiples of 4 (gap-4, gap-6, gap-8, gap-12, gap-16)

### Grid Systems
- Use CSS Grid for complex layouts
- **Two-column**: `grid lg:grid-cols-2 gap-16` for split content
- **Three-column**: `grid md:grid-cols-3 gap-8` for cards/features
- Maintain proper spacing and alignment across breakpoints

## Interactive Elements

### Buttons

#### Primary CTA
```css
bg-janus-blue text-white px-10 py-4 text-lg font-bold 
hover:bg-blue-700 transition-all duration-300 rounded-sm 
hover-rise janus-shadow-xl
```

#### Secondary CTA  
```css
bg-black text-white px-6 py-2.5 text-sm font-semibold 
tracking-wide hover:bg-gray-900 transition-colors 
duration-300 rounded-sm
```

### Form Elements
- **Input Fields**: White background, black text, 2px border
- **Focus States**: JANUS blue border (`focus:border-janus-blue`)
- **Hover States**: Subtle background color changes
- **Placeholder Text**: Gray-400 for visibility

### Links
- **Navigation Links**: Gray-700 with black hover
- **Active Links**: JANUS blue with darker blue hover
- **Smooth Transitions**: `transition-colors` for color changes

## Visual Effects

### Shadows
- **Standard Shadow**: `.janus-shadow`
  ```css
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  ```
  
- **Elevated Shadow**: `.janus-shadow-xl`  
  ```css
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  ```

### Hover Effects
- **Rise Effect**: `.hover-rise` for CTAs and cards
  ```css
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-8px) on hover;
  enhanced shadow on hover;
  ```

### Border Radius
- **Standard**: `rounded-lg` (8px) for cards
- **Large**: `rounded-xl` (12px) for major containers  
- **Buttons**: `rounded-sm` (2px) for sharp, professional look

## Animation Principles

### Scroll Animations
- **Fade Up**: Primary animation for content reveals
- **Slide Left/Right**: For split-content sections
- **Scale In**: For cards and interactive elements
- **Staggered Delays**: Use delay-100, delay-200, etc. for sequence

### Timing Functions
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural feel
- **Duration**: 0.8s for scroll animations, 0.3s for interactions
- **Threshold**: 0.1 intersection for animation triggers

### Smooth Scrolling
- Implemented via CSS `scroll-behavior: smooth`
- Enhanced with JavaScript for anchor links
- Consistent across all internal navigation

## Component Patterns

### Cards
```css
bg-white rounded-xl p-8 janus-shadow border border-gray-100
hover:shadow-lg transition-shadow duration-300
```

### Section Backgrounds
- **Primary**: White background
- **Alternate**: `bg-gray-50` for visual separation
- **Accent**: Black background with white text for CTAs

### Content Hierarchy
1. **Hero Section**: Large display text with strong visual impact
2. **Section Headers**: Clear hierarchy with proper spacing
3. **Body Content**: Readable typography with good line-height
4. **Supporting Text**: Smaller, muted text for context

## Mobile Optimization

### Responsive Principles
- **Mobile-First**: Design and code mobile-first, enhance for desktop
- **Touch Targets**: Minimum 44px for interactive elements
- **Text Scaling**: Reduce font sizes appropriately for mobile
- **Spacing**: Tighter spacing on mobile, generous on desktop

### Specific Mobile Patterns
- **Navigation**: Condensed mobile nav with essential links
- **CTAs**: Full-width or prominently sized for easy tapping
- **Cards**: Stack vertically with proper spacing
- **Images**: Responsive with proper aspect ratios

## Brand Voice in Design

### Visual Personality
- **Sophisticated**: Clean lines, proper typography, thoughtful spacing
- **Professional**: Consistent branding, polished interactions
- **Premium**: High-quality imagery, elegant animations, refined details
- **Trustworthy**: Clear hierarchy, readable content, reliable interactions

### Avoid
- **Cheap or gimmicky effects**: Flashy animations, garish colors
- **Cluttered layouts**: Too much information, poor spacing
- **Inconsistent branding**: Mixed fonts, random colors, varying styles
- **Poor accessibility**: Low contrast, tiny text, unclear navigation

## Implementation Standards

### CSS Organization
- Use custom CSS variables for brand colors
- Implement utility classes for common patterns
- Maintain consistent naming conventions
- Document any custom utilities or components

### Performance Considerations
- Optimize images with proper sizing and formats
- Use system fonts as fallbacks
- Minimize animation complexity
- Implement proper loading states

### Accessibility
- Maintain WCAG AA contrast standards
- Provide focus indicators for all interactive elements
- Use semantic HTML structure
- Support keyboard navigation

## Quality Checklist

Before launching any design:
- [ ] Colors match brand palette exactly
- [ ] Typography uses correct font families and hierarchy
- [ ] Interactive elements have proper hover/focus states
- [ ] Animations are smooth and purposeful
- [ ] Mobile experience is fully optimized
- [ ] All text is readable with sufficient contrast
- [ ] Loading states and error handling are implemented
- [ ] Design feels premium and professional

---

*This design language should guide all future design and development decisions for JANUS. When in doubt, prioritize simplicity, professionalism, and user experience over flashy effects or unnecessary complexity.*