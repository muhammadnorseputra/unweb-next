module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,tsx}", "./components/**/*.{js,ts,tsx}", "./pages/**/*.{js,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      dropShadow: {        
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',      
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      lora: ["'Lora', sans-serif", 'sans-serif'],
      asap: ["'Asap', sans-serif", 'serif'],
    },
  },
  plugins: [
  	require('tailwindcss-textshadow'),
  	require('tailwind-scrollbar'),
    require('autoprefixer')
  ]
}
