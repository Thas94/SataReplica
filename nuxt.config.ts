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
    '@pinia/nuxt',
    '@sidebase/nuxt-auth'
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
    apiUrl: '',
    apiToken: '',
    authClientId: '',
    authClientSecret: ''
  },
  // auth: {
  //   isEnabled: true,
  //   disableServerSideAuth: false,
  //   originEnvKey: 'AUTH_ORIGIN',
  //   baseURL: 'http://localhost:3000/api/auth',
  //   provider: { 
  //     type: 'authjs',
  //   defaultProvider: 'github' },
  //   sessionRefresh: {
  //     enablePeriodically: true,
  //     enableOnWindowFocus: true,
  //   }
  // }
})