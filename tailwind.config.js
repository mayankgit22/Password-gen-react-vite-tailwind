/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",                   // Include the HTML file if used
    "./src/**/*.{js,jsx,ts,tsx}",     // Include all React components in `src` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
