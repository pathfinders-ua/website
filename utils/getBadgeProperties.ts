export const sizes: Record<Size, string> = {
  base: 'px-2.5 text-xs',
  lg: 'px-3 text-sm',
}

export const getColors = (hover: boolean = false): Record<Color, string> => ({
  gray:    'bg-gray-100    dark:bg-gray-800/50    text-gray-800    dark:text-gray-300'    + (hover ? ' hover:bg-gray-200    dark:hover:bg-gray-700/50    hover:text-gray-900    dark:hover:text-gray-200' : ''),
  stone:   'bg-stone-100   dark:bg-stone-800/50   text-stone-800   dark:text-stone-300'   + (hover ? ' hover:bg-stone-200   dark:hover:bg-stone-700/50   hover:text-stone-900   dark:hover:text-stone-200' : ''),
  brown:   'bg-brown-50    dark:bg-brown-700/50   text-brown-800   dark:text-brown-100'   + (hover ? ' hover:bg-brown-100   dark:hover:bg-brown-600/50   hover:text-brown-900   dark:hover:text-brown-50' : ''),
  red:     'bg-red-100     dark:bg-red-900/50     text-red-800     dark:text-red-300'     + (hover ? ' hover:bg-red-200     dark:hover:bg-red-800/50     hover:text-red-900     dark:hover:text-red-200' : ''),
  orange:  'bg-orange-100  dark:bg-orange-900/50  text-orange-800  dark:text-orange-300'  + (hover ? ' hover:bg-orange-200  dark:hover:bg-orange-800/50  hover:text-orange-900  dark:hover:text-orange-200' : ''),
  amber:   'bg-amber-100   dark:bg-amber-900/50   text-amber-800   dark:text-amber-300'   + (hover ? ' hover:bg-amber-200   dark:hover:bg-amber-800/50   hover:text-amber-900   dark:hover:text-amber-200' : ''),
  yellow:  'bg-yellow-100  dark:bg-yellow-900/50  text-yellow-800  dark:text-yellow-300'  + (hover ? ' hover:bg-yellow-200  dark:hover:bg-yellow-800/50  hover:text-yellow-900  dark:hover:text-yellow-200' : ''),
  lime:    'bg-lime-100    dark:bg-lime-900/50    text-lime-800    dark:text-lime-300'    + (hover ? ' hover:bg-lime-200    dark:hover:bg-lime-800/50    hover:text-lime-900    dark:hover:text-lime-200' : ''),
  green:   'bg-green-100   dark:bg-green-900/50   text-green-800   dark:text-green-300'   + (hover ? ' hover:bg-green-200   dark:hover:bg-green-800/50   hover:text-green-900   dark:hover:text-green-200' : ''),
  teal:    'bg-teal-100    dark:bg-teal-900/50    text-teal-800    dark:text-teal-300'    + (hover ? ' hover:bg-teal-200    dark:hover:bg-teal-800/50    hover:text-teal-900    dark:hover:text-teal-200' : ''),
  cyan:    'bg-cyan-100    dark:bg-cyan-900/50    text-cyan-800    dark:text-cyan-300'    + (hover ? ' hover:bg-cyan-200    dark:hover:bg-cyan-800/50    hover:text-cyan-900    dark:hover:text-cyan-200' : ''),
  blue:    'bg-blue-100    dark:bg-blue-900/50    text-blue-800    dark:text-blue-300'    + (hover ? ' hover:bg-blue-200    dark:hover:bg-blue-800/50    hover:text-blue-900    dark:hover:text-blue-200' : ''),
  indigo:  'bg-indigo-100  dark:bg-indigo-900/50  text-indigo-800  dark:text-indigo-300'  + (hover ? ' hover:bg-indigo-200  dark:hover:bg-indigo-800/50  hover:text-indigo-900  dark:hover:text-indigo-200' : ''),
  purple:  'bg-purple-100  dark:bg-purple-900/50  text-purple-800  dark:text-purple-300'  + (hover ? ' hover:bg-purple-200  dark:hover:bg-purple-800/50  hover:text-purple-900  dark:hover:text-purple-200' : ''),
  fuchsia: 'bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-800 dark:text-fuchsia-300' + (hover ? ' hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800/50 hover:text-fuchsia-900 dark:hover:text-fuchsia-200' : ''),
  pink:    'bg-pink-100    dark:bg-pink-900/50    text-pink-800    dark:text-pink-300'    + (hover ? ' hover:bg-pink-200    dark:hover:bg-pink-800/50    hover:text-pink-900    dark:hover:text-pink-200' : ''),
})
