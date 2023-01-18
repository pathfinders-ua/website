import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = <Partial<Config>>{
  content: [
    'utils/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        display: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
