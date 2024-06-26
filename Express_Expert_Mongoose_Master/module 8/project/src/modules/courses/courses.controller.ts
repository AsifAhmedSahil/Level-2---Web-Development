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
    
    const { courseId } = req.params;
    
    const result = await CourseServices.getSingleCoursesFromDB(courseId)


    res.status(200).send({
        success:true,
        message: "Course Retrive Successfully",
        data:result
    })
})
const deleteCourseController = catchAsync(async(req,res) =>{
    const {courseId} = req.params
    const result = await CourseServices.deleteCoursesFromDB(courseId)


    res.status(200).send({
        success:true,
        message: "Course deleted Successfully",
        data:result
    })
})
const updateCourseController = catchAsync(async(req,res) =>{
    const {courseId} = req.params
    const result = await CourseServices.updateCoursesFromDB(courseId,req.body)


    res.status(200).send({
        success:true,
        message: "Course updated Successfully",
        data:result
    })
})

const assignFaculty = catchAsync(async(req,res) =>{
    const {courseId} = req.params
    const {faculties} = req.body
    const result = await CourseServices.assignFacultyServiceIntoDB(courseId,faculties)


    res.status(200).send({
        success:true,
        message: "faculty Assign Successfully",
        data:result
    })
})


const getFacultyFromDB = catchAsync(async(req,res) =>{
    const {courseId} = req.params
    
    const result = await CourseServices.getFacultyFromDB(courseId)


    res.status(200).send({
        success:true,
        message: "faculty retrived Successfully",
        data:result
    })
})

// TODO:update course baki****


export const courseControllers = {
    createCourseController,
    getSingleCourseController,
    getAllCourseController,
    deleteCourseController,
    updateCourseController,
    assignFaculty,
    getFacultyFromDB

}