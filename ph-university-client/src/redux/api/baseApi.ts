import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery: fetchBaseQuery(
        { 
            baseUrl: 'http://localhost:3000/api/v1' ,
            credentials: 'include'
        },
        //! here credentials include means access cookie info from cookies**
        
     ),
    
    endpoints: () =>({ })
})