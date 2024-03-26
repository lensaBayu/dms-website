/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue'],
      },

      fontSize: {
        // 'pas' : '2'
        '7.5xl': '78px',
        '10xl': '200px', // Add a custom font size
      },

      margin: {
        '15': '60px',    // Example custom margin size
        // Add more custom margin sizes as needed
      },
    },
  },
  plugins: [require("daisyui")],

}

