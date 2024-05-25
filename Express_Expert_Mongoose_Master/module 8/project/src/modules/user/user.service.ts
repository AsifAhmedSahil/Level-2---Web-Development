import { object } from "joi"
import config from "../../app/config"
import { TStudent } from "../student/student.interface"
import { NewUser } from "./user.interface"
// import { TUser } from "./user.interface"
import { User } from "./user.model"


const createStudentIntoDB = async (password:string , studentData: TStudent) =>{

    
    const student = new User(studentData)
    // if(await student.isUserExist(studentData.id)){
    //     throw new Error("user already exists!")
    // }

    // if password not given then use default password
    const user : NewUser = {}

    user.password = password || config.default_pass as string;

    user.role = "student"

    user.id = '201001912'

    // create a user 
    const result = await User.create(user)

    if(Object.keys(result).length){
        studentData.id = result.id;
        studentData.user = result._id
    }

    
    // const result = student.save()
    return result
}

export const UserServices = {
    createStudentIntoDB
}