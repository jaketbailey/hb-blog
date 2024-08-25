/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['"Archivo Black"', "sans-serif"],
        bitter: ['"Bitter"', "serif"],
        hammersmith: ['"Hammersmith One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
