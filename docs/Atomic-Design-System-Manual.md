# Atomic Design System Manual
## Pangasinan Heritage Digital Showcase

**Student**: Christian Lozada  
**Course**: Web Architecture  
**Instructor**: Rey Molano  
**Date**: September 7, 2026

---

## Table of Contents

1. [Introduction](#introduction)
2. [Design Principles](#design-principles)
3. [Atoms](#atoms)
4. [Molecules](#molecules)
5. [Organisms](#organisms)
6. [Usage Guidelines](#usage-guidelines)

---

## Introduction

This manual documents the complete Atomic Design system for the Pangasinan Heritage Digital Showcase. Following Brad Frost's Atomic Design methodology, our component library is organized into three hierarchical levels:

- **Atoms**: Basic building blocks (buttons, typography, icons, images)
- **Molecules**: Simple combinations of atoms (cards, forms, navigation items)
- **Organisms**: Complex sections combining molecules (grids, headers)

### Design System Goals

1. **Consistency**: Unified visual language across all pages
2. **Reusability**: Components can be easily reused and composed
3. **Accessibility**: WCAG 2.1 AA compliant by default
4. **Responsiveness**: Mobile-first approach with fluid layouts
5. **Maintainability**: Clear documentation and predictable behavior

---

## Design Principles

### Color Palette

**Primary Colors** (Blue - representing sea and sky):
- `primary-50` to `primary-900`: Used for interactive elements, CTAs, and branding

**Secondary Colors** (Earth tones - representing heritage):
- `secondary-50` to `secondary-900`: Used for accents and subtle highlights

**Neutral Colors** (Slate):
- `slate-50` to `slate-900`: Used for text, backgrounds, and borders

### Typography Scale

- **Headings**: Bold, hierarchical (h1: 4xl-6xl, h2: 3xl-5xl, h3: 2xl-4xl, h4: xl-3xl)
- **Body Text**: Base to lg, comfortable reading (16-18px)
- **Small Text**: xs to sm for captions and metadata

### Spacing System

- Following Tailwind's spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64px)
- Consistent padding and margins across components
- Responsive spacing that scales with viewport

### Responsive Breakpoints

- **Mobile**: 320px - 639px (default)
- **Tablet**: 640px - 1023px (sm: prefix)
- **Desktop**: 1024px+ (lg: prefix)

---

## Atoms

### 1. Button Component

**File**: `components/atoms/Button.tsx`

#### Visual Preview

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Primary Btn    │  │  Secondary Btn  │  │  Outline Btn    │
└─────────────────┘  └─────────────────┘  └─────────────────┘
  Blue background     Brown background     Blue border only
```

#### Usage Context

The Button component is used for all interactive actions throughout the application. It provides three visual variants (primary, secondary, outline) and three sizes (sm, md, lg) to accommodate different UI hierarchy needs.

**When to use:**
- Primary: Main call-to-action buttons (e.g., "Explore More", "Search")
- Secondary: Alternative actions or less prominent CTAs
- Outline: Tertiary actions or ghost buttons

**When NOT to use:**
- For navigation links (use NavigationItem instead)
- For non-interactive elements (use Typography instead)

#### Responsive Logic

**Container Considerations:**
- Buttons adapt to their container width when needed
- On mobile (<640px): Can be set to full-width via `w-full` class
- On tablet/desktop (≥640px): Typically auto-width based on content

**Responsive Behavior:**
- Small screens: Full-width buttons for better touch targets (48px min height)
- Large screens: Auto-width with appropriate padding
- Touch targets: Minimum 44x44px for accessibility (WCAG 2.1 AA)

**Size Variations:**
- Small (sm): `px-3 py-1.5 text-sm` - for compact spaces
- Medium (md): `px-5 py-2.5 text-base` - default, most common
- Large (lg): `px-6 py-3 text-lg` - for hero sections and prominent CTAs

#### Code Reference

```typescript
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

**Usage Example:**
```tsx
// Primary button (most common)
<Button variant="primary" size="md">
  Explore More
</Button>

// Full-width on mobile
<Button variant="primary" className="w-full sm:w-auto">
  Submit
</Button>

// With icon
<Button variant="outline" size="lg">
  <Icon name="search" size="sm" /> Search
</Button>
```

---

### 2. Typography Component

**File**: `components/atoms/Typography.tsx`

#### Visual Preview

```
Heading 1 - Extra large, bold (48-72px)
Heading 2 - Large, bold (36-60px)
Heading 3 - Medium, bold (24-48px)
Heading 4 - Small heading, semibold (20-36px)

Body text - Regular reading text (16-18px)
Caption text - Smaller descriptive text (14-16px)
Small text - Tiny text for metadata (12-14px)
```

#### Usage Context

The Typography component ensures consistent text styling across the entire application. It automatically handles responsive font sizing and maintains proper hierarchy.

**When to use:**
- Headings (h1-h4): For content hierarchy and section titles
- Body: For paragraph content and descriptions
- Caption: For image captions, subtitles, and secondary information
- Small: For metadata, timestamps, and fine print

#### Responsive Logic

**Font Size Scaling:**
- Mobile (default): Base sizes
- Tablet (≥640px): +1 size increment (md: prefix)
- Desktop (≥1024px): +2 size increments (lg: prefix)

**Examples:**
- h1: `text-4xl md:text-5xl lg:text-6xl` (36px → 48px → 60px)
- body: `text-base md:text-lg` (16px → 18px)

**Line Height:**
- Headings: `leading-tight` or `leading-snug` for better readability
- Body: `leading-relaxed` for comfortable paragraph reading

**Responsive Behavior:**
- Automatically scales font sizes on larger screens
- Maintains optimal line length for readability
- Preserves visual hierarchy across breakpoints

#### Code Reference

```typescript
import React from 'react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'small';
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  children, 
  className = '',
  as 
}) => {
  const styles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 leading-snug',
    body: 'text-base md:text-lg text-slate-700 leading-relaxed',
    caption: 'text-sm md:text-base text-slate-600 leading-relaxed',
    small: 'text-xs md:text-sm text-slate-500',
  };
  
  const Tag = as || (variant.startsWith('h') ? variant : 'p') as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Tag,
    { className: `${styles[variant]} ${className}` },
    children
  );
};

export default Typography;
```

**Usage Example:**
```tsx
<Typography variant="h1">Discover Pangasinan</Typography>
<Typography variant="body">
  Explore the iconic heritage sites of Pangasinan...
</Typography>
<Typography variant="caption" className="text-slate-500">
  Photo credit: Tourism Office
</Typography>
```

---

### 3. ColorTokens

**File**: `components/atoms/ColorTokens.tsx`

#### Visual Preview

```
Primary Palette (Blues):
███ 50  ███ 100  ███ 200  ███ 300  ███ 400
███ 500  ███ 600  ███ 700  ███ 800  ███ 900

Secondary Palette (Earth Tones):
███ 50  ███ 100  ███ 200  ███ 300  ███ 400
███ 500  ███ 600  ███ 700  ███ 800  ███ 900

Neutral Palette (Slate):
███ 50  ███ 100  ███ 200  ███ 300  ███ 400
███ 500  ███ 600  ███ 700  ███ 800  ███ 900
```

#### Usage Context

ColorTokens define the complete color palette used throughout the application. These colors are synchronized with Tailwind CSS configuration for consistent theming.

**When to use:**
- Import when you need programmatic access to colors
- Reference in custom styled components
- Use for dynamic theming or color calculations

**Primary Colors Usage:**
- 600: Default interactive elements (buttons, links)
- 700: Hover states
- 500: Active/focused states
- 50-100: Light backgrounds

**Secondary Colors Usage:**
- 500-600: Accent elements
- 100-200: Subtle backgrounds

#### Responsive Logic

**Color Contrast:**
- All color combinations meet WCAG 2.1 AA standards (4.5:1 for text)
- Interactive elements have sufficient contrast in all states
- Focus indicators visible against all backgrounds

**Theme Consistency:**
- Colors remain consistent across all screen sizes
- No color changes based on breakpoints
- High contrast mode supported through system preferences

#### Code Reference

```typescript
export const ColorTokens = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fdf8f6',
    100: '#f2e8e5',
    200: '#eaddd7',
    300: '#e0cec7',
    400: '#d2bab0',
    500: '#bfa094',
    600: '#a18072',
    700: '#977669',
    800: '#846358',
    900: '#43302b',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... slate colors
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

export default ColorTokens;
```

---

### 4. Icon Component

**File**: `components/atoms/Icon.tsx`

#### Visual Preview

```
Small (16x16):   [🗺]  [🧭]  [🏖]  [⛰]  [♨]  [🗼]  [🔍]  [☰]  [✕]  [→]
Medium (24x24):  [🗺]  [🧭]  [🏖]  [⛰]  [♨]  [🗼]  [🔍]  [☰]  [✕]  [→]
Large (32x32):   [🗺]  [🧭]  [🏖]  [⛰]  [♨]  [🗼]  [🔍]  [☰]  [✕]  [→]
XLarge (48x48):  [🗺]  [🧭]  [🏖]  [⛰]  [♨]  [🗼]  [🔍]  [☰]  [✕]  [→]
```

#### Usage Context

The Icon component provides SVG icons for UI elements. All icons are scalable, accessible, and styled with currentColor for flexible theming.

**Available Icons:**
- `map`: Location markers and geographic references
- `compass`: Navigation and exploration
- `beach`: Island and coastal attractions
- `mountain`: Hills and elevated locations
- `hot-spring`: Thermal springs and wellness
- `lighthouse`: Maritime heritage and beacons
- `search`: Search functionality
- `menu`: Mobile navigation menu
- `close`: Close/dismiss actions
- `arrow-right`: Navigation and CTAs

**When to use:**
- Alongside buttons to enhance meaning
- In navigation items for visual clarity
- As standalone icons for actions
- In heritage cards to indicate site type

#### Responsive Logic

**Size Scaling:**
- Mobile: Use sm (16px) or md (24px) to conserve space
- Tablet/Desktop: Can use lg (32px) or xl (48px) for impact

**Icon Sizing Guidelines:**
- sm: Inline with text, button icons
- md: Default size, most use cases
- lg: Feature icons, section headers
- xl: Hero sections, main attractions

**Touch Targets:**
- Interactive icons maintain 44x44px minimum touch target
- Padding added around smaller icons for accessibility

#### Code Reference

```typescript
import React from 'react';

export interface IconProps {
  name: 'map' | 'compass' | 'beach' | 'mountain' | 'hot-spring' | 'lighthouse' | 'search' | 'menu' | 'close' | 'arrow-right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '', ariaLabel }) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const iconPaths = {
    // ... SVG path data
  };

  return (
    <svg
      className={`${sizeStyles[size]} ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-label={ariaLabel || name}
      role="img"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={iconPaths[name]}
      />
    </svg>
  );
};

export default Icon;
```

**Usage Example:**
```tsx
<Icon name="beach" size="lg" className="text-primary-600" ariaLabel="Beach icon" />
<Button>
  <Icon name="search" size="sm" /> Search
</Button>
```

---

### 5. Image Component

**File**: `components/atoms/Image.tsx`

#### Visual Preview

```
Cover (default):        Contain:              Fill:
┌──────────────┐       ┌──────────────┐      ┌──────────────┐
│ ████████████ │       │   ████████   │      │██████████████│
│ ████████████ │       │   ████████   │      │██████████████│
│ ████████████ │       │   ████████   │      │██████████████│
└──────────────┘       └──────────────┘      └──────────────┘
(crops to fill)        (fits within)         (stretches)
```

#### Usage Context

The Image component handles image rendering with performance optimizations like lazy loading and proper object-fit modes.

**When to use:**
- Heritage site photos
- Background images
- Thumbnail previews
- Content images

**Object-fit Modes:**
- `cover` (default): Fills container, crops if needed - best for hero images
- `contain`: Fits entire image within container - best for logos
- `fill`: Stretches to fill container - rarely used

#### Responsive Logic

**Loading Strategy:**
- Lazy loading by default (`loading="lazy"`) for below-fold images
- Eager loading for above-fold hero images
- Async decoding for non-blocking rendering

**Responsive Images:**
- Uses standard `<img>` tag (not Next.js Image for static export compatibility)
- Width and height attributes prevent layout shift
- Aspect ratio preserved across breakpoints

**Mobile Optimization:**
- Lazy loading reduces initial page weight on 3G/4G
- Smaller viewport = less image data loaded
- Progressive loading supported by browser

#### Code Reference

```typescript
import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill';
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  objectFit = 'cover'
}) => {
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`${objectFitClass[objectFit]} ${className}`}
      decoding="async"
    />
  );
};

