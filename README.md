# Pangasinan Heritage Digital Showcase

**Student Name**: Christian Lozada  
**Selected Framework**: Next.js 14 (App Router)  
**Course**: Web Architecture  
**Instructor**: Rey Molano

## 🌐 Live Website

🔗 **GitHub Pages**: [https://ChrisLo05.github.io/pangasinan-heritage-showcase/](https://ChrisLo05.github.io/pangasinan-heritage-showcase/)

---

A modern, mobile-first web platform showcasing Pangasinan's iconic heritage sites built with Next.js 14 and Atomic Design methodology.

## 🏛️ About

This project is a digital initiative by the Pangasinan Provincial Tourism Office to promote cultural awareness and tourism for the province's most iconic heritage sites:

- **Hundred Islands** - Alaminos' stunning archipelago of 124 islands
- **Bolinao Lighthouse** - Historic Spanish-era lighthouse with panoramic sea views
- **Balungao Hot Spring** - Natural therapeutic sulfuric hot springs in a hilltop setting

## ✨ Features

- ⚡ **Lightning Fast** - Optimized for 3G/4G mobile data with minimal bundle size
- 📱 **Mobile-First Design** - Responsive across all screen sizes
- ♿ **WCAG 2.1 AA Compliant** - Accessible to all users
- 🎨 **Atomic Design System** - Modular and maintainable component architecture
- 🚀 **Static Site Generation** - JAMstack deployment ready
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Atomic Design (Atoms → Molecules → Organisms → Templates → Pages)

## 📦 Project Structure

```
pangasinan-heritage-showcase/
├── app/                              # Next.js App Router pages
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   ├── hundred-islands/              # Hundred Islands detail page
│   ├── bolinao-lighthouse/           # Bolinao Lighthouse detail page
│   └── balungao-hot-spring/          # Balungao Hot Spring detail page
├── components/
│   ├── atoms/                        # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Typography.tsx
│   │   ├── ColorTokens.tsx
│   │   ├── Icon.tsx
│   │   └── Image.tsx
│   ├── molecules/                    # Simple component combinations
│   │   ├── HeritageCard.tsx
│   │   ├── SearchForm.tsx
│   │   └── NavigationItem.tsx
│   └── organisms/                    # Complex component sections
│       ├── HeritageGrid.tsx
│       └── HeaderNavigation.tsx
├── public/                           # Static assets
└── package.json                      # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Navigate to project directory:
```bash
cd pangasinan-heritage-showcase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

### Static Export

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment to any static hosting service.

## 🎨 Atomic Design Components

### Atoms
- **Button** - Primary, secondary, and outline variants with multiple sizes
- **Typography** - Consistent text styles (h1-h4, body, caption, small)
- **ColorTokens** - Design system color palette
- **Icon** - SVG icons for UI elements
- **Image** - Optimized image component with lazy loading

### Molecules
- **HeritageCard** - Tourist site preview card with image, title, description, and CTA
- **SearchForm** - Search input with icon and submit button
- **NavigationItem** - Accessible navigation link with active state

### Organisms
- **HeritageGrid** - Responsive grid layout for heritage site cards
- **HeaderNavigation** - Mobile-responsive header with logo and navigation menu

## 📱 Responsive Design

The platform follows a mobile-first approach with breakpoints:
- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

All components adapt seamlessly across screen sizes using Tailwind's responsive utilities.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Alt text for images
- Color contrast compliance (WCAG 2.1 AA)

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 👨‍💻 Author

**Christian Lozada**
- Activity 1: Pangasinan Heritage Digital Showcase
- Course: Web Architecture
- Instructor: Rey Molano

## 📄 License

© 2026 Pangasinan Provincial Tourism Office. All rights reserved.

## 🙏 Acknowledgments

- Pangasinan Provincial Tourism Office
- Urdaneta City University - College of Information and Technology Education
- Unsplash for placeholder images
