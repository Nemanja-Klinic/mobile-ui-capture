/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        dark: '#0f0426',
        accent: '#fb144a',
        light: '#f1e9ff',
        purple: '#7001e0'
      }
    },
  },
  plugins: [],
}