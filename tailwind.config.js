/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        logo3d: {
          '0%': { transform: 'rotateY(0deg) translateZ(0px)' },
          '50%': { transform: 'rotateY(15deg) translateZ(20px)' },
          '100%': { transform: 'rotateY(0deg) translateZ(0px)' },
        },
        link3d: {
          '0%': { transform: 'rotateX(0deg) translateZ(0px)' },
          '50%': { transform: 'rotateX(15deg) translateZ(10px)' },
          '100%': { transform: 'rotateX(0deg) translateZ(0px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        logo3d: 'logo3d 1s ease-in-out',
        link3d: 'link3d 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

