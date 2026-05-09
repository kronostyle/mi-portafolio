/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0a0a',
        accentCian: '#00f2ff',
        accentViolet: '#7000ff',
      },
    },
  },
  plugins: [],
}