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
      minHeight: {
        "1/4-screen": "25svh",
        "2/5-screen": "40svh",
        "1/2-screen": "50svh",
        "3/4-screen": "75svh",
      },
    },
  },
  plugins: [],
};
