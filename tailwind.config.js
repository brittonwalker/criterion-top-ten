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
    button:
      "border border-black rounded-full text-[1.5rem] leading-[1.875rem] hover:no-underline px-4 py-1 transform duration-300 ease-in-out",
    content:
      "w-[1800px] max-w-[calc(100%-30px)] mx-auto lg:max-w-[calc(100%-60px)]",
  },
};
