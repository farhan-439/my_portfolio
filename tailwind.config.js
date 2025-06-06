/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',                // ← we’re using “class” strategy
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'    // ← make sure this glob matches where your components actually live
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
