import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllSemester: builder.query({
            query: () =>({
                url:"/academic-semesters/get-academic-semester",
                method:"GET"
            })
        }),
        addSemester: builder.mutation({
            query: (data) =>({
                url:"/academic-semesters/create-academic-semester",
                method:"POST",
                body:data
            })
        }),
    })
})

export const {useGetAllSemesterQuery,useAddSemesterMutation} = academicManagementApi