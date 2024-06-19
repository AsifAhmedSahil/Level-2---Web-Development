import catchAsync from "../../utils/catchAsync";
import { enrollCourseServices } from "./enrolledCourse.service";


const createEnrolledCourse = catchAsync(async(req,res) =>{
    const result = await enrollCourseServices.createEnrolledCourseIntoDB()

    res.status(200).json({
        success:true,
        message:'Course is enrolled Successfully',
        data:result
    })

})

export const enrolledCoursesController ={
    createEnrolledCourse
}