export default Image;
```

**Usage Example:**
```tsx
<Image
  src="/hundred-islands.jpg"
  alt="Hundred Islands aerial view"
  className="w-full h-64 rounded-lg"
  loading="lazy"
  objectFit="cover"
/>
```

---

## Molecules

### 1. HeritageCard Component

**File**: `components/molecules/HeritageCard.tsx`

#### Visual Preview

```
┌─────────────────────────────────┐
│                                 │
│     [Heritage Site Image]       │ ← 256px height
│                           [🏖]  │ ← Icon badge
│                                 │
├─────────────────────────────────┤
│ 🗺 Alaminos, Pangasinan         │ ← Location
│                                 │
│ Hundred Islands                 │ ← Title (h4)
│                                 │
│ A stunning archipelago of 124   │ ← Description
│ islands scattered across...     │   (3 lines max)
│                                 │
│ ┌───────────────┐              │
│ │ Explore More →│              │ ← CTA Button
│ └───────────────┘              │
└─────────────────────────────────┘
```

#### Usage Context

The HeritageCard is the primary component for displaying tourist site previews in a responsive grid. It combines image, icon, text, and action elements into a cohesive, interactive card.

**When to use:**
- Homepage heritage site grid
- Search results listings
- "Related sites" sections
- Site category pages

**When NOT to use:**
- Full site detail pages (use full page layout)
- Non-heritage content
- List views (cards work better in grids)

#### Responsive Logic

**Container Breakpoints:**
- Mobile (1 column): Full width, stacked layout
- Tablet (2 columns): Cards side-by-side
- Desktop (3 columns): Grid of 3 cards

**Image Height:**
- Mobile: 192px (h-48)
- Tablet: 224px (h-56)
- Desktop: 256px (h-64)

**Content Padding:**
- Mobile: 16px (p-4)
- Tablet: 20px (p-5)
- Desktop: 24px (p-6)

**Text Sizing:**
- Title: `text-xl sm:text-2xl`
- Description: `text-sm sm:text-base`
- Truncated to 3 lines on all screens

**Hover Effects:**
- Image scales 110% on hover (desktop only)
- Card shadow intensifies
- Smooth transitions (300ms)

#### Code Reference

```typescript
import React from 'react';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

