import config from "../../app/config";
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";


const loginUser = catchAsync(async(req,res) =>{
    const result = await authServices.loginUser(req.body)
    const {refreshToken,accessToken} = result

    res.cookie('refreshToken',refreshToken,{
        secure: config.node_env === 'production',
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"login user successfully",
        data:{
            accessToken,
            
        }
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

const refreshToken = catchAsync(async(req,res) =>{
    const {refreshToken} = req.cookies
    const result = await authServices.refreshTokenService(refreshToken)
    

    res.status(200).json({
        success:true,
        message:"Access Token is retrive successfully",
        data:result
    })

    // return result

})

const forgetPassword = catchAsync(async(req,res) =>{
    const userId = req.body.id
    const result = await authServices.forgetPassword(userId)

    res.status(200).json({
        success:true,
            message:"Reset Link is generated successfully",
        data: result
    })


})
const resetPassword = catchAsync(async(req,res) =>{
    const token = req.headers.authorization
    
    const result = await authServices.resetPassword(req.body,token as string)

    res.status(200).json({
        success:true,
            message:"Password Reset successfully",
        data: result
    })


})
export const authController = {
    loginUser,
    changePassword,
    refreshToken,
    forgetPassword,
    resetPassword
}

