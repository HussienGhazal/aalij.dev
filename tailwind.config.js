/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080C',
          900: '#090B10', // Ground
          850: '#0D1118',
          800: '#111520', // Surfaces / Cards
          750: '#161B29',
          700: '#1C2335', // Borders
          600: '#2A344D'
        },
        emerald: {
          400: '#34D399',
          500: '#10B981', // Primary accent
          600: '#059669',
          700: '#047857',
        },
        brand: {
          ground: '#090B10',
          surface: '#111520',
          card: '#0D1118',
          cardHover: '#131926',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: '#1C2335',
          borderHover: 'rgba(16, 185, 129, 0.35)',
          emerald: '#10B981',
          emeraldDark: '#059669',
          emeraldMuted: 'rgba(16, 185, 129, 0.12)',
          cyan: '#06B6D4',
          slateMuted: '#94A3B8',
          slateDim: '#64748B'
        }
      },
      fontFamily: {
        ar: ['Cairo', 'sans-serif'],
        en: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.15)',
        'glow-subtle': '0 0 40px -10px rgba(16, 185, 129, 0.08)',
        'card': '0 8px 24px -4px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
