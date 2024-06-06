import mongoose, { Schema } from "mongoose";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { semesterRegistrationStatus } from "./semesterRegistration.constants";

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>({
    academicSemester:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:"AcademicSemester"
    },
    status:{
        type:String,
        enum:semesterRegistrationStatus,
        default:'UPCOMING'
    },
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    minCredit: {
        type:Number,
        required:true
    },
    maxCredit: {
        type:Number,
        required:true
    },


},{timestamps:true})

export const semesterRegistration = mongoose.model("semesterRegistration",semesterRegistrationSchema)