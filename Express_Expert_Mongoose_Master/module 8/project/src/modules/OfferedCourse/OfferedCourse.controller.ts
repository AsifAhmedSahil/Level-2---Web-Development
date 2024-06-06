import catchAsync from "../../utils/catchAsync";
import { offeredCourseServices } from "./OfferedCourse.service";


const createOfferedCourse = catchAsync(async(req,res) =>{
    const result = await offeredCourseServices.createOfferedCourseIntoDB(req.body)
    res.status(200).send({
        success:true,
        message: "Course Created Successfully",
        data:result
    })

})


export const offeredCourseControllers = {
    createOfferedCourse
}