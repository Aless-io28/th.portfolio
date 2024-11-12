/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rank: "linear-gradient(to bottom, rgba(80, 182, 80, 0.997), rgb(227, 206, 90), rgb(230, 73, 73))",
        long: "linear-gradient(to bottom, #3ba151, #3ba151, #3ba151, #3ba15100)",
        sul: "radial-gradient(circle at 50% 50%, rgba(0, 123, 255, 0.4) 10%, rgba(0, 123, 255, 0) 50%)",
        light:
          "radial-gradient(circle, rgba(255, 255, 135, 0.517) 0%, rgba(255, 255, 188, 0.221) 60%, transparent 98%)",
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
        back: "cubic-bezier(0.22, 0.48, 0.64, 1.05)",
      },
      transitionDuration: {
        nav: "350ms",
      },
      screens: {
        xs: "494px",
      },
    },
    plugins: [],
  },
};
