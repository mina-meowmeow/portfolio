/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-warm': 'var(--paper-warm)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        'sky-pale': 'var(--sky-pale)',
        'sky-light': 'var(--sky-light)',
        'sky-blue': 'var(--sky-blue)',
        sand: 'var(--sand)',
        butter: 'var(--butter)',
        seal: 'var(--seal)',
        border: 'var(--line)',
        input: 'var(--line)',
        ring: 'var(--seal)',
        background: 'var(--paper)',
        foreground: 'var(--ink)',
        primary: {
          DEFAULT: 'var(--seal)',
          foreground: 'var(--paper)',
        },
        secondary: {
          DEFAULT: 'var(--paper-warm)',
          foreground: 'var(--ink)',
        },
        muted: {
          DEFAULT: 'var(--paper-warm)',
          foreground: 'var(--ink-soft)',
        },
        accent: {
          DEFAULT: 'var(--sky-pale)',
          foreground: 'var(--ink)',
        },
        card: {
          DEFAULT: 'var(--paper)',
          foreground: 'var(--ink)',
        },
      },
      fontFamily: {
        serif: ['"Zen Old Mincho"', 'serif'],
        jp: ['"Zen Kaku Gothic New"', '"Noto Sans"', 'sans-serif'],
        sans: ['"Noto Sans"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
