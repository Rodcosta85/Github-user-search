/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      boxShadow: {
        'soft-black': '0 0 20px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'space-mono': ['Space Mono']
      },
      colors: {
        'light-blue': '#0079FF',
        'hover-blue': '#60ABFF',
        'almost-black': '#141D2F',
        'dark-blue': '#1E2A47',
        'middle-gray': '#697C9A',
        'blueish-gray': '#4B6A9B',
        'very-dark-gray': '#2B3442',
        'transparent': '#F6F8FF',
        'text-black': '#222731',
        'results-red': '#F74646'
      },
      screens: {
        tablet: '500px',
        desktop: '1000px'
      }
    },
  },
  plugins: [],
}

