/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#2F3185',
          dark: '#22256a',
          light: '#3d42b0',
        },
        amber: {
          DEFAULT: '#FFB800',
          light: '#FFD166',
          dark: '#e0a200',
        },
        teal: {
          DEFAULT: '#1CBDB3',
          light: '#3dd6cc',
          dark: '#13a099',
        },
        ink: '#1a1b3a',
        muted: '#6b6d8e',
        faint: '#9b9dbf',
        offwhite: '#F7F8FF',
        hairline: '#e2e4f0',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(47,49,133,0.08)',
        card: '0 8px 32px rgba(47,49,133,0.12)',
        lifted: '0 20px 60px rgba(47,49,133,0.18)',
      },
    },
  },
  plugins: [],
}
