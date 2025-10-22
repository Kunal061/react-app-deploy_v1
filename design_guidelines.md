# DevOps & Cloud Engineering Portfolio - Design Guidelines

## Design Approach

**Selected Approach**: Reference-Based with technical aesthetic inspiration from GitHub, Vercel, Linear, and AWS Console interfaces.

**Justification**: Portfolio sites require visual appeal to showcase work while maintaining professional credibility in the technical field. The design should communicate both technical expertise and modern web development skills.

**Key Design Principles**:
- Technical sophistication with clean execution
- Information hierarchy emphasizing skills and projects
- Performance-focused minimal animations
- Professional credibility through polished presentation

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (default):
- Background: 220 20% 8% (deep navy-black)
- Surface: 220 18% 12% (elevated dark gray)
- Text Primary: 0 0% 95%
- Text Secondary: 220 10% 65%

**Accent Colors**:
- Primary (AWS Orange): 25 95% 60% 
- Secondary (Cloud Blue): 200 80% 55%
- Success (Green): 145 65% 50%

**Light Mode** (if implemented):
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 20% 15%

### B. Typography

**Font Families**:
- Primary: 'Inter' (Google Fonts) - body text, navigation, labels
- Accent: 'JetBrains Mono' (Google Fonts) - code snippets, technical callouts, terminal effects

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Labels: text-sm, font-medium
- Code/Terminal: text-sm font-mono

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8
- Section padding: py-16 md:py-24
- Grid gaps: gap-6 to gap-8
- Container max-width: max-w-6xl

**Grid Structure**:
- Skills Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Projects: grid-cols-1 lg:grid-cols-2
- Certifications: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Experience/Education: Single column timeline

### D. Component Library

**Navigation**:
- Fixed header with blur background (backdrop-blur-md bg-background/80)
- Logo/name on left, nav links on right
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections

**Hero Section**:
- Full-width background with professional headshot or cloud/DevOps themed imagery
- Large headline with name and role
- Animated terminal-style subheading showing "DevOps Engineer | Cloud Enthusiast | AWS Certified"
- Dual CTAs: "View Projects" (primary), "Download CV" (outline with blur background)
- Height: min-h-screen with content centered

**Skills Section**:
- Three-column card layout (Languages | Tools | Platforms)
- Each skill card with icon, name, and proficiency indicator
- Subtle hover effect (scale-105 transition)
- Background: Surface color with border

**Work Experience & Education**:
- Vertical timeline with connecting line
- Left-aligned date/duration, right-aligned content
- Cards with company/institution name, role, achievements
- Bullet points for responsibilities

**Projects Showcase**:
- Two-column grid for featured projects
- Each card includes: Project name, tech stack tags, description, GitHub link
- Hover effect: slight elevation (shadow-lg)
- Tech stack badges in accent colors

**Certifications**:
- Three-column grid of certification cards
- Badge/logo placeholder, certification name, issuing organization
- "Verify" link for credential validation
- Icon: shield or certificate symbol

**Contact Section**:
- Centered layout with social links (LinkedIn, GitHub, Email)
- Large icon buttons with labels
- Background: Gradient from primary to secondary accent (subtle, 10% opacity)

**Footer**:
- Simple copyright, social links, "Built with Next.js" badge
- Background: Darkest surface color

### E. Animations

**Minimal, Performance-Focused**:
- Scroll-triggered fade-in for sections (opacity 0 to 1, translateY 20px to 0)
- Terminal typing effect in hero (character-by-character reveal, 50ms delay)
- Smooth scroll behavior for navigation links
- Button hover: subtle scale (1.02) with 200ms transition
- Card hover: shadow and slight elevation only
- NO complex animations, parallax, or scroll-jacking

## Images

**Large Hero Image**: Yes - Full-width background image behind hero content
- Description: Professional workspace with laptop showing terminal/code, cloud infrastructure diagram on screen, or abstract cloud/DevOps visualization with gradients in brand colors
- Placement: Full hero section background with dark overlay (opacity 40%) for text readability
- Style: High-quality, modern, slightly desaturated to not compete with UI

**Project Thumbnails**: Optional placeholders
- Description: Screenshots of AWS console, Jenkins pipeline, or project architecture diagrams
- Placement: Within project cards as visual preview

**Professional Headshot**: Recommended
- Placement: Hero section (right side on desktop, above text on mobile) or About section
- Style: Circular frame with subtle border in accent color

## Layout Sections (In Order)

1. **Navigation Header** - Fixed, minimal height
2. **Hero** - Full viewport with image background
3. **About/Summary** - Single column, max-w-3xl centered
4. **Skills** - Multi-column grid
5. **Work Experience** - Timeline layout
6. **Projects** - Two-column showcase
7. **Certifications** - Three-column grid
8. **Education** - Timeline layout
9. **Achievements** - Two-column list with icons
10. **Contact** - Centered with large CTAs
11. **Footer** - Minimal, full-width

**Responsive Behavior**: All multi-column layouts collapse to single column on mobile (< md breakpoint)