import {
  TAcademicDepartment,
  TAcademicSemester,
} from "../../../types/academicManagement.types";
import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-semesters/get-academic-semester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    
    addSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicDepartment: builder.query({
      query: () => {
        return {
          url: "/academic-departments/get-academic-department",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const {
  useGetAllSemesterQuery,
  useAddSemesterMutation,
  useGetAcademicDepartmentQuery,
 
} = academicManagementApi;
