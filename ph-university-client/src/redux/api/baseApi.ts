import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery(
    { 
        baseUrl: 'http://localhost:3000/api/v1' ,
        credentials: 'include',
        prepareHeaders: (headers,{getState}) =>{
            const token = (getState() as RootState).auth.token
            if(token){
                headers.set('authorization',`${token}`)
            }

            return headers
        }
    },
    //! here credentials include means access cookie info from cookies**
 )

 const baseQueryWithRefreshToken = async (args,api,extraOptions) =>{
    const result = await baseQuery(args,api,extraOptions)
    console.log(result)
 }

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () =>({ })
})