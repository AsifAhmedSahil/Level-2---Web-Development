
import config from "../../app/config"
import { Student } from "../student.model"
import { TStudent } from "../student/student.interface"
import {TUser } from "./user.interface"
// import { TUser } from "./user.interface"
import { User } from "./user.model"


const createStudentIntoDB = async (password:string , studentData: TStudent) =>{

    
    // const student = new User(studentData)
    // if(await student.isUserExist(studentData.id)){
    //     throw new Error("user already exists!")
    // }

    // if password not given then use default password
    const userData : Partial<TUser> = {}

    userData.password = password || config.default_pass as string;

    userData.role = "student"

    userData.id = '201001912'

    // create a user 
    const newUser = await User.create(userData)

    if(Object.keys(newUser).length){
        studentData.id = newUser.id;
        studentData.user = newUser._id

        const newStudent = await Student.create(studentData)
        return newStudent
    }

    
    
}

export const UserServices = {
    createStudentIntoDB
}