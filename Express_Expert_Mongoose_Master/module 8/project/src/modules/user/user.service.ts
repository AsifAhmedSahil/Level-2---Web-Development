
import config from "../../app/config"

import { AcademicSemester } from "../academicSemester/academicSemester.model"
import { Student } from "../student.model"
import { TStudent } from "../student/student.interface"
import {TUser } from "./user.interface"
// import { TUser } from "./user.interface"
import { User } from "./user.model"
import { generateStudentId } from "./user.utils"


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


    userData.id = generateStudentId(admissionSemester)

    // create a user 
    const newUser = await User.create(userData)

    if(Object.keys(newUser).length){
        payload.id = newUser.id;
        payload.user = newUser._id

        const newStudent = await Student.create(payload)
        return newStudent
    }

    
    
}

export const UserServices = {
    createStudentIntoDB
}