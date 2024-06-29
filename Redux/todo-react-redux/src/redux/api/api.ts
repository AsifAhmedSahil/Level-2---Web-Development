import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => {

                const params = new URLSearchParams()

                if(priority){
                    params.append("priority",priority)
                }

                return {
                    // query: () => ({
                        // url: `/tasks?priority=${priority}`,
                        url: `/tasks`,
                        method: 'GET',
                        params: params
                    }
            },
            providesTags: ['todo']
        }),
        addTodo: builder.mutation({
            // query: (data) => ({
            //     url: '/task',
            //     method: 'POST',
            //     body:data
            // })
            query: (data) => {
                console.log("inside api => ",data)
                return {
                    url: '/task',
                    method: 'POST',
                    body:data
                }
            },
            invalidatesTags: ['todo']
        }),
    })
})

export const {useGetTodosQuery , useAddTodoMutation} = baseApi