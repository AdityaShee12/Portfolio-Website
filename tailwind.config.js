/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        'aurora-purple': '#7B2CBF',
        'aurora-teal': '#00F5D4',
        'aurora-orange': '#FF9E00',
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      animation: {
        'aurora-pan': 'aurora-pan 15s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'aurora-pan': {
          '0%': { transform: 'scale(1) translate(0px, 0px)' },
          '33%': { transform: 'scale(1.1) translate(30px, -50px)' },
          '66%': { transform: 'scale(0.9) translate(-20px, 20px)' },
          '100%': { transform: 'scale(1.05) translate(40px, 40px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
