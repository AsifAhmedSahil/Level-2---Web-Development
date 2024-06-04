import catchAsync from "../../utils/catchAsync";
import { CourseServices } from "./courses.service";


const createCourseController = catchAsync(async(req,res) =>{
    const result = await CourseServices.createCoursesIntoDB(req.body)

    res.status(200).send({
        success:true,
        message: "Course Created Successfully",
        data:result
    })
})

const getAllCourseController = catchAsync(async(req,res) =>{
    const result = await CourseServices.getAllCoursesFromDB(req.query)
    console.log(result)

    res.status(200).send({
        success:true,
        message: "All Courses Retrive Successfully",
        data:result
    })
})
const getSingleCourseController = catchAsync(async(req,res) =>{
    const {id} = req.params
    const result = await CourseServices.getSingleCoursesFromDB(id)


    res.status(200).send({
        success:true,
        message: "Course Retrive Successfully",
        data:result
    })
})
const deleteCourseController = catchAsync(async(req,res) =>{
    const {id} = req.params
    const result = await CourseServices.deleteCoursesFromDB(id)


    res.status(200).send({
        success:true,
        message: "Course deleted Successfully",
        data:result
    })
})

// TODO:update course baki****


export const courseControllers = {
    createCourseController,
    getSingleCourseController,
    getAllCourseController,
    deleteCourseController

}