/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,js.ts}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['lato', 'sans-serif'],
        metropolis: ['metropolis', 'sans-serif'],

      },
      screens: {
        '3xl': '1920px'
      },
      width: {
        golden_a: "61.8%",
        golden_b: "38.2%",
     
      },
      colors: {
        motionblack: {
          DEFAULT: '#1A2933',
          red: '#EC4F4B',
          orange: '#E68626',
          yellow: '#E3EB38',
          green: '#11863D',
          blue: '#1563B2',
          indigo: '#381A95',
          violet: '#66127F',    
        }
      }
    },
  },
  plugins: [],
}
