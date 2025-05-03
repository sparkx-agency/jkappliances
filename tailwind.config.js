/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // Disabled dark mode completely
  theme: {
    extend: {
      colors: {
        // Your custom colors here
      },
      fontFamily: {
        // Your custom fonts here
      },
    },
  },
  plugins: [],
}; 