export default defineEventHandler(async (event) => {
    const token = await $fetch("https://localhost:44311/Authentication/GetToken", {
        method: 'POST',
        body: {
            "userName": "sv",
            "password": "vfvf"
        }
    })
    return token;
});