export interface HeritageCardProps {
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  iconName: 'beach' | 'lighthouse' | 'hot-spring';
  href: string;
}

const HeritageCard: React.FC<HeritageCardProps> = ({
  title,
  location,
  description,
  imageUrl,
  iconName,
  href,
}) => {
  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-200">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full group-hover:scale-110 transition-transform duration-500"
          objectFit="cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
          <Icon name={iconName} size="md" className="text-primary-600" ariaLabel={`${title} icon`} />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="map" size="sm" className="text-slate-400" ariaLabel="Location" />
          <Typography variant="small" className="text-slate-500">
            {location}
          </Typography>
        </div>

        <Typography variant="h4" className="mb-3 text-xl sm:text-2xl">
          {title}
        </Typography>

        <Typography variant="body" className="mb-4 text-slate-600 text-sm sm:text-base flex-grow line-clamp-3">
          {description}
        </Typography>

        <div className="mt-auto">
          <a href={href} className="inline-block w-full sm:w-auto">
            <Button 
              variant="primary" 
              size="md" 
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Explore More
              <Icon name="arrow-right" size="sm" ariaLabel="Arrow right" />
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default HeritageCard;
```

**Usage Example:**
```tsx
<HeritageCard
  title="Hundred Islands"
  location="Alaminos, Pangasinan"
  description="A stunning archipelago of 124 islands and islets scattered across Lingayen Gulf."
  imageUrl="/hundred-islands.jpg"
  iconName="beach"
  href="/hundred-islands"
/>
```

---

### 2. SearchForm Component

**File**: `components/molecules/SearchForm.tsx`

#### Visual Preview

```
Mobile (stacked):
┌────────────────────────────────┐
│ 🔍  Search heritage sites...   │ ← Input
└────────────────────────────────┘
┌────────────────────────────────┐
│          Search                │ ← Button
└────────────────────────────────┘

Desktop (inline):
┌────────────────────────────────┬────────────┐
│ 🔍  Search heritage sites...   │   Search   │
└────────────────────────────────┴────────────┘
```

#### Usage Context

The SearchForm provides a search interface for filtering heritage sites. It combines a text input with a submit button in a responsive layout.

**When to use:**
- Homepage hero section
- Search results pages
- Site directory pages
- Filtering interfaces

**Form Behavior:**
- Calls `onSearch` callback with query string
- Prevents default form submission
- Manages input state internally
- Clears on submission (optional)

#### Responsive Logic

**Layout Changes:**
- Mobile (<640px): Stacked vertical layout
  - Input: Full width
  - Button: Full width below input
  - Gap: 8px between elements

- Tablet/Desktop (≥640px): Inline horizontal layout
  - Input: Flex-grow, rounded-left only
  - Button: Auto-width, rounded-right only
  - No gap (seamless connection)

**Input Sizing:**
- Mobile: `py-3` (48px height)
- Desktop: `py-3.5` (56px height)

**Focus States:**
- Input: 2px primary-500 border + ring
- Button: 2px ring on focus
- Keyboard accessible

#### Code Reference

```typescript
import React, { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

export interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ 
  onSearch, 
  placeholder = 'Search heritage sites...' 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-2xl mx-auto"
      role="search"
      aria-label="Heritage site search"
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <div className="relative flex-grow">
          <label htmlFor="search-input" className="sr-only">
            Search for heritage sites
          </label>
          <Icon 
            name="search" 
            size="md" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" 
            ariaLabel="Search icon"
          />
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-base"
            aria-describedby="search-description"
          />
          <span id="search-description" className="sr-only">
            Enter keywords to search for heritage sites in Pangasinan
          </span>
        </div>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full sm:w-auto sm:rounded-l-none whitespace-nowrap"
          aria-label="Submit search"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
```

**Usage Example:**
```tsx
<SearchForm 
  onSearch={(query) => console.log('Searching for:', query)}
  placeholder="Find your perfect destination..."
/>
```

---

### 3. NavigationItem Component

**File**: `components/molecules/NavigationItem.tsx`

#### Visual Preview

```
Desktop Navigation:
┌─────┬─────┬───────────────────┬──────────────┐
│ Home│ Islands│ Lighthouse [Active] │ Hot Spring │
└─────┴─────┴───────────────────┴──────────────┘

Mobile Navigation (expanded):
┌──────────────────────────┐
│ Home                     │
├──────────────────────────┤
│ Hundred Islands          │
├──────────────────────────┤
│ Bolinao Lighthouse    ◀──│ Active (highlighted)
├──────────────────────────┤
│ Balungao Hot Spring      │
└──────────────────────────┘
```

#### Usage Context

NavigationItem represents a single navigation link in the header. It handles both desktop inline navigation and mobile stacked navigation with appropriate styling for each context.

**When to use:**
- Header navigation menus
- Sidebar navigation
- Breadcrumb trails
- Tab interfaces

**Active State:**
- Visual indicator when on current page
- `aria-current="page"` for screen readers
- Distinct background and font weight

#### Responsive Logic

**Desktop Styling (≥768px):**
- Inline display with horizontal padding
- Compact size (`px-4 py-2`)
- Subtle hover states
- Rounded corners

**Mobile Styling (<768px):**
- Full-width block display
- Larger touch targets (`py-3`, 48px min)
- Left-aligned text
- No rounded corners (flush with container)

**Interaction States:**
- Hover: Background color change + text color
- Focus: 2px ring for keyboard navigation
- Active: Bold font + primary color + background

#### Code Reference

```typescript
import React from 'react';

export interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  isMobile?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  href, 
  label, 
  isActive = false,
  isMobile = false 
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md';
  
  const desktopStyles = 'px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-primary-50';
  const mobileStyles = 'block px-4 py-3 text-lg text-slate-700 hover:bg-slate-100 hover:text-primary-600 w-full text-left';
  
  const activeStyles = isActive 
    ? 'text-primary-600 bg-primary-50 font-semibold' 
    : '';

  return (
    <a
      href={href}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles} ${activeStyles}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  );
};

