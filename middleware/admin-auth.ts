export default defineNuxtRouteMiddleware(async (to) => {
    const {status} = useAuth()
    const router = useRouter()

    if (status.value == 'authenticated') {
        const session = <any>(await $fetch('/api/userSession'))
        switch (session.user?.role){
            case "Admin":
                router.push('/adminOnly')
            break;
            case "User":
                router.push('/userOnly')
            break;
        }
      }
      else{
        router.push('auth/login')
      }
})