/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rank: "linear-gradient(to bottom, rgba(80, 182, 80, 0.997), rgb(227, 206, 90), rgb(230, 73, 73))",
      },
      colors: {
        back: {
          pri: "var(--back-color-pri)",
          sec: "var(--back-color-sec)",
          cont: "var(--back-color-cont)",
          bor: "var(--border-color-pri)",
          hov: "var(--hover-color-pri)",
          hov2: "var(--hover-color-sec)",
        },
        color: {
          pri: "var(--text-color-pri)",
          sec: "var(--text-color-sec)",
          cont: "var(--text-color-cont)",
        },
        accent: {
          pri: "var(--accent-color-pri)",
          sec: "var(--accent-color-sec)",
          ter: "var(--accent-color-ter)",
        },
      },
      fontFamily: {
        pri: ["Rethink Sans", "sans-serif"],
        sec: ["Nunito", "sans-serif"],
      },
      transitionTimingFunction: {
        coming: "cubic-bezier(0.33, 0.33, 0.36, 1.5)",
      },
    },
    plugins: [],
  },
};
