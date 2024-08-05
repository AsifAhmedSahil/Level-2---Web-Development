import { TAcademicSemester } from "../../../types/academicManagement.types";
import {  TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllSemester: builder.query({
            query: () =>{
                // const params = new URLSearchParams()
                // params.append(args[0].name,args[0].value)
                return {
                    url:"/academic-semesters/get-academic-semester",
                    method:"GET",
                    // params:params
                }
            },
            transformResponse : (response: TResponseRedux<TAcademicSemester[]>) =>{
                return {
                    data:response.data
                }
            }
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