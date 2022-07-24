module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {

        'white': ' hsl(0, 0%, 100%)',
        'pink': '  hsl(322, 100%, 66%) ',
        'grayish-blue': ' hsl(208, 11%, 55%)',
        'cyan': {
          dark: 'hsl(192, 100%, 9%) ',
          light: ' hsl(193, 100%, 96%)',
        }
  
      },
      
    },
  },

  variants: {
    extend: {
      backgroundColor: [ " hover "],
      
    
    }

  },
  plugins: [],
}