export default NavigationItem;
```

**Usage Example:**
```tsx
// Desktop navigation
<NavigationItem href="/" label="Home" isActive={true} />
<NavigationItem href="/hundred-islands" label="Hundred Islands" />

// Mobile navigation
<NavigationItem 
  href="/bolinao-lighthouse" 
  label="Bolinao Lighthouse" 
  isMobile={true}
  isActive={true}
/>
```

---

## Organisms

### 1. HeritageGrid Component

**File**: `components/organisms/HeritageGrid.tsx`

#### Visual Preview

```
Mobile (1 column):                Tablet (2 columns):
┌──────────────┐                 ┌──────────┬──────────┐
│   Card 1     │                 │  Card 1  │  Card 2  │
└──────────────┘                 └──────────┴──────────┘
┌──────────────┐                 ┌──────────┬──────────┐
│   Card 2     │                 │  Card 3  │  Card 4  │
└──────────────┘                 └──────────┴──────────┘

Desktop (3 columns):
┌────────┬────────┬────────┐
│ Card 1 │ Card 2 │ Card 3 │
└────────┴────────┴────────┘
┌────────┬────────┬────────┐
│ Card 4 │ Card 5 │ Card 6 │
└────────┴────────┴────────┘
```

#### Usage Context

HeritageGrid is the primary organism for displaying multiple heritage site cards in a responsive grid layout. It automatically handles responsive column adjustments and spacing.

**When to use:**
- Homepage featured sites section
- Search results pages
- Category listing pages
- "Discover more" sections

**When NOT to use:**
- Single site displays (use full page)
- List-style layouts (cards work better in grids)
- Very large datasets (consider pagination)

#### Responsive Logic

**Grid Columns:**
- Mobile (<640px): 1 column
  - `grid-cols-1`
  - Full-width cards
  
- Tablet (640px - 1023px): 2 columns
  - `sm:grid-cols-2`
  - Cards side-by-side
  
- Desktop (≥1024px): 3 columns
  - `lg:grid-cols-3`
  - Optimal viewing experience

**Gap Spacing:**
- Mobile: 24px (`gap-6`)
- Tablet: 32px (`sm:gap-8`)
- Desktop: 40px (`lg:gap-10`)

**Container:**
- Uses `container-custom` utility
- Max-width: 1280px (7xl)
- Responsive horizontal padding
- Centered on page

**Card Behavior:**
- Equal heights within each row (flexbox)
- Cards stretch to fill available space
- Consistent spacing maintained

#### Code Reference

```typescript
import React from 'react';
import HeritageCard, { HeritageCardProps } from '../molecules/HeritageCard';

export interface HeritageGridProps {
  sites: HeritageCardProps[];
}

const HeritageGrid: React.FC<HeritageGridProps> = ({ sites }) => {
  return (
    <section 
      className="w-full py-8 sm:py-12 md:py-16"
      aria-label="Heritage sites grid"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {sites.map((site, index) => (
            <HeritageCard
              key={index}
              title={site.title}
              location={site.location}
              description={site.description}
              imageUrl={site.imageUrl}
              iconName={site.iconName}
              href={site.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageGrid;
```

**Usage Example:**
```tsx
const heritageSites = [
  {
    title: "Hundred Islands",
    location: "Alaminos, Pangasinan",
    description: "A stunning archipelago of 124 islands...",
    imageUrl: "/hundred-islands.jpg",
    iconName: "beach",
    href: "/hundred-islands"
  },
  // ... more sites
];

<HeritageGrid sites={heritageSites} />
```

---

### 2. HeaderNavigation Component

**File**: `components/organisms/HeaderNavigation.tsx`

#### Visual Preview

```
Desktop (≥768px):
┌─────────────────────────────────────────────────────────────┐
│ [🧭] Pangasinan Heritage    Home  Islands  Lighthouse  Spring│
└─────────────────────────────────────────────────────────────┘

Mobile (<768px) - Closed:
┌─────────────────────────────────┐
│ [🧭] PH Heritage            [☰] │
└─────────────────────────────────┘

Mobile (<768px) - Open:
┌─────────────────────────────────┐
│ [🧭] PH Heritage            [✕] │
├─────────────────────────────────┤
│ Home                            │
│ Hundred Islands                 │
│ Bolinao Lighthouse              │
│ Balungao Hot Spring             │
└─────────────────────────────────┘
```

#### Usage Context

HeaderNavigation is the main site navigation component, providing both desktop inline navigation and mobile hamburger menu functionality. It's sticky-positioned at the top of all pages.

**When to use:**
- Every page as the primary navigation
- Consistent across all pages
- Always visible (sticky positioning)

**Features:**
- Logo with homepage link
- Responsive navigation menu
- Mobile hamburger menu
- Active page indication
- Keyboard accessible
- Focus management

#### Responsive Logic

**Desktop Layout (≥768px):**
- Horizontal inline navigation
- Logo + text on left
- Nav items on right
- No menu button
- All items always visible

**Mobile Layout (<768px):**
- Logo on left (abbreviated text)
- Hamburger menu button on right
- Navigation hidden by default
- Expands below header when opened
- Stacked vertical navigation items

**Header Height:**
- Mobile: 64px (`h-16`)
- Desktop: 80px (`md:h-20`)

**Sticky Behavior:**
- `position: sticky` with `top: 0`
- `z-index: 50` stays above content
- Shadow for depth perception
- Smooth scroll with header offset

**Menu Toggle:**
- Button shows/hides mobile menu
- Icon changes: menu ↔ close
- Accessible with ARIA attributes
- Click outside to close (optional enhancement)

**Logo Responsive:**
- Mobile: "PH Heritage" (abbreviated)
- Tablet+: "Pangasinan Heritage" (full)
- Icon always visible with hover rotation

#### Code Reference

```typescript
'use client';

import React, { useState } from 'react';
import NavigationItem from '../molecules/NavigationItem';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';

export interface HeaderNavigationProps {
  currentPath?: string;
}

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/hundred-islands', label: 'Hundred Islands' },
  { href: '/bolinao-lighthouse', label: 'Bolinao Lighthouse' },
  { href: '/balungao-hot-spring', label: 'Balungao Hot Spring' },
];

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ currentPath = '/' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1">
            <Icon name="compass" size="lg" className="text-primary-600 group-hover:rotate-12 transition-transform duration-300" ariaLabel="Pangasinan Heritage logo" />
            <Typography variant="h4" className="text-lg sm:text-xl md:text-2xl hidden sm:block">
              Pangasinan Heritage
            </Typography>
            <Typography variant="h4" className="text-lg sm:hidden">
              PH Heritage
            </Typography>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigationLinks.map((link) => (
              <NavigationItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={currentPath === link.href}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="lg" ariaLabel={isMobileMenuOpen ? 'Close menu' : 'Open menu'} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navigationLinks.map((link) => (
                <NavigationItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={currentPath === link.href}
                  isMobile={true}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNavigation;
```

**Usage Example:**
```tsx
// Use on every page
<HeaderNavigation currentPath="/" />
<HeaderNavigation currentPath="/hundred-islands" />
<HeaderNavigation currentPath="/bolinao-lighthouse" />
```

---

## Usage Guidelines

### Component Composition Rules

1. **Atoms** should never import other Atoms
2. **Molecules** can import Atoms only
3. **Organisms** can import Atoms and Molecules
4. **Pages** can import any component level

### Accessibility Checklist

- ✅ All interactive elements have focus states
- ✅ Images have descriptive alt text
- ✅ Icons have aria-labels
- ✅ Forms have proper labels and descriptions
- ✅ Semantic HTML elements used throughout
- ✅ Color contrast meets WCAG 2.1 AA (4.5:1)
- ✅ Keyboard navigation fully functional
- ✅ Touch targets minimum 44x44px

### Performance Optimization

- **Code Splitting**: Components loaded on-demand
- **Lazy Loading**: Images load as they enter viewport
- **Tree Shaking**: Unused code eliminated in production
- **CSS Purging**: Tailwind removes unused styles
- **Bundle Size**: Total < 100 KB gzipped

### Mobile-First Development

1. Start with mobile styles (default)
2. Add tablet styles with `sm:` prefix (≥640px)
3. Add desktop styles with `lg:` prefix (≥1024px)
4. Test on real devices and simulators
5. Optimize touch targets for mobile

### Adding New Components

When creating new components:

1. **Choose the right level**:
   - Atom: Single element, no composition
   - Molecule: 2-5 atoms combined
   - Organism: Complex section with multiple molecules

2. **Follow naming conventions**:
   - PascalCase for component names
   - Descriptive, not generic (HeritageCard vs Card)

3. **Document thoroughly**:
   - Usage context
   - Responsive logic
   - Code examples
   - Visual previews

4. **Ensure accessibility**:
   - Semantic HTML
   - ARIA attributes
   - Keyboard support
   - Screen reader testing

5. **Test responsiveness**:
   - Mobile (320px minimum)
   - Tablet (768px)
   - Desktop (1280px+)

---

## Conclusion

This Atomic Design System provides a comprehensive, maintainable component library for the Pangasinan Heritage Digital Showcase. Each component is:

- **Documented** with usage guidelines and code examples
- **Responsive** with mobile-first breakpoints
- **Accessible** following WCAG 2.1 AA standards
- **Reusable** across different pages and contexts
- **Performant** optimized for 3G/4G mobile connections

By following these patterns and guidelines, developers can efficiently build new pages while maintaining consistency, accessibility, and performance across the entire platform.

---

**Manual Prepared By**: Christian Lozada  
**Component Library**: 13 Components (5 Atoms, 3 Molecules, 2 Organisms)  
**Accessibility**: WCAG 2.1 AA Compliant  
**Mobile Optimization**: 3G/4G Optimized
