import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1F5E',
          dark: '#0d1b4b',
          light: '#2a3080',
        },
        accent: {
          DEFAULT: '#F5A623',
          dark: '#e09415',
          light: '#ffc154',
        },
        'bg-light': '#F7F8FC',
        'bg-dark': '#0d1b4b',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2rem, 4vw, 3.2rem)',
        section: 'clamp(1.8rem, 3vw, 2.5rem)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        hover: '0 12px 48px rgba(26,31,94,0.15)',
        'lg-custom': '0 8px 40px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        xl2: '24px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
