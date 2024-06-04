import { TCourse } from "./courses.interface"
import { Course } from "./courses.model"

const createCoursesIntoDB = async (payload : TCourse)=>{
    const result = await Course.create(payload)
    return result
}
const getAllCoursesFromDB = async ()=>{
    const result = await Course.find()
    return result
}
const getSingleCoursesFromDB = async (id:string)=>{
    const result = await Course.findById(id)
    return result
}
const deleteCoursesFromDB = async (id:string)=>{
    const result = await Course.findByIdAndUpdate(id,{isDeleted:true},{new:true})
    return result
}


export const CourseServices = {
    createCoursesIntoDB,
    getAllCoursesFromDB,
    getSingleCoursesFromDB,
    deleteCoursesFromDB


}