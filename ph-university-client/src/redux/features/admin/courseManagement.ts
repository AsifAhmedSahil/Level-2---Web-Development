/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSemester } from "../../../types/courseManagement";
import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllRegisteredSemester: builder.query({
            query: (args) =>{
                console.log(args)
                const params = new URLSearchParams()
                if(args){
                    args.forEach((item: TQueryParams) =>{
                        params.append(item.name,item.value as string);
                    })
                }
                return {
                    url:"/semester-registration",
                    method:"GET",
                    params:params
                }
                
            },
            providesTags:['semester'],
            transformResponse : (response: TResponseRedux<TSemester[]>) =>{
                return {
                    data:response.data
                }
            }
        }),
        getAllCourses: builder.query({
            query: (args) =>{
                
                const params = new URLSearchParams()
                if(args){
                    args.forEach((item: TQueryParams) =>{
                        params.append(item.name,item.value as string);
                    })
                }
                return {
                    url:"/courses",
                    method:"GET",
                    params:params
                }
                
            },
            providesTags:['courses'],
            transformResponse : (response: TResponseRedux<any>) =>{
                return {
                    data:response.data
                }
            }
        }),

        
        addRegisteredSemester: builder.mutation({
            query: (data) =>({
                url:"/semester-registration/create-semester-registration",
                method:"POST",
                body:data
            }),
            invalidatesTags:['semester']
        }),
        updateRegisteredSemester: builder.mutation({
            query: (args) =>({
                url:`/semester-registration/${args.id}`,
                method:"PATCH",
                body:args.data
            }),
            invalidatesTags:['semester']
        }),
        addCourse: builder.mutation({
            query: (data) =>({
                url:"/courses/create-course",
                method:"POST",
                body:data
            }),
            invalidatesTags:['courses']
        }),
        addFaculties: builder.mutation({
            query: (args) =>({
                url:`courses/${args.courseId}/assign-faculty`,
                method:"PUT",
                body:args.data
            }),
            invalidatesTags:['courses']
        }),
    })
})

export const {useAddRegisteredSemesterMutation,useGetAllRegisteredSemesterQuery,useUpdateRegisteredSemesterMutation,useGetAllCoursesQuery,useAddCourseMutation,useAddFacultiesMutation} = courseManagementApi