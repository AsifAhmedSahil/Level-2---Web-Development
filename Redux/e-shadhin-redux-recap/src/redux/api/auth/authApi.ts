import { baseApi } from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        signUp: builder.mutation({
            query:(userInfo) => ({
                url:"/auth/register",
                method:'POST',
                body:userInfo
            })
        })
    })
})

export const {useSignUpMutation} = authApi