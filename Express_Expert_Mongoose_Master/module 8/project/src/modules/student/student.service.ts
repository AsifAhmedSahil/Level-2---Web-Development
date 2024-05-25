

import { Student } from "../student.model";
// import { TStudent } from "./student.interface";



const getAllStudentsFromDB = async () =>{
    const result = await Student.find()
    return result
}

const getSingleStudentFromDB = async (id:string) =>{
    const result = await Student.find({id})
    return result
}
const deleteStudentFromDB = async (id:string) =>{
    const result = await Student.updateOne({id},{isDeleted:true})
    return result
}



export const studentServices = {
    
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB
}