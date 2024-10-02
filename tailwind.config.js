/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0C1832',
        darkGreen: '#024444',
        lightYellow: '#e1ad01',
        green:"#024444",
        light: '#F3F4F6',
        dark: '#131528',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-highlights'),
  ]
}
