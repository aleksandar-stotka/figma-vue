/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
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
  },
  plugins: [],
}

