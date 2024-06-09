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
    
    console.log(req.body,req.user)
    const user = req.user
    const {...passwordData} = req.body
    const result = await authServices.changePassword(user,passwordData)

    res.status(200).json({
        success:true,
        message:"login user successfully",
        data: result
    })

    // return result
})

export const authController = {
    loginUser,
    changePassword
}