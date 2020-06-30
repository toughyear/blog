module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "var( --primary-color)",
        "font-color": "var(--font-color)",
        "bg-color": "var(--bg-color)",
      },
    },
  },
  variants: {},
  plugins: [],
};
