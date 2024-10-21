/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
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
   flowbite.plugin(),
]
}

