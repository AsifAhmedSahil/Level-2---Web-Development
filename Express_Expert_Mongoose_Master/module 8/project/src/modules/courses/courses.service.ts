import QueryBuilders from "../../builders/QueryBuilders"
import { courseSearchableFields } from "./courses.contants"
import { TCourse } from "./courses.interface"
import { Course } from "./courses.model"

const createCoursesIntoDB = async (payload : TCourse)=>{
    const result = await Course.create(payload)
    return result
}
// const getAllCoursesFromDB = async (query: Record<string,unknown>)=>{
//     const courseQuery = new QueryBuilders(Course.find(),query)
//     .search(courseSearchableFields)
//     .filter()
//     .sort()
//     .paginate()
//     .fields()
//     const result = await courseQuery.modelQuery
//     return result
// }


const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
    const courseQuery = new QueryBuilders(
      Course.find()
      .populate('preReqsiteCourses.course'),
      query,
    )
      .search(courseSearchableFields)
      .filter()
      .sort()
    //   .paginate()
      .fields();
  
    const result = await courseQuery.modelQuery;
    // console.log("from service",result)
    return result;
  };



const getSingleCoursesFromDB = async (id:string)=>{
 
    const result = await Course.findById(id).populate('preReqsiteCourses.course')
    
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