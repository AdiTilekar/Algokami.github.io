# Digital Agency Website

A complete, production-ready marketing website for a digital services startup agency built with **Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Resend
- **Blog:** Contentlayer (MDX)
- **Particles:** react-tsparticles

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `RESEND_API_KEY` - Get from [resend.com](https://resend.com)
- `RESEND_FROM_EMAIL` - Your verified sending domain
- `RESEND_TO_EMAIL` - Where contact and quote form emails go
- `DATABASE_URL` or `POSTGRES_URL` - Vercel Postgres / Neon connection string for lead storage
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly booking link

### Vercel Postgres (Neon) Lead Storage

Both `/contact` and `/get-quote` form submissions are stored in Postgres and also emailed.

1. In Vercel, create a Postgres database from **Storage**.
2. Connect it to this project.
3. Copy the generated `DATABASE_URL` (or `POSTGRES_URL`) into `.env.local`.
4. Redeploy (or restart local dev server).

Tables are created automatically on first submission:
- `contact_leads`
- `quote_leads`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── services/
│   ├── blog/
│   ├── contact/
│   └── api/                # API routes
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Homepage sections
│   ├── ui/                 # Reusable components
│   └── animations/         # Animation components
├── content/
│   └── blog/               # MDX blog posts
├── data/                   # Static data
├── lib/                    # Utilities
├── public/
│   └── images/             # Static assets
├── styles/                 # Additional CSS
└── types/                  # TypeScript types
```

## Features

- ✅ Fully responsive design
- ✅ Animated sections with Framer Motion
- ✅ Interactive particle background
- ✅ Typewriter effect in hero
- ✅ Animated counters
- ✅ Contact form with email delivery
- ✅ MDX blog with Contentlayer
- ✅ SEO optimized with meta tags
- ✅ Sitemap auto-generation
- ✅ 404 custom page

## Deployment

Recommended: Deploy to [Vercel](https://vercel.com)

1. Push code to GitHub
2. Connect repo in Vercel dashboard
3. Add environment variables in Vercel settings
4. Deploy!

## License

MIT
