import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        // getAllStudents: builder.query({
        //     query: (args) =>{
        //         console.log(args)
        //         const params = new URLSearchParams()
        //         if(args){
        //             args.forEach((item: TQueryParams) =>{
        //                 params.append(item.name,item.value as string);
        //             })
        //         }
        //         return {
        //             url:"/students",
        //             method:"GET",
        //             params:params
        //         }
        //     },
        //     transformResponse : (response: TResponseRedux<TStudent[]>) =>{
        //         return {
        //             data:response.data
        //         }
        //     }
        // }),

        
        addRegisteredSemester: builder.mutation({
            query: (data) =>({
                url:"/semester-registration/create-semester-registration",
                method:"POST",
                body:data
            })
        }),
    })
})

export const {useAddRegisteredSemesterMutation} = courseManagementApi