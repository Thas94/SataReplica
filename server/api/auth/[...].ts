import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
const config = useRuntimeConfig()
//console.log('config', config)
export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({ 
      // GitHub provider configuration
      clientId: config.authClientId,
      clientSecret: config.authClientSecret
    })
  ]
})