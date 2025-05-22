/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "rgba(var(--p1))", //black
        p2: "rgba(var(--p2))", //gray1
        p3: "rgba(var(--p3))",  //gray2
        s1: "rgba(var(--s1))",  //white
        s2: "rgba(var(--s2))",  //darkblue
        s3: "rgba(var(--s3))", //lightblue
      },
    },
  },
  plugins: [],
};
