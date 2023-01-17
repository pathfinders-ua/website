import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = <Partial<Config>>{
   theme: {
      extend: {
         fontFamily: {
            sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            display: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
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
