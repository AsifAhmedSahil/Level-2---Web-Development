import { TUser } from "./user.interface"
import { User } from "./user.model"


const createStudentIntoDB = async (studentData: TUser) =>{

    
    const student = new User(studentData)
    // if(await student.isUserExist(studentData.id)){
    //     throw new Error("user already exists!")
    // }
    const result = student.save()
    return result
}

export const UserServices = {
    createStudentIntoDB
}