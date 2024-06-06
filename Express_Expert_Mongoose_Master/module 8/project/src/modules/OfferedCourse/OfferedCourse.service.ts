import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { semesterRegistrationModel } from "../semesterRegistration/semesterRegistration.model";
import { TOfferedCourse } from "./OfferedCourse.interface";
import { OfferedCourse } from "./OfferedCourse.model";
import { AcademicFaculty } from "../academicFaculty/academicFaculty.model";
import { AcademicDepartment } from "../academicDepartment/academicDepartment.model";
import { courseFaculty } from "../courses/courses.model";


const createOfferedCourseIntoDB = async(payload:TOfferedCourse) =>{
    const {semesterRegistration,academicFaculty,academicDepartment,course,
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

    const result = await OfferedCourse.create({...payload,academicSemester})
    return result

}


export const offeredCourseServices = {
    createOfferedCourseIntoDB
}