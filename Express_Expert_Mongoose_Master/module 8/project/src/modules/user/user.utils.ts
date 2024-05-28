import { TAcademicSemester } from "../academicSemester/academicSemester.interface"
import { User } from "./user.model"


const findLastStudentId = async () =>{
    const lastStudent = await User.findOne(
        {
            role:'student'
        },
        {
            id:1,
            _id:0
        },
    )
    .sort({
        createdAt: -1
    })
    .lean()

    return lastStudent?.id ? lastStudent.id.substring(6) : undefined
}


export const generateStudentId = async (payload: TAcademicSemester) =>{
    // first time id 0000
    const currentId =await findLastStudentId() || (0).toString()
    console.log(currentId)
    let incrementId = (Number(currentId) + 1).toString().padStart(4,"0")
    console.log(incrementId)

    

    incrementId = `${payload.year}${payload.code}${incrementId}`

    return incrementId


}