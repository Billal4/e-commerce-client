/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'your-image': "url('https://i.ibb.co/vsZJx2w/online-fashion-shopping-collage.jpg')",
        'your-image1': "url('https://i.ibb.co/B2XyzXJ/model-being-covered-by-shopping-bags-copy-space.jpg')",
        'your-image2': "url('https://i.ibb.co/mD2D5Nv/young-woman-yellow-leather-jacket-copy-space.jpg')",
        'your-image3': "url('https://i.ibb.co/gzW5Wv6/pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look.jpg')",
        // 'your-image4': "url('https://i.ibb.co/vsZJx2w/online-fashion-shopping-collage.jpg')",
      }),
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'custom': ['Arial', 'sans-serif'],
     
    }
  },
  plugins: [require("daisyui")],
}

