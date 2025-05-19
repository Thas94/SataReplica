// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@pinia/nuxt'
  ],
  css: ["@/assets/styles/tailwind.css"],
  primevue: {
      options: {
          theme: 'none'
      }
  },
  postcss: {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Montserrat: true
    }
  },
  runtimeConfig: {
    apiUrl: ''
  }
})