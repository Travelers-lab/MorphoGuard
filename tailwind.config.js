/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#263C43',
        secondary: '#287271',
        highlight: '#2A9D8F',
        background: '#F7F8F6',
        accent: '#E9A15B',
        'text-primary': '#223036',
        'border-light': '#DCE4E1',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Inter', 'Source Sans', 'sans-serif'],
        math: ['KaTeX_Main', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
