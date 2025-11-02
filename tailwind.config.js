/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C0412',        // Deep burgundy (main text)
        secondary: '#fffbe1ff',      // Warm cream (background)
        accent: '#FFE500',         // Bright yellow (highlights)
        'dark-bg': '#100A0D',      // Dark mode background
        'dark-text': '#BAB5B8',    // Dark mode secondary text
        'burgundy': {
          50: '#FFF5F7',
          100: '#FFE5EB',
          200: '#FFCCD9',
          300: '#FF99B3',
          400: '#FF6688',
          500: '#FF3366',
          600: '#E6004D',
          700: '#B30039',
          800: '#800029',
          900: '#2C0412',
        },
        'canary': {
          50: '#FFFEF5',
          100: '#FFFDEB',
          200: '#FFF9C2',
          300: '#FFE500',
          400: '#FFD700',
          500: '#FFC700',
        },
      },
      fontFamily: {
        sans: ['Gabarito', 'Inter', 'system-ui', 'sans-serif'],
        tight: ['Inter Tight', 'Inter', 'sans-serif'],
        handwriting: ['Architects Daughter', 'cursive'],
        script: ['Marck Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}