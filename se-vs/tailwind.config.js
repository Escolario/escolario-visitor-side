/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#F6B211",
        "blue-button": "#1F8FF9",
        "brand-gray": "#DFE1E6",
        "brand-blue": "#1F8FF9"
      },
      backgroundImage: {
        gradient: "linear-gradient(92deg, #F2B23C -16.2%, #1F8FF9 114.08%)",
        "gradient-text":
          "linear-gradient(92deg, #F2B23C 35.2%, #1F8FF9 70.08%)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};
