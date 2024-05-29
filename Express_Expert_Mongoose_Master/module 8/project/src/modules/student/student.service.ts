

import { Student } from "../student.model";
// import { TStudent } from "./student.interface";



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
    const result = await Student.find({id}).populate("academicSemester").populate({
        path: "academicDepartment",
        populate: {
            path:"academicFaculty"
        }
    })
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