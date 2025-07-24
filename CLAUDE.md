# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **JANUS Website – 2025 Version** project folder containing assets and copy for building a new marketing site for JANUS, a premium creative agency that installs high-converting, brand-driven marketing systems into SaaS companies.

**Current State**: Fully functional Next.js website built with all specified sections and responsive design.

## Tech Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.1.11
- **Build**: Static export enabled for deployment
- **Deploy**: Ready for Vercel or Netlify

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production and export static files
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Project Structure

### Assets (`/assets/`)
- `JANUS-Logo-transparentBG.png` or `JANUS-Logo.svg` - Primary logo for header/hero
- `Ali.png` - Founder photo
- `handshake.png` - Optional imagery from previous version
- Various logo variations and theme assets

### Content Files
- `readme.md` - Project instructions and specifications
- `landingpagecopy.md` - Full copy for homepage (currently empty)
- `existing-landinpage.png` - Screenshot reference of current site

## Architecture Guidelines

### Page Structure (Homepage `/`)
Per readme.md specifications:
1. Hero with bold claim and CTA
2. Trust/clients bar
3. Problem statement
4. The JANUS Clarity Engine™ (3-part system)
5. Comparison table (vs hiring)
6. ICP/Who it's for section
7. How it works (3 steps)
8. Testimonials section
9. Pricing tiers
10. Final CTA section

### Key CTAs
- Primary CTA: **"📩 Book a Strategy Call"**
- Should link to `/contact` or external scheduling tool

### Brand Guidelines
- **Tone**: Modern, sharp, minimal
- **Target**: High-ticket SaaS companies
- **Goal**: Generate leads via strategy call bookings
- Logo usage: Use transparent PNG or SVG versions

## Development Notes

- Content source: Use `landingpagecopy.md` for homepage copy (needs to be populated)
- Responsive design required (desktop and mobile)
- SEO optimization needed (title, meta description)
- Accessibility considerations for semantic HTML
- Future expansion planned for `/portfolio`, `/about`, `/contact` pages

## Brand Approval

Per readme.md: "Ask Ali before changing the core brand language or tone."