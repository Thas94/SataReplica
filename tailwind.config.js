
export default
{
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue", "./error.vue"],
    theme: {
        extend: {
          colors: {

          },
          fontFamily: {
            Montserrat: "Montserrat, sans-serif",
          },
          container: {
            center: true,
            padding: "2rem",
          },
        },
      },
    plugins: [require('tailwindcss-primeui')]
}