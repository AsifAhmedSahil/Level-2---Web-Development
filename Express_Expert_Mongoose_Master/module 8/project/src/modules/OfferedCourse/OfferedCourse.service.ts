import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { semesterRegistrationModel } from "../semesterRegistration/semesterRegistration.model";
import { TOfferedCourse } from "./OfferedCourse.interface";
import { OfferedCourse } from "./OfferedCourse.model";
import { AcademicFaculty } from "../academicFaculty/academicFaculty.model";
import { AcademicDepartment } from "../academicDepartment/academicDepartment.model";
import { courseFaculty } from "../courses/courses.model";
import { Student } from "../student.model";



const createOfferedCourseIntoDB = async(payload:TOfferedCourse) =>{
    const {semesterRegistration,academicFaculty,academicDepartment,course,section
        // faculty
    }  =payload

    // check is the semester registration id is exist or not
    const isSemesterRegistrationExists = await semesterRegistrationModel.findById(semesterRegistration)

    if(!isSemesterRegistrationExists){
        throw new AppError(httpStatus.NOT_FOUND,"Registered semester not found!")
    }

    const academicSemester = isSemesterRegistrationExists.academicSemester

    // check is the academic faculty id is exist or not
    const isacademicFacultyExists = await AcademicFaculty.findById(academicFaculty)

    if(!isacademicFacultyExists){
        throw new AppError(httpStatus.NOT_FOUND,"Academic Faculty not found!")
    }

    // check is the academic department id is exist or not
    const isacademicDepartmentExists = await AcademicDepartment.findById(academicDepartment)

    if(!isacademicDepartmentExists){
        throw new AppError(httpStatus.NOT_FOUND,"Academic Department not found!")
    }
    // check is the academic course id is exist or not
    const isCourseExists = await courseFaculty.findById(course)

    if(!isCourseExists){
        throw new AppError(httpStatus.NOT_FOUND,"Course not found!")
    }

    // ****************** TODO : faculty create *****************
    // check is the academic faculty id is exist or not
    // const isFacultyExists = await Faculty.findById(course)

    // if(!isFacultyExists){
    //     throw new AppError(httpStatus.NOT_FOUND,"faculty not found!")
    // }


    // check is department belong to the faculty
    const isDepartmentBelongToTheFaculty = await AcademicDepartment.findOne({
        _id: academicDepartment,
        academicFaculty
    })
   
    if(!isDepartmentBelongToTheFaculty){
        throw new AppError(httpStatus.BAD_REQUEST,`this ${isacademicDepartmentExists.name} is not belong to this ${isacademicFacultyExists.name}`)
    }

    // check offered course created in the same section or not
    const isOfferedCourseExistWithSameRegisteredSemesterWithSameSection = await OfferedCourse.findOne({
        semesterRegistration,
        course,
        section
    })

    if(isOfferedCourseExistWithSameRegisteredSemesterWithSameSection){
        throw new AppError(httpStatus.BAD_REQUEST,"Offer course with same section already exists!")

    }

    const result = await OfferedCourse.create({...payload,academicSemester})
    return result

}
const getOfferedCourse = async() =>{
    const result = await OfferedCourse.find()
    return result

}

const getSingleOfferedCourse = async(id:string) =>{
    const result = await OfferedCourse.findById(id)
    return result

}
const getMyOfferedCourse = async(userId:string) =>{

    // find student
    const student = await Student.findOne({id:userId})
    if(!student){
        throw new AppError(httpStatus.NOT_FOUND,"student not found!")
    }

    // find the current semester
    const currentSemester = await semesterRegistrationModel.findOne({status: 'ONGOING'})

    // const result = await OfferedCourse.findById(id)
    return currentSemester

}


export const offeredCourseServices = {
    createOfferedCourseIntoDB,
    getOfferedCourse,
    getSingleOfferedCourse,
    getMyOfferedCourse
}