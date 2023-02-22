/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#49fc93",
        
"secondary": "#8d90ef",
        
"accent": "#d8b122",
        
"neutral": "#1F1F2E",
        
"base-100": "#E6E3E8",
        
"info": "#6CBCD0",
        
"success": "#15603B",
        
"warning": "#905109",
        
"error": "#F43464",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
