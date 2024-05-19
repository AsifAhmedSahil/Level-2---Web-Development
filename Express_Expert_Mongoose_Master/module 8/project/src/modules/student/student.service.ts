
import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (studentData: Student) =>{

    //const result = await StudentModel.create(student)
    const student = new StudentModel(studentData)

    if(await student.isUserExist(studentData.id)){
        throw new Error("user already exist!")
    }

    const result = student.save() //build in instance method *** 
    return result;
}

const getAllStudentsFromDB = async () =>{
    const result = await StudentModel.find()
    return result
}

const getSingleStudentFromDB = async (id:string) =>{
    const result = await StudentModel.find({id})
    return result
}



export const studentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
}