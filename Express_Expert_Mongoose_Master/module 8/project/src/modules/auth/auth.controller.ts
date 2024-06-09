import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";


const loginUser = catchAsync(async(req,res) =>{
    const result = await authServices.loginUser(req.body)

    res.status(200).json({
        success:true,
        message:"login user successfully",
        data:result
    })

    return result
})

const changePassword = catchAsync(async(req,res) =>{
    
    
    const {...passwordData} = req.body
    const result = await authServices.changePassword(req.user,passwordData)

    res.status(200).json({
        success:true,
        message:"Password is updated successfully",
        data: result
    })

    // return result
})

export const authController = {
    loginUser,
    changePassword
}