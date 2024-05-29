

import mongoose from "mongoose";
import { Student } from "../student.model";
import AppError from "../../error/AppError";
import httpStatus from "http-status";
import { User } from "../user/user.model";
import { TStudent } from "./student.interface";




const getAllStudentsFromDB = async () =>{
    const result = await Student.find().populate("academicSemester").populate({
        path: "academicDepartment",
        populate: {
            path:"academicFaculty"
        }
    })
    return result
}

const getSingleStudentFromDB = async (id:string) =>{
    const result = await Student.findOne({id}).populate("academicSemester").populate({
        path: "academicDepartment",
        populate: {
            path:"academicFaculty"
        }
    })
    return result
}
const updateStudentFromDB = async (id:string,payload: Partial<TStudent>) =>{
    const result = await Student.findOneAndUpdate({id},payload)
    return result
}
const deleteStudentFromDB = async (id:string) =>{
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        // transaction - 1 ( delete student ) 
        const deleteStudent = await Student.findOneAndUpdate(
            {id},
            {isDeleted:true},
            {new:true , session}
        )
        // check point
        if(!deleteStudent){
            throw new AppError(httpStatus.BAD_REQUEST,"Failed To Delete Student")
        }

        const deleteUser = await User.findOneAndUpdate(
            {id},
            {isDeleted:true},
            {new:true , session}
        )
        // check point
        if(!deleteUser){
            throw new AppError(httpStatus.BAD_REQUEST,"Failed To Delete User")
        }

        await session.commitTransaction()
        await session.endSession()

        return deleteStudent
    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error("Failed to delete user!")
    }
}



export const studentServices = {
    
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    updateStudentFromDB,
    deleteStudentFromDB
}