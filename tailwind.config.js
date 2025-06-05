/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',            // ← enable “class” strategy
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
