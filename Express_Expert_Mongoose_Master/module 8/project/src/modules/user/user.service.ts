
import mongoose from "mongoose"
import config from "../../app/config"

import { AcademicSemester } from "../academicSemester/academicSemester.model"
import { Student } from "../student.model"
import { TStudent } from "../student/student.interface"
import {TUser } from "./user.interface"
// import { TUser } from "./user.interface"
import { User } from "./user.model"
import { generateStudentId } from "./user.utils"
import AppError from "../../error/AppError"
import httpStatus from "http-status"


const createStudentIntoDB = async (password:string , payload: TStudent) =>{

    
    // const student = new User(studentData)
    // if(await student.isUserExist(studentData.id)){
    //     throw new Error("user already exists!")
    // }

    // if password not given then use default password
    const userData : Partial<TUser> = {}

    userData.password = password || config.default_pass as string;

    userData.role = "student"

    

    // find semester information
    const admissionSemester = await AcademicSemester.findById(payload.academicSemester)
    console.log(admissionSemester,"admission semester")

    const session = await mongoose.startSession()


    try {
        session.startTransaction()
        userData.id =await  generateStudentId(admissionSemester )
    
        // create a user (transaction - 1)
        const newUser = await User.create([userData],{session})
    
        if(!newUser.length){
            throw new AppError(httpStatus.BAD_REQUEST,"Failed to create user")
        }
            payload.id = newUser[0].id;
            payload.user = newUser[0]._id
    
            // create a student (transaction - 2)
            const newStudent = await Student.create([payload],{session})
            if(!newStudent.length){
                throw new AppError(httpStatus.BAD_REQUEST,"Failed to create user")
            }

            await session.commitTransaction()
            await session.endSession()

            return newStudent
        
    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error("Failed to create user!")
    }

    
    
}

export const UserServices = {
    createStudentIntoDB
}