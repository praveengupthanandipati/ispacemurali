/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
   
        'bg-image-custom': "url('https://ispace.com/wp-content/themes/im/images/Blok_bg1.jpg')",
    
      }
    },
  },
  plugins: [],
}
