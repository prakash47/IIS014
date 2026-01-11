# Aria Residences

A luxury single-page real estate website built with Next.js 16, showcasing premium residential apartments with world-class amenities.

## 🏗️ Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4.1 (CSS-First Configuration)
- **Animations**: Framer Motion 12
- **UI Components**: Preline UI 3.2.1
- **Form Handling**: Server Actions with Zod validation
- **Email**: Resend SDK with `after()` API
- **Deployment**: Vercel

## 🚀 Features

- ✨ Single-page scrolling layout
- 🎨 Luxury design with extensive animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessibility compliant (ARIA labels, semantic HTML)
- 🔍 SEO optimized (metadata, JSON-LD schema, sitemap)
- 📧 Contact form with background email dispatch
- 🖼️ Interactive gallery with category filtering
- 📍 Location section with nearby landmarks
- 🏠 Floor plans with modal/lightbox view
- 🎯 Core Web Vitals optimized

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.local and add your Resend API key
RESEND_API_KEY=re_your_api_key_here

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main single-page site
│   │   ├── globals.css      # Tailwind config & design tokens
│   │   ├── sitemap.ts       # SEO sitemap
│   │   └── robots.ts        # Robots.txt
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Amenities.tsx    # Amenities grid
│   │   ├── FloorPlans.tsx   # Floor plans with modal
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── Location.tsx     # Location & landmarks
│   │   ├── Contact.tsx      # Contact section
│   │   ├── ContactForm.tsx  # Form component
│   │   └── Footer.tsx       # Footer
│   ├── lib/
│   │   ├── validation.ts    # Zod schemas
│   │   └── resend.ts        # Resend client
│   └── types/
│       └── index.ts         # TypeScript types
├── actions/
│   └── contact.ts           # Server Action for form
├── public/                  # Static assets
├── package.json
├── next.config.ts
├── tsconfig.json
└── .env.local
```

## 🎨 Design System

The project uses a custom design system defined in `globals.css`:

- **Colors**: Brand (blue) and Gold palettes using OKLCH
- **Typography**: Playfair Display (headings) + Inter (body)
- **Animations**: Custom fade-in, slide-up, scale-in
- **Utilities**: Glass effect, luxury gradient, hover effects

## 📧 Email Configuration

The contact form uses Resend for email delivery. To set up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to `.env.local`: `RESEND_API_KEY=re_your_key`
4. Update the sender email in `actions/contact.ts`

## 🚀 Deployment

Deploy to Vercel with one click:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 License

© 2026 Aria Residences. All rights reserved.