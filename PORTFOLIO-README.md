# Portfolio Website Template

A modern, elegant portfolio website built with Next.js and Tailwind CSS featuring dark mode with glow effects.

## Features

- 🌙 **Dark Mode Only** - Elegant dark theme with no light mode option
- ✨ **Glow Effects** - Beautiful glow effects on buttons, cards, and text
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Design** - Clean, elegant UI with smooth animations
- 📄 **Single Page** - All content on one page with smooth scrolling navigation
- 💅 **Tailwind CSS** - Utility-first styling with custom glow classes
- 🎯 **shadcn/ui Components** - Pre-built, accessible UI components

## Pages/Sections

1. **Home** - Hero section with greeting, name, title, and CTAs
2. **About** - About me description, statistics, and skills with progress bars
3. **Projects** - Featured projects grid with images, descriptions, tags, and links
4. **Contact** - Contact form and social media links

## Data Management

All content is managed from a single data file:
- `src/data/portfolio-data.ts` - Edit this file to customize all content

### Customize Your Portfolio

1. **Personal Information**
   - Edit name, title, and description in `home` section
   - Update email and social links in `contact` section

2. **Projects**
   - Add/remove projects in `projects.items` array
   - Update images, descriptions, tags, and links

3. **Skills**
   - Modify skills and proficiency levels in `about.skills` array

4. **Stats**
   - Update statistics numbers and labels in `about.stats` array

## Customization

### Colors & Glow Effects

Edit glow classes in `src/app/globals.css`:
- `.glow-text` - Text shadow effect
- `.glow-box` - Box shadow effect
- `.glow-border` - Border glow effect
- `.glow-purple` - Purple glow
- `.glow-cyan` - Cyan glow

### Animations

Animations are defined in `src/app/page.tsx`:
- Fade-in animations with delays
- Hover effects on buttons and cards
- Pulse animations on background elements

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Development

```bash
# Install dependencies (if needed)
bun install

# Development server is already running
# Access at http://localhost:3000

# Check code quality
bun run lint
```

## File Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and glow effects
│   ├── layout.tsx        # Root layout with dark mode enforced
│   └── page.tsx          # Main portfolio page (all sections)
├── data/
│   └── portfolio-data.ts # All portfolio content data
└── components/ui/        # shadcn/ui components
```

## Key Design Principles

- **Sticky Navigation** - Fixed header that stays visible while scrolling
- **Smooth Scrolling** - Animated scroll to sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Active Section Highlighting** - Visual indicator for current section
- **Hover Effects** - Interactive feedback on all clickable elements
- **Modern Dark Theme** - Dark background with white/gray accents
- **Glow Accents** - Subtle purple and cyan glow effects for visual interest

## Images

Project images are sourced from Unsplash. Replace them with your own project screenshots:
- Update image URLs in `src/data/portfolio-data.ts`

## Contact Form

The contact form is a frontend demo. To make it functional:
1. Create a backend API endpoint
2. Connect to a service like Formspree, EmailJS, or your own backend
3. Update the `handleSubmit` function in `src/app/page.tsx`

## License

This is a template portfolio. Customize it for your own use!
