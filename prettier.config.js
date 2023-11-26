/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^components/(.*)$", "^[./]" ],
  importOrderSeparation: true, 
  importOrderSortSpecifiers: true 
};

export default config;
