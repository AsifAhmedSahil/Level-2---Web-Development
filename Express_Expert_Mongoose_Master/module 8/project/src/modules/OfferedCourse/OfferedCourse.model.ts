import mongoose, { Schema } from "mongoose";
import { TOfferedCourse } from "./OfferedCourse.interface";

import { Days } from "./OfferedCourse.contants";


const offeredCourseSchema = new mongoose.Schema<
TOfferedCourse>({
    semesterRegistration:{
        type: Schema.Types.ObjectId,
        ref:"SemesterRegistration",
        required:true
    },
    academicSemester:{
        type: Schema.Types.ObjectId,
        ref:"AcademicSemester",
        required:true
    },
    academicFaculty:{
        type: Schema.Types.ObjectId,
        ref:"AcademicFaculty",
        required:true
    },
    academicDepartment:{
        type: Schema.Types.ObjectId,
        ref:"AcademicDepartment",
        required:true
    },
    course:{
        type: Schema.Types.ObjectId,
        ref:"courseFaculty",
        required:true
    },
    // faculty:{
    //     type: Schema.Types.ObjectId,
    //     ref:"Faculty",
    //     required:true
    // },
    maxCapacity:{
        type: Number,
        required:true
    },
    section:{
        type: Number,
        required:true
    },
    days:{
        type: String,
        required:true,
        enum:Days
    },
    startTime:{
        type: String,
        required:true
    },
    endTime:{
        type: String,
        required:true
    },


},{timestamps:true})

export const OfferedCourse = mongoose.model<TOfferedCourse>("OfferedCourse",offeredCourseSchema)

