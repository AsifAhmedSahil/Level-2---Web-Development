import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "./academicManagement.types"

export type TStudent = {
    _id: string
    id: string
    user: string
    name: TName
    gender: string
    dateOfBirth: string
    email: string
    contact: string
    emergenceContactNo: string
    bloodGroup: string
    presentAddress: string
    permanentAddress: string
    guirdian: TGuirdian
    localGuirdian: TLocalGuirdian
    photoUrl: string
    academicSemester: TAcademicSemester
    academicDepartment: TAcademicDepartment
    academicFaculty: TAcademicFaculty
    isDeleted: boolean
  }
  
  export type TName = {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export type TGuirdian = {
    fatherName: string
    fatherOccupation: string
    fatherNo: string
    motherName: string
    motherNo: string
    motherOccupation: string
    _id: string
  }
  
  export type TLocalGuirdian = {
    name: string
    address: string
    contact: string
    _id: string
  }
  
