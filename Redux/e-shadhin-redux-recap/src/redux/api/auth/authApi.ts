import { baseApi } from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        signUp: builder.mutation({
            query:(userInfo) => ({
                url:"/auth/register",
                method:'POST',
                body:userInfo
            })
        }),
        login: builder.mutation({
            query:(userInfo) =>({
                url:'/auth/login',
                method:"POST",
                body:userInfo
            })
        })
    })
})

export const {useSignUpMutation,useLoginMutation} = authApi