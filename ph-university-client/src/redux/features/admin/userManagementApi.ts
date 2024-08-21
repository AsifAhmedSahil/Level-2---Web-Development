/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParams, TResponseRedux } from "../../../types/global";
import { TStudent } from "../../../types/userManagement.types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllStudents: builder.query({
            query: (args) =>{
                console.log(args)
                const params = new URLSearchParams()
                if(args){
                    args.forEach((item: TQueryParams) =>{
                        params.append(item.name,item.value as string);
                    })
                }
                return {
                    url:"/students",
                    method:"GET",
                    params:params
                }
            },
            transformResponse : (response: TResponseRedux<TStudent[]>) =>{
                return {
                    data:response.data
                }
            }
        }),

        getSingleStudent: builder.query({
            query: (id) => {
              return {
                url: `/students/${id}`,
                method: "GET",
              };
            },
            transformResponse: (response: TResponseRedux<TStudent[]>) => {
              return {
                data: response.data,
              };
            },
          }),

        
        addStudent: builder.mutation({
            query: (data) =>({
                url:"/users/create-student",
                method:"POST",
                body:data
            })
        }),
        getAllFaculty: builder.query({
            query: (args) =>{
                console.log(args)
                const params = new URLSearchParams()
                if(args){
                    args.forEach((item: TQueryParams) =>{
                        params.append(item.name,item.value as string);
                    })
                }
                return {
                    url:"/faculty",
                    method:"GET",
                    params:params
                }
            },
            transformResponse : (response: TResponseRedux<any>) =>{
                return {
                    data:response.data
                }
            }
        }),
    })
})

export const {useAddStudentMutation , useGetAllStudentsQuery,useGetSingleStudentQuery,useGetAllFacultyQuery} = userManagementApi ;