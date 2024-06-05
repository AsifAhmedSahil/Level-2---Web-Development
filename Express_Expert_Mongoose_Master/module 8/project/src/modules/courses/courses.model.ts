import { Schema, model } from "mongoose";
import { TCourse, TCourseFaculty, TPreReqsiteCourses } from "./courses.interface";


const prereqsiteCourses = new Schema<TPreReqsiteCourses>({
    course: {
        type:Schema.Types.ObjectId,
        ref:"Course"
    },
    isDeleted:{
        type:Boolean,
        default:false
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
    preReqsiteCourses : [prereqsiteCourses],
    isDeleted:{
        type:Boolean,
        default: false
    }
})

export const Course = model<TCourse>("Course",courseSchema)

const courseFacultySchema = new Schema<TCourseFaculty>({
    course:{
        type: Schema.Types.ObjectId,
        ref: "Course",
        unique: true
    },
    faculties: [{
        type: Schema.Types.ObjectId,
        ref: "Faculty",
    }]
})

export const courseFaculty = model<TCourseFaculty>("courseFaculty",courseFacultySchema)