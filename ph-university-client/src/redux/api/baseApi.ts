import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery(
    {baseUrl: 'http://localhost:3000/api/v1',
        credentials:'include',
        prepareHeaders: (headers, {getState}) =>{
            const token = (getState() as RootState).auth.token

            if(token){
                headers.set("authorization",`${token}`)
            }

            return headers
        }
    },
)

const baseQueryWithRefreshToken = async(args,api,extraOptions) =>{
    let result = await baseQuery(args,api,extraOptions)
    // console.log(result)
    if(result.error?.status === 401 ||result.error?.status === 500){
        console.log("sending refresh token")

        const res = await fetch("http://localhost:3000/api/v1/auth/refresh-token",{
            method: 'POST',
            credentials: 'include'
        })

        

        const data = await res.json()

        if(data?.data?.accessToken){

            
            const user = (api.getState() as RootState).auth.user
            console.log(data)
            api.dispatch(
                setUser({user,token:data.data.accessToken})
            )
            result = await baseQuery(args,api,extraOptions)
        } else{
            api.dispatch(logout())
        }
    }

    return result

}


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({
        

    })
})