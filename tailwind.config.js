/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [],  
  theme: {
    extend: {
      colors: {
        heroBg:'#fafaf9',
        linkColors: '#ffffff', // header navbar colors
        activeBgColors: '#9DD2B8', // header navbar colors
        Rectbg: '#FEFAFA' ,
        footerPara: '#F5F5F5',
        aboutBg: "#FFE17A",
       
        
        
       
      },
      backgroundImage: {
        'hero-pattern': "url('~/assets/images/contact.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    
      
      height: {
        "919" :"919px",
        "226" : "226px",
        '1512': '1512px',
        '469': '469px',

      },
    

    
    },
    screens: {
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
    }
  },
  plugins: [],
}

