import catchAsync from "../../utils/catchAsync";
import { facultyServices } from "./faculty.service";

const getAllFaculty = catchAsync(async(req,res) =>{
    
    const result = await facultyServices.getAllFacultyFromDB(req.query)
    
    res.status(200).json({
        success:true,
        message: "All Faculty Retrive Successfully",
        data : result
    })
})

export const facultyControlers = {
    getAllFaculty
}