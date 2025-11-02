# Portfolio Style Guide

Inspired by [sofiatnafiu.com](https://www.sofiatnafiu.com/)

## Color Palette

### Primary Colors
- **Primary Text**: `#2C0412` (Deep Burgundy) - Main text color
- **Background**: `#FFFDEB` (Warm Cream) - Main background
- **Accent**: `#FFE500` (Bright Yellow) - Highlights, CTAs, hover states

### Dark Mode
- **Dark Background**: `#100A0D` (Almost Black)
- **Dark Text**: `#BAB5B8` (Light Gray)
- **White**: `#FFFFFF`

### Extended Palette

**Burgundy Scale:**
- 50: `#FFF5F7`
- 100: `#FFE5EB`
- 200: `#FFCCD9`
- 300: `#FF99B3`
- 400: `#FF6688`
- 500: `#FF3366`
- 600: `#E6004D`
- 700: `#B30039`
- 800: `#800029`
- 900: `#2C0412` (Primary)

**Canary Scale:**
- 50: `#FFFEF5`
- 100: `#FFFDEB` (Background)
- 200: `#FFF9C2`
- 300: `#FFE500` (Accent)
- 400: `#FFD700`
- 500: `#FFC700`

## Typography

### Font Families
1. **Primary (Sans)**: `Gabarito` - Rounded, friendly font for body text
2. **Tight**: `Inter Tight` - For condensed text
3. **Handwriting**: `Architects Daughter` - For creative accents
4. **Script**: `Marck Script` - For decorative elements

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

### Usage Examples
```html
<!-- Body text -->
<p class="font-sans">Regular body text</p>

<!-- Tight/condensed -->
<p class="font-tight">Condensed text</p>

<!-- Creative accent -->
<span class="font-handwriting text-accent">Creative highlight</span>

<!-- Decorative -->
<h2 class="font-script">Elegant heading</h2>
```

## Component Classes

### Buttons
```html
<!-- Primary button -->
<button class="btn-primary">Click Me</button>

<!-- Secondary button -->
<button class="btn-secondary">Learn More</button>
```

### Text Styles
```html
<!-- Accent handwriting -->
<span class="text-accent-handwriting">Highlighted text</span>

<!-- Text with highlight background -->
<span class="text-highlight">Important text</span>

<!-- Hover underline effect -->
<a href="#" class="hover-underline">Link with underline</a>
```

### Hover Effects
```html
<!-- Lift on hover -->
<div class="hover-lift">Card content</div>

<!-- Scale on hover -->
<img class="hover-scale" src="..." />

<!-- Text color change -->
<div class="hover-text-dark">
  <span class="text-gray-300">Hover me</span>
</div>
```

## Design Principles

1. **Warm & Inviting**: Use the cream background and burgundy text for a warm, approachable feel
2. **Playful Accents**: Yellow accent color for energy and attention
3. **Creative Typography**: Mix fonts for personality - handwriting for highlights, script for elegance
4. **Smooth Interactions**: All hover states have smooth transitions (0.3s)
5. **Generous Spacing**: Use section-padding for consistent vertical rhythm

## Animation Delays

Use these classes for staggered animations:
- `.delay-200` - 0.2s delay
- `.delay-300` - 0.3s delay
- `.delay-400` - 0.4s delay
- `.delay-500` - 0.5s delay
- `.delay-700` - 0.7s delay

## Selection Color

Text selection uses the accent color with 40% opacity for a cohesive experience.
