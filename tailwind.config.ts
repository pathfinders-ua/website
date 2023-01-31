import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = <Partial<Config>>{
  content: [
    'utils/**/*.ts',
    'content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        display: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brown: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
      },
      spacing: {
        '0.25': '0.0625rem',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        sizes: 'height, width',
        spacing: 'margin, padding',
        border: 'border-radius',
      },
      animation: {
        loader: 'spin 1s steps(8, end) infinite',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
