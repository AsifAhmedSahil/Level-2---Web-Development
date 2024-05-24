
import { error } from "console";
import { Student } from "../student.model";
import { TStudent } from "./student.interface";

const createStudentIntoDB = async (studentData: TStudent) =>{

    // build in ****
    // const result = await Student.create(studentData)
    // return result;

    // custom instance
    const student = new Student(studentData)
    if(await student.isUserExist(studentData.id)){
        throw new Error("user already exists!")
    }
    const result = student.save()
    return result
}

const getAllStudentsFromDB = async () =>{
    const result = await Student.find()
    return result
}

const getSingleStudentFromDB = async (id:string) =>{
    const result = await Student.find({id})
    return result
}



export const studentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
}