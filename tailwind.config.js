/** @type {import('tailwindcss').Config} */
const componentClassesPlugin = require("tailwind-component-classes");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [componentClassesPlugin],
  components: {
    heading: {
      h1: `text-h1 leading-[1.05] font-serif font-thin`,
    },
    body: {
      1: `text-b1 font-sans font-normal`,
    },
    content:
      "w-[1800px] max-w-[calc(100%-30px)] mx-auto lg:max-w-[calc(100%-60px)]",
  },
};
