import { Schema, model } from "mongoose";
import { TCourse, TPreReqsiteCourses } from "./courses.interface";


const prereqsiteCourses = new Schema<TPreReqsiteCourses>({
    course: {
        type:Schema.Types.ObjectId,
        ref:"Course"
    },
    isDeleted:{
        type:Boolean,
        default:true
    }
})

const courseSchema = new Schema<TCourse>({
    title:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    prefix:{
        type:String,
        
        trim:true,
        required:true
    },
    code:{
        type:Number,
       
        required:true
    },
    credits:{
        type:Number,
       
        required:true
    },
    preReqsiteCourses : [prereqsiteCourses]
})

export const Course = model<TCourse>("Course",courseSchema)