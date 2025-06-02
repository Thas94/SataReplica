import { NuxtAuthHandler } from '#auth'
import  CredentialsProvider from 'next-auth/providers/credentials'

const config = useRuntimeConfig()
//console.log('config', config)
export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  callbacks: {
    jwt({token, user}){
      if(user){
        token.sessionToken = user.token
        token.email = user.email
        token.fullname = user.fullName
        token.tokenExpiryDate = 30 //same in the API
      }
      return token
    },
    async session({session, token}){
      // Fetch data OR add previous data from the JWT callback.
      const additionalUserData = <any>token
      return{
        ...session,
        user:{
          fullname: additionalUserData.fullname,
          email: additionalUserData.email,
          token: additionalUserData.sessionToken,
          tokenExpiryDate: 30
        }
      }
    }
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
        return user
      }
    }),
  ]
})