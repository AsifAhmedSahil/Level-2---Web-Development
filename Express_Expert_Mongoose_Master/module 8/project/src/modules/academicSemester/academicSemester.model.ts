import { Schema, model } from "mongoose";


import { TAcademicSemester, TAcademicSemesterCode, TAcademicSemesterName, Tmonth } from "./academicSemester.interface";

const Months:Tmonth[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const AcademicSemesterName:TAcademicSemesterName[] = ["Summer", "Autumn", "Fall" ]
const AcademicSemesterCode:TAcademicSemesterCode[] = ["01", "02", "03" ]


const academicSemesterSchema = new Schema<TAcademicSemester>({
    name:{
        type: String,
        enum:AcademicSemesterName,
        required:true
    },
    code:{
        type: String,
        required:true,
        enum: AcademicSemesterCode
    },
    year:{
        type: Date,
        required:true
    },
    startMonth:{
        type: String,
        enum:Months
    },
    endMonth:{
        type: String,
        enum:Months
    },
    


},{timestamps:true})




export const AcademicSemester = model<TAcademicSemester>('AcademicSemester',academicSemesterSchema)