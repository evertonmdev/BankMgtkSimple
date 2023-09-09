/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        action: "#113E21",
        destaque: "##113E28"
      },
      backgroundColor: {
        primary: "#FEFEFE",
        secondary: "linear-gradient(195deg, #ffffff, #000000)"
      },
      textColor: {
        primary: "black",
        secondary: "white",
        logo: "#113E21"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        mono: "'Roboto Mono', monospace",
        logo: "'Roboto'"
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.9rem, 1.2rem)",
        md: "clamp(1rem, 1.1rem, 1.4rem)",
        lg: "clamp(1.2rem, 1.5rem, 1.8rem)",
        xl: "clamp(1.4rem, 1.8rem, 2.2rem)",
        "2xl": "clamp(1.8rem, 2.2rem, 2.5rem)",
      } 
    },
  },
  plugins: [],
}

