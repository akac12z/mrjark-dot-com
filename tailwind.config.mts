/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "mr-bg": "#0b0b0e",
        "mr-text-headers": "#f9fafb",
        "mr-text-content": "#e5e7eb",
        "mr-text-relax": "#9ca3af",
        "mr-primary-green": "#50e5b8",
        "mr-neon-violet": "#CF33FF",
        "mr-neon-pink": "#FF33C4",
        "mr-neon-cosmic": "#FF327D",
        "mr-neon-blue": "#33AFFF",
        "mr-neon-lime": "#D4FF33",
        "mr-neon-gold": "#FFC733",
        "mr-neon-red": "#FF4D4D",
        "mr-neon-orange": "#FF8A33",
        "mr-neon-green": "#AFFF33",
        "mr-neon-aqua": "#33FFE8",
        "mr-bias": "#a58faa",
      },
      fontFamily: {
        museo_moderno: "MuseoModerno, system-ui, sans-serif",
        rubik: "Rubik, system-ui, sans-serif",
        code: "Cascadia, ui-monospace, monospace",
        comment: "Note_This, system-ui, sans-serif",
      },
      screens: {
        xs: "460px",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
