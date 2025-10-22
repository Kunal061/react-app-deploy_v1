# Design Guidelines: Risha Batra - Cybersecurity Portfolio

## Design Approach
**Reference-Based Approach**: Using Udit Mathur's portfolio as the exact visual foundation while adapting content for cybersecurity focus. Maintaining identical UI patterns, color schemes, backgrounds, and interaction models.

---

## Core Design Elements

### A. Color Palette
**Exact Match to Reference Portfolio**
- **Background**: Dark gradient theme (appears to be deep navy/black gradient: 240 15% 8% to 240 10% 3%)
- **Primary Text**: White/off-white (0 0% 98%)
- **Accent Color**: Cyan/blue highlights (200 95% 60%) for interactive elements and emphasis
- **Secondary Text**: Muted gray (240 5% 65%)
- **Card Backgrounds**: Semi-transparent dark with subtle border (240 12% 12% with 15% opacity)

### B. Typography
- **Headings**: Bold, large sans-serif (likely Inter or similar) - 4xl to 6xl font sizes
- **Body Text**: 16-18px base size, line-height 1.6
- **Tagline/Hero**: Extra large display text (6xl-7xl) with gradient effect
- **Tech Labels**: Uppercase, smaller tracking, 12-14px

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent vertical rhythm
- Container max-width: 1280px (max-w-7xl)
- Section padding: py-20 to py-32 for desktop, py-12 for mobile
- Component spacing: gap-6 to gap-8 for grids

### D. Component Library

**Navigation Bar**
- Fixed/sticky header with dark semi-transparent background
- Logo/name on left
- Nav items: Projects | Tech Stack | Achievements | Experience | Certifications | Contact Me | LinkedIn | Resume
- Smooth underline hover effect on nav items

**Hero Section**
- Circular profile image (Risha's photo) with subtle glow/border effect
- Large heading: "Risha Batra"
- Tagline: "Learning to protect what connects us." (cybersecurity adaptation)
- Bio paragraph highlighting cybersecurity focus: OSINT, vulnerability assessment, incident response
- Two CTA buttons: "View Projects →" and "Contact Me →"

**Tech Stack Infinite Carousel**
- Horizontal auto-scrolling ticker with cybersecurity tools and technologies
- Two rows for visual depth (one scrolling left, one right)
- Technologies from resume: Python, C, C++, Bash, Nmap, Burp Suite, Metasploit, Nessus, Hydra, Wireshark, Redline, KAPE, Autopsy, Volatility, TheHive, Velociraptor, Linux (Kali), Git/GitHub
- Each tech badge: dark background, rounded corners, icon + label
- Smooth, continuous animation without pause

**Projects Section** (Separate Page)
- Grid layout (2 columns on desktop, 1 on mobile)
- Project cards with:
  - Project name (Vuln-Detector, ForgeStrike, SecureVision)
  - Brief description
  - Tech tags
  - Link to GitHub/demo
- Hover effect: subtle lift and glow

**Tech Stack Page** (Detailed)
- Categorized sections: Languages | Security Tools | Forensics & IR | Operating Systems | Other Tools
- Icon grid layout with labels
- Same dark gradient background as home page

**Achievements Section**
- Timeline or card-based layout
- TryHackMe badge/rank prominently displayed
- E-Cell competition ranking
- Leadership roles highlighted

**Experience Section**
- Timeline layout with three internships
- Company name, role, duration, location
- Key bullet points for each role
- Dark cards with left border accent

**Certifications Grid**
- Badge-style cards for each certification
- Issuing organization logo/name
- Certificate name
- Grid layout (3-4 columns on desktop)

**Contact Section**
- Email, phone, LinkedIn, GitHub, TryHackMe links
- Social icons with hover effects
- Simple form or direct contact buttons

### E. Animations
**Minimal, Purposeful Animations**
- Tech stack infinite scroll (continuous, smooth)
- Subtle fade-in on scroll for sections (0.3s duration)
- Button hover: slight scale (1.05) and glow effect
- Nav link underline slide-in on hover
- Card hover: translateY(-4px) with shadow increase

---

## Images

**Profile Picture**
- Location: Hero section, centered above name
- Style: Circular crop, 200-250px diameter
- Treatment: Subtle cyan glow/ring around border, matches accent color
- Description: Use Risha's uploaded professional photo

**No other images required** - the design relies on gradients, typography, and tech stack icons (use Font Awesome or similar icon libraries via CDN for tool/tech icons)

---

## Cybersecurity Theming Adaptations

**Visual Elements**
- Maintain dark, professional aesthetic (aligns with hacker/security culture)
- Cyan/blue accents evoke terminal/matrix aesthetic
- Tech stack badges use security tool icons (lock, shield, terminal icons from Heroicons)

**Content Tone**
- Professional but approachable
- Security-focused language: "threat detection," "vulnerability assessment," "OSINT," "incident response"
- Emphasize hands-on experience and practical skills

**Navigation Priority**
- Projects first (showcases technical skills)
- Tech Stack (demonstrates tool proficiency)
- Experience and Achievements validate expertise
- Certifications add credibility

---

## Responsive Behavior
- Mobile: Single column layouts, stacked nav (hamburger menu)
- Tablet: 2-column grids where applicable
- Desktop: Full multi-column layouts, fixed navigation
- Tech stack carousel: Scales icons appropriately, maintains smooth scroll