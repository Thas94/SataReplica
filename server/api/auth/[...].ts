import { NuxtAuthHandler } from '#auth'
import  CredentialsProvider from 'next-auth/providers/credentials'
import { navigateTo } from 'nuxt/app'

const config = useRuntimeConfig()
//console.log('config', config)
export default NuxtAuthHandler({
  pages: {
    signIn: 'auth/login',
  },
  callbacks: {
    jwt({token, user}){
      if(user){
        token = {
          ... token,
          ... user
        }
      }
      return token
    },
    async session({session, token}){
      // Fetch data OR add previous data from the JWT callback.
      session.user = {
        ... token,
        ... session.user
      }
      return session
    }
  },
  providers: [
    // @ts-expect-error
    CredentialsProvider.default({ 
      name: 'Credentials',
      async authorize(credentials: any){
        const res = await fetch(`${config.apiUrl}/Authentication/GetToken`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json() 
        return user
      }
    }),
  ]
})