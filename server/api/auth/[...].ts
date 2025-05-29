import { NuxtAuthHandler } from '#auth'
import  CredentialsProvider from 'next-auth/providers/credentials'

const config = useRuntimeConfig()
//console.log('config', config)
export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({ 
      name: 'Credentials',
      async authorize(credentials: any){
        const res = await fetch(`${config.apiUrl}/Authentication/GetToken`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json() 
        console.log(user)      
        return user
      }
    }),
  ]
})