/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'midblue' : '#146eb4',
        'deepblue': '#0e4f82',
        'darkblue': '#1e2640',
        'midblack' : "#1A181E"
      },
      fontFamily: {
        inter : ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [
    import('flowbite/plugin')
]
}

