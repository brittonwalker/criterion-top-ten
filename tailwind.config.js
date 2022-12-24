/** @type {import('tailwindcss').Config} */
const componentClassesPlugin = require("tailwind-component-classes");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        radio: ["Radio Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [componentClassesPlugin],
  components: {
    heading: {
      1: "text-[2.66rem] leading-[3.25rem] lg:text-[3.75rem] lg:leading-[4.375rem] mb-[.5em] font-radio tracking-wide",
      2: "text-[2rem] leading-[2.5rem] lg:text-[2.66rem] lg:leading-[3.25rem]",
      3: "text-[1.5rem] leading-[1.875rem]",
    },
    display: {
      1: "text-[2.25rem] leading-[3rem]",
    },
    body: {
      1: "text-[1.5rem] leading-[2rem]",
      2: "text-[1rem] leading-[1.5rem]",
    },
    button:
      "border border-black rounded-full text-[1.5rem] leading-[1.875rem] hover:no-underline px-4 py-1 transform duration-300 ease-in-out",
    content:
      "w-[1800px] max-w-[calc(100%-30px)] mx-auto lg:max-w-[calc(100%-60px)]",
  },
};
