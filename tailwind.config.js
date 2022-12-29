/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      kecil: [
        "16px",
        {
          lineHeight: "28px",
          fontWeight: "400",
        },
      ],
      sedang: [
        "55px",
        {
          lineHeight: "66px",
          fontWeight: "700",
        },
      ],
      sedang2: [
        "46px",
        {
          lineHeight: "55px",
          fontWeight: "700",
        },
      ],
      besar: ["20px", "28px"],
      kecilmobile: [
        "14px",
        {
          lineHeight: "22px",
          fontWeight: "400",
        },
      ],
      sedangmobile: [
        "32px",
        {
          lineHeight: "38px",
          fontWeight: "700",
        },
      ],
      besarmobile: ["20px", "28px"],
    },
    extend: {
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
      },
      colors: {
        grey: "#8F8C8C",
        blue: "#065EA1",
        "blue-dark": "#054D83",
        blacky: "#2A2828",
        footer: "#032947",
        "footer-font": "#ECF1F4",
      },
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
      page: "linear-gradient(to right,rgba(255,255,255,1),70%,rgba(255,0,0,0), transparent), url('/Home.png')",
      backgroundColor: {
        banner:
          "linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
