/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)',
      },
      colors: {
        primary: '#590DB8',
        primaryLighter: '#DDD5EA',
        primaryDarker: '#312A4F',
        darkGray: '#717171',
        lightGray: '#BBBFBF'
      },
      textColor: {
        darkGray: '#717171',
        lightGray: '#BBBFBF'
      },
    },
  },
  plugins: [],
}
