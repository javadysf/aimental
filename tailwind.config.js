/** @type {import('tailwindcss').Config} */

export default {
  content:  ["./src/**/*.{html,js,jsx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx',
  ],
  extend: {
      
    animation: {
      fade: 'fadeIn .5s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
  theme: {
    fontFamily: {
     'poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      'blue-50':'#F0F6FE',
      "blue-300":"#9cc4f4",
      'blue': '#2D55CC',
      'white': '#ffffff',
      'black': '#000000',
      'neutral':'#E7E7E7',
      'deepBlue':'#273D81',
      'neutral-100':'#F6F6F6',
      'neutral-300':'#D1D1D1',
      'neutral-500':'#6D6D6D',
      'neutral-800':'#262626',
      "zinc-50":"#FAFAFA",
      "zinc-400":"#b0b0b0",
      'zinc-600':'#5D5D5D',
      'zinc-700':'#454545',
      'zinc-800':"#323232",
      'blue-200':'#C4DBF9'
    },
    boxShadow: {
      'down': '0px 0px 16px 0px rgba(0, 0, 0, 0.15)',
      'right-bottom':'0 16px 16px 0 rgba(0, 0, 0, 0.1)',
    }
  },
  plugins: [],
  darkMode:"class",
}

