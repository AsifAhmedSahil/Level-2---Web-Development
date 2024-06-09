// import { User } from "../user/user.model";
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import config from "../../app/config";
import jwt from 'jsonwebtoken'



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

    const accessToken = jwt.sign(jwtPayload,config.jwt_access_secret as string,{expiresIn: '10d'})

    
    return {accessToken,needsPasswordChange:user?.needPasswordChange}

}

export const authServices = {
    loginUser
}