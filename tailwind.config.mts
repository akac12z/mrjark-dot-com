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
        "mr-bias-300": "#C3B4C6",
        "mr-bias-500": "#a58faa",
        "mr-bias-700": "#756679",
        "mr-bias-category-perception": "#f2ce57",
        "mr-bias-category-context": "#9ed841",
        "mr-bias-category-judgment": "#4C9DFF",
        "mr-bias-category-memory": "#af76ff",
        "mr-bias-category-speed": "#e03d3d",
        "mr-error": "#ef4444",
        "mr-warning": "#eab308",
        "mr-success": "#22c55e",
      },
      fontFamily: {
        museo_moderno: "MuseoModerno, system-ui, sans-serif",
        rubik: "Rubik, system-ui, sans-serif",
        code: "Cascadia, ui-monospace, monospace",
      },
      screens: {
        xs: "460px",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.5rem",
              color: "mr-text-headers",
            },
            h2: {
              fontSize: "1.25rem",
              color: "mr-text-headers",
            },
            h3: {
              fontSize: "1.125rem",
              color: "mr-text-headers",
            },
            h4: {
              fontSize: "1rem",
              color: "mr-text-headers",
            },
            h5: {
              fontSize: "0.875rem",
              color: "mr-text-headers",
            },
            h6: {
              fontSize: "0.875rem",
              color: "mr-text-headers",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
