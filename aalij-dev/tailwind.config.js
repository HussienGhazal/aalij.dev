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
        brand: {
          dark: '#07090E',
          card: '#0D111A',
          cardHover: '#121824',
          border: 'rgba(255, 255, 255, 0.08)',
          borderActive: 'rgba(16, 185, 129, 0.35)',
          emerald: '#10B981',
          emeraldHover: '#059669',
          emeraldGlow: 'rgba(16, 185, 129, 0.15)',
          cyan: '#06B6D4',
          cyanGlow: 'rgba(6, 182, 212, 0.15)',
          accent: '#3B82F6',
          textMuted: '#94A3B8',
          textDim: '#64748B'
        }
      },
      fontFamily: {
        ar: ['Cairo', 'sans-serif'],
        en: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-scan': 'glow-scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'glow-scan': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      }
    },
  },
  plugins: [],
}
