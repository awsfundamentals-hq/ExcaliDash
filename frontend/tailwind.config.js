import colors from "tailwindcss/colors";

// Upstream hardcodes indigo accents and neutral dark surfaces in many
// components. Remapping the palettes here rebrands them without touching
// those files, which keeps rebases on upstream cheap.
const awsfOrange = {
  50: "#FFF7EB",
  100: "#FFEBCC",
  200: "#FFD699",
  300: "#FFC266",
  400: "#FFAD33",
  500: "#FF9900",
  // 600 and up double as text on white, so they are dark enough for WCAG AA.
  600: "#B45F00",
  700: "#8F4B00",
  800: "#6B3800",
  900: "#472500",
  950: "#2B1600",
};

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: awsfOrange,
        violet: awsfOrange,
        purple: awsfOrange,
        neutral: colors.slate,
      },
    },
  },
  plugins: [],
};
