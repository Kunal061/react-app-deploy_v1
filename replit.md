# Portfolio Website - Replit Documentation

## Overview

This is a DevOps and Cloud Engineering portfolio website for Kunal Rohilla, built as a static single-page application. The project showcases professional experience, technical skills, certifications, projects, and achievements in a modern, performance-focused interface.

**Tech Stack:**
- **Frontend:** React 18 with TypeScript
- **Styling:** Tailwind CSS with shadcn/ui component library
- **Build Tool:** Vite
- **Backend:** Express.js (minimal, serves static files only)
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack Query (React Query)

**Key Features:**
- Responsive single-page portfolio layout
- Dark mode optimized design with technical aesthetic
- Scroll-triggered animations for sections
- Static content defined in schema (no dynamic backend)
- Performance-optimized with minimal animations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component Structure:**
- **Page Components:** Single `Home` page component orchestrating all sections
- **Section Components:** Modular sections (Hero, About, Skills, Experience, Projects, Certifications, Education, Achievements, Contact, Footer)
- **UI Components:** shadcn/ui component library in `client/src/components/ui/`
- **Shared Schema:** Portfolio data structures defined in `shared/schema.ts` using Zod for validation

**Design System:**
- Uses shadcn/ui "new-york" style variant
- Custom color palette defined in Tailwind config with HSL color system
- CSS variables for theming (dark mode primary, light mode secondary)
- Typography: Inter (primary), JetBrains Mono (code/technical)
- Responsive breakpoints following Tailwind defaults

**State Management:**
- TanStack Query configured for potential API calls (currently unused)
- No complex state management needed - portfolio is static content
- Custom hooks: `useScrollAnimation` for intersection observer patterns, `useIsMobile` for responsive behavior

**Routing:**
- Wouter for lightweight client-side routing
- Single route (`/`) displays portfolio home page
- 404 page for unmatched routes

### Backend Architecture

**Server Implementation:**
- Express.js server with minimal configuration
- Primary purpose: Serve Vite-built static assets in production
- Development mode: Vite dev server with HMR
- No authentication, session management, or API endpoints currently implemented
- Storage layer exists but unused (static portfolio data only)

**Build Process:**
- Development: `tsx server/index.ts` with Vite middleware
- Production: Vite builds client to `dist/public`, esbuild bundles server to `dist`
- Server serves pre-built static files in production

### Data Storage

**Current Implementation:**
- No database or persistent storage
- All portfolio data hardcoded in `shared/schema.ts`
- Zod schemas define types for: Skills, Experience, Projects, Certifications, Education, Achievements

**Database Configuration (Unused):**
- Drizzle ORM configured for PostgreSQL (via Neon serverless)
- Migration setup exists but no tables defined
- Can be activated for future dynamic content needs (contact forms, analytics, etc.)

**Session Management:**
- `connect-pg-simple` dependency present but unused
- No session middleware configured

### Styling Architecture

**Tailwind Configuration:**
- Custom theme extending default Tailwind
- HSL-based color system with CSS variables
- Support for both light and dark modes
- Custom utility classes: `hover-elevate`, `active-elevate-2`
- Border radius customization: lg (9px), md (6px), sm (3px)

**Component Styling:**
- shadcn/ui components with custom theming
- Consistent card elevation and borders via CSS variables
- Responsive typography scale
- Icon integration via lucide-react and react-icons

### Performance Optimizations

**Build Optimizations:**
- Vite's built-in code splitting and tree shaking
- Asset optimization through Vite pipeline
- Font loading via Google Fonts with preconnect

**Runtime Optimizations:**
- Intersection Observer for scroll animations (lazy visibility)
- Minimal JavaScript bundle size through wouter (vs react-router)
- Static content eliminates API call overhead

## External Dependencies

### Third-Party Services

**Database (Configured but Unused):**
- **Neon Serverless PostgreSQL:** Connection configured via `@neondatabase/serverless`
- **Connection:** Requires `DATABASE_URL` environment variable
- **Note:** Currently no active database usage; can be provisioned for future features

### UI Component Libraries

**shadcn/ui:** 
- Comprehensive component library based on Radix UI primitives
- Components: Accordion, Alert, Badge, Button, Card, Dialog, Dropdown, Form, Input, Navigation, Popover, Select, Tabs, Toast, and more
- Customized via Tailwind CSS and CSS variables

**Icon Libraries:**
- **lucide-react:** Primary icon set for UI elements
- **react-icons:** Specific icons (SiPython, SiDocker, SiAmazon, etc.) for technology badges

### Utility Libraries

**Form Management:**
- **react-hook-form:** Form state management (imported but not actively used)
- **@hookform/resolvers:** Zod integration for form validation

**Date Handling:**
- **date-fns:** Date formatting and manipulation

**Styling Utilities:**
- **clsx & tailwind-merge:** Conditional class name management
- **class-variance-authority:** Component variant styling patterns

### Development Tools

**Replit Integration:**
- **@replit/vite-plugin-runtime-error-modal:** Development error overlay
- **@replit/vite-plugin-cartographer:** Code navigation (dev only)
- **@replit/vite-plugin-dev-banner:** Development indicator (dev only)

### Build Tools

- **Vite:** Frontend build tool and dev server
- **esbuild:** Server-side bundling
- **tsx:** TypeScript execution for development
- **Drizzle Kit:** Database migration tool (configured but unused)
- **PostCSS:** CSS processing with Tailwind and Autoprefixer

### Assets

**Static Assets:**
- Hero background image: `attached_assets/generated_images/DevOps_cloud_workspace_hero_background_*.png`
- Favicon: `/favicon.png`
- Images served via Vite's asset handling