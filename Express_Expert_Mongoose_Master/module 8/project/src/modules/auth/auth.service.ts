// import { User } from "../user/user.model";
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import config from "../../app/config";
import  { JwtPayload } from 'jsonwebtoken'
import bcrypt from "bcrypt"
import { createToken } from "./auth.utils";



const loginUser = async(payload:TLoginUser) =>{

    // check user is exist in database or not

    const user = await User.isUserExistsByCustomId(payload.id)
   
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"This user is not exist in database")
    }

    // check user is already deleted or not
    const isDeleted = user?.isDeleted
    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already deleted!")
    }

    // check user is blocked or not
    const userStatus = user?.status
    if(userStatus === 'blocked'){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already blocked!")
    }

    // check the password is matched or not
    if(!(await User.isPasswordMatched(payload?.password,user?.password))){
        throw new AppError(httpStatus.FORBIDDEN,"Password do not matched")
    }

    // create token and send to the client

    const jwtPayload = {
        userId: user.id,
        role:user.role
    }

    const accessToken = createToken(jwtPayload,config.jwt_access_secret as string,'10d')
    const refreshToken = createToken(jwtPayload,config.jwt_refresh_secret as string,'365d')

    
    return {accessToken,refreshToken,needsPasswordChange:user?.needPasswordChange}

}

const changePassword = async(userData: JwtPayload , payload: {oldPassword:string , newPassword:string}) =>{

    // check user is exist in database or not

    const user = await User.isUserExistsByCustomId(userData.userId)
   
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"This user is not exist in database")
    }

    // check user is already deleted or not
    const isDeleted = user?.isDeleted
    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already deleted!")
    }

    // check user is blocked or not
    const userStatus = user?.status
    if(userStatus === 'blocked'){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already blocked!")
    }

    // check the password is matched or not
    if(!(await User.isPasswordMatched(payload?.oldPassword,user?.password))){
        throw new AppError(httpStatus.FORBIDDEN,"Password do not matched")
    }

    // hash new password before update

    const newHashedPassedword = await bcrypt.hash(payload?.newPassword,Number(config.bcrypt_salt_rounds))

    


    await User.findOneAndUpdate({
        id:userData.userId,
        role:userData.role
    },{
        password:newHashedPassedword,
        needPasswordChange: false,
        passwordChangeAt: new Date()
    })

    return null;

}

export const authServices = {
    loginUser,
    changePassword
}