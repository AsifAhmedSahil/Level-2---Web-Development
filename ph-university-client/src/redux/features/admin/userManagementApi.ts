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
        
        addStudent: builder.mutation({
            query: (data) =>({
                url:"/users/create-student",
                method:"POST",
                body:data
            })
        }),
    })
})

export const {useAddStudentMutation , useGetAllStudentsQuery} = userManagementApi ;