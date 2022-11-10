/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sliderimage1: "url('/sliderimage1.png')",
        sliderimage2: "url('/sliderimage2.png')",
        sliderimage3: "url('/sliderimage3.png')",
        sliderimage4: "url('/sliderimage4.png')",
        sliderimage5: "url('/sliderimage5.png')",
        page3:
          "linear-gradient(to right,rgba(255,255,255,1),70%,rgba(255,0,0,0), transparent), url('/Home.png')",
        page4:
          "linear-gradient(to left,rgba(255,255,255,1),70%,rgba(255,0,0,0), transparent), url('/Home.png')",
        survey:
          "linear-gradient(to right,rgba(255,255,255,1),30%,rgba(255,0,0,0), transparent), url('/surveyImage.png')",
        architecture:
          "linear-gradient(to right,rgba(255,255,255,1),30%,rgba(255,0,0,0), transparent), url('/bg-architecture.png')",
        urban:
          "linear-gradient(to right,rgba(255,255,255,1),30%,rgba(255,0,0,0), transparent), url('/bg-urban.png')",
        blog: "linear-gradient(to bottom, rgba(22,126,196,1) 60%, white 50%)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
