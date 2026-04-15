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
- `RESEND_TO_EMAIL` - Where contact form emails go
- `GOOGLE_SHEETS_SPREADSHEET_ID` - Spreadsheet ID for quote leads
- `GOOGLE_SHEETS_SHEET_NAME` - Sheet tab name (for example: Sheet1)
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email
- `GOOGLE_SHEETS_PRIVATE_KEY` - Service account private key (keep `\n` escaped)
- `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` - Free webhook URL from Apps Script (recommended no-cost path)
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly booking link

### Free Lead Storage in Google Sheets

The `/get-quote` form can append directly to Google Sheets for free.

Option A (recommended, no service account needed):

1. Open your Google Sheet.
2. Go to Extensions > Apps Script.
3. Paste a `doPost(e)` script that appends JSON fields to the sheet.
4. Deploy as Web App with access set to "Anyone".
5. Set `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` in `.env.local`.
6. Restart server and submit a test quote.

Option B (service account based):

1. Create a Google Cloud service account and generate a JSON key.
2. Copy `client_email` and `private_key` into env vars above.
3. Share the sheet with `GOOGLE_SHEETS_CLIENT_EMAIL` as **Editor**.
4. Set `GOOGLE_SHEETS_SPREADSHEET_ID` and `GOOGLE_SHEETS_SHEET_NAME`.
5. Restart server and submit a test quote.

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
