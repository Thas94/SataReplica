export default defineNuxtRouteMiddleware(() => {
    const {status} = useAuth()
    if(status.value === "authenticated"){
        return navigateTo("/")
    }
    else{
        return navigateTo("/login")
    }
    // const user = useSupabaseUser()
    // if(!user.value){
    //     return navigateTo("/login")
    // }
})