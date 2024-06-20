import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { OfferedCourse } from "../OfferedCourse/OfferedCourse.model";
import { TEnrolledCourses } from "./enrolledCourse.interface"
import EnrolledCourse from "./enrolledCourse.model";
import { Student } from "../student.model";

const createEnrolledCourseIntoDB = async(userId:string,payload:TEnrolledCourses) =>{

    const {offeredCourse} = payload;

    const isOfferedCourseExists = await OfferedCourse.findById(offeredCourse);
    if(!isOfferedCourseExists){
        throw new AppError(httpStatus.NOT_FOUND,"Offered Course not found!")
    }

    if(isOfferedCourseExists.maxCapacity <= 0){
        throw new AppError(httpStatus.BAD_REQUEST,"Room is full!")
    }


    const student = await Student.findOne({id:userId}).select("_id")

    if(!student){
        throw new AppError(httpStatus.NOT_FOUND,"Student not found!")
    }

    const isStudentAlreadyEnrolled = await EnrolledCourse.findOne({
        semesterRegistration: isOfferedCourseExists?.semesterRegistration,
        offeredCourse,
        student: student?._id
        
    })

    if(isStudentAlreadyEnrolled){
        throw new AppError(httpStatus.CONFLICT,"Student is already enrolled!")
    }




}

export const enrollCourseServices = {
    createEnrolledCourseIntoDB
}