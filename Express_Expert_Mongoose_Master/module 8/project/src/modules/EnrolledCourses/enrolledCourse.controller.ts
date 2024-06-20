import catchAsync from "../../utils/catchAsync";
import { enrollCourseServices } from "./enrolledCourse.service";


const createEnrolledCourse = catchAsync(async(req,res) =>{
    const userId = req.user.userId
    const result = await enrollCourseServices.createEnrolledCourseIntoDB(userId,req.body)

    res.status(200).json({
        success:true,
        message:'Course is enrolled Successfully',
        data:result
    })

})
const updateEnrolledCourse = catchAsync(async(req,res) =>{
    const facultId = req.user.id
    const result = await enrollCourseServices.updateEnrolledCourse(facultId,req.body)

    res.status(200).json({
        success:true,
        message:'Course is enrolled Successfully',
        data:result
    })

})

export const enrolledCoursesController ={
    createEnrolledCourse,
    updateEnrolledCourse
}