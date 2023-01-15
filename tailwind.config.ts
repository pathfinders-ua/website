import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = <Partial<Config>>{
   theme: {
      extend: {
         fontFamily: {
            sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
         },
      },
   },
}
