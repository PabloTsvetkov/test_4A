module.exports = {
  theme: {
    extend: {
      screens: {
        "max-xs": { max: "374px" },
        "max-sm": { max: "639px" },
      },
    },
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
};
