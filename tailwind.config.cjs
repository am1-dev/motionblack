/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,js.ts}'],
  theme: {
    screens: {

      'xs':'540px', 

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }     

    },
    extend: {
      fontFamily: {
        lato: ['lato', 'sans-serif'],
        metropolis: ['metropolis', 'sans-serif'],

      },
      screens: {
         '3xl': '1760px',
         '4xl': '1920px'
       },
      width: {
        golden_a: "61.8%",
        golden_b: "38.2%",       
      },

      maxWidth: {
        'init': "240px",
        '8xl' : "1440px",
        '9xl' : "1720px"
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
