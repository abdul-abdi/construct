/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A3183',        // More vibrant navy blue
          'navy-light': '#1E4DB7', // Brighter navy blue
          'navy-dark': '#061C54', // Rich dark navy blue
          silver: '#C0C5C9',      // Silver
          'silver-light': '#E5E8EB',// Light silver
          'silver-dark': '#8D9298', // Darker silver
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
}; 