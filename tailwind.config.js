export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extend the amber palette for more nuanced golden egg colors
        "egg-shell": "#FFF8E1",
        yolk: "#FFB300",
        "yolk-dark": "#FB8C00",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "texture-light": "url('/textures/light-paper.png')",
        "texture-egg": "url('/textures/egg-pattern.png')",
      },
      boxShadow: {
        soft: "0 10px 50px -12px rgba(0, 0, 0, 0.05)",
        hover: "0 20px 60px -12px rgba(0, 0, 0, 0.1)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [],
};
