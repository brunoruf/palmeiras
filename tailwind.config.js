/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '728px',
      lg: '992px',
      xl: '1366px',
      xxl: '1536px'
    },
    colors: {
      transparent: "transparent",
      white: '#FFFFFF',
      primary: {
        300: '#1BC578',
        500: '#008354',
        800: '#00321C'
      },
      secondary: {
        500: '#252A3B'
      },
      neutral: {
        100: '#D1D2EC'
      },
    },
    boxShadow: {
      sm: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
      lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.15)',
    },
    fontSize: {
      xxs: ['10px', {lineHeight:'20px', letterSpacing: '-0.03em'}],
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: ['18px', {lineHeight:'22px'}],
      xl: '24px',
      hg: ['40px', {lineHeight:'36px'}],
    },
    borderWidth: {
      sm: '1px'
    },
    borderRadius: {
      sm: '4px',
      md: '8px',
    },
    extend: {
      fontFamily: {
        telegraf: "'Telegraf', sans-serif",
      },
    },
  },
  plugins: [],
}

