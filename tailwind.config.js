/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sfm: {
          navy: '#0b1d3a',
          blue: '#1e3a8a',
          dark: '#0f172a',
          slate: '#334155',
          muted: '#64748b',
          red: '#c1121f',
          crimson: '#9b111e',
          accent: '#e63946',
          cyan: '#0284c7',
          lightBg: '#f8fafc',
          cardBg: '#ffffff',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Urbanist"', 'sans-serif'],
        display: ['"Outfit"', '"Syne"', '"Lexend"', 'sans-serif'],
        heading: ['"Urbanist"', '"Outfit"', '"Lexend"', 'sans-serif'],
        tech: ['"Space Grotesk"', 'monospace', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 8px 10px -5px rgba(15, 23, 42, 0.04)',
        'glow-red': '0 0 20px rgba(193, 18, 31, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
