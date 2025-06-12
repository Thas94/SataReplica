export default defineNuxtRouteMiddleware((to) => {
    const {status, signIn} = useAuth()
    const router = useRouter()
    if (status.value !== 'authenticated') {
        //return
        router.push('/auth/login')
      }
      //console.log('path', to.path)
      //return signIn(undefined, { callbackUrl: to.path }) as ReturnType<typeof navigateTo>

    // if(status.value === "authenticated"){
    //     return navigateTo("/")
    // }
    // else{
    //     return navigateTo("/login")
    // }
    // const user = useSupabaseUser()
    // if(!user.value){
    //     return navigateTo("/login")
    // }
})