/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#dec18c', hover: '#c9a86e' },
        ink: '#2a2820',
        body: '#5e584b',
        muted: { DEFAULT: '#9a9485', 2: '#8a8375' },
        paper: { DEFAULT: '#f6f3ec', 2: '#f2f0ea' },
        forest: { DEFAULT: '#26302a', text: '#f2ede2' },
        footer: { bg: '#1c241d', text: '#dfd9cc' },
        line: { DEFAULT: 'rgba(42, 40, 32, 0.14)', input: 'rgba(42, 40, 32, 0.24)' },
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
      maxWidth: {
        wrap: '1360px',
      },
      spacing: {
        gutter: 'clamp(24px, 5vw, 80px)',
      },
    },
  },
  plugins: [],
}
