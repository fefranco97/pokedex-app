/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        pokemonTypeTag: {
          fire: '#FF6464',
          bug: '#C9FF84',
          water: '#9FF3FF',
          flying:
            'linear-gradient(180deg, rgba(203,233,255,1) 0%, rgba(146,206,249,1) 50%, rgba(34,153,238,1) 100%)',
          poison: '#D89CFD',
          normal: '#CBCBCB',
          rock: '#CFC06F',
          ground: '#FFBF72',
          fighting: '#FF699F',
          ghost: '#B592FF',
          psychic: '#FF5E60',
          ice: '#AEFFF4',
          dragon: '#87C5FF',
          dark: '#8F8F8F',
          fairy: '#FFA2E3',
          electric: '#FFFA86',
          steel: '#A4FFE9',
          grass: '#80E177',
        },
        pokemonTypeBackGround: {
          fire: '#EB6C6C',
          bug: '#91AC22',
          water: '#009ACB',
          flying:
            'linear-gradient(180deg, rgba(203,233,255,1) 0%, rgba(146,206,249,1) 50%, rgba(34,153,238,1) 100%)',
          poison: '#7E00CB',
          normal: '#B6B6B6',
          rock: '#857D57',
          ground: '#A77437',
          fighting: '#BA114E',
          ghost: '#6B2BF1',
          psychic: '#C4484A',
          ice: '#3A9D90',
          dragon: '#1268B8',
          dark: '#373737',
          fairy: '#C01A8D',
          electric: '#B7B117',
          steel: '#448F85',
          grass: '#1EBA11',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
