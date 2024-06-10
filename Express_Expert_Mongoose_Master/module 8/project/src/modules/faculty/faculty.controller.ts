import catchAsync from "../../utils/catchAsync";
import { facultyServices } from "./faculty.service";

const getAllFaculty = catchAsync(async(req,res) =>{
    console.log(req.cookies)
    // console.log(req.user)
    
    const result = await facultyServices.getAllFacultyFromDB(req.query)
    
    res.status(200).json({
        success:true,
        message: "All Faculty Retrive Successfully",
        data : result
    })
})

const getSingleFaculty = catchAsync(async(req,res) =>{
    const {id} = req.params;
    const result = await facultyServices.getSingleFacultyFromDB(id)

    res.status(200).json({
        success: true,
        message: "Faculty Retrive Successfully",
        data:result

    })

})
const updateFaculty = catchAsync(async(req,res) =>{
    // const {id} = req.params;
    // const result = await facultyServices.updateFacultyIntoDB(id,req.body)

    res.status(200).json({
        success: true,
        message: "Faculty updated Successfully",
        // data:result1

    })

})
const deleteFaculty = catchAsync(async(req,res) =>{
    const {id} = req.params;
    const result = await facultyServices.deleteFacultyFromDB(id)

    res.status(200).json({
        success: true,
        message: "Faculty Deleted Successfully",
        data:result

    })

})

export const facultyControlers = {
    getAllFaculty,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
}