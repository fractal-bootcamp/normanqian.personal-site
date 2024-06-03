import type { Config } from 'tailwindcss'
import daisyui from "daisyui"

const colors = require('tailwindcss/colors')


export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
  
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  

    extend: {},
  },
  plugins: [daisyui],
} satisfies Config