const config = {
  darkMode: "class", // REQUIRED
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
