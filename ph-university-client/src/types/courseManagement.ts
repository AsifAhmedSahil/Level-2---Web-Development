import { TAcademicSemester } from "./academicManagement.types"

export const statusOption = [
    {value:'UPCOMING',label:"Upcoming"},
    {value:'ONGOING',label:"Ongoing"},
    {value:'END',label:"End"},
]

export type TSemester = {
    _id: string
    academicSemester: TAcademicSemester
    status: string
    startDate: string
    endDate: string
    minCredit: number
    maxCredit: number
    createdAt: string
    updatedAt: string
  }