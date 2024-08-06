import { TAcademicSemester } from "../../../types/academicManagement.types";
import {  TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllSemester: builder.query({
            query: (args) =>{
                console.log(args)
                const params = new URLSearchParams()
                if(args){
                    args.forEach((item) =>{
                        params.append(item.name,item.value);
                    })
                }
                return {
                    url:"/academic-semesters/get-academic-semester",
                    method:"GET",
                    params:params
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