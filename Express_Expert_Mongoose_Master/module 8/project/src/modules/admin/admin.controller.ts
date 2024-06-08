import catchAsync from "../../utils/catchAsync";
import { AdminServices } from "./admin.service";


const getAllAdmin = catchAsync(async(req,res) =>{
    const result = await AdminServices.getAllAdminFromDB()

    res.status(200).json({
        success: true,
        message: "All Admin Retrive Successfully",
        data:result
    })
})


const getSingleAdmin = catchAsync(async(req,res) =>{
    const {id} = req.params
    const result = await AdminServices.getSingleAdminFromDB(id)

    res.status(200).json({
        success: true,
        message: " Admin Retrive Successfully",
        data:result
    })
})

const deleteAdmin = catchAsync(async(req,res) =>{
    const {id} = req.params
    const result = await AdminServices.deleteAdminFromDB(id)

    res.status(200).json({
        success: true,
        message:"Admin Deleted Successfully",
        data:result
    })
})

export const AdminControllers = {
    getAllAdmin,
    getSingleAdmin,
    deleteAdmin
} 