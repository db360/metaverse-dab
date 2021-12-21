module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto, sans-serif'],
    },
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {},
  },
  plugins: [require('tailwindcss-filters')],
};
