/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-background": "#14120B",
        "subtle-background": "#1B180F",
        "ui-element-background": "#2D2305",
        "hover-ui-element-background": "#362B00",
        "active-ui-element-background": "#433500",
        "subtle-borders": "#524202",
        "ui-element-border": "#665417",
        "hovered-ui-element-border": "#836A21",
        "solid-background": "#FFE629",
        "hovered-solid-background": "#FFFF57",
        "low-contrast-text": "#F6EEB4",
        "hight-contrast-text": "#F5E147",
      },
      fontFamily: {
        text: ["Lora", "serif"],
        heading: ["Poppins", "sans-serif"],
        hero: ["Amaranth", "sans-serif"],
      },
    },
  },
  plugins: [],
};
