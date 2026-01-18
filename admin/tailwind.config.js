/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary':'#5F6FFF'
      }
    },
  },
  plugins: [],
}

// npm install -D tailwindcss@3.4.17 postcss autoprefixer
// npx tailwindcss init -p
