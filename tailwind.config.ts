import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7E60BF',
          light: '#9A82D0',
          dark: '#624A99',
        },
        secondary: {
          DEFAULT: '#E4B1F0',
          light: '#F0CFF6',
          dark: '#D08BE0',
        },
        accent: {
          DEFAULT: '#FFF1FF',
          light: '#FFFFFF',
          dark: '#FFD1FF',
        },
        complementary: {
          DEFAULT: '#60BF7E',
          light: '#82D09A',
          dark: '#4A9962',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F0FF',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
      },
      gradientColorStops: {
        'gradient-1-start': '#7E60BF',
        'gradient-1-end': '#E4B1F0',
        'gradient-2-start': '#E4B1F0',
        'gradient-2-end': '#FFF1FF',
        'gradient-3-start': '#7E60BF',
        'gradient-3-end': '#60BF7E',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
}

export